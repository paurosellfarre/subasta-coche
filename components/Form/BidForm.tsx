"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

import { isTimeBetween } from "@utils/time"

async function fetchHigherBid_ByAutomobileId(automobileId: number) {
  const bid = await fetch(`/api/bid/${automobileId}`)
  if (bid.ok) return bid.json()
  return false
}

export default function Bid({
  automobileId,
  start,
  end,
}: {
  automobileId: number
  start?: Date | null | undefined
  end?: Date | null | undefined
}) {
  const { data } = useSession()
  const [isFetching, setIsFetching] = useState(false)
  const [isBiddable, setIsBiddable] = useState(false)

  const [highestBid, setHighestBid] = useState({
    amount: 0,
    userId: 0,
  })
  const [newBid, setNewBid] = useState(highestBid.amount + 100)

  async function getHighestBid() {
    setIsBiddable(isTimeBetween(start, end))
    //If auction is not active, stop polling
    if (!isBiddable) return

    const bid = await fetchHigherBid_ByAutomobileId(automobileId)
    if (!bid) return
    setHighestBid({
      amount: bid.amount,
      userId: bid.userId,
    })
  }

  //POST request to create a new bid, if ok, update the highest bid
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!isBiddable) return
    setIsFetching(true)

    e.preventDefault()
    await fetch("/api/bid", {
      method: "POST",
      body: JSON.stringify({
        amount: newBid,
        automobile: {
          connect: {
            id: automobileId,
          },
        },
      }),
    }).then((res) => {
      if (res.ok) {
        setHighestBid({
          amount: newBid,
          userId: Number(data?.user?.id),
        })
      }
    })

    setIsFetching(false)
  }

  //Polling function to fetch the current price every 5 seconds if current date is between start and stop
  useEffect(() => {
    //Call the function to have the initial value without waiting 5 seconds
    getHighestBid()

    const interval = setInterval(async () => {
      //Call the function every 5 seconds to update the highest price
      getHighestBid()
    }, 5000)

    return () => clearInterval(interval)
  })

  return (
    <form
      className="grid mt-4 sm:mt-12 shadow overflow-hidden rounded-md"
      onSubmit={handleSubmit}
    >
      <div className="px-4 py-5 sm:px-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 text-center">
          🤑 Pujar
        </h2>
        {data?.user?.id !== highestBid.userId && (
          <p className="mt-1 text-red-500 font-bold">
            {isBiddable ? "Cuidado! No estas ganando!" : "Has perdido!"}
          </p>
        )}
        <p className="mt-1 text-gray-500">
          Puja más alta: {highestBid.amount}€
        </p>
      </div>
      <input
        type="number"
        name="bid"
        id="bid"
        className="pb-2 text-center font-bold text-2xl"
        min={highestBid.amount + 100}
        value={newBid || highestBid.amount + 100}
        onChange={(e) => setNewBid(Number(e.target.value))}
      />
      <button
        type="submit"
        disabled={isFetching || !isBiddable}
        className="bg-gray-700 text-white py-2 rounded-md text-sm font-medium"
      >
        {isBiddable ? "Pujar Ahora!" : "Puja no disponible"}
      </button>
    </form>
  )
}
