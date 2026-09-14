import { InternshipCategory } from "@prisma/client";

export const SITE_CONFIG = {
  name: "SkillGrow Vex Academy",
  shortName: "SkillGrow Vex",
  poweredBy: "Grow Vex Technologies",
  tagline: "Empowering Talent. Building Futures.",
  description:
    "Practical IT courses, real-world projects, internships, mentorship, and career development for students and freshers.",
  mission:
    "To bridge the gap between academic learning and industry expectations through practical internships, industry-oriented projects, mentorship, and career guidance.",
  vision:
    "To empower students with practical skills, confidence, and professional portfolios that prepare them for internships and entry-level careers.",
  email: "support@skillgrowvex.com",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  address: "Andhra Pradesh, India",
  businessHours: "Mon – Sat, 9:00 AM – 6:00 PM IST",
  udyam: {
    enterpriseName: "Skill Grow Vex",
    registrationNumber: "UDYAM-AP-10-0137032",
    certificateUrl: "https://udyamregistration.gov.in/",
  },
  founder: {
    name: "Bandaru Siva",
    title: "Founder & Program Director",
    bio: "Bandaru Siva founded SkillGrow Vex Academy as an initiative of Grow Vex Technologies — a growing startup committed to helping students gain practical experience through internships, real-world projects, mentorship, and career preparation.",
  },
  social: {
    linkedin: "https://linkedin.com/company/skillgrowvex",
    twitter: "https://twitter.com/skillgrowvex",
    instagram: "https://instagram.com/skillgrowvex",
    youtube: "https://youtube.com/@skillgrowvex",
    github: "https://github.com/skillgrowvex",
    whatsapp: "https://wa.me/919876543210",
    telegram: "https://t.me/skillgrowvex",
  },
};

export const CORE_VALUES = [
  "Innovation",
  "Integrity",
  "Learning",
  "Professionalism",
  "Growth",
  "Student Success",
];

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
  { value: "01", label: "Learn practically" },
  { value: "02", label: "Build real projects" },
  { value: "03", label: "Gain experience" },
  { value: "04", label: "Grow with guidance" },
];

export const TRUST_BADGES = [
  { label: "MSME Registered Enterprise", icon: "Building2" },
  { label: "Government of India Udyam Registered", icon: "ShieldCheck" },
  { label: "Industry-Oriented Learning", icon: "GraduationCap" },
  { label: "Certificate Verification", icon: "BadgeCheck" },
  { label: "Secure Registration", icon: "Lock" },
];

export const WHY_CHOOSE_US = [
  {
    title: "Industry-Oriented Projects",
    description: "Work on real-world projects that mirror industry challenges and build a portfolio that stands out.",
    icon: "FolderKanban",
  },
  {
    title: "Hands-on Learning",
    description: "Learn by doing with practical assignments, capstone projects, and guided implementation.",
    icon: "Rocket",
  },
  {
    title: "Experienced Mentors",
    description: "Get guidance from experienced professionals who provide personalized feedback on your work.",
    icon: "Users",
  },
  {
    title: "Career Guidance",
    description: "Receive structured career planning, interview readiness, and professional mentorship.",
    icon: "Target",
  },
  {
    title: "Resume Building",
    description: "Build ATS-friendly resumes with mentor-reviewed formatting and professional presentation.",
    icon: "FileText",
  },
  {
    title: "ATS Resume Review",
    description: "Get expert feedback on ATS compatibility, skills presentation, and achievements.",
    icon: "ScanSearch",
  },
  {
    title: "LinkedIn Optimization",
    description: "Optimize your LinkedIn profile to attract recruiters and showcase your projects.",
    icon: "Linkedin",
  },
  {
    title: "GitHub Portfolio",
    description: "Build a professional GitHub portfolio with guided project uploads and README templates.",
    icon: "Github",
  },
  {
    title: "Mock Interviews",
    description: "Practice HR and technical interviews with structured feedback and performance coaching.",
    icon: "MessageSquare",
  },
  {
    title: "Weekly Assessments",
    description: "Track progress with structured weekly assignments and performance evaluations.",
    icon: "ClipboardCheck",
  },
  {
    title: "Certificates",
    description: "Earn verifiable certificates with QR verification that employers can instantly validate.",
    icon: "BadgeCheck",
  },
  {
    title: "Continuous Learning Support",
    description: "Access community support, learning resources, and ongoing mentorship throughout your journey.",
    icon: "Clock",
  },
];

