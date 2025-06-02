import CodeSnippet from "./CodeSnippet";
import Button from "../ui/Button";
import { smoothScrollTo } from "../../utils/smoothScroll";

interface HeroProps {
  darkMode: boolean;
}

function Hero({ darkMode }: HeroProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("#projects");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-12 md:pt-16"
    >
      <div className="container mx-auto px-3 md:px-6 py-8 md:py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-block">
              <span
                className={`inline-block px-2 md:px-3 py-1 text-xs font-medium rounded-full ${
                  darkMode
                    ? "bg-indigo-900/50 text-indigo-300"
                    : "bg-indigo-100 text-indigo-700"
                }`}
              >
                Full-Stack Developer
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-tight">
              Hi, I'm <span className="text-indigo-600">Boluwatife</span>{" "}
              Akingbade Ilerioluwa
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed max-w-xl">
              I build exceptional digital experiences that are fast, accessible,
              and user-centric. Specializing in both frontend and backend
              technologies.
            </p>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {[
                "Python",
                "Django",
                "Flask",
                "FastAPI",
                "JavaScript",
                "TypeScript",
                "React",
                "JWT",
                "Tailwind CSS",
                "Bootstrap",
              ].map((tech, index) => (
                <span
                  key={index}
                  className={`px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium rounded-full whitespace-nowrap ${
                    darkMode
                      ? "bg-gray-800 text-gray-300 border border-gray-700"
                      : "bg-gray-100 text-gray-700 border border-gray-200"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4 pt-1 md:pt-2">
              <Button
                children="View Projects"
                href="#projects"
                darkMode={darkMode}
              />
              <Button
                children="Contact Me"
                href="#contact"
                darkMode={darkMode}
                variant="secondary"
              />
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <CodeSnippet darkMode={darkMode} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#projects"
          onClick={handleClick}
          className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full ${
            darkMode
              ? "bg-gray-800 text-gray-300"
              : "bg-white text-gray-700 shadow-md"
          } cursor-pointer`}
        >
          <i className="fas fa-chevron-down text-sm md:text-base"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
