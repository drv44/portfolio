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
  leetcode: "https://leetcode.com/u/dhruvsarkar960/",  // Replace with actual LeetCode profile URL
  codeforces: "https://codeforces.com/profile/drv4",  // Replace with actual Codeforces profile URL
}
export const navLinks = [
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  // { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
]

export type Skill = {
  name: string
  icon: LucideIcon
  level?: number // Optional: 1-5 for proficiency
  category: string  // Added category property
}

export const skills: Skill[] = [
  { name: "JavaScript", icon: Code2, level: 4, category: "Programming Languages" },
  { name: "TypeScript", icon: FileCode, level: 4, category: "Programming Languages" },
  { name: "React", icon: Atom, level: 4, category: "Frontend Technologies" },
  { name: "Next.js", icon: Layers, level: 3, category: "Frontend Technologies" },
  { name: "Node.js", icon: ServerCog, level: 3, category: "Backend Technologies" },
  { name: "Python", icon: Code2, level: 3, category: "Programming Languages" },
  { name: "C", icon: FileCode, level: 3, category: "Programming Languages" },
  { name: "C++", icon: FileCode, level: 3, category: "Programming Languages" },
  { name: "R", icon: FileCode, level: 2, category: "Programming Languages" },
  { name: "HTML", icon: Code2, level: 4, category: "Frontend Technologies" },
  { name: "CSS", icon: Code2, level: 4, category: "Frontend Technologies" },
  { name: "Git", icon: GitFork, level: 4, category: "Tools" },
  { name: "Docker", icon: Container, level: 2, category: "Tools" },
  { name: "SQL", icon: Database, level: 3, category: "Databases" },
  { name: "Tailwind CSS", icon: Wind, level: 4, category: "Frontend Technologies" },
  { name: "FastAPI", icon: FileCode, level: 3, category: "Backend Technologies" },
  { name: "PostgreSQL", icon: Database, level: 2, category: "Databases" },
  { name: "MongoDB", icon: Container, level: 2, category: "Databases" },
  { name: "Express.js", icon: ServerCog, level: 3, category: "Backend Technologies" },
  { name: "Flask", icon: FileCode, level: 3, category: "Backend Technologies" },
  { name: "Prisma", icon: Database, level: 2, category: "Databases" },
  { name: "Supabase", icon: Database, level: 2, category: "Databases" },
  { name: "Shadcn", icon: Wind, level: 2, category: "Frontend Technologies" },
  { name: "Gemini API", icon: Lightbulb, level: 2, category: "Tools" },
  { name: "VS Code", icon: FileCode, level: 3, category: "Tools" },
  { name: "Postman", icon: Briefcase, level: 2, category: "Tools" },
  { name: "Optimization", icon: Lightbulb, level: 2, category: "Tools" },
  { name: "Analytics", icon: Atom, level: 2, category: "Tools" },
  { name: "Redux", icon: FileCode, level: 3, category: "Frontend Technologies" },
  { name: "Jest", icon: Lightbulb, level: 2, category: "Tools" },
  { name: "Chakra UI", icon: Wind, level: 2, category: "Frontend Technologies" },
  { name: "Material UI", icon: Wind, level: 2, category: "Frontend Technologies" },
  { name: "GraphQL", icon: Lightbulb, level: 2, category: "Backend Technologies" },
  { name: "Sass", icon: Code2, level: 2, category: "Frontend Technologies" },
  { name: "Figma", icon: FileCode, level: 2, category: "Tools" },
  { name: "Vercel", icon: ServerCog, level: 2, category: "Tools" },
  { name: "Netlify", icon: ServerCog, level: 2, category: "Tools" },
  { name: "Jupyter", icon: FileCode, level: 2, category: "Tools" },
  { name: "Pandas", icon: Atom, level: 2, category: "Tools" },
  { name: "NumPy", icon: Atom, level: 2, category: "Tools" },
  { name: "Matplotlib", icon: Lightbulb, level: 2, category: "Tools" },
  { name: "Linux", icon: ServerCog, level: 2, category: "Tools" },
  { name: "Bash", icon: FileCode, level: 2, category: "Tools" },
  { name: "Firebase", icon: Database, level: 2, category: "Databases" },
  { name: "AWS", icon: ServerCog, level: 2, category: "Tools" },
  { name: "GCP", icon: ServerCog, level: 2, category: "Tools" },
  { name: "DBMS", icon: Database, level: 3, category: "Databases" },
  { name: "Data Structures", icon: Layers, level: 3, category: "Programming Concepts" },
  { name: "OOP", icon: Atom, level: 3, category: "Programming Concepts" },
  { name: "Operating Systems", icon: ServerCog, level: 3, category: "Programming Concepts" },
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
    liveUrl: "https://welth-green.vercel.app",
    icon: Briefcase,
  },
  {
    title: "Convohub- MERN Stack Real-Time chat application",
    description:
      "Built a real-time MERN stack chat app with Socket.IO for low-latency messaging. Designed scalable, event-driven backend, optimized MongoDB for efficient storage, and developed a responsive, modular React frontend for robust, maintainable user experience.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "Chakra-UI"],
    imageUrl: "/convohub.png",
    githubUrl: siteConfig.github + "/Convohub.git", // Replace
    liveUrl: "https://convohub-erob.onrender.com", // Replace
    icon: Lightbulb,
  },
  // {
  //   title: "TuneCV - AI Resume Analyzer",
  //   description:
  //     "Developed an AI-driven app to analyze resumes and suggest improvements. Utilized Next.js, Tailwind CSS, Python, FastAPI, and Gemini API for intelligent analysis, with PostgreSQL for robust data storage, delivering actionable feedback for enhanced career prospects.",
  //   tags: ["Next.js", "Tailwindcss", "Python", "FastAPI", "Gemini API", "Langchain", "PostgreSQL"],
  //   imageUrl: "/tunecv.png",
  //   githubUrl: siteConfig.github + "/tuneCV.git", // Replace
  //   // liveUrl: "#", // Replace
  //   icon: GraduationCap,
  // },
  {
    title: "Oralcare - AI Driven Dental Imaging Platform",
    description:
      "Developed a dental DICOM image upload app using Roboflow for detection and Gemini API for diagnostics, deployed on Vercel and Render for scalability.",
    tags: ["ReactJS", "Python", "FastAPI", "Gemini", "Roboflow"],
    imageUrl: "/oralcare.png",
    githubUrl: siteConfig.github + "/oral-care.git", // Replace with actual link
    liveUrl: "https://oral-care.vercel.app",
    icon: Briefcase,
  },
  {
    title: "Heart Risk Predictor",
    description: "Deployed a team-based heart disease risk predictor using SVM, Logistic Regression, Random Forest, KNN, Neural Networks, and ensembles on a 1M+ row dataset, achieving 95.21% accuracy.",
    tags: ["Python", "scikit-learn", "Tensorflow", "PyTorch", "HTML", "CSS", "Flask"],
    imageUrl: "/heart.png",
    githubUrl: siteConfig.github + "/HeartRiskPredictorML.git",
    liveUrl: "https://heart-risk-predictor.onrender.com",
    icon: Briefcase,
  },
  {
    title: "IngestIQ - Multi-Agent Document Processing System",
    description: "Built a FastAPI backend with React frontend for uploading documents (PDF, JSON, Email), classifying via Google Gemini, extracting fields, and storing memory in Redis.",
    tags: ["ReactJS", "Gemini", "Redis", "FastAPI"],
    imageUrl: "/ingestiq.png",
    githubUrl: siteConfig.github + "/IngestIQ.git",
    // liveUrl: "https://oral-care.vercel.app",
    icon: Briefcase,
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
