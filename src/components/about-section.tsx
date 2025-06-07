"use client"

import { siteConfig, skills, type Skill } from "@/lib/data"
import Image from "next/image"
import { motion } from "framer-motion"
import { sectionVariants, itemVariants, skillPillVariants } from "@/lib/animations"

const SkillPill = ({ skill, index }: { skill: Skill; index: number }) => (
  <motion.div
    custom={index} // Pass index for stagger
    variants={skillPillVariants}
    className="flex items-center gap-2 rounded-full border border-primary/50 bg-secondary/50 px-4 py-2 text-sm text-foreground shadow-md transition-all hover:bg-primary/20 hover:shadow-primary/30 transform hover:scale-105"
  >
    <skill.icon className="h-5 w-5 text-primary" />
    <span>{skill.name}</span>
  </motion.div>
)

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="bg-card" // Use card background for contrast
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={itemVariants}
          className="mb-16 text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12 items-center">
          <motion.div variants={itemVariants} className="md:col-span-1 flex justify-center">
            <Image
              src={"/profile.jpg"}
              alt={siteConfig.name}
              width={300}
              height={300}
              className="rounded-full border-4 border-primary object-cover shadow-xl aspect-square transform transition-all duration-500 hover:scale-105 hover:shadow-primary/30"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I&apos;m {siteConfig.name}, a passionate and driven {siteConfig.role} with a strong foundation in
              software development and a keen interest in creating impactful web applications. As a {siteConfig.status},
              I am eager to apply my skills to real-world challenges and contribute to innovative projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive in collaborative environments and am always excited to learn new technologies and methodologies.
              My goal is to grow as a developer and make meaningful contributions to the tech industry.
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-20">
          <h3 className="mb-10 text-center text-3xl font-semibold text-foreground">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {skills.map((skill, index) => (
              <SkillPill key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
