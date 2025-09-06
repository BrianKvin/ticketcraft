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
      {/* Sidebar */}
      <OrganizerSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <OrganizerHeader
          onMenuToggle={toggleSidebar}
          isDarkMode={isDarkMode}
          onThemeToggle={toggleTheme}
        />

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default OrganizerLayout;

