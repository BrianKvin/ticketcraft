import React, { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  RefreshCw,
  Settings,
  Check,
  X,
  AlertCircle,
  Info,
  ExternalLink,
  Edit,
  Trash2,
  Copy,
  Share,
  Star,
  MoreVertical,
  User,
  Users,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Key,
  Shield,
  Mail,
  Smartphone,
  Bell,
  Calendar,
  Clock,
  MapPin,
  Activity,
  BarChart3,
  TrendingUp,
  CheckCircle,
  XCircle,
  AlertTriangle,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Crown,
  Badge,
  Ticket,
  Scan,
  QrCode,
  Smartphone as Mobile,
} from "lucide-react";

const StaffManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedStaff, setSelectedStaff] = useState([]);

  // Mock staff data
  const staff = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@eventify.com",
      phone: "+1 (555) 123-4567",
      role: "Scanner",
      status: "active",
      permissions: ["scan_tickets", "view_attendees"],
      events: ["Tech Summit 2024", "Marketing Conference"],
      lastActive: "2024-03-15T14:30:00Z",
      totalScans: 245,
      joinDate: "2024-02-01T09:00:00Z",
      isVerified: true,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@eventify.com",
      phone: "+1 (555) 234-5678",
      role: "Manager",
      status: "active",
      permissions: [
        "scan_tickets",
        "view_attendees",
        "manage_staff",
        "view_analytics",
      ],
      events: ["Tech Summit 2024", "Marketing Conference", "Design Workshop"],
      lastActive: "2024-03-15T16:45:00Z",
      totalScans: 189,
      joinDate: "2024-01-15T10:30:00Z",
      isVerified: true,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike.wilson@eventify.com",
      phone: "+1 (555) 345-6789",
      role: "Scanner",
      status: "pending",
      permissions: ["scan_tickets"],
      events: ["Tech Summit 2024"],
      lastActive: null,
      totalScans: 0,
      joinDate: "2024-03-10T14:20:00Z",
      isVerified: false,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@eventify.com",
      phone: "+1 (555) 456-7890",
      role: "Supervisor",
      status: "active",
      permissions: [
        "scan_tickets",
        "view_attendees",
        "manage_staff",
        "view_analytics",
        "manage_events",
      ],
      events: [
        "Tech Summit 2024",
        "Marketing Conference",
        "Design Workshop",
        "Startup Pitch",
      ],
      lastActive: "2024-03-15T12:15:00Z",
      totalScans: 312,
      joinDate: "2024-01-01T08:00:00Z",
      isVerified: true,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 5,
      name: "David Brown",
      email: "david.brown@eventify.com",
      phone: "+1 (555) 567-8901",
      role: "Scanner",
      status: "inactive",
      permissions: ["scan_tickets", "view_attendees"],
      events: ["Marketing Conference"],
      lastActive: "2024-03-05T18:30:00Z",
      totalScans: 156,
      joinDate: "2024-02-15T11:45:00Z",
      isVerified: true,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
  ];

  const roles = [
    {
      value: "Scanner",
      label: "Scanner",
      description: "Can scan tickets and view basic attendee info",
    },
    {
      value: "Manager",
      label: "Manager",
      description: "Can scan tickets, manage staff, and view analytics",
    },
    {
      value: "Supervisor",
      label: "Supervisor",
      description: "Full access including event management",
    },
  ];

  const statusOptions = [
    { value: "all", label: "All Status", count: staff.length },
    {
      value: "active",
      label: "Active",
      count: staff.filter((s) => s.status === "active").length,
    },
    {
      value: "pending",
      label: "Pending",
      count: staff.filter((s) => s.status === "pending").length,
    },
    {
      value: "inactive",
      label: "Inactive",
      count: staff.filter((s) => s.status === "inactive").length,
    },
  ];

  const filteredStaff = staff.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "all" || member.role === roleFilter;
    const matchesStatus =
      statusFilter === "all" || member.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "inactive":
        return <XCircle className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return "Never";
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleInviteStaff = () => {
    console.log("Inviting new staff member");
  };

  const handleEditStaff = (staffId) => {
    console.log(`Editing staff member ${staffId}`);
  };

  const handleRemoveStaff = (staffId) => {
    console.log(`Removing staff member ${staffId}`);
  };

  const handleResendInvite = (staffId) => {
    console.log(`Resending invite to staff member ${staffId}`);
  };

  const handleBulkAction = (action) => {
    console.log(
      `Bulk action: ${action} for ${selectedStaff.length} staff members`
    );
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Staff Management
            </h1>
            <p className="text-gray-600">
              Manage staff members who can access the mobile scanning app
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleInviteStaff}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Invite Staff
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </button>
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
              <p className="text-sm font-medium text-gray-600">Total Staff</p>
              <p className="text-2xl font-bold text-gray-900">{staff.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active</p>
              <p className="text-2xl font-bold text-gray-900">
                {staff.filter((s) => s.status === "active").length}
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
                {staff.filter((s) => s.status === "pending").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Scan className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Scans</p>
              <p className="text-2xl font-bold text-gray-900">
                {staff.reduce((sum, s) => sum + s.totalScans, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search staff by name, email, or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="lg:w-48">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Roles</option>
              {roles.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>

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
        </div>
      </div>

      {/* Staff Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Staff Member
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role & Permissions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Events
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Activity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStaff.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {member.name}
                          </div>
                          {member.isVerified && (
                            <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                          )}
                        </div>
                        <div className="text-sm text-gray-500">
                          {member.email}
                        </div>
                        <div className="text-xs text-gray-400">
                          {member.phone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Badge className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900">
                        {member.role}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {member.permissions.length} permissions
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        member.status
                      )}`}
                    >
                      {getStatusIcon(member.status)}
                      <span className="ml-1 capitalize">{member.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {member.events.length} events
                    </div>
                    <div className="text-xs text-gray-500">
                      {member.events.slice(0, 2).join(", ")}
                      {member.events.length > 2 &&
                        ` +${member.events.length - 2} more`}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {member.totalScans} scans
                    </div>
                    <div className="text-xs text-gray-500">
                      Last active: {formatDateTime(member.lastActive)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEditStaff(member.id)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Edit"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      {member.status === "pending" && (
                        <button
                          onClick={() => handleResendInvite(member.id)}
                          className="text-yellow-600 hover:text-yellow-900"
                          title="Resend Invite"
                        >
                          <Mail className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        onClick={() => handleRemoveStaff(member.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Remove"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredStaff.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No staff members found
          </h3>
          <p className="text-gray-500 mb-4">
            {searchQuery || roleFilter !== "all" || statusFilter !== "all"
              ? "Try adjusting your filters or search terms"
              : "No staff members have been added yet"}
          </p>
          <button
            onClick={handleInviteStaff}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center mx-auto"
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Invite First Staff Member
          </button>
        </div>
      )}
    </div>
  );
};

export default StaffManagement;
