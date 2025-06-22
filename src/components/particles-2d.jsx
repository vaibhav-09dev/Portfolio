"use client"

import { useEffect, useRef } from "react"

export function Particles2D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const particles = []
    const particleCount = 150

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.2

        // Gray color variations
        const colors = [
          { r: 30, g: 41, b: 59 }, // slate-800
          { r: 71, g: 85, b: 105 }, // slate-600
          { r: 100, g: 116, b: 139 }, // slate-500
          { r: 148, g: 163, b: 184 }, // slate-400
          { r: 156, g: 163, b: 175 }, // gray-400
          { r: 107, g: 114, b: 128 }, // gray-500
          { r: 75, g: 85, b: 99 }, // gray-600
          { r: 55, g: 65, b: 81 }, // gray-700
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0

        // Slight opacity animation
        this.opacity += Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.01
        this.opacity = Math.max(0.1, Math.min(0.7, this.opacity))
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.save()
            ctx.globalAlpha = ((100 - distance) / 100) * 0.1
            ctx.strokeStyle = `rgb(${particles[i].color.r}, ${particles[i].color.g}, ${particles[i].color.b})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
