"use client"
import { useMemo } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Text3D, Center, Float } from "@react-three/drei"
import { Suspense } from "react"
import Image from "next/image";

import { FocusCards } from "@/components/ui/hover";
 


function Floating3DText({ text, position, color }) {
  return (
    <Float speed={1.4} rotationIntensity={2} floatIntensity={3}>
      <Center position={position}>
        
      </Center>
    </Float>
  )
}

function TechSymbols() {
  const symbols = [
    { symbol: "</>", position: [-6, 1, -4], color: "#3b82f6" },
    { symbol: "{}", position: [6, -2, -3], color: "#8b5cf6" },
    { symbol: "[]", position: [-2, 4, -5], color: "#06b6d4" },
    { symbol: "()", position: [4, 3, -2], color: "#f59e0b" },
  ]

  return (
    <>
      {symbols.map((item, index) => (
        <Float key={index} speed={1 + index * 0.3} rotationIntensity={1.5} floatIntensity={2}>
          <Center position={item.position}>
            
          </Center>
        </Float>
      ))}
    </>
  )
}

function CodeMatrix() {
  const matrix = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        key: i,
        speed: 0.5 + Math.random(),
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          -8 - Math.random() * 5,
        ],
        text: Math.random() > 0.5 ? "1" : "0",
      })),
    []
  )
  return (
    <>
      {matrix.map((item) => (
        <Float key={item.key} speed={item.speed} rotationIntensity={0.5} floatIntensity={1}>
          <Center position={item.position}>
            
          </Center>
        </Float>
      ))}
    </>
  )
}

export function Skills() {
  const cards = [
    {
      title: "Next.js",
      src: "/p4.png",
    },
    {
      title: "React",
      src: "/t1.png",
    },
    {
      title: "Tailwind CSS",
      src: "/t2.png",
    },
    {
      title: "Node.js",
      src: "/t3.png",
    },
    {
      title: "MongoDB",
      src: "/t4.png",
    },
    {
      title: "Git",
      src: "/t5.png",
    },
    {
      title: "Docker",
      src: "/p5.png",
    },
  ];
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
    hidden: { y: 50, opacity: 0, rotateY: -90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  }
  const imageUrl =
    "/p4.png";
    


  // Memoize code rain to avoid hydration errors
  const codeRain = useMemo(
    () =>
      Array.from({ length: 50 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
        text: Math.random() > 0.5 ? "01" : "10",
      })),
    []
  )

  return (
    <section id="skills" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Animated Code Rain */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute inset-0 text-green-400 text-xs font-mono leading-none animate-pulse">
          {codeRain.map((item, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: item.left,
                top: item.top,
                animationDelay: item.animationDelay,
                animationDuration: item.animationDuration,
              }}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <pointLight position={[-10, -10, -10]} color="#8b5cf6" />
            <Floating3DText text="CODE" position={[-4, 2, -2]} color="#3b82f6" />
            <Floating3DText text="WEB" position={[4, -1, -1]} color="#8b5cf6" />
            <Floating3DText text="DEV" position={[0, 3, -3]} color="#06b6d4" />
            <TechSymbols />
            <CodeMatrix />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto px-4 sm:px-6 mb-2 lg:px-8 relative z-10">
        <motion.div
          className="w-full mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tech-<span className="text-blue-400">Tools</span>
          </motion.h2>

         
          <FocusCards cards={cards}  />
        </motion.div>
      </div>
    </section>
  )
}