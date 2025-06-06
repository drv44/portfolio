import { siteConfig, skills, type Skill } from "@/lib/data"
import Image from "next/image"

const SkillPill = ({ skill }: { skill: Skill }) => (
  <div className="flex items-center gap-2 rounded-full border border-primary/50 bg-secondary/30 px-3 py-1.5 text-sm text-foreground transition-all hover:bg-primary/20 hover:shadow-md">
    <skill.icon className="h-5 w-5 text-primary" />
    <span>{skill.name}</span>
  </div>
)

export default function AboutSection() {
  return (
    <section id="about" className="bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">About Me</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="/profile.jpg" // Replace with your photo in public folder
              alt={siteConfig.name}
              width={300}
              height={300}
              className="rounded-full border-4 border-primary object-cover shadow-xl aspect-square"
            />
          </div>
          <div className="md:col-span-2">
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              Hello! I&apos;m {siteConfig.name}, a passionate and driven {siteConfig.role} with a strong foundation in
              software development and a keen interest in creating impactful web applications. As a {siteConfig.status},
              I am eager to apply my skills to real-world challenges and contribute to innovative projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive in collaborative environments and am always excited to learn new technologies and methodologies.
              My goal is to grow as a developer and make meaningful contributions to the tech industry.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-foreground">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skills.map((skill) => (
              <SkillPill key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
