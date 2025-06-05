import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 4,
    title: "Beat Store Platform",
    description:
      "A full-featured beat selling website with secure payment integration, track previews, real-time analytics, and automated download handling. Designed for music producers to showcase and sell their beats online.",
    image: "/images/Ecommerce-software-store.png",
    technologies: [
      "Django",
      "Tailwind CSS",
      "JavaScript",
      "Chart.js",
      "Stripe API",
    ],
    liveLink: "https://admin1234.pythonanywhere.com",
    githubLink: "https://github.com/boluwatife-py/Kairos-Store",
    category: "fullstack",
  },
  {
    id: 1,
    title: "E-Commerce Platform API",
    description:
      "A full-featured e-commerce platform with user authentication, admin dashboard and search-filter.",
    image: "/images/ecommerceAPI.png",
    technologies: [
      "FastAPI",
      "Alembic",
      "SQLAlchemy",
      "JWT",
      "Python",
      "Asyncio",
      "PostgreSQL",
      "WebSockets",
      "Supabase",
    ],
    liveLink: null,
    githubLink:
      "https://github.com/boluwatife-py/E-commerce-backend-fastapi-python",
    category: "backend",
  },
  {
    id: 2,
    title: "Free API Platform",
    description:
      "A fullstack platform featuring a FastAPI backend that serves free public APIs and a React frontend for browsing and testing them. Includes Swagger docs and responsive UI.",
    image: "/images/free-api-platform.png",
    technologies: [
      "React",
      "FastAPI",
      "Tailwind CSS",
      "Radix UI",
      "Wouter",
      "SQLalchemy",
      "asyncio",
      "Error Monitoring",
      "TypeScript",
    ],
    liveLink: "https://softtouch.boluwatife.tech",
    githubLink: {
      frontend: "https://github.com/boluwatife-py/SoftTouch",
      backend: "https://github.com/boluwatife-py/SoftTouchAPI",
    },
    category: "fullstack",
  },
  {
    id: 4,
    title: "Plumbing Business Website",
    description:
      "A responsive landing page for a plumbing business, built with HTML, Tailwind CSS, and Remix Icon. Designed for showcasing services and capturing customer interest.",
    image: "/images/plumbing business.png",
    technologies: ["HTML", "Tailwind CSS", "Remix Icon", "JavaScript", "CSS"],
    liveLink: "https://plumbing.boluwatife.tech",
    githubLink: "https://github.com/boluwatife-py/Plumber-Demo",
    category: "frontend",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    image: "/images/portfolio.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://boluwatife.tech",
    githubLink: "https://github.com/boluwatife-py/portfolio",
    category: "frontend",
  },
  {
    id: 6,
    title: "Inventory Management System",
    description:
      "An inventory management system for small businesses with charts, search and reporting features.",
    image: "/images/IMS.png",
    technologies: [
      "Flask",
      "SQLAlchemy",
      "Tailwind",
      "Chart.js",
      "JavaScript",
      "UV",
    ],
    liveLink: "http://softtouch.pythonanywhere.com/",
    githubLink: "https://github.com/boluwatife-py/Inventory-Management-System",
    category: "fullstack",
  },
  {
    id: 7,
    title: "3D eCommerce Product Page",
    description:
      "A modern eCommerce product page that displays items in a VR-like 3D environment using HTML, CSS, JavaScript, and Three.js. Designed to give users a realistic, interactive view of products directly in the browser.",
    image: "/images/ecommerce3d.png",
    technologies: ["HTML", "CSS", "JavaScript", "Three.js"],
    liveLink: "https://ecommerce-product.boluwatife.tech/",
    githubLink: "https://github.com/boluwatife-py/3d-product-page-three-js",
    category: "frontend",
  },
  {
    id: 9,
    title: "Expense Tracker Backend API",
    description:
      "A Flask-based RESTful API for managing personal expenses, with user authentication, expense tracking, and category management.",
    image: "/images/expenseTrackerAPI.png",
    technologies: ["Flask", "Python", "SQLite", "JWT"],
    liveLink: "https://example.com/expensetrackerapi",
    githubLink: "https://github.com/boluwatife-py/ExpenseTrackerApi",
    category: "backend",
  }
];
