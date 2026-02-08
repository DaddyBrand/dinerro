"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Star, Circle } from "lucide-react"

const BUCKET_LIST_ITEMS = [
  "Beat all the souls games ds3/ds2/ds1 all dat",
  "Take you to nyc to see the christmas tree",
  "Build you a home bc yea",
  "Build a setup together",
]

export default function BucketListPage() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    BUCKET_LIST_ITEMS.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, i])
      }, 400 * (i + 1))
    })
  }, [])

  return (
    <div className="scanlines relative min-h-screen bg-background overflow-hidden">
      {/* Background glow orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/8 animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-12 md:py-20">
        {/* Back button */}
        <Link
          href="/"
          className="self-start mb-8 ml-2 md:ml-8 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm">back</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-16 animate-slide-in">
          <Star className="w-8 h-8 text-primary mx-auto mb-4 animate-pulse" fill="currentColor" />
          <h1 className="text-3xl md:text-5xl font-bold text-foreground neon-text mb-3">
            Bucket List
          </h1>
          <p className="text-muted-foreground font-mono text-sm">
            things we gotta do together
          </p>
          <div className="mt-6 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        {/* Bucket list items */}
        <div className="w-full max-w-2xl flex flex-col gap-6">
          {BUCKET_LIST_ITEMS.map((item, i) => (
            <div
              key={`item-${i}`}
              className={`transition-all duration-700 ${
                visibleItems.includes(i)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6 md:p-8 neon-border group hover:border-primary/40 transition-colors duration-300">
                <div className="flex items-start gap-5">
                  {/* Number badge */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center">
                    <span className="font-mono text-sm text-primary neon-text-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Item text */}
                  <div className="flex-1 pt-1.5">
                    <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                      {item}
                    </p>
                  </div>

                  {/* Unchecked circle */}
                  <Circle className="flex-shrink-0 w-5 h-5 text-primary/30 mt-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center animate-slide-in" style={{ animationDelay: "2.5s" }}>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-primary font-mono text-sm neon-text-subtle mb-2">
            this is just the start
          </p>
          <p className="text-foreground text-lg font-bold neon-text-subtle">
            we got a whole life to check these off
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            {[...Array(3)].map((_, i) => (
              <Star
                key={`star-${i}`}
                className="w-4 h-4 text-primary animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
                fill="currentColor"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
