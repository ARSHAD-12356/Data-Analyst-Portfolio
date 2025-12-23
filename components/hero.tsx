"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, ChevronRight, Sparkles } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center relative px-4 pt-8 pb-16 md:pt-12 md:pb-20">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1 animate-fade-in-up">
            {/* Badge with sparkle */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <p className="text-sm text-primary font-medium">Welcome to my portfolio</p>
            </div>

            {/* Name and title with enhanced typography */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance tracking-tight font-heading bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text">
                Md Arshad Raza
              </h1>
              <h2 className="text-3xl md:text-5xl font-semibold text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text animate-gradient">
                Data Analyst
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-balance leading-relaxed">
              Transforming raw data into actionable insights through powerful visualizations and analytical thinking
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 bg-gradient-to-r from-primary to-accent hover:from-sky-500 hover:to-sky-400 text-white"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group hover:scale-105 transition-all duration-300 glass border-primary/30 hover:bg-sky-500/20 hover:border-sky-400 text-foreground bg-transparent"
                onClick={() => window.open("/Resume/Sample%20Resume_2025%20(1).pdf", "_blank")}
              >
                <Download className="mr-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group hover:scale-105 transition-all duration-300 glass border-accent/30 hover:bg-sky-500/20 hover:border-sky-400 text-foreground bg-transparent"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 w-4 h-4" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in">
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse-glow" />

              <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-primary/20 glass group-hover:scale-105 transition-all duration-500 shadow-2xl lg:mr-12">
                <img
                  src="/images/ei-1695124277387-removebg-preview-20-283-29.png"
                  alt="Md Arshad Raza"
                  className="w-full h-full object-cover object-center scale-125"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>

        {/* Quick stats - now below */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-12 max-w-5xl mx-auto animate-fade-in">
          {[
            { value: 10, suffix: "+", label: "Projects Completed" },
            { value: 8, suffix: "+", label: "Certifications" },
            { value: 15, suffix: "+", label: "Tools Learned" },
            { value: 20, suffix: "+", label: "Dashboards Built" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-br from-primary to-accent bg-clip-text mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}
