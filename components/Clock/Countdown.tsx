"use client"

import { useState, useEffect } from "react"

export default function Countdown({
  start,
  end,
}: {
  start?: Date | null
  end?: Date | null
}) {
  let [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const calculateTimeLeft = () => {
    if (!end) return
    const difference = +new Date(end) - +new Date()

    if (difference > 0) {
      setTimeLeft({
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }
  }

  useEffect(() => {
    setTimeout(() => {
      calculateTimeLeft()
    }, 1000)
  }, [timeLeft])

  return (
    <div className="mt-4 flex items-center justify-center text-3xl text-center">
      <div className="w-20 text-yellow-500">
        <div className="font-mono leading-none">{timeLeft.hours}</div>
        <div className="font-mono uppercase text-sm leading-none">Horas</div>
      </div>
      <div className="w-20 text-yellow-500">
        <div className="font-mono leading-none">{timeLeft.minutes}</div>
        <div className="font-mono uppercase text-sm leading-none">Minutos</div>
      </div>
      <div className="w-20 text-yellow-500">
        <div className="font-mono leading-none">{timeLeft.seconds}</div>
        <div className="font-mono uppercase text-sm leading-none">Segundos</div>
      </div>
    </div>
  )
}
