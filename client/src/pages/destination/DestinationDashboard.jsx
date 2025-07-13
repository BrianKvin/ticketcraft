import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DestinationDashboardContainer from "../../components/destination-dashboard/DestinationDashboardContainer";
import DestinationDashboard from "../../components/destination-dashboard/DestinationDashboard";

const DestinationDashboardPage = () => {
  const location = useLocation();
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

  // Show success message if available
  const successMessage = location.state?.message;
  const newDestination = location.state?.destination;

  return (
    <DestinationDashboardContainer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  {successMessage}
                </p>
                {newDestination && (
                  <p className="text-sm text-green-700 mt-1">
                    Destination "{newDestination.name}" has been created
                    successfully.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

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
    </DestinationDashboardContainer>
  );
};

export default DestinationDashboardPage;
