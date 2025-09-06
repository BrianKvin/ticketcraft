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
  AlertCircle,
  CheckSquare,
  Square,
  Send,
  Copy,
  Trash2,
  Archive,
  Star,
  Shield,
  Lock,
  Unlock,
  RotateCcw,
  Check,
  X,
  Clock3,
  Calendar as CalendarIcon,
  UserCheck,
  UserX,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  Target,
  Zap,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Info,
  HelpCircle,
  Settings,
  Grid,
  List,
  SortAsc,
  SortDesc,
  MessageSquare,
  Mail as MailIcon,
  Smartphone,
  Bell,
  Megaphone,
  TrendingUp,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
} from "lucide-react";

const SMSNotifications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [selectedNotifications, setSelectedNotifications] = useState([]);

  // Comprehensive mock SMS notifications data
  const notifications = [
    {
      id: 1,
      name: "Event Day Reminder",
      message:
        "Tech Summit 2024 starts in 2 hours! Check your schedule and head to the main hall. See you soon! 🚀",
      type: "Reminder",
      status: "sent",
      recipientCount: 485,
      sentCount: 485,
      deliveredCount: 482,
      failedCount: 3,
      deliveryRate: 99.4,
      createdAt: "2024-03-15T07:00:00Z",
      sentAt: "2024-03-15T07:00:00Z",
      scheduledAt: null,
      lastModified: "2024-03-15T06:45:00Z",
      createdBy: "Event Team",
      audience: "All Attendees",
      event: "Tech Innovation Summit 2024",
      priority: "high",
      isUrgent: true,
      characterCount: 128,
      estimatedCost: 24.25,
      tags: ["reminder", "event-day", "urgent", "schedule"],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
      replyTo: "INFO",
      senderId: "TechSummit",
    },
    {
      id: 2,
      name: "Workshop Registration Open",
      message:
        "Exclusive workshops now available! Limited seats. Register now: https://techsummit2024.com/workshops",
      type: "Promotional",
      status: "sent",
      recipientCount: 485,
      sentCount: 485,
      deliveredCount: 481,
      failedCount: 4,
      deliveryRate: 99.2,
      createdAt: "2024-02-25T11:20:00Z",
      sentAt: "2024-02-25T12:00:00Z",
      scheduledAt: null,
      lastModified: "2024-02-25T11:45:00Z",
      createdBy: "Workshop Team",
      audience: "All Registered Attendees",
      event: "Tech Innovation Summit 2024",
      priority: "medium",
      isUrgent: false,
      characterCount: 98,
      estimatedCost: 24.25,
      tags: ["workshop", "registration", "promotional", "link"],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
      replyTo: "STOP",
      senderId: "TechSummit",
    },
    {
      id: 3,
      name: "Session Starting Soon",
      message:
        "AI & Machine Learning session starts in 15 minutes in Room A. Don't miss it!",
      type: "Alert",
      status: "sent",
      recipientCount: 120,
      sentCount: 120,
      deliveredCount: 119,
      failedCount: 1,
      deliveryRate: 99.2,
      createdAt: "2024-03-15T10:45:00Z",
      sentAt: "2024-03-15T10:45:00Z",
      scheduledAt: null,
      lastModified: "2024-03-15T10:40:00Z",
      createdBy: "Session Manager",
      audience: "AI Session Attendees",
      event: "Tech Innovation Summit 2024",
      priority: "high",
      isUrgent: true,
      characterCount: 89,
      estimatedCost: 6.0,
      tags: ["session", "alert", "ai", "urgent"],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
      replyTo: "STOP",
      senderId: "TechSummit",
    },
    {
      id: 4,
      name: "Weather Update",
      message:
        "Weather update: Light rain expected. Umbrellas available at registration desk. Event continues as planned.",
      type: "Informational",
      status: "sent",
      recipientCount: 485,
      sentCount: 485,
      deliveredCount: 484,
      failedCount: 1,
      deliveryRate: 99.8,
      createdAt: "2024-03-15T13:30:00Z",
      sentAt: "2024-03-15T13:30:00Z",
      scheduledAt: null,
      lastModified: "2024-03-15T13:25:00Z",
      createdBy: "Event Coordinator",
      audience: "All Attendees",
      event: "Tech Innovation Summit 2024",
      priority: "medium",
      isUrgent: false,
      characterCount: 125,
      estimatedCost: 24.25,
      tags: ["weather", "update", "informational", "umbrella"],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
      replyTo: "STOP",
      senderId: "TechSummit",
    },
    {
      id: 5,
      name: "Networking Break Reminder",
      message:
        "Networking break in 5 minutes! Head to the exhibition hall for coffee and connections. ☕",
      type: "Reminder",
      status: "scheduled",
      recipientCount: 485,
      sentCount: 0,
      deliveredCount: 0,
      failedCount: 0,
      deliveryRate: 0,
      createdAt: "2024-03-15T14:25:00Z",
      sentAt: null,
      scheduledAt: "2024-03-15T14:55:00Z",
      lastModified: "2024-03-15T14:30:00Z",
      createdBy: "Event Team",
      audience: "All Attendees",
      event: "Tech Innovation Summit 2024",
      priority: "medium",
      isUrgent: false,
      characterCount: 95,
      estimatedCost: 24.25,
      tags: ["networking", "break", "coffee", "scheduled"],
      isScheduled: true,
      isDraft: false,
      isArchived: false,
      replyTo: "STOP",
      senderId: "TechSummit",
    },
    {
      id: 6,
      name: "Emergency Evacuation",
      message:
        "EMERGENCY: Please evacuate the building immediately. Follow exit signs to the nearest emergency exit. Stay calm.",
      type: "Emergency",
      status: "sent",
      recipientCount: 485,
      sentCount: 485,
      deliveredCount: 485,
      failedCount: 0,
      deliveryRate: 100,
      createdAt: "2024-03-15T15:45:00Z",
      sentAt: "2024-03-15T15:45:00Z",
      scheduledAt: null,
      lastModified: "2024-03-15T15:45:00Z",
      createdBy: "Security Team",
      audience: "All Attendees",
      event: "Tech Innovation Summit 2024",
      priority: "critical",
      isUrgent: true,
      characterCount: 125,
      estimatedCost: 24.25,
      tags: ["emergency", "evacuation", "critical", "safety"],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
      replyTo: "INFO",
      senderId: "TechSummit",
    },
    {
      id: 7,
      name: "Feedback Request",
      message:
        "How was your Tech Summit experience? Share feedback: https://techsummit2024.com/feedback",
      type: "Feedback",
      status: "draft",
      recipientCount: 485,
      sentCount: 0,
      deliveredCount: 0,
      failedCount: 0,
      deliveryRate: 0,
      createdAt: "2024-03-16T18:00:00Z",
      sentAt: null,
      scheduledAt: null,
      lastModified: "2024-03-16T18:15:00Z",
      createdBy: "Feedback Team",
      audience: "All Attendees",
      event: "Tech Innovation Summit 2024",
      priority: "low",
      isUrgent: false,
      characterCount: 95,
      estimatedCost: 24.25,
      tags: ["feedback", "survey", "post-event", "link"],
      isScheduled: false,
      isDraft: true,
      isArchived: false,
      replyTo: "STOP",
      senderId: "TechSummit",
    },
    {
      id: 8,
      name: "VIP Welcome",
      message:
        "Welcome to Tech Summit 2024! Your VIP package includes exclusive access to the VIP lounge. Enjoy! 🎉",
      type: "Welcome",
      status: "sent",
      recipientCount: 50,
      sentCount: 50,
      deliveredCount: 50,
      failedCount: 0,
      deliveryRate: 100,
      createdAt: "2024-03-15T08:00:00Z",
      sentAt: "2024-03-15T08:00:00Z",
      scheduledAt: null,
      lastModified: "2024-03-15T07:45:00Z",
      createdBy: "VIP Team",
      audience: "VIP Attendees",
      event: "Tech Innovation Summit 2024",
      priority: "high",
      isUrgent: false,
      characterCount: 125,
      estimatedCost: 2.5,
      tags: ["welcome", "vip", "exclusive", "lounge"],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
      replyTo: "STOP",
      senderId: "TechSummit",
    },
  ];

  const statusOptions = [
    { value: "all", label: "All Status", count: notifications.length },
    {
      value: "sent",
      label: "Sent",
      count: notifications.filter((n) => n.status === "sent").length,
    },
    {
      value: "scheduled",
      label: "Scheduled",
      count: notifications.filter((n) => n.status === "scheduled").length,
    },
    {
      value: "draft",
      label: "Draft",
      count: notifications.filter((n) => n.status === "draft").length,
    },
    {
      value: "archived",
      label: "Archived",
      count: notifications.filter((n) => n.status === "archived").length,
    },
  ];

  const typeOptions = [
    { value: "all", label: "All Types", count: notifications.length },
    {
      value: "Reminder",
      label: "Reminder",
      count: notifications.filter((n) => n.type === "Reminder").length,
    },
    {
      value: "Promotional",
      label: "Promotional",
      count: notifications.filter((n) => n.type === "Promotional").length,
    },
    {
      value: "Alert",
      label: "Alert",
      count: notifications.filter((n) => n.type === "Alert").length,
    },
    {
      value: "Informational",
      label: "Informational",
      count: notifications.filter((n) => n.type === "Informational").length,
    },
    {
      value: "Emergency",
      label: "Emergency",
      count: notifications.filter((n) => n.type === "Emergency").length,
    },
    {
      value: "Feedback",
      label: "Feedback",
      count: notifications.filter((n) => n.type === "Feedback").length,
    },
    {
      value: "Welcome",
      label: "Welcome",
      count: notifications.filter((n) => n.type === "Welcome").length,
    },
  ];

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesStatus =
      statusFilter === "all" || notification.status === statusFilter;
    const matchesType =
      typeFilter === "all" || notification.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "sent":
        return "bg-green-100 text-green-800";
      case "scheduled":
        return "bg-blue-100 text-blue-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "sent":
        return <CheckCircle className="h-4 w-4" />;
      case "scheduled":
        return <Clock className="h-4 w-4" />;
      case "draft":
        return <Edit className="h-4 w-4" />;
      case "archived":
        return <Archive className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "Reminder":
        return <Bell className="h-4 w-4 text-blue-500" />;
      case "Promotional":
        return <Megaphone className="h-4 w-4 text-purple-500" />;
      case "Alert":
        return <AlertCircle className="h-4 w-4 text-orange-500" />;
      case "Informational":
        return <Info className="h-4 w-4 text-blue-500" />;
      case "Emergency":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case "Feedback":
        return <MessageSquare className="h-4 w-4 text-pink-500" />;
      case "Welcome":
        return <UserCheck className="h-4 w-4 text-green-500" />;
      default:
        return <Smartphone className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "critical":
        return "bg-red-100 text-red-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
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

  const handleSend = (notificationId) => {
    console.log(`Sending notification ${notificationId}`);
  };

  const handleEdit = (notificationId) => {
    console.log(`Editing notification ${notificationId}`);
  };

  const handleDuplicate = (notificationId) => {
    console.log(`Duplicating notification ${notificationId}`);
  };

  const handleArchive = (notificationId) => {
    console.log(`Archiving notification ${notificationId}`);
  };

  const handleDelete = (notificationId) => {
    console.log(`Deleting notification ${notificationId}`);
  };

  const handleBulkAction = (action) => {
    console.log(
      `Bulk action: ${action} for ${selectedNotifications.length} notifications`
    );
  };

  const handleCreateNotification = () => {
    console.log("Creating new notification");
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              SMS Notifications
            </h1>
            <p className="text-gray-600">
              Send and manage SMS notifications to event attendees
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleCreateNotification}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Send SMS
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center">
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
              <Smartphone className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total SMS</p>
              <p className="text-2xl font-bold text-gray-900">
                {notifications.length}
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
              <p className="text-sm font-medium text-gray-600">Sent</p>
              <p className="text-2xl font-bold text-gray-900">
                {notifications.filter((n) => n.status === "sent").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Scheduled</p>
              <p className="text-2xl font-bold text-gray-900">
                {notifications.filter((n) => n.status === "scheduled").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg. Delivery</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(
                  notifications
                    .filter((n) => n.status === "sent")
                    .reduce((sum, n) => sum + n.deliveryRate, 0) /
                    notifications.filter((n) => n.status === "sent").length
                ) || 0}
                %
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
                placeholder="Search notifications by name, message, or tags..."
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

          {/* Type Filter */}
          <div className="lg:w-48">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {typeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} ({option.count})
                </option>
              ))}
            </select>
          </div>

          {/* Bulk Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => handleBulkAction("send")}
              disabled={selectedNotifications.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Send
            </button>
            <button
              onClick={() => handleBulkAction("duplicate")}
              disabled={selectedNotifications.length === 0}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center"
            >
              <Copy className="h-4 w-4 mr-2" />
              Duplicate
            </button>
          </div>
        </div>
      </div>

      {/* Notifications Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedNotifications(
                          filteredNotifications.map((n) => n.id)
                        );
                      } else {
                        setSelectedNotifications([]);
                      }
                    }}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Notification
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recipients
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cost
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredNotifications.map((notification) => (
                <tr key={notification.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedNotifications.includes(notification.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedNotifications([
                            ...selectedNotifications,
                            notification.id,
                          ]);
                        } else {
                          setSelectedNotifications(
                            selectedNotifications.filter(
                              (id) => id !== notification.id
                            )
                          );
                        }
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Smartphone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {notification.name}
                        </div>
                        <div className="text-sm text-gray-500 max-w-xs truncate">
                          {notification.message}
                        </div>
                        <div className="text-xs text-gray-400">
                          {notification.audience}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getTypeIcon(notification.type)}
                      <span className="ml-2 text-sm text-gray-900">
                        {notification.type}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(
                          notification.priority
                        )}`}
                      >
                        {notification.priority}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        notification.status
                      )}`}
                    >
                      {getStatusIcon(notification.status)}
                      <span className="ml-1 capitalize">
                        {notification.status}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {notification.recipientCount.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {notification.sentCount > 0
                        ? `${notification.sentCount} sent`
                        : "Not sent"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {notification.status === "sent" ? (
                      <div className="text-sm">
                        <div className="text-gray-900">
                          {notification.deliveryRate}% delivered
                        </div>
                        <div className="text-xs text-gray-500">
                          {notification.deliveredCount} delivered •{" "}
                          {notification.failedCount} failed
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500">No data</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>{formatCurrency(notification.estimatedCost)}</div>
                    <div className="text-xs text-gray-500">
                      {notification.characterCount} chars
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(notification.id)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Edit Notification"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      {notification.status === "draft" && (
                        <button
                          onClick={() => handleSend(notification.id)}
                          className="text-green-600 hover:text-green-900"
                          title="Send Notification"
                        >
                          <Send className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        onClick={() => handleDuplicate(notification.id)}
                        className="text-purple-600 hover:text-purple-900"
                        title="Duplicate Notification"
                      >
                        <Copy className="h-4 w-4" />
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

      {/* Empty State */}
      {filteredNotifications.length === 0 && (
        <div className="text-center py-12">
          <Smartphone className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No notifications found
          </h3>
          <p className="text-gray-500 mb-4">
            {searchQuery || statusFilter !== "all" || typeFilter !== "all"
              ? "Try adjusting your filters or search terms"
              : "No notifications available for the selected criteria"}
          </p>
        </div>
      )}
    </div>
  );
};

export default SMSNotifications;
