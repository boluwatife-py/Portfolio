// src/App.tsx
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Project/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { projects } from "./data/project";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedMode = localStorage.getItem("darkTheme");
    return storedMode !== null ? JSON.parse(storedMode) : false;
  });

  const [activeTab, setActiveTab] = useState<string>("all");
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkTheme", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen font-sans ${
        darkMode ? "dark bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      } transition-colors duration-300`}
    >
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: darkMode ? "#1F2937" : "#FFFFFF",
            color: darkMode ? "#F3F4F6" : "#1F2937",
          },
          success: {
            iconTheme: {
              primary: "#10B981",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "#EF4444",
              secondary: "white",
            },
          },
        }}
      />
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main>
        <Hero darkMode={darkMode} />
        <Projects
          darkMode={darkMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          visibleProjects={visibleProjects}
          setVisibleProjects={setVisibleProjects}
          projects={projects}
        />
        <About darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
