"use client"

import { motion } from "framer-motion"

export function GradientOrbs() {
  const orbs = [
    {
      id: 1,
      size: "w-96 h-96",
      position: "top-1/4 left-1/4",
      gradient: "bg-gradient-to-br from-slate-300/20 via-gray-200/10 to-transparent",
      animation: {
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, -30, 0],
      },
      duration: 20,
    },
    {
      id: 2,
      size: "w-80 h-80",
      position: "top-1/3 right-1/4",
      gradient: "bg-gradient-to-bl from-gray-400/20 via-slate-300/10 to-transparent",
      animation: {
        scale: [1, 0.8, 1.1, 1],
        x: [0, -40, 0],
        y: [0, 40, 0],
      },
      duration: 25,
    },
    {
      id: 3,
      size: "w-72 h-72",
      position: "bottom-1/3 left-1/3",
      gradient: "bg-gradient-to-tr from-slate-400/20 via-gray-300/10 to-transparent",
      animation: {
        scale: [1, 1.3, 0.9, 1],
        x: [0, 30, -20, 0],
        y: [0, -20, 30, 0],
      },
      duration: 18,
    },
    {
      id: 4,
      size: "w-64 h-64",
      position: "bottom-1/4 right-1/3",
      gradient: "bg-gradient-to-tl from-gray-500/20 via-slate-400/10 to-transparent",
      animation: {
        scale: [1, 0.7, 1.2, 1],
        x: [0, -25, 35, 0],
        y: [0, 25, -15, 0],
      },
      duration: 22,
    },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute ${orb.size} ${orb.position} ${orb.gradient} rounded-full blur-3xl`}
          animate={orb.animation}
          transition={{
            duration: orb.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
