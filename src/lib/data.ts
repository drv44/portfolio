import {
    Code2,
    FileCode,
    Atom,
    Layers,
    ServerCog,
    GitFork,
    Container,
    Database,
    Wind,
    Github,
    Linkedin,
    Mail,
    Briefcase,
    GraduationCap,
    Lightbulb,
    type LucideIcon,
  } from "lucide-react"
  
  export const siteConfig = {
    name: "Dhruv Sarkar", // Replace with your name
    role: "Software Engineer",
    status: "Aspiring Fresher",
    location: "New Delhi, India",
    email: "dhruvsarkar26@gmail.com",
    github: "https://github.com/drv44",
    linkedin: "https://www.linkedin.com/in/dhruv-sarkar-76a565308/",
  }
  
  export const navLinks = [
    { name: "About", hash: "#about" },
    { name: "Projects", hash: "#projects" },
    { name: "Experience", hash: "#experience" },
    { name: "Contact", hash: "#contact" },
  ]
  
  export type Skill = {
    name: string
    icon: LucideIcon
    level?: number // Optional: 1-5 for proficiency
  }
  
  export const skills: Skill[] = [
    { name: "JavaScript", icon: Code2, level: 4 },
    { name: "TypeScript", icon: FileCode, level: 4 },
    { name: "React", icon: Atom, level: 4 },
    { name: "Next.js", icon: Layers, level: 3 },
    { name: "Node.js", icon: ServerCog, level: 3 },
    { name: "Python", icon: Code2, level: 3 },
    { name: "Git", icon: GitFork, level: 4 },
    { name: "Docker", icon: Container, level: 2 },
    { name: "SQL", icon: Database, level: 3 },
    { name: "Tailwind CSS", icon: Wind, level: 4 },
  ]
  
  export type Project = {
    title: string
    description: string
    tags: string[]
    imageUrl: string
    githubUrl?: string
    liveUrl?: string
    icon?: LucideIcon
  }
  
  export const projects: Project[] = [
    {
      title: "Personal Portfolio Website",
      description:
        "This very portfolio, built with Next.js, Tailwind CSS, and TypeScript. Showcasing my skills and projects in a modern, animated interface.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion (concept)", "Vercel"],
      imageUrl: "/placeholder.svg?width=600&height=400&text=Portfolio+V2",
      githubUrl: siteConfig.github + "/portfolio-v2", // Replace with actual link
      liveUrl: "#",
      icon: Briefcase,
    },
    {
      title: "Full-Stack E-commerce App",
      description:
        "A feature-rich e-commerce platform with product listings, shopping cart, user authentication, and payment integration.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      imageUrl: "/placeholder.svg?width=600&height=400&text=E-commerce+App",
      githubUrl: siteConfig.github + "/ecommerce-app", // Replace
      liveUrl: "https://example-ecommerce.com", // Replace
      icon: Lightbulb,
    },
    {
      title: "AI Powered Study Tool",
      description:
        "An application that uses AI to generate flashcards and quizzes from user-provided text or documents, aiding in efficient learning.",
      tags: ["Python", "Flask", "OpenAI API", "Next.js", "Supabase"],
      imageUrl: "/placeholder.svg?width=600&height=400&text=AI+Study+Tool",
      githubUrl: siteConfig.github + "/ai-study-tool", // Replace
      icon: GraduationCap,
    },
  ]
  
  export type Experience = {
    role: string
    company: string
    companyUrl?: string
    date: string
    description: string
    skillsUsed: string[]
    icon?: LucideIcon
  }
  
  export const experiences: Experience[] = [
    {
      role: "Software Engineer Intern",
      company: "Innovatech Solutions",
      companyUrl: "https://example-innovatech.com", // Replace
      date: "May 2024 - Aug 2024",
      description:
        "Developed and maintained features for a client-facing web application using React and TypeScript. Collaborated with a team of 5 engineers in an agile environment, contributing to API development with Node.js and participating in code reviews.",
      skillsUsed: ["React", "TypeScript", "Node.js", "Jest", "Agile"],
      icon: Briefcase,
    },
    {
      role: "Lead, University Coding Club",
      company: "State University Tech Club",
      date: "Sep 2023 - May 2024",
      description:
        "Organized workshops and coding competitions for over 100 students. Developed the club's website and internal management tools using Python (Django) and Next.js.",
      skillsUsed: ["Python", "Django", "Next.js", "Leadership", "Event Management"],
      icon: GraduationCap,
    },
  ]
  
  export const socialLinks = {
    github: { icon: Github, url: siteConfig.github },
    linkedin: { icon: Linkedin, url: siteConfig.linkedin },
    email: { icon: Mail, url: `mailto:${siteConfig.email}` },
  }
  