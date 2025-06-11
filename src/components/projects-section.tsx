"use client"

import { projects } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="bg-background py-10 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-8 text-center text-3xl font-bold text-primary sm:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="flex flex-col overflow-hidden shadow-xl">
                <CardHeader className="p-0">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <CardTitle className="text-2xl font-semibold text-foreground">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex space-x-4">
                    {project.githubUrl && (
                      <Button asChild className="flex items-center rounded-full bg-primary text-primary-foreground hover:bg-primary/80">
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="mr-1 h-5 w-5" /> GitHub
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button asChild className="flex items-center rounded-full bg-primary text-primary-foreground hover:bg-primary/80">
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="mr-1 h-5 w-5" /> Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
