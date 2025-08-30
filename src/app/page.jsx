"use client"
import React,{lazy,Suspense} from "react"

import { Header } from "@/components/header"

import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

import { ClassicBackground } from "@/components/classic-background"

import { GradientOrbs } from "@/components/gradient-orbs"
import { FloatingElements } from "@/components/floating-elements"
import { Particles2D } from "@/components/particles-2d"
import Hero1 from "@/components/Hero1"

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-black  to-black relative">
      <FloatingElements />
      <GradientOrbs />
      


      <ClassicBackground />
      <Particles2D />

      {/* Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <Header />
        <main>
          
          <Hero1 />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
      </div>
    </div>
  );
}