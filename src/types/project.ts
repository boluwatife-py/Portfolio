// src/types/project.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  category: 'frontend' | 'backend' | 'fullstack';
}