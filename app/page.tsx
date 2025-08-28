"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  TrendingUp,
  BarChart3,
  Calculator,
  PieChart,
  DollarSign,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  Sun,
  Moon,
  Award,
  Briefcase,
  GraduationCap,
  Target,
} from "lucide-react"

export default function AhmedElmogyPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "Financial Modeling", level: 95, icon: <Calculator className="w-5 h-5" /> },
    { name: "Excel & VBA", level: 90, icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Python", level: 85, icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Valuation Analysis", level: 92, icon: <DollarSign className="w-5 h-5" /> },
    { name: "Risk Management", level: 88, icon: <PieChart className="w-5 h-5" /> },
    { name: "Bloomberg Terminal", level: 80, icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Financial Reporting", level: 87, icon: <Briefcase className="w-5 h-5" /> },
    { name: "Portfolio Optimization", level: 83, icon: <Target className="w-5 h-5" /> },
  ]

  const experiences = [
    {
      title: "Senior Financial Analyst",
      company: "Global Investment Partners",
      period: "2022 - Present",
      description:
        "Lead financial modeling and valuation projects for M&A transactions worth $500M+. Developed comprehensive DCF models and performed sensitivity analysis for strategic investment decisions.",
      achievements: [
        "Built financial models for 15+ acquisition targets",
        "Achieved 94% accuracy in valuation predictions",
        "Reduced model processing time by 40% through automation",
      ],
    },
    {
      title: "Financial Analyst",
      company: "Capital Advisory Group",
      period: "2020 - 2022",
      description:
        "Conducted financial analysis and due diligence for private equity investments. Created detailed financial projections and risk assessment models.",
      achievements: [
        "Analyzed 25+ investment opportunities annually",
        "Developed automated reporting dashboards",
        "Supported $200M+ in successful transactions",
      ],
    },
    {
      title: "Junior Analyst",
      company: "Financial Solutions Inc.",
      period: "2019 - 2020",
      description:
        "Performed financial research and analysis to support senior analysts. Built Excel models for various financial instruments and market analysis.",
      achievements: [
        "Created 50+ financial models and templates",
        "Improved data accuracy by 25%",
        "Earned FMVA® certification",
      ],
    },
  ]

  const projects = [
    {
      title: "Private Equity Portfolio Optimization",
      description:
        "Developed a comprehensive portfolio optimization model using Python and Monte Carlo simulation to maximize risk-adjusted returns for a $100M private equity fund.",
      technologies: ["Python", "NumPy", "Pandas", "Monte Carlo"],
      impact: "15% improvement in portfolio Sharpe ratio",
      link: "#",
    },
    {
      title: "M&A Valuation Model",
      description:
        "Built a sophisticated DCF model with scenario analysis for a $250M acquisition in the technology sector, including synergy calculations and sensitivity analysis.",
      technologies: ["Excel", "VBA", "Financial Modeling"],
      impact: "Supported successful $250M acquisition",
      link: "#",
    },
    {
      title: "Risk Management Dashboard",
      description:
        "Created an automated risk monitoring dashboard using Python and Excel integration to track portfolio risk metrics and generate daily reports.",
      technologies: ["Python", "Excel", "VBA", "Bloomberg API"],
      impact: "60% reduction in reporting time",
      link: "#",
    },
    {
      title: "Startup Valuation Framework",
      description:
        "Developed a comprehensive valuation framework for early-stage startups, incorporating multiple valuation methodologies and market comparables.",
      technologies: ["Excel", "Financial Modeling", "Market Research"],
      impact: "Valued 20+ startup investments",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Ticker Tape */}
      <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
        <div className="ticker-animation whitespace-nowrap text-sm font-mono">
          📈 NASDAQ +1.2% • S&P 500 +0.8% • DOW +0.5% • EUR/USD 1.0845 • BTC $45,230 • Gold $2,045 • Oil $78.50 • 10Y
          Treasury 4.25% 📊
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">Ahmed Elmogy, FMVA®</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "experience", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {section}
                </button>
              ))}
              <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="ml-4">
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {["home", "about", "experience", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 px-4 capitalize hover:bg-muted rounded-md transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted"
      >
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 600">
            <path
              d="M50,400 Q200,200 350,300 T650,250 T950,200"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-primary growth-line"
            />
            <path
              d="M50,450 Q150,350 300,380 T600,320 T950,280"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-secondary growth-line"
              style={{ animationDelay: "0.5s" }}
            />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 fade-in-up">
            <img
              src="/placeholder.svg?height=200&width=200&text=Ahmed+Elmogy"
              alt="Ahmed Elmogy"
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-primary shadow-2xl"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up" style={{ animationDelay: "0.2s" }}>
            Ahmed Elmogy
            <span className="block text-2xl md:text-3xl text-primary mt-2">FMVA® Certified</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-up" style={{ animationDelay: "0.4s" }}>
            Financial Modeling & Valuation Expert
          </p>

          <p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Certified FMVA® professional with expertise in financial analysis, strategic advisory, and building
            sophisticated financial models that drive investment decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button size="lg" onClick={() => scrollToSection("projects")} className="bg-primary hover:bg-primary/90">
              Explore My Portfolio
              <TrendingUp className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
              Get In Touch
              <Mail className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">Financial expertise meets analytical precision</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                As a certified FMVA® professional, I bring over 5 years of experience in financial modeling, valuation
                analysis, and strategic advisory services. My passion lies in transforming complex financial data into
                actionable insights that drive business growth and investment success.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Throughout my career, I've had the privilege of working on high-stakes M&A transactions, private equity
                investments, and portfolio optimization projects worth over $1 billion in aggregate value. My expertise
                spans across multiple industries, with a particular focus on technology and healthcare sectors.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                I believe in the power of data-driven decision making and continuously strive to enhance my skills
                through ongoing education and professional development. My FMVA® certification represents my commitment
                to maintaining the highest standards of financial analysis and modeling.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="font-medium">FMVA® Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="font-medium">5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="font-medium">$1B+ Transactions</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span>Education</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Master of Finance</h4>
                      <p className="text-muted-foreground">Cairo University, 2019</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Bachelor of Business Administration</h4>
                      <p className="text-muted-foreground">American University in Cairo, 2017</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span>Certifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2 mb-2">
                      FMVA® - Financial Modeling & Valuation Analyst
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      CFA Level II Candidate
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Bloomberg Market Concepts
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground">Building financial excellence through proven expertise</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Skills</h2>
            <p className="text-xl text-muted-foreground">Technical expertise that drives results</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {skill.icon}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">Transforming data into strategic insights</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="font-medium text-primary">{project.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">Let's discuss your financial modeling needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>ahmed.elmogy@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+20 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Cairo, Egypt</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Professional Links</h4>
                <div className="space-y-2">
                  <a
                    href="https://www.linkedin.com/in/ahmed-elmogy-fmva%C2%AE-a2563831a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'd love to hear about your project and discuss how I can help.</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    alert("Thank you for your message! I will get back to you soon.")
                  }}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or how I can help..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                    <Mail className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <TrendingUp className="w-6 h-6 text-primary" />
              <span className="font-semibold">Ahmed Elmogy, FMVA®</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">© 2025 Ahmed Elmogy. All rights reserved.</p>
              <p className="text-xs text-muted-foreground mt-1">Financial Modeling & Valuation Expert</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
