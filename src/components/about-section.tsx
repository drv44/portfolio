"use client"

import { siteConfig } from '@/lib/data';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
              Hello! I&apos;m {siteConfig.name}, currently pursuing B.Tech in Computer Science & Engineering (AI).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have hands-on experience with modern web technologies like React, Next.js, and Tailwind CSS.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive in collaborative environments and am eager to learn new technologies.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
              <ul className="text-base text-muted-foreground space-y-1">
                <li>B.Tech in Computer Science & Engineering (AI), NSUT, Delhi (2022–2026)</li>
                {/* Add more as needed */}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
