import React, { useState } from "react";
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
  Shield,
  UserCheck,
  UserX,
  DollarSign,
  BarChart3,
} from "lucide-react";

const AdminOrganizers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [verificationFilter, setVerificationFilter] = useState("all");
  const [selectedOrganizers, setSelectedOrganizers] = useState([]);

  // Mock organizer data
  const organizers = [
    {
      id: 1,
      name: "Michael Chen",
      email: "michael.chen@example.com",
      phone: "+1 (555) 234-5678",
      company: "InnovateLab",
      jobTitle: "Product Manager",
      status: "active",
      verificationStatus: "verified",
      joinDate: "2023-11-20",
      lastActive: "2024-03-15T08:45:15Z",
      eventsCreated: 5,
      totalRevenue: 15600,
      totalAttendees: 250,
      averageRating: 4.8,
      location: "New York, NY",
      website: "https://innovatelab.com",
      description:
        "Leading innovation in event management and technology solutions.",
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      phone: "+1 (555) 789-0123",
      company: "TechCorp Inc.",
      jobTitle: "CTO",
      status: "active",
      verificationStatus: "verified",
      joinDate: "2023-10-01",
      lastActive: "2024-03-15T09:45:10Z",
      eventsCreated: 12,
      totalRevenue: 145200,
      totalAttendees: 1200,
      averageRating: 4.9,
      location: "Miami, FL",
      website: "https://techcorp.com",
      description:
        "Technology leader with extensive experience in corporate events.",
    },
    {
      id: 3,
      name: "David Rodriguez",
      email: "david.r@example.com",
      phone: "+1 (555) 456-7890",
      company: "DataFlow Analytics",
      jobTitle: "Data Scientist",
      status: "pending",
      verificationStatus: "pending",
      joinDate: "2024-02-01",
      lastActive: "2024-03-10T16:20:30Z",
      eventsCreated: 0,
      totalRevenue: 0,
      totalAttendees: 0,
      averageRating: 0,
      location: "Los Angeles, CA",
      website: "https://dataflow.com",
      description:
        "Data-driven event organizer specializing in analytics conferences.",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      phone: "+1 (555) 123-4567",
      company: "Culinary Events Co.",
      jobTitle: "Event Director",
      status: "active",
      verificationStatus: "verified",
      joinDate: "2023-12-01",
      lastActive: "2024-03-14T14:30:20Z",
      eventsCreated: 8,
      totalRevenue: 25600,
      totalAttendees: 400,
      averageRating: 4.7,
      location: "Los Angeles, CA",
      website: "https://culinaryevents.com",
      description:
        "Specialized in food and wine events with premium experiences.",
    },
    {
      id: 5,
      name: "James Brown",
      email: "james.brown@example.com",
      phone: "+1 (555) 890-1234",
      company: "Marketing Pro Events",
      jobTitle: "Marketing Director",
      status: "suspended",
      verificationStatus: "verified",
      joinDate: "2023-11-15",
      lastActive: "2024-02-20T10:15:30Z",
      eventsCreated: 3,
      totalRevenue: 67500,
      totalAttendees: 450,
      averageRating: 4.2,
      location: "Chicago, IL",
      website: "https://marketingpro.com",
      description:
        "Marketing expert with focus on digital marketing conferences.",
    },
    {
      id: 6,
      name: "Lisa Park",
      email: "lisa.park@example.com",
      phone: "+1 (555) 567-8901",
      company: "Startup Hub",
      jobTitle: "Community Manager",
      status: "active",
      verificationStatus: "verified",
      joinDate: "2024-02-20",
      lastActive: "2024-03-15T11:30:15Z",
      eventsCreated: 2,
      totalRevenue: 3750,
      totalAttendees: 25,
      averageRating: 4.5,
      location: "Austin, TX",
      website: "https://startuphub.com",
      description: "Startup ecosystem builder and pitch competition organizer.",
    },
    {
      id: 7,
      name: "Alex Thompson",
      email: "alex.t@example.com",
      phone: "+1 (555) 678-9012",
      company: "Wellness Events",
      jobTitle: "Wellness Coordinator",
      status: "inactive",
      verificationStatus: "verified",
      joinDate: "2024-03-01",
      lastActive: "2024-03-05T09:20:45Z",
      eventsCreated: 0,
      totalRevenue: 0,
      totalAttendees: 0,
      averageRating: 0,
      location: "Sedona, AZ",
      website: "https://wellnessevents.com",
      description: "Wellness and mindfulness event specialist.",
    },
    {
      id: 8,
      name: "Emma Davis",
      email: "emma.davis@example.com",
      phone: "+1 (555) 345-6789",
      company: "Cultural Events",
      jobTitle: "Cultural Director",
      status: "pending",
      verificationStatus: "pending",
      joinDate: "2024-02-28",
      lastActive: "2024-03-12T15:45:20Z",
      eventsCreated: 0,
      totalRevenue: 0,
      totalAttendees: 0,
      averageRating: 0,
      location: "Miami, FL",
      website: "https://culturalevents.com",
      description: "Arts and culture event organizer promoting local artists.",
    },
  ];

  const statusOptions = [
    { value: "all", label: "All Status", count: organizers.length },
    {
      value: "active",
      label: "Active",
      count: organizers.filter((o) => o.status === "active").length,
    },
    {
      value: "pending",
      label: "Pending",
      count: organizers.filter((o) => o.status === "pending").length,
    },
    {
      value: "inactive",
      label: "Inactive",
      count: organizers.filter((o) => o.status === "inactive").length,
    },
    {
      value: "suspended",
      label: "Suspended",
      count: organizers.filter((o) => o.status === "suspended").length,
    },
  ];

  const verificationOptions = [
    { value: "all", label: "All Verification", count: organizers.length },
    {
      value: "verified",
      label: "Verified",
      count: organizers.filter((o) => o.verificationStatus === "verified")
        .length,
    },
    {
      value: "pending",
      label: "Pending Verification",
      count: organizers.filter((o) => o.verificationStatus === "pending")
        .length,
    },
    {
      value: "rejected",
      label: "Rejected",
      count: organizers.filter((o) => o.verificationStatus === "rejected")
        .length,
    },
  ];

  const filteredOrganizers = organizers.filter((organizer) => {
    const matchesSearch =
      organizer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      organizer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      organizer.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || organizer.status === statusFilter;
    const matchesVerification =
      verificationFilter === "all" ||
      organizer.verificationStatus === verificationFilter;

    return matchesSearch && matchesStatus && matchesVerification;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "inactive":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "suspended":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "inactive":
        return <Clock className="h-4 w-4" />;
      case "suspended":
        return <XCircle className="h-4 w-4" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  const getVerificationColor = (status) => {
    switch (status) {
      case "verified":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getVerificationIcon = (status) => {
    switch (status) {
      case "verified":
        return <Shield className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "rejected":
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Organizer Management
        </h1>
        <p className="text-gray-600">
          Manage event organizers and their verification status
        </p>
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
                Total Organizers
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {organizers.length}
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
              <p className="text-sm font-medium text-gray-600">
                Active Organizers
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {organizers.filter((o) => o.status === "active").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Verified</p>
              <p className="text-2xl font-bold text-gray-900">
                {
                  organizers.filter((o) => o.verificationStatus === "verified")
                    .length
                }
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">
                {organizers.filter((o) => o.status === "pending").length}
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
                placeholder="Search organizers by name, email, or company..."
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

          {/* Verification Filter */}
          <div className="lg:w-48">
            <select
              value={verificationFilter}
              onChange={(e) => setVerificationFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {verificationOptions.map((option) => (
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

      {/* Organizers Table */}
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
                  Organizer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Verification
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Activity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrganizers.map((organizer) => (
                <tr key={organizer.id} className="hover:bg-gray-50">
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
                          {organizer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {organizer.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {organizer.email}
                        </div>
                        <div className="text-xs text-gray-400">
                          {organizer.company} • {organizer.jobTitle}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                        organizer.status
                      )}`}
                    >
                      {getStatusIcon(organizer.status)}
                      <span className="ml-1 capitalize">
                        {organizer.status}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getVerificationColor(
                        organizer.verificationStatus
                      )}`}
                    >
                      {getVerificationIcon(organizer.verificationStatus)}
                      <span className="ml-1 capitalize">
                        {organizer.verificationStatus}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {organizer.eventsCreated} events
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <DollarSign className="h-3 w-3 mr-1" />$
                        {organizer.totalRevenue?.toLocaleString()}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Users className="h-3 w-3 mr-1" />
                        {organizer.totalAttendees} attendees
                      </div>
                      {organizer.averageRating > 0 && (
                        <div className="flex items-center text-xs text-gray-500">
                          <BarChart3 className="h-3 w-3 mr-1" />
                          {organizer.averageRating}/5.0 rating
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>
                      <div>Last active: {formatTime(organizer.lastActive)}</div>
                      <div className="text-xs text-gray-500">
                        {formatDate(organizer.lastActive)}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(organizer.joinDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      {organizer.status === "pending" && (
                        <button className="text-green-600 hover:text-green-900">
                          <UserCheck className="h-4 w-4" />
                        </button>
                      )}
                      {organizer.status === "active" && (
                        <button className="text-red-600 hover:text-red-900">
                          <UserX className="h-4 w-4" />
                        </button>
                      )}
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
          <span className="font-medium">{filteredOrganizers.length}</span> of{" "}
          <span className="font-medium">{filteredOrganizers.length}</span>{" "}
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

export default AdminOrganizers;





