"use client"

import { projects, type Project } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { sectionVariants, cardVariants, itemVariants } from "@/lib/animations"

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    custom={index} // For stagger
    variants={cardVariants}
  >
    <Card className="flex h-full flex-col overflow-hidden border-border bg-card shadow-xl transition-all duration-300 hover:shadow-primary/30 hover:border-primary/70 transform hover:-translate-y-2">
      <CardHeader className="relative p-0">
        <Image
          src={project.imageUrl || "/placeholder.svg?width=600&height=400&text=Project+Image"}
          alt={project.title}
          width={600}
          height={400}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" // Group hover effect
        />
        {project.icon && (
          <project.icon className="absolute top-4 right-4 h-10 w-10 text-background bg-primary p-2 rounded-lg shadow-lg" />
        )}
      </CardHeader>
      <CardContent className="flex-grow p-6 space-y-3">
        <CardTitle className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-primary/15 text-primary border-primary/30 text-xs px-2 py-0.5"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-4">
        <div className="flex w-full items-center justify-end space-x-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${project.title}`}
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <ExternalLink className="h-6 w-6" />
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  </motion.div>
)

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="bg-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Changed from 0.1 to 0.5
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={itemVariants} // Use itemVariants for the title within the section
          className="mb-16 text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
