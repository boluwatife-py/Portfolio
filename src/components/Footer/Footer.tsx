export default function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <footer
      className={`py-12 ${
        darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight mb-4 block"
            >
              <span className="text-indigo-600">Boluwatife</span>
              <span className={`${darkMode ? "text-white" : "text-gray-900"}`}>
                .tech
              </span>
            </a>
            <p
              className={`mb-4 max-w-md ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Building exceptional digital experiences with modern web
              technologies. Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/boluwatife-py"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg hover:text-indigo-600 transition-colors cursor-pointer`}
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://discordapp.com/users/1343657247175213077"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg hover:text-indigo-600 transition-colors cursor-pointer`}
                aria-label="Discord"
              >
                <i className="fab fa-discord"></i>
              </a>
              <a
                href="https://twitter.com/boluwatifeileri"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg hover:text-indigo-600 transition-colors cursor-pointer`}
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://dev.to/boluwatifeilerioluwa"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg hover:text-indigo-600 transition-colors cursor-pointer`}
                aria-label="Dev.to"
              >
                <i className="fab fa-dev"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  API Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  Technical Consultation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  Code Review
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            &copy; {new Date().getFullYear()} Boluwatife Akingbade. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <span
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Made with <i className="fas fa-heart text-red-500"></i> and React
            </span>
            <a
              href="#home"
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              } transition-colors cursor-pointer`}
              aria-label="Back to top"
            >
              <i className="fas fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
