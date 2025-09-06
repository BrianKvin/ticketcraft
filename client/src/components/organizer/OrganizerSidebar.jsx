import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Calendar,
  Plus,
  BarChart3,
  Users,
  Ticket,
  ClipboardList,
  MessageSquare,
  Settings,
  ChevronDown,
  ChevronRight,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react";

const OrganizerSidebar = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState({});

  const navigationItems = [
    {
      name: "Dashboard",
      href: "/organizer/dashboard",
      icon: Home,
      exact: true,
    },
    {
      name: "Events",
      icon: Calendar,
      children: [
        { name: "All Events", href: "/organizer/events" },
        { name: "Create New", href: "/events/create" },
        { name: "Templates", href: "/organizer/events/templates" },
        { name: "Drafts", href: "/organizer/events/drafts" },
      ],
    },
    {
      name: "Analytics",
      icon: BarChart3,
      children: [
        { name: "Overview", href: "/organizer/analytics" },
        { name: "Event Performance", href: "/organizer/analytics/events" },
        { name: "Attendee Insights", href: "/organizer/analytics/attendees" },
        { name: "Revenue Reports", href: "/organizer/analytics/revenue" },
      ],
    },
    {
      name: "Attendees",
      icon: Users,
      children: [
        { name: "All Attendees", href: "/organizer/attendees" },
        { name: "Check-in/Check-out", href: "/organizer/attendees/checkin" },
        { name: "Badge Printing", href: "/organizer/attendees/badges" },
        { name: "Waitlist", href: "/organizer/attendees/waitlist" },
      ],
    },
    {
      name: "Tickets",
      icon: Ticket,
      children: [
        { name: "Scanner", href: "/organizer/tickets/scanner" },
        { name: "Ticket Management", href: "/organizer/tickets/manage" },
        { name: "Refunds", href: "/organizer/tickets/refunds" },
      ],
    },
    {
      name: "Programs",
      icon: ClipboardList,
      children: [
        { name: "Speakers", href: "/organizer/programs/speakers" },
        { name: "Schedule Builder", href: "/organizer/programs/schedule" },
        { name: "Exhibitors", href: "/organizer/programs/exhibitors" },
        { name: "Resources", href: "/organizer/programs/resources" },
      ],
    },
    {
      name: "Communications",
      icon: MessageSquare,
      children: [
        { name: "Email Campaigns", href: "/organizer/communications/email" },
        { name: "SMS Notifications", href: "/organizer/communications/sms" },
        {
          name: "Announcements",
          href: "/organizer/communications/announcements",
        },
      ],
    },
    {
      name: "Settings",
      icon: Settings,
      children: [
        { name: "Profile", href: "/organizer/profile" },
        { name: "Staff Management", href: "/organizer/settings/staff" },
        { name: "Preferences", href: "/organizer/settings/preferences" },
        { name: "Integrations", href: "/organizer/settings/integrations" },
      ],
    },
  ];

  const toggleExpanded = (itemName) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const isActive = (href, exact = false) => {
    if (exact) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  const renderNavItem = (item) => {
    const isItemActive = item.href ? isActive(item.href, item.exact) : false;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems[item.name];

    if (hasChildren) {
      return (
        <div key={item.name}>
          <button
            onClick={() => toggleExpanded(item.name)}
            className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
              isItemActive
                ? "bg-green-100 text-green-700"
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <div className="flex items-center">
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </div>
            {isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>

          {isExpanded && (
            <div className="ml-6 mt-1 space-y-1">
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  to={child.href}
                  className={`block px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                    isActive(child.href)
                      ? "bg-green-50 text-green-700 font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {child.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.name}
        to={item.href}
        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
          isItemActive
            ? "bg-green-100 text-green-700"
            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        }`}
      >
        <item.icon className="h-5 w-5 mr-3" />
        {item.name}
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:inset-y-0 lg:left-0 lg:z-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <span className="ml-2 text-lg font-semibold text-gray-900">
              TicketCraft
            </span>
          </div>
          <button
            onClick={onToggle}
            className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {navigationItems.map(renderNavItem)}
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-700">SJ</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
              <p className="text-xs text-gray-500">Event Organizer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizerSidebar;
