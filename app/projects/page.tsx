"use client"

import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { AnimatedBackground } from "@/components/animated-background"
import { AIChatbot } from "@/components/ai-chatbot"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Filter, ArrowLeft, Lightbulb } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects"

export default function AllProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "End-to-End", "Power BI", "Python", "Excel", "Tableau", "SQL"]

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tools.includes(activeFilter) || p.category === activeFilter)

  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen bg-background relative overflow-x-hidden pt-28 pb-20">
        <AnimatedBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back button */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-2xl mb-2">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">All Projects</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore the complete portfolio of data analysis projects, dashboards, and strategic business insights.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Filter className="w-5 h-5 text-muted-foreground self-center" />
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className="transition-all duration-300 hover:scale-105"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.slug}
                className="p-0 flex flex-col justify-between overflow-hidden bg-card/50 backdrop-blur-md border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Top Image */}
                <div className="relative h-64 w-full overflow-hidden select-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500 select-none pointer-events-none"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-primary text-primary-foreground font-semibold shadow-md">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Problem Statement
                      </p>
                      <p className="text-sm text-foreground/90 leading-relaxed">{project.problem}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Dataset
                      </p>
                      <p className="text-sm text-foreground/90">{project.dataset}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Tools Used
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((tool, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Key Insights
                      </p>
                      <ul className="space-y-2">
                        {project.insights.map((insight, i) => (
                          <li key={i} className="text-sm text-foreground/90 flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 mt-auto">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all bg-background/50 border-primary/30 hover:scale-[1.02]"
                    >
                      <Link href={`/projects/${project.slug}`}>
                        View Details
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <AIChatbot />
      </main>
    </ThemeProvider>
  )
}
