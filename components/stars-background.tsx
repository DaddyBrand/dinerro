"use client"

import { motion } from "framer-motion"

interface Props {
  dense?: boolean
  dimmed?: boolean
}

export default function StarsBackground({ dense = true, dimmed }: Props) {
  const stars = Array.from({ length: dense ? 220 : 120 })

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: dimmed ? 0.25 : Math.random(),
          }}
          animate={{
            opacity: dimmed ? 0.25 : [0.2, 1, 0.3],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            repeatType: "mirror",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}
