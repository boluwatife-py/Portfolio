interface MobileMenuProps {
  darkMode: boolean;
  toggleMenu: () => void;
}

function MobileMenu({ darkMode, toggleMenu }: MobileMenuProps){
  return (
    <div className={`md:hidden ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex flex-col space-y-4">
          <a
            href="#home"
            onClick={toggleMenu}
            className={`text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer ${
              darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700'
            }`}
          >
            Home
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className={`text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer ${
              darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700'
            }`}
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className={`text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer ${
              darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700'
            }`}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className={`text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer ${
              darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700'
            }`}
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className={`px-5 py-2.5 text-sm font-medium rounded-full !rounded-button whitespace-nowrap cursor-pointer inline-block w-fit ${
              darkMode ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            } transition-colors`}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;