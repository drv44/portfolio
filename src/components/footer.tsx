import { siteConfig, socialLinks } from "@/lib/data"
import Link from "next/link"
import { CodeXml } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:py-12 max-w-screen-xl">
        <Link href="/" className="flex items-center gap-2 group">
          <CodeXml className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
          <span className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
            {siteConfig.name}
          </span>
        </Link>
        <div className="flex space-x-4">
          {Object.values(socialLinks).map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={social.url.split(".")[1] || "Social link"}
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
