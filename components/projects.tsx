"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Filter, ArrowRight } from "lucide-react"

import Link from "next/link"
import { projects } from "@/lib/projects"

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Power BI", "Python", "Excel", "Tableau", "SQL"]

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tools.includes(activeFilter) || p.category === activeFilter)

  // Show only 2 projects on the home page horizontally
  const displayedProjects = filteredProjects.slice(0, 2)

  return (
    <section id="projects" className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Real-world data analysis projects delivering measurable business impact
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <Filter className="w-4 h-4 text-muted-foreground self-center" />
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              className="h-8 text-xs transition-all duration-300 hover:scale-105"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects grid - 2 compact cards side by side horizontally */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedProjects.map((project, index) => (
            <Card
              key={project.slug}
              className="p-0 flex flex-col justify-between overflow-hidden bg-card/50 backdrop-blur-md border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/10 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top Image - Flush to Top Edge */}
              <div className="relative h-48 w-full overflow-hidden select-none">
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                />
                <div className="absolute top-3 right-3 z-20">
                  <Badge className="bg-primary text-primary-foreground text-xs font-semibold shadow-md px-2.5 py-0.5">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Card Content - Compact Spacing */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div>
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Problem Statement</p>
                    <p className="text-xs text-foreground/90 leading-relaxed line-clamp-2">{project.problem}</p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Tools Used</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-[10px] px-2 py-0 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Key Insight</p>
                    <div className="text-xs text-foreground/80 flex items-start gap-1.5">
                      <span className="text-primary mt-0.5 font-bold">•</span>
                      <span className="line-clamp-2">{project.insights[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full h-9 text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-all bg-transparent border-primary/30 hover:scale-[1.01]"
                  >
                    <Link href={`/projects/${project.slug}`}>
                      View Details
                      <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-8 text-center">
          <Button
            asChild
            size="default"
            className="px-6 py-5 text-sm font-semibold shadow-md hover:shadow-primary/20 transition-all duration-300 hover:scale-105 group"
          >
            <Link href="/projects" className="inline-flex items-center gap-2">
              Load More Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

