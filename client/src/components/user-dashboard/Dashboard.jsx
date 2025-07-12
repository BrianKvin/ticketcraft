import React from "react";
import { useLocation } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardHome from "../components/dashboard/DashboardHome";
import DashboardSpeakers from "../components/dashboard/DashboardSpeakers";
import DashboardExhibitors from "../components/dashboard/DashboardExhibitors";
import DashboardAgenda from "../components/dashboard/DashboardAgenda";
import DashboardMyEvent from "../components/dashboard/DashboardMyEvent";
import DashboardMyBadge from "../components/dashboard/DashboardMyBadge";

const Dashboard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeSection = searchParams.get("section") || "home";

  // Mock user data - in a real app this would come from authentication context
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    initials: "JD",
  };

  // Mock event data - in a real app this would come from the booking/registration data
  const eventData = {
    id: 1,
    title: "Tech Conference 2024",
    date: "March 15-17, 2024",
    location: "San Francisco Convention Center",
    type: "In-Person",
    image: "/placeholder.svg",
    registrationDate: "2024-01-15",
  };

  const renderSection = () => {
    switch (activeSection) {
      case "speakers":
        return <DashboardSpeakers eventData={eventData} />;
      case "exhibitors":
        return <DashboardExhibitors eventData={eventData} />;
      case "agenda":
        return <DashboardAgenda eventData={eventData} />;
      case "my-event":
        return <DashboardMyEvent eventData={eventData} />;
      case "my-badge":
        return <DashboardMyBadge eventData={eventData} user={user} />;
      default:
        return <DashboardHome eventData={eventData} user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar user={user} activeSection={activeSection} />
      <main className="pt-20">{renderSection()}</main>
    </div>
  );
};

export default Dashboard;
