export default function Connect({ darkMode }: { darkMode: boolean }) {
  return (
    <div className={`rounded-xl p-8 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
      <div className="flex space-x-4">
        <a
          href="https://github.com/boluwatife-py"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          } transition-colors cursor-pointer`}
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/boluwatife"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          } transition-colors cursor-pointer`}
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://twitter.com/boluwatifedev"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          } transition-colors cursor-pointer`}
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://dev.to/boluwatifeilerioluwa"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          } transition-colors cursor-pointer`}
          aria-label="Dev.to"
        >
          <i className="fab fa-dev"></i>
        </a>
      </div>
    </div>
  );
}
