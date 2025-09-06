import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  UserCheck,
  Calendar,
  DollarSign,
  TrendingUp,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  QrCode,
  Settings,
  FileText,
} from "lucide-react";

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState("30d");

  // Mock data - in a real app, this would come from your API
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+15%",
      changeType: "positive",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Active Organizers",
      value: "156",
      change: "+8%",
      changeType: "positive",
      icon: UserCheck,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Total Events",
      value: "89",
      change: "+23%",
      changeType: "positive",
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Platform Revenue",
      value: "$127,450",
      change: "+18%",
      changeType: "positive",
      icon: DollarSign,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
  ];

  const recentEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      organizer: "TechCorp Events",
      date: "2024-03-15",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      status: "active",
      attendees: 485,
      capacity: 500,
      revenue: 145200,
      views: 3250,
      conversion: 14.9,
    },
    {
      id: 2,
      title: "Business Leadership Workshop",
      organizer: "Leadership Institute",
      date: "2024-04-02",
      time: "10:00 AM - 3:00 PM",
      location: "New York, NY",
      status: "upcoming",
      attendees: 78,
      capacity: 100,
      revenue: 15600,
      views: 890,
      conversion: 8.8,
    },
    {
      id: 3,
      title: "Food & Wine Expo",
      organizer: "Culinary Events Co.",
      date: "2024-02-10",
      time: "11:00 AM - 8:00 PM",
      location: "Los Angeles, CA",
      status: "completed",
      attendees: 320,
      capacity: 350,
      revenue: 25600,
      views: 1890,
      conversion: 16.9,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "user_registration",
      message: "New user registered: Sarah Johnson",
      time: "2 minutes ago",
      icon: Users,
      color: "text-green-600",
    },
    {
      id: 2,
      type: "organizer_approval",
      message: "Organizer approved: TechCorp Events",
      time: "5 minutes ago",
      icon: UserCheck,
      color: "text-blue-600",
    },
    {
      id: 3,
      type: "event_created",
      message: "New event created: Startup Pitch Competition",
      time: "12 minutes ago",
      icon: Calendar,
      color: "text-purple-600",
    },
    {
      id: 4,
      type: "payment_received",
      message: "Payment of $299 received for Tech Innovation Summit",
      time: "18 minutes ago",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      id: 5,
      type: "ticket_scan",
      message: "Ticket scanned for Business Leadership Workshop",
      time: "25 minutes ago",
      icon: QrCode,
      color: "text-orange-600",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "upcoming":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "completed":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4" />;
      case "upcoming":
        return <Clock className="h-4 w-4" />;
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">
                Manage users, organizers, and events across the platform
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border ${stat.borderColor} p-6 shadow-sm hover:shadow-md transition-shadow duration-200`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </p>
                    <div className="flex items-center">
                      {stat.changeType === "positive" ? (
                        <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          stat.changeType === "positive"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {stat.change}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">
                        vs last period
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}
                  >
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Events */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Recent Events
                    </h3>
                    <Link
                      to="/admin/events"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                    >
                      View all events
                      <ArrowUpRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentEvents.map((event) => (
                      <div
                        key={event.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {event.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              by {event.organizer}
                            </p>
                            <div className="flex items-center text-sm text-gray-600 space-x-4">
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {event.date}
                              </span>
                              <span>{event.time}</span>
                              <span className="flex items-center">
                                <Eye className="h-4 w-4 mr-1" />
                                {event.location}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                                event.status
                              )} flex items-center`}
                            >
                              {getStatusIcon(event.status)}
                              <span className="ml-1 capitalize">
                                {event.status}
                              </span>
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Attendees</p>
                            <p className="font-medium text-gray-900">
                              {event.attendees}/{event.capacity}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500">Revenue</p>
                            <p className="font-medium text-gray-900">
                              ${event.revenue.toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500">Views</p>
                            <p className="font-medium text-gray-900">
                              {event.views}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500">Conversion</p>
                            <p className="font-medium text-gray-900">
                              {event.conversion}%
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Recent Activity
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <activity.icon
                            className={`h-4 w-4 ${activity.color}`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900">
                            {activity.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link
                      to="/admin/reports"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View all activity
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                to="/admin/users"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Manage Users</p>
                  <p className="text-sm text-gray-500">View and manage users</p>
                </div>
              </Link>

              <Link
                to="/admin/organizers"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <UserCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Manage Organizers</p>
                  <p className="text-sm text-gray-500">Approve and manage</p>
                </div>
              </Link>

              <Link
                to="/admin/events"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Calendar className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Manage Events</p>
                  <p className="text-sm text-gray-500">View all events</p>
                </div>
              </Link>

              <Link
                to="/admin/scanner"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <QrCode className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Ticket Scanner</p>
                  <p className="text-sm text-gray-500">Scan tickets</p>
                </div>
              </Link>

              <Link
                to="/admin/reports"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-yellow-300 hover:bg-yellow-50 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                  <BarChart3 className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Reports</p>
                  <p className="text-sm text-gray-500">
                    Analytics and insights
                  </p>
                </div>
              </Link>

              <Link
                to="/admin/settings"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <Settings className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Settings</p>
                  <p className="text-sm text-gray-500">
                    Platform configuration
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
