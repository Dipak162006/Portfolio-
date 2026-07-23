import React from 'react';
import {
  Layout,
  Server,
  Video,
  Bot,
  Database,
  BrainCircuit,
  Smartphone,
  Landmark,
  Wallet,
  ShieldCheck,
  PhoneCall,
  PieChart,
  ShoppingCart,
  MessageSquare
} from 'lucide-react';

export const portfolioData = {
  personalInfo: {
    name: "Dipak Odhavani",
    title: "MERN Stack | Web Developer ",
    bio: "Final-year B.Tech Information Technology student passionate about building modern full-stack web applications and AI-powered solutions. Experienced in React.js, Node.js, PHP, Python, Flask, SQL databases, and LLM integration through real-world projects. Seeking opportunities to contribute, learn, and grow as a software developer.",
    resumeUrl: "/Dipak_Odhavani_Resume.pdf",
    resumeFileName: "Dipak_Odhavani_Resume.pdf",
    contact: {
      email: "dipakodhavani@gmail.com",
      linkedin: "https://linkedin.com/in/dipakodhavani2006",
      github: "https://github.com/Dipak162006"
    }
  },
  skills: [
    {
      category: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "React.js",
        "Vite"
      ]
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      technologies: [
        "Node.js",
        "Express.js",
        "PHP",
        "Flask",
        "REST APIs",
        "JWT Authentication"
      ]
    },
    {
      category: "Databases",
      icon: <Database className="w-6 h-6" />,
      technologies: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      category: "AI & Tools",
      icon: <BrainCircuit className="w-6 h-6" />,
      technologies: ["Python", "Groq API", "TensorFlow", "MediaPipe", "Prompt Engineering", "Git", "GitHub", "VS Code", "XAMPP", "Postman"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "SignSpeak: ASL Sign Language Translator",
      description: "An intelligent computer vision application powered by a hybrid CNN-LSTM architecture and MediaPipe hand tracking to recognize American Sign Language in real-time, featuring automated sentence building and speech synthesis.",
      techStack: ["Python", "Flask", "TensorFlow", "Keras", "MediaPipe", "OpenCV"],
      githubUrl: "https://github.com/Dipak162006/SignSpeak-Sign-Language-Recognition-System",
      liveUrl: "#",
      icon: <Video className="w-6 h-6" />
    },
    {
      id: 2,
      title: "AI Citizen Service & Government Scheme Assistant",
      description: "A hybrid RAG AI agent leveraging SQL queries for strict eligibility filtering alongside LLMs for multilingual natural language understanding. Includes structured JSON profile extraction and persistent session tracking.",
      techStack: ["Python", "Flask", "PostgreSQL", "OpenAI API", "SQLAlchemy", "Tailwind CSS"],
      githubUrl: "https://github.com/Dipak162006/ai-citizen-service-assistant",
      liveUrl: "#",
      icon: <Bot className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Apex: Full-Stack Expense Management SaaS",
      description: "A secure financial management SPA featuring dynamic savings goals, budgeting alerts, and interactive cash flow timelines. Includes stateless JWT authentication, receipt attachment uploads, and statement exports (PDF/Excel).",
      techStack: ["React 19", "Vite", "Tailwind CSS v4", "PHP 8", "MySQL", "PDO", "JWT", "Recharts"],
      githubUrl: "https://github.com/Dipak162006/expense-management-system", // Update with exact repo link if needed
      liveUrl: "#",
      icon: <PieChart className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Smart Lost & Found Community Portal",
      description: "A comprehensive multi-role campus management platform featuring secure BCRYPT authentication, Anti-CSRF verification, automated PHPMailer SMTP email broadcasts, live AJAX search, and Chart.js moderation analytics.",
      techStack: ["PHP 8.2", "MySQL", "JavaScript (ES6)", "Bootstrap 5", "AJAX", "PHPMailer", "Chart.js"],
      githubUrl: "https://github.com/Dipak162006/lost-found-system",
      liveUrl: "#",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      id: 5,
      title: "FastNet WiFi - AI Voice Calling System",
      description: "A production-ready AI voice calling system for a WiFi company. Features automated outbound calls with realistic conversational AI responses, lead outcome tracking, and a real-time admin dashboard with volume analytics.",
      techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Twilio API", "OpenAI GPT-3.5", "Whisper API", "Google TTS"],
      githubUrl: "https://github.com/Dipak162006/ai-calling-system", // Update with exact repo link if needed
      liveUrl: "#",
      icon: <PhoneCall className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Amazon Clone E-Commerce UI",
      description: "A responsive front-end clone of the Amazon marketplace featuring an interactive navigation bar, dynamic product display cards, and functional shopping cart UI management.",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/Dipak162006/Amazon-clone", // Update with exact repo link if needed
      liveUrl: "#",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      id: 7,
      title: "Interactive React Chatbot SPA",
      description: "A responsive, modern conversational chat interface built with React 18 and Vite. Features real-time messaging simulations, optimized Hot Module Replacement (HMR) build pipelines, and dynamic time-formatting utilities.",
      techStack: ["React 18", "Vite", "JavaScript (ES6+)", "Day.js", "HTML5/CSS3"],
      githubUrl: "https://github.com/Dipak162006/chatbot-project",
      liveUrl: "#",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      id: 8,
      title: "Full-Stack E-Commerce Platform",
      description: "A responsive, modern shopping platform built with a decoupled React 18 SPA frontend and a RESTful Node.js/Express backend API. Features dynamic product catalog loading, interactive cart management, checkout order processing, and delivery tracking.",
      techStack: ["React 18", "Vite", "Node.js (v22+)", "Express.js", "Axios", "React Router DOM"],
      githubUrl: "https://github.com/Dipak162006/E-commerce-project",
      liveUrl: "#",
      icon: <ShoppingCart className="w-6 h-6" />
    }
  ],
  experience: [
    {
      id: 1,
      company: "AzzipTech",
      position: "React.js & Node.js Intern",
      duration: "15 Days",
      description: [
        "Built responsive React.js components and dynamic frontend UIs.",
        "Developed and optimized backend APIs using Node.js.",
        "Integrated REST APIs for seamless client-server data communication.",
        "Learned and implemented modern full-stack development and Git practices."
      ]
    },
    {
      id: 2,
      company: "IT Hub Software Solutions",
      position: "Web Development Intern",
      duration: "15 Days",
      description: [
        "Developed responsive web pages using HTML5, CSS3, JavaScript, and PHP.",
        "Worked on core feature implementation for the Apex Expense Management System.",
        "Integrated MySQL databases and built REST APIs with secure data handling.",
        "Collaborated with senior developers on systematic debugging and UI/UX testing."
      ]
    }
  ],
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Information Technology",
    college: "Gyanmanjari Innovative University",
    duration: "2023 - 2027",
    cgpa: "7.38 / 10"
  },
  certifications: [
    {
      id: 1,
      title: "AI Agent Making Competition",
      issuer: "AzzipTech",
      year: "2026",
      highlight: true
    },
    {
      id: 2,
      title: "Green Skills & Artificial Intelligence",
      issuer: "Edunet Foundation",
      year: "2025/2026",
      highlight: true
    },
    {
      id: 3,
      title: "TechManjari 2026",
      issuer: "Participant / Competitor",
      year: "2026",
      highlight: false
    },
    {
      id: 4,
      title: "TechNova Hackathon 2025",
      issuer: "Participant",
      year: "2025",
      highlight: false
    },
    {
      id: 5,
      title: "Code2Impact",
      issuer: "Participant",
      year: "2025",
      highlight: false
    },
    {
      id: 6,
      title: "InnoApp",
      issuer: "Participant",
      year: "2025",
      highlight: false
    },
    {
      id: 7,
      title: "Pahel 1.0",
      issuer: "Participant",
      year: "2025",
      highlight: false
    }
  ]
};
