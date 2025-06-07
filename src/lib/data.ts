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
  role: "Software Development Engineer",
  status: "Fresher",
  location: "New Delhi, India",
  email: "dhruvsrkar26@gmail.com",
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
  { name: "C", icon: FileCode, level: 3 },
  { name: "C++", icon: FileCode, level: 3 },
  { name: "R", icon: FileCode, level: 2 },
  { name: "HTML", icon: Code2, level: 4 },
  { name: "CSS", icon: Code2, level: 4 },
  { name: "Git", icon: GitFork, level: 4 },
  { name: "Docker", icon: Container, level: 2 },
  { name: "SQL", icon: Database, level: 3 },
  { name: "Tailwind CSS", icon: Wind, level: 4 },
  { name: "FastAPI", icon: FileCode, level: 3 },
  { name: "PostgreSQL", icon: Database, level: 2},
  { name: "MongoDB", icon: Container, level: 2},
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
    title: "Welth - AI-Powered Finance and Budgeting",
    description:
      "Developed an AI-powered full-stack web app for receipt scanning, personalized budgeting, and transaction management. Utilized Supabase, ArcJet, Prisma, and Inngest for scalability and security. Automated bill reminders to enhance user engagement and simplify financial management.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn", "Supabase", "Gemini API"],
    imageUrl: "/welth.png",
    githubUrl: siteConfig.github + "/welth.git", // Replace with actual link
    liveUrl: "#",
    icon: Briefcase,
  },
  {
    title: "Convohub- MERN Stack Real-Time chat application",
    description:
      "Built a real-time MERN stack chat app with Socket.IO for low-latency messaging. Designed scalable, event-driven backend, optimized MongoDB for efficient storage, and developed a responsive, modular React frontend for robust, maintainable user experience.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "Chakra-UI"],
    imageUrl: "/convohub.png",
    githubUrl: siteConfig.github + "/chatapp.git", // Replace
    liveUrl: "#", // Replace
    icon: Lightbulb,
  },
  {
    title: "tuneCV - AI Resume Analyzer",
    description:
      "Developed an AI-driven app to analyze resumes and suggest improvements. Utilized Next.js, Tailwind CSS, Python, FastAPI, and Gemini API for intelligent analysis, with PostgreSQL for robust data storage, delivering actionable feedback for enhanced career prospects.",
    tags: ["Next.js", "Tailwindcss", "Shadcn", "Python", "FastAPI", "Gemini API", "PostgreSQL"],
    imageUrl: "/tunecv.png",
    githubUrl: siteConfig.github + "tuneCV.git", // Replace
    liveUrl: "#", // Replace
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
