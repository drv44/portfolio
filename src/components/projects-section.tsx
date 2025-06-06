import { projects, type Project } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="flex h-full flex-col overflow-hidden border-border bg-secondary/30 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 transform hover:-translate-y-1">
    <CardHeader className="relative p-0">
      <Image
        src={project.imageUrl || "/placeholder.svg"} // Ensure images are in public folder
        alt={project.title}
        width={600}
        height={400}
        className="aspect-[3/2] w-full object-cover"
      />
      {project.icon && (
        <project.icon className="absolute top-4 right-4 h-8 w-8 text-white bg-primary p-1.5 rounded-md shadow-md" />
      )}
    </CardHeader>
    <CardContent className="flex-grow p-6">
      <CardTitle className="mb-2 text-xl font-semibold text-foreground">{project.title}</CardTitle>
      <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary border-primary/30">
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter className="p-6 pt-0">
      <div className="flex w-full items-center justify-end space-x-3">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo of ${project.title}`}
          >
            <ExternalLink className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        )}
      </div>
    </CardFooter>
  </Card>
)

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">My Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
