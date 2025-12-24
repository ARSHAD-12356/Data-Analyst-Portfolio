"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Code, Briefcase, Award, Mail, Lightbulb } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Moon, Sun } from "lucide-react"

const NAVBAR_HEIGHT = 80 // px

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {

      setIsScrolled(window.scrollY > 50)

      const sections = ["home", "about", "skills", "projects", "experience", "certifications", "contact"]
      const scrollPosition = window.scrollY + NAVBAR_HEIGHT + 50 // Account for navbar height

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    handleScroll() // Call on mount
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Lightbulb },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - NAVBAR_HEIGHT

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Arshad<span className="text-accent">.</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </button>
              ))}
            </div>

            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative rounded-full w-11 h-11 hover:scale-110 transition-all duration-300 group border-2 border-transparent hover:border-primary/30"
                aria-label="Toggle theme"
              >
                {mounted && theme === "dark" ? (
                  <Sun className="w-5 h-5 text-foreground group-hover:text-white group-hover:rotate-90 transition-all duration-300 relative z-10" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground group-hover:text-white group-hover:-rotate-12 transition-all duration-300 relative z-10" />
                )}
                <div className="absolute inset-0 rounded-full bg-zinc-900 dark:bg-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden rounded-full"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-[500px] border-b border-border" : "max-h-0"
            }`}
        >
          <div className="px-4 py-4 space-y-2 bg-background/95 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
              >
                {item.icon && <item.icon className="w-5 h-5" />} {/* Ensure item.icon is defined */}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
