import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
    image: "/images/ecommerce platform.jpg",
    technologies: ["React", "Django", "PostgreSQL", "Tailwind CSS"],
    liveLink: "https://example.com/ecommerce",
    githubLink: "https://github.com/boluwatife/ecommerce",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Free API Platform",
    description:
      "A fullstack platform featuring a FastAPI backend that serves free public APIs and a React frontend for browsing and testing them. Includes Swagger docs, rate-limiting, and responsive UI.",
    image: "/images/free-api-platform.jpg",
    technologies: ["React", "FastAPI", "Tailwind CSS", "Radix UI", "Wouter", "SQLalchemy", "asyncio", "Error Monitoring", "TypeScript"],
    liveLink: "softtouchapi.netlify.app",
    githubLink: {
      frontend: "https://github.com/boluwatife-py/SoftTouch",
      backend: "https://github.com/boluwatife-py/SoftTouchAPI",
    },
    category: "fullstack",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current and forecasted weather data with interactive visualizations.",
    image: "/images/weather dashboard.jpg",
    technologies: ["JavaScript", "Chart.js", "OpenWeather API"],
    liveLink: "https://example.com/weather",
    githubLink: "https://github.com/boluwatife/weather",
    category: "frontend",
  },
  {
    id: 4,
    title: "Blog API",
    description:
      "A RESTful API for a blog platform with authentication, authorization, and CRUD operations.",
    image: "/images/blog api.jpg",
    technologies: ["Python", "Flask", "JWT", "SQLAlchemy"],
    liveLink: "https://example.com/blogapi",
    githubLink: "https://github.com/boluwatife/blogapi",
    category: "backend",
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
      "An inventory management system for small businesses with barcode scanning and reporting features.",
    image: "/images/inventory management system.jpg",
    technologies: ["Django", "PostgreSQL", "Bootstrap", "Chart.js"],
    liveLink: "https://example.com/inventory",
    githubLink: "https://github.com/boluwatife/inventory",
    category: "fullstack",
  },
  {
    id: 7,
    title: "Social Media API",
    description:
      "A backend API for a social media platform with features like posts, comments, likes, and user profiles.",
    image: "/images/social media api.jpg",
    technologies: ["Python", "FastAPI", "MongoDB", "JWT"],
    liveLink: "https://example.com/socialmediaapi",
    githubLink: "https://github.com/boluwatife/socialmediaapi",
    category: "backend",
  },
  {
    id: 8,
    title: "Fitness Tracker",
    description:
      "A fitness tracking application that allows users to log workouts, track progress, and set goals.",
    image: "/images/fitness tracker.jpg",
    technologies: ["React", "TypeScript", "Django", "PostgreSQL"],
    liveLink: "https://example.com/fitnesstracker",
    githubLink: "https://github.com/boluwatife/fitnesstracker",
    category: "fullstack",
  },
  {
    id: 9,
    title: "Recipe Finder",
    description:
      "A recipe finder application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine.",
    image: "/images/recipe finder.jpg",
    technologies: ["JavaScript", "React", "Spoonacular API"],
    liveLink: "https://example.com/recipefinder",
    githubLink: "https://github.com/boluwatife/recipefinder",
    category: "frontend",
  },
];
