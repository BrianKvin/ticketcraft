import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  BarChart3,
  QrCode,
  Mail,
  Phone,
  User,
  UserCheck,
  Shield,
  ArrowLeft,
  Download,
  Share2,
} from "lucide-react";

const AdminEventDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock event data - in a real app, this would come from your API
  const event = {
    id: parseInt(id),
    title: "Tech Innovation Summit 2024",
    description:
      "The premier technology conference featuring AI, machine learning, and digital transformation insights from industry leaders.",
    date: "2024-03-15",
    time: "9:00 AM - 5:00 PM",
    location: "San Francisco, CA",
    venue: "Moscone Center",
    category: "Technology",
    status: "active",
    ticketsSold: 485,
    totalTickets: 500,
    revenue: 145200,
    views: 3250,
    conversion: 14.9,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    tags: ["AI", "Machine Learning", "Innovation", "Tech"],
    organizer: {
      id: 1,
      name: "TechCorp Events",
      email: "events@techcorp.com",
      phone: "+1 (555) 123-4567",
      company: "TechCorp Inc.",
      verified: true,
      joinDate: "2023-10-01",
      eventsCreated: 12,
      totalRevenue: 145200,
      averageRating: 4.9,
    },
    createdAt: "2024-01-15",
    lastModified: "2024-03-10",
    attendees: 485,
    checkIns: 420,
    noShows: 65,
    checkInRate: 86.6,
  };

  // Mock attendees data
  const attendees = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 123-4567",
      ticketType: "VIP",
      price: 299,
      status: "checked-in",
      checkInTime: "2024-03-15T09:15:30Z",
      arrivalTime: "09:15 AM",
      registrationDate: "2024-02-10",
      company: "TechCorp Inc.",
      jobTitle: "Software Engineer",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@example.com",
      phone: "+1 (555) 234-5678",
      ticketType: "General",
      price: 199,
      status: "checked-in",
      checkInTime: "2024-03-15T09:22:15Z",
      arrivalTime: "09:22 AM",
      registrationDate: "2024-02-15",
      company: "InnovateLab",
      jobTitle: "Product Manager",
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      phone: "+1 (555) 345-6789",
      ticketType: "VIP",
      price: 299,
      status: "no-show",
      checkInTime: null,
      arrivalTime: null,
      registrationDate: "2024-02-20",
      company: "DesignFirst Studio",
      jobTitle: "UX Designer",
    },
    {
      id: 4,
      name: "David Rodriguez",
      email: "david.r@example.com",
      phone: "+1 (555) 456-7890",
      ticketType: "General",
      price: 199,
      status: "checked-in",
      checkInTime: "2024-03-15T09:35:20Z",
      arrivalTime: "09:35 AM",
      registrationDate: "2024-02-25",
      company: "DataFlow Analytics",
      jobTitle: "Data Scientist",
    },
    {
      id: 5,
      name: "Lisa Park",
      email: "lisa.park@example.com",
      phone: "+1 (555) 567-8901",
      ticketType: "Student",
      price: 99,
      status: "checked-in",
      checkInTime: "2024-03-15T09:45:10Z",
      arrivalTime: "09:45 AM",
      registrationDate: "2024-03-01",
      company: "CloudScale Technologies",
      jobTitle: "DevOps Engineer",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "checked-in":
        return "bg-green-100 text-green-800 border-green-200";
      case "no-show":
        return "bg-red-100 text-red-800 border-red-200";
      case "registered":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "checked-in":
        return <CheckCircle className="h-4 w-4" />;
      case "no-show":
        return <XCircle className="h-4 w-4" />;
      case "registered":
        return <Clock className="h-4 w-4" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Eye },
    { id: "attendees", label: "Attendees", icon: Users },
    { id: "organizer", label: "Organizer", icon: UserCheck },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Link
            to="/admin/events"
            className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {event.title}
            </h1>
            <p className="text-gray-600">{event.description}</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Event Image and Basic Info */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
        <div className="relative h-64">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
              {event.status.toUpperCase()}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Date & Time</p>
                <p className="font-medium text-gray-900">
                  {formatDate(event.date)} • {event.time}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-gray-900">{event.location}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Attendees</p>
                <p className="font-medium text-gray-900">
                  {event.attendees} / {event.totalTickets}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Revenue</p>
                <p className="font-medium text-gray-900">
                  {formatCurrency(event.revenue)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border border-gray-200 mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-blue-600">Check-ins</p>
                      <p className="text-2xl font-bold text-blue-900">
                        {event.checkIns}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <XCircle className="h-8 w-8 text-red-600 mr-3" />
                    <div>
                      <p className="text-sm text-red-600">No-shows</p>
                      <p className="text-2xl font-bold text-red-900">
                        {event.noShows}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <BarChart3 className="h-8 w-8 text-green-600 mr-3" />
                    <div>
                      <p className="text-sm text-green-600">Check-in Rate</p>
                      <p className="text-2xl font-bold text-green-900">
                        {event.checkInRate}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Event Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Category:</span>
                      <span className="font-medium">{event.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Views:</span>
                      <span className="font-medium">{event.views}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Conversion:</span>
                      <span className="font-medium">{event.conversion}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Created:</span>
                      <span className="font-medium">
                        {formatDate(event.createdAt)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Last Modified:</span>
                      <span className="font-medium">
                        {formatDate(event.lastModified)}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Attendees Tab */}
          {activeTab === "attendees" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Event Attendees ({attendees.length})
                </h3>
                <Link
                  to={`/admin/events/${event.id}/attendees`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View All Attendees
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Attendee
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ticket
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Check-in Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {attendees.map((attendee) => (
                      <tr key={attendee.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-blue-700">
                                {attendee.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {attendee.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {attendee.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {attendee.ticketType}
                          </div>
                          <div className="text-sm text-gray-500">
                            {formatCurrency(attendee.price)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                              attendee.status
                            )}`}
                          >
                            {getStatusIcon(attendee.status)}
                            <span className="ml-1 capitalize">
                              {attendee.status.replace("-", " ")}
                            </span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {attendee.checkInTime ? (
                            <div>
                              <div>{attendee.arrivalTime}</div>
                              <div className="text-xs text-gray-500">
                                {formatTime(attendee.checkInTime)}
                              </div>
                            </div>
                          ) : (
                            "Not checked in"
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-900">
                              <Mail className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Organizer Tab */}
          {activeTab === "organizer" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Event Organizer
              </h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-medium text-blue-700">
                      {event.organizer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-900">
                        {event.organizer.name}
                      </h4>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          event.organizer.verified
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {event.organizer.verified ? "Verified" : "Pending"}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {event.organizer.company}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{event.organizer.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{event.organizer.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Events Created</p>
                        <p className="font-medium">
                          {event.organizer.eventsCreated}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Total Revenue</p>
                        <p className="font-medium">
                          {formatCurrency(event.organizer.totalRevenue)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Average Rating</p>
                        <p className="font-medium">
                          {event.organizer.averageRating}/5.0
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Join Date</p>
                        <p className="font-medium">
                          {formatDate(event.organizer.joinDate)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Event Analytics
              </h3>
              <Link
                to={`/admin/events/${event.id}/analytics`}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View Detailed Analytics
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminEventDetails;
