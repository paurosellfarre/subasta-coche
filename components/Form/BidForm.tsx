"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

async function fetchHigherBid_ByAutomobileId(automobileId: number) {
  const bid = await fetch(`/api/bid/${automobileId}`)
  return bid.json()
}

export default function Bid({ automobileId }: { automobileId: number }) {
  const { data } = useSession()
  const [isFetching, setIsFetching] = useState(false)

  const [highestBid, setHighestBid] = useState({
    amount: 0,
    userId: 0,
  })
  const [newBid, setNewBid] = useState(highestBid.amount + 100)

  //POST request to create a new bid, if ok, update the highest bid
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  //Polling function to fetch the current price every 5 seconds
  useEffect(() => {
    const interval = setInterval(async () => {
      const bid = await fetchHigherBid_ByAutomobileId(automobileId)
      setHighestBid({
        amount: bid.amount,
        userId: bid.userId,
      })
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
            Cuidado! No estas ganando!
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
        disabled={isFetching}
        className="bg-gray-700 text-white py-2 rounded-md text-sm font-medium"
      >
        Pujar ahora!
      </button>
    </form>
  )
}
