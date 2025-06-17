"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Torus, Float, Sphere } from "@react-three/drei"
import { Suspense, useMemo } from "react"
import Link from "next/link"

function FloatingTorus({ position, color }) {
  return (
    <Float speed={1.4} rotationIntensity={2} floatIntensity={3}>
      <Torus args={[0.5, 0.2, 16, 100]} position={position}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} metalness={0.9} roughness={0.1} />
      </Torus>
    </Float>
  )
}

function ProjectOrbs() {
  const orbs = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => {
        const radius = 0.1 + Math.random() * 0.1
        const position = [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          -10 - Math.random() * 5,
        ]
        const colorArr = ["#3b82f6", "#8b5cf6", "#06b6d4", "#f59e0b"]
        const emissiveArr = ["#1e40af", "#6d28d9", "#0891b2", "#d97706"]
        const color = colorArr[Math.floor(Math.random() * colorArr.length)]
        const emissive = emissiveArr[Math.floor(Math.random() * emissiveArr.length)]
        return (
          <Float key={i} speed={0.8 + i * 0.1} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[radius, 16, 16]} position={position}>
              <meshStandardMaterial
                color={color}
                emissive={emissive}
                emissiveIntensity={0.4}
              />
            </Sphere>
          </Float>
        )
      }),
    []
  )
  return <>{orbs}</>
}

function SpinningFrames() {
  const frames = Array.from({ length: 4 }, (_, i) => (
    <Float key={i} speed={0.5} rotationIntensity={3} floatIntensity={1}>
      <mesh position={[0, 0, -8 - i * 2]} rotation={[0, 0, (i * Math.PI) / 4]}>
        <torusGeometry args={[2 + i * 0.5, 0.05, 8, 64]} />
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.4 - i * 0.08}
          emissive="#1e40af"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  ))
  return <>{frames}</>
}

export function Projects() {
  const projects = [
    {
      title: "SnipZ",
      description:
        "SnipZ is a sleek and efficient platform for sharing, saving, and discovering code snippets. Built for developers, by developers — SnipZ makes it easy to organize reusable code, collaborate with others, and streamline your workflow.",
      image: "/pr1.jpg?height=200&width=400",
      technologies: ["Next.js", "MongoDB", "Tailwind", ],
      liveUrl: "https://lnkd.in/eKvfHxXJ",
      githubUrl: "#",
    },
    
  ]

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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -30 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Project Showcase Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-600/30 animate-pulse"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`,
            animation: "float 6s ease-in-out infinite",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-6xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-blue-400">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gray-800  border-gray-700 rounded-3xl overflow-hidden  transition-all duration-300 h-full">
                  <motion.div
                    className="relative h-48 overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-blue-600/20 "
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <div>
                    <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                      <div className="text-white px-5 text-lg font-bold py-3">{project.title}</div>
                      <div className="text-gray-300 px-3 py-2">{project.description}</div>
                    </motion.div>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-7 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm cursor-pointer"
                          whileHover={{
                            scale: 1.1,

                            color: "#ffffff",
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex gap-4 mb-3">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="https://snip-z-vaibhav0dev-five.vercel.app/" size="sm" className="border-gray-600 px-3 flex justify-center items-center text-gray-300">
                          <span><ExternalLink className="mr-2 h-4 w-4" /></span>
                          Live Demo
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="https://github.com/vaibhav-09dev/SnipZ"  size="sm" className="border-gray-600 text-gray- flex justify-center items-center ">
                          <span><Github className="mr-2 h-4 w-4" /></span>
                          Code
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <pointLight position={[-10, -10, -10]} color="#8b5cf6" />
            <FloatingTorus position={[-5, 3, -2]} color="#3b82f6" />
            <FloatingTorus position={[5, -2, -1]} color="#8b5cf6" />
            <FloatingTorus position={[0, 4, -3]} color="#06b6d4" />
            <FloatingTorus position={[-3, -3, -2]} color="#f59e0b" />
            <ProjectOrbs />
            <SpinningFrames />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}
