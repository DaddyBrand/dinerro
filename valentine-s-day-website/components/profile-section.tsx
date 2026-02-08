"use client"

import { useState, useEffect } from "react"

interface ProfileSectionProps {
  name: string
  message: string
  avatarUrl?: string
}

export function ProfileSection({ name, message, avatarUrl }: ProfileSectionProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`flex flex-col items-center gap-4 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {/* Avatar */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary neon-border">
          {avatarUrl ? (
            <img src={avatarUrl || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-secondary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
          )}
        </div>
        {/* Online indicator */}
        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-background" />
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold neon-text font-mono tracking-wider">
        {name}
      </h1>

      {/* Message */}
      <p className="text-sm text-muted-foreground max-w-xs text-center leading-relaxed">
        {message}
      </p>

      {/* Views counter - guns.lol style */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span className="font-mono">forever yours</span>
      </div>
    </div>
  )
}
