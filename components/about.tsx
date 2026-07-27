"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Database, BarChart3, Target, Lightbulb, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function About() {
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

  return (
    <section id="about" className="py-12 px-4 bg-muted/20" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-8 space-y-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-3 py-1 rounded-full glass border border-primary/30 mb-2">
            <p className="text-xs text-primary font-medium">Get to know me</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">About Me</h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto text-balance">
            Passionate data analyst with expertise in transforming complex datasets into strategic business insights
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 mb-10 items-stretch">
          {/* Left - Professional summary (Wider) */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <Card className="p-6 pt-5 glass border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-2 text-foreground font-heading">Professional Summary</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-base">
                <p>
                  Data-driven professional with a proven track record of delivering actionable insights through advanced
                  analytics and visualization. Specialized in identifying trends, optimizing processes, and supporting
                  data-informed decision-making across various business domains.
                </p>
                <p>
                  Proficient in extracting meaningful patterns from complex datasets and presenting findings through
                  compelling dashboards and reports. Strong focus on translating technical analysis into business value
                  and strategic recommendations.
                </p>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-3 text-sm">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <span>Problem-solving mindset with attention to detail</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-5 h-5 text-secondary" />
                    <span>Strong communication and stakeholder management</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right - Image section (Wider but constrained height) */}
          <div
            className={`lg:col-span-2 flex items-center justify-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-3xl blur-2xl animate-pulse-glow" />
              <Card className="relative p-5 glass border-primary/20 overflow-hidden hover:scale-105 transition-transform duration-500 h-full flex flex-col">
                <div className="flex-1 overflow-hidden mb-2 group rounded-xl max-h-[320px]">
                  <img
                    src="/images/arshad-about.png"
                    alt="Md Arshad Raza"
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-auto">
                  <h3 className="text-xl font-semibold text-foreground mb-1">Analytical Thinking</h3>
                  <p className="text-sm text-muted-foreground">
                    Combining technical expertise with business acumen to deliver data-driven solutions
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Data in numbers grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {[
            {
              icon: BarChart3,
              label: "Projects Delivered",
              value: "25+",
              color: "text-blue-500",
              bgColor: "bg-blue-500/10",
            },
            {
              icon: Database,
              label: "Datasets Analyzed",
              value: "100+",
              color: "text-cyan-500",
              bgColor: "bg-cyan-500/10",
            },
            {
              icon: TrendingUp,
              label: "Insights Generated",
              value: "500+",
              color: "text-teal-500",
              bgColor: "bg-teal-500/10",
            },
            { icon: Target, label: "Accuracy Rate", value: "98%", color: "text-blue-400", bgColor: "bg-blue-400/10" },
          ].map((stat, index) => (
            <Card
              key={index}
              className="p-6 glass border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
