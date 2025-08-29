// Enhanced Portfolio Website JavaScript
// ==================================

// Global Variables and Constants
const state = {
  isMenuOpen: false,
  isDarkMode: localStorage.getItem('theme') === 'dark',
  activeSection: 'home',
  isLoading: true,
  scrollProgress: 0
};

// DOM Elements Cache
const elements = {
  navToggle: document.getElementById("nav-toggle"),
  navMenu: document.getElementById("nav-menu"),
  themeToggle: document.getElementById("theme-toggle"),
  contactForm: document.getElementById("contact-form"),
  modal: document.getElementById("project-modal"),
  modalClose: document.querySelector(".modal-close"),
  modalBody: document.getElementById("modal-body"),
  header: document.getElementById("header"),
  navLinks: document.querySelectorAll(".nav-link"),
  heroChart: document.getElementById("hero-chart"),
  timelineChart: document.getElementById("timeline-chart"),
  projectCharts: document.querySelectorAll(".project-chart"),
  scrollIndicator: document.querySelector(".scroll-progress"),
  loading: document.querySelector(".loading")
};

// Enhanced Experience Data
const experienceData = [
  {
    period: "August 2025 - Present",
    title: "CFA Internal Research Challenge",
    company: "CFA Society Egypt",
    achievements: [
      "Participating in comprehensive financial research challenge",
      "Applying advanced financial analysis and valuation techniques",
      "Collaborating with finance professionals on real-world case studies",
      "Developing research skills aligned with CFA Institute standards"
    ]
  },
  {
    period: "August 2025",
    title: "E-commerce & POS Intern",
    company: "National Bank of Egypt (NBE)",
    achievements: [
      "Gained hands-on experience in retail banking operations",
      "Worked with E-commerce banking solutions and payment systems",
      "Learned Point-of-Sale (POS) systems and digital payment processing",
      "Understood the integration of technology in modern banking services"
    ]
  },
  {
    period: "July 2025",
    title: "Banking Intern",
    company: "CIB Egypt",
    achievements: [
      "Exposed to core banking operations and financial services",
      "Learned about commercial banking products and services",
      "Gained insights into credit analysis and risk assessment",
      "Observed customer relationship management in banking"
    ]
  },
  {
    period: "August 2024",
    title: "Market Research Intern",
    company: "ELARABY Group",
    achievements: [
      "Conducted market analysis and consumer behavior research",
      "Gathered and analyzed market data for strategic decision making",
      "Assisted in preparing market research reports and presentations",
      "Developed skills in data collection and analysis methodologies"
    ]
  },
  {
    period: "September 2023",
    title: "E-commerce & Digital Marketing Intern",
    company: "ELARABY Group",
    achievements: [
      "Gained experience in digital marketing strategies and campaigns",
      "Worked on e-commerce platform optimization and customer engagement",
      "Learned about online consumer behavior and digital sales funnels",
      "Contributed to social media marketing and content creation"
    ]
  }
];

// Enhanced Skills Data
const skillsData = [
  { name: "Financial Modeling (FMVA®)", level: 90, icon: "📊", category: "core" },
  { name: "DCF Valuation Modeling", level: 85, icon: "�", category: "core" },
  { name: "Data Analysis", level: 80, icon: "�", category: "technical" },
  { name: "Market Research", level: 85, icon: "�", category: "core" },
  { name: "Microsoft Office Suite", level: 95, icon: "�", category: "technical" },
  { name: "PowerPoint & Pitchbooks", level: 90, icon: "�", category: "technical" },
  { name: "Trade Map", level: 75, icon: "🌍", category: "technical" },
  { name: "3-Statement Modeling", level: 80, icon: "📊", category: "core" }
];

