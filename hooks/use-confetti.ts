// hooks/use-confetti.ts
"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  color: string
  size: number
  rotation: number
  rotationSpeed: number
  shape: "rect" | "circle" | "star"
  opacity: number
  decay: number
}

const COLORS = [
  "#378ADD", // primary blue
  "#BA7517", // instituto gold
  "#22c55e", // success green
  "#f59e0b", // amber
  "#e879f9", // pink
  "#38bdf8", // sky
  "#ffffff", // white
]

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a)
}

function createParticle(canvas: HTMLCanvasElement): Particle {
  const angle = randomBetween(-Math.PI / 2 - 0.5, -Math.PI / 2 + 0.5)
  const speed = randomBetween(8, 18)
  const shapes: Particle["shape"][] = ["rect", "circle", "star"]
  return {
    x: randomBetween(canvas.width * 0.2, canvas.width * 0.8),
    y: canvas.height + 10,
    vx: Math.cos(angle) * speed * randomBetween(0.5, 1.5),
    vy: Math.sin(angle) * speed,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: randomBetween(6, 14),
    rotation: randomBetween(0, Math.PI * 2),
    rotationSpeed: randomBetween(-0.15, 0.15),
    shape: shapes[Math.floor(Math.random() * shapes.length)],
    opacity: 1,
    decay: randomBetween(0.012, 0.022),
  }
}

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  const spikes = 5
  const inner = r * 0.45
  ctx.beginPath()
  for (let i = 0; i < spikes * 2; i++) {
    const radius = i % 2 === 0 ? r : inner
    const angle = (i * Math.PI) / spikes - Math.PI / 2
    const px = x + Math.cos(angle) * radius
    const py = y + Math.sin(angle) * radius
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
  }
  ctx.closePath()
  ctx.fill()
}

/**
 * Dispara una animación de confetti canvas en el body.
 * Se llama manualmente con `fire()`. Auto-cleanup al terminar.
 */
export function useConfetti() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animRef   = useRef<number | null>(null)

  const fire = () => {
    // Crear canvas si no existe
    let canvas = document.getElementById("confetti-canvas") as HTMLCanvasElement | null
    if (!canvas) {
      canvas = document.createElement("canvas")
      canvas.id = "confetti-canvas"
      document.body.appendChild(canvas)
    }
    canvasRef.current = canvas

    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Generar partículas en dos ráfagas (izquierda + derecha + centro)
    const particles: Particle[] = []
    const BURST = 120
    for (let i = 0; i < BURST; i++) {
      particles.push(createParticle(canvas))
    }

    const gravity = 0.35
    const wind    = 0.02

    const tick = () => {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        p.vy += gravity
        p.vx += wind * (Math.random() - 0.5)
        p.x  += p.vx
        p.y  += p.vy
        p.rotation += p.rotationSpeed
        p.opacity  -= p.decay

        if (p.opacity <= 0 || p.y > canvas!.height + 20) {
          particles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = Math.max(0, p.opacity)
        ctx.fillStyle   = p.color
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)

        switch (p.shape) {
          case "rect":
            ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
            break
          case "circle":
            ctx.beginPath()
            ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
            ctx.fill()
            break
          case "star":
            drawStar(ctx, 0, 0, p.size / 2)
            break
        }
        ctx.restore()
      }

      if (particles.length > 0) {
        animRef.current = requestAnimationFrame(tick)
      } else {
        // Limpiar canvas cuando terminan todas las partículas
        ctx.clearRect(0, 0, canvas!.width, canvas!.height)
      }
    }

    if (animRef.current) cancelAnimationFrame(animRef.current)
    animRef.current = requestAnimationFrame(tick)
  }

  // Cleanup al desmontar
  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      const canvas = document.getElementById("confetti-canvas")
      canvas?.remove()
    }
  }, [])

  return { fire }
}