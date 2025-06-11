"use client" // Required for framer-motion hooks and event handlers

import { Button } from "@/components/ui/button"
import { siteConfig, socialLinks, skills } from "@/lib/data"
import { ArrowDown, Download } from "lucide-react"
import Link from "next/link"
import TypingAnimation from "./typing-animation"
import { motion } from "framer-motion"
import { sectionVariants, itemVariants } from "@/lib/animations"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const heroTexts = [siteConfig.role, "Full-Stack Developer", "Creative Coder", "Tech Enthusiast"]
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)
    }
  }, [])

  return (
    <motion.section
      id="home"
      ref={ref}
      className="relative flex flex-col items-center justify-center h-[calc(100vh-5rem)] min-h-[700px] px-4 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      {/* Main content with higher z-index */}
      <div className="relative z-20 text-center w-full">
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m <span className="text-primary">{siteConfig.name}</span>
        </motion.h1>
        <motion.div
          variants={itemVariants}
          className="mt-6 mb-10 text-xl text-muted-foreground sm:text-2xl md:text-3xl h-10 md:h-12 text-center"
        >
          <TypingAnimation 
            texts={heroTexts}
            className="font-bold text-blue-400 typing-glow"
          />
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-3 max-w-md text-base text-muted-foreground sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
        >
          Aspiring software engineer and AI enthusiast from NSUT, Delhi, with a strong foundation in full-stack development, machine learning, and competitive programming. Passionate about building impactful, scalable tech solutions.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:mt-10"
        >
          <Link href="#projects">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/40"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="/resume.pdf" download={`${siteConfig.name.replace(" ", "_")}_Resume.pdf`}>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/40"
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center space-x-6"
        >
          {Object.values(socialLinks).map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label={social.url.split(".")[1] || "Social link"}
            >
              <social.icon className="h-7 w-7" />
            </a>
          ))}
        </motion.div>
      </div>
      {/* Floating icons with disappearing effect */}
      <motion.div
        className="absolute inset-0 flex flex-wrap justify-around items-center pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ zIndex: 0 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="absolute p-2 rounded-full bg-secondary/20 shadow-[0_0_10px_2px_rgba(96,165,250,0.7),0_0_20px_5px_rgba(96,165,250,0.5)]"
            style={{
              top: `${20 + (index * 10) % 80}%`,
              left: `${(index * 15) % 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              y: index % 2 === 0 ? [ -100, windowHeight ] : [ windowHeight, -100 ],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 10 + (index * 2),
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: index * 0.1
            }}
          >
            <skill.icon className="h-8 w-8 text-primary" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

{/* <style jsx global>{`
  .typing-glow {
    text-shadow: 0 0 8px #3b82f6, 0 0 16px #2563eb, 0 0 2px #fff;
  }
`}</style> */}
