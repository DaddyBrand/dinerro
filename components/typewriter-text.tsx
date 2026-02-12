"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { loversQuarrel } from "@/lib/fonts"

export default function TypewriterText({
  text,
  speed = 40, // ms per character (increase for slower)
}: {
  text: string
  speed?: number
}) {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <motion.pre
  className={`${loversQuarrel.className} whitespace-pre-wrap xs:text-xl sm:text-2xl md:text-2xl font-semibold leading-tight sm:px-4  text-[#3b2f1e]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayedText}
    </motion.pre>
  )
}
