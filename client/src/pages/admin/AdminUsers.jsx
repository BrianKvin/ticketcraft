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
} from "lucide-react";

const AdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Mock user data
  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 123-4567",
      role: "attendee",
      status: "active",
      joinDate: "2024-01-15",
      lastActive: "2024-03-15T09:15:30Z",
      eventsAttended: 3,
      totalSpent: 597,
      location: "San Francisco, CA",
      company: "TechCorp Inc.",
      jobTitle: "Software Engineer",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@example.com",
      phone: "+1 (555) 234-5678",
      role: "organizer",
      status: "active",
      joinDate: "2023-11-20",
      lastActive: "2024-03-15T08:45:15Z",
      eventsAttended: 0,
      totalSpent: 0,
      location: "New York, NY",
      company: "InnovateLab",
      jobTitle: "Product Manager",
      eventsCreated: 5,
      totalRevenue: 15600,
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      phone: "+1 (555) 345-6789",
      role: "attendee",
      status: "inactive",
      joinDate: "2023-12-15",
      lastActive: "2024-02-20T14:30:45Z",
      eventsAttended: 1,
      totalSpent: 120,
      location: "Chicago, IL",
      company: "DesignFirst Studio",
      jobTitle: "UX Designer",
    },
    {
      id: 4,
      name: "David Rodriguez",
      email: "david.r@example.com",
      phone: "+1 (555) 456-7890",
      role: "organizer",
      status: "pending",
      joinDate: "2024-02-01",
      lastActive: "2024-03-10T16:20:30Z",
      eventsAttended: 0,
      totalSpent: 0,
      location: "Los Angeles, CA",
      company: "DataFlow Analytics",
      jobTitle: "Data Scientist",
      eventsCreated: 0,
      totalRevenue: 0,
    },
    {
      id: 5,
      name: "Lisa Park",
      email: "lisa.park@example.com",
      phone: "+1 (555) 567-8901",
      role: "attendee",
      status: "suspended",
      joinDate: "2024-01-20",
      lastActive: "2024-03-01T10:15:20Z",
      eventsAttended: 0,
      totalSpent: 0,
      location: "Seattle, WA",
      company: "CloudScale Technologies",
      jobTitle: "DevOps Engineer",
    },
    {
      id: 6,
      name: "Alex Thompson",
      email: "alex.t@example.com",
      phone: "+1 (555) 678-9012",
      role: "attendee",
      status: "active",
      joinDate: "2024-02-15",
      lastActive: "2024-03-15T11:30:15Z",
      eventsAttended: 2,
      totalSpent: 225,
      location: "Austin, TX",
      company: "SecurityGuard Pro",
      jobTitle: "Security Analyst",
    },
    {
      id: 7,
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      phone: "+1 (555) 789-0123",
      role: "organizer",
      status: "active",
      joinDate: "2023-10-01",
      lastActive: "2024-03-15T09:45:10Z",
      eventsAttended: 0,
      totalSpent: 0,
      location: "Miami, FL",
      company: "TechCorp Inc.",
      jobTitle: "CTO",
      eventsCreated: 12,
      totalRevenue: 145200,
    },
    {
      id: 8,
      name: "James Brown",
      email: "james.brown@example.com",
      phone: "+1 (555) 890-1234",
      role: "attendee",
      status: "active",
      joinDate: "2024-01-20",
      lastActive: "2024-03-14T15:20:45Z",
      eventsAttended: 1,
      totalSpent: 150,
      location: "Denver, CO",
      company: "InnovateLab",
      jobTitle: "Marketing Director",
    },
  ];

  const statusOptions = [
    { value: "all", label: "All Status", count: users.length },
    {
      value: "active",
      label: "Active",
      count: users.filter((u) => u.status === "active").length,
    },
    {
      value: "inactive",
      label: "Inactive",
      count: users.filter((u) => u.status === "inactive").length,
    },
    {
      value: "pending",
      label: "Pending",
      count: users.filter((u) => u.status === "pending").length,
    },
    {
      value: "suspended",
      label: "Suspended",
      count: users.filter((u) => u.status === "suspended").length,
    },
  ];

  const roleOptions = [
    { value: "all", label: "All Roles", count: users.length },
    {
      value: "attendee",
      label: "Attendees",
      count: users.filter((u) => u.role === "attendee").length,
    },
    {
      value: "organizer",
      label: "Organizers",
      count: users.filter((u) => u.role === "organizer").length,
    },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;
    const matchesRole = roleFilter === "all" || user.role === roleFilter;

    return matchesSearch && matchesStatus && matchesRole;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "inactive":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
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
      case "inactive":
        return <Clock className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "suspended":
        return <XCircle className="h-4 w-4" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case "organizer":
        return <UserCheck className="h-4 w-4" />;
      case "attendee":
        return <User className="h-4 w-4" />;
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
          User Management
        </h1>
        <p className="text-gray-600">
          Manage all platform users and their accounts
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
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">{users.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {users.filter((u) => u.status === "active").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <UserCheck className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Organizers</p>
              <p className="text-2xl font-bold text-gray-900">
                {users.filter((u) => u.role === "organizer").length}
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
                {users.filter((u) => u.status === "pending").length}
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
                placeholder="Search users by name, email, or company..."
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

          {/* Role Filter */}
          <div className="lg:w-48">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {roleOptions.map((option) => (
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

      {/* Users Table */}
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
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Activity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stats
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
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
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
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                        <div className="text-xs text-gray-400">
                          {user.company} • {user.jobTitle}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getRoleIcon(user.role)}
                      <span className="ml-2 text-sm text-gray-900 capitalize">
                        {user.role}
                      </span>
                    </div>
                    {user.role === "organizer" && (
                      <div className="text-xs text-gray-500 mt-1">
                        {user.eventsCreated} events • $
                        {user.totalRevenue?.toLocaleString()}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                        user.status
                      )}`}
                    >
                      {getStatusIcon(user.status)}
                      <span className="ml-1 capitalize">{user.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>
                      <div>Last active: {formatTime(user.lastActive)}</div>
                      <div className="text-xs text-gray-500">
                        {formatDate(user.lastActive)}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.role === "attendee" ? (
                      <div>
                        <div>{user.eventsAttended} events</div>
                        <div className="text-xs text-gray-500">
                          ${user.totalSpent} spent
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div>{user.eventsCreated} events</div>
                        <div className="text-xs text-gray-500">
                          ${user.totalRevenue?.toLocaleString()} revenue
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(user.joinDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      {user.status === "pending" && (
                        <button className="text-green-600 hover:text-green-900">
                          <UserCheck className="h-4 w-4" />
                        </button>
                      )}
                      {user.status === "active" && (
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
          <span className="font-medium">{filteredUsers.length}</span> of{" "}
          <span className="font-medium">{filteredUsers.length}</span> results
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

export default AdminUsers;




