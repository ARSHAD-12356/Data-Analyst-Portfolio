import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Database, Target, Lightbulb, ExternalLink, Github, CheckCircle2, TrendingUp, Code2 } from "lucide-react"
import Link from "next/link"

interface ProjectPageProps {
    params: Promise<{
        slug: string
    }>
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <div className="mb-8 flex items-center justify-between">
                    <Link href="/projects">
                        <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-foreground">
                            <ArrowLeft className="w-4 h-4" />
                            Back to All Projects
                        </Button>
                    </Link>

                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" className="gap-2 bg-[#24292e] hover:bg-[#1b1f23] text-white shadow-md">
                                <Github className="w-4 h-4" />
                                View on GitHub
                                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                            </Button>
                        </a>
                    )}
                </div>

                <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
                    <div className="space-y-8">
                        {/* Title & Badges */}
                        <div className="space-y-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-sm py-1 px-3">
                                    {project.category}
                                </Badge>
                                {project.tools.map((tool) => (
                                    <Badge key={tool} variant="outline" className="text-xs">
                                        {tool}
                                    </Badge>
                                ))}
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                                {project.title}
                            </h1>
                        </div>

                        {/* Project Image */}
                        <div className="aspect-video w-full overflow-hidden rounded-xl border border-border shadow-2xl bg-card select-none">
                            <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-full object-cover object-top select-none pointer-events-none"
                            />
                        </div>

                        {/* KPI Cards (if available) */}
                        {project.kpis && project.kpis.length > 0 && (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
                                {project.kpis.map((kpi, index) => (
                                    <div key={index} className="p-4 rounded-xl bg-card/60 border border-border/80 text-center shadow-sm">
                                        <p className="text-xs text-muted-foreground font-medium mb-1">{kpi.label}</p>
                                        <p className="text-xl sm:text-2xl font-bold text-primary">{kpi.value}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Detail Sections */}
                        <div className="prose prose-invert max-w-none space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-3">
                                    <Target className="w-6 h-6" />
                                    Problem Statement & Overview
                                </h2>
                                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{project.problem}</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-3">
                                    <Database className="w-6 h-6" />
                                    Dataset Overview
                                </h2>
                                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{project.dataset}</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-3">
                                    <Lightbulb className="w-6 h-6" />
                                    Key Insights
                                </h2>
                                <ul className="space-y-3 list-none pl-0">
                                    {project.insights.map((insight, index) => (
                                        <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold mt-0.5">
                                                {index + 1}
                                            </span>
                                            <span className="text-foreground text-sm sm:text-base">{insight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Features Section */}
                            {project.features && project.features.length > 0 && (
                                <div>
                                    <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-3">
                                        <TrendingUp className="w-6 h-6" />
                                        Key Features & Interactivity
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {project.features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-2.5 p-3 rounded-lg bg-card/30 border border-border/60">
                                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                                                <span className="text-sm text-foreground/90">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* DAX & Analytics Section */}
                            {project.daxAnalytics && (
                                <div>
                                    <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-3">
                                        <Code2 className="w-6 h-6" />
                                        DAX & Time Intelligence Analytics
                                    </h2>
                                    <p className="text-base text-muted-foreground leading-relaxed p-4 rounded-lg bg-card/40 border border-border">
                                        {project.daxAnalytics}
                                    </p>
                                </div>
                            )}

                            {project.fullDescription && (
                                <div>
                                    <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-3">
                                        Detailed Summary
                                    </h2>
                                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar Details */}
                    <div className="lg:pl-6 lg:border-l lg:border-border">
                        <div className="sticky top-28 space-y-6">
                            <div className="p-6 rounded-2xl bg-card border border-border shadow-lg space-y-6">
                                <h3 className="text-xl font-bold border-b border-border pb-3">Project Specs</h3>
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Category</span>
                                        <span className="font-semibold text-foreground">{project.category}</span>
                                    </div>

                                    <div>
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Tools & Tech</span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tools.map((tool) => (
                                                <Badge key={tool} variant="outline" className="text-xs bg-primary/5">
                                                    {tool}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {project.github && (
                                        <div className="pt-2">
                                            <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Source Code</span>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Button className="w-full gap-2 bg-[#24292e] hover:bg-[#1b1f23] text-white">
                                                    <Github className="w-4 h-4" />
                                                    View GitHub
                                                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                                                </Button>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
