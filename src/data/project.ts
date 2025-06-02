import type { Project } from '../types/project';

export const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20showing%20product%20grid%20layout%20with%20minimalist%20product%20cards%2C%20navigation%20menu%2C%20and%20shopping%20cart%20icon.%20Professional%20web%20application%20with%20soft%20shadows%20and%20subtle%20animations&width=600&height=400&seq=1&orientation=landscape",
      technologies: ["React", "Django", "PostgreSQL", "Tailwind CSS"],
      liveLink: "https://example.com/ecommerce",
      githubLink: "https://github.com/boluwatife/ecommerce",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
      image:
        "https://readdy.ai/api/search-image?query=Task%20management%20application%20interface%20showing%20kanban%20board%20with%20colorful%20task%20cards%2C%20progress%20bars%2C%20and%20user%20avatars.%20Clean%20modern%20UI%20with%20organized%20columns%20for%20to-do%2C%20in%20progress%2C%20and%20completed%20tasks&width=600&height=400&seq=2&orientation=landscape",
      technologies: ["React", "TypeScript", "FastAPI", "MongoDB"],
      liveLink: "https://example.com/taskmanager",
      githubLink: "https://github.com/boluwatife/taskmanager",
      category: "fullstack",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather dashboard that displays current and forecasted weather data with interactive visualizations.",
      image:
        "https://readdy.ai/api/search-image?query=Weather%20dashboard%20with%20temperature%20graphs%2C%20weather%20icons%2C%20and%20city%20search%20functionality.%20Beautiful%20gradient%20background%20with%20weather%20visualization%20charts%20and%20forecast%20cards%20for%20upcoming%20days&width=600&height=400&seq=3&orientation=landscape",
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
      image:
        "https://readdy.ai/api/search-image?query=API%20documentation%20interface%20with%20endpoint%20listings%2C%20request%20examples%2C%20and%20response%20schemas.%20Professional%20developer-focused%20design%20with%20code%20snippets%20and%20authentication%20sections&width=600&height=400&seq=4&orientation=landscape",
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
      image:
        "https://readdy.ai/api/search-image?query=Portfolio%20website%20with%20hero%20section%2C%20project%20gallery%2C%20and%20contact%20form.%20Elegant%20design%20with%20subtle%20animations%2C%20skill%20indicators%2C%20and%20professional%20project%20showcases&width=600&height=400&seq=5&orientation=landscape",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://example.com/portfolio",
      githubLink: "https://github.com/boluwatife/portfolio",
      category: "frontend",
    },
    {
      id: 6,
      title: "Inventory Management System",
      description:
        "An inventory management system for small businesses with barcode scanning and reporting features.",
      image:
        "https://readdy.ai/api/search-image?query=Inventory%20management%20dashboard%20with%20product%20listings%2C%20stock%20levels%2C%20and%20analytics%20charts.%20Business%20application%20interface%20with%20data%20tables%2C%20search%20functionality%2C%20and%20inventory%20tracking%20features&width=600&height=400&seq=6&orientation=landscape",
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
      image:
        "https://readdy.ai/api/search-image?query=API%20documentation%20for%20social%20media%20platform%20showing%20endpoints%20for%20posts%2C%20comments%2C%20and%20user%20interactions.%20Technical%20interface%20with%20request%20parameters%2C%20authentication%20tokens%2C%20and%20response%20examples&width=600&height=400&seq=7&orientation=landscape",
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
      image:
        "https://readdy.ai/api/search-image?query=Fitness%20tracking%20application%20with%20workout%20logs%2C%20progress%20charts%2C%20and%20goal%20setting%20interface.%20Health-focused%20design%20with%20activity%20metrics%2C%20calendar%20view%2C%20and%20achievement%20badges&width=600&height=400&seq=8&orientation=landscape",
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
      image:
        "https://readdy.ai/api/search-image?query=Recipe%20finder%20application%20with%20food%20photography%2C%20ingredient%20search%2C%20and%20recipe%20cards.%20Culinary%20website%20with%20filtering%20options%2C%20preparation%20steps%2C%20and%20nutritional%20information&width=600&height=400&seq=9&orientation=landscape",
      technologies: ["JavaScript", "React", "Spoonacular API"],
      liveLink: "https://example.com/recipefinder",
      githubLink: "https://github.com/boluwatife/recipefinder",
      category: "frontend",
    },
  ];


