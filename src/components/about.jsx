"use client"
import CardSwap, { Card } from '@/components/ui/CardSwap'
import {  Mail, Github, Linkedin,Twitter, Download, Code, Star, Users } from "lucide-react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Box, Float } from "@react-three/drei"
import { Suspense, useMemo } from "react"
import { useState, useEffect } from "react"
import Image from "next/image"

function FloatingCube({ position, color }) {
  return (
    <Float speed={1.4} rotationIntensity={2} floatIntensity={3}>
      <Box args={[0.5, 0.5, 0.5]} position={position}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} metalness={0.8} roughness={0.2} />
      </Box>
    </Float>
  )
}

function AnimatedWaves() {
  const waves = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => (
        <Float key={i} speed={0.5 + i * 0.1} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={[0, -3 + i * 0.5, -8]} rotation={[0, 0, Math.PI / 4]}>
            <planeGeometry args={[20, 0.1]} />
            <meshStandardMaterial
              color="#3b82f6"
              transparent
              opacity={0.2 - i * 0.02}
              emissive="#1e40af"
              emissiveIntensity={0.1}
            />
          </mesh>
        </Float>
      )),
    []
  )
  return <>{waves}</>
}

function OrbitingElements() {
  const elements = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={[Math.cos((i * Math.PI) / 3) * 4, Math.sin((i * Math.PI) / 3) * 2, -3]}>
            <octahedronGeometry args={[0.3]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#3b82f6" : "#8b5cf6"}
              emissive={i % 2 === 0 ? "#1e40af" : "#6d28d9"}
              emissiveIntensity={0.3}
            />
          </mesh>
        </Float>
      )),
    []
  )
  return <>{elements}</>
}