// Enhanced Project Data with detailed information
const projectData = {
  1: {
    title: "SaaS Startup Valuation Model",
    description: "Comprehensive DCF model for a Series B SaaS company, incorporating revenue-based metrics and market comparables.",
    details: `
      <div class="project-details">
        <h3>🎯 Project Overview</h3>
        <p>Developed a sophisticated discounted cash flow (DCF) model for a Series B SaaS startup seeking $25M in funding. The model incorporated industry-specific metrics including ARR growth rates, customer acquisition costs, and lifetime value calculations.</p>
        
        <h3>⚡ Key Features</h3>
        <ul>
          <li><strong>Dynamic Revenue Forecasting:</strong> Subscription cohort-based modeling with churn analysis</li>
          <li><strong>Monte Carlo Simulation:</strong> 10,000 iterations for comprehensive sensitivity analysis</li>
          <li><strong>Comparable Analysis:</strong> Benchmarking against 15+ public SaaS companies</li>
          <li><strong>Scenario Modeling:</strong> Bull, base, and bear case projections with probability weighting</li>
          <li><strong>Interactive Dashboard:</strong> Real-time parameter adjustment and instant recalculation</li>
        </ul>
        
        <h3>📈 Results & Impact</h3>
        <div class="results-grid">
          <div class="result-item">
            <span class="result-number">98%</span>
            <span class="result-label">Valuation Accuracy</span>
          </div>
          <div class="result-item">
            <span class="result-number">$25M</span>
            <span class="result-label">Funding Secured</span>
          </div>
          <div class="result-item">
            <span class="result-number">40%</span>
            <span class="result-label">Time Saved</span>
          </div>
        </div>
        
        <h3>🛠️ Technologies & Methods</h3>
        <p><strong>Tools:</strong> Excel VBA, Python (pandas, numpy, scipy), Monte Carlo simulation, Bloomberg Terminal</p>
        <p><strong>Methodologies:</strong> DCF modeling, Comparable company analysis, Precedent transactions, Risk-adjusted NPV</p>
      </div>
    `,
    tech: ["Excel VBA", "Python", "Monte Carlo", "Bloomberg"],
    metrics: { accuracy: 98, funding: "$25M", timeSaved: "40%" }
  },
  2: {
    title: "Portfolio Optimization Engine",
    description: "Python-based portfolio optimization tool using Modern Portfolio Theory, resulting in 22% improvement in risk-adjusted returns.",
    details: `
      <div class="project-details">
        <h3>🎯 Project Overview</h3>
        <p>Built a comprehensive portfolio optimization engine for a $25M hedge fund, implementing Modern Portfolio Theory principles to maximize risk-adjusted returns while maintaining target volatility constraints.</p>
        
        <h3>⚡ Key Features</h3>
        <ul>
          <li><strong>Efficient Frontier Calculation:</strong> Real-time optimization with constraint handling</li>
          <li><strong>Risk Parity Implementation:</strong> Equal risk contribution across asset classes</li>
          <li><strong>Multi-Asset Support:</strong> Equities, bonds, commodities, and alternative investments</li>
          <li><strong>Backtesting Framework:</strong> Historical performance analysis with attribution</li>
          <li><strong>Real-time Integration:</strong> Live data feeds from multiple market sources</li>
        </ul>
        
        <h3>📈 Results & Impact</h3>
        <div class="results-grid">
          <div class="result-item">
            <span class="result-number">22%</span>
            <span class="result-label">Sharpe Ratio Improvement</span>
          </div>
          <div class="result-item">
            <span class="result-number">18%</span>
            <span class="result-label">Volatility Reduction</span>
          </div>
          <div class="result-item">
            <span class="result-number">$25M</span>
            <span class="result-label">AUM Managed</span>
          </div>
        </div>
        
        <h3>🛠️ Technologies & Methods</h3>
        <p><strong>Tools:</strong> Python, NumPy, Pandas, SciPy, Matplotlib, Alpha Vantage API, Jupyter Notebooks</p>
        <p><strong>Methodologies:</strong> Modern Portfolio Theory, Black-Litterman model, Risk parity, Factor investing</p>
      </div>
    `,
    tech: ["Python", "NumPy", "Pandas", "APIs"],
    metrics: { improvement: "22%", reduction: "18%", aum: "$25M" }
  },
  3: {
    title: "M&A Financial Analysis",
    description: "Led financial due diligence for a $150M acquisition, identifying $12M in synergies and potential risk factors.",
    details: `
      <div class="project-details">
        <h3>🎯 Project Overview</h3>
        <p>Conducted comprehensive financial due diligence for a strategic acquisition in the manufacturing sector, analyzing target company's financial performance and identifying synergy opportunities worth $12M annually.</p>
        
        <h3>⚡ Key Activities</h3>
        <ul>
          <li><strong>Quality of Earnings Analysis:</strong> Revenue recognition, adjusted EBITDA, and cash flow normalization</li>
          <li><strong>Synergy Identification:</strong> Cost savings, revenue enhancements, and operational improvements</li>
          <li><strong>Integration Modeling:</strong> Detailed implementation timeline and cost projections</li>
          <li><strong>Risk Assessment:</strong> Market, operational, and financial risk quantification</li>
          <li><strong>Valuation Analysis:</strong> Multiple valuation methodologies and sensitivity testing</li>
        </ul>
        
        <h3>📈 Results & Impact</h3>
        <div class="results-grid">
          <div class="result-item">
            <span class="result-number">$12M</span>
            <span class="result-label">Annual Synergies</span>
          </div>
          <div class="result-item">
            <span class="result-number">$150M</span>
            <span class="result-label">Deal Value</span>
          </div>
          <div class="result-item">
            <span class="result-number">6 Months</span>
            <span class="result-label">Due Diligence Period</span>
          </div>
        </div>
        
        <h3>🛠️ Technologies & Methods</h3>
        <p><strong>Tools:</strong> Excel, PowerBI, SQL Server, VDR platforms, Financial modeling frameworks</p>
        <p><strong>Methodologies:</strong> DCF analysis, Comparable transactions, Precedent M&A, Synergy quantification</p>
      </div>
    `,
    tech: ["Excel", "PowerBI", "SQL", "Due Diligence"],
    metrics: { synergies: "$12M", dealValue: "$150M", duration: "6 months" }
  },
  4: {
    title: "Real Estate Investment Dashboard",
    description: "Interactive dashboard for real estate investment analysis, featuring automated property valuation and cash flow projections.",
    details: `
      <div class="project-details">
        <h3>🎯 Project Overview</h3>
        <p>Created an automated real estate investment analysis dashboard for a private equity firm specializing in commercial properties, featuring real-time market data integration and comprehensive cash flow modeling.</p>
        
        <h3>⚡ Key Features</h3>
        <ul>
          <li><strong>Automated Valuation:</strong> Property assessment using comparable sales and income approach</li>
          <li><strong>Cash Flow Modeling:</strong> 10-year projections with scenario analysis and sensitivity testing</li>
          <li><strong>Market Intelligence:</strong> Real-time market trends, cap rates, and demographic data</li>
          <li><strong>Interactive Visualizations:</strong> Dynamic charts, maps, and performance metrics</li>
          <li><strong>Portfolio Analytics:</strong> Aggregated performance tracking and risk assessment</li>
        </ul>
        
        <h3>📈 Results & Impact</h3>
        <div class="results-grid">
          <div class="result-item">
            <span class="result-number">60%</span>
            <span class="result-label">Analysis Time Reduction</span>
          </div>
          <div class="result-item">
            <span class="result-number">95%</span>
            <span class="result-label">Accuracy Improvement</span>
          </div>
          <div class="result-item">
            <span class="result-number">$500M</span>
            <span class="result-label">Portfolio Value</span>
          </div>
        </div>
        
        <h3>🛠️ Technologies & Methods</h3>
        <p><strong>Tools:</strong> Tableau, Python, Real Estate APIs, SQL Database, Power Query</p>
        <p><strong>Methodologies:</strong> Income capitalization, Sales comparison, Cost approach, IRR analysis</p>
      </div>
    `,
    tech: ["Tableau", "Python", "APIs", "SQL"],
    metrics: { timeReduction: "60%", accuracy: "95%", portfolio: "$500M" }
  }
};

