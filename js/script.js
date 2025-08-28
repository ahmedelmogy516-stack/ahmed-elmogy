// DOM Elements
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const themeToggle = document.getElementById("theme-toggle")
const contactForm = document.getElementById("contact-form")
const modal = document.getElementById("project-modal")
const modalClose = document.querySelector(".modal-close")
const modalBody = document.getElementById("modal-body")

// Navigation Toggle
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Theme Toggle
const currentTheme = localStorage.getItem("theme") || "light"
document.documentElement.setAttribute("data-theme", currentTheme)
themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙"

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙"
})

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight
      const targetPosition = target.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Header Background on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)"
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      header.style.background = "rgba(44, 44, 44, 0.98)"
    }
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      header.style.background = "rgba(44, 44, 44, 0.95)"
    }
  }
})

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Add animation classes and observe elements
document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in animation to sections
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("fade-in")
    observer.observe(section)
  })

  // Add slide animations to experience items
  document.querySelectorAll(".experience-item").forEach((item, index) => {
    item.classList.add(index % 2 === 0 ? "slide-in-left" : "slide-in-right")
    observer.observe(item)
  })

  // Add fade-in to project cards
  document.querySelectorAll(".project-card").forEach((card) => {
    card.classList.add("fade-in")
    observer.observe(card)
  })
})

// Skills Progress Animation
const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll(".skill-progress")
        progressBars.forEach((bar) => {
          const width = bar.getAttribute("data-width")
          setTimeout(() => {
            bar.style.width = width + "%"
          }, 200)
        })
      }
    })
  },
  { threshold: 0.5 },
)

const skillsSection = document.querySelector(".skills")
if (skillsSection) {
  skillsObserver.observe(skillsSection)
}

