"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, Github, Linkedin, Mail,X } from "lucide-react"
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image"

function GeometricLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-4"
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        <motion.path
          d="M30 30L60 10L90 30V60L60 80L30 60V30Z"
          stroke="#374151"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, }}
        />
        <motion.path
          d="M30 30L60 50L90 30"
          stroke="#374151"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.path
          d="M60 50V80"
          stroke="#374151"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        <motion.path
          d="M30 60L60 50L90 60"
          stroke="#374151"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        />
      </svg>
    </motion.div>
  )
}

export function Hero() {
  const words = ["Web Developer", "Freelancer", "Passionate CSE undergrad", "Tech-Driven problem solver"];
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 md:pt-4 relative">
      <div className="container mx-auto px-6 text-center">
        <GeometricLogo />
        <div className="flex flex-col md:flex-row items-center justify-around space-y-9 md:space-y-9 md:space-x-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-light text-gray-800 mb-6">
              <span
                className="font-script text-7xl md:text-9xl italic text-gray-800"
                style={{
                  textShadow:
                    "0 1px 8px #374151, 0 2px 16px #6b7280, 0 0 24px #9ca3af",
                }}
              >
                Vaibhav Singh
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-bold leading-relaxed"
            >
              I&apos;m a <span className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"> <FlipWords words={words} /></span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg font-medium text-gray-500 max-w-3xl mx-auto"
            >
              Designing Seamless Digital Solutions for a Connected World...
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3" onClick={scrollToAbout}>
                View My Work
              </Button>

              <div className="flex gap-4">
                <a href="https://github.com/vaibhav-09dev " target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon"  className="border-gray-300 hover:bg-gray-600">
                  <Github className="w-5 h-5" />
                </Button>
                </a>
                <a href="https://www.linkedin.com/in/vaibhav-singh-1aaa74327/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="border-gray-300 hover:bg-gray-600">
                  <Linkedin className="w-5 h-5" />
                </Button>
                </a>
                 <a href="mailto:vabhsingh@gmail.com " target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="border-gray-300 hover:bg-gray-600">
                  <Mail className="w-5 h-5" />
                </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-100 border-0 shadow-2xl rounded-full h-[400] w-full items-center justify-center max-w-sm mx-auto"
            >
              <CardContent className="p-8">
                <div className="aspect-square rounded-full  flex items-center justify-center">
                  <Image
                    src="/h3.jpg?height=500&width=500"
                    alt="Profile"
                    width={500}
                    height={500}
                    className="rounded-full object-cover w-full h-full  flex items-center justify-center"
                    
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="cursor-pointer"
            onClick={scrollToAbout}
          >
            <ArrowDown className="w-10 h-10 font-bold text-gray-400 " />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
