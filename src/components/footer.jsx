"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div className="mb-6 md:mb-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <motion.h3
                className="text-xl font-bold text-blue-400 mb-2"
                animate={{
                  textShadow: ["0 0 10px #3b82f6", "0 0 20px #3b82f6", "0 0 10px #3b82f6"],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {"<DevName />"}
              </motion.h3>
              <p className="text-gray-400">Building the web, one line of code at a time.</p>
            </motion.div>

            <div className="flex space-x-6">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  whileHover={{
                    scale: 1.3,
                    rotate: 360,
                    color: "#3b82f6",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            className="border-t border-gray-800 mt-8 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-gray-400 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Made with{" "}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                }}
              >
                <Heart className="h-4 w-4 text-red-500 mx-2" />
              </motion.span>
              by Alex Johnson
            </motion.p>
            <motion.p
              className="text-gray-500 text-sm mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              © 2024 All rights reserved.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
