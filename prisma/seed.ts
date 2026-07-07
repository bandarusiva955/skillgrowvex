import { PrismaClient, InternshipCategory } from "@prisma/client";

const prisma = new PrismaClient();

const internships = [
  {
    title: "Data Analytics Internship",
    slug: "data-analytics-internship",
    category: InternshipCategory.DATA_ANALYTICS,
    description:
      "Master data analytics from fundamentals to advanced techniques. This comprehensive internship covers data cleaning, exploratory data analysis, statistical modeling, and data visualization using industry-standard tools.\n\nYou'll work on real datasets from e-commerce, healthcare, and finance sectors, building a portfolio that demonstrates your analytical capabilities to potential employers.",
    shortDescription:
      "Learn data analytics with real-world projects using Excel, SQL, and Python.",
    duration: "8 Weeks",
    durationWeeks: 8,
    skills: ["Excel", "SQL", "Python", "Data Visualization", "Statistics"],
    projects: [
      "E-commerce Sales Analysis Dashboard",
      "Customer Segmentation Project",
      "Healthcare Data Insights Report",
    ],
    learningOutcomes: [
      "Perform exploratory data analysis on complex datasets",
      "Create interactive dashboards and visualizations",
      "Apply statistical methods to derive business insights",
      "Write efficient SQL queries for data extraction",
      "Present findings to stakeholders effectively",
    ],
    curriculum: [
      { week: 1, title: "Introduction to Data Analytics", topics: ["Data types", "Analytics workflow", "Excel fundamentals", "Data cleaning"] },
      { week: 2, title: "SQL for Data Analysis", topics: ["SELECT queries", "JOINs", "Aggregations", "Subqueries"] },
      { week: 3, title: "Python for Analytics", topics: ["Pandas basics", "Data manipulation", "NumPy", "Data frames"] },
      { week: 4, title: "Data Visualization", topics: ["Matplotlib", "Seaborn", "Chart selection", "Storytelling with data"] },
      { week: 5, title: "Statistical Analysis", topics: ["Descriptive stats", "Hypothesis testing", "Correlation", "Regression basics"] },
      { week: 6, title: "Business Analytics", topics: ["KPIs", "Metrics", "A/B testing", "ROI analysis"] },
      { week: 7, title: "Advanced Projects", topics: ["Multi-source data", "Automation", "Reporting", "Presentation skills"] },
      { week: 8, title: "Capstone Project", topics: ["End-to-end analysis", "Dashboard creation", "Final presentation", "Portfolio building"] },
    ],
    isFeatured: true,
  },
  {
    title: "Power BI Mastery Internship",
    slug: "power-bi-mastery",
    category: InternshipCategory.POWER_BI,
    description:
      "Become a Power BI expert through hands-on projects. Learn to connect multiple data sources, build sophisticated data models, create stunning interactive dashboards, and implement DAX calculations for advanced analytics.",
    shortDescription:
      "Master Power BI dashboard development, DAX, and data modeling.",
    duration: "6 Weeks",
    durationWeeks: 6,
    skills: ["Power BI", "DAX", "Data Modeling", "ETL", "Dashboard Design"],
    projects: [
      "Sales Performance Dashboard",
      "Financial Reporting Suite",
      "HR Analytics Dashboard",
    ],
    learningOutcomes: [
      "Build enterprise-grade Power BI dashboards",
      "Write complex DAX measures and calculated columns",
      "Design efficient star schema data models",
      "Implement row-level security",
      "Publish and share reports via Power BI Service",
    ],
    curriculum: [
      { week: 1, title: "Power BI Fundamentals", topics: ["Interface overview", "Data import", "Basic visuals", "Report design"] },
      { week: 2, title: "Data Transformation", topics: ["Power Query", "Data cleaning", "M language basics", "Merge queries"] },
      { week: 3, title: "Data Modeling", topics: ["Relationships", "Star schema", "Cardinality", "Model optimization"] },
      { week: 4, title: "DAX Mastery", topics: ["Calculated columns", "Measures", "Time intelligence", "FILTER functions"] },
      { week: 5, title: "Advanced Visualizations", topics: ["Custom visuals", "Bookmarks", "Drill-through", "Tooltips"] },
      { week: 6, title: "Capstone Dashboard", topics: ["Full project", "Publishing", "Sharing", "Best practices"] },
    ],
    isFeatured: true,
  },
  {
    title: "SQL Database Internship",
    slug: "sql-database-internship",
    category: InternshipCategory.SQL,
    description:
      "Develop expert-level SQL skills through practical database projects. Cover everything from basic queries to advanced window functions, stored procedures, and database optimization.",
    shortDescription: "Master SQL from basics to advanced queries and database design.",
    duration: "6 Weeks",
    durationWeeks: 6,
    skills: ["SQL", "PostgreSQL", "Database Design", "Query Optimization", "Stored Procedures"],
    projects: ["E-commerce Database Design", "Analytics Query Library", "Database Performance Audit"],
    learningOutcomes: [
      "Write complex SQL queries with joins and subqueries",
      "Design normalized database schemas",
      "Use window functions for advanced analytics",
      "Optimize query performance",
      "Create stored procedures and triggers",
    ],
    curriculum: [
      { week: 1, title: "SQL Basics", topics: ["SELECT", "WHERE", "ORDER BY", "LIMIT"] },
      { week: 2, title: "Joins & Relationships", topics: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "Self joins"] },
      { week: 3, title: "Aggregations", topics: ["GROUP BY", "HAVING", "Subqueries", "CTEs"] },
      { week: 4, title: "Advanced SQL", topics: ["Window functions", "RANK", "LEAD/LAG", "PIVOT"] },
      { week: 5, title: "Database Design", topics: ["Normalization", "Indexes", "Constraints", "ER diagrams"] },
      { week: 6, title: "Capstone", topics: ["Full database project", "Optimization", "Documentation"] },
    ],
    isFeatured: true,
  },
  {
    title: "Python Programming Internship",
    slug: "python-programming-internship",
    category: InternshipCategory.PYTHON,
    description:
      "Build strong Python programming skills through project-based learning. Cover core programming concepts, data structures, OOP, file handling, APIs, and automation scripts.",
    shortDescription: "Learn Python programming with hands-on projects and automation.",
    duration: "8 Weeks",
    durationWeeks: 8,
    skills: ["Python", "OOP", "APIs", "Automation", "Data Structures"],
    projects: ["Web Scraper Tool", "Data Processing Pipeline", "API Integration Project"],
    learningOutcomes: [
      "Write clean, efficient Python code",
      "Implement object-oriented programming patterns",
      "Build automation scripts and tools",
      "Work with APIs and external data sources",
      "Apply best practices and testing",
    ],
    curriculum: [
      { week: 1, title: "Python Basics", topics: ["Variables", "Data types", "Control flow", "Functions"] },
      { week: 2, title: "Data Structures", topics: ["Lists", "Dictionaries", "Sets", "Tuples"] },
      { week: 3, title: "OOP in Python", topics: ["Classes", "Inheritance", "Polymorphism", "Encapsulation"] },
      { week: 4, title: "File Handling", topics: ["Reading files", "CSV/JSON", "Error handling", "Logging"] },
      { week: 5, title: "APIs & Web", topics: ["Requests library", "REST APIs", "JSON parsing", "Web scraping"] },
      { week: 6, title: "Libraries", topics: ["Pandas", "NumPy", "Matplotlib", "Popular packages"] },
      { week: 7, title: "Automation", topics: ["Scripts", "Scheduling", "Email automation", "Task automation"] },
      { week: 8, title: "Capstone", topics: ["Full project", "Code review", "Documentation", "Deployment"] },
    ],
    isFeatured: true,
  },
  {
    title: "Machine Learning Internship",
    slug: "machine-learning-internship",
    category: InternshipCategory.MACHINE_LEARNING,
    description:
      "Dive into machine learning with practical projects. Learn supervised and unsupervised learning, model evaluation, feature engineering, and deployment basics using scikit-learn and Python.",
    shortDescription: "Build ML models with scikit-learn through real-world projects.",
    duration: "10 Weeks",
    durationWeeks: 10,
    skills: ["Machine Learning", "Scikit-learn", "Feature Engineering", "Model Evaluation", "Python"],
    projects: ["Customer Churn Prediction", "Sales Forecasting Model", "Image Classification Project"],
    learningOutcomes: [
      "Build and evaluate ML models",
      "Perform feature engineering and selection",
      "Apply cross-validation and hyperparameter tuning",
      "Understand bias-variance tradeoff",
      "Deploy basic ML models",
    ],
    curriculum: [
      { week: 1, title: "ML Foundations", topics: ["ML overview", "Types of learning", "Python setup", "Data preparation"] },
      { week: 2, title: "Supervised Learning", topics: ["Linear regression", "Logistic regression", "Decision trees", "Evaluation metrics"] },
      { week: 3, title: "Classification", topics: ["SVM", "Random forests", "Naive Bayes", "Confusion matrix"] },
      { week: 4, title: "Feature Engineering", topics: ["Feature selection", "Scaling", "Encoding", "PCA"] },
      { week: 5, title: "Unsupervised Learning", topics: ["Clustering", "K-means", "Hierarchical", "DBSCAN"] },
      { week: 6, title: "Model Tuning", topics: ["Cross-validation", "Grid search", "Overfitting", "Regularization"] },
      { week: 7, title: "Ensemble Methods", topics: ["Bagging", "Boosting", "XGBoost", "Voting classifiers"] },
      { week: 8, title: "Neural Networks Intro", topics: ["Perceptrons", "Activation functions", "Basic NN", "TensorFlow intro"] },
      { week: 9, title: "ML Pipeline", topics: ["End-to-end pipeline", "Model persistence", "Monitoring", "Ethics"] },
      { week: 10, title: "Capstone", topics: ["Full ML project", "Presentation", "Documentation", "Portfolio"] },
    ],
    isFeatured: true,
  },
  {
    title: "AI Tools & Productivity Internship",
    slug: "ai-tools-internship",
    category: InternshipCategory.AI_TOOLS,
    description:
      "Master the latest AI tools transforming the workplace. Learn to leverage ChatGPT, Claude, Copilot, and other AI assistants for productivity, content creation, coding, and data analysis.",
    shortDescription: "Leverage AI tools for productivity, coding, and content creation.",
    duration: "4 Weeks",
    durationWeeks: 4,
    skills: ["ChatGPT", "Claude AI", "Prompt Engineering", "AI Automation", "Copilot"],
    projects: ["AI-Powered Workflow Automation", "Content Generation System", "AI-Assisted Code Review Tool"],
    learningOutcomes: [
      "Write effective prompts for AI tools",
      "Automate workflows using AI assistants",
      "Integrate AI into daily productivity",
      "Evaluate AI outputs critically",
      "Build AI-powered applications",
    ],
    curriculum: [
      { week: 1, title: "AI Landscape", topics: ["AI overview", "Tool comparison", "Use cases", "Ethics"] },
      { week: 2, title: "Prompt Engineering", topics: ["Prompt patterns", "Chain of thought", "Few-shot learning", "System prompts"] },
      { week: 3, title: "AI for Work", topics: ["Content creation", "Code generation", "Data analysis", "Research"] },
      { week: 4, title: "Capstone", topics: ["AI workflow project", "Automation", "Documentation", "Presentation"] },
    ],
    isFeatured: false,
  },
  {
    title: "Full Stack Web Development Internship",
    slug: "web-development-internship",
    category: InternshipCategory.WEB_DEVELOPMENT,
    description:
      "Build modern web applications from scratch. Learn HTML, CSS, JavaScript, React, Next.js, and Node.js through progressive projects that culminate in a full-stack capstone application.",
    shortDescription: "Build modern web apps with React, Next.js, and Node.js.",
    duration: "12 Weeks",
    durationWeeks: 12,
    skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "Node.js", "TypeScript"],
    projects: ["Portfolio Website", "E-commerce Platform", "SaaS Dashboard Application"],
    learningOutcomes: [
      "Build responsive, accessible web interfaces",
      "Develop React applications with modern patterns",
      "Create full-stack apps with Next.js",
      "Implement authentication and APIs",
      "Deploy applications to production",
    ],
    curriculum: [
      { week: 1, title: "HTML & CSS", topics: ["Semantic HTML", "Flexbox", "Grid", "Responsive design"] },
      { week: 2, title: "JavaScript", topics: ["ES6+", "DOM manipulation", "Async/await", "Fetch API"] },
      { week: 3, title: "React Basics", topics: ["Components", "Props", "State", "Hooks"] },
      { week: 4, title: "React Advanced", topics: ["Context", "Custom hooks", "Forms", "Routing"] },
      { week: 5, title: "Next.js", topics: ["App router", "SSR/SSG", "API routes", "Middleware"] },
      { week: 6, title: "TypeScript", topics: ["Types", "Interfaces", "Generics", "React + TS"] },
      { week: 7, title: "Backend", topics: ["Node.js", "Express", "REST APIs", "Database integration"] },
      { week: 8, title: "Authentication", topics: ["JWT", "OAuth", "Session management", "Protected routes"] },
      { week: 9, title: "Styling", topics: ["Tailwind CSS", "Component libraries", "Dark mode", "Animations"] },
      { week: 10, title: "Testing", topics: ["Unit tests", "Integration tests", "E2E testing", "CI/CD"] },
      { week: 11, title: "Deployment", topics: ["Vercel", "Docker", "Environment config", "Monitoring"] },
      { week: 12, title: "Capstone", topics: ["Full-stack project", "Code review", "Deployment", "Presentation"] },
    ],
    isFeatured: true,
  },
  {
    title: "Business Analytics Internship",
    slug: "business-analytics-internship",
    category: InternshipCategory.BUSINESS_ANALYTICS,
    description:
      "Bridge the gap between data and business decisions. Learn to analyze business metrics, create executive dashboards, perform market analysis, and deliver actionable insights to stakeholders.",
    shortDescription: "Transform data into business insights and strategic recommendations.",
    duration: "8 Weeks",
    durationWeeks: 8,
    skills: ["Business Analysis", "KPI Tracking", "Market Research", "Financial Modeling", "Presentation"],
    projects: ["Market Analysis Report", "KPI Dashboard", "Business Strategy Presentation"],
    learningOutcomes: [
      "Define and track business KPIs",
      "Perform market and competitive analysis",
      "Create executive-level reports and dashboards",
      "Develop data-driven business recommendations",
      "Present insights to business stakeholders",
    ],
    curriculum: [
      { week: 1, title: "Business Analytics Overview", topics: ["Role of analytics", "KPIs", "Metrics framework", "Stakeholder communication"] },
      { week: 2, title: "Market Analysis", topics: ["Market sizing", "Competitive analysis", "SWOT", "Trend analysis"] },
      { week: 3, title: "Financial Analytics", topics: ["Revenue analysis", "Cost modeling", "ROI", "Forecasting"] },
      { week: 4, title: "Customer Analytics", topics: ["Segmentation", "CLV", "Churn analysis", "NPS"] },
      { week: 5, title: "Operations Analytics", topics: ["Process optimization", "Supply chain", "Efficiency metrics", "Benchmarking"] },
      { week: 6, title: "Dashboard Creation", topics: ["Executive dashboards", "Real-time metrics", "Alerting", "Mobile reporting"] },
      { week: 7, title: "Strategy & Insights", topics: ["Data storytelling", "Recommendations", "Action plans", "Impact measurement"] },
      { week: 8, title: "Capstone", topics: ["Business case study", "Full analysis", "Presentation", "Portfolio"] },
    ],
    isFeatured: false,
  },
];