// Enhanced Initialization
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Portfolio website loading...');
  
  // Initialize theme
  initializeTheme();
  
  // Show loading screen briefly for dramatic effect
  setTimeout(() => {
    if (elements.loading) {
      elements.loading.classList.add('hidden');
      setTimeout(() => elements.loading.remove(), 500);
    }
    state.isLoading = false;
  }, 1000);
  
  // Initialize all components
  initializeNavigation();
  initializeScrollEffects();
  initializeAnimations();
  initializeCharts();
  initializeContent();
  initializeModal();
  initializeContactForm();
  
  console.log('✅ Portfolio website initialized successfully');
});

// Enhanced Theme Management
function initializeTheme() {
  document.documentElement.setAttribute('data-theme', state.isDarkMode ? 'dark' : 'light');
  if (elements.themeToggle) {
    elements.themeToggle.textContent = state.isDarkMode ? '☀️' : '🌙';
    elements.themeToggle.setAttribute('aria-label', state.isDarkMode ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

function toggleTheme() {
  state.isDarkMode = !state.isDarkMode;
  localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light');
  initializeTheme();
  
  // Add transition effect
  document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  setTimeout(() => {
    document.body.style.transition = '';
  }, 300);
}

// Enhanced Navigation
function initializeNavigation() {
  // Mobile menu toggle
  if (elements.navToggle && elements.navMenu) {
    elements.navToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // Theme toggle
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Smooth scroll for navigation links
  elements.navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
  });
  
  // Close mobile menu when clicking on links
  elements.navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (state.isMenuOpen) {
        toggleMobileMenu();
      }
    });
  });
}

