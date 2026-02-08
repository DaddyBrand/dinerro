"use client"

import { useCallback, useEffect, useState } from "react"

export interface Slide {
  imageUrl: string
  caption: string
}

interface PhotoSlideshowProps {
  slides: Slide[]
}

export function PhotoSlideshow({ slides }: PhotoSlideshowProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const goNext = useCallback(() => {
    setDirection("right")
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const goPrev = () => {
    setDirection("left")
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(goNext, 5000)
    return () => clearInterval(interval)
  }, [goNext])

  if (slides.length === 0) return null

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative overflow-hidden rounded-xl border border-border neon-border bg-card/50 backdrop-blur-sm">
        {/* Image container */}
        <div className="relative aspect-[4/5] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={`${slide.imageUrl}-${index}`}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === current
                  ? "opacity-100 scale-100"
                  : direction === "right"
                    ? "opacity-0 translate-x-full scale-95"
                    : "opacity-0 -translate-x-full scale-95"
              }`}
            >
              <img
                src={slide.imageUrl || "/placeholder.svg"}
                alt={slide.caption}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />
            </div>
          ))}

          {/* Caption */}
          <div className="absolute bottom-0 inset-x-0 p-4 z-10">
            <p className="text-sm text-foreground font-medium neon-text-subtle text-center">
              {slides[current]?.caption}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between p-3 bg-card/80 backdrop-blur-sm">
          <button
            onClick={goPrev}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === current ? "bg-primary w-4" : "bg-muted-foreground/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
