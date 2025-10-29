import React from "react";
import { Link } from "react-router-dom";
import StatsCard from "../shared-dashboard/StatsCard";
import ChartComponent from "../shared-dashboard/ChartComponent";
import DataTable from "../shared-dashboard/DataTable";
import QuickActions from "../shared-dashboard/QuickActions";

const DestinationDashboard = ({ data }) => {
  const stats = [
    {
      title: "Total Destinations",
      value: data?.totalDestinations || 0,
      change: "+8%",
      changeType: "positive",
      icon: "🏖️",
    },
    {
      title: "Active Destinations",
      value: data?.activeDestinations || 0,
      change: "+3%",
      changeType: "positive",
      icon: "✅",
    },
    {
      title: "Total Revenue",
      value: `$${(data?.totalRevenue || 0).toLocaleString()}`,
      change: "+22%",
      changeType: "positive",
      icon: "💰",
    },
    {
      title: "Total Bookings",
      value: data?.totalBookings || 0,
      change: "+15%",
      changeType: "positive",
      icon: "📅",
    },
  ];

  const recentDestinations = data?.recentDestinations || [];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Booking Overview
            </h3>
            <ChartComponent
              data={[
                { month: "Jan", revenue: 15000 },
                { month: "Feb", revenue: 18000 },
                { month: "Mar", revenue: 22000 },
                { month: "Apr", revenue: 28000 },
                { month: "May", revenue: 32000 },
                { month: "Jun", revenue: 38000 },
              ]}
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <QuickActions
            actions={[
              {
                title: "Create Destination",
                description: "Add a new destination to your portfolio",
                icon: "➕",
                link: "/destinations/create",
                color: "green",
              },
              {
                title: "Manage Destinations",
                description: "View and edit your destinations",
                icon: "📋",
                link: "/destinations/manage",
                color: "blue",
              },
              {
                title: "View Analytics",
                description: "Detailed performance insights",
                icon: "📊",
                link: "/destination-owner/analytics",
                color: "purple",
              },
              {
                title: "Update Profile",
                description: "Manage your destination profile",
                icon: "👤",
                link: "/destination-owner/profile",
                color: "orange",
              },
            ]}
          />
        </div>
      </div>

      {/* Recent Destinations Table */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Destinations
          </h3>
          <Link
            to="/destinations/manage"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            View All Destinations →
          </Link>
        </div>

        <DataTable
          data={recentDestinations}
          columns={[
            { key: "name", label: "Destination Name" },
            { key: "location", label: "Location" },
            { key: "bookings", label: "Bookings" },
            {
              key: "revenue",
              label: "Revenue",
              format: (value) => `$${value.toLocaleString()}`,
            },
            {
              key: "status",
              label: "Status",
              format: (value) => (
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    value === "active"
                      ? "bg-green-100 text-green-800"
                      : value === "upcoming"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </span>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default DestinationDashboard;
