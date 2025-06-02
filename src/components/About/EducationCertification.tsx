import { educations } from "../../data/education";

const EducationCertifications = ({ darkMode }: { darkMode: boolean }) => (
  <div
    className={`p-4 sm:p-5 md:p-6 rounded-xl ${
      darkMode ? "bg-gray-700" : "bg-gray-50"
    }`}
  >
    <h3
      className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${
        darkMode ? "text-gray-200" : "text-gray-800"
      }`}
    >
      Education & Certifications
    </h3>
    <div className="space-y-3 sm:space-y-4">
      {educations.map(({ icon, title, subtitle }) => (
        <div className="flex" key={title}>
          <div className="mr-3 sm:mr-4 flex-shrink-0">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <i
                className={`fas ${icon} text-indigo-500 text-sm sm:text-base`}
              ></i>
            </div>
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-medium">{title}</h4>
            <p
              className={`text-xs sm:text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EducationCertifications;
