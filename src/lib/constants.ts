import { InternshipCategory } from "@prisma/client";

export const SITE_CONFIG = {
  name: "SkillGrowVex Academy",
  tagline: "Empowering Talent. Building Futures.",
  description:
    "Gain practical experience through project-based learning, real-world internships, and industry-oriented certification programs.",
  email: "support@skillgrowvex.com",
  founder: {
    name: "Bandaru Siva",
    title: "Founder & Program Director",
    bio: "With a passion for empowering the next generation of tech professionals, Bandaru Siva founded SkillGrowVex Academy to bridge the gap between academic learning and industry requirements. His vision is to create a platform where students gain real-world experience through project-based internships and earn verified credentials that accelerate their careers.",
  },
  social: {
    linkedin: "https://linkedin.com/company/skillgrowvex",
    twitter: "https://twitter.com/skillgrowvex",
    instagram: "https://instagram.com/skillgrowvex",
  },
  // TODO: replace with your real Udyam number, e.g. "UDYAM-AP-03-0012345"
  udyamNumber: "UDYAM-XX-XX-XXXXXXX",
};

export const CATEGORIES = [
  { value: InternshipCategory.DATA_ANALYTICS, label: "Data Analytics", icon: "BarChart3" },
  { value: InternshipCategory.POWER_BI, label: "Power BI", icon: "PieChart" },
  { value: InternshipCategory.SQL, label: "SQL", icon: "Database" },
  { value: InternshipCategory.PYTHON, label: "Python", icon: "Code2" },
  { value: InternshipCategory.MACHINE_LEARNING, label: "Machine Learning", icon: "Brain" },
  { value: InternshipCategory.AI_TOOLS, label: "AI Tools", icon: "Sparkles" },
  { value: InternshipCategory.WEB_DEVELOPMENT, label: "Web Development", icon: "Globe" },
  { value: InternshipCategory.BUSINESS_ANALYTICS, label: "Business Analytics", icon: "TrendingUp" },
] as const;

export const STATS = [
  { value: "8", label: "Internship Tracks" },
  { value: "100%", label: "Project-Based Curriculum" },
  { value: "1:1", label: "Mentor Feedback" },
  { value: "2026", label: "Founding Batch" },
];

export const WHY_CHOOSE_US = [
  {
    title: "Project-Based Learning",
    description:
      "Work on real-world projects that mirror industry challenges and build a portfolio that stands out.",
    icon: "FolderKanban",
  },
  {
    title: "Verified Certificates",
    description:
      "Earn industry-recognized certificates with QR verification that employers can instantly validate.",
    icon: "BadgeCheck",
  },
  {
    title: "Expert Mentorship",
    description:
      "Get guidance from experienced professionals who provide personalized feedback on your work.",
    icon: "Users",
  },
  {
    title: "Career Ready Skills",
    description:
      "Develop in-demand skills in data analytics, programming, and business intelligence.",
    icon: "Rocket",
  },
  {
    title: "Flexible Learning",
    description:
      "Learn at your own pace with structured weekly curriculum and self-paced assignments.",
    icon: "Clock",
  },
  {
    title: "Job Readiness Score",
    description:
      "Track your career readiness with our proprietary scoring system and ranking leaderboard.",
    icon: "Target",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What is SkillGrowVex Academy?",
    answer:
      "SkillGrowVex Academy is a project-based internship and certification platform that helps students gain practical skills through real-world projects, assessments, and verified certifications.",
  },
  {
    question: "How long are the internship programs?",
    answer:
      "Our internship programs typically range from 4 to 12 weeks, depending on the specialization. Each program includes weekly assignments and a final capstone project.",
  },
  {
    question: "Are the certificates verifiable?",
    answer:
      "Yes! All certificates include a unique ID and QR code that can be verified instantly on our verification portal at /verify.",
  },
  {
    question: "What file types can I submit for assignments?",
    answer:
      "You can submit PDF, ZIP, Excel (.xlsx), Power BI (.pbix), and image files (PNG, JPG). Maximum file size is 10MB.",
  },
  {
    question: "Is there a ranking system?",
    answer:
      "Yes, we have a student ranking system based on assignment scores, completion rates, and earned badges. Top performers are featured on our leaderboard.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach us at support@skillgrowvex.com or through our contact page. We typically respond within 24 hours.",
  },
];

