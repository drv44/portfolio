import { Button } from "@/components/ui/button"
import { siteConfig, socialLinks } from "@/lib/data"
import { ArrowDown, Download } from "lucide-react"
import Link from "next/link"
import TypingAnimation from "./typing-animation" // Adjusted path

export default function HeroSection() {
  const heroTexts = [siteConfig.role, "Full-Stack Developer", "Creative Coder", "Tech Enthusiast"]

  return (
    <section
      id="home"
      className="relative flex h-[calc(100vh-5rem)] min-h-[600px] items-center justify-center overflow-hidden bg-gradient-to-br from-background via-gray-900/50 to-secondary/30"
    >
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I&apos;m <span className="text-primary">{siteConfig.name}</span>
        </h1>
        <div className="mt-6 mb-10 text-xl text-muted-foreground sm:text-2xl md:text-3xl h-10 md:h-12">
          <TypingAnimation texts={heroTexts} />
        </div>
        <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          An {siteConfig.status} based in {siteConfig.location}, passionate about building innovative solutions and
          continuously learning new technologies.
        </p>
        <div className="mx-auto mt-8 flex max-w-md flex-col items-center justify-center gap-4 sm:flex-row md:mt-10">
          <Link href="#projects">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </Link>
          <a href="/resume.pdf" download="resume.pdf">
            {" "}
            {/* Replace with your actual resume path in public folder */}
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          {Object.values(socialLinks).map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={social.url.split(".")[1] || "Social link"}
            >
              <social.icon className="h-7 w-7" />
            </a>
          ))}
        </div>
      </div>
      <div
        className="absolute inset-0 bg-dot-pattern opacity-5"
        style={{
          backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
    </section>
  )
}
