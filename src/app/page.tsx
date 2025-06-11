"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import { SimpleAboutSection } from "@/components/simple";
// import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function PortfolioPage() {
  return (
    // Optional: Wrap with MotionConfig for global animation settings
    // <MotionConfig reducedMotion="user">
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SimpleAboutSection />
        {/* <AboutSection /> */}
        {/* <ProjectsSection /> */}
        {/* <ExperienceSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
    // </MotionConfig>
  )
}
