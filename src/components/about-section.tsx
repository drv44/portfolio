"use client"

import { siteConfig, skills } from "@/lib/data"
import Image from "next/image"
import { motion } from "framer-motion"
import { sectionVariants, itemVariants } from "@/lib/animations"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// Function to get skills by category for dynamic naming
export const getSkillsByCategory = (category: string) => skills.filter(skill => skill.category === category);


export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="bg-card"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      // Add these props to prevent hydration issues
      suppressHydrationWarning={true}
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
              src="/dhruv.jpg"
              alt={siteConfig.name}
              width={300}
              height={300}
              className="rounded-full border-4 border-primary object-cover shadow-xl aspect-square"
              onError={(e) => {
    console.log('Image failed to load:', e);
    // Add fallback image
  }}
  priority 
            />
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I&apos;m {siteConfig.name}, currently pursuing B.Tech in Computer Science & Engineering (AI) at
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              I have hands-on experience with modern web technologies like React, Next.js, Node.js, and Tailwind CSS, as well as backend frameworks such as Express.js, Flask and FastAPI. My academic journey has been complemented by practical projects in AI-powered finance, real-time chat applications, and Langchain-based Resume analyzer, along with achievements in coding competitions and certifications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              I thrive in collaborative environments and am always eager to learn new technologies and methodologies. My goal is to grow as a developer, tackle real-world challenges, and make meaningful contributions to the tech
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
          </motion.div>
        </div>
        
        <div className="mt-20">
          <h3 className="mb-8 text-center text-3xl font-bold text-primary">My Skills</h3>
          <div className="flex flex-row flex-wrap items-stretch justify-center gap-6">
            <Card className="w-64 bg-background p-6 rounded-lg shadow-lg shadow-[0_0_30px_rgba(96,165,250,0.9)]">
              <CardHeader>
                <CardTitle className="text-primary">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>JavaScript</span>
                </motion.button>
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>TypeScript</span>
                </motion.button>
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>C</span>
                </motion.button>
              </CardContent>
            </Card>
            
            <Card className="w-64 bg-background p-6 rounded-lg shadow-lg shadow-[0_0_30px_rgba(96,165,250,0.9)]">
              <CardHeader>
                <CardTitle className="text-primary">Frontend Technologies</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>React</span>
                </motion.button>
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>Next.js</span>
                </motion.button>
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>HTML</span>
                </motion.button>
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>CSS</span>
                </motion.button>
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>Tailwind CSS</span>
                </motion.button>
              </CardContent>
            </Card>
            
            <Card className="w-64 bg-background p-6 rounded-lg shadow-lg shadow-[0_0_30px_rgba(96,165,250,0.9)]">
              <CardHeader>
                <CardTitle className="text-primary">Backend Technologies</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>Node.js</span>
                </motion.button>
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>Express.js</span>
                </motion.button>
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>FastAPI</span>
                </motion.button>
              </CardContent>
            </Card>
            
            <Card className="w-64 bg-background p-6 rounded-lg shadow-lg shadow-[0_0_30px_rgba(96,165,250,0.9)]">
              <CardHeader>
                <CardTitle className="text-primary">Databases</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>SQL</span>
                </motion.button>
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>PostgreSQL</span>
                </motion.button>
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>MongoDB</span>
                </motion.button>
              </CardContent>
            </Card>
            
            <Card className="w-64 bg-background p-6 rounded-lg shadow-lg shadow-[0_0_30px_rgba(96,165,250,0.9)]">
              <CardHeader>
                <CardTitle className="text-primary">Tools</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>Git</span>
                </motion.button>
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>Docker</span>
                </motion.button>
                <motion.button className="p-3 rounded-xl border-2 border-blue-500 bg-secondary text-xs text-foreground overflow-hidden text-ellipsis w-fit shadow-sm hover:bg-primary/10 transition-colors shadow-[0_0_10px_#3b82f6]" whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                  <span>VS Code</span>
                </motion.button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
