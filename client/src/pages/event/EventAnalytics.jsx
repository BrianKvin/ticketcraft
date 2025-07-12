import React, { useState, useEffect } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import ChartComponent from "../../components/shared-dashboard/ChartComponent";
import DataTable from "../../components/shared-dashboard/DataTable";

const EventAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState({
    totalRevenue: 45600,
    totalTickets: 1200,
    averageTicketPrice: 38,
    conversionRate: 12.5,
    monthlyData: [
      { month: "Jan", revenue: 12000, tickets: 320 },
      { month: "Feb", revenue: 15000, tickets: 400 },
      { month: "Mar", revenue: 18000, tickets: 480 },
      { month: "Apr", revenue: 22000, tickets: 580 },
      { month: "May", revenue: 25000, tickets: 650 },
      { month: "Jun", revenue: 30000, tickets: 780 },
    ],
    topEvents: [
      {
        name: "Summer Music Festival",
        revenue: 22500,
        tickets: 450,
        conversion: 15.2,
      },
      {
        name: "Tech Conference 2024",
        revenue: 15000,
        tickets: 300,
        conversion: 12.8,
      },
      {
        name: "Food & Wine Expo",
        revenue: 8100,
        tickets: 200,
        conversion: 8.5,
      },
    ],
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Event Analytics
          </h1>
          <p className="text-gray-600">
            Detailed insights into your event performance
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Revenue
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  ${analyticsData.totalRevenue.toLocaleString()}
                </p>
              </div>
              <div className="text-3xl">💰</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Tickets Sold
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {analyticsData.totalTickets}
                </p>
              </div>
              <div className="text-3xl">🎫</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Avg. Ticket Price
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  ${analyticsData.averageTicketPrice}
                </p>
              </div>
              <div className="text-3xl">📊</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Conversion Rate
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {analyticsData.conversionRate}%
                </p>
              </div>
              <div className="text-3xl">📈</div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Revenue Trend
            </h3>
            <ChartComponent
              data={analyticsData.monthlyData.map((item) => ({
                month: item.month,
                revenue: item.revenue,
              }))}
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Ticket Sales Trend
            </h3>
            <ChartComponent
              data={analyticsData.monthlyData.map((item) => ({
                month: item.month,
                revenue: item.tickets * 10, // Scale for visualization
              }))}
            />
          </div>
        </div>

        {/* Top Events Table */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Top Performing Events
          </h3>
          <DataTable
            data={analyticsData.topEvents}
            columns={[
              { key: "name", label: "Event Name" },
              {
                key: "revenue",
                label: "Revenue",
                format: (value) => `$${value.toLocaleString()}`,
              },
              { key: "tickets", label: "Tickets Sold" },
              {
                key: "conversion",
                label: "Conversion Rate",
                format: (value) => `${value}%`,
              },
            ]}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventAnalytics;
