"use client"

import { siteConfig, socialLinks } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { sectionVariants, itemVariants } from "@/lib/animations"

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="bg-gradient-to-b from-background to-secondary/30"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2 className="mb-8 text-3xl font-bold tracking-tight text-primary sm:text-4xl" variants={itemVariants}>
          Let&apos;s Connect!
        </motion.h2>
        <motion.p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground" variants={itemVariants}>
          I&apos;m currently seeking new opportunities and would love to hear from you. Whether you have a question, a
          project idea, or just want to say hi, feel free to reach out!
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4" variants={itemVariants}>
          <Link href={`mailto:${siteConfig.email}`}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-primary/40"
            >
              <socialLinks.email.icon className="h-5 w-5" />
              Send an Email
            </Button>
          </Link>
          <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-primary/40"
            >
              <socialLinks.linkedin.icon className="h-5 w-5" />
              LinkedIn Profile
            </Button>
          </Link>
          <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-primary/40"
            >
              <socialLinks.github.icon className="h-5 w-5" />
              GitHub Profile
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
