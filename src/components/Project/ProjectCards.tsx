// src/components/Projects/ProjectCard.tsx
import React from "react";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, darkMode }) => {
  return (
    <div
      key={project.id}
      className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
        darkMode
          ? "bg-gray-800 hover:shadow-indigo-500/20"
          : "bg-white hover:shadow-xl"
      }`}
    >
      <div className="hidden sm:block h-40 sm:h-44 md:h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
          {project.title}
        </h3>
        <p
          className={`mb-3 sm:mb-4 text-xs sm:text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium rounded-md ${
                darkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-2 sm:space-x-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium rounded-md flex items-center !rounded-button whitespace-nowrap cursor-pointer ${
              darkMode
                ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            <i className="fas fa-external-link-alt mr-1 sm:mr-1.5"></i> Live
            Demo
          </a>
          {typeof project.githubLink === "string" ? (<a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium rounded-md flex items-center !rounded-button whitespace-nowrap cursor-pointer ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            <i className="fab fa-github mr-1 sm:mr-1.5"></i> Code
          </a>) : (
            <div className="flex space-x-2">
              <a
                href={project.githubLink.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium rounded-md flex items-center !rounded-button whitespace-nowrap cursor-pointer ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                <i className="fab fa-github mr-1 sm:mr-1.5"></i> Frontend Code
              </a>
              <a
                href={project.githubLink.backend}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium rounded-md flex items-center !rounded-button whitespace-nowrap cursor-pointer ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                <i className="fab fa-github mr-1 sm:mr-1.5"></i> Backend Code
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
