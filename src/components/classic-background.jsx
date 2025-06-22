"use client"

import { useEffect, useRef } from "react"

export function ClassicBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let animationId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Classic geometric shapes
    const shapes = []
    const shapeCount = 12

    // Initialize shapes
    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 20 + Math.random() * 60,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        type: Math.floor(Math.random() * 3), // 0: circle, 1: square, 2: triangle
        opacity: 0.1 + Math.random() * 0.2,
        color: i % 4, // 4 classic colors
      })
    }

    // Classic color palette
    const colors = [
      { r: 99, g: 102, b: 241 }, // Indigo
      { r: 139, g: 92, b: 246 }, // Violet
      { r: 236, g: 72, b: 153 }, // Pink
      { r: 14, g: 165, b: 233 }, // Sky blue
    ]

    const drawCircle = (ctx, x, y, size, color, opacity) => {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.3)`
      ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.6)`
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
      ctx.restore()
    }

    const drawSquare = (ctx, x, y, size, rotation, color, opacity) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = opacity
      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.2)`
      ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.5)`
      ctx.lineWidth = 2
      ctx.fillRect(-size / 2, -size / 2, size, size)
      ctx.strokeRect(-size / 2, -size / 2, size, size)
      ctx.restore()
    }

    const drawTriangle = (ctx, x, y, size, rotation, color, opacity) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = opacity
      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.25)`
      ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.5)`
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, -size / 2)
      ctx.lineTo(-size / 2, size / 2)
      ctx.lineTo(size / 2, size / 2)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shapes.forEach((shape) => {
        // Update position
        shape.x += shape.vx
        shape.y += shape.vy
        shape.rotation += shape.rotationSpeed

        // Wrap around edges
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size

        // Gentle opacity animation
        shape.opacity = 0.15 + Math.sin(Date.now() * 0.001 + shape.x * 0.01) * 0.1

        const color = colors[shape.color]

        // Draw shape based on type
        switch (shape.type) {
          case 0:
            drawCircle(ctx, shape.x, shape.y, shape.size, color, shape.opacity)
            break
          case 1:
            drawSquare(ctx, shape.x, shape.y, shape.size, shape.rotation, color, shape.opacity)
            break
          case 2:
            drawTriangle(ctx, shape.x, shape.y, shape.size, shape.rotation, color, shape.opacity)
            break
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
