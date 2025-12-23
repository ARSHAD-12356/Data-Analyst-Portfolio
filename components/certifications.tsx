"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const certifications = [
    {
      title: "Microsoft Certified: Data Analyst Associate",
      issuer: "Microsoft",
      year: "2023",
      skills: ["Power BI", "Data Modeling", "DAX"],
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      year: "2022",
      skills: ["SQL", "Data Visualization", "R Programming"],
    },
    {
      title: "Tableau Desktop Specialist",
      issuer: "Tableau",
      year: "2022",
      skills: ["Tableau", "Data Visualization", "Analytics"],
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      year: "2021",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
    },
    {
      title: "Advanced SQL for Data Analytics",
      issuer: "Coursera",
      year: "2021",
      skills: ["SQL", "Database Management", "Query Optimization"],
    },
    {
      title: "Excel Skills for Business Specialization",
      issuer: "Macquarie University",
      year: "2020",
      skills: ["Excel", "Pivot Tables", "Power Query"],
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`p-6 bg-card/50 backdrop-blur-md border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 group cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>

              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              <p className="text-sm text-primary font-medium mb-1">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mb-4">{cert.year}</p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-xs bg-muted/50 text-foreground hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
