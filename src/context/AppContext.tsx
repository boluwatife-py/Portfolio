import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface AppContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  visibleProjects: number;
  setVisibleProjects: React.Dispatch<React.SetStateAction<number>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        activeTab,
        setActiveTab,
        visibleProjects,
        setVisibleProjects,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
