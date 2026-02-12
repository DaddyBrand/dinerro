"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isPast, setIsPast] = useState(false)

  useEffect(() => {
    const valentines = new Date(new Date().getFullYear(), 1, 14) // Feb 14
    const now = new Date()

    // If Valentine's is past this year, show next year
    if (now > valentines) {
      const nextYear = new Date(now.getFullYear() + 1, 1, 14)
      const diff = nextYear.getTime() - now.getTime()
      if (diff < 0) {
        setIsPast(true)
        return
      }
    }

    const calculate = () => {
      const now = new Date()
      let target = new Date(now.getFullYear(), 1, 14)
      if (now > target) {
        target = new Date(now.getFullYear() + 1, 1, 14)
      }
      
      const diff = target.getTime() - now.getTime()
      
      if (diff <= 0) {
        setIsPast(true)
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [])

  const blocks = isPast
    ? [
        { label: "HAPPY", value: "V" },
        { label: "VALENTINE'S", value: "DAY" },
      ]
    : [
        { label: "DAYS", value: timeLeft.days },
        { label: "HRS", value: timeLeft.hours },
        { label: "MIN", value: timeLeft.minutes },
        { label: "SEC", value: timeLeft.seconds },
      ]

  return (
    <div className="flex items-center gap-2">
      {blocks.map((block, i) => (
        <div key={block.label} className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-lg bg-card/80 border border-border backdrop-blur-sm flex items-center justify-center neon-border">
            <span className="text-lg font-bold font-mono text-primary">
              {typeof block.value === "number"
                ? String(block.value).padStart(2, "0")
                : block.value}
            </span>
          </div>
          <span className="text-[9px] text-muted-foreground mt-1 font-mono tracking-widest">
            {block.label}
          </span>
          {i < blocks.length - 1 && !isPast && (
            <span className="sr-only">, </span>
          )}
        </div>
      ))}
    </div>
  )
}
