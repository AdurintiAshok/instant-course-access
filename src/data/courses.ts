
export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  price: string;
  instructor: string;
  level: string;
  projects: string[];
  syllabus: {
    week: number;
    title: string;
    topics: string[];
  }[];
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Full-Stack Web Development",
    description: "Master modern web development with React, Node.js, and databases. Build complete applications from scratch.",
    category: "Programming",
    duration: "12 weeks",
    price: "$299",
    instructor: "Sarah Johnson",
    level: "Beginner to Intermediate",
    projects: [
      "Build a responsive e-commerce website with React and Node.js",
      "Create a real-time chat application with WebSocket integration"
    ],
    syllabus: [
      {
        week: 1,
        title: "HTML & CSS Fundamentals",
        topics: ["HTML5 semantic elements", "CSS Grid & Flexbox", "Responsive design principles", "CSS animations"]
      },
      {
        week: 2,
        title: "JavaScript Essentials",
        topics: ["ES6+ syntax", "DOM manipulation", "Async/await", "Modern JavaScript patterns"]
      },
      {
        week: 3,
        title: "React Foundation",
        topics: ["Components & JSX", "Props & State", "Event handling", "Hooks introduction"]
      },
      {
        week: 4,
        title: "Advanced React",
        topics: ["Context API", "Custom hooks", "Performance optimization", "Testing with Jest"]
      },
      {
        week: 5,
        title: "Backend with Node.js",
        topics: ["Express.js setup", "REST API design", "Authentication", "Database integration"]
      },
      {
        week: 6,
        title: "Final Project",
        topics: ["Project planning", "Full-stack integration", "Deployment", "Code review"]
      }
    ]
  },
  {
    id: "2",
    title: "Data Science with Python",
    description: "Learn data analysis, visualization, and machine learning using Python, pandas, and scikit-learn.",
    category: "Data Science",
    duration: "10 weeks",
    price: "$249",
    instructor: "Dr. Michael Chen",
    level: "Intermediate",
    projects: [
      "Analyze sales data and create interactive dashboards",
      "Build a machine learning model for customer behavior prediction"
    ],
    syllabus: [
      {
        week: 1,
        title: "Python for Data Science",
        topics: ["NumPy fundamentals", "Pandas data manipulation", "Jupyter notebooks", "Data types & structures"]
      },
      {
        week: 2,
        title: "Data Visualization",
        topics: ["Matplotlib basics", "Seaborn styling", "Interactive plots with Plotly", "Dashboard creation"]
      },
      {
        week: 3,
        title: "Statistical Analysis",
        topics: ["Descriptive statistics", "Hypothesis testing", "Correlation analysis", "Distribution analysis"]
      },
      {
        week: 4,
        title: "Machine Learning Basics",
        topics: ["Supervised learning", "Model evaluation", "Cross-validation", "Feature engineering"]
      },
      {
        week: 5,
        title: "Advanced ML Techniques",
        topics: ["Ensemble methods", "Deep learning intro", "Natural language processing", "Time series analysis"]
      }
    ]
  },
  {
    id: "3",
    title: "Digital Marketing Mastery",
    description: "Comprehensive digital marketing course covering SEO, social media, content marketing, and analytics.",
    category: "Marketing",
    duration: "8 weeks",
    price: "$199",
    instructor: "Emma Rodriguez",
    level: "Beginner",
    projects: [
      "Launch a complete digital marketing campaign for a local business",
      "Create and optimize a content marketing strategy with measurable results"
    ],
    syllabus: [
      {
        week: 1,
        title: "Digital Marketing Fundamentals",
        topics: ["Marketing strategy", "Customer personas", "Marketing funnel", "Digital channels overview"]
      },
      {
        week: 2,
        title: "Search Engine Optimization",
        topics: ["Keyword research", "On-page optimization", "Technical SEO", "Link building strategies"]
      },
      {
        week: 3,
        title: "Social Media Marketing",
        topics: ["Platform strategies", "Content creation", "Community management", "Paid advertising"]
      },
      {
        week: 4,
        title: "Content Marketing & Analytics",
        topics: ["Content strategy", "Email marketing", "Google Analytics", "Performance tracking"]
      }
    ]
  },
  {
    id: "4",
    title: "UI/UX Design Essentials",
    description: "Learn user-centered design principles, prototyping, and create stunning digital experiences.",
    category: "Design",
    duration: "6 weeks",
    price: "$179",
    instructor: "Alex Kim",
    level: "Beginner",
    projects: [
      "Design a complete mobile app interface from wireframes to high-fidelity prototypes",
      "Conduct user research and redesign an existing website for better usability"
    ],
    syllabus: [
      {
        week: 1,
        title: "Design Thinking",
        topics: ["User research methods", "Personas & user journeys", "Problem definition", "Design process"]
      },
      {
        week: 2,
        title: "UI Design Principles",
        topics: ["Typography", "Color theory", "Layout & composition", "Design systems"]
      },
      {
        week: 3,
        title: "Prototyping & Tools",
        topics: ["Wireframing", "Figma mastery", "Interactive prototypes", "Design handoff"]
      }
    ]
  }
];

// Payment configuration
export const paymentConfig = {
  phoneNumber: "+1-555-LEARN-01",
  qrCodeUrl: "/api/placeholder/200/200", // This would be replaced with actual QR code
  bankDetails: {
    accountName: "LearnHub Academy",
    accountNumber: "****1234",
    routingNumber: "****5678"
  }
};

// Generate unique payment reference
export const generatePaymentReference = (courseId: string, timestamp: number): string => {
  const coursePrefix = courseId.padStart(2, '0');
  const timeHash = timestamp.toString(36).slice(-6).toUpperCase();
  return `LH${coursePrefix}${timeHash}`;
};