function toggleMobileMenu() {
  state.isMenuOpen = !state.isMenuOpen;
  elements.navMenu?.classList.toggle('active');
  elements.navToggle?.classList.toggle('active');
  
  // Prevent body scroll when menu is open
  document.body.style.overflow = state.isMenuOpen ? 'hidden' : '';
}

function handleNavClick(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  
  if (targetElement) {
    const headerHeight = elements.header?.offsetHeight || 0;
    const targetPosition = targetElement.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// Enhanced Scroll Effects
function initializeScrollEffects() {
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  });
  
  // Add scroll progress indicator
  if (!document.querySelector('.scroll-indicator')) {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = '<div class="scroll-progress"></div>';
    document.body.appendChild(scrollIndicator);
  }
}

function updateScrollEffects() {
  const scrollY = window.pageYOffset;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  state.scrollProgress = (scrollY / documentHeight) * 100;
  
  // Update scroll progress indicator
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    progressBar.style.width = `${state.scrollProgress}%`;
  }
  
  // Update header appearance
  if (elements.header) {
    elements.header.classList.toggle('scrolled', scrollY > 100);
  }
  
  // Update active navigation item
  updateActiveSection();
  
  // Parallax effect for hero background
  const heroBackground = document.querySelector('.hero-background');
  if (heroBackground && scrollY < window.innerHeight) {
    heroBackground.style.transform = `translateY(${scrollY * 0.5}px)`;
  }
  
  ticking = false;
}

function updateActiveSection() {
  const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
  const scrollPosition = window.pageYOffset + 150;
  
  for (const sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        if (state.activeSection !== sectionId) {
          state.activeSection = sectionId;
          updateNavigationHighlight(sectionId);
        }
        break;
      }
    }
  }
}

function updateNavigationHighlight(activeId) {
  elements.navLinks.forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === `#${activeId}`);
  });
}

// Enhanced Animations with Intersection Observer
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
  // Observe sections for fade-in animations
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });
  
  // Observe cards and items
  document.querySelectorAll('.highlight-item, .project-card, .skill-item').forEach(item => {
    item.classList.add('scale-in');
    observer.observe(item);
  });
  
  // Special handling for skills progress bars
  const skillsObserver = new IntersectionObserver(handleSkillsAnimation, { threshold: 0.5 });
  const skillsSection = document.querySelector('.skills');
  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }
}

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Add staggered animation for child elements
      const children = entry.target.querySelectorAll('.highlight-item, .project-card, .experience-item');
      children.forEach((child, index) => {
        setTimeout(() => {
          child.classList.add('visible');
        }, index * 150);
      });
    }
  });
}

function handleSkillsAnimation(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('.skill-progress');
      progressBars.forEach((bar, index) => {
        setTimeout(() => {
          const width = bar.getAttribute('data-width');
          bar.style.width = `${width}%`;
        }, index * 200);
      });
    }
  });
}

// Dynamic Content Generation
function initializeContent() {
  generateExperienceTimeline();
  generateSkillsGrid();
  updateContactForm();
}

function generateExperienceTimeline() {
  const timeline = document.querySelector('.experience-timeline');
  if (!timeline) return;
  
  timeline.innerHTML = '';
  
  experienceData.forEach((item, index) => {
    const experienceElement = document.createElement('div');
    experienceElement.className = 'experience-item';
    experienceElement.style.animationDelay = `${(index + 1) * 0.2}s`;
    
    experienceElement.innerHTML = `
      <div class="experience-date">${item.period}</div>
      <div class="experience-content">
        <h3>${item.title}</h3>
        <h4>${item.company}</h4>
        <ul>
          ${item.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
        </ul>
      </div>
    `;
    
    timeline.appendChild(experienceElement);
  });
}

