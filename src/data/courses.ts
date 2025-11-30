
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
    title: "Full-Stack Development",
    description: "Master modern web development with React, Node.js, and MongoDB. Build complete full-stack applications from scratch.",
    category: "Programming",
    duration: "12 weeks",
    price: "1999",
    instructor: "4+ Years Experienced Developer",
    level: "Beginner to Advanced",
    projects: [
      "Build a complete e-commerce platform with React and Node.js",
      "Create a real-time social media application with MongoDB",
      "Deploy a production-ready full-stack application to the cloud"
    ],
    syllabus: [
      {
        week: 1,
        title: "React - Frontend Development",
        topics: ["Components & JSX", "Hooks (useState, useEffect, useContext)", "React Router & Navigation", "State Management (Context API, Redux)", "API Integration & Fetch"]
      },
      {
        week: 2,
        title: "React - Advanced Patterns",
        topics: ["Custom Hooks", "Performance optimization", "Error boundaries", "Code splitting", "Testing with Jest"]
      },
      {
        week: 3,
        title: "Node.js - Backend Basics",
        topics: ["Express.js setup", "REST API design", "Middleware functions", "Request/Response handling", "Error handling"]
      },
      {
        week: 4,
        title: "Node.js - Authentication & Security",
        topics: ["JWT authentication", "Password hashing", "Session management", "File handling & uploads", "Security best practices"]
      },
      {
        week: 5,
        title: "MongoDB - Database Fundamentals",
        topics: ["Collections & Documents", "CRUD operations", "Aggregations & pipelines", "Indexing & optimization", "Mongoose ODM"]
      },
      {
        week: 6,
        title: "Frontend Architecture",
        topics: ["Component structure", "State management patterns", "Routing strategies", "API layer design", "Performance optimization"]
      },
      {
        week: 7,
        title: "Backend API Creation",
        topics: ["RESTful design patterns", "API versioning", "Rate limiting", "Caching strategies", "Documentation"]
      },
      {
        week: 8,
        title: "Database Modeling",
        topics: ["Schema design", "Relationships", "Data normalization", "Query optimization", "Backup strategies"]
      },
      {
        week: 9,
        title: "Building Full-Stack Project - Part 1",
        topics: ["Project planning", "Database schema", "API endpoints", "Frontend components", "Authentication flow"]
      },
      {
        week: 10,
        title: "Building Full-Stack Project - Part 2",
        topics: ["Feature implementation", "Testing", "Error handling", "Performance tuning", "Security hardening"]
      },
      {
        week: 11,
        title: "Deployment Workflow",
        topics: ["Environment setup", "Build optimization", "Cloud deployment (AWS/Heroku)", "CI/CD pipeline", "Monitoring & logging"]
      },
      {
        week: 12,
        title: "Final Project & Best Practices",
        topics: ["Code review", "Documentation", "Scaling strategies", "Maintenance", "Career guidance"]
      }
    ]
  },
  {
    id: "2",
    title: "Python & SQL",
    description: "Build a strong foundation in programming with Python, Data Structures, and SQL. Perfect for interview preparation and problem-solving.",
    category: "Programming",
    duration: "10 weeks",
    price: "1499",
    instructor: "4+ Years Experienced Developer",
    level: "Beginner to Intermediate",
    projects: [
      "Develop a library management system with Python OOP",
      "Implement common algorithms and data structures from scratch",
      "Design and query a complete database schema for an e-commerce platform"
    ],
    syllabus: [
      {
        week: 1,
        title: "Python - Basics",
        topics: ["Variables & data types", "Control flow (if/else, loops)", "Functions & parameters", "String manipulation", "Input/Output operations"]
      },
      {
        week: 2,
        title: "Python - OOP & Modules",
        topics: ["Classes & Objects", "Inheritance & Polymorphism", "Modules & Packages", "File handling", "Exception handling"]
      },
      {
        week: 3,
        title: "Data Structures - Linear",
        topics: ["Arrays & Lists", "Stacks & Queues", "Linked Lists (Single, Double, Circular)", "Time complexity analysis", "Space complexity"]
      },
      {
        week: 4,
        title: "Data Structures - Non-Linear",
        topics: ["Trees (Binary, BST, AVL)", "Graphs (Directed, Undirected)", "Hash tables", "Heaps", "Tries"]
      },
      {
        week: 5,
        title: "SQL - Fundamentals",
        topics: ["SELECT queries", "WHERE, ORDER BY, GROUP BY", "Joins (INNER, LEFT, RIGHT, FULL)", "Constraints (PRIMARY KEY, FOREIGN KEY)", "Data types"]
      },
      {
        week: 6,
        title: "SQL - Advanced",
        topics: ["Stored procedures", "Triggers", "Views & indexes", "Query optimization", "Transactions"]
      },
      {
        week: 7,
        title: "Logical Problem Solving",
        topics: ["Problem decomposition", "Pattern recognition", "Algorithm design", "Debugging strategies", "Code optimization"]
      },
      {
        week: 8,
        title: "Writing Clean Code",
        topics: ["Naming conventions", "Code organization", "DRY principles", "Documentation", "Code refactoring"]
      },
      {
        week: 9,
        title: "Understanding Algorithms",
        topics: ["Sorting algorithms", "Searching algorithms", "Dynamic programming", "Greedy algorithms", "Recursion"]
      },
      {
        week: 10,
        title: "Interview-Focused Coding Practice",
        topics: ["Common interview patterns", "Leetcode-style problems", "System design basics", "Mock interviews", "Resume building"]
      }
    ]
  },
  // {
  //   id: "3",
  //   title: "DevOps Essentials - Git & Docker",
  //   description: "Learn core DevOps essentials focusing on Git for version control and Docker for containerization. Perfect for beginners entering the DevOps world.",
  //   category: "DevOps",
  //   duration: "4 weeks",
  //   price: "599",
  //   instructor: "Akash",
  //   level: "Beginner to Intermediate",
  //   projects: [
  //     "Set up a complete Git workflow for team collaboration",
  //     "Containerize a multi-service application with Docker Compose"
  //   ],
  //   syllabus: [
  //     {
  //       week: 1,
  //       title: "Git - Version Control Basics",
  //       topics: [
  //         "Git initialization",
  //         "Commits & staging",
  //         "Branching strategies",
  //         "Merging & rebasing",
  //         "Resolving conflicts"
  //       ]
  //     },
  //     {
  //       week: 2,
  //       title: "Git - Collaboration Workflow",
  //       topics: [
  //         "Pull requests",
  //         "Code reviews",
  //         "GitHub/GitLab workflow",
  //         "Gitflow model",
  //         "Best practices"
  //       ]
  //     },
  //     {
  //       week: 3,
  //       title: "Docker - Fundamentals",
  //       topics: [
  //         "Containers vs VMs",
  //         "Docker images",
  //         "Dockerfiles",
  //         "Container lifecycle",
  //         "Docker Hub"
  //       ]
  //     },
  //     {
  //       week: 4,
  //       title: "Docker - Advanced",
  //       topics: [
  //         "Volumes & persistence",
  //         "Docker networks",
  //         "Multi-container apps",
  //         "Docker Compose",
  //         "Optimization techniques"
  //       ]
  //     }
  //   ]
  // }

];


// Payment configuration
export const paymentConfig = {
  phoneNumber: "+1-555-LEARN-01",
  qrCodeUrl: "/api/placeholder/200/200", // This would be replaced with actual QR code
  bankDetails: {
    accountName: "techlogicwise",
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
