"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import StarsBackground from "@/components/stars-background"
import Envelope from "@/components/envelope"
import LetterPaper from "@/components/letter-paper"


export default function SpecialMessagePage() {
  const [opened, setOpened] = useState(false)

  return (
    <main className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Stars */}
      <StarsBackground dense dimmed={opened} />

      {/* Envelope + Letter */}
      <div className="relative z-10">
        {!opened && (
          <Envelope onOpen={() => setOpened(true)} />
        )}

        {opened && (
          <LetterPaper />
          
        )}
      </div>
    </main>
  )
}
