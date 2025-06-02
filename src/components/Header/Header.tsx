import React from "react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed w-full z-50 ${
        darkMode
          ? `bg-gray-900${
              !isMenuOpen ? "/90 backdrop-blur-sm" : ""
            } border-b border-gray-800`
          : `bg-white${
              !isMenuOpen ? "/90 backdrop-blur-sm" : ""
            } border-b border-gray-200`
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-3 md:px-6 py-2 md:py-4">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold tracking-tight"
          >
            <span className="text-indigo-600">Boluwatife</span>
            <span className={darkMode ? "text-white" : "text-gray-900"}>
              .tech
            </span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks darkMode={darkMode} />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-1.5 md:p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer w-6 md:w-7 flex items-center justify-center ${
                darkMode
                  ? "bg-gray-800 text-yellow-300"
                  : "bg-gray-100 text-gray-700"
              }`}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <i className="fas fa-sun text-sm md:text-base"></i>
              ) : (
                <i className="fas fa-moon text-sm md:text-base"></i>
              )}
            </button>
            <Button
              href="#contact"
              darkMode={darkMode}
              variant="primary"
              children="Get in touch"
            />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-1.5 mr-3 md:mr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer ${
                darkMode
                  ? "bg-gray-800 text-yellow-300"
                  : "bg-gray-100 text-gray-700"
              }`}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              <i
                className={`fas ${darkMode ? "fa-sun" : "fa-moon"} text-sm`}
              ></i>
            </button>
            <button
              onClick={toggleMenu}
              className={`p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
              aria-label="Toggle menu"
            >
              <i
                className={`fas ${
                  isMenuOpen ? "fa-times text-lg" : "fa-bars text-lg"
                }`}
              ></i>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && <MobileMenu darkMode={darkMode} toggleMenu={toggleMenu} />}
    </header>
  );
};

export default Header;
