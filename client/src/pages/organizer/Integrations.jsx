import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Plus,
  RefreshCw,
  Settings,
  Check,
  X,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Edit,
  Trash2,
  Copy,
  Share,
  Star,
  Heart,
  Bookmark,
  Tag,
  Filter as FilterIcon,
  Grid,
  List,
  Layout,
  Maximize,
  Minimize,
  RotateCcw,
  Zap,
  Target,
  BarChart3,
  PieChart,
  LineChart,
  TrendingUp,
  TrendingDown,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lock,
  Unlock,
  Key,
  Shield,
  Database,
  HardDrive,
  Cpu,
  MemoryStick,
  Globe,
  Mail,
  Smartphone,
  Bell,
  Megaphone,
  Calendar,
  Clock,
  User,
  Users,
  Eye,
  MoreVertical,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Upload,
  Download as DownloadIcon,
  Link,
  Link2,
  Unlink,
  Plug,
  PlugZap,
  Zap as ZapIcon,
  Power,
  PowerOff,
  ToggleLeft,
  ToggleRight,
  Sliders,
  SlidersHorizontal,
  Wrench,
  Hammer,
  Cog,
  Settings as SettingsIcon,
} from "lucide-react";

const Integrations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedIntegrations, setSelectedIntegrations] = useState([]);

  // Comprehensive mock integrations data
  const integrations = [
    {
      id: 1,
      name: "Mailchimp",
      description: "Email marketing automation and campaign management",
      category: "Email Marketing",
      status: "connected",
      icon: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=100&q=80",
      isPopular: true,
      isRecommended: true,
      rating: 4.8,
      users: 12500,
      lastUsed: "2024-03-15T10:30:00Z",
      connectedAt: "2024-02-01T09:15:00Z",
      features: [
        "Email Campaigns",
        "Audience Segmentation",
        "Automation Workflows",
        "Analytics & Reporting",
        "A/B Testing",
      ],
      pricing: "Free tier available",
      setupTime: "5 minutes",
      apiStatus: "active",
      syncStatus: "synced",
      lastSync: "2024-03-15T10:30:00Z",
      dataPoints: 15,
      isActive: true,
      permissions: ["read", "write", "admin"],
      webhookUrl: "https://api.eventify.com/webhooks/mailchimp",
      apiKey: "mc_****_****_****",
      version: "3.0",
      documentation: "https://developer.mailchimp.com/",
      support: "24/7",
    },
    {
      id: 2,
      name: "Stripe",
      description: "Payment processing and financial infrastructure",
      category: "Payments",
      status: "connected",
      icon: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=100&q=80",
      isPopular: true,
      isRecommended: true,
      rating: 4.9,
      users: 8900,
      lastUsed: "2024-03-15T14:22:00Z",
      connectedAt: "2024-01-15T11:30:00Z",
      features: [
        "Payment Processing",
        "Subscription Management",
        "Invoice Generation",
        "Financial Reporting",
        "Fraud Protection",
      ],
      pricing: "2.9% + 30¢ per transaction",
      setupTime: "10 minutes",
      apiStatus: "active",
      syncStatus: "synced",
      lastSync: "2024-03-15T14:22:00Z",
      dataPoints: 25,
      isActive: true,
      permissions: ["read", "write"],
      webhookUrl: "https://api.eventify.com/webhooks/stripe",
      apiKey: "sk_****_****_****",
      version: "2020-08-27",
      documentation: "https://stripe.com/docs",
      support: "24/7",
    },
    {
      id: 3,
      name: "Slack",
      description: "Team communication and collaboration platform",
      category: "Communication",
      status: "connected",
      icon: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=100&q=80",
      isPopular: true,
      isRecommended: false,
      rating: 4.6,
      users: 6700,
      lastUsed: "2024-03-14T16:45:00Z",
      connectedAt: "2024-02-20T13:20:00Z",
      features: [
        "Team Messaging",
        "File Sharing",
        "Video Calls",
        "App Integrations",
        "Workflow Automation",
      ],
      pricing: "Free tier available",
      setupTime: "3 minutes",
      apiStatus: "active",
      syncStatus: "synced",
      lastSync: "2024-03-14T16:45:00Z",
      dataPoints: 8,
      isActive: true,
      permissions: ["read", "write"],
      webhookUrl: "https://api.eventify.com/webhooks/slack",
      apiKey: "xoxb-****-****-****",
      version: "1.0",
      documentation: "https://api.slack.com/",
      support: "Business hours",
    },
    {
      id: 4,
      name: "Google Analytics",
      description: "Web analytics and performance tracking",
      category: "Analytics",
      status: "connected",
      icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80",
      isPopular: true,
      isRecommended: true,
      rating: 4.7,
      users: 15200,
      lastUsed: "2024-03-15T09:15:00Z",
      connectedAt: "2024-01-10T08:45:00Z",
      features: [
        "Traffic Analysis",
        "Conversion Tracking",
        "Audience Insights",
        "Custom Reports",
        "Real-time Data",
      ],
      pricing: "Free",
      setupTime: "15 minutes",
      apiStatus: "active",
      syncStatus: "synced",
      lastSync: "2024-03-15T09:15:00Z",
      dataPoints: 50,
      isActive: true,
      permissions: ["read"],
      webhookUrl: "https://api.eventify.com/webhooks/ga",
      apiKey: "AIza****_****_****",
      version: "4.0",
      documentation: "https://developers.google.com/analytics",
      support: "Community",
    },
    {
      id: 5,
      name: "Zoom",
      description: "Video conferencing and webinar platform",
      category: "Video Conferencing",
      status: "disconnected",
      icon: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=100&q=80",
      isPopular: true,
      isRecommended: false,
      rating: 4.5,
      users: 4200,
      lastUsed: "2024-03-10T11:30:00Z",
      connectedAt: null,
      features: [
        "Video Meetings",
        "Webinars",
        "Screen Sharing",
        "Recording",
        "Breakout Rooms",
      ],
      pricing: "Free tier available",
      setupTime: "8 minutes",
      apiStatus: "inactive",
      syncStatus: "not_synced",
      lastSync: null,
      dataPoints: 12,
      isActive: false,
      permissions: [],
      webhookUrl: null,
      apiKey: null,
      version: "2.0",
      documentation: "https://marketplace.zoom.us/docs/api-reference",
      support: "24/7",
    },
    {
      id: 6,
      name: "HubSpot",
      description: "CRM and marketing automation platform",
      category: "CRM",
      status: "pending",
      icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80",
      isPopular: false,
      isRecommended: true,
      rating: 4.4,
      users: 3200,
      lastUsed: null,
      connectedAt: null,
      features: [
        "Contact Management",
        "Lead Scoring",
        "Email Marketing",
        "Sales Pipeline",
        "Marketing Automation",
      ],
      pricing: "Free tier available",
      setupTime: "20 minutes",
      apiStatus: "pending",
      syncStatus: "not_synced",
      lastSync: null,
      dataPoints: 30,
      isActive: false,
      permissions: [],
      webhookUrl: null,
      apiKey: null,
      version: "3.0",
      documentation: "https://developers.hubspot.com/",
      support: "Business hours",
    },
    {
      id: 7,
      name: "Twilio",
      description: "SMS and voice communication platform",
      category: "SMS/Voice",
      status: "connected",
      icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80",
      isPopular: false,
      isRecommended: false,
      rating: 4.3,
      users: 1800,
      lastUsed: "2024-03-15T12:10:00Z",
      connectedAt: "2024-02-28T14:30:00Z",
      features: [
        "SMS Messaging",
        "Voice Calls",
        "WhatsApp Business",
        "Email Delivery",
        "Phone Verification",
      ],
      pricing: "Pay per use",
      setupTime: "12 minutes",
      apiStatus: "active",
      syncStatus: "synced",
      lastSync: "2024-03-15T12:10:00Z",
      dataPoints: 6,
      isActive: true,
      permissions: ["read", "write"],
      webhookUrl: "https://api.eventify.com/webhooks/twilio",
      apiKey: "AC****_****_****",
      version: "2010-04-01",
      documentation: "https://www.twilio.com/docs",
      support: "24/7",
    },
    {
      id: 8,
      name: "Salesforce",
      description: "Customer relationship management platform",
      category: "CRM",
      status: "error",
      icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80",
      isPopular: true,
      isRecommended: true,
      rating: 4.2,
      users: 5600,
      lastUsed: "2024-03-12T15:20:00Z",
      connectedAt: "2024-01-25T10:15:00Z",
      features: [
        "Lead Management",
        "Opportunity Tracking",
        "Contact Management",
        "Sales Forecasting",
        "Custom Objects",
      ],
      pricing: "Starting at $25/user/month",
      setupTime: "30 minutes",
      apiStatus: "error",
      syncStatus: "error",
      lastSync: "2024-03-12T15:20:00Z",
      dataPoints: 40,
      isActive: false,
      permissions: ["read"],
      webhookUrl: "https://api.eventify.com/webhooks/salesforce",
      apiKey: "00D****_****_****",
      version: "58.0",
      documentation: "https://developer.salesforce.com/",
      support: "24/7",
    },
  ];

  const categories = [
    "Email Marketing",
    "Payments",
    "Communication",
    "Analytics",
    "Video Conferencing",
    "CRM",
    "SMS/Voice",
    "Social Media",
    "Project Management",
    "File Storage",
  ];

  const statusOptions = [
    { value: "all", label: "All Status", count: integrations.length },
    {
      value: "connected",
      label: "Connected",
      count: integrations.filter((i) => i.status === "connected").length,
    },
    {
      value: "disconnected",
      label: "Disconnected",
      count: integrations.filter((i) => i.status === "disconnected").length,
    },
    {
      value: "pending",
      label: "Pending",
      count: integrations.filter((i) => i.status === "pending").length,
    },
    {
      value: "error",
      label: "Error",
      count: integrations.filter((i) => i.status === "error").length,
    },
  ];

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch =
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      integration.features.some((feature) =>
        feature.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory =
      categoryFilter === "all" || integration.category === categoryFilter;
    const matchesStatus =
      statusFilter === "all" || integration.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "connected":
        return "bg-green-100 text-green-800";
      case "disconnected":
        return "bg-gray-100 text-gray-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "error":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="h-4 w-4" />;
      case "disconnected":
        return <XCircle className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "error":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getSyncStatusColor = (syncStatus) => {
    switch (syncStatus) {
      case "synced":
        return "bg-green-100 text-green-800";
      case "not_synced":
        return "bg-gray-100 text-gray-800";
      case "error":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
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

  const handleConnect = (integrationId) => {
    console.log(`Connecting integration ${integrationId}`);
  };

  const handleDisconnect = (integrationId) => {
    console.log(`Disconnecting integration ${integrationId}`);
  };

  const handleConfigure = (integrationId) => {
    console.log(`Configuring integration ${integrationId}`);
  };

  const handleTest = (integrationId) => {
    console.log(`Testing integration ${integrationId}`);
  };

  const handleBulkAction = (action) => {
    console.log(
      `Bulk action: ${action} for ${selectedIntegrations.length} integrations`
    );
  };

  const handleCreateIntegration = () => {
    console.log("Creating new integration");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Integrations
            </h1>
            <p className="text-gray-600">
              Connect and manage third-party services and APIs
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleCreateIntegration}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Integration
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export List
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
              <Plug className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Integrations
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {integrations.length}
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
              <p className="text-sm font-medium text-gray-600">Connected</p>
              <p className="text-2xl font-bold text-gray-900">
                {integrations.filter((i) => i.status === "connected").length}
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
                {integrations.filter((i) => i.status === "pending").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active</p>
              <p className="text-2xl font-bold text-gray-900">
                {integrations.filter((i) => i.isActive).length}
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
                placeholder="Search integrations by name, description, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="lg:w-48">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
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

          {/* Bulk Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => handleBulkAction("connect")}
              disabled={selectedIntegrations.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
            >
              <Plug className="h-4 w-4 mr-2" />
              Connect
            </button>
            <button
              onClick={() => handleBulkAction("disconnect")}
              disabled={selectedIntegrations.length === 0}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 flex items-center"
            >
              <Unlink className="h-4 w-4 mr-2" />
              Disconnect
            </button>
          </div>
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration) => (
          <div
            key={integration.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <img
                    src={integration.icon}
                    alt={integration.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900 flex items-center">
                      {integration.name}
                      {integration.isPopular && (
                        <Star className="h-4 w-4 text-yellow-500 ml-1" />
                      )}
                      {integration.isRecommended && (
                        <Heart className="h-4 w-4 text-red-500 ml-1" />
                      )}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {integration.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      integration.status
                    )}`}
                  >
                    {getStatusIcon(integration.status)}
                    <span className="ml-1 capitalize">
                      {integration.status}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {integration.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-700 mb-2">
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-1">
                  {integration.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {integration.features.length > 3 && (
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                      +{integration.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-500">
                <div>
                  <div className="font-medium">Rating</div>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-500 mr-1" />
                    {integration.rating}
                  </div>
                </div>
                <div>
                  <div className="font-medium">Users</div>
                  <div>{integration.users.toLocaleString()}</div>
                </div>
                <div>
                  <div className="font-medium">Setup Time</div>
                  <div>{integration.setupTime}</div>
                </div>
                <div>
                  <div className="font-medium">Pricing</div>
                  <div className="truncate">{integration.pricing}</div>
                </div>
              </div>

              {/* Sync Status */}
              {integration.status === "connected" && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Sync Status</span>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getSyncStatusColor(
                        integration.syncStatus
                      )}`}
                    >
                      {integration.syncStatus.replace("_", " ")}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Last sync: {formatDateTime(integration.lastSync)}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  {integration.status === "connected" ? (
                    <span>
                      Connected {formatDateTime(integration.connectedAt)}
                    </span>
                  ) : (
                    <span>Not connected</span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {integration.status === "connected" ? (
                    <>
                      <button
                        onClick={() => handleConfigure(integration.id)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Configure"
                      >
                        <Settings className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleTest(integration.id)}
                        className="text-green-600 hover:text-green-900"
                        title="Test Connection"
                      >
                        <Zap className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDisconnect(integration.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Disconnect"
                      >
                        <Unlink className="h-4 w-4" />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleConnect(integration.id)}
                      className="px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 flex items-center"
                    >
                      <Plug className="h-3 w-3 mr-1" />
                      Connect
                    </button>
                  )}
                  <button className="text-gray-600 hover:text-gray-900">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredIntegrations.length === 0 && (
        <div className="text-center py-12">
          <Plug className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No integrations found
          </h3>
          <p className="text-gray-500 mb-4">
            {searchQuery || categoryFilter !== "all" || statusFilter !== "all"
              ? "Try adjusting your filters or search terms"
              : "No integrations available for the selected criteria"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Integrations;