export const CAREER_ROADMAP = [
  "Registration",
  "Orientation",
  "Learning",
  "Assignments",
  "Projects",
  "Mentorship",
  "Resume Building",
  "GitHub Portfolio",
  "LinkedIn Optimization",
  "Mock Interviews",
  "Career Guidance",
  "Internship Completion",
  "Career Ready",
];

export const TECHNOLOGIES = [
  "Python", "SQL", "Excel", "Power BI", "Tableau", "Machine Learning",
  "Artificial Intelligence", "Generative AI", "HTML", "CSS", "JavaScript",
  "React", "Node.js", "MongoDB", "Git", "GitHub", "Java", "AWS Basics",
];

export const LIVE_PROJECTS = [
  {
    title: "Python Applications",
    description: "Build practical Python apps with real-world use cases and deployment guidance.",
    tags: ["Python", "Automation"],
  },
  {
    title: "Data Analytics Dashboard",
    description: "Create interactive dashboards with KPIs, filters, and business insights.",
    tags: ["SQL", "Excel", "Analytics"],
  },
  {
    title: "Sales Dashboard",
    description: "Analyze sales trends, regional performance, and revenue forecasting.",
    tags: ["Power BI", "SQL"],
  },
  {
    title: "Uber Data Analysis",
    description: "Explore ride patterns, demand forecasting, and operational insights.",
    tags: ["Python", "Pandas"],
  },
  {
    title: "Food Waste Management",
    description: "Design a data-driven solution for reducing food waste in supply chains.",
    tags: ["Analytics", "Sustainability"],
  },
  {
    title: "Customer Churn Prediction",
    description: "Build ML models to predict customer churn and recommend retention strategies.",
    tags: ["Machine Learning", "Python"],
  },
  {
    title: "Machine Learning Models",
    description: "Train, evaluate, and deploy ML models with proper documentation.",
    tags: ["ML", "Scikit-learn"],
  },
  {
    title: "AI Projects",
    description: "Explore generative AI tools and build practical AI-powered applications.",
    tags: ["AI", "GenAI"],
  },
  {
    title: "Portfolio Website",
    description: "Create a professional portfolio website to showcase your skills and projects.",
    tags: ["React", "HTML", "CSS"],
  },
  {
    title: "Database Projects",
    description: "Design normalized databases, write complex queries, and optimize performance.",
    tags: ["SQL", "MongoDB"],
  },
  {
    title: "Power BI Dashboard",
    description: "Build enterprise-grade Power BI reports with DAX and data modeling.",
    tags: ["Power BI", "DAX"],
  },
];

