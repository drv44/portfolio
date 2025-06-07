"use client"

import { experiences, type Experience } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { sectionVariants, cardVariants, itemVariants } from "@/lib/animations"

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => (
  <motion.div custom={index} variants={cardVariants}>
    <Card className="relative overflow-hidden border-border bg-card shadow-xl transition-all duration-300 hover:shadow-primary/30 hover:border-primary/70 transform hover:-translate-y-2">
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
  </motion.div>
)

export default function ExperienceSection() {
  if (experiences.length === 0) return null

  return (
    <motion.section
      id="experience"
      className="bg-secondary/20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          variants={itemVariants}
        >
          Experience & Contributions
        </motion.h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
