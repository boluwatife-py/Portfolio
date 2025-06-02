export default function ContactInfo({ darkMode }: { darkMode: boolean }) {
  return (
    <div
      className={`rounded-xl p-4 sm:p-6 md:p-8 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
        Contact Information
      </h3>
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-start">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 sm:mr-4 ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <i className="fas fa-envelope text-indigo-500 text-sm sm:text-base"></i>
          </div>
          <div>
            <h4
              className={`text-sm sm:text-base font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email
            </h4>
            <a
              href="mailto:email@boluwatife.tech"
              className="text-sm sm:text-base text-indigo-600 hover:underline"
            >
              email@boluwatife.tech
            </a>
          </div>
        </div>
        <div className="flex items-start">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 sm:mr-4 ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <i className="fas fa-map-marker-alt text-indigo-500 text-sm sm:text-base"></i>
          </div>
          <div>
            <h4
              className={`text-sm sm:text-base font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Location
            </h4>
            <p
              className={`text-sm sm:text-base ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Ogbomosho, Nigeria
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 sm:mr-4 ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <i className="fas fa-globe text-indigo-500 text-sm sm:text-base"></i>
          </div>
          <div>
            <h4
              className={`text-sm sm:text-base font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Website
            </h4>
            <a
              href="https://boluwatife.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-indigo-600 hover:underline"
            >
              boluwatife.tech
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
