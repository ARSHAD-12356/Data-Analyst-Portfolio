"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { MessageSquare, Brain, Target, Eye, TrendingUp, Zap } from "lucide-react"

export function SoftSkills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const softSkills = [
    { name: "Communication", value: 90, icon: MessageSquare, color: "from-blue-500 to-cyan-500" },
    { name: "Analytical Thinking", value: 92, icon: Brain, color: "from-purple-500 to-pink-500" },
    { name: "Problem Solving", value: 88, icon: Target, color: "from-orange-500 to-red-500" },
    { name: "Attention to Detail", value: 85, icon: Eye, color: "from-green-500 to-emerald-500" },
    { name: "Business Understanding", value: 87, icon: TrendingUp, color: "from-indigo-500 to-violet-500" },
    { name: "Adaptability", value: 90, icon: Zap, color: "from-teal-500 to-cyan-500" },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Soft Skills</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto text-balance">
            Essential interpersonal and professional skills that complement technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {softSkills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-md border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
              </div>

              {/* Circular progress */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-muted opacity-20"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    strokeDashoffset={
                      isVisible ? `${2 * Math.PI * 50 * (1 - skill.value / 100)}` : `${2 * Math.PI * 50}`
                    }
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" className="text-primary" stopColor="currentColor" />
                      <stop offset="100%" className="text-accent" stopColor="currentColor" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">{skill.value}%</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Proficiency</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: isVisible ? `${skill.value}%` : "0%" }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
