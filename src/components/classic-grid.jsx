"use client"

import { motion } from "framer-motion"

export function ClassicGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated grid lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Diagonal accent lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, rgba(165, 243, 252, 0.15) 49%, rgba(165, 243, 252, 0.15) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(165, 243, 252, 0.15) 49%, rgba(165, 243, 252, 0.15) 51%, transparent 52%)
          `,
          backgroundSize: "100px 100px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "100px 100px"],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}

