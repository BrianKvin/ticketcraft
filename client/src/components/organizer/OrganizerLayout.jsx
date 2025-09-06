import React, { useState } from "react";
import OrganizerSidebar from "./OrganizerSidebar";
import OrganizerHeader from "./OrganizerHeader";

const OrganizerLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, you'd save this to localStorage and apply theme classes
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${isDarkMode ? "dark" : ""}`}>
      <div className="max-w-[1500px] mx-auto flex">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <OrganizerSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <OrganizerHeader
            onMenuToggle={toggleSidebar}
            isDarkMode={isDarkMode}
            onThemeToggle={toggleTheme}
          />

          {/* Page Content */}
          <main className="w-full">
            <div className="p-6">{children}</div>
          </main>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div className="lg:hidden">
        <OrganizerSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      </div>
    </div>
  );
};

export default OrganizerLayout;
