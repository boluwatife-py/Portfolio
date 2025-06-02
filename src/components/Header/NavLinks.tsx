interface NavLinksProps {
  darkMode: boolean;
}

function NavLinks({ darkMode }: NavLinksProps) {
  return (
    <nav className="flex items-center space-x-8">
      <a
        href="#home"
        className={`text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer ${
          darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700"
        }`}
      >
        Home
      </a>
      <a
        href="#projects"
        className={`text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer ${
          darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700"
        }`}
      >
        Projects
      </a>
      <a
        href="#about"
        className={`text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer ${
          darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700"
        }`}
      >
        About
      </a>
      <a
        href="#contact"
        className={`text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer ${
          darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700"
        }`}
      >
        Contact
      </a>
    </nav>
  );
}

export default NavLinks;
