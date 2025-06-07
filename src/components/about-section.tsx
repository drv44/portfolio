"use client"

import { siteConfig, skills, type Skill } from "@/lib/data"
import Image from "next/image"
import { motion } from "framer-motion"
import { sectionVariants, itemVariants, skillPillVariants } from "@/lib/animations"
import SkillsSlider from "./skills-marquee"

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
      viewport={{ once: true, amount: 0.5 }}
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
              src={"/dhruv.jpg"}
              alt={siteConfig.name}
              width={300}
              height={300}
              className="rounded-full border-4 border-primary object-cover shadow-xl aspect-square transform transition-all duration-500 hover:scale-105 hover:shadow-primary/30"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hello! I&apos;m {siteConfig.name}, currently pursuing B.Tech in Computer Science & Engineering (AI) at NSUT, Delhi. I aim to grow as a developer and contribute to impactful, innovative tech projects in the future.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            I have hands-on experience with modern web technologies like React, Next.js, Node.js, and Tailwind CSS, as well as backend frameworks such as Express.js, Flask and FastAPI. My academic journey has been complemented by practical projects in AI-powered finance, real-time chat applications, and Langchain-based Resume analyzer, along with achievements in coding competitions and certifications.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            I thrive in collaborative environments and am always eager to learn new technologies and methodologies. My goal is to grow as a developer, tackle real-world challenges, and make meaningful contributions to the tech industry.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
            <ul className="text-base text-muted-foreground space-y-1">
              <li>
                <span className="font-medium">B.Tech in Computer Science & Engineering (Artificial Intelligence)</span>, NSUT, Delhi &mdash; <span className="italic">2022–2026 (Expected)</span><br />
                <span className="text-sm">CGPA: 8.73</span>
              </li>
              <li>
                <span className="font-medium">Class XII (CBSE)</span>, TCIS, New Delhi &mdash; <span className="italic">2020–2021</span><br />
                <span className="text-sm">Percentage: 95.60%</span>
              </li>
              <li>
                <span className="font-medium">Class X (CBSE)</span>, TCIS, New Delhi &mdash; <span className="italic">2018–2019</span><br />
                <span className="text-sm">Percentage: 95.40%</span>
              </li>
            </ul>
          </div>
          <div className="mt-12 mb-2">
          </div>
          </motion.div>
        </div>
        
        {/* My Skills Section */}
        <div className="mt-20">
          <h3 className="mb-8 text-center text-3xl font-bold text-primary">My Skills</h3>
          <div className="flex justify-center">
            <div className="w-full">
              <SkillsSlider />
            </div>
          </div>
        </div>
      </div>

        {/* <motion.div variants={itemVariants} className="mt-20">
          <h3 className="mb-10 text-center text-3xl font-semibold text-foreground">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {skills.map((skill, index) => (
              <SkillPill key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div> */}
    </motion.section>
  )
}
