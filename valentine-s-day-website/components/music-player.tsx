"use client"

import { useEffect, useRef, useState } from "react"

interface MusicPlayerProps {
  audioUrl: string
  songTitle?: string
  artist?: string
}

export function MusicPlayer({ audioUrl, songTitle = "Our Song", artist = "Valentine" }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }

    audio.addEventListener("timeupdate", updateProgress)
    return () => audio.removeEventListener("timeupdate", updateProgress)
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(() => {
        // Autoplay blocked by browser
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-3 rounded-full bg-card/90 border border-border px-4 py-2 backdrop-blur-xl neon-border">
        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Song info */}
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-medium text-foreground truncate max-w-32">{songTitle}</span>
          <span className="text-[10px] text-muted-foreground truncate max-w-32">{artist}</span>
        </div>

        {/* Progress bar */}
        <div className="w-20 h-1 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Visualizer bars */}
        <div className="flex items-end gap-0.5 h-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-0.5 bg-primary rounded-full transition-all ${isPlaying ? "animate-bounce" : ""}`}
              style={{
                height: isPlaying ? `${Math.random() * 12 + 4}px` : "4px",
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${0.4 + i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      <audio ref={audioRef} src={audioUrl} loop preload="auto" />
    </div>
  )
}
