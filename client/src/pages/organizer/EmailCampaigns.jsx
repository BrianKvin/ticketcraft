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

const EmailCampaigns = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [selectedCampaigns, setSelectedCampaigns] = useState([]);

  // Comprehensive mock email campaigns data
  const campaigns = [
    {
      id: 1,
      name: "Tech Summit 2024 - Welcome Email",
      subject: "Welcome to Tech Innovation Summit 2024!",
      type: "Welcome",
      status: "sent",
      recipientCount: 485,
      sentCount: 485,
      deliveredCount: 482,
      openedCount: 387,
      clickedCount: 156,
      bouncedCount: 3,
      unsubscribedCount: 2,
      openRate: 80.3,
      clickRate: 32.2,
      bounceRate: 0.6,
      unsubscribeRate: 0.4,
      createdAt: "2024-02-15T10:30:00Z",
      sentAt: "2024-02-15T11:00:00Z",
      scheduledAt: null,
      lastModified: "2024-02-15T10:45:00Z",
      createdBy: "Sarah Johnson",
      template: "Welcome Template v2.1",
      audience: "All Registered Attendees",
      event: "Tech Innovation Summit 2024",
      content:
        "Welcome to the most exciting tech event of the year! We're thrilled to have you join us for Tech Innovation Summit 2024. Get ready for an incredible experience filled with cutting-edge insights, networking opportunities, and hands-on workshops.",
      previewText:
        "Get ready for an incredible experience filled with cutting-edge insights...",
      tags: ["welcome", "tech", "summit", "attendees"],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
      priority: "high",
      replyTo: "noreply@techsummit2024.com",
      fromName: "Tech Summit Team",
      fromEmail: "team@techsummit2024.com",
    },
    {
      id: 2,
      name: "Event Reminder - 1 Week Before",
      subject: "Tech Summit 2024: One Week to Go! 🚀",
      type: "Reminder",
      status: "scheduled",
      recipientCount: 485,
      sentCount: 0,
      deliveredCount: 0,
      openedCount: 0,
      clickedCount: 0,
      bouncedCount: 0,
      unsubscribedCount: 0,
      openRate: 0,
      clickRate: 0,
      bounceRate: 0,
      unsubscribeRate: 0,
      createdAt: "2024-02-20T14:15:00Z",
      sentAt: null,
      scheduledAt: "2024-03-08T09:00:00Z",
      lastModified: "2024-02-20T14:30:00Z",
      createdBy: "Marketing Team",
      template: "Reminder Template v1.5",
      audience: "All Registered Attendees",
      event: "Tech Innovation Summit 2024",
      content:
        "The countdown is on! Tech Innovation Summit 2024 is just one week away. Don't forget to check your schedule, download the event app, and prepare for an amazing experience. See you soon!",
      previewText:
        "The countdown is on! Tech Innovation Summit 2024 is just one week away...",
      tags: ["reminder", "countdown", "preparation", "app"],
      isScheduled: true,
      isDraft: false,
      isArchived: false,
      priority: "medium",
      replyTo: "noreply@techsummit2024.com",
      fromName: "Tech Summit Team",
      fromEmail: "team@techsummit2024.com",
    },
    {
      id: 3,
      name: "Speaker Spotlight - Dr. Sarah Johnson",
      subject: "Meet Our Keynote Speaker: Dr. Sarah Johnson",
      type: "Promotional",
      status: "sent",
      recipientCount: 485,
      sentCount: 485,
      deliveredCount: 483,
      openedCount: 298,
      clickedCount: 89,
      bouncedCount: 2,
      unsubscribedCount: 1,
      openRate: 61.7,
      clickRate: 18.4,
      bounceRate: 0.4,
      unsubscribeRate: 0.2,
      createdAt: "2024-02-18T09:30:00Z",
      sentAt: "2024-02-18T10:00:00Z",
      scheduledAt: null,
      lastModified: "2024-02-18T09:45:00Z",
      createdBy: "Content Team",
      template: "Speaker Spotlight Template v1.2",
      audience: "All Registered Attendees",
      event: "Tech Innovation Summit 2024",
      content:
        "We're excited to introduce Dr. Sarah Johnson, our keynote speaker for Tech Innovation Summit 2024. Dr. Johnson is a leading expert in artificial intelligence and machine learning, with over 15 years of experience in the field.",
      previewText:
        "We're excited to introduce Dr. Sarah Johnson, our keynote speaker...",
      tags: ["speaker", "keynote", "ai", "spotlight"],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
      priority: "medium",
      replyTo: "noreply@techsummit2024.com",
      fromName: "Tech Summit Team",
      fromEmail: "team@techsummit2024.com",
    },
    {
      id: 4,
      name: "Post-Event Thank You",
      subject: "Thank You for Attending Tech Summit 2024!",
      type: "Follow-up",
      status: "draft",
      recipientCount: 485,
      sentCount: 0,
      deliveredCount: 0,
      openedCount: 0,
      clickedCount: 0,
      bouncedCount: 0,
      unsubscribedCount: 0,
      openRate: 0,
      clickRate: 0,
      bounceRate: 0,
      unsubscribeRate: 0,
      createdAt: "2024-03-16T16:00:00Z",
      sentAt: null,
      scheduledAt: null,
      lastModified: "2024-03-16T16:30:00Z",
      createdBy: "Event Team",
      template: "Thank You Template v1.0",
      audience: "All Attendees",
      event: "Tech Innovation Summit 2024",
      content:
        "Thank you for making Tech Innovation Summit 2024 an incredible success! We hope you enjoyed the sessions, networking opportunities, and insights shared by our amazing speakers. We'd love to hear your feedback.",
      previewText:
        "Thank you for making Tech Innovation Summit 2024 an incredible success...",
      tags: ["thank-you", "feedback", "post-event", "follow-up"],
      isScheduled: false,
      isDraft: true,
      isArchived: false,
      priority: "low",
      replyTo: "feedback@techsummit2024.com",
      fromName: "Tech Summit Team",
      fromEmail: "team@techsummit2024.com",
    },
    {
      id: 5,
      name: "Workshop Registration Open",
      subject: "Exclusive Workshops Now Available for Registration",
      type: "Promotional",
      status: "sent",
      recipientCount: 485,
      sentCount: 485,
      deliveredCount: 481,
      openedCount: 234,
      clickedCount: 67,
      bouncedCount: 4,
      unsubscribedCount: 0,
      openRate: 48.6,
      clickRate: 13.9,
      bounceRate: 0.8,
      unsubscribeRate: 0,
      createdAt: "2024-02-25T11:20:00Z",
      sentAt: "2024-02-25T12:00:00Z",
      scheduledAt: null,
      lastModified: "2024-02-25T11:45:00Z",
      createdBy: "Workshop Team",
      template: "Workshop Template v2.0",
      audience: "All Registered Attendees",
      event: "Tech Innovation Summit 2024",
      content:
        "Don't miss out on our exclusive hands-on workshops! Registration is now open for limited-seat workshops covering topics like AI implementation, cloud architecture, and product design. Secure your spot today!",
      previewText:
        "Don't miss out on our exclusive hands-on workshops! Registration is now open...",
      tags: ["workshop", "registration", "hands-on", "exclusive"],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
      priority: "high",
      replyTo: "workshops@techsummit2024.com",
      fromName: "Tech Summit Team",
      fromEmail: "team@techsummit2024.com",
    },
    {
      id: 6,
      name: "Last Chance - Early Bird Pricing",
      subject: "Last Chance: Early Bird Pricing Ends Tomorrow!",
      type: "Promotional",
      status: "sent",
      recipientCount: 1200,
      sentCount: 1200,
      deliveredCount: 1195,
      openedCount: 456,
      clickedCount: 123,
      bouncedCount: 5,
      unsubscribedCount: 3,
      openRate: 38.2,
      clickRate: 10.3,
      bounceRate: 0.4,
      unsubscribeRate: 0.3,
      createdAt: "2024-01-15T08:00:00Z",
      sentAt: "2024-01-15T09:00:00Z",
      scheduledAt: null,
      lastModified: "2024-01-15T08:30:00Z",
      createdBy: "Marketing Team",
      template: "Urgency Template v1.8",
      audience: "All Prospects",
      event: "Tech Innovation Summit 2024",
      content:
        "This is your last chance to secure early bird pricing for Tech Innovation Summit 2024! Prices increase tomorrow, so don't wait. Join industry leaders and innovators for the most anticipated tech event of the year.",
      previewText:
        "This is your last chance to secure early bird pricing for Tech Innovation Summit 2024...",
      tags: ["early-bird", "pricing", "urgency", "deadline"],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
      priority: "high",
      replyTo: "tickets@techsummit2024.com",
      fromName: "Tech Summit Team",
      fromEmail: "team@techsummit2024.com",
    },
    {
      id: 7,
      name: "Event Day Schedule",
      subject: "Your Tech Summit 2024 Schedule is Ready!",
      type: "Informational",
      status: "sent",
      recipientCount: 485,
      sentCount: 485,
      deliveredCount: 484,
      openedCount: 412,
      clickedCount: 198,
      bouncedCount: 1,
      unsubscribedCount: 0,
      openRate: 85.1,
      clickRate: 40.9,
      bounceRate: 0.2,
      unsubscribeRate: 0,
      createdAt: "2024-03-14T15:30:00Z",
      sentAt: "2024-03-14T16:00:00Z",
      scheduledAt: null,
      lastModified: "2024-03-14T15:45:00Z",
      createdBy: "Event Team",
      template: "Schedule Template v1.3",
      audience: "All Registered Attendees",
      event: "Tech Innovation Summit 2024",
      content:
        "Your personalized schedule for Tech Summit 2024 is now available! Check out the sessions you've registered for, networking opportunities, and special events. Download the event app for real-time updates.",
      previewText:
        "Your personalized schedule for Tech Summit 2024 is now available...",
      tags: ["schedule", "personalized", "app", "sessions"],
      isScheduled: false,
      isDraft: false,
      isArchived: false,
      priority: "high",
      replyTo: "info@techsummit2024.com",
      fromName: "Tech Summit Team",
      fromEmail: "team@techsummit2024.com",
    },
    {
      id: 8,
      name: "Feedback Request",
      subject: "Help Us Improve: Share Your Tech Summit Experience",
      type: "Feedback",
      status: "scheduled",
      recipientCount: 485,
      sentCount: 0,
      deliveredCount: 0,
      openedCount: 0,
      clickedCount: 0,
      bouncedCount: 0,
      unsubscribedCount: 0,
      openRate: 0,
      clickRate: 0,
      bounceRate: 0,
      unsubscribeRate: 0,
      createdAt: "2024-03-16T18:00:00Z",
      sentAt: null,
      scheduledAt: "2024-03-17T10:00:00Z",
      lastModified: "2024-03-16T18:15:00Z",
      createdBy: "Feedback Team",
      template: "Feedback Template v1.1",
      audience: "All Attendees",
      event: "Tech Innovation Summit 2024",
      content:
        "We hope you had an amazing time at Tech Innovation Summit 2024! Your feedback is invaluable to us and helps us make future events even better. Please take a few minutes to share your experience.",
      previewText:
        "We hope you had an amazing time at Tech Innovation Summit 2024...",
      tags: ["feedback", "survey", "improvement", "experience"],
      isScheduled: true,
      isDraft: false,
      isArchived: false,
      priority: "medium",
      replyTo: "feedback@techsummit2024.com",
      fromName: "Tech Summit Team",
      fromEmail: "team@techsummit2024.com",
    },
  ];

  const statusOptions = [
    { value: "all", label: "All Status", count: campaigns.length },
    {
      value: "sent",
      label: "Sent",
      count: campaigns.filter((c) => c.status === "sent").length,
    },
    {
      value: "scheduled",
      label: "Scheduled",
      count: campaigns.filter((c) => c.status === "scheduled").length,
    },
    {
      value: "draft",
      label: "Draft",
      count: campaigns.filter((c) => c.status === "draft").length,
    },
    {
      value: "archived",
      label: "Archived",
      count: campaigns.filter((c) => c.status === "archived").length,
    },
  ];

  const typeOptions = [
    { value: "all", label: "All Types", count: campaigns.length },
    {
      value: "Welcome",
      label: "Welcome",
      count: campaigns.filter((c) => c.type === "Welcome").length,
    },
    {
      value: "Reminder",
      label: "Reminder",
      count: campaigns.filter((c) => c.type === "Reminder").length,
    },
    {
      value: "Promotional",
      label: "Promotional",
      count: campaigns.filter((c) => c.type === "Promotional").length,
    },
    {
      value: "Follow-up",
      label: "Follow-up",
      count: campaigns.filter((c) => c.type === "Follow-up").length,
    },
    {
      value: "Informational",
      label: "Informational",
      count: campaigns.filter((c) => c.type === "Informational").length,
    },
    {
      value: "Feedback",
      label: "Feedback",
      count: campaigns.filter((c) => c.type === "Feedback").length,
    },
  ];

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch =
      campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesStatus =
      statusFilter === "all" || campaign.status === statusFilter;
    const matchesType = typeFilter === "all" || campaign.type === typeFilter;

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
      case "Welcome":
        return <UserCheck className="h-4 w-4 text-green-500" />;
      case "Reminder":
        return <Bell className="h-4 w-4 text-blue-500" />;
      case "Promotional":
        return <Megaphone className="h-4 w-4 text-purple-500" />;
      case "Follow-up":
        return <MessageSquare className="h-4 w-4 text-orange-500" />;
      case "Informational":
        return <Info className="h-4 w-4 text-blue-500" />;
      case "Feedback":
        return <MessageSquare className="h-4 w-4 text-pink-500" />;
      default:
        return <Mail className="h-4 w-4 text-gray-500" />;
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

  const handleSend = (campaignId) => {
    console.log(`Sending campaign ${campaignId}`);
  };

  const handleEdit = (campaignId) => {
    console.log(`Editing campaign ${campaignId}`);
  };

  const handleDuplicate = (campaignId) => {
    console.log(`Duplicating campaign ${campaignId}`);
  };

  const handleArchive = (campaignId) => {
    console.log(`Archiving campaign ${campaignId}`);
  };

  const handleDelete = (campaignId) => {
    console.log(`Deleting campaign ${campaignId}`);
  };

  const handleBulkAction = (action) => {
    console.log(
      `Bulk action: ${action} for ${selectedCampaigns.length} campaigns`
    );
  };

  const handleCreateCampaign = () => {
    console.log("Creating new campaign");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Email Campaigns
            </h1>
            <p className="text-gray-600">
              Create, manage, and track email campaigns for your events
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleCreateCampaign}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Campaign
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
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Campaigns
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {campaigns.length}
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
                {campaigns.filter((c) => c.status === "sent").length}
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
                {campaigns.filter((c) => c.status === "scheduled").length}
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
              <p className="text-sm font-medium text-gray-600">
                Avg. Open Rate
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(
                  campaigns
                    .filter((c) => c.status === "sent")
                    .reduce((sum, c) => sum + c.openRate, 0) /
                    campaigns.filter((c) => c.status === "sent").length
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
                placeholder="Search campaigns by name, subject, or tags..."
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
              disabled={selectedCampaigns.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Send
            </button>
            <button
              onClick={() => handleBulkAction("duplicate")}
              disabled={selectedCampaigns.length === 0}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center"
            >
              <Copy className="h-4 w-4 mr-2" />
              Duplicate
            </button>
          </div>
        </div>
      </div>

      {/* Campaigns Table */}
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
                        setSelectedCampaigns(
                          filteredCampaigns.map((c) => c.id)
                        );
                      } else {
                        setSelectedCampaigns([]);
                      }
                    }}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign
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
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCampaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedCampaigns.includes(campaign.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCampaigns([
                            ...selectedCampaigns,
                            campaign.id,
                          ]);
                        } else {
                          setSelectedCampaigns(
                            selectedCampaigns.filter((id) => id !== campaign.id)
                          );
                        }
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {campaign.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {campaign.subject}
                        </div>
                        <div className="text-xs text-gray-400">
                          {campaign.audience}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getTypeIcon(campaign.type)}
                      <span className="ml-2 text-sm text-gray-900">
                        {campaign.type}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        campaign.status
                      )}`}
                    >
                      {getStatusIcon(campaign.status)}
                      <span className="ml-1 capitalize">{campaign.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {campaign.recipientCount.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {campaign.sentCount > 0
                        ? `${campaign.sentCount} sent`
                        : "Not sent"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {campaign.status === "sent" ? (
                      <div className="text-sm">
                        <div className="text-gray-900">
                          {campaign.openRate}% open • {campaign.clickRate}%
                          click
                        </div>
                        <div className="text-xs text-gray-500">
                          {campaign.openedCount} opened •{" "}
                          {campaign.clickedCount} clicked
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500">No data</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>
                      {campaign.sentAt
                        ? formatDateTime(campaign.sentAt)
                        : campaign.scheduledAt
                        ? `Scheduled: ${formatDateTime(campaign.scheduledAt)}`
                        : formatDateTime(campaign.createdAt)}
                    </div>
                    <div className="text-xs text-gray-500">
                      by {campaign.createdBy}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(campaign.id)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Edit Campaign"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      {campaign.status === "draft" && (
                        <button
                          onClick={() => handleSend(campaign.id)}
                          className="text-green-600 hover:text-green-900"
                          title="Send Campaign"
                        >
                          <Send className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        onClick={() => handleDuplicate(campaign.id)}
                        className="text-purple-600 hover:text-purple-900"
                        title="Duplicate Campaign"
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
      {filteredCampaigns.length === 0 && (
        <div className="text-center py-12">
          <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No campaigns found
          </h3>
          <p className="text-gray-500 mb-4">
            {searchQuery || statusFilter !== "all" || typeFilter !== "all"
              ? "Try adjusting your filters or search terms"
              : "No campaigns available for the selected criteria"}
          </p>
        </div>
      )}
    </div>
  );
};

export default EmailCampaigns;

