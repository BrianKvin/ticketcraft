import React, { useState, useEffect } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import OrganizerDashboard from "../../components/event-dashboard/OrganizerDashboard";

const OrganizerDashboardPage = () => {
  const [dashboardData, setDashboardData] = useState({
    totalEvents: 12,
    activeEvents: 5,
    totalRevenue: 45600,
    totalTickets: 1200,
    recentEvents: [
      {
        id: 1,
        title: "Summer Music Festival",
        date: "2024-08-15",
        ticketsSold: 450,
        revenue: 22500,
        status: "active",
      },
      {
        id: 2,
        title: "Tech Conference 2024",
        date: "2024-09-20",
        ticketsSold: 300,
        revenue: 15000,
        status: "upcoming",
      },
      {
        id: 3,
        title: "Food & Wine Expo",
        date: "2024-07-10",
        ticketsSold: 200,
        revenue: 8100,
        status: "completed",
      },
    ],
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Organizer Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your events and track your performance
          </p>
        </div>

        <OrganizerDashboard data={dashboardData} />
      </div>

      <Footer />
    </div>
  );
};

export default OrganizerDashboardPage;
