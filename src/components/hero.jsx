"use client"

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { Github, Linkedin, Mail, Download, Code, Star, Users } from "lucide-react"
import { motion } from "framer-motion"
import BlurText from "@/components/ui/SplitText";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { Suspense, useState, useEffect } from "react"
import Image from "next/image"
import Navbar1 from "./Navbar";


function ClassicSphere() {
  return (
    <Sphere args={[1.2, 32, 32]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
        metalness={0.3}
      />
    </Sphere>
  )
}

function TypingAnimation({ text, delay = 0 }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }
    }, 100 + delay)

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay])

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        className="text-blue-400"
      >
        |
      </motion.span>
    </span>
  )
}
const words = ["Web Developer", "Freelancer", "Passionate CSE undergrad", "Tech-Driven problem solver"];
export function Hero() {
  const [activeImage, setActiveImage] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Array of developer images for the interactive gallery
  const images = [
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
  ]

  // Image captions
  const captions = ["Coding in the studio", "Speaking at TechConf 2023", "Working with the team"]

  // Stats data
  const stats = [
    { icon: Code, value: "50+", label: "Projects" },
    { icon: Star, value: "5", label: "Years Exp" },
    { icon: Users, value: "100+", label: "Happy Clients" },
  ]

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <>
   <div className="fixed top-0 left-0 w-full z-50">
        <Navbar1 />
      </div>
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden"
      >
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent animate-pulse-slow"></div>
          {/* Parallax Circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full opacity-10"
                style={{
                  width: `${100 + i * 80}px`,
                  height: `${100 + i * 80}px`,
                  border: "1px solid rgba(59, 130, 246, 0.5)",
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translate(${mousePosition.x * (i * 0.01)}px, ${mousePosition.y * (i * 0.01)}px)`,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
                transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
              }}
            ></div>
          </div>
          {/* 3D Sphere */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-xs sm:max-w-md max-h-xs sm:max-h-md opacity-50 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <ClassicSphere />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  enableRotate={true}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>

        {/* Floating Dots and Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-400"
              style={{
                width: `${4 + Math.random() * 4}px`,
                height: `${4 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-transparent via-blue-400/30 to-transparent h-px"
              style={{
                width: "100%",
                top: `${15 + i * 12}%`,
                left: 0,
              }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 0.5, 0],
                scaleX: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:mt-10 relative z-10">
          <div className="grid grid-cols-1 text-center gap-8 md:gap-12 lg:gap-16 items-center justify-items-center">
            <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" variants={itemVariants}>
                <span className="text-white">Hi, I'm </span>
                <br />
                <motion.span
                  className="text-blue-400 underline decoration-4 decoration-blue-400 underline-offset-8"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(59, 130, 246, 0.3)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 10px rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <BlurText
                    text="Vaibhav Singh"
                    delay={60}
                    animateBy="chars"
                    direction="top"
                    className="md:inline-block text-4xl hidden xs:text-5xl sm:text-6xl lg:text-8xl"
                  />
                  <BlurText
                    text="Vaibhav "
                    delay={60}
                    animateBy="chars"
                    direction="top"
                    className="inline-block text-7xl md:hidden xs:text-5xl sm:text-6xl lg:text-8xl"
                  /> <br />
                  <BlurText
                    text="Singh"
                    delay={60}
                    animateBy="chars"
                    direction="top"
                    className="inline-block text-7xl md:hidden xs:text-5xl sm:text-6xl lg:text-8xl"
                  />
                </motion.span>
              </motion.h1>

              <motion.div className="text-lg xs:text-xl sm:text-2xl text-gray-300 mb-6 h-16" variants={itemVariants}>
                <span className="inline-block text-xl md:text-3xl xs:text-3xl text-gray-300 font-semibold">
                  I&apos;m a <FlipWords words={words} /> <br />
                </span>
              </motion.div>

              <motion.p className="text-base sm:text-xl font-bold text-gray-400 mb-8 max-w-xl mx-auto" variants={itemVariants}>
                Designing Seamless Digital Solutions for a Connected World...
              </motion.p>
            </motion.div>
          </div>
        </div>

                  
        
      </section>    </>
  )
}
