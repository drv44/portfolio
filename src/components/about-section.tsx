"use client"

import { siteConfig, skills } from '@/lib/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="bg-card py-10 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-8 text-center text-3xl font-bold text-primary sm:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 items-center">
          <motion.div className="md:col-span-1 flex justify-center">
            <Image
              src="/dhruv.jpg"
              alt={siteConfig.name}
              width={300}
              height={300}
              className="rounded-full border-4 border-primary object-cover shadow-xl aspect-square"
            />
          </motion.div>
          <motion.div className="md:col-span-2 space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I&apos;m {siteConfig.name}, a passionate B.Tech student in Computer Science & Engineering (AI) at NSUT, Delhi, dedicated to building innovative tech solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on expertise in React, Next.js, Tailwind CSS, Python, and FastAPI, I&apos;ve developed projects in AI, web development, and more, focusing on real-world applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I excel in collaborative teams, constantly learning new technologies to tackle challenges and drive impactful results in software engineering.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Education</h3>
              <ul className="text-base text-muted-foreground space-y-2">
                <li>B.Tech in Computer Science & Engineering (AI), NSUT, Delhi (2022–2026) &mdash; CGPA: 8.73</li>
                <li>Class XII (CBSE), TCIS, New Delhi (2020–2021) &mdash; Percentage: 95.60%</li>
                <li>Class X (CBSE), TCIS, New Delhi (2018–2019) &mdash; Percentage: 95.40%</li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6"
            >
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">My Skills</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="text-xs">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
