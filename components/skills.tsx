"use client"

import { useRef, useState, useEffect } from "react"
import {
  BarChart3,
  Database,
  Code2,
  FileSpreadsheet,
  Sigma,
  BrainCircuit,
  LineChart,
  LayoutDashboard
} from "lucide-react"

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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Data Analysis",
      icon: BrainCircuit,
      tools: ["Exploratory Analysis", "Pattern Recognition", "Data Mining", "Predictive Modeling"],
      description: "Extracting meaningful insights from complex datasets to drive decision-making.",
      color: "text-blue-500",
      gradient: "from-blue-500/10 to-transparent"
    },
    {
      title: "Data Visualization",
      icon: LayoutDashboard,
      tools: ["Power BI", "Tableau", "Looker", "D3.js"],
      description: "Crafting interactive dashboards and compelling data stories.",
      color: "text-teal-500",
      gradient: "from-teal-500/10 to-transparent"
    },
    {
      title: "SQL & Databases",
      icon: Database,
      tools: ["PostgreSQL", "MySQL", "Snowflake", "Complex Queries"],
      description: "Designing efficient schemas and optimizing query performance.",
      color: "text-indigo-500",
      gradient: "from-indigo-500/10 to-transparent"
    },
    {
      title: "Python & Libraries",
      icon: Code2,
      tools: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      description: " Leveraging Python for advanced data manipulation and automation.",
      color: "text-yellow-500",
      gradient: "from-yellow-500/10 to-transparent"
    },
    {
      title: "Excel & Reporting",
      icon: FileSpreadsheet,
      tools: ["Advanced Formulas", "VBA & Macros", "Pivot Tables", "Power Query"],
      description: "Automating reporting workflows and financial modeling.",
      color: "text-green-500",
      gradient: "from-green-500/10 to-transparent"
    },
    {
      title: "Statistics & Analytics",
      icon: Sigma,
      tools: ["Hypothesis Testing", "A/B Testing", "Regression Analysis", "Probability"],
      description: "Applying statistical rigor to validate findings and trends.",
      color: "text-purple-500",
      gradient: "from-purple-500/10 to-transparent"
    }
  ]

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight font-heading">
            My Analytical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Skillset</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit designed to transform raw data into clear, actionable business strategies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header: Icon & Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-background/80 shadow-sm border border-border/50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ${category.color}`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-muted/50 border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Core Skill</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {category.description}
                </p>

                {/* Tools List */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground border border-transparent group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
