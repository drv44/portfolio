import { experiences, type Experience } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <Card className="relative overflow-hidden border-border bg-secondary/30 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 transform hover:-translate-y-1">
    {experience.icon && <experience.icon className="absolute top-6 right-6 h-8 w-8 text-primary opacity-30" />}
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-xl font-semibold text-foreground">{experience.role}</CardTitle>
        <Badge variant="outline" className="text-xs border-primary/50 text-primary">
          {experience.date}
        </Badge>
      </div>
      <CardDescription className="text-primary">
        {experience.companyUrl ? (
          <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {experience.company}
          </a>
        ) : (
          experience.company
        )}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{experience.description}</p>
      <div className="flex flex-wrap gap-2">
        {experience.skillsUsed.map((skill) => (
          <Badge key={skill} variant="secondary" className="bg-primary/20 text-primary border-primary/30">
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
)

export default function ExperienceSection() {
  if (experiences.length === 0) return null

  return (
    <section id="experience" className="bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Experience & Contributions
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
