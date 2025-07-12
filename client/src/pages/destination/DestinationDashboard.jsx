import React, { useState, useEffect } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import DestinationDashboard from "../../components/destination-dashboard/DestinationDashboard";

const DestinationDashboardPage = () => {
  const [dashboardData, setDashboardData] = useState({
    totalDestinations: 8,
    activeDestinations: 6,
    totalRevenue: 78900,
    totalBookings: 450,
    recentDestinations: [
      {
        id: 1,
        name: "Sunset Beach Resort",
        location: "Maldives",
        bookings: 120,
        revenue: 36000,
        status: "active",
      },
      {
        id: 2,
        name: "Mountain View Lodge",
        location: "Switzerland",
        bookings: 85,
        revenue: 25500,
        status: "active",
      },
      {
        id: 3,
        name: "City Center Hotel",
        location: "New York",
        bookings: 200,
        revenue: 17400,
        status: "upcoming",
      },
    ],
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Destination Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your destinations and track your performance
          </p>
        </div>

        <DestinationDashboard data={dashboardData} />
      </div>

      <Footer />
    </div>
  );
};

export default DestinationDashboardPage;
