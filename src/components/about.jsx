"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Mail,X,Linkedin,TwitterIcon } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 ">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold  text-gray-800 mb-6"><span className="cursor-target text-[#b30000]">About <span  className="text-[#cc0000]">Me</span> </span></h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className=" border-0  shadow-lg">
              <CardContent className="p-4">
                <div className="aspect-square  bg-gray-200 rounded-4xl mb-6 flex items-center justify-center">
                  <video
                    src="/v1.mp4?height=300&width=300"
                    alt="Profile"
                    type="video/mp4"
                    muted
                    playsInline
                    preload="auto"
                    autoPlay
                    loop
                    controls={false}
                    width={300}
                    height={300}
                    className="rounded-4xl object-cover w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold  text-gray-300"> <span className="cursor-target">Hello, I'm Vaibhav Singh</span></h3>
            <p className="text-gray-400 leading-relaxed font-medium">
               A dedicated Software Developer from Delhi, India, Motivated by the pursuit of building well-architected, responsive, and impactful digital products. As a B.Tech student in Computer Science and Engineering at <span className="text-gray-200 font-bold">Maharaja Agrasen Institute of Technology (MAIT)</span>, I enjoy solving real-world problems through clean code and smart design.
                </p>
            <p className="text-gray-400 leading-relaxed font-medium">
               I’ve worked on multiple freelancing and side  projects involving both frontend and backend development using tools like <span className="text-gray-200 font-bold">Next.js, React,Node.js and mongoDB</span>. 
                </p>
            <p className="text-gray-400 leading-relaxed font-medium">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge with the developer community.
            </p> <br />

            <p className="text-4xl font-bold font-serif italic text-gray-300">Let's Connect:</p>
            <div className="flex justify-center items-center   mt-4">
              
              <div className="mr-6">
                <a href="mailto:vabhsingh@gmail.com">
                <Button variant="outline" size="icon" className="border-gray-300 cursor-target  md:w-60 w-48 hover:bg-gray-600">
                  <Mail className="w-8 h-8 mr-2
                  " />
                  <p className="md:text-lg text-sm  ">vabhsingh@gmail.com</p>
                </Button>                </a>
              </div>
              <div className="mr-6">
                 <a href="https://www.linkedin.com/in/vaibhav-singh-1aaa74327/">
                
                  <Button variant="outline" size="icon" className="border-gray-300 cursor-target hover:bg-gray-600">
                  <Linkedin className="w-8 h-8" />
                </Button>
                
                </a>
              </div>
              <div>
                 <a href="https://x.com/Vaibhav0_dev?t=J5U4or5riN_TQRl96jbAgA&s=08">
                <Button variant="outline" size="icon" className="border-gray-300 cursor-target hover:bg-gray-600 px-1 py-1">
                  <TwitterIcon className="w-8 h-8" />
                </Button>
                
                  
                  
                
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
