export type CourseCategory = "Development" | "Data" | "AI" | "Programming" | "Career";

export type Course = {
  slug: string;
  title: string;
  category: CourseCategory;
  level: string;
  duration: string;
  description: string;
  technologies: string[];
  price: string;
  image: string;
  href: string;
};

export const COURSES: Course[] = [
  { slug: "python-development", title: "Python Development", category: "Programming", level: "Beginner to advanced", duration: "8 weeks", price: "₹2,650", description: "Build a strong Python foundation through automation, APIs, and practical backend projects.", technologies: ["Python", "OOP", "APIs"], image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=900&auto=format&fit=crop", href: "/courses/python-development" },
  { slug: "data-analytics", title: "Data Analytics", category: "Data", level: "Beginner friendly", duration: "8 weeks", price: "₹2,650", description: "Turn business questions into insights with Python, SQL, Excel, and dashboards.", technologies: ["SQL", "Excel", "Power BI"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop", href: "/courses/data-analytics" },
  { slug: "data-science", title: "Data Science", category: "Data", level: "Intermediate", duration: "10 weeks", price: "₹4,000", description: "Learn statistics, exploratory analysis, and machine learning with real datasets.", technologies: ["Python", "Pandas", "Scikit-learn"], image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&auto=format&fit=crop", href: "/courses/data-science" },
  { slug: "full-stack-development", title: "Full Stack Development", category: "Development", level: "Beginner to intermediate", duration: "12 weeks", price: "₹2,650", description: "Ship responsive web products across frontend, backend, databases, and deployment.", technologies: ["React", "Node.js", "MongoDB"], image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop", href: "/courses/full-stack-development" },
  { slug: "machine-learning", title: "Machine Learning", category: "AI", level: "Intermediate", duration: "10 weeks", price: "₹4,000", description: "Train, evaluate, and explain useful models through practical project work.", technologies: ["Python", "ML", "Modeling"], image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop", href: "/courses/machine-learning" },
  { slug: "generative-ai", title: "Generative AI", category: "AI", level: "Intermediate", duration: "6 weeks", price: "₹4,000", description: "Explore prompts, model APIs, retrieval, and responsible AI application patterns.", technologies: ["LLMs", "RAG", "Python"], image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&auto=format&fit=crop", href: "/courses/generative-ai" },
  { slug: "java-development", title: "Java Development", category: "Programming", level: "Beginner to intermediate", duration: "8 weeks", price: "₹2,650", description: "Learn Java, OOP, backend patterns, and the foundations of enterprise development.", technologies: ["Java", "OOP", "Spring"], image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&auto=format&fit=crop", href: "/courses/java-development" },
  { slug: "dsa-interview-prep", title: "DSA & Interview Prep", category: "Career", level: "All levels", duration: "6 weeks", price: "₹2,650", description: "Build problem-solving habits for technical interviews with guided practice.", technologies: ["DSA", "Python", "Java"], image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=900&auto=format&fit=crop", href: "/courses/dsa-interview-prep" },
  { slug: "ai-engineering", title: "AI Engineer", category: "AI", level: "Intermediate to advanced", duration: "10 weeks", price: "₹4,000", description: "Design and deploy production AI systems using LLMs, agents, and real-world pipelines.", technologies: ["Python", "LangChain", "Vector DBs"], image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop", href: "/courses/ai-engineering" },
  { slug: "app-development", title: "App Development", category: "Development", level: "Beginner to intermediate", duration: "10 weeks", price: "₹2,650", description: "Build and ship cross-platform mobile apps for Android and iOS from scratch.", technologies: ["React Native", "Flutter", "APIs"], image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop", href: "/courses/app-development" },
  { slug: "frontend-development", title: "Frontend Development", category: "Development", level: "Beginner friendly", duration: "8 weeks", price: "₹2,650", description: "Build responsive, modern interfaces with React, state management, and clean UI patterns.", technologies: ["React", "Next.js", "Tailwind"], image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=900&auto=format&fit=crop", href: "/courses/frontend-development" },
  { slug: "backend-development", title: "Backend Development", category: "Development", level: "Beginner to intermediate", duration: "8 weeks", price: "₹2,650", description: "Build scalable APIs, authentication, and databases with Node.js and production practices.", technologies: ["Node.js", "Express", "PostgreSQL"], image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&auto=format&fit=crop", href: "/courses/backend-development" },
  { slug: "sql-developer", title: "SQL Developer", category: "Data", level: "Beginner friendly", duration: "6 weeks", price: "₹2,650", description: "Master relational databases, complex queries, and performance tuning for real applications.", technologies: ["SQL", "PostgreSQL", "Query Optimization"], image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=900&auto=format&fit=crop", href: "/courses/sql-developer" },
];

export const JOURNEY = [
  ["01", "Learn", "Structured lessons that make the fundamentals clear."],
  ["02", "Practice", "Assignments and challenges that turn concepts into habits."],
  ["03", "Build", "Portfolio projects that show how you think and work."],
  ["04", "Experience", "Internship-style tasks with feedback and milestones."],
  ["05", "Grow", "Resume, GitHub, interview, and career guidance."],
];

export const INTERNSHIPS = [
  ["Python Developer", "8 weeks", "Python, APIs, Automation"],
  ["Data Analytics", "8 weeks", "SQL, Excel, Power BI"],
  ["Full Stack Web Development", "12 weeks", "React, Node.js, Database"],
  ["Machine Learning", "10 weeks", "Python, ML, Projects"],
];

export const PROJECTS = [
  ["Autonomous Hiring Agent", "AI & ML", "Python, NLP, LLM, Graph recommendation, Streamlit", "An advanced recruitment intelligence project that connects candidate signals to explainable recommendations."],
  ["AI Analytics Assistant", "Generative AI", "Python, Pandas, SQL, LLM/API", "An AI-powered analytics experience for asking questions of structured business data."],
  ["Telecom Customer Churn Prediction", "Machine Learning", "Python, Scikit-learn, EDA", "A customer retention project focused on model evaluation, business context, and responsible interpretation."],
  ["Advanced Data Analytics", "Data & BI", "Python, SQL, Power BI, KPI analysis", "A practical analytics case study that turns messy operational data into decision-ready insights."],
];

export const FAQS = [
  ["Who can join Skill Grow Vex Academy?", "College students, fresh graduates, beginners entering IT, and career switchers can start with the path that fits their current skills."],
  ["Do I need prior programming experience?", "No. Several paths begin with fundamentals. Advanced tracks identify the background that will help you progress comfortably."],
  ["Do courses include projects?", "The learning model is designed around assignments and practical projects. The exact project plan depends on the selected program."],
  ["How do internships work?", "You submit an application, complete any applicable screening, and work through practical tasks, projects, and review milestones."],
  ["Do you provide career guidance?", "Career support can include resume, GitHub, interview, and pathway guidance. Specific support depends on the program."],
];