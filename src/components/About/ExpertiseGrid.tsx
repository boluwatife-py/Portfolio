interface Expertise {
  icon: string;
  title: string;
  desc: string;
}

const expertise: Expertise[] = [
  {
    icon: "fa-code",
    title: "Frontend Development",
    desc: "Creating responsive, accessible, and performant user interfaces.",
  },
  {
    icon: "fa-server",
    title: "Backend Development",
    desc: "Building secure, scalable, and efficient server-side applications.",
  },
  {
    icon: "fa-database",
    title: "Database Design",
    desc: "Designing and optimizing database schemas for performance.",
  },
  {
    icon: "fa-shield-alt",
    title: "API Development",
    desc: "Creating RESTful and GraphQL APIs with proper authentication.",
  },
];

const ExpertiseGrid = ({ darkMode }: { darkMode: boolean }) => (
  <div className="mb-6 sm:mb-7 md:mb-8">
    <h3
      className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 ${
        darkMode ? "text-gray-200" : "text-gray-800"
      }`}
    >
      My Expertise
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {expertise.map(({ icon, title, desc }) => (
        <div
          key={title}
          className={`p-3 sm:p-4 rounded-lg ${
            darkMode ? "bg-gray-700" : "bg-gray-50"
          }`}
        >
          <div className="flex items-center mb-1.5 sm:mb-2">
            <i
              className={`fas ${icon} text-indigo-500 mr-2 sm:mr-3 text-lg sm:text-xl`}
            ></i>
            <h4 className="text-sm sm:text-base font-medium">{title}</h4>
          </div>
          <p
            className={`text-xs sm:text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default ExpertiseGrid;
