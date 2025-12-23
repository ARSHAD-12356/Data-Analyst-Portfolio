import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Database, Target, Lightbulb } from "lucide-react"
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
        <div className="min-h-screen bg-background pt-20 pb-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link href="/#projects">
                        <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Projects
                        </Button>
                    </Link>
                </div>

                <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{project.title}</h1>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                    {project.category}
                                </Badge>
                                {project.tools.map((tool) => (
                                    <Badge key={tool} variant="outline">
                                        {tool}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="aspect-video w-full overflow-hidden rounded-xl border border-border shadow-2xl">
                            <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                                <Target className="w-6 h-6" />
                                Problem Statement
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">{project.problem}</p>

                            <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mt-8">
                                <Database className="w-6 h-6" />
                                Dataset Overview
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">{project.dataset}</p>

                            <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mt-8">
                                <Lightbulb className="w-6 h-6" />
                                Key Insights
                            </h2>
                            <ul className="space-y-4 list-none pl-0">
                                {project.insights.map((insight, index) => (
                                    <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                                            {index + 1}
                                        </span>
                                        <span className="text-foreground">{insight}</span>
                                    </li>
                                ))}
                            </ul>

                            {project.fullDescription && (
                                <>
                                    <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mt-8">
                                        Overview
                                    </h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="lg:pl-8 lg:border-l lg:border-border">
                        <div className="sticky top-24 space-y-8">
                            <div className="p-6 rounded-2xl bg-card border border-border shadow-lg">
                                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-sm text-muted-foreground block mb-1">Category</span>
                                        <span className="font-medium text-foreground">{project.category}</span>
                                    </div>
                                    <div>
                                        <span className="text-sm text-muted-foreground block mb-1">Tools</span>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tools.map((tool) => (
                                                <Badge key={tool} variant="outline" className="text-xs">
                                                    {tool}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
