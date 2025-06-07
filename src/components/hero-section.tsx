"use client" // Required for framer-motion hooks and event handlers

import { Button } from "@/components/ui/button"
import { siteConfig, socialLinks } from "@/lib/data"
import { ArrowDown, Download } from "lucide-react"
import Link from "next/link"
import TypingAnimation from "./typing-animation"
import { motion } from "framer-motion"
import { sectionVariants, itemVariants } from "@/lib/animations"
import Hero3DScene from "./hero-3d-scene" // Import the 3D scene

export default function HeroSection() {
  const heroTexts = [siteConfig.role, "Full-Stack Developer", "Creative Coder", "Tech Enthusiast"]

  return (
    <motion.section
      id="home"
      className="relative flex h-[calc(100vh-5rem)] min-h-[700px] items-center justify-center overflow-hidden" // Removed gradient, 3D scene will be background
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <Hero3DScene /> {/* Add the 3D scene component here */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m <span className="text-primary">{siteConfig.name}</span>
        </motion.h1>
        <motion.div
          variants={itemVariants}
          className="mt-6 mb-10 text-xl text-muted-foreground sm:text-2xl md:text-3xl h-10 md:h-12"
        >
          <TypingAnimation texts={heroTexts} />
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-3 max-w-md text-base text-muted-foreground sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
        >
          An {siteConfig.status} based in {siteConfig.location}, passionate about building innovative solutions and
          continuously learning new technologies.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-8 flex max-w-md flex-col items-center justify-center gap-4 sm:flex-row md:mt-10"
        >
          <Link href="#projects">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/40"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 " /> {/* Removed animate-bounce for now, can be added back */}
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
      {/* Optional: Add subtle background elements or shapes here if not using full 3D scene */}
      {/* <div
        className="absolute inset-0 bg-dot-pattern opacity-10" // Adjusted opacity
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary)) 0.5px, transparent 0.5px)",
          backgroundSize: "20px 20px",
        }}
      ></div> */}
    </motion.section>
  )
}
