"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Send, MessageCircle, Sparkles } from "lucide-react"

interface Message {
  role: "user" | "bot"
  content: string
}

const PORTFOLIO_DATA = {
  about: {
    name: "Md Arshad Raza",
    role: "Data Analyst",
    summary:
      "Data-driven professional with a proven track record of delivering actionable insights through advanced analytics and visualization. Specialized in identifying trends, optimizing processes, and supporting data-informed decision-making across various business domains.",
  },
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    university: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
    year: "2021-2024",
  },
  experience: [
    {
      role: "Data Analytics Intern",
      company: "Tech Insights Pvt Ltd",
      location: "Remote",
      period: "Jun 2024 - Aug 2024",
      achievements: [
        "Built 5+ interactive dashboards using Power BI and Excel",
        "Analyzed customer data to identify trends and patterns",
        "Collaborated with team to optimize data collection processes",
      ],
    },
    {
      role: "Data Analysis Project",
      company: "Academic Capstone Project",
      location: "University",
      period: "Jan 2024 - May 2024",
      achievements: [
        "Processed and cleaned 50K+ records using Python and Pandas",
        "Developed predictive models with 85% accuracy",
        "Created visualizations using Matplotlib and Seaborn",
      ],
    },
  ],
  skills: {
    dataAnalysis: [
      "Microsoft Excel (Advanced)",
      "SQL (Joins, CTEs, Window Functions)",
      "Python (Pandas, NumPy)",
      "R Programming",
    ],
    visualization: ["Power BI", "Tableau", "Excel Dashboards", "Matplotlib & Seaborn"],
    dataHandling: ["Data Cleaning", "Data Wrangling", "ETL Processes", "Exploratory Data Analysis"],
    analytics: ["Descriptive Statistics", "Inferential Statistics", "KPI Tracking", "Business Intelligence"],
  },
  softSkills: [
    "Communication",
    "Analytical Thinking",
    "Problem Solving",
    "Attention to Detail",
    "Business Understanding",
    "Adaptability",
  ],
  projects: [
    {
      title: "Sales Performance Dashboard",
      problem: "Track and analyze sales metrics across multiple regions",
      tools: ["Power BI", "SQL", "Excel"],
      insights: [
        "25% increase in revenue identified",
        "Top 5 products contributing 60% sales",
        "3 underperforming regions optimized",
      ],
    },
    {
      title: "Customer Segmentation Analysis",
      problem: "Identify customer segments for targeted marketing",
      tools: ["Python", "SQL", "Tableau"],
      insights: [
        "5 distinct customer segments identified",
        "High-value customers: 15% of base",
        "Churn prediction accuracy: 87%",
      ],
    },
    {
      title: "Financial Reporting Automation",
      problem: "Automate monthly financial reports",
      tools: ["Excel", "Power Query", "SQL"],
      insights: ["80% time saved on reporting", "Real-time P&L tracking", "Automated variance analysis"],
    },
    {
      title: "Supply Chain Optimization",
      problem: "Reduce inventory costs and improve delivery times",
      tools: ["Tableau", "SQL", "Excel"],
      insights: [
        "15% reduction in holding costs",
        "Delivery time improved by 20%",
        "Optimal reorder points identified",
      ],
    },
    {
      title: "Marketing Campaign ROI Analysis",
      problem: "Measure effectiveness of marketing campaigns",
      tools: ["Python", "Power BI", "SQL"],
      insights: [
        "Email campaigns: 3.5x ROI",
        "Social media: highest engagement",
        "Optimized budget allocation strategy",
      ],
    },
    {
      title: "Employee Attrition Prediction",
      problem: "Predict and prevent employee turnover",
      tools: ["Python", "Excel", "Tableau"],
      insights: ["Key attrition factors identified", "82% prediction accuracy", "Retention strategies developed"],
    },
  ],
  certifications: [
    { title: "Microsoft Certified: Data Analyst Associate", issuer: "Microsoft", year: "2023" },
    { title: "Google Data Analytics Professional Certificate", issuer: "Google", year: "2022" },
    { title: "Tableau Desktop Specialist", issuer: "Tableau", year: "2022" },
    { title: "Python for Data Science", issuer: "IBM", year: "2021" },
    { title: "Advanced SQL for Data Analytics", issuer: "Coursera", year: "2021" },
    { title: "Excel Skills for Business Specialization", issuer: "Macquarie University", year: "2020" },
  ],
  contact: {
    phones: ["8873867316", "9142312801"],
    email: "arshuarshad1551@gmail.com",
  },
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Hello! I'm ArshAi, the portfolio assistant for Md Arshad Raza.\n\nYou can ask me about: Education | Projects | Skills | Certifications | Experience",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim()

    // Greetings - exact format from system prompt
    if (input.match(/^(hi|hello|hey|hii|greetings|good morning|good afternoon|good evening)$/)) {
      return `Hello 👋 I'm ArshAi, the portfolio assistant for Md Arshad Raza.\nYou can ask me about education, projects, skills, certifications, experience, or contact details.`
    }

    // Who are you / About ArshAi
    if (input.match(/who are you|what are you|tell me about yourself|about you|introduce yourself|your name/)) {
      return `I'm ArshAi, a dedicated AI assistant for the portfolio website of Md Arshad Raza.\nMy job is to help visitors explore the portfolio content accurately and professionally.\n\nYou can ask me about:\n• Education\n• Projects\n• Skills (Technical & Soft Skills)\n• Experience\n• Certifications\n• Contact`
    }

    // About Arshad - only website information
    if (input.match(/about arshad|who is arshad|tell me about arshad/)) {
      return `**${PORTFOLIO_DATA.about.name}**\n${PORTFOLIO_DATA.about.role}\n\n${PORTFOLIO_DATA.about.summary}`
    }

    // Education - exact information only
    if (input.match(/education|degree|study|qualification|university|college|academic/)) {
      return `**Education**\n\nDegree: ${PORTFOLIO_DATA.education.degree}\nInstitution: ${PORTFOLIO_DATA.education.university}\nDuration: ${PORTFOLIO_DATA.education.year}`
    }

    // Experience - no exaggeration
    if (input.match(/experience|work|job|internship|career/)) {
      return `**Experience**\n\n${PORTFOLIO_DATA.experience
        .map(
          (exp) =>
            `${exp.role}\n${exp.company} | ${exp.location}\n${exp.period}\n\nKey Achievements:\n${exp.achievements.map((a) => `• ${a}`).join("\n")}`,
        )
        .join("\n\n")}`
    }

    // Skills - Technical (case insensitive)
    if (input.match(/^(skills?|technical skills?|tech skills?|tools?|technologies)$/)) {
      return `**Technical Skills**\n\n**Data Analysis & Tools:**\n${PORTFOLIO_DATA.skills.dataAnalysis.map((s) => `• ${s}`).join("\n")}\n\n**Data Visualization:**\n${PORTFOLIO_DATA.skills.visualization.map((s) => `• ${s}`).join("\n")}\n\n**Data Handling:**\n${PORTFOLIO_DATA.skills.dataHandling.map((s) => `• ${s}`).join("\n")}\n\n**Analytics Concepts:**\n${PORTFOLIO_DATA.skills.analytics.map((s) => `• ${s}`).join("\n")}`
    }

    // Soft Skills
    if (input.match(/soft skills?|interpersonal|communication skills?/)) {
      return `**Soft Skills**\n\n${PORTFOLIO_DATA.softSkills.map((s, i) => `${i + 1}. ${s}`).join("\n")}`
    }

    // Projects - only what's on the website
    if (input.match(/projects?|portfolio|work samples?|case studies?/)) {
      return `**Featured Projects** (${PORTFOLIO_DATA.projects.length} total)\n\n${PORTFOLIO_DATA.projects
        .slice(0, 3)
        .map(
          (p, i) =>
            `${i + 1}. **${p.title}**\nProblem: ${p.problem}\nTools: ${p.tools.join(", ")}\nKey Insights:\n${p.insights.map((ins) => `• ${ins}`).join("\n")}`,
        )
        .join("\n\n")}\n\n...and ${PORTFOLIO_DATA.projects.length - 3} more projects shown on the website.`
    }

    // Certifications - exact list
    if (input.match(/certifications?|certificates?|credentials?|certified/)) {
      return `**Certifications** (${PORTFOLIO_DATA.certifications.length} total)\n\n${PORTFOLIO_DATA.certifications.map((c, i) => `${i + 1}. ${c.title}\n   Issued by: ${c.issuer} (${c.year})`).join("\n\n")}`
    }

    // Contact - EXACT information as specified
    if (input.match(/contact|reach|email|phone|call|hire|connect|get in touch/)) {
      return `**Contact Information**\n\nPhone Numbers:\n• ${PORTFOLIO_DATA.contact.phones[0]}\n• ${PORTFOLIO_DATA.contact.phones[1]}\n\nEmail:\n• ${PORTFOLIO_DATA.contact.email}\n\nYou can also use the contact form on the website!`
    }

    // Specific tool queries - only if mentioned on website
    if (input.match(/power bi|powerbi/)) {
      const powerBIProjects = PORTFOLIO_DATA.projects.filter((p) => p.tools.includes("Power BI"))
      return `**Power BI Skills**\n\nArshad uses Power BI for data visualization and dashboards.\n\nRelated Projects:\n${powerBIProjects.map((p) => `• ${p.title}`).join("\n")}`
    }

    if (input.match(/python/)) {
      const pythonProjects = PORTFOLIO_DATA.projects.filter((p) => p.tools.includes("Python"))
      return `**Python Skills**\n\nArshad uses Python for data analysis with libraries like Pandas, NumPy, Matplotlib, and Seaborn.\n\nRelated Projects:\n${pythonProjects.map((p) => `• ${p.title}`).join("\n")}`
    }

    if (input.match(/sql/)) {
      const sqlProjects = PORTFOLIO_DATA.projects.filter((p) => p.tools.includes("SQL"))
      return `**SQL Skills**\n\nArshad is proficient in SQL with expertise in Joins, CTEs, and Window Functions.\n\nSQL is used in ${sqlProjects.length} projects shown on the website.`
    }

    if (input.match(/tableau/)) {
      const tableauProjects = PORTFOLIO_DATA.projects.filter((p) => p.tools.includes("Tableau"))
      return `**Tableau Skills**\n\nArshad uses Tableau for data visualization and analytics.\n\nRelated Projects:\n${tableauProjects.map((p) => `• ${p.title}`).join("\n")}`
    }

    if (input.match(/excel/)) {
      const excelProjects = PORTFOLIO_DATA.projects.filter((p) => p.tools.includes("Excel"))
      return `**Excel Skills**\n\nArshad has advanced Excel skills including Advanced Functions, Pivot Tables, Power Query, and Excel Dashboards.\n\nRelated Projects:\n${excelProjects.map((p) => `• ${p.title}`).join("\n")}`
    }

    // Anti-hallucination responses for out-of-scope queries
    if (input.match(/salary|future plans?|personal opinion|hobbies|age|married|family/)) {
      return `This information is not mentioned on the portfolio.`
    }

    // Default fallback - strict boundary enforcement
    return `This information is not available on the portfolio yet.\n\n**I can help you with:**\n• Education - Academic background\n• Experience - Work history and internships\n• Skills - Technical and soft skills\n• Projects - Portfolio work and case studies\n• Certifications - Professional credentials\n• Contact - How to reach Arshad\n\nPlease ask about these topics!`
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const botResponse = generateResponse(input)
      const botMessage: Message = { role: "bot", content: botResponse }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 800)
  }

  const suggestedPrompts = ["Education", "Skills", "Projects", "Experience"]

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-4 md:right-6 z-50 p-4 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-2xl hover:scale-110 transition-all duration-300 group animate-bounce hover:animate-none"
          aria-label="Open chatbot"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        </button>
      )}

      {isOpen && (
        <Card className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[85vh] sm:max-h-[550px] flex flex-col shadow-2xl border-2 border-primary/20 animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b bg-gradient-to-r from-primary to-accent text-white rounded-t-lg shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Sparkles className="w-6 h-6" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
              </div>
              <div>
                <h3 className="font-semibold">ArshAi</h3>
                <p className="text-xs opacity-90">Portfolio Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-muted/20 scroll-smooth min-h-0">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-slide-up`}
              >
                <div
                  className={`max-w-[85%] p-2.5 rounded-2xl ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-primary to-accent text-white"
                      : "bg-card border border-border shadow-sm"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-slide-up">
                <div className="bg-card border border-border p-2.5 rounded-2xl">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                    <span
                      className="w-2 h-2 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <span
                      className="w-2 h-2 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested prompts - only show on first load */}
          {messages.length <= 1 && (
            <div className="px-3 py-2 border-t bg-muted/10 shrink-0">
              <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(prompt)}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-200"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t bg-background shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 rounded-full border border-border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="rounded-full bg-gradient-to-br from-primary to-accent hover:opacity-90 transition-opacity duration-200 shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
