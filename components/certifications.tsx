"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, CheckCircle2, ShieldCheck } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export interface Certificate {
  title: string
  issuer: string
  category: string
  skills: string[]
  issuerColor: string
  badgeColor: string
}

export function Certifications() {
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

  const certifications: Certificate[] = [
    {
      title: "Microsoft Certified: Microsoft Fabric Analytic Engineer Associate",
      issuer: "Microsoft",
      category: "Professional Certification",
      skills: ["Microsoft Fabric", "Data Engineering", "Power BI", "Analytics"],
      issuerColor: "from-blue-600/20 to-sky-500/20",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      issuer: "Deloitte",
      category: "Job Simulation",
      skills: ["Data Analytics", "Business Insights", "Data Visualization"],
      issuerColor: "from-emerald-600/20 to-teal-500/20",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      title: "Tata Data Visualization: Empowering Business with Effective Insights",
      issuer: "Tata",
      category: "Job Simulation",
      skills: ["Data Visualization", "Dashboarding", "Executive Reporting"],
      issuerColor: "from-indigo-600/20 to-purple-500/20",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    },
    {
      title: "Data Science - AI/ML",
      issuer: "Coding Spoon",
      category: "Professional Certification",
      skills: ["Data Science", "Python", "Machine Learning", "EDA"],
      issuerColor: "from-amber-600/20 to-orange-500/20",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      title: "AI & Machine Learning: Generative AI, Agentic Systems and MLOps Deployment",
      issuer: "Coding Spoon",
      category: "Advanced Specialization",
      skills: ["Generative AI", "Agentic Systems", "MLOps", "Deployment"],
      issuerColor: "from-violet-600/20 to-fuchsia-500/20",
      badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/30",
    },
    {
      title: "Gen-AI Powered Data Analytics",
      issuer: "Tata",
      category: "Job Simulation",
      skills: ["Gen-AI Analytics", "Data Insights", "AI Workflows"],
      issuerColor: "from-cyan-600/20 to-blue-500/20",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },
  ]

  return (
    <section id="certifications" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-2">
            <ShieldCheck className="w-4 h-4" />
            Verified Credentials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Industry-recognized certifications and practical job simulations validating expertise in Data Analytics, AI/ML, and Business Intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden p-6 bg-card/40 backdrop-blur-xl border border-border/80 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 group flex flex-col justify-between ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top ambient color glow */}
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${cert.issuerColor} rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500`}
              />

              <div>
                {/* Header Icon & Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shadow-md">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className={`${cert.badgeColor} text-[11px] font-semibold px-2.5 py-0.5 border shadow-sm`}>
                    {cert.category}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug mb-3">
                  {cert.title}
                </h3>

                {/* Issuer with Checkmark */}
                <div className="flex items-center gap-1.5 mb-5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-foreground/90">{cert.issuer}</span>
                </div>
              </div>

              {/* Skills Badges */}
              <div className="pt-4 border-t border-border/50 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-[11px] px-2.5 py-0.5 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
