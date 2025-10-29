import React from "react";
import { Link } from "react-router-dom";
import StatsCard from "../shared-dashboard/StatsCard";
import ChartComponent from "../shared-dashboard/ChartComponent";
import DataTable from "../shared-dashboard/DataTable";
import QuickActions from "../shared-dashboard/QuickActions";

const OrganizerDashboard = ({ data }) => {
  const stats = [
    {
      title: "Total Events",
      value: data?.totalEvents || 0,
      change: "+12%",
      changeType: "positive",
      icon: "📅",
    },
    {
      title: "Active Events",
      value: data?.activeEvents || 0,
      change: "+5%",
      changeType: "positive",
      icon: "🎯",
    },
    {
      title: "Total Revenue",
      value: `$${(data?.totalRevenue || 0).toLocaleString()}`,
      change: "+18%",
      changeType: "positive",
      icon: "💰",
    },
    {
      title: "Tickets Sold",
      value: data?.totalTickets || 0,
      change: "+8%",
      changeType: "positive",
      icon: "🎫",
    },
  ];

  const recentEvents = data?.recentEvents || [];

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
              Revenue Overview
            </h3>
            <ChartComponent
              data={[
                { month: "Jan", revenue: 12000 },
                { month: "Feb", revenue: 15000 },
                { month: "Mar", revenue: 18000 },
                { month: "Apr", revenue: 22000 },
                { month: "May", revenue: 25000 },
                { month: "Jun", revenue: 30000 },
              ]}
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <QuickActions
            actions={[
              {
                title: "Create New Event",
                description: "Start planning your next event",
                icon: "➕",
                link: "/events/create",
                color: "green",
              },
              {
                title: "Manage Events",
                description: "View and edit your events",
                icon: "📋",
                link: "/events/manage",
                color: "blue",
              },
              {
                title: "View Analytics",
                description: "Detailed performance insights",
                icon: "📊",
                link: "/organizer/analytics",
                color: "purple",
              },
              {
                title: "Update Profile",
                description: "Manage your organizer profile",
                icon: "👤",
                link: "/organizer/profile",
                color: "orange",
              },
            ]}
          />
        </div>
      </div>

      {/* Recent Events Table */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Events</h3>
          <Link
            to="/events/manage"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            View All Events →
          </Link>
        </div>

        <DataTable
          data={recentEvents}
          columns={[
            { key: "title", label: "Event Name" },
            { key: "date", label: "Date" },
            { key: "ticketsSold", label: "Tickets Sold" },
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

export default OrganizerDashboard;
