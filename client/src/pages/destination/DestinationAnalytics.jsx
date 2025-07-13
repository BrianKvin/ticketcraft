import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  MapPin,
} from "lucide-react";
import DestinationDashboardContainer from "../../components/destination-dashboard/DestinationDashboardContainer";
import ChartComponent from "../../components/shared-dashboard/ChartComponent";
import StatsCard from "../../components/shared-dashboard/StatsCard";

const DestinationAnalytics = () => {
  const [timeRange, setTimeRange] = useState("30d");
  const [selectedDestination, setSelectedDestination] = useState("all");

  const analyticsData = {
    overview: {
      totalRevenue: 125000,
      totalBookings: 850,
      averageRating: 4.6,
      activeDestinations: 6,
    },
    revenueData: [
      { month: "Jan", revenue: 15000 },
      { month: "Feb", revenue: 18000 },
      { month: "Mar", revenue: 22000 },
      { month: "Apr", revenue: 28000 },
      { month: "May", revenue: 32000 },
      { month: "Jun", revenue: 38000 },
    ],
    topDestinations: [
      {
        name: "Sunset Beach Resort",
        bookings: 120,
        revenue: 36000,
        rating: 4.8,
      },
      {
        name: "Mountain View Lodge",
        bookings: 85,
        revenue: 25500,
        rating: 4.6,
      },
      {
        name: "City Center Hotel",
        bookings: 200,
        revenue: 17400,
        rating: 4.4,
      },
    ],
  };

  const stats = [
    {
      title: "Total Revenue",
      value: `$${analyticsData.overview.totalRevenue.toLocaleString()}`,
      change: "+22%",
      changeType: "positive",
      icon: DollarSign,
    },
    {
      title: "Total Bookings",
      value: analyticsData.overview.totalBookings,
      change: "+15%",
      changeType: "positive",
      icon: Calendar,
    },
    {
      title: "Average Rating",
      value: analyticsData.overview.averageRating,
      change: "+0.2",
      changeType: "positive",
      icon: Users,
    },
    {
      title: "Active Destinations",
      value: analyticsData.overview.activeDestinations,
      change: "+1",
      changeType: "positive",
      icon: MapPin,
    },
  ];

  return (
    <DestinationDashboardContainer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Destination Analytics
          </h1>
          <p className="text-gray-600">
            Track your destination performance and insights
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Range
              </label>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Destinations</option>
                <option value="sunset-beach">Sunset Beach Resort</option>
                <option value="mountain-lodge">Mountain View Lodge</option>
                <option value="city-hotel">City Center Hotel</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Revenue Overview
            </h3>
            <ChartComponent data={analyticsData.revenueData} />
          </div>

          {/* Bookings Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Booking Trends
            </h3>
            <ChartComponent data={analyticsData.revenueData} />
          </div>
        </div>

        {/* Top Destinations */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Top Performing Destinations
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Destination
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bookings
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {analyticsData.topDestinations.map((destination, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {destination.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {destination.bookings}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        ${destination.revenue.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900 mr-2">
                          {destination.rating}
                        </span>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>
                              {i < Math.floor(destination.rating) ? "★" : "☆"}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DestinationDashboardContainer>
  );
};

export default DestinationAnalytics;
