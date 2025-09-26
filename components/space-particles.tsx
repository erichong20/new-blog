"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  baseVx: number // Store original velocity for reset
  baseVy: number // Store original velocity for reset
}

export function SpaceParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 }) // Track mouse position

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const particleCount = Math.min(65, Math.floor(((canvas.width * canvas.height) / 15000) * 1.3))

      for (let i = 0; i < particleCount; i++) {
        const vx = (Math.random() - 0.5) * 0.3
        const vy = (Math.random() - 0.5) * 0.3

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx,
          vy,
          size: Math.random() * 1.5 + 0.5,
          baseVx: vx, // Store original velocity
          baseVy: vy, // Store original velocity
        })
      }

      particlesRef.current = particles
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY,
      }
    }

    const updateParticles = () => {
      const particles = particlesRef.current
      const mouse = mouseRef.current

      particles.forEach((particle) => {
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const influenceRadius = 150 // Radius of mouse influence

        if (distance < influenceRadius) {
          const influence = 1 - distance / influenceRadius // Stronger influence when closer
          const speedMultiplier = 1 + influence * 3.5 // Up to 4.5x speed when very close

          particle.vx = particle.baseVx * speedMultiplier
          particle.vy = particle.baseVy * speedMultiplier
        } else {
          particle.vx = particle.baseVx
          particle.vy = particle.baseVy
        }

        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })
    }

    const drawParticles = () => {
      ctx.fillStyle = "rgb(0, 0, 0)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current

      particles.forEach((particle) => {
        ctx.save()
        ctx.fillStyle = "rgb(0, 255, 65)" // Simple green color

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    // Initialize
    resizeCanvas()
    createParticles()
    animate()

    // Event listeners
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove) // Add mouse tracking

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove) // Clean up mouse listener
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