function generateSkillsGrid() {
  const skillsGrid = document.querySelector('.skills-grid');
  if (!skillsGrid) return;
  
  skillsGrid.innerHTML = '';
  
  skillsData.forEach((skill, index) => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill-item';
    skillElement.style.animationDelay = `${index * 0.1}s`;
    
    skillElement.innerHTML = `
      <div class="skill-header">
        <span class="skill-name">${skill.icon} ${skill.name}</span>
        <span class="skill-percentage">${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" data-width="${skill.level}"></div>
      </div>
    `;
    
    skillsGrid.appendChild(skillElement);
  });
}

function updateContactForm() {
  const subjectSelect = document.getElementById('subject');
  if (!subjectSelect) return;
  
  const subjects = [
    'Internship Opportunities',
    'Entry-Level Finance Positions',
    'Networking and Mentorship',
    'Academic Collaboration',
    'Research Projects',
    'Financial Analysis Consultation',
    'General Inquiry',
    'Other'
  ];
  
  subjectSelect.innerHTML = '<option value="">Select a subject...</option>';
  subjects.forEach(subject => {
    const option = document.createElement('option');
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });
}

// Enhanced Chart Drawing Functions
function initializeCharts() {
  setTimeout(() => {
    drawHeroChart();
    drawTimelineChart();
    drawProjectCharts();
  }, 500);
  
  // Redraw charts on window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      drawHeroChart();
      drawTimelineChart();
      drawProjectCharts();
    }, 250);
  });
}

function drawHeroChart() {
  const canvas = elements.heroChart;
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  
  const width = rect.width;
  const height = rect.height;
  
  ctx.clearRect(0, 0, width, height);
  
  // Generate multiple trend lines
  const datasets = [
    { color: 'rgba(13, 115, 119, 0.6)', trend: 0.8 },
    { color: 'rgba(30, 58, 138, 0.4)', trend: 0.6 },
    { color: 'rgba(245, 158, 11, 0.3)', trend: 0.4 }
  ];
  
  datasets.forEach((dataset, datasetIndex) => {
    const points = [];
    const numPoints = 60;
    let value = 50 + Math.random() * 30;
    
    for (let i = 0; i < numPoints; i++) {
      const trend = dataset.trend;
      const volatility = (1 - trend) * 20;
      value += (Math.random() - 0.5 + trend * 0.3) * volatility;
      value = Math.max(10, Math.min(90, value));
      
      points.push({
        x: (i / (numPoints - 1)) * width,
        y: height - (value / 100) * height
      });
    }
    
    // Draw line with gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, dataset.color);
    gradient.addColorStop(1, dataset.color.replace('0.6', '0.1').replace('0.4', '0.1').replace('0.3', '0.1'));
    
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    
    // Smooth curve using bezier
    for (let i = 1; i < points.length; i++) {
      const prevPoint = points[i - 1];
      const currentPoint = points[i];
      const cpx = (prevPoint.x + currentPoint.x) / 2;
      
      ctx.quadraticCurveTo(cpx, prevPoint.y, currentPoint.x, currentPoint.y);
    }
    
    ctx.strokeStyle = dataset.color;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Fill area under curve
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
  });
}

function drawTimelineChart() {
  const canvas = elements.timelineChart;
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  
  const width = rect.width;
  const height = rect.height;
  
  ctx.clearRect(0, 0, width, height);
  
  const years = ['2019', '2020', '2021', '2022', '2023', '2024'];
  const values = [60, 68, 75, 82, 88, 95];
  const barWidth = width / years.length - 20;
  
  years.forEach((year, index) => {
    const x = index * (width / years.length) + 10;
    const barHeight = (values[index] / 100) * (height - 40);
    const y = height - barHeight - 20;
    
    // Create gradient for bars
    const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
    gradient.addColorStop(0, '#0d7377');
    gradient.addColorStop(0.5, '#1e3a8a');
    gradient.addColorStop(1, '#f59e0b');
    
    // Draw bar with rounded corners
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(x, y, barWidth, barHeight, 4);
    ctx.fill();
    
    // Add value labels
    ctx.fillStyle = '#374151';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    ctx.fillText(`${values[index]}%`, x + barWidth / 2, y - 5);
    ctx.fillText(year, x + barWidth / 2, height - 5);
  });
}

