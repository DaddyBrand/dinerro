"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart } from "lucide-react"

const LETTER_SECTIONS = [
  {
    title: "Things I Love About You",
    body: "I love how you make me feel safe being myself and how much you know me and how much you love me even tho we fight you show me love in quiet ways and how you stay with me not just around me I love that so much thank you for being you you notice things people miss I love that.",
  },
  {
    title: "Why I Choose You",
    body: "You choose me our love is so different and I love you I feel so at peace with you even on hard days I still want you being with you feels right you told me you made me be me no one else did that you will do a lot for me id rather go through things with you then without you.",
  },
  {
    title: "What You Mean To Me",
    body: "You metter to me in a way thats hard to put into words you make me want to be better without asking me to change I love that you helped me see myself when I didnt know how you loved parts of me when I was insecure about things and taught me they werent unlovable loving you scares me because I dont want to hurt you again I hate that im the reason for our hardest moments and even after my mistakes you stayed and that means everything to me you make me want to grow not just for me but for us im still learning how to love you the right way you metter to me more then my fear even when I fuck up thank you so much I love you.",
  },
]

export default function LoveLetterPage() {
  const [visibleSections, setVisibleSections] = useState<number[]>([])

  useEffect(() => {
    LETTER_SECTIONS.forEach((_, i) => {
      setTimeout(() => {
        setVisibleSections((prev) => [...prev, i])
      }, 600 * (i + 1))
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
          <Heart className="w-8 h-8 text-primary mx-auto mb-4 animate-pulse" />
          <h1 className="text-3xl md:text-5xl font-bold text-foreground neon-text mb-3">
            A Letter For You
          </h1>
          <p className="text-muted-foreground font-mono text-sm">
            from my heart to yours
          </p>
          <div className="mt-6 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        {/* Letter sections */}
        <div className="w-full max-w-2xl flex flex-col gap-12">
          {LETTER_SECTIONS.map((section, i) => (
            <div
              key={section.title}
              className={`transition-all duration-1000 ${
                visibleSections.includes(i)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative rounded-xl border border-border bg-card/60 backdrop-blur-sm p-8 md:p-10 neon-border">
                {/* Section number */}
                <span className="absolute -top-3 left-6 bg-background px-3 font-mono text-xs text-primary neon-text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-foreground neon-text-subtle mb-6">
                  {section.title}
                </h2>

                {/* Divider */}
                <div className="w-16 h-px bg-primary/40 mb-6" />

                {/* Body text */}
                <p className="text-foreground/85 leading-relaxed text-base md:text-lg">
                  {section.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center animate-slide-in" style={{ animationDelay: "2.5s" }}>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-primary font-mono text-sm neon-text-subtle mb-2">
            forever yours,
          </p>
          <p className="text-foreground text-lg font-bold neon-text-subtle">
            with all my love
          </p>
          <div className="flex items-center justify-center gap-1 mt-6">
            {[...Array(3)].map((_, i) => (
              <Heart
                key={`heart-${i}`}
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
