"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ClassicBackground } from "@/components/classic-background"
import { ClassicGrid } from "@/components/classic-grid"
import { GradientOrbs } from "@/components/gradient-orbs"
import { FloatingElements } from "@/components/floating-elements"
import { Particles2D } from "@/components/particles-2d"

export default function Home() {
  return (
     <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 relative">
      {/* Classic Background Layers */}
      <ClassicGrid />
      <GradientOrbs />
      <FloatingElements />
      <ClassicBackground />

      {/* 3D Particles Background */}
     

      {/* 2D Particles Overlay */}
      <Particles2D />

      {/* Content */}
      <div className=" relative z-1">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          
          <Projects />
          <Contact />
        </main>
        
      </div>
    </div>

  )
}
