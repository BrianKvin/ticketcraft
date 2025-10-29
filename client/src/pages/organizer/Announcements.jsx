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
  Pin,
  Globe,
  Monitor,
  Tablet,
  Smartphone as SmartphoneIcon,
} from "lucide-react";

const Announcements = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [selectedAnnouncements, setSelectedAnnouncements] = useState([]);

  // Comprehensive mock announcements data
  const announcements = [
    {
      id: 1,
      title: "Tech Summit 2024 - Event Day Schedule",
      content:
        "The complete schedule for Tech Innovation Summit 2024 is now available! Check your personalized agenda and don't miss any sessions. Download the event app for real-time updates and networking opportunities.",
      type: "Event Update",
      status: "published",
      priority: "high",
      visibility: "public",
      platforms: ["web", "mobile", "email"],
      audience: "All Attendees",
      event: "Tech Innovation Summit 2024",
      views: 1247,
      likes: 89,
      shares: 23,
      comments: 12,
      createdAt: "2024-03-14T15:30:00Z",
      publishedAt: "2024-03-14T16:00:00Z",
      lastModified: "2024-03-14T15:45:00Z",
      createdBy: "Event Team",
      isPinned: true,
      isUrgent: false,
      tags: ["schedule", "event", "app", "networking"],
      featuredImage:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=80",
      attachments: [
        { name: "Event Schedule.pdf", type: "PDF", size: "2.1 MB" },
        { name: "Venue Map.pdf", type: "PDF", size: "1.8 MB" },
      ],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
    },
    {
      id: 2,
      title: "Workshop Registration Now Open",
      content:
        "Exclusive hands-on workshops are now available for registration! Limited seats available for AI Implementation, Cloud Architecture, and Product Design workshops. Secure your spot today!",
      type: "Registration",
      status: "published",
      priority: "high",
      visibility: "public",
      platforms: ["web", "mobile", "email", "sms"],
      audience: "All Registered Attendees",
      event: "Tech Innovation Summit 2024",
      views: 892,
      likes: 156,
      shares: 45,
      comments: 28,
      createdAt: "2024-02-25T11:20:00Z",
      publishedAt: "2024-02-25T12:00:00Z",
      lastModified: "2024-02-25T11:45:00Z",
      createdBy: "Workshop Team",
      isPinned: false,
      isUrgent: true,
      tags: ["workshop", "registration", "hands-on", "exclusive"],
      featuredImage:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
      attachments: [
        { name: "Workshop Details.pdf", type: "PDF", size: "3.2 MB" },
      ],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
    },
    {
      id: 3,
      title: "Weather Update - Event Day",
      content:
        "Weather update for Tech Summit 2024: Light rain expected throughout the day. Umbrellas will be available at the registration desk. All indoor sessions will continue as planned. Stay dry and enjoy the event!",
      type: "Weather Update",
      status: "published",
      priority: "medium",
      visibility: "public",
      platforms: ["web", "mobile", "email", "sms"],
      audience: "All Attendees",
      event: "Tech Innovation Summit 2024",
      views: 634,
      likes: 23,
      shares: 8,
      comments: 5,
      createdAt: "2024-03-15T13:30:00Z",
      publishedAt: "2024-03-15T13:30:00Z",
      lastModified: "2024-03-15T13:25:00Z",
      createdBy: "Event Coordinator",
      isPinned: false,
      isUrgent: false,
      tags: ["weather", "update", "umbrella", "indoor"],
      featuredImage:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=400&q=80",
      attachments: [],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
    },
    {
      id: 4,
      title: "VIP Lounge Access Information",
      content:
        "VIP attendees can now access the exclusive VIP lounge on the 3rd floor. The lounge features premium seating, complimentary refreshments, and private networking areas. Show your VIP badge for entry.",
      type: "VIP Information",
      status: "published",
      priority: "medium",
      visibility: "private",
      platforms: ["web", "mobile", "email"],
      audience: "VIP Attendees",
      event: "Tech Innovation Summit 2024",
      views: 156,
      likes: 45,
      shares: 12,
      comments: 8,
      createdAt: "2024-03-15T08:00:00Z",
      publishedAt: "2024-03-15T08:00:00Z",
      lastModified: "2024-03-15T07:45:00Z",
      createdBy: "VIP Team",
      isPinned: false,
      isUrgent: false,
      tags: ["vip", "lounge", "exclusive", "networking"],
      featuredImage:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80",
      attachments: [
        { name: "VIP Lounge Map.pdf", type: "PDF", size: "1.5 MB" },
      ],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
    },
    {
      id: 5,
      title: "Emergency Procedures - Important",
      content:
        "In case of emergency, please follow these procedures: 1) Stay calm and listen to announcements 2) Follow exit signs to nearest emergency exit 3) Do not use elevators 4) Gather at the designated assembly point in the parking lot. Emergency contacts: Security (555-0199), Medical (555-0198).",
      type: "Emergency",
      status: "published",
      priority: "critical",
      visibility: "public",
      platforms: ["web", "mobile", "email", "sms", "display"],
      audience: "All Attendees",
      event: "Tech Innovation Summit 2024",
      views: 2341,
      likes: 12,
      shares: 156,
      comments: 3,
      createdAt: "2024-03-15T15:45:00Z",
      publishedAt: "2024-03-15T15:45:00Z",
      lastModified: "2024-03-15T15:45:00Z",
      createdBy: "Security Team",
      isPinned: true,
      isUrgent: true,
      tags: ["emergency", "procedures", "safety", "contacts"],
      featuredImage:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=400&q=80",
      attachments: [
        { name: "Emergency Procedures.pdf", type: "PDF", size: "2.8 MB" },
        { name: "Evacuation Routes.pdf", type: "PDF", size: "1.9 MB" },
      ],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
    },
    {
      id: 6,
      title: "Feedback Survey - Help Us Improve",
      content:
        "We value your feedback! Please take a few minutes to complete our post-event survey. Your input helps us make future events even better. Survey link: https://techsummit2024.com/feedback",
      type: "Feedback Request",
      status: "scheduled",
      priority: "low",
      visibility: "public",
      platforms: ["web", "mobile", "email"],
      audience: "All Attendees",
      event: "Tech Innovation Summit 2024",
      views: 0,
      likes: 0,
      shares: 0,
      comments: 0,
      createdAt: "2024-03-16T18:00:00Z",
      publishedAt: null,
      lastModified: "2024-03-16T18:15:00Z",
      createdBy: "Feedback Team",
      isPinned: false,
      isUrgent: false,
      tags: ["feedback", "survey", "improvement", "post-event"],
      featuredImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      attachments: [],
      isScheduled: true,
      isDraft: false,
      isArchived: false,
    },
    {
      id: 7,
      title: "Speaker Spotlight - Dr. Sarah Johnson",
      content:
        "Meet Dr. Sarah Johnson, our keynote speaker for Tech Innovation Summit 2024! Dr. Johnson is a leading expert in artificial intelligence and machine learning, with over 15 years of experience in the field. Don't miss her keynote presentation at 9:00 AM in the main hall.",
      type: "Speaker Spotlight",
      status: "published",
      priority: "medium",
      visibility: "public",
      platforms: ["web", "mobile", "email", "social"],
      audience: "All Attendees",
      event: "Tech Innovation Summit 2024",
      views: 567,
      likes: 78,
      shares: 34,
      comments: 15,
      createdAt: "2024-02-18T09:30:00Z",
      publishedAt: "2024-02-18T10:00:00Z",
      lastModified: "2024-02-18T09:45:00Z",
      createdBy: "Content Team",
      isPinned: false,
      isUrgent: false,
      tags: ["speaker", "keynote", "ai", "spotlight"],
      featuredImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
      attachments: [{ name: "Speaker Bio.pdf", type: "PDF", size: "1.2 MB" }],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
    },
    {
      id: 8,
      title: "Networking Break - Coffee & Connections",
      content:
        "Join us for a networking break in the exhibition hall! Enjoy complimentary coffee, tea, and light snacks while connecting with fellow attendees, speakers, and exhibitors. This is a great opportunity to expand your professional network.",
      type: "Networking",
      status: "draft",
      priority: "low",
      visibility: "public",
      platforms: ["web", "mobile"],
      audience: "All Attendees",
      event: "Tech Innovation Summit 2024",
      views: 0,
      likes: 0,
      shares: 0,
      comments: 0,
      createdAt: "2024-03-15T14:25:00Z",
      publishedAt: null,
      lastModified: "2024-03-15T14:30:00Z",
      createdBy: "Networking Team",
      isPinned: false,
      isUrgent: false,
      tags: ["networking", "coffee", "exhibition", "connections"],
      featuredImage:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80",
      attachments: [],
      isScheduled: false,
      isDraft: true,
      isArchived: false,
    },
  ];

  const statusOptions = [
    { value: "all", label: "All Status", count: announcements.length },
    {
      value: "published",
      label: "Published",
      count: announcements.filter((a) => a.status === "published").length,
    },
    {
      value: "scheduled",
      label: "Scheduled",
      count: announcements.filter((a) => a.status === "scheduled").length,
    },
    {
      value: "draft",
      label: "Draft",
      count: announcements.filter((a) => a.status === "draft").length,
    },
    {
      value: "archived",
      label: "Archived",
      count: announcements.filter((a) => a.status === "archived").length,
    },
  ];

  const typeOptions = [
    { value: "all", label: "All Types", count: announcements.length },
    {
      value: "Event Update",
      label: "Event Update",
      count: announcements.filter((a) => a.type === "Event Update").length,
    },
    {
      value: "Registration",
      label: "Registration",
      count: announcements.filter((a) => a.type === "Registration").length,
    },
    {
      value: "Weather Update",
      label: "Weather Update",
      count: announcements.filter((a) => a.type === "Weather Update").length,
    },
    {
      value: "VIP Information",
      label: "VIP Information",
      count: announcements.filter((a) => a.type === "VIP Information").length,
    },
    {
      value: "Emergency",
      label: "Emergency",
      count: announcements.filter((a) => a.type === "Emergency").length,
    },
    {
      value: "Feedback Request",
      label: "Feedback Request",
      count: announcements.filter((a) => a.type === "Feedback Request").length,
    },
    {
      value: "Speaker Spotlight",
      label: "Speaker Spotlight",
      count: announcements.filter((a) => a.type === "Speaker Spotlight").length,
    },
    {
      value: "Networking",
      label: "Networking",
      count: announcements.filter((a) => a.type === "Networking").length,
    },
  ];

  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesStatus =
      statusFilter === "all" || announcement.status === statusFilter;
    const matchesType =
      typeFilter === "all" || announcement.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "published":
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
      case "published":
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
      case "Event Update":
        return <Calendar className="h-4 w-4 text-blue-500" />;
      case "Registration":
        return <UserCheck className="h-4 w-4 text-green-500" />;
      case "Weather Update":
        return <Info className="h-4 w-4 text-blue-500" />;
      case "VIP Information":
        return <Star className="h-4 w-4 text-purple-500" />;
      case "Emergency":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case "Feedback Request":
        return <MessageSquare className="h-4 w-4 text-pink-500" />;
      case "Speaker Spotlight":
        return <User className="h-4 w-4 text-orange-500" />;
      case "Networking":
        return <Users className="h-4 w-4 text-indigo-500" />;
      default:
        return <Megaphone className="h-4 w-4 text-gray-500" />;
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

  const getVisibilityColor = (visibility) => {
    switch (visibility) {
      case "public":
        return "bg-green-100 text-green-800";
      case "private":
        return "bg-blue-100 text-blue-800";
      case "restricted":
        return "bg-yellow-100 text-yellow-800";
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

  const handlePublish = (announcementId) => {
    console.log(`Publishing announcement ${announcementId}`);
  };

  const handleEdit = (announcementId) => {
    console.log(`Editing announcement ${announcementId}`);
  };

  const handleDuplicate = (announcementId) => {
    console.log(`Duplicating announcement ${announcementId}`);
  };

  const handleArchive = (announcementId) => {
    console.log(`Archiving announcement ${announcementId}`);
  };

  const handleDelete = (announcementId) => {
    console.log(`Deleting announcement ${announcementId}`);
  };

  const handleBulkAction = (action) => {
    console.log(
      `Bulk action: ${action} for ${selectedAnnouncements.length} announcements`
    );
  };

  const handleCreateAnnouncement = () => {
    console.log("Creating new announcement");
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Announcements
            </h1>
            <p className="text-gray-600">
              Create and manage announcements for your events
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleCreateAnnouncement}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Announcement
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
              <Megaphone className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Announcements
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {announcements.length}
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
              <p className="text-sm font-medium text-gray-600">Published</p>
              <p className="text-2xl font-bold text-gray-900">
                {announcements.filter((a) => a.status === "published").length}
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
                {announcements.filter((a) => a.status === "scheduled").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Eye className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Views</p>
              <p className="text-2xl font-bold text-gray-900">
                {announcements
                  .reduce((sum, a) => sum + a.views, 0)
                  .toLocaleString()}
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
                placeholder="Search announcements by title, content, or tags..."
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
              onClick={() => handleBulkAction("publish")}
              disabled={selectedAnnouncements.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Publish
            </button>
            <button
              onClick={() => handleBulkAction("duplicate")}
              disabled={selectedAnnouncements.length === 0}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center"
            >
              <Copy className="h-4 w-4 mr-2" />
              Duplicate
            </button>
          </div>
        </div>
      </div>

      {/* Announcements Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredAnnouncements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Featured Image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <img
                src={announcement.featuredImage}
                alt={announcement.title}
                className="w-full h-48 object-cover"
              />
              {announcement.isPinned && (
                <div className="absolute top-2 left-2">
                  <Pin className="h-4 w-4 text-blue-600" />
                </div>
              )}
              {announcement.isUrgent && (
                <div className="absolute top-2 right-2">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(announcement.type)}
                  <span className="text-sm text-gray-500">
                    {announcement.type}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <button className="p-1 rounded text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                {announcement.title}
              </h3>

              {/* Content Preview */}
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                {announcement.content}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {announcement.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {announcement.tags.length > 3 && (
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                    +{announcement.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Status and Priority */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                    announcement.status
                  )}`}
                >
                  {getStatusIcon(announcement.status)}
                  <span className="ml-1 capitalize">{announcement.status}</span>
                </span>
                <span
                  className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(
                    announcement.priority
                  )}`}
                >
                  {announcement.priority}
                </span>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Eye className="h-3 w-3 mr-1" />
                    {announcement.views}
                  </span>
                  <span className="flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    {announcement.likes}
                  </span>
                  <span className="flex items-center">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    {announcement.comments}
                  </span>
                </div>
                <span
                  className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getVisibilityColor(
                    announcement.visibility
                  )}`}
                >
                  {announcement.visibility}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  {announcement.publishedAt
                    ? formatDateTime(announcement.publishedAt)
                    : formatDateTime(announcement.createdAt)}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(announcement.id)}
                    className="text-blue-600 hover:text-blue-900"
                    title="Edit Announcement"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  {announcement.status === "draft" && (
                    <button
                      onClick={() => handlePublish(announcement.id)}
                      className="text-green-600 hover:text-green-900"
                      title="Publish Announcement"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  )}
                  <button
                    onClick={() => handleDuplicate(announcement.id)}
                    className="text-purple-600 hover:text-purple-900"
                    title="Duplicate Announcement"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredAnnouncements.length === 0 && (
        <div className="text-center py-12">
          <Megaphone className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No announcements found
          </h3>
          <p className="text-gray-500 mb-4">
            {searchQuery || statusFilter !== "all" || typeFilter !== "all"
              ? "Try adjusting your filters or search terms"
              : "No announcements available for the selected criteria"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Announcements;
