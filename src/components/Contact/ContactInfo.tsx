export default function ContactInfo({darkMode}: { darkMode: boolean }) {
  return (
    <div className={`rounded-xl p-8 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <h3 className="text-xl font-bold mb-6">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <i className="fas fa-envelope text-indigo-500"></i>
          </div>
          <div>
            <h4
              className={`font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email
            </h4>
            <a
              href="mailto:hello@boluwatife.dev"
              className="text-indigo-600 hover:underline"
            >
              email@boluwatife.tech
            </a>
          </div>
        </div>
        <div className="flex items-start">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <i className="fas fa-map-marker-alt text-indigo-500"></i>
          </div>
          <div>
            <h4
              className={`font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Location
            </h4>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Ogbomosho, Nigeria
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <i className="fas fa-globe text-indigo-500"></i>
          </div>
          <div>
            <h4
              className={`font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Website
            </h4>
            <a
              href="https://boluwatife.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              boluwatife.tech
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
