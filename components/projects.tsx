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
      title: "Sales Performance Dashboard",
      problem: "Track and analyze sales metrics across multiple regions",
      dataset: "Sales data (50K+ records)",
      tools: ["Power BI", "SQL", "Excel"],
      insights: [
        "25% increase in revenue identified",
        "Top 5 products contributing 60% sales",
        "3 underperforming regions optimized",
      ],
      category: "Power BI",
      image: "/dashboard-sales-analytics.jpg",
    },
    {
      title: "Customer Segmentation Analysis",
      problem: "Identify customer segments for targeted marketing",
      dataset: "Customer behavior data (100K+ records)",
      tools: ["Python", "SQL", "Tableau"],
      insights: [
        "5 distinct customer segments identified",
        "High-value customers: 15% of base",
        "Churn prediction accuracy: 87%",
      ],
      category: "Python",
      image: "/customer-segmentation-chart.jpg",
    },
    {
      title: "Financial Reporting Automation",
      problem: "Automate monthly financial reports",
      dataset: "Transaction data (200K+ records)",
      tools: ["Excel", "Power Query", "SQL"],
      insights: ["80% time saved on reporting", "Real-time P&L tracking", "Automated variance analysis"],
      category: "Excel",
      image: "/financial-dashboard.jpg",
    },
    {
      title: "Supply Chain Optimization",
      problem: "Reduce inventory costs and improve delivery times",
      dataset: "Logistics data (75K+ records)",
      tools: ["Tableau", "SQL", "Excel"],
      insights: [
        "15% reduction in holding costs",
        "Delivery time improved by 20%",
        "Optimal reorder points identified",
      ],
      category: "Tableau",
      image: "/supply-chain-visualization.jpg",
    },
    {
      title: "Marketing Campaign ROI Analysis",
      problem: "Measure effectiveness of marketing campaigns",
      dataset: "Campaign performance data",
      tools: ["Python", "Power BI", "SQL"],
      insights: [
        "Email campaigns: 3.5x ROI",
        "Social media: highest engagement",
        "Optimized budget allocation strategy",
      ],
      category: "Python",
      image: "/marketing-analytics.jpg",
    },
    {
      title: "Employee Attrition Prediction",
      problem: "Predict and prevent employee turnover",
      dataset: "HR data (10K+ employees)",
      tools: ["Python", "Excel", "Tableau"],
      insights: ["Key attrition factors identified", "82% prediction accuracy", "Retention strategies developed"],
      category: "Python",
      image: "/hr-analytics-dashboard.jpg",
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
