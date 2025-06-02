import { smoothScrollTo } from "../../utils/smoothScroll";

interface MobileMenuProps {
  darkMode: boolean;
  toggleMenu: () => void;
}

function MobileMenu({ darkMode, toggleMenu }: MobileMenuProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    smoothScrollTo(targetId);
    toggleMenu();
  };

  return (
    <div
      className={`md:hidden ${
        darkMode
          ? "bg-gray-900 border-t border-gray-800"
          : "bg-white border-t border-gray-200"
      }`}
    >
      <div className="container mx-auto px-3 py-3">
        <nav className="flex flex-col space-y-3">
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
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className={`px-4 py-2 text-sm font-medium rounded-md !rounded-button whitespace-nowrap cursor-pointer inline-block w-full ${
              darkMode
                ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            } transition-colors`}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
