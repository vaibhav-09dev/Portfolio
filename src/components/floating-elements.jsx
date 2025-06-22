"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  const elements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 20 + Math.random() * 40,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: 15 + Math.random() * 10,
    delay: Math.random() * 5,
    shape: Math.floor(Math.random() * 3), // 0: circle, 1: square, 2: diamond
    color: ["slate", "gray", "stone", "zinc"][Math.floor(Math.random() * 4)],
  }))

  const getShapeClasses = (shape, color, size) => {
    const baseClasses = `absolute opacity-20 border-2`
    const colorClasses = {
      slate: "border-slate-400/40 bg-slate-300/10",
      gray: "border-gray-400/40 bg-gray-300/10",
      stone: "border-stone-400/40 bg-stone-300/10",
      zinc: "border-zinc-400/40 bg-zinc-300/10",
    }

    const shapeClasses = {
      0: "rounded-full", // circle
      1: "rounded-lg", // square
      2: "rounded-lg rotate-45", // diamond
    }

    return `${baseClasses} ${colorClasses[color]} ${shapeClasses[shape]}`
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={getShapeClasses(element.shape, element.color, element.size)}
          style={{
            width: element.size,
            height: element.size,
            left: `${element.initialX}%`,
            top: `${element.initialY}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: element.shape === 2 ? [45, 135, 45] : [0, 360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}
    </div>
  )
}
