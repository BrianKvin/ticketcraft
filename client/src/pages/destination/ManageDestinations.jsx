import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DestinationDashboardContainer from "../../components/destination-dashboard/DestinationDashboardContainer";
import DestinationsList from "../../components/destination-dashboard/DestinationsList";

const ManageDestinations = () => {
  const [destinations, setDestinations] = useState([
    {
      id: 1,
      name: "Sunset Beach Resort",
      location: "Maldives",
      status: "active",
      bookings: 120,
      totalCapacity: 500,
      revenue: 36000,
    },
    {
      id: 2,
      name: "Mountain View Lodge",
      location: "Switzerland",
      status: "active",
      bookings: 85,
      totalCapacity: 200,
      revenue: 25500,
    },
    {
      id: 3,
      name: "City Center Hotel",
      location: "New York",
      status: "upcoming",
      bookings: 200,
      totalCapacity: 300,
      revenue: 17400,
    },
  ]);

  const [filter, setFilter] = useState("all");

  const filteredDestinations = destinations.filter((destination) => {
    if (filter === "all") return true;
    return destination.status === filter;
  });

  return (
    <DestinationDashboardContainer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Manage Destinations
              </h1>
              <p className="text-gray-600">
                View and manage all your destinations
              </p>
            </div>
            <Link
              to="/destinations/create"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Create New Destination
            </Link>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-4 mb-6">
            {["all", "active", "upcoming", "inactive"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  filter === status
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <DestinationsList destinations={filteredDestinations} />
      </div>
    </DestinationDashboardContainer>
  );
};

export default ManageDestinations;
