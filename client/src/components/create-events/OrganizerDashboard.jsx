import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Plus,
  Calendar,
  MapPin,
  Users,
  Edit,
  Trash2,
  Eye,
  DollarSign,
  History,
  Download,
  User,
  TrendingUp,
  Star,
} from "lucide-react";
import Button from "../common/Button";
import Input from "../common/Input";

const OrganizerDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("events");

  // Mock organizer data
  const organizer = {
    name: "Sarah Johnson",
    email: "sarah.johnson@eventify.com",
    initials: "SJ",
    company: "Event Masters LLC",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Experienced event organizer with over 5 years in the industry. Specialized in tech conferences and business workshops.",
    joinDate: "January 2023",
  };

  // Mock data - in a real app, this would come from your database
  const [events] = useState([
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      date: "2024-03-15",
      location: "San Francisco, CA",
      category: "Technology",
      price: 299,
      totalSlots: 200,
      registeredAttendees: 155,
      revenue: 46245,
      status: "active",
      views: 1250,
    },
    {
      id: 2,
      title: "Business Leadership Workshop",
      date: "2024-04-02",
      location: "New York, NY",
      category: "Business",
      price: 150,
      totalSlots: 50,
      registeredAttendees: 32,
      revenue: 4800,
      status: "active",
      views: 450,
    },
  ]);

  const [attendees] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      event: "Tech Innovation Summit 2024",
      registrationDate: "2024-02-01",
      paymentStatus: "paid",
      amount: 299,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      event: "Tech Innovation Summit 2024",
      registrationDate: "2024-02-03",
      paymentStatus: "paid",
      amount: 299,
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike.chen@example.com",
      event: "Business Leadership Workshop",
      registrationDate: "2024-02-15",
      paymentStatus: "pending",
      amount: 150,
    },
  ]);

  const totalRevenue = events.reduce((sum, event) => sum + event.revenue, 0);
  const totalAttendees = events.reduce(
    (sum, event) => sum + event.registeredAttendees,
    0
  );
  const totalViews = events.reduce((sum, event) => sum + event.views, 0);

  const stats = [
    {
      title: "Total Events",
      value: events.length,
      change: "+12%",
      changeType: "positive",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Total Attendees",
      value: totalAttendees,
      change: "+8%",
      changeType: "positive",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Total Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      change: "+18%",
      changeType: "positive",
      icon: DollarSign,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Total Views",
      value: totalViews,
      change: "+15%",
      changeType: "positive",
      icon: Eye,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const quickActions = [
    {
      title: "Create New Event",
      description: "Start planning your next event",
      icon: Plus,
      link: "/events/create",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      title: "Manage Events",
      description: "View and edit your events",
      icon: Edit,
      link: "/events/manage",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "View Analytics",
      description: "Detailed performance insights",
      icon: TrendingUp,
      link: "/organizer/analytics",
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      title: "Update Profile",
      description: "Manage your organizer profile",
      icon: User,
      link: "/organizer/profile",
      color: "bg-orange-500 hover:bg-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Organizer Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back, {organizer.name}! Manage your events and track
                performance
              </p>
            </div>
            <Button
              onClick={() => navigate("/events/create")}
              className="bg-green-500 hover:bg-green-600"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Button>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {location.state?.message && (
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="text-green-800">{location.state.message}</div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  {stat.change && (
                    <div className="flex items-center mt-2">
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
                        from last month
                      </span>
                    </div>
                  )}
                </div>
                <div
                  className={`w-12 h-12 rounded-full ${stat.bgColor} flex items-center justify-center`}
                >
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(action.link)}
                    className={`w-full ${action.color} text-white p-4 rounded-lg flex items-center space-x-3 transition-colors duration-200`}
                  >
                    <action.icon className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium">{action.title}</div>
                      <div className="text-sm opacity-90">
                        {action.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Events */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recent Events
                </h3>
                <button
                  onClick={() => navigate("/events/manage")}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  View All Events →
                </button>
              </div>

              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {event.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {event.date}
                          <MapPin className="h-4 w-4 ml-3 mr-1" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mt-2">
                          <Users className="h-4 w-4 mr-1" />
                          {event.registeredAttendees}/{event.totalSlots}{" "}
                          attendees
                          <DollarSign className="h-4 w-4 ml-3 mr-1" />$
                          {event.revenue.toLocaleString()} revenue
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            event.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {event.status}
                        </span>
                        <button
                          onClick={() => navigate(`/events/edit/${event.id}`)}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Attendees */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Attendees
            </h3>
            <button className="text-green-600 hover:text-green-700 font-medium">
              View All Attendees →
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Attendee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registration Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {attendees.map((attendee) => (
                  <tr key={attendee.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {attendee.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {attendee.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {attendee.event}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {attendee.registrationDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          attendee.paymentStatus === "paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {attendee.paymentStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${attendee.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