export function About() {
  const [activeImage, setActiveImage] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Array of developer images for the interactive gallery
  const images = [
    "/a1.avif?height=400&width=300",
    "/a2.avif?height=400&width=300",
    "/a3.jpg?height=400&width=300",
  ]

  // Image captions
  const captions = ["Working with the team", "vibe coding", "Eager to learn new things"]
  const links=["https://github.com/vaibhav-09dev","https://x.com/Vaibhav0_dev?t=J5U4or5riN_TQRl96jbAgA&s=08","https://www.linkedin.com/in/vaibhav-singh-1aaa74327/"]
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
    <section id="about" className="py-10 bg-gray-900 min-h-[800px] relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <pointLight position={[-10, -10, -10]} color="#8b5cf6" />
            <FloatingCube position={[-3, 2, -2]} color="#3b82f6" />
            <FloatingCube position={[3, -1, -1]} color="#8b5cf6" />
            <FloatingCube position={[0, 3, -3]} color="#06b6d4" />
            <AnimatedWaves />
            <OrbitingElements />
          </Suspense>
        </Canvas>
      </div>

      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/20 via-blue-600/20 to-green-600/20 animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="w-full mx-auto md:ml-4 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-6xl font-bold text-center mb-10"
            variants={itemVariants}
          >
            <TextReveal text="About" delay={0.4} />
            <span className="text-blue-400 ml-4">
              <TextReveal text="Me" delay={0.4} />
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-1 items-center mb-5">
            {/* Text Section */}
           <motion.div variants={itemVariants}>
  <motion.p
    className="text-gray-200 text-xl   mb-5"
    initial={{ opacity: 0, x: -80, scale: 0.95, letterSpacing: "0.1em" }}
    whileInView={{ opacity: 1, x: 0, scale: 1, letterSpacing: "0em" }}
    transition={{
      duration: 1,
      delay: 0.2,
      ease: [0.42, 0, 0.58, 1],
      type: "spring",
      stiffness: 80,
      damping: 12,
    }}
    viewport={{ once: true }}
  >
    
      Hey there! I’m <span className='text-blue-600 font-bold'>Vaibhav Singh</span>, a dedicated Software Developer from Delhi, India, Motivated by the pursuit of building well-architected, responsive, and impactful digital products. As a B.Tech student in Computer Science and Engineering at Maharaja Agrasen Institute of Technology (MAIT), I enjoy solving real-world problems through clean code and smart design.
    
  </motion.p>
  <motion.p
    className="text-gray-200 text-xl   mb-5"
    initial={{ opacity: 0, x: -80, scale: 0.95, letterSpacing: "0.1em" }}
    whileInView={{ opacity: 1, x: 0, scale: 1, letterSpacing: "0em" }}
    transition={{
      duration: 1,
      delay: 0.3,
      ease: [0.42, 0, 0.58, 1],
      type: "spring",
      stiffness: 80,
      damping: 12,
    }}
    viewport={{ once: true }}
  >
    
      I’ve worked on multiple freelancing and side  projects involving both frontend and backend development using tools like Next.js, React, and Node.js. 
    
  </motion.p>
  <motion.p
    className="text-gray-200 text-xl   mb-5"
    initial={{ opacity: 0, x: -80, scale: 0.95, letterSpacing: "0.1em" }}
    whileInView={{ opacity: 1, x: 0, scale: 1, letterSpacing: "0em" }}
    transition={{
      duration: 1,
      delay: 0.4,
      ease: [0.42, 0, 0.58, 1],
      type: "spring",
      stiffness: 80,
      damping: 12,
    }}
    viewport={{ once: true }}
  >
    
      Beyond development, I enjoy learning about new technologies and sharpening my problem-solving skills. I’m a strong believer in continuous learning, teamwork, and creating solutions that truly improve user experiences.
    
  </motion.p>
  <motion.p
    className="text-gray-200 text-xl   mb-5"
    initial={{ opacity: 0, x: -80, scale: 0.95, letterSpacing: "0.1em" }}
    whileInView={{ opacity: 1, x: 0, scale: 1, letterSpacing: "0em" }}
    transition={{
      duration: 1,
      delay: 0.5,
      ease: [0.42, 0, 0.58, 1],
      type: "spring",
      stiffness: 80,
      damping: 12,
    }}
    viewport={{ once: true }}
  >
    
      I'm currently looking for opportunities where I can grow, contribute, and work on impactful projects with innovative teams.
    
  </motion.p> <br /> <br />
  <motion.p
    className="text-gray-200 text-xl   mb-5"
    initial={{ opacity: 0, x: -80, scale: 0.95, letterSpacing: "0.1em" }}
    whileInView={{ opacity: 1, x: 0, scale: 1, letterSpacing: "0em" }}
    transition={{
      duration: 1,
      delay: 0.4,
      ease: [0.42, 0, 0.58, 1],
      type: "spring",
      stiffness: 80,
      damping: 12,
    }}
    viewport={{ once: true }}
  >
    <AnimatedText>
      <span className='md:text-3xl text-2xl font-bold'>Let's <span className='text-blue-500'>Connect</span> togeather :</span>
      
         </AnimatedText>
  </motion.p>
  <motion.p
    className="text-gray-200 text-xl ml-11     mb-5"
    initial={{ opacity: 0, x: -80, scale: 0.95, letterSpacing: "0.1em" }}
    whileInView={{ opacity: 1, x: 0, scale: 1, letterSpacing: "0em" }}
    transition={{
      duration: 1,
      delay: 0.4,
      ease: [0.42, 0, 0.58, 1],
      type: "spring",
      stiffness: 80,
      damping: 12,
    }}
    viewport={{ once: true }}
  >
    <AnimatedText>
      <motion.div className="flex flex-wrap   gap-4" variants={itemVariants}>
        <span>
          <motion.a
  href="mailto:vabhsingh@gmail.com"
  className="text-gray-400 hover:text-blue-400 shadow-2xl rounded-xl  md:mr-3 transition-colors duration-200 flex justify-center  items-center gap-2"
  whileHover={{
    scale: 1.2,
    color: "#3b82f6",
    boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
  }}
  whileTap={{ scale: 0.9 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  <Mail className="h-10 w-10 ml-2 " />
  <span className="text-lg font-bold mr-2">vabhsingh@gmail.com</span>
</motion.a>
        </span>
                {[ Github,Twitter, Linkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href={links[index] || "#"}
                    className="text-gray-400 hover:text-blue-400 transition-colors h-12 w-12 ml-3 flex justify-center items-center duration-200 rounded-xl"
                    whileHover={{
                      scale: 1.2,
                      color: "#3b82f6",

                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className="h-10 w-10 " />
                  </motion.a>
                ))}
              </motion.div>
    </AnimatedText>
  </motion.p>
   
</motion.div>

            {/* Responsive Image Gallery Section */}
            <motion.div
              className="relative md:mr-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              }}
              viewport={{ once: true }}
            >
              <div className="sm:h-[400px] md:h-[500px] w-full flex items-center justify-center md:mt-11">
                <div className="w-full h-[300] max-w-xs sm:max-w-lg md:max-w-md lg:max-w-lg xl:max-w-xl  ">
                  <CardSwap
                    cardDistance={30}
                    verticalDistance={40}
                    delay={3000}
                    width={650}
                    height={650}
                    pauseOnHover={false}
                  >
                    {images.map((img, idx) => (
                      <Card key={img}>
                        <Image
                          src={img}
                          alt={captions[idx]}
                          width={320}
                          height={400}
                          className="rounded-xl object-cover w-full h-full mt-2"
                        />
                        <div className="absolute top-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-sm rounded-t-xl">
                          {captions[idx]}
                        </div>
                      </Card>
                    ))}
                  </CardSwap>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Simple animated text reveal component
function TextReveal({ text, delay = 0 }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          delay,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.span>
    </span>
  );
}
// Add this helper component at the bottom of your file:
function AnimatedText({ children }) {
  const text = typeof children === "string" ? children : "";
  return (
    <span>
      {text
        ? text.split(" ").map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.05 * idx,
                duration: 0.5,
                ease: "easeOut",
              }}
              style={{ display: "inline-block", marginRight: "0.25em" }}
              viewport={{ once: true }}
            >
              {word}
            </motion.span>
          ))
        : children}
    </span>
  );
}
