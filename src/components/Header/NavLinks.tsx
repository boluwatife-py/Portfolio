import { smoothScrollTo } from "../../utils/smoothScroll";

interface NavLinksProps {
  darkMode: boolean;
}

function NavLinks({ darkMode }: NavLinksProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };

  return (
    <nav className="flex items-center space-x-8">
      <a
        href="#home"
        onClick={(e) => handleClick(e, "#home")}
        className={`text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer ${
          darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700"
        }`}
      >
        Home
      </a>
      <a
        href="#projects"
        onClick={(e) => handleClick(e, "#projects")}
        className={`text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer ${
          darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700"
        }`}
      >
        Projects
      </a>
      <a
        href="#about"
        onClick={(e) => handleClick(e, "#about")}
        className={`text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer ${
          darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700"
        }`}
      >
        About
      </a>
      <a
        href="#contact"
        onClick={(e) => handleClick(e, "#contact")}
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
