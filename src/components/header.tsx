"use client"

import Link from "next/link"
import { siteConfig, navLinks } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Menu, X, CodeXml } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const codingProfiles = [
    { name: "LeetCode", url: siteConfig.leetcode },
    { name: "Codeforces", url: siteConfig.codeforces },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <CodeXml className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          <span className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
            {siteConfig.name.split(" ")[0]} {/* Show first name or initials */}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.hash}
              href={link.hash}
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {codingProfiles.map((profile) => (
            <Button key={profile.name} asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Link href={profile.url} target="_blank" rel="noopener noreferrer">
                {profile.name}
              </Link>
            </Button>
          ))}
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            <Button
              variant="outline"
              size="sm"
              className="ml-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Button>
          </Link>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-y border-border/40 shadow-xl">
          <nav className="flex flex-col items-stretch gap-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-muted rounded-md"
              >
                {link.name}
              </Link>
            ))}
            {codingProfiles.map((profile) => (
              <Button key={profile.name} asChild variant="ghost" size="sm" className="w-full text-muted-foreground hover:text-primary">
                <Link href={profile.url} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                  {profile.name}
                </Link>
              </Button>
            ))}
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              <Button
                variant="default"
                size="lg"
                className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