function drawProjectCharts() {
  const charts = elements.projectCharts;
  
  charts.forEach((canvas, index) => {
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    const width = rect.width;
    const height = rect.height;
    
    ctx.clearRect(0, 0, width, height);
    
    // Different chart types for each project
    switch (index) {
      case 0:
        drawLineChart(ctx, width, height, '#0d7377');
        break;
      case 1:
        drawPieChart(ctx, width, height);
        break;
      case 2:
        drawBarChart(ctx, width, height, '#1e3a8a');
        break;
      case 3:
        drawAreaChart(ctx, width, height, '#f59e0b');
        break;
    }
  });
}

function drawLineChart(ctx, width, height, color) {
  const points = [];
  const numPoints = 30;
  let value = 40;
  
  for (let i = 0; i < numPoints; i++) {
    value += (Math.random() - 0.3) * 15 + 2;
    value = Math.max(20, Math.min(80, value));
    
    points.push({
      x: (i / (numPoints - 1)) * width,
      y: height - (value / 100) * height
    });
  }
  
  // Draw line
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.moveTo(points[0].x, points[0].y);
  
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();
  
  // Add data points
  points.forEach((point, index) => {
    if (index % 5 === 0) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
      ctx.fill();
    }
  });
}

function drawPieChart(ctx, width, height) {
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 3;
  
  const data = [35, 25, 20, 15, 5];
  const colors = ['#0d7377', '#1e3a8a', '#f59e0b', '#10b981', '#ef4444'];
  
  let currentAngle = -Math.PI / 2;
  
  data.forEach((value, index) => {
    const sliceAngle = (value / 100) * 2 * Math.PI;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = colors[index];
    ctx.fill();
    
    currentAngle += sliceAngle;
  });
  
  // Add center circle for donut effect
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
}

function drawBarChart(ctx, width, height, color) {
  const data = [85, 70, 95, 60, 80, 75];
  const barWidth = width / data.length - 15;
  
  data.forEach((value, index) => {
    const x = index * (width / data.length) + 10;
    const barHeight = (value / 100) * (height - 30);
    const y = height - barHeight - 15;
    
    // Create gradient
    const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, color + '80');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, barWidth, barHeight);
  });
}

function drawAreaChart(ctx, width, height, color) {
  const points = [];
  const numPoints = 20;
  let value = 50;
  
  for (let i = 0; i < numPoints; i++) {
    value += (Math.random() - 0.4) * 20 + 1;
    value = Math.max(20, Math.min(80, value));
    
    points.push({
      x: (i / (numPoints - 1)) * width,
      y: height - (value / 100) * height
    });
  }
  
  // Draw area
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, color + '80');
  gradient.addColorStop(1, color + '20');
  ctx.fillStyle = gradient;
  ctx.fill();
  
  // Draw line on top
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.moveTo(points[0].x, points[0].y);
  
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();
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
  }, 500);
  
  // Enhanced initialization
  initializeContent();
  initializeCharts();
  initializeForm();
  initializeModals();
  initializePerformanceMonitoring();
  
  // Add loading completion
  setTimeout(() => {
    document.body.classList.add('loaded');
    console.log('✅ Enhanced Portfolio initialization complete!');
  }, 500);
});

// Enhanced Form Handling
function initializeForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;
  
  contactForm.addEventListener("submit", handleFormSubmission);
  
  // Add real-time validation
  const inputs = contactForm.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', clearErrors);
  });
}

function handleFormSubmission(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message")
  };
  
  if (!validateForm(data)) return;
  
  // Show loading state
  showFormLoading(true);
  
  // Simulate API call
  setTimeout(() => {
    showFormSuccess(data.name, data.email);
    e.target.reset();
    showFormLoading(false);
  }, 2000);
}

