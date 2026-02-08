"use client"

import { useState } from "react"

interface BackgroundVideoProps {
  videoUrl: string
}

export function BackgroundVideo({ videoUrl }: BackgroundVideoProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80 z-10" />
      {/* Neon glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 animate-pulse-glow z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/15 animate-pulse-glow z-10" style={{ animationDelay: "1.5s" }} />
      {/* Video */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${loaded ? "opacity-40" : "opacity-0"}`}
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setLoaded(true)}
      />
    </div>
  )
}
