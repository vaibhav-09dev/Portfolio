"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Mail,X,Linkedin,TwitterIcon } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 ">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">About <span  className="text-black">Me</span></h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-100 border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-200 rounded-2xl mb-6 flex items-center justify-center">
                  <Image
                    src="/p1.jpg?height=300&width=300"
                    alt="Profile"
                    width={300}
                    height={300}
                    className="rounded-lg object-fit w-full h-full"
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
            <h3 className="text-2xl font-bold  text-gray-800">Hello, I'm Vaibhav Singh</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
               A dedicated Software Developer from Delhi, India, Motivated by the pursuit of building well-architected, responsive, and impactful digital products. As a B.Tech student in Computer Science and Engineering at <span className="text-gray-800 font-bold">Maharaja Agrasen Institute of Technology (MAIT)</span>, I enjoy solving real-world problems through clean code and smart design.
                </p>
            <p className="text-gray-600 leading-relaxed font-medium">
               I’ve worked on multiple freelancing and side  projects involving both frontend and backend development using tools like <span className="text-gray-800 font-bold">Next.js, React,Node.js and mongoDB</span>. 
                </p>
            <p className="text-gray-600 leading-relaxed font-medium">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge with the developer community.
            </p> <br />

            <p className="text-4xl font-bold font-serif italic text-gray-800">Let's Connect:</p>
            <div className="flex justify-center items-center   mt-4">
              
              <div className="mr-6">
                <a href="/">
                <Button variant="outline" size="icon" className="border-gray-300  md:w-60 w-48 hover:bg-gray-600">
                  <Mail className="w-8 h-8 mr-2
                  " />
                  <p className="md:text-lg text-sm ">vabhsingh@gmail.com</p>
                </Button>                </a>
              </div>
              <div className="mr-6">
                 <a href="/">
                
                  <Button variant="outline" size="icon" className="border-gray-300 hover:bg-gray-600">
                  <Linkedin className="w-8 h-8" />
                </Button>
                
                </a>
              </div>
              <div>
                 <a href="/">
                <Button variant="outline" size="icon" className="border-gray-300 hover:bg-gray-600">
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
