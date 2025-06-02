export default function Connect({ darkMode }: { darkMode: boolean }) {
  return (
    <div
      className={`rounded-xl p-4 sm:p-6 md:p-8 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
        Connect With Me
      </h3>
      <div className="flex space-x-3 sm:space-x-4">
        <a
          href="https://github.com/boluwatife-py"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          } transition-colors cursor-pointer`}
          aria-label="GitHub"
        >
          <i className="fab fa-github text-sm sm:text-base"></i>
        </a>
        <a
          href="https://discordapp.com/users/1343657247175213077"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          } transition-colors cursor-pointer`}
          aria-label="Discord"
        >
          <i className="fab fa-discord text-sm sm:text-base"></i>
        </a>
        <a
          href="https://twitter.com/boluwatifeileri"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          } transition-colors cursor-pointer`}
          aria-label="Twitter"
        >
          <i className="fab fa-twitter text-sm sm:text-base"></i>
        </a>
        <a
          href="https://dev.to/boluwatifeilerioluwa"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          } transition-colors cursor-pointer`}
          aria-label="Dev.to"
        >
          <i className="fab fa-dev text-sm sm:text-base"></i>
        </a>
      </div>
    </div>
  );
}
