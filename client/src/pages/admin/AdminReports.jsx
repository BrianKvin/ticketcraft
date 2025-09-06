import React, { useState } from "react";
import {
  Download,
  Calendar,
  Users,
  DollarSign,
  BarChart3,
  TrendingUp,
  Eye,
  Filter,
  RefreshCw,
  FileText,
  PieChart,
  Activity,
} from "lucide-react";

const AdminReports = () => {
  const [selectedReport, setSelectedReport] = useState("overview");
  const [timeRange, setTimeRange] = useState("30d");
  const [dateRange, setDateRange] = useState({
    start: "2024-01-01",
    end: "2024-03-31",
  });

  // Mock reports data
  const reports = {
    overview: {
      title: "Platform Overview",
      description: "High-level metrics and KPIs across all events and users",
      data: {
        totalEvents: 89,
        totalUsers: 2847,
        totalOrganizers: 156,
        totalRevenue: 127450,
        averageEventSize: 45,
        platformGrowth: 23.5,
      },
    },
    revenue: {
      title: "Revenue Analysis",
      description:
        "Detailed revenue breakdown by events, organizers, and time periods",
      data: {
        totalRevenue: 127450,
        monthlyRevenue: [
          { month: "Jan", revenue: 25000, events: 12 },
          { month: "Feb", revenue: 35000, events: 18 },
          { month: "Mar", revenue: 67450, events: 25 },
        ],
        topEvents: [
          {
            name: "Tech Innovation Summit 2024",
            revenue: 145200,
            attendees: 485,
          },
          {
            name: "Digital Marketing Conference",
            revenue: 67500,
            attendees: 450,
          },
          {
            name: "Business Leadership Workshop",
            revenue: 15600,
            attendees: 78,
          },
        ],
        revenueByCategory: [
          { category: "Technology", revenue: 145200, percentage: 60.2 },
          { category: "Business", revenue: 15600, percentage: 6.5 },
          { category: "Marketing", revenue: 67500, percentage: 28.0 },
          { category: "Other", revenue: 13150, percentage: 5.3 },
        ],
      },
    },
    users: {
      title: "User Analytics",
      description: "User behavior, demographics, and engagement metrics",
      data: {
        totalUsers: 2847,
        newUsers: 456,
        activeUsers: 1890,
        userGrowth: 15.2,
        demographics: {
          byRole: [
            { role: "Attendees", count: 2691, percentage: 94.5 },
            { role: "Organizers", count: 156, percentage: 5.5 },
          ],
          byLocation: [
            { location: "North America", count: 1420, percentage: 49.8 },
            { location: "Europe", count: 890, percentage: 31.2 },
            { location: "Asia", count: 400, percentage: 14.0 },
            { location: "Other", count: 137, percentage: 4.8 },
          ],
        },
        engagement: {
          averageEventsPerUser: 2.3,
          retentionRate: 78.5,
          averageSessionDuration: "3.2 hours",
        },
      },
    },
    events: {
      title: "Event Performance",
      description:
        "Event success metrics, attendance patterns, and organizer performance",
      data: {
        totalEvents: 89,
        activeEvents: 24,
        completedEvents: 52,
        cancelledEvents: 13,
        averageAttendance: 45,
        averageRevenue: 1432,
        topPerformers: [
          {
            organizer: "TechCorp Events",
            events: 12,
            revenue: 145200,
            rating: 4.9,
          },
          {
            organizer: "Marketing Pro Events",
            events: 8,
            revenue: 67500,
            rating: 4.7,
          },
          {
            organizer: "Leadership Institute",
            events: 5,
            revenue: 15600,
            rating: 4.8,
          },
        ],
        eventCategories: [
          { category: "Technology", count: 25, revenue: 145200 },
          { category: "Business", count: 18, revenue: 15600 },
          { category: "Marketing", count: 15, revenue: 67500 },
          { category: "Health & Wellness", count: 12, revenue: 0 },
          { category: "Other", count: 19, revenue: 13150 },
        ],
      },
    },
  };

  const reportTypes = [
    { id: "overview", label: "Platform Overview", icon: BarChart3 },
    { id: "revenue", label: "Revenue Analysis", icon: DollarSign },
    { id: "users", label: "User Analytics", icon: Users },
    { id: "events", label: "Event Performance", icon: Calendar },
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatPercentage = (value) => {
    return `${value.toFixed(1)}%`;
  };

  const renderOverviewReport = () => {
    const data = reports.overview.data;
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <p className="text-sm text-gray-600">Total Events</p>
                <p className="text-2xl font-bold text-gray-900">
                  {data.totalEvents}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-600 mr-4" />
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">
                  {data.totalUsers.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-yellow-600 mr-4" />
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(data.totalRevenue)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Platform Growth
            </h3>
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600 mr-4" />
              <div>
                <p className="text-3xl font-bold text-green-600">
                  +{data.platformGrowth}%
                </p>
                <p className="text-sm text-gray-600">vs last quarter</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Average Event Size
            </h3>
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <p className="text-3xl font-bold text-blue-600">
                  {data.averageEventSize}
                </p>
                <p className="text-sm text-gray-600">attendees per event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderRevenueReport = () => {
    const data = reports.revenue.data;
    return (
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Monthly Revenue
          </h3>
          <div className="space-y-4">
            {data.monthlyRevenue.map((month, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{month.month}</p>
                  <p className="text-sm text-gray-600">{month.events} events</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">
                    {formatCurrency(month.revenue)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Top Events by Revenue
            </h3>
            <div className="space-y-4">
              {data.topEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{event.name}</p>
                    <p className="text-sm text-gray-600">
                      {event.attendees} attendees
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      {formatCurrency(event.revenue)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Revenue by Category
            </h3>
            <div className="space-y-4">
              {data.revenueByCategory.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                    <span className="text-sm font-medium text-gray-900">
                      {category.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">
                      {formatCurrency(category.revenue)}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatPercentage(category.percentage)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderUsersReport = () => {
    const data = reports.users.data;
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">
                  {data.totalUsers.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600 mr-4" />
              <div>
                <p className="text-sm text-gray-600">New Users</p>
                <p className="text-2xl font-bold text-gray-900">
                  {data.newUsers}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-purple-600 mr-4" />
              <div>
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-gray-900">
                  {data.activeUsers.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Users by Role
            </h3>
            <div className="space-y-3">
              {data.demographics.byRole.map((role, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{role.role}</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${role.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {role.count.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Geographic Distribution
            </h3>
            <div className="space-y-3">
              {data.demographics.byLocation.map((location, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    {location.location}
                  </span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${location.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {location.count.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Engagement Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">
                {data.engagement.averageEventsPerUser}
              </p>
              <p className="text-sm text-gray-600">Avg Events per User</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">
                {data.engagement.retentionRate}%
              </p>
              <p className="text-sm text-gray-600">Retention Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">
                {data.engagement.averageSessionDuration}
              </p>
              <p className="text-sm text-gray-600">Avg Session Duration</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderEventsReport = () => {
    const data = reports.events.data;
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <p className="text-sm text-gray-600">Total Events</p>
                <p className="text-2xl font-bold text-gray-900">
                  {data.totalEvents}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-green-600 mr-4" />
              <div>
                <p className="text-sm text-gray-600">Active Events</p>
                <p className="text-2xl font-bold text-gray-900">
                  {data.activeEvents}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-purple-600 mr-4" />
              <div>
                <p className="text-sm text-gray-600">Avg Attendance</p>
                <p className="text-2xl font-bold text-gray-900">
                  {data.averageAttendance}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-yellow-600 mr-4" />
              <div>
                <p className="text-sm text-gray-600">Avg Revenue</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(data.averageRevenue)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Top Performing Organizers
            </h3>
            <div className="space-y-4">
              {data.topPerformers.map((organizer, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">
                      {organizer.organizer}
                    </p>
                    <p className="text-sm text-gray-600">
                      {organizer.events} events • {organizer.rating}/5.0 rating
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      {formatCurrency(organizer.revenue)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Events by Category
            </h3>
            <div className="space-y-3">
              {data.eventCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    {category.category}
                  </span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{
                          width: `${
                            (category.count /
                              Math.max(
                                ...data.eventCategories.map((c) => c.count)
                              )) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {category.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderReport = () => {
    switch (selectedReport) {
      case "overview":
        return renderOverviewReport();
      case "revenue":
        return renderRevenueReport();
      case "users":
        return renderUsersReport();
      case "events":
        return renderEventsReport();
      default:
        return renderOverviewReport();
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Reports & Analytics
        </h1>
        <p className="text-gray-600">
          Comprehensive insights into platform performance and user behavior
        </p>
      </div>

      {/* Report Controls */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {reportTypes.map((report) => (
                <button
                  key={report.id}
                  onClick={() => setSelectedReport(report.id)}
                  className={`p-3 rounded-lg border text-left transition-colors ${
                    selectedReport === report.id
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <report.icon className="h-5 w-5 mb-2" />
                  <div className="text-sm font-medium">{report.label}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Range
              </label>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="mb-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {reports[selectedReport].title}
          </h2>
          <p className="text-gray-600">{reports[selectedReport].description}</p>
        </div>
        {renderReport()}
      </div>
    </div>
  );
};

export default AdminReports;