export const INTERNSHIP_PLANS = [
  {
    id: "basic",
    name: "Basic Internship",
    duration: "2 Months",
    price: 299,
    currency: "₹",
    suitableFor: "Beginners",
    popular: false,
    features: [
      "Industry-Oriented Project",
      "Recorded Learning Content",
      "Weekly Assignments",
      "Internship Certificate",
      "Project Completion Certificate",
      "GitHub Guidance",
      "Community Support",
      "Email Support",
      "Certificate Verification",
    ],
  },
  {
    id: "professional",
    name: "Professional Internship",
    duration: "2 Months",
    price: 999,
    currency: "₹",
    suitableFor: "Career Starters",
    popular: true,
    features: [
      "Everything in Basic",
      "Live Mentor Support",
      "Weekly Live Sessions",
      "Career Roadmap",
      "Multiple Industry Projects",
      "Complete Project Explanation",
      "Resume Building Session",
      "ATS Resume Review",
      "LinkedIn Optimization",
      "GitHub Portfolio Guidance",
      "Mock HR Interview",
      "Mock Technical Interview",
      "Performance Feedback",
      "Career Guidance",
      "Priority Student Support",
      "Letter of Recommendation (Performance Based)",
      "Certificate Verification",
    ],
  },
  {
    id: "career-launch",
    name: "Career Launch Program",
    duration: "3 Months",
    price: 1999,
    currency: "₹",
    suitableFor: "Career Accelerators",
    popular: false,
    features: [
      "Everything in Professional",
      "Advanced Industry Projects",
      "Capstone Project",
      "AI & Data Analytics Learning Track",
      "Portfolio Website Guidance",
      "Communication Skills Training",
      "Personal Progress Tracking",
      "Monthly Career Planning Session",
      "Advanced Resume Optimization",
      "Exclusive Learning Resources",
      "Priority Mentor Support",
      "Alumni Community Access",
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: "What is SkillGrow Vex Academy?",
    answer:
      "SkillGrow Vex Academy is an initiative by Grow Vex Technologies — a growing startup focused on helping students gain practical experience through internships, real-world projects, mentorship, and career preparation.",
  },
  {
    question: "Are you a large company?",
    answer:
      "We are a growing MSME (Udyam) registered startup committed to student success. We focus on quality learning, mentorship, and career readiness — not inflated claims.",
  },
  {
    question: "Do you guarantee jobs or placement?",
    answer:
      "No. We do not guarantee jobs, placement, or direct company referrals. We focus on career preparation, interview readiness, portfolio development, and professional mentorship.",
  },
  {
    question: "How long are the internship programs?",
    answer:
      "Our Basic and Professional internships are 2 months. The Career Launch Program is 3 months with advanced projects and capstone work.",
  },
  {
    question: "Are the certificates verifiable?",
    answer:
      "Yes! All certificates include a unique ID and QR code verifiable at our certificate portal. Certificates mention SkillGrow Vex Academy, Powered by Grow Vex Technologies, and Udyam registration details.",
  },
  {
    question: "What technologies will I learn?",
    answer:
      "Depending on your program: Python, SQL, Excel, Power BI, Machine Learning, AI, React, Java, Git/GitHub, and more. See our Technologies section for the full list.",
  },
  {
    question: "How do I apply?",
    answer:
      "Click Apply Now, complete the multi-step registration form, and our team will review your application. You can also browse internship plans on our Pricing page.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Email us at support@skillgrowvex.com, use our Contact page, or message us on WhatsApp. We typically respond within 24 hours.",
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Internships" },
  { href: "/projects", label: "Projects" },
  { href: "/career-roadmap", label: "Career" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/verify", label: "Certificates" },
  { href: "/faq", label: "FAQ" },
];

export const FOOTER_LINKS = {
  quick: [
    { href: "/pricing", label: "Internships" },
    { href: "/projects", label: "Projects" },
    { href: "/career-roadmap", label: "Career Roadmap" },
    { href: "/verify", label: "Certificates" },
    { href: "/resume-review", label: "Resume Review" },
    { href: "/contact", label: "Contact" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/student-success", label: "Student Success" },
    { href: "/faq", label: "FAQ" },
  ],
  resources: [
    { href: "/verify", label: "Verify Certificate" },
    { href: "/student", label: "Student Portal" },
    { href: "/apply", label: "Apply Now" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/terms", label: "Refund Policy" },
  ],
};

export const BADGES = [
  { name: "First Steps", description: "Complete your first assignment", points: 10 },
  { name: "Week Warrior", description: "Complete all weekly assignments", points: 25 },
  { name: "Perfect Score", description: "Score 100% on any assignment", points: 50 },
  { name: "Capstone Champion", description: "Complete the final project", points: 75 },
  { name: "Certified Pro", description: "Earn your first certificate", points: 100 },
  { name: "Top Performer", description: "Rank in top 10 on leaderboard", points: 150 },
];

export const FLOATING_TECH_ICONS = [
  "Python", "SQL", "Excel", "Power BI", "ML", "AI", "React", "Java", "GitHub",
];
