"use client"

import { Card } from "@/components/ui/card"
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Experience() {
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

  const experiences = [
    {
      role: "Data Analyst Intern",
      company: "Elevate Labs",
      location: "Remote",
      period: "Aug 2025 - Oct 2025",
      description:
        "Specialized in data extraction, cleaning, and modeling using SQL and Power Query. Collaborated on creating visual reports and dashboards.",
      achievements: [
        "Performed data extraction, cleaning, and modeling using SQL and Power Query",
        "Collaborated on designing visual reports and interactive dashboards",
        "Utilized tools like Power BI, DAX, Vlookup, and Pivot Tables to drive insights",
      ],
    },
    {
      role: "Data Analyst Intern (Virtual)",
      company: "Deloitte, Australia",
      location: "Remote",
      period: "Jun 2025 - Jul 2025",
      description: "Completed a comprehensive job simulation focusing on data analysis and validation.",
      achievements: [
        "Completed Job Simulation involving realistic data analysis scenarios",
        "Conducted forensic dataset interpretation using Excel, SQL, and Python",
        "Validated data integrity and meaningful patterns for business decisions",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Rungta College Of Engineering And Technology",
      location: "Bhilai, India",
      period: "2023 - 2027",
      gpa: "Pursuing",
      details: "Focused on Data Science, Database Management, and Software Engineering",
    },
    {
      degree: "Certifications",
      institution: "Various Providers",
      location: "Online",
      period: "2023 - Present",
      gpa: "Completed",
      details: "Python For Data Science (IBM), Google Analytics (Google), Data Analytics with Python (NPTEL), Tata Data Visualization",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional journey and academic background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div
            className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 shadow-lg shadow-primary/10">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
            </div>

            <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-primary before:via-accent before:to-primary/30">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[21px] top-2 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/50 border-4 border-background group-hover:scale-125 transition-transform duration-300" />

                  <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 rounded-2xl">
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h4>
                      <div className="flex flex-col gap-2 text-sm">
                        <p className="text-primary font-semibold flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed pt-2">{exp.description}</p>
                      <ul className="space-y-2 pt-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-foreground flex items-start gap-2 leading-relaxed">
                            <span className="text-primary mt-0.5 text-lg">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 shadow-lg shadow-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-primary before:via-accent before:to-primary/30">
              {education.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[21px] top-2 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/50 border-4 border-background group-hover:scale-125 transition-transform duration-300" />

                  <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 rounded-2xl">
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h4>
                      <div className="flex flex-col gap-2 text-sm">
                        <p className="text-primary font-semibold flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {edu.location}
                          </span>
                        </div>
                        <p className="text-accent font-semibold">{edu.gpa}</p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed pt-2">{edu.details}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
