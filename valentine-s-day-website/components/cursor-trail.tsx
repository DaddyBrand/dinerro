"use client"

import { useEffect, useRef } from "react"

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; size: number; life: number; maxLife: number; vx: number; vy: number }[] = []

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 2,
          life: 0,
          maxLife: 30 + Math.random() * 20,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 1,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life++
        p.x += p.vx
        p.y += p.vy
        p.vy -= 0.02

        const alpha = 1 - p.life / p.maxLife
        ctx.save()
        ctx.globalAlpha = alpha * 0.6
        ctx.fillStyle = `hsl(340, 82%, 55%)`
        ctx.shadowBlur = 10
        ctx.shadowColor = `hsl(340, 82%, 55%)`

        // Draw a small heart shape
        const s = p.size * (1 - p.life / p.maxLife)
        ctx.beginPath()
        ctx.moveTo(p.x, p.y - s / 4)
        ctx.bezierCurveTo(p.x + s / 2, p.y - s, p.x + s, p.y - s / 4, p.x, p.y + s / 2)
        ctx.moveTo(p.x, p.y - s / 4)
        ctx.bezierCurveTo(p.x - s / 2, p.y - s, p.x - s, p.y - s / 4, p.x, p.y + s / 2)
        ctx.fill()
        ctx.restore()

        if (p.life >= p.maxLife) {
          particles.splice(i, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-30 pointer-events-none"
      aria-hidden="true"
    />
  )
}
