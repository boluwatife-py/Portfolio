import CodeSnippet from "./CodeSnippet";
import Button from "../ui/Button";

interface HeroProps {
  darkMode: boolean;
}

function Hero({ darkMode }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
    >
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span
                className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                  darkMode
                    ? "bg-indigo-900/50 text-indigo-300"
                    : "bg-indigo-100 text-indigo-700"
                }`}
              >
                Full-Stack Developer
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-indigo-600">Boluwatife</span>{" "}
              Akingbade Ilerioluwa
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-xl">
              I build exceptional digital experiences that are fast, accessible,
              and user-centric. Specializing in both frontend and backend
              technologies.
            </p>
            <div className="flex flex-wrap gap-2">
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
                  className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap ${
                    darkMode
                      ? "bg-gray-800 text-gray-300 border border-gray-700"
                      : "bg-gray-100 text-gray-700 border border-gray-200"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                children="View Projects"
                href="#project"
                darkMode={darkMode}
              />
              <Button
                children="Contact Me"
                href="#project"
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
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#projects"
          className={`flex items-center justify-center w-10 h-10 rounded-full ${
            darkMode
              ? "bg-gray-800 text-gray-300"
              : "bg-white text-gray-700 shadow-md"
          } cursor-pointer`}
        >
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
