import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Search,
  Filter,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  User,
  Users,
  Eye,
  Edit,
  MoreVertical,
  Plus,
  RefreshCw,
  ArrowLeft,
  BarChart3,
} from "lucide-react";

const AdminEventAttendees = () => {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedAttendees, setSelectedAttendees] = useState([]);

  // Mock event data
  const event = {
    id: parseInt(id),
    title: "Tech Innovation Summit 2024",
    date: "2024-03-15",
    location: "San Francisco, CA",
    organizer: "TechCorp Events",
  };

  // Mock attendee data
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
      dietaryRequirements: "Vegetarian",
      emergencyContact: "John Johnson (+1 555-987-6543)",
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
      dietaryRequirements: "None",
      emergencyContact: "Lisa Chen (+1 555-876-5432)",
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
      dietaryRequirements: "Gluten-free",
      emergencyContact: "David Wilson (+1 555-765-4321)",
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
      dietaryRequirements: "None",
      emergencyContact: "Maria Rodriguez (+1 555-654-3210)",
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
      dietaryRequirements: "Vegan",
      emergencyContact: "James Park (+1 555-543-2109)",
    },
    {
      id: 6,
      name: "Alex Thompson",
      email: "alex.t@example.com",
      phone: "+1 (555) 678-9012",
      ticketType: "General",
      price: 199,
      status: "registered",
      checkInTime: null,
      arrivalTime: null,
      registrationDate: "2024-03-05",
      company: "SecurityGuard Pro",
      jobTitle: "Security Analyst",
      dietaryRequirements: "None",
      emergencyContact: "Sarah Thompson (+1 555-432-1098)",
    },
    {
      id: 7,
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      phone: "+1 (555) 789-0123",
      ticketType: "VIP",
      price: 299,
      status: "checked-out",
      checkInTime: "2024-03-15T09:45:10Z",
      arrivalTime: "09:45 AM",
      registrationDate: "2024-02-01",
      company: "TechCorp Inc.",
      jobTitle: "CTO",
      dietaryRequirements: "Lactose-free",
      emergencyContact: "Carlos Garcia (+1 555-321-0987)",
    },
    {
      id: 8,
      name: "James Brown",
      email: "james.brown@example.com",
      phone: "+1 (555) 890-1234",
      ticketType: "General",
      price: 199,
      status: "checked-in",
      checkInTime: "2024-03-15T10:15:30Z",
      arrivalTime: "10:15 AM",
      registrationDate: "2024-02-20",
      company: "InnovateLab",
      jobTitle: "Marketing Director",
      dietaryRequirements: "None",
      emergencyContact: "Linda Brown (+1 555-210-9876)",
    },
  ];

  const statusOptions = [
    { value: "all", label: "All Status", count: attendees.length },
    {
      value: "registered",
      label: "Registered",
      count: attendees.filter((a) => a.status === "registered").length,
    },
    {
      value: "checked-in",
      label: "Checked In",
      count: attendees.filter((a) => a.status === "checked-in").length,
    },
    {
      value: "checked-out",
      label: "Checked Out",
      count: attendees.filter((a) => a.status === "checked-out").length,
    },
    {
      value: "no-show",
      label: "No Show",
      count: attendees.filter((a) => a.status === "no-show").length,
    },
  ];

  const filteredAttendees = attendees.filter((attendee) => {
    const matchesSearch =
      attendee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || attendee.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "checked-in":
        return "bg-green-100 text-green-800 border-green-200";
      case "checked-out":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "registered":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "no-show":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "checked-in":
        return <CheckCircle className="h-4 w-4" />;
      case "checked-out":
        return <XCircle className="h-4 w-4" />;
      case "registered":
        return <User className="h-4 w-4" />;
      case "no-show":
        return <XCircle className="h-4 w-4" />;
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

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Link
            to={`/admin/events/${id}`}
            className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Event
          </Link>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Event Attendees
            </h1>
            <p className="text-gray-600">
              {event.title} - {event.date} • {event.location}
            </p>
            <p className="text-sm text-gray-500">
              Organized by {event.organizer}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Attendees
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {attendees.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Checked In</p>
              <p className="text-2xl font-bold text-gray-900">
                {attendees.filter((a) => a.status === "checked-in").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <User className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Registered</p>
              <p className="text-2xl font-bold text-gray-900">
                {attendees.filter((a) => a.status === "registered").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">No Shows</p>
              <p className="text-2xl font-bold text-gray-900">
                {attendees.filter((a) => a.status === "no-show").length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search attendees by name, email, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Status Filter */}
          <div className="lg:w-48">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} ({option.count})
                </option>
              ))}
            </select>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Attendees Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
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
                  Registration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAttendees.map((attendee) => (
                <tr key={attendee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
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
                        <div className="text-xs text-gray-400">
                          {attendee.company} • {attendee.jobTitle}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {attendee.ticketType}
                    </div>
                    <div className="text-sm text-gray-500">
                      ${attendee.price}
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(attendee.registrationDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">{filteredAttendees.length}</span> of{" "}
          <span className="font-medium">{filteredAttendees.length}</span>{" "}
          results
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
            1
          </button>
          <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminEventAttendees;
