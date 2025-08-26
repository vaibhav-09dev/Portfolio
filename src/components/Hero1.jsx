"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, Github, Linkedin, Mail,X } from "lucide-react"

import { FlipWords } from "@/components/ui/flip-words";
import LightRays from './ui/LightRays'
import TargetCursor from "./ui/TargetCursor"
import Image from "next/image"
import LogoLoop from "./ui/LogoLoop"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,SiGit,SiDocker,SiNodedotjs} from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiGit />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiDocker />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];
const Hero1 = () => {
    const words = ["Web Developer", "Freelancer", "Passionate CSE undergrad", "Tech-Driven problem solver"];
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center ">
    <div style={{ width: '100%', height: '900px', position: 'relative' }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="red"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
       <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        
      <div className="container mx-auto px-6 text-center">
        
        <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-28 md:space-x-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-6xl cursor-target md:mt-0 mt-2 md:text-8xl font-light text-gray-800 mb-6">
              <span
                className="font-script text-7xl md:text-9xl italic text-[#b30000]"
                >
                Vaibhav Singh
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl  md:text-2xl text-gray-600 max-w-2xl mx-auto font-bold leading-relaxed"
            >
              I&apos;m a <span className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"> <FlipWords words={words} /></span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg font-medium cursor-target text-gray-500 max-w-3xl mx-auto"
            >
              Designing Seamless Digital Solutions for a Connected World...
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <Button size="lg" className="bg-gray-800 cursor-target hover:bg-gray-900 text-white px-8 py-3" onClick={scrollToAbout}>
                View My Work
              </Button>

              <div className="flex gap-4">
                <a href="https://github.com/vaibhav-09dev " target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon"  className="border-gray-300 cursor-target hover:bg-gray-600">
                  <Github className="w-5 h-5" />
                </Button>
                </a>
                <a href="https://www.linkedin.com/in/vaibhav-singh-1aaa74327/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="border-gray-300 cursor-target hover:bg-gray-600">
                  <Linkedin className="w-5 h-5" />
                </Button>
                </a>
                 <a href="mailto:vabhsingh@gmail.com " target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="border-gray-300 cursor-target hover:bg-gray-600">
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
                <div className="aspect-square cursor-target rounded-full border-2  flex items-center justify-center">
                  <Image
                    src="/p1.jpg?height=500&width=500"
                    alt="Profile"
                    width={500}
                    height={500}
                    className="rounded-full object-cover w-full h-full  flex items-center justify-center"
                    
                  />
                  
                </div>
                
             </motion.div>
             

        </div>
          <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
       
        ariaLabel="Technology partners"
      />
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


      </div>
    </div>
   
    </section>
  )
}

export default Hero1