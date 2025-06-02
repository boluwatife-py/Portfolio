// src/components/Projects/FilterTabs.tsx
import React from 'react';

interface FilterTabsProps {
  darkMode: boolean;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ darkMode, activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  return (
    <div className="flex justify-center mb-8 mt-6">
      <div className={`inline-flex rounded-full p-1 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              activeTab === tab.id
                ? darkMode
                  ? 'bg-indigo-600 text-white'
                  : 'bg-indigo-600 text-white'
                : darkMode
                  ? 'text-gray-300 hover:text-indigo-400'
                  : 'text-gray-700 hover:text-indigo-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;