async function main() {
  console.log("Seeding database...");

  for (const internship of internships) {
    const created = await prisma.internship.upsert({
      where: { slug: internship.slug },
      update: internship,
      create: internship,
    });

    const existingAssignments = await prisma.assignment.count({
      where: { internshipId: created.id },
    });

    if (existingAssignments === 0) {
      for (let week = 1; week <= internship.durationWeeks; week++) {
        await prisma.assignment.create({
          data: {
            internshipId: created.id,
            title: `Week ${week} Assignment`,
            description: `Complete the Week ${week} assignment for ${internship.title}. Submit your work in the required format.`,
            weekNumber: week,
            maxScore: 100,
            isFinal: week === internship.durationWeeks,
          },
        });
      }
    }
  }

  const badges = [
    { name: "First Steps", description: "Complete your first assignment", criteria: "Submit and get approval on 1 assignment", points: 10 },
    { name: "Week Warrior", description: "Complete all weekly assignments", criteria: "Complete all weekly assignments in a program", points: 25 },
    { name: "Perfect Score", description: "Score 100% on any assignment", criteria: "Achieve a perfect score on any assignment", points: 50 },
    { name: "Capstone Champion", description: "Complete the final project", criteria: "Submit and pass the final capstone project", points: 75 },
    { name: "Certified Pro", description: "Earn your first certificate", criteria: "Receive your first verified certificate", points: 100 },
    { name: "Top Performer", description: "Rank in top 10 on leaderboard", criteria: "Rank in the top 10 students by total points", points: 150 },
  ];

  for (const badge of badges) {
    await prisma.badge.upsert({
      where: { name: badge.name },
      update: badge,
      create: badge,
    });
  }

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Data Analyst",
      company: "TechCorp India",
      content:
        "SkillGrowVex Academy transformed my career. The project-based approach gave me real portfolio pieces that impressed employers during interviews.",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "Business Intelligence Developer",
      company: "DataFlow Solutions",
      content:
        "The Power BI internship was incredibly practical. I went from zero knowledge to building enterprise dashboards in just 6 weeks.",
      rating: 5,
    },
    {
      name: "Ananya Patel",
      role: "ML Engineer",
      company: "AI Innovations",
      content:
        "The verified certificate with QR code helped me stand out on LinkedIn. Employers could instantly verify my credentials.",
      rating: 5,
    },
    {
      name: "Karthik Reddy",
      role: "Full Stack Developer",
      company: "StartupHub",
      content:
        "The web development program covered everything from basics to deployment. The capstone project became the centerpiece of my portfolio.",
      rating: 5,
    },
    {
      name: "Sneha Iyer",
      role: "Business Analyst",
      company: "Global Finance Ltd",
      content:
        "What sets SkillGrowVex apart is the mentorship and feedback on assignments. Every submission gets reviewed with detailed feedback.",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      role: "Python Developer",
      company: "CodeCraft",
      content:
        "The job readiness score and ranking system kept me motivated throughout the program. I finished in the top 5 of my cohort!",
      rating: 5,
    },
  ];

  for (const testimonial of testimonials) {
    const existing = await prisma.testimonial.findFirst({
      where: { name: testimonial.name },
    });
    if (!existing) {
      await prisma.testimonial.create({ data: testimonial });
    }
  }

  console.log("Seed completed successfully!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