// Contact Form Handling
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Basic validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.")
    return
  }

  // Simulate form submission
  alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`)
  contactForm.reset()
})

// Project Modal Functionality
const projectData = {
  1: {
    title: "SaaS Startup Valuation Model",
    description:
      "Comprehensive DCF model for a Series B SaaS company, incorporating revenue-based metrics and market comparables.",
    details: `
            <h3>Project Overview</h3>
            <p>Developed a sophisticated discounted cash flow (DCF) model for a Series B SaaS startup seeking $25M in funding. The model incorporated industry-specific metrics including ARR growth rates, customer acquisition costs, and lifetime value calculations.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li>Dynamic revenue forecasting based on subscription cohorts</li>
                <li>Monte Carlo simulation for sensitivity analysis</li>
                <li>Comparable company analysis with 15+ public SaaS companies</li>
                <li>Scenario modeling for different growth trajectories</li>
            </ul>
            
            <h3>Results</h3>
            <p>The valuation model achieved 98% accuracy compared to the final funding round valuation, helping the company secure optimal terms and validate their growth strategy.</p>
            
            <h3>Technologies Used</h3>
            <p>Excel VBA, Python (pandas, numpy), Monte Carlo simulation, Bloomberg Terminal</p>
        `,
    tech: ["Excel", "Python", "Monte Carlo", "VBA"],
  },
  2: {
    title: "Portfolio Optimization Engine",
    description: "Python-based portfolio optimization tool using Modern Portfolio Theory.",
    details: `
            <h3>Project Overview</h3>
            <p>Built a comprehensive portfolio optimization engine for a $25M hedge fund, implementing Modern Portfolio Theory principles to maximize risk-adjusted returns.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li>Efficient frontier calculation and visualization</li>
                <li>Risk parity and mean-variance optimization</li>
                <li>Real-time data integration via APIs</li>
                <li>Backtesting framework with performance attribution</li>
            </ul>
            
            <h3>Results</h3>
            <p>Achieved 22% improvement in Sharpe ratio and reduced portfolio volatility by 18% while maintaining target returns.</p>
            
            <h3>Technologies Used</h3>
            <p>Python, NumPy, Pandas, SciPy, Matplotlib, Alpha Vantage API</p>
        `,
    tech: ["Python", "NumPy", "Pandas", "APIs"],
  },
  3: {
    title: "M&A Financial Analysis",
    description: "Led financial due diligence for a $150M acquisition.",
    details: `
            <h3>Project Overview</h3>
            <p>Conducted comprehensive financial due diligence for a strategic acquisition in the manufacturing sector, analyzing target company's financial performance and identifying synergy opportunities.</p>
            
            <h3>Key Activities</h3>
            <ul>
                <li>Quality of earnings analysis and working capital assessment</li>
                <li>Synergy identification and quantification</li>
                <li>Integration cost modeling and timeline planning</li>
                <li>Risk assessment and mitigation strategies</li>
            </ul>
            
            <h3>Results</h3>
            <p>Identified $12M in annual synergies and uncovered potential risk factors worth $3M, enabling informed decision-making and successful deal completion.</p>
            
            <h3>Technologies Used</h3>
            <p>Excel, PowerBI, SQL Server, Financial modeling frameworks</p>
        `,
    tech: ["Excel", "PowerBI", "SQL", "Due Diligence"],
  },
  4: {
    title: "Real Estate Investment Dashboard",
    description: "Interactive dashboard for real estate investment analysis.",
    details: `
            <h3>Project Overview</h3>
            <p>Created an automated real estate investment analysis dashboard for a private equity firm specializing in commercial properties, featuring real-time market data and cash flow projections.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li>Automated property valuation using comparable sales</li>
                <li>Cash flow modeling with scenario analysis</li>
                <li>Market trend analysis and forecasting</li>
                <li>Interactive visualizations and reporting</li>
            </ul>
            
            <h3>Results</h3>
            <p>Reduced analysis time by 60% and improved investment decision accuracy through comprehensive data visualization and automated calculations.</p>
            
            <h3>Technologies Used</h3>
            <p>Tableau, Python, Real Estate APIs, SQL Database</p>
        `,
    tech: ["Tableau", "Python", "APIs", "SQL"],
  },
}

// Project card click handlers
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const projectId = card.getAttribute("data-project")
    const project = projectData[projectId]

    if (project) {
      modalBody.innerHTML = `
                <h2>${project.title}</h2>
                <div class="modal-project-content">
                    ${project.details}
                </div>
            `
      modal.style.display = "block"
      document.body.style.overflow = "hidden"
    }
  })
})

// Modal close handlers
modalClose.addEventListener("click", () => {
  modal.style.display = "none"
  document.body.style.overflow = "auto"
})

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  }
})

// Canvas Animations
function drawHeroChart() {
  const canvas = document.getElementById("hero-chart")
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  const width = canvas.width
  const height = canvas.height

  // Clear canvas
  ctx.clearRect(0, 0, width, height)

  // Generate rising line chart
  const points = []
  const numPoints = 50
  let value = 100

  for (let i = 0; i < numPoints; i++) {
    value += (Math.random() - 0.3) * 10 + 2 // Generally upward trend
    points.push({
      x: (i / (numPoints - 1)) * width,
      y: height - (value / 200) * height,
    })
  }

  // Draw line
  ctx.beginPath()
  ctx.strokeStyle = "#228B22"
  ctx.lineWidth = 3
  ctx.moveTo(points[0].x, points[0].y)

  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y)
  }
  ctx.stroke()

  // Draw area under curve
  ctx.lineTo(width, height)
  ctx.lineTo(0, height)
  ctx.closePath()

  const gradient = ctx.createLinearGradient(0, 0, 0, height)
  gradient.addColorStop(0, "rgba(34, 139, 34, 0.3)")
  gradient.addColorStop(1, "rgba(34, 139, 34, 0.05)")
  ctx.fillStyle = gradient
  ctx.fill()
}

function drawTimelineChart() {
  const canvas = document.getElementById("timeline-chart")
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  const width = canvas.width
  const height = canvas.height

  ctx.clearRect(0, 0, width, height)

  // Draw career progression bars
  const years = ["2019", "2021", "2023", "2025"]
  const values = [60, 75, 90, 95]
  const barWidth = width / years.length - 20

  years.forEach((year, index) => {
    const x = index * (width / years.length) + 10
    const barHeight = (values[index] / 100) * (height - 40)
    const y = height - barHeight - 20

    // Draw bar
    const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight)
    gradient.addColorStop(0, "#1E90FF")
    gradient.addColorStop(1, "#228B22")
    ctx.fillStyle = gradient
    ctx.fillRect(x, y, barWidth, barHeight)

    // Draw year label
    ctx.fillStyle = "#2C2C2C"
    ctx.font = "12px Roboto"
    ctx.textAlign = "center"
    ctx.fillText(year, x + barWidth / 2, height - 5)
  })
}

function drawProjectCharts() {
  const projectCharts = document.querySelectorAll(".project-chart")

  projectCharts.forEach((canvas, index) => {
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    ctx.clearRect(0, 0, width, height)

    // Different chart types for each project
    switch (index) {
      case 0: // Line chart for SaaS project
        drawLineChart(ctx, width, height, "#1E90FF")
        break
      case 1: // Pie chart for portfolio project
        drawPieChart(ctx, width, height)
        break
      case 2: // Bar chart for M&A project
        drawBarChart(ctx, width, height, "#228B22")
        break
      case 3: // Area chart for real estate project
        drawAreaChart(ctx, width, height, "#FFD700")
        break
    }
  })
}

function drawLineChart(ctx, width, height, color) {
  const points = []
  const numPoints = 20

  for (let i = 0; i < numPoints; i++) {
    points.push({
      x: (i / (numPoints - 1)) * width,
      y: height * 0.8 - Math.sin(i * 0.5) * height * 0.3 - Math.random() * 20,
    })
  }

  ctx.beginPath()
  ctx.strokeStyle = color
  ctx.lineWidth = 2
  ctx.moveTo(points[0].x, points[0].y)

  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y)
  }
  ctx.stroke()
}

function drawPieChart(ctx, width, height) {
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) / 3

  const data = [30, 25, 20, 15, 10]
  const colors = ["#228B22", "#1E90FF", "#FFD700", "#FF6B6B", "#4ECDC4"]

  let currentAngle = 0

  data.forEach((value, index) => {
    const sliceAngle = (value / 100) * 2 * Math.PI

    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle)
    ctx.lineTo(centerX, centerY)
    ctx.fillStyle = colors[index]
    ctx.fill()

    currentAngle += sliceAngle
  })
}

function drawBarChart(ctx, width, height, color) {
  const data = [65, 80, 45, 90, 75, 60]
  const barWidth = width / data.length - 10

  data.forEach((value, index) => {
    const x = index * (width / data.length) + 5
    const barHeight = (value / 100) * (height - 20)
    const y = height - barHeight - 10

    ctx.fillStyle = color
    ctx.fillRect(x, y, barWidth, barHeight)
  })
}

function drawAreaChart(ctx, width, height, color) {
  const points = []
  const numPoints = 15

  for (let i = 0; i < numPoints; i++) {
    points.push({
      x: (i / (numPoints - 1)) * width,
      y: height * 0.7 - Math.random() * height * 0.4,
    })
  }

  ctx.beginPath()
  ctx.moveTo(points[0].x, points[0].y)

  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y)
  }

  ctx.lineTo(width, height)
  ctx.lineTo(0, height)
  ctx.closePath()

  const gradient = ctx.createLinearGradient(0, 0, 0, height)
  gradient.addColorStop(0, color + "80")
  gradient.addColorStop(1, color + "20")
  ctx.fillStyle = gradient
  ctx.fill()
}

// Initialize charts when page loads
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    drawHeroChart()
    drawTimelineChart()
    drawProjectCharts()
  }, 500)
})

// Redraw charts on window resize
window.addEventListener("resize", () => {
  setTimeout(() => {
    drawHeroChart()
    drawTimelineChart()
    drawProjectCharts()
  }, 100)
})

// Add some interactive effects
document.addEventListener("mousemove", (e) => {
  const heroBackground = document.querySelector(".hero-background")
  if (heroBackground) {
    const x = (e.clientX / window.innerWidth) * 100
    const y = (e.clientY / window.innerHeight) * 100
    heroBackground.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`
  }
})

// Console log for debugging
console.log("[v0] Ahmed Elmogy Portfolio Website Loaded Successfully")
console.log("[v0] All interactive features initialized")
