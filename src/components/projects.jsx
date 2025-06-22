"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "SnipZ",
    description:
      "SnipZ is a sleek and efficient platform for sharing, saving, and discovering code snippets. Built for developers, by developers — SnipZ makes it easy to organize reusable code, collaborate with others, and streamline your workflow.",
    image: "/pr1.jpg?height=200&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },

]

export function Projects() {
  return (
    <section id="projects" className="py-20 ">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">Projects</h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-gray-800">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-200 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button size="sm" className="bg-gray-800 hover:bg-gray-900">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-300 hover:bg-gray-600">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