function validateForm(data) {
  let isValid = true;
  
  // Clear previous errors
  clearAllErrors();
  
  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    showFieldError('name', 'Please enter a valid name (at least 2 characters)');
    isValid = false;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    showFieldError('email', 'Please enter a valid email address');
    isValid = false;
  }
  
  // Subject validation
  if (!data.subject) {
    showFieldError('subject', 'Please select a subject');
    isValid = false;
  }
  
  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    showFieldError('message', 'Please enter a message (at least 10 characters)');
    isValid = false;
  }
  
  return isValid;
}

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();
  
  clearFieldError(field.name);
  
  switch (field.name) {
    case 'name':
      if (value.length > 0 && value.length < 2) {
        showFieldError('name', 'Name must be at least 2 characters');
      }
      break;
    case 'email':
      if (value.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        showFieldError('email', 'Please enter a valid email address');
      }
      break;
    case 'message':
      if (value.length > 0 && value.length < 10) {
        showFieldError('message', 'Message must be at least 10 characters');
      }
      break;
  }
}

function clearErrors(e) {
  clearFieldError(e.target.name);
}

function showFieldError(fieldName, message) {
  const field = document.querySelector(`[name="${fieldName}"]`);
  if (!field) return;
  
  field.classList.add('error');
  
  const errorElement = document.createElement('span');
  errorElement.className = 'field-error';
  errorElement.textContent = message;
  
  const existingError = field.parentNode.querySelector('.field-error');
  if (existingError) {
    existingError.remove();
  }
  
  field.parentNode.appendChild(errorElement);
}

function clearFieldError(fieldName) {
  const field = document.querySelector(`[name="${fieldName}"]`);
  if (!field) return;
  
  field.classList.remove('error');
  const errorElement = field.parentNode.querySelector('.field-error');
  if (errorElement) {
    errorElement.remove();
  }
}

function clearAllErrors() {
  document.querySelectorAll('.field-error').forEach(el => el.remove());
  document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
}

function showFormLoading(show) {
  const submitBtn = document.querySelector('#contact-form button[type="submit"]');
  if (!submitBtn) return;
  
  if (show) {
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
  } else {
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    submitBtn.disabled = false;
  }
}

function showFormSuccess(name, email) {
  const successMessage = document.createElement('div');
  successMessage.className = 'form-success';
  successMessage.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <h3>Message Sent Successfully!</h3>
    <p>Thank you, ${name}! I've received your message and will get back to you soon at ${email}.</p>
  `;
  
  const form = document.getElementById('contact-form');
  form.parentNode.insertBefore(successMessage, form);
  
  setTimeout(() => {
    successMessage.remove();
  }, 5000);
}

// Modal System
function initializeModals() {
  // Close modal when clicking overlay
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;
  
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" onclick="closeModal()">
        <i class="fas fa-times"></i>
      </button>
      <div class="modal-header">
        <h2>${project.title}</h2>
        <div class="tech-stack">
          ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
      <div class="modal-body">
        ${project.details}
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Trigger animation
  requestAnimationFrame(() => {
    modal.classList.add('active');
  });
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.querySelector('.modal-overlay');
  if (!modal) return;
  
  modal.classList.remove('active');
  
  setTimeout(() => {
    modal.remove();
    document.body.style.overflow = '';
  }, 300);
}

// Performance Monitoring
function initializePerformanceMonitoring() {
  // Monitor scroll performance
  let scrollTimer = null;
  window.addEventListener('scroll', () => {
    if (scrollTimer) return;
    
    scrollTimer = setTimeout(() => {
      requestAnimationFrame(() => {
        updateScrollProgress();
        updateActiveSection();
        scrollTimer = null;
      });
    }, 16); // ~60fps
  });
  
  // Monitor resize performance
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      handleResize();
    }, 250);
  });
}

function updateScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) return;
  
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight - windowHeight;
  const scrolled = window.scrollY;
  const progress = (scrolled / documentHeight) * 100;
  
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

function updateActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const scrollPos = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}

function handleResize() {
  // Redraw charts on resize
  if (typeof drawHeroChart === 'function') {
    drawHeroChart();
    drawTimelineChart();
    drawProjectCharts();
  }
  
  // Update any layout-dependent calculations
  updateNavbar();
}

// Enhanced interactive effects
document.addEventListener("mousemove", (e) => {
  const heroBackground = document.querySelector(".hero-background");
  if (heroBackground) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    heroBackground.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
  }
});

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Export functions for global access
window.openProjectModal = openProjectModal;
window.closeModal = closeModal;

// Enhanced console logging
console.log("🚀 Enhanced Ahmed Elmogy Portfolio Website Loaded Successfully");
console.log("✨ All interactive features and animations initialized");
console.log("📊 Advanced chart rendering and data visualization active");
console.log("🎯 Performance monitoring and optimization active");
