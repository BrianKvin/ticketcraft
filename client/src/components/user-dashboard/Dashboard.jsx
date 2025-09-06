import React from "react";
import { useLocation } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import DashboardHome from "./DashboardHome";
import DashboardSpeakers from "./DashboardSpeakers";
import DashboardExhibitors from "./DashboardExhibitors";
import DashboardAgenda from "./DashboardAgenda";
import DashboardMyEvent from "./DashboardMyEvent";
import DashboardMyBadge from "./DashboardMyBadge";
import AttendeeDiscovery from "./AttendeeDiscovery";
import NotificationsCenter from "./NotificationsCenter";
import PersonalAnalytics from "./PersonalAnalytics";

const Dashboard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeSection = searchParams.get("section") || "home";

  // Get user and event data from navigation state or use defaults
  const registration = location.state?.registration;
  const eventData = location.state?.eventData || {
    id: 1,
    title: "Tech Conference 2024",
    date: "March 15-17, 2024",
    location: "San Francisco Convention Center",
    type: "In-Person",
    image: "/placeholder.svg",
    registrationDate: "2024-01-15",
  };

  const user = registration?.user || {
    name: "John Doe",
    email: "john.doe@example.com",
    initials: "JD",
  };

  // Show success message if available
  const successMessage = location.state?.message;

  const renderSection = () => {
    switch (activeSection) {
      case "speakers":
        return <DashboardSpeakers eventData={eventData} />;
      case "exhibitors":
        return <DashboardExhibitors eventData={eventData} />;
      case "agenda":
        return <DashboardAgenda eventData={eventData} />;
      case "my-event":
        return (
          <DashboardMyEvent eventData={eventData} registration={registration} />
        );
      case "my-badge":
        return (
          <DashboardMyBadge
            eventData={eventData}
            user={user}
            registration={registration}
          />
        );
      case "networking":
        return <AttendeeDiscovery eventData={eventData} />;
      case "notifications":
        return <NotificationsCenter eventData={eventData} />;
      case "analytics":
        return <PersonalAnalytics eventData={eventData} user={user} />;
      default:
        return (
          <DashboardHome
            eventData={eventData}
            user={user}
            registration={registration}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar user={user} activeSection={activeSection} />
      <main className="pt-20">
        {/* Success Message */}
        {successMessage && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex">
                <div className="text-green-800">{successMessage}</div>
              </div>
            </div>
          </div>
        )}
        {renderSection()}
      </main>
    </div>
  );
};

export default Dashboard;
