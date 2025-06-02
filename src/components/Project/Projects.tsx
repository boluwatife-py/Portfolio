// src/components/Projects/Projects.tsx
import React from "react";
import FilterTabs from "./FilterTabs";
import ProjectCard from "./ProjectCards";
import type { Project } from "../../types/project";

interface ProjectsProps {
  darkMode: boolean;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  visibleProjects: number;
  setVisibleProjects: React.Dispatch<React.SetStateAction<number>>;
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({
  darkMode,
  activeTab,
  setActiveTab,
  visibleProjects,
  setVisibleProjects,
  projects,
}) => {
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <section id="projects" className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-indigo-600">Projects</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Here are some of the projects I've worked on. Each project reflects
            my passion for creating efficient, user-friendly applications.
          </p>
          <FilterTabs
            darkMode={darkMode}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              darkMode={darkMode}
            />
          ))}
        </div>
        {visibleProjects < filteredProjects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className={`px-6 py-3 text-sm font-medium rounded-md flex items-center !rounded-button whitespace-nowrap cursor-pointer ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                  : "bg-white hover:bg-gray-100 text-gray-800 border border-gray-300"
              }`}
            >
              Load More <i className="fas fa-arrow-down ml-2"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
