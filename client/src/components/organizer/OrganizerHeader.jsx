import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  Sun,
  Moon,
  Menu,
  ChevronDown,
  Plus,
  BarChart3,
  Users,
  Ticket,
} from "lucide-react";

const OrganizerHeader = ({ onMenuToggle, isDarkMode, onThemeToggle }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const notifications = [
    {
      id: 1,
      title: "New Event Registration",
      message: "Sarah Johnson registered for Tech Innovation Summit 2024",
      time: "2 minutes ago",
      unread: true,
    },
    {
      id: 2,
      title: "Payment Received",
      message: "Payment of $299 received for Business Leadership Workshop",
      time: "5 minutes ago",
      unread: true,
    },
    {
      id: 3,
      title: "Event Registration",
      message: "Michael Chen registered for Startup Pitch Competition",
      time: "12 minutes ago",
      unread: true,
    },
    {
      id: 4,
      title: "Payment Received",
      message: "Payment of $150 received for Food & Wine Expo",
      time: "25 minutes ago",
      unread: true,
    },
    {
      id: 5,
      title: "Event Reminder",
      message: "Tech Innovation Summit 2024 starts in 2 days",
      time: "1 hour ago",
      unread: false,
    },
    {
      id: 6,
      title: "Event Completed",
      message: "Food & Wine Expo completed successfully with 320 attendees",
      time: "2 hours ago",
      unread: false,
    },
    {
      id: 7,
      title: "New Speaker Added",
      message: "Dr. Emily Rodriguez added to Digital Marketing Conference",
      time: "3 hours ago",
      unread: false,
    },
    {
      id: 8,
      title: "Event Views",
      message: "Business Leadership Workshop page viewed 47 times today",
      time: "4 hours ago",
      unread: false,
    },
  ];

  const quickActions = [
    {
      name: "Create Event",
      href: "/events/create",
      icon: Plus,
      color: "text-green-600",
    },
    {
      name: "View Analytics",
      href: "/organizer/analytics",
      icon: BarChart3,
      color: "text-blue-600",
    },
    {
      name: "Manage Attendees",
      href: "/organizer/attendees",
      icon: Users,
      color: "text-purple-600",
      badge: "8",
    },
    {
      name: "Ticket Scanner",
      href: "/organizer/tickets/scanner",
      icon: Ticket,
      color: "text-orange-600",
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Breadcrumbs */}
          <nav className="hidden md:flex items-center space-x-2 text-sm">
            <Link
              to="/organizer/dashboard"
              className="text-gray-500 hover:text-gray-700"
            >
              Dashboard
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Overview</span>
          </nav>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-lg mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search events, attendees, or anything..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Quick Actions Dropdown */}
          <div className="relative group">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
              <Plus className="h-5 w-5" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    to={action.href}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <action.icon className={`h-4 w-4 mr-3 ${action.color}`} />
                    {action.name}
                    {action.badge && (
                      <span className="ml-2 px-2 py-1 text-xs font-medium text-white bg-purple-600 rounded-full">
                        {action.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Notifications
                  </h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${
                        notification.unread ? "bg-blue-50" : ""
                      }`}
                    >
                      <div className="flex items-start">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                            notification.unread ? "bg-blue-500" : "bg-gray-300"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {notification.title}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-200">
                  <Link
                    to="/organizer/notifications"
                    className="text-sm text-green-600 hover:text-green-700 font-medium"
                  >
                    View all notifications
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onThemeToggle}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-white">SJ</span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-900">
                  Sarah Johnson
                </p>
                <p className="text-xs text-gray-500">Event Organizer</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-900">
                    Sarah Johnson
                  </p>
                  <p className="text-sm text-gray-500">
                    sarah.johnson@eventify.com
                  </p>
                </div>
                <div className="py-2">
                  <Link
                    to="/organizer/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <User className="h-4 w-4 mr-3" />
                    Profile Settings
                  </Link>
                  <Link
                    to="/organizer/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <Settings className="h-4 w-4 mr-3" />
                    Account Settings
                  </Link>
                  <hr className="my-2" />
                  <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    <LogOut className="h-4 w-4 mr-3" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default OrganizerHeader;
