"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Data Analysis & Tools",
      icon: "📊",
      skills: [
        { name: "Microsoft Excel (Advanced)", level: 95 },
        { name: "SQL (Joins, CTEs, Window Functions)", level: 90 },
        { name: "Python (Pandas, NumPy)", level: 85 },
        { name: "R Programming", level: 75 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Data Visualization",
      icon: "📈",
      skills: [
        { name: "Power BI", level: 95 },
        { name: "Tableau", level: 90 },
        { name: "Excel Dashboards", level: 95 },
        { name: "Matplotlib & Seaborn", level: 80 },
      ],
      color: "from-cyan-500 to-teal-500",
    },
    {
      title: "Data Handling",
      icon: "🧹",
      skills: [
        { name: "Data Cleaning", level: 95 },
        { name: "Data Wrangling", level: 90 },
        { name: "ETL Processes", level: 85 },
        { name: "Exploratory Data Analysis", level: 90 },
      ],
      color: "from-teal-500 to-blue-500",
    },
    {
      title: "Analytics Concepts",
      icon: "📐",
      skills: [
        { name: "Descriptive Statistics", level: 95 },
        { name: "Inferential Statistics", level: 85 },
        { name: "KPI Tracking", level: 95 },
        { name: "Business Intelligence", level: 90 },
      ],
      color: "from-blue-400 to-cyan-400",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-4 py-2 rounded-full glass border border-accent/30 mb-2">
            <p className="text-sm text-accent font-medium">My expertise</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Comprehensive toolkit for data analysis, visualization, and insights generation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`p-8 glass border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl group-hover:scale-110 transition-transform">{category.icon}</div>
                <h3 className="text-xl font-semibold text-foreground font-heading">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 100 + skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Soft skills badges */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Soft Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Communication",
              "Problem Solving",
              "Critical Thinking",
              "Stakeholder Management",
              "Data Storytelling",
              "Team Collaboration",
            ].map((skill, index) => (
              <Badge
                key={index}
                className="px-6 py-3 text-sm glass border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
