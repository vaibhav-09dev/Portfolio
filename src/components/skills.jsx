"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";

import { FocusCards } from "@/components/ui/hover";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 78 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 88 },
      { name: "Linux", level: 85 },
    ],
  },
]

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
      title: "Typescript",
      src: "/t6.png",
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
  return (
    <section id="skills" className="py-24 ">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold cursor-target text-[#bc0000] mb-6"><span className="cursor-target">   Tools <span className="text-[#e60000]"> &</span> Frameworks </span></h2>
          <div className="w-32 h-1 bg-gray-800 mx-auto"></div>
        </motion.div>

        
          
            <motion.div
              
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              
              viewport={{ once: true }}
            >
             <FocusCards cards={cards}  />
            </motion.div>
          
        
      </div>
    </section>
  )
}
