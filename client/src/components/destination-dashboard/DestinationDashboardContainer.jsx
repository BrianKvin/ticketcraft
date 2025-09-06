import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  MapPin,
  BarChart3,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const menuItems = [
  {
    name: "Dashboard",
    href: "/destination-owner/dashboard",
    icon: Home,
  },
  {
    name: "Manage Destinations",
    href: "/destinations/manage",
    icon: MapPin,
  },
  {
    name: "Analytics",
    href: "/destination-owner/analytics",
    icon: BarChart3,
  },
  {
    name: "Profile",
    href: "/destination-owner/profile",
    icon: User,
  },
];

const DestinationDashboardContainer = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      {/* Top Bar - Fixed positioning to account for navbar */}
      <div className="bg-white border-b shadow-sm fixed top-24 left-0 right-0 z-30">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-lg md:text-2xl font-bold text-gray-900">
            Destination Dashboard
          </h1>
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center space-x-2 focus:outline-none group"
              onClick={() => setDropdownOpen((open) => !open)}
              aria-label="Open user menu"
            >
              <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-lg">
                {user?.name?.charAt(0) || "U"}
              </div>
              <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 animate-fade-in">
                {/* Navigation Links */}
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors ${
                      location.pathname === item.href
                        ? "font-semibold bg-gray-50"
                        : ""
                    }`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <item.icon className="w-5 h-5 mr-3 text-gray-400" />
                    {item.name}
                  </Link>
                ))}
                <div className="border-t my-2" />
                {/* User Info */}
                <div className="px-4 py-2">
                  <div className="font-semibold text-gray-900">
                    {user?.name || "John Doe"}
                  </div>
                  <div className="text-sm text-gray-500">
                    {user?.email || "cecil@gmail.com"}
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <LogOut className="w-5 h-5 mr-3 text-gray-400" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Main content - Adjusted top margin to account for fixed navbar and dashboard header */}
      <main className="flex-1 pt-40 pb-6">{children}</main>
      <Footer />
    </div>
  );
};

export default DestinationDashboardContainer;
