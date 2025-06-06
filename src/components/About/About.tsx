import ExpertiseGrid from "./ExpertiseGrid";
import Button from "../ui/Button";
import EducationCertifications from "./EducationCertification";
import SkillChart from "./SkillChart";

function About({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      id="about"
      className={`py-12 sm:py-16 md:py-20 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
              About <span className="text-indigo-600">Me</span>
            </h2>
            <p
              className={`mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm Boluwatife Akingbade Ileiroluwa, a full-stack
              developer | software engineer with expertise in building robust web applications. With
              a strong foundation in both frontend and backend technologies, I
              create seamless digital experiences that solve real-world
              problems.
            </p>
            <p
              className={`mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              My journey in software development began 5 years ago, and since
              then, I've worked on various projects ranging from e-commerce
              platforms to content management systems. I'm constantly learning
              and adapting to new technologies to stay at the forefront of web
              development.
            </p>
            <ExpertiseGrid darkMode={darkMode} />
            <Button
              variant="primary"
              className="mt-3 sm:mt-4"
              darkMode={darkMode}
              href="/resume.pdf"
            >
              <i className="fas fa-download mr-2"></i> Download Resume
            </Button>
          </div>
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            <SkillChart darkMode={darkMode} />
            <EducationCertifications darkMode={darkMode} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
