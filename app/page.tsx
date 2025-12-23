"use client"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { SoftSkills } from "@/components/soft-skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { AnimatedBackground } from "@/components/animated-background"
import { AIChatbot } from "@/components/ai-chatbot"

export default function Portfolio() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background relative overflow-hidden">
        <AnimatedBackground />
        <Navbar />

        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          {/* <Skills /> */}
          <SoftSkills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="certifications">
          <Certifications />
        </div>
        <div id="contact">
          <Contact />
        </div>

        <AIChatbot />
      </main>
    </ThemeProvider>
  )
}
