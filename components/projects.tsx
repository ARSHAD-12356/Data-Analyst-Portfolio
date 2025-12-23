"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Filter } from "lucide-react"

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      title: "Motorola Sales Analysis",
      problem: "Track and analyze sales metrics using interactive dashboards to support decision-making.",
      dataset: "Sales data records",
      tools: ["Power BI", "DAX", "Data Modeling"],
      insights: [
        "Created interactive dashboards with DAX measures",
        "Optimized data models for performance",
        "Visualized key sales trends and metrics",
      ],
      category: "Power BI",
      image: "/dashboard-sales-analytics.jpg",
    },
    {
      title: "Sales Dashboard",
      problem: "Perform end-to-end sales analysis focusing on profit, customer segments, and regions.",
      dataset: "Retail sales dataset",
      tools: ["Tableau", "SQL", "Data Visualization"],
      insights: [
        "Analyzed profit margins across different regions",
        "Identified key customer segments",
        "Created comprehensive visual reports on Tableau Public",
      ],
      category: "Tableau",
      image: "/supply-chain-visualization.jpg",
    },
    {
      title: "Road Accident Analysis",
      problem: "Analyze casualty data to identify patterns and improve road safety awareness.",
      dataset: "Road accident statistics",
      tools: ["Excel", "Pivot Tables", "Slicers"],
      insights: [
        "Built dashboard using PivotTables and Slicers",
        "Analyzed casualty trends by location and time",
        "Provided data-driven safety recommendations",
      ],
      category: "Excel",
      image: "/financial-dashboard.jpg",
    },
    {
      title: "Customer Churn Analysis",
      problem: "Identify factors contributing to customer churn and develop retention strategies.",
      dataset: "Customer behavior data",
      tools: ["Python", "Pandas", "Matplotlib"],
      insights: [
        "Conducted EDA to find churn drivers",
        "Visualized customer retention patterns",
        "Proposed actionable strategies to reduce churn",
      ],
      category: "Python",
      image: "/customer-segmentation-chart.jpg",
    },
  ]

  const filters = ["All", "Power BI", "Python", "Excel", "Tableau", "SQL"]

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tools.includes(activeFilter) || p.category === activeFilter)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world data analysis projects delivering measurable business impact
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
        <div className="grid gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-md border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left side - Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Problem Statement</p>
                    <p className="text-sm text-foreground leading-relaxed">{project.problem}</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Dataset</p>
                    <p className="text-sm text-foreground">{project.dataset}</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Tools Used</p>
                    <div className="flex flex-wrap gap-2">
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
                    <p className="text-xs font-medium text-muted-foreground mb-2">Key Insights</p>
                    <ul className="space-y-2">
                      {project.insights.map((insight, i) => (
                        <li key={i} className="text-sm text-foreground flex items-start gap-2">
                          <span className="text-primary mt-1 text-lg">•</span>
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all bg-transparent border-primary/30 hover:scale-105"
                  >
                    View Details
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* Right side - Image */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