export const BADGES = [
  { name: "First Steps", description: "Complete your first assignment", points: 10 },
  { name: "Week Warrior", description: "Complete all weekly assignments", points: 25 },
  { name: "Perfect Score", description: "Score 100% on any assignment", points: 50 },
  { name: "Capstone Champion", description: "Complete the final project", points: 75 },
  { name: "Certified Pro", description: "Earn your first certificate", points: 100 },
  { name: "Top Performer", description: "Rank in top 10 on leaderboard", points: 150 },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/verify", label: "Verify" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_LINKS = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "/verify", label: "Verify Certificate" },
    { href: "/student", label: "Student Portal" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export const LEARNING_PATH = [
  {
    phase: "01",
    title: "Enrollment & Onboarding",
    week: "Week 1",
    description:
      "Choose your track, meet your mentor, and get your learning environment set up. We walk you through every tool you'll need from day one.",
    icon: "Sparkles",
  },
  {
    phase: "02",
    title: "Core Foundations",
    week: "Weeks 2–4",
    description:
      "Master the fundamentals with guided exercises and mini-projects. No skipping ahead — strong roots grow strong careers.",
    icon: "BookOpen",
  },
  {
    phase: "03",
    title: "Intermediate Builds",
    week: "Weeks 5–8",
    description:
      "Tackle real-world problem sets. Build progressively complex projects with mentor reviews, code walkthroughs, and live doubt sessions.",
    icon: "Hammer",
  },
  {
    phase: "04",
    title: "Capstone Project",
    week: "Weeks 9–10",
    description:
      "Work on a full-scope project that mirrors what companies actually build. This becomes the centrepiece of your portfolio.",
    icon: "Target",
  },
  {
    phase: "05",
    title: "Career Launchpad",
    week: "Weeks 11–12",
    description:
      "Resume polish, mock interviews, LinkedIn optimization, and direct referrals. We stay with you until you're placed.",
    icon: "Rocket",
  },
];

export const CAREER_SUPPORT = [
  {
    title: "Resume Building",
    description:
      "Expert guidance on crafting a professional resume that highlights your skills and projects in a way that genuinely catches employer attention.",
    icon: "FileText",
  },
  {
    title: "Portfolio Guidance",
    description:
      "Showcase your projects effectively on GitHub and personal sites. Build a portfolio that demonstrates real capability to hiring managers.",
    icon: "Briefcase",
  },
  {
    title: "Mock Interviews",
    description:
      "Practice with real interview scenarios — technical questions, coding challenges, and behavioral rounds conducted by industry professionals.",
    icon: "Video",
  },
  {
    title: "LinkedIn Optimization",
    description:
      "Optimize your profile to attract recruiters, articulate your story clearly, and build a strong professional network that works for you.",
    icon: "Network",
  },
];

export const SKILLS_CATEGORIES = [
  {
    title: "Technical Skills",
    description:
      "Master programming languages and frameworks through intensive coding practice and real project work.",
    icon: "Code2",
    skills: ["Python", "Java", "JavaScript", "C++"],
  },
  {
    title: "Tool Mastery",
    description:
      "Gain hands-on experience with industry-standard tools used by professionals worldwide.",
    icon: "Wrench",
    skills: ["MySQL", "Power BI", "Git", "VS Code"],
  },
  {
    title: "Data Analytics",
    description:
      "Extract insights from data and make informed decisions using modern analytics techniques.",
    icon: "BarChart3",
    skills: ["Data Visualization", "SQL Queries", "Dashboards", "ETL"],
  },
  {
    title: "Analytical Thinking",
    description:
      "Develop problem-solving abilities and logical thinking essential for any technical role.",
    icon: "Brain",
    skills: ["Problem Decomposition", "Algorithm Design", "Debugging"],
  },
  {
    title: "Soft Skills",
    description:
      "Build communication and collaboration skills that make you effective in team environments.",
    icon: "Users",
    skills: ["Communication", "Teamwork", "Presentation", "Time Management"],
  },
  {
    title: "Capstone Projects",
    description:
      "Apply everything you've learned by building complete, real-world applications end-to-end.",
    icon: "FolderKanban",
    skills: ["Project Planning", "Full Development", "Deployment"],
  },
];

export const PROGRAMS_DETAILED = [
  {
    title: "Python Programming",
    category: "Foundation",
    badge: "FOUNDATION",
    description: "Master Python from fundamentals to advanced — OOP, data structures, and automation scripting for real-world applications.",
    skills: ["Python", "NumPy", "Pandas", "Jupyter"],
    duration: "6–8 weeks",
    perfectFor: "Beginners to intermediate",
    icon: "Code2",
  },
  {
    title: "Data Analytics",
    category: "High ROI",
    badge: "HIGH ROI",
    description: "Turn raw data into decisions. Statistical analysis, data cleaning, visualization and reporting with modern tools.",
    skills: ["Python", "Excel", "SQL", "Tableau"],
    duration: "8–10 weeks",
    perfectFor: "Career switchers & analysts",
    icon: "BarChart3",
  },
  {
    title: "Java Programming",
    category: "Enterprise",
    badge: "ENTERPRISE",
    description: "Build robust backend systems with Java — OOP, collections, multithreading, and Spring Boot enterprise frameworks.",
    skills: ["Java", "Spring Boot", "Maven", "IntelliJ"],
    duration: "8–10 weeks",
    perfectFor: "Future backend developers",
    icon: "Server",
  },
  {
    title: "Full Stack Development",
    category: "Most Popular",
    badge: "MOST POPULAR",
    description: "Master both frontend and backend to build complete, scalable web applications from scratch with real projects.",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    duration: "10–14 weeks",
    perfectFor: "Aspiring web developers",
    icon: "Layers",
  },
  {
    title: "Web Development",
    category: "In Demand",
    badge: "IN DEMAND",
    description: "Build modern responsive websites — HTML, CSS, JavaScript and popular frameworks with hands-on real projects.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    duration: "6–8 weeks",
    perfectFor: "Creative UI builders",
    icon: "Globe",
  },
  {
    title: "Data Science",
    category: "Advanced",
    badge: "ADVANCED",
    description: "Machine learning, statistical modelling, and predictive analytics using industry-standard tools and real datasets.",
    skills: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    duration: "8–12 weeks",
    perfectFor: "ML & analytics aspirants",
    icon: "Brain",
  },
  {
    title: "DSA & Problem Solving",
    category: "Interview Prep",
    badge: "INTERVIEW PREP",
    description: "Crack technical interviews with structured training in data structures, algorithms, and competitive problem-solving.",
    skills: ["Python", "Java", "LeetCode"],
    duration: "6–10 weeks",
    perfectFor: "Students targeting tech roles",
    icon: "Zap",
  },
  {
    title: "Generative AI",
    category: "Emerging",
    badge: "EMERGING",
    description: "Build with LLMs, prompt engineering, RAG pipelines, and AI-powered applications from the ground up.",
    skills: ["OpenAI API", "LangChain", "Python"],
    duration: "6–8 weeks",
    perfectFor: "Developers & curious builders",
    icon: "Sparkles",
  },
];

export const DOMAIN_ROADMAP = [
  {
    domain: "Data Analytics",
    icon: "BarChart3",
    color: "from-blue-500 to-cyan-500",
    stages: [
      { level: "Beginner", topics: ["Excel Basics", "SQL Fundamentals", "Data Cleaning"] },
      { level: "Intermediate", topics: ["Statistical Analysis", "Pivot Tables", "Python for Data"] },
      { level: "Advanced", topics: ["Advanced SQL", "Tableau Dashboards", "Power BI Reports"] },
      { level: "Expert", topics: ["Predictive Analytics", "Dashboard Design", "Business Insights"] },
    ],
    description: "Master data-driven decision making",
  },
  {
    domain: "Web Development",
    icon: "Globe",
    color: "from-green-500 to-emerald-500",
    stages: [
      { level: "Beginner", topics: ["HTML/CSS", "JavaScript Basics", "Responsive Design"] },
      { level: "Intermediate", topics: ["React Fundamentals", "API Integration", "State Management"] },
      { level: "Advanced", topics: ["Node.js Backend", "Database Design", "Full Stack Apps"] },
      { level: "Expert", topics: ["Performance Optimization", "Deployment", "System Design"] },
    ],
    description: "Build modern web applications",
  },
  {
    domain: "Python Programming",
    icon: "Code2",
    color: "from-yellow-500 to-orange-500",
    stages: [
      { level: "Beginner", topics: ["Syntax & Basics", "Data Types", "Control Flow"] },
      { level: "Intermediate", topics: ["Functions & Modules", "OOP Concepts", "File Handling"] },
      { level: "Advanced", topics: ["Libraries (NumPy, Pandas)", "Automation", "Web Frameworks"] },
      { level: "Expert", topics: ["Performance Optimization", "Async Programming", "System Design"] },
    ],
    description: "Master versatile programming language",
  },
  {
    domain: "Machine Learning",
    icon: "Brain",
    color: "from-purple-500 to-pink-500",
    stages: [
      { level: "Beginner", topics: ["ML Basics", "Python Libraries", "Data Preprocessing"] },
      { level: "Intermediate", topics: ["Supervised Learning", "Model Training", "Evaluation"] },
      { level: "Advanced", topics: ["Deep Learning", "Neural Networks", "Production Models"] },
      { level: "Expert", topics: ["Reinforcement Learning", "Large Models", "MLOps"] },
    ],
    description: "Build intelligent AI solutions",
  },
  {
    domain: "Business Analytics",
    icon: "TrendingUp",
    color: "from-red-500 to-rose-500",
    stages: [
      { level: "Beginner", topics: ["Business Metrics", "Excel Analytics", "KPI Tracking"] },
      { level: "Intermediate", topics: ["Data Visualization", "Trend Analysis", "Forecasting"] },
      { level: "Advanced", topics: ["Advanced Dashboards", "ROI Analysis", "Strategic Insights"] },
      { level: "Expert", topics: ["Predictive Modeling", "Business Strategy", "Data Leadership"] },
    ],
    description: "Drive business decisions with data",
  },
  {
    domain: "AI & Emerging Tech",
    icon: "Sparkles",
    color: "from-indigo-500 to-purple-500",
    stages: [
      { level: "Beginner", topics: ["AI Fundamentals", "LLM Basics", "Prompt Engineering"] },
      { level: "Intermediate", topics: ["API Integration", "RAG Systems", "Chatbot Development"] },
      { level: "Advanced", topics: ["Fine-tuning Models", "Advanced Prompts", "AI Applications"] },
      { level: "Expert", topics: ["Model Architecture", "Production Deployment", "AI Strategy"] },
    ],
    description: "Explore cutting-edge AI technologies",
  },
];

export const INTERNSHIP_OPPORTUNITIES = [
  {
    id: "1",
    title: "Python Developer Internship",
    company: "TechStart Solutions",
    domain: "Python Programming",
    level: "Intermediate",
    duration: "8 weeks",
    students: 12,
    maxStudents: 15,
    description:
      "Build backend APIs and automation scripts. Work with experienced Python developers on real production code.",
    requirements: ["Python Fundamentals", "OOP Concepts", "Basic Database Knowledge"],
    responsibilities: [
      "Develop and maintain Python applications",
      "Write clean, testable code",
      "Participate in code reviews",
      "Collaborate with senior developers",
    ],
    skills: ["Python", "Flask", "PostgreSQL", "Git"],
    contact: {
      name: "Raj Kumar",
      email: "raj@techstartsolutions.com",
      phone: "+91-98765-43210",
      linkedIn: "https://linkedin.com/in/rajkumar",
    },
  },
  {
    id: "2",
    title: "Data Analytics Intern",
    company: "InsightHub Analytics",
    domain: "Data Analytics",
    level: "Beginner",
    duration: "6 weeks",
    students: 8,
    maxStudents: 10,
    description:
      "Analyze datasets, create dashboards, and present insights to stakeholders. Learn industry best practices.",
    requirements: ["Excel Proficiency", "Basic SQL", "Data Visualization Understanding"],
    responsibilities: [
      "Collect and clean data",
      "Create analytical reports",
      "Build interactive dashboards",
      "Present findings to clients",
    ],
    skills: ["SQL", "Excel", "Power BI", "Python"],
    contact: {
      name: "Priya Sharma",
      email: "priya@insighthub.com",
      phone: "+91-99876-54321",
      linkedIn: "https://linkedin.com/in/priyasharma",
    },
  },
  {
    id: "3",
    title: "Full Stack Web Developer Internship",
    company: "WebNova Inc",
    domain: "Web Development",
    level: "Advanced",
    duration: "10 weeks",
    students: 5,
    maxStudents: 8,
    description:
      "Build responsive web applications. Work on both frontend and backend. Deploy to production.",
    requirements: ["React Knowledge", "Node.js Basics", "Database Design"],
    responsibilities: [
      "Develop frontend components",
      "Build backend APIs",
      "Implement database schemas",
      "Deploy applications",
    ],
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    contact: {
      name: "Arjun Patel",
      email: "arjun@webnova.com",
      phone: "+91-97654-32109",
      linkedIn: "https://linkedin.com/in/arjunpatel",
    },
  },
  {
    id: "4",
    title: "ML Engineer Internship",
    company: "AI Innovations Labs",
    domain: "Machine Learning",
    level: "Advanced",
    duration: "12 weeks",
    students: 3,
    maxStudents: 5,
    description:
      "Build and deploy machine learning models. Work with real datasets and industry-grade tools.",
    requirements: ["Python", "ML Libraries", "Statistics"],
    responsibilities: [
      "Preprocess datasets",
      "Train and evaluate models",
      "Optimize model performance",
      "Document findings",
    ],
    skills: ["Python", "TensorFlow", "Scikit-learn", "PyTorch"],
    contact: {
      name: "Dr. Vikram Singh",
      email: "vikram@aiinnovations.com",
      phone: "+91-96543-21098",
      linkedIn: "https://linkedin.com/in/drvikramsingh",
    },
  },
  {
    id: "5",
    title: "Business Analytics Trainee",
    company: "DataWise Consulting",
    domain: "Business Analytics",
    level: "Beginner",
    duration: "8 weeks",
    students: 10,
    maxStudents: 12,
    description:
      "Learn to translate business problems into data solutions. Mentored by experienced consultants.",
    requirements: ["Excel", "Basic Statistics", "Business Acumen"],
    responsibilities: [
      "Perform exploratory analysis",
      "Create business reports",
      "Present to stakeholders",
      "Support client projects",
    ],
    skills: ["SQL", "Tableau", "Excel", "Statistics"],
    contact: {
      name: "Neha Desai",
      email: "neha@datawise.com",
      phone: "+91-95432-10987",
      linkedIn: "https://linkedin.com/in/nehadesai",
    },
  },
  {
    id: "6",
    title: "Generative AI Developer",
    company: "NextGen AI Solutions",
    domain: "AI & Emerging Tech",
    level: "Advanced",
    duration: "10 weeks",
    students: 2,
    maxStudents: 4,
    description:
      "Build applications powered by LLMs and cutting-edge AI. Explore prompt engineering and RAG systems.",
    requirements: ["Python", "API Integration", "AI Fundamentals"],
    responsibilities: [
      "Develop AI-powered applications",
      "Implement RAG pipelines",
      "Fine-tune prompts",
      "Deploy AI solutions",
    ],
    skills: ["Python", "OpenAI API", "LangChain", "RAG"],
    contact: {
      name: "Alex Chen",
      email: "alex@nextgenai.com",
      phone: "+91-94321-09876",
      linkedIn: "https://linkedin.com/in/alexchen",
    },
  },
];

export const LANGUAGES_OFFERED = [
  {
    language: "English",
    flag: "🇬🇧",
    description: "Master global tech language with international curriculum",
    percentage: "100%",
    icon: "Globe",
  },
  {
    language: "Hindi",
    flag: "🇮🇳",
    description: "आपकी भाषा में सीखें, बेहतर समझ के साथ शुरुआत करें",
    percentage: "85%",
    icon: "MessageCircle",
  },
  {
    language: "Telugu",
    flag: "🇮🇳",
    description: "తెలుగులో చదువుకోండి, సులభమైన నేర్పణ అనుభవం",
    percentage: "80%",
    icon: "MessageSquare",
  },
];

export const SATURDAY_MENTORSHIP_SESSIONS = [
  {
    week: "Week 1",
    date: "Every Saturday",
    time: "10:00 AM - 11:30 AM IST",
    topic: "Course Fundamentals Q&A",
    mentorCount: 8,
    maxStudents: 50,
    focusAreas: ["Core Concepts", "Best Practices", "Common Mistakes"],
    icon: "Calendar",
  },
  {
    week: "Week 2",
    date: "Every Saturday",
    time: "2:00 PM - 3:30 PM IST",
    topic: "Project Deep Dive & Code Review",
    mentorCount: 6,
    maxStudents: 30,
    focusAreas: ["Code Quality", "Architecture", "Debugging Techniques"],
    icon: "Code2",
  },
  {
    week: "Week 3",
    date: "Every Saturday",
    time: "4:00 PM - 5:30 PM IST",
    topic: "Career & Interview Prep",
    mentorCount: 5,
    maxStudents: 40,
    focusAreas: ["Interview Questions", "Portfolio Review", "Job Search Strategy"],
    icon: "Briefcase",
  },
  {
    week: "Week 4",
    date: "Every Saturday",
    time: "6:00 PM - 7:30 PM IST",
    topic: "Doubt Clearing & Live Coding",
    mentorCount: 7,
    maxStudents: 60,
    focusAreas: ["Problem Solving", "Live Coding", "Real-time Doubt Resolution"],
    icon: "Zap",
  },
];

export const MENTORSHIP_HIGHLIGHTS = [
  {
    title: "Weekly Live Sessions",
    description: "Every Saturday with 5-8 dedicated mentors",
    icon: "Calendar",
  },
  {
    title: "One-on-One Support",
    description: "Book 1:1 slots with your assigned mentor",
    icon: "Users",
  },
  {
    title: "Instant Doubt Resolution",
    description: "Get real-time answers during live sessions",
    icon: "MessageCircle",
  },
  {
    title: "Portfolio Review",
    description: "Mentors review and improve your projects",
    icon: "FolderKanban",
  },
];
