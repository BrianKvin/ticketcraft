import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  MessageCircle,
  Home,
  User,
  Settings,
  Users,
  HelpCircle,
  FileText,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardNavbar = ({
  user,
  activeSection,
}) => {
  const navigate = useNavigate();

  const navigationItems = [
    { id: "home", label: "Home", href: "/dashboard?section=home" },
    { id: "speakers", label: "Speakers", href: "/dashboard?section=speakers" },
    {
      id: "exhibitors",
      label: "Exhibitors",
      href: "/dashboard?section=exhibitors",
    },
    { id: "agenda", label: "Agenda", href: "/dashboard?section=agenda" },
    { id: "my-event", label: "My Event", href: "/dashboard?section=my-event" },
    { id: "my-badge", label: "My Badge", href: "/dashboard?section=my-badge" },
  ];

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">Eventify</span>
            </Link>
          </div>

          {/* Right Side - Icons and Profile */}
          <div className="flex items-center space-x-4">
            {/* Home Icon */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="text-gray-600 hover:text-gray-900"
            >
              <Home className="h-5 w-5" />
            </Button>

            {/* Message Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900 relative"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>

            {/* Notification Bell */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900 relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full bg-green-500 text-white hover:bg-green-600"
                >
                  {user.initials}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 bg-white"
                align="end"
                forceMount
              >
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  My Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Users className="mr-2 h-4 w-4" />
                  My Contacts
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Resource Center
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact App Support
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <FileText className="mr-2 h-4 w-4" />
                  Legal
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer text-red-600"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Sub-navigation */}
        <div className="border-t border-gray-200">
          <div className="flex space-x-8 overflow-x-auto">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeSection === item.id
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
