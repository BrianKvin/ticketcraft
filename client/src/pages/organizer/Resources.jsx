import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  Plus,
  RefreshCw,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  Folder,
  Link,
  Share,
  Copy,
  Star,
  Clock,
  User,
  Calendar,
  Tag,
  BookOpen,
  Presentation,
  FileSpreadsheet,
  Code,
  FolderOpen,
  Download as DownloadIcon,
  Upload as UploadIcon,
  ExternalLink,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  HelpCircle,
  Settings,
  Grid,
  List,
  SortAsc,
  SortDesc,
} from "lucide-react";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedResources, setSelectedResources] = useState([]);

  // Comprehensive mock resources data
  const resources = [
    {
      id: 1,
      name: "Tech Summit 2024 - Speaker Guidelines",
      description:
        "Comprehensive guidelines for speakers including presentation requirements, technical setup, and best practices.",
      category: "Speaker Resources",
      type: "PDF",
      size: "2.4 MB",
      uploadDate: "2024-02-15T10:30:00Z",
      lastModified: "2024-02-20T14:15:00Z",
      uploadedBy: "Sarah Johnson",
      status: "published",
      downloadCount: 45,
      isPublic: true,
      tags: ["speakers", "guidelines", "presentation", "tech"],
      fileUrl: "/resources/speaker-guidelines.pdf",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80",
      version: "2.1",
      isStarred: true,
      isShared: true,
      sharedWith: ["All Speakers", "Event Team"],
      permissions: "read",
      event: "Tech Innovation Summit 2024",
      folder: "Speaker Resources",
    },
    {
      id: 2,
      name: "Event Branding Kit",
      description:
        "Complete branding package including logos, color schemes, templates, and style guides for the event.",
      category: "Marketing",
      type: "ZIP",
      size: "15.8 MB",
      uploadDate: "2024-01-20T09:15:00Z",
      lastModified: "2024-02-10T16:45:00Z",
      uploadedBy: "Marketing Team",
      status: "published",
      downloadCount: 128,
      isPublic: true,
      tags: ["branding", "marketing", "logos", "templates"],
      fileUrl: "/resources/branding-kit.zip",
      thumbnail:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80",
      version: "1.3",
      isStarred: true,
      isShared: true,
      sharedWith: ["All Staff", "Partners"],
      permissions: "read",
      event: "Tech Innovation Summit 2024",
      folder: "Marketing Materials",
    },
    {
      id: 3,
      name: "Venue Layout & Floor Plan",
      description:
        "Detailed venue layout including room assignments, seating arrangements, and facility information.",
      category: "Logistics",
      type: "PDF",
      size: "5.2 MB",
      uploadDate: "2024-02-01T11:20:00Z",
      lastModified: "2024-02-25T13:30:00Z",
      uploadedBy: "Event Coordinator",
      status: "published",
      downloadCount: 67,
      isPublic: false,
      tags: ["venue", "layout", "floorplan", "logistics"],
      fileUrl: "/resources/venue-layout.pdf",
      thumbnail:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80",
      version: "3.0",
      isStarred: false,
      isShared: true,
      sharedWith: ["Event Team", "Security"],
      permissions: "read",
      event: "Tech Innovation Summit 2024",
      folder: "Logistics",
    },
    {
      id: 4,
      name: "Speaker Presentation Template",
      description:
        "PowerPoint template with event branding, slide layouts, and design guidelines for speaker presentations.",
      category: "Speaker Resources",
      type: "PPTX",
      size: "8.7 MB",
      uploadDate: "2024-02-05T14:45:00Z",
      lastModified: "2024-02-18T10:20:00Z",
      uploadedBy: "Design Team",
      status: "published",
      downloadCount: 89,
      isPublic: true,
      tags: ["template", "presentation", "powerpoint", "speakers"],
      fileUrl: "/resources/speaker-template.pptx",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80",
      version: "1.5",
      isStarred: true,
      isShared: true,
      sharedWith: ["All Speakers"],
      permissions: "read",
      event: "Tech Innovation Summit 2024",
      folder: "Speaker Resources",
    },
    {
      id: 5,
      name: "Event Schedule - Final Version",
      description:
        "Final event schedule with all sessions, breaks, and activities clearly outlined.",
      category: "Event Information",
      type: "PDF",
      size: "1.8 MB",
      uploadDate: "2024-02-28T16:00:00Z",
      lastModified: "2024-03-01T09:30:00Z",
      uploadedBy: "Event Manager",
      status: "published",
      downloadCount: 234,
      isPublic: true,
      tags: ["schedule", "timeline", "sessions", "final"],
      fileUrl: "/resources/event-schedule.pdf",
      thumbnail:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=300&q=80",
      version: "4.2",
      isStarred: true,
      isShared: true,
      sharedWith: ["All Attendees", "Staff"],
      permissions: "read",
      event: "Tech Innovation Summit 2024",
      folder: "Event Information",
    },
    {
      id: 6,
      name: "WiFi Access Instructions",
      description:
        "Step-by-step instructions for connecting to the event WiFi network with login credentials.",
      category: "Technical",
      type: "PDF",
      size: "0.5 MB",
      uploadDate: "2024-03-10T08:30:00Z",
      lastModified: "2024-03-10T08:30:00Z",
      uploadedBy: "IT Support",
      status: "published",
      downloadCount: 156,
      isPublic: true,
      tags: ["wifi", "technical", "network", "instructions"],
      fileUrl: "/resources/wifi-instructions.pdf",
      thumbnail:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80",
      version: "1.0",
      isStarred: false,
      isShared: true,
      sharedWith: ["All Attendees"],
      permissions: "read",
      event: "Tech Innovation Summit 2024",
      folder: "Technical Support",
    },
    {
      id: 7,
      name: "Exhibitor Setup Guide",
      description:
        "Comprehensive guide for exhibitors including setup times, booth specifications, and requirements.",
      category: "Exhibitor Resources",
      type: "PDF",
      size: "3.1 MB",
      uploadDate: "2024-02-12T13:15:00Z",
      lastModified: "2024-02-22T11:45:00Z",
      uploadedBy: "Exhibition Manager",
      status: "published",
      downloadCount: 78,
      isPublic: false,
      tags: ["exhibitors", "setup", "booth", "guidelines"],
      fileUrl: "/resources/exhibitor-setup.pdf",
      thumbnail:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80",
      version: "2.3",
      isStarred: false,
      isShared: true,
      sharedWith: ["Exhibitors", "Setup Team"],
      permissions: "read",
      event: "Tech Innovation Summit 2024",
      folder: "Exhibitor Resources",
    },
    {
      id: 8,
      name: "Emergency Procedures",
      description:
        "Emergency response procedures and contact information for all event staff and attendees.",
      category: "Safety",
      type: "PDF",
      size: "1.2 MB",
      uploadDate: "2024-01-15T10:00:00Z",
      lastModified: "2024-02-05T14:20:00Z",
      uploadedBy: "Safety Coordinator",
      status: "published",
      downloadCount: 34,
      isPublic: false,
      tags: ["emergency", "safety", "procedures", "contacts"],
      fileUrl: "/resources/emergency-procedures.pdf",
      thumbnail:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80",
      version: "1.8",
      isStarred: true,
      isShared: true,
      sharedWith: ["All Staff", "Security"],
      permissions: "read",
      event: "Tech Innovation Summit 2024",
      folder: "Safety & Security",
    },
  ];

  const categories = [
    "Speaker Resources",
    "Marketing",
    "Logistics",
    "Event Information",
    "Technical",
    "Exhibitor Resources",
    "Safety",
    "Templates",
    "Media",
    "Documentation",
  ];

  const typeOptions = [
    { value: "all", label: "All Types", count: resources.length },
    {
      value: "PDF",
      label: "PDF",
      count: resources.filter((r) => r.type === "PDF").length,
    },
    {
      value: "PPTX",
      label: "PowerPoint",
      count: resources.filter((r) => r.type === "PPTX").length,
    },
    {
      value: "ZIP",
      label: "ZIP Archive",
      count: resources.filter((r) => r.type === "ZIP").length,
    },
    {
      value: "DOCX",
      label: "Word Document",
      count: resources.filter((r) => r.type === "DOCX").length,
    },
    {
      value: "XLSX",
      label: "Excel Spreadsheet",
      count: resources.filter((r) => r.type === "XLSX").length,
    },
    {
      value: "MP4",
      label: "Video",
      count: resources.filter((r) => r.type === "MP4").length,
    },
    {
      value: "JPG",
      label: "Image",
      count: resources.filter((r) => r.type === "JPG").length,
    },
  ];

  const statusOptions = [
    { value: "all", label: "All Status", count: resources.length },
    {
      value: "published",
      label: "Published",
      count: resources.filter((r) => r.status === "published").length,
    },
    {
      value: "draft",
      label: "Draft",
      count: resources.filter((r) => r.status === "draft").length,
    },
    {
      value: "archived",
      label: "Archived",
      count: resources.filter((r) => r.status === "archived").length,
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory =
      categoryFilter === "all" || resource.category === categoryFilter;
    const matchesType = typeFilter === "all" || resource.type === typeFilter;
    const matchesStatus =
      statusFilter === "all" || resource.status === statusFilter;

    return matchesSearch && matchesCategory && matchesType && matchesStatus;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case "PDF":
        return <FileText className="h-5 w-5 text-red-500" />;
      case "PPTX":
        return <Presentation className="h-5 w-5 text-orange-500" />;
      case "ZIP":
        return <Archive className="h-5 w-5 text-purple-500" />;
      case "DOCX":
        return <FileText className="h-5 w-5 text-blue-500" />;
      case "XLSX":
        return <FileSpreadsheet className="h-5 w-5 text-green-500" />;
      case "MP4":
        return <Video className="h-5 w-5 text-pink-500" />;
      case "JPG":
      case "PNG":
        return <Image className="h-5 w-5 text-indigo-500" />;
      default:
        return <File className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
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

  const handleDownload = (resourceId) => {
    console.log(`Downloading resource ${resourceId}`);
  };

  const handleEdit = (resourceId) => {
    console.log(`Editing resource ${resourceId}`);
  };

  const handleDelete = (resourceId) => {
    console.log(`Deleting resource ${resourceId}`);
  };

  const handleShare = (resourceId) => {
    console.log(`Sharing resource ${resourceId}`);
  };

  const handleStar = (resourceId) => {
    console.log(`Toggling star for resource ${resourceId}`);
  };

  const handleBulkAction = (action) => {
    console.log(
      `Bulk action: ${action} for ${selectedResources.length} resources`
    );
  };

  const handleUpload = () => {
    console.log("Uploading new resource");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Resources Management
            </h1>
            <p className="text-gray-600">
              Manage and organize all event resources, documents, and media
              files
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleUpload}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload Resource
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
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Resources
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {resources.length}
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
                {resources.filter((r) => r.status === "published").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Starred</p>
              <p className="text-2xl font-bold text-gray-900">
                {resources.filter((r) => r.isStarred).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Download className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Downloads
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {resources.reduce(
                  (sum, resource) => sum + resource.downloadCount,
                  0
                )}
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
                placeholder="Search resources by name, description, or tags..."
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

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg ${
                viewMode === "grid"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg ${
                viewMode === "list"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>

          {/* Bulk Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => handleBulkAction("download")}
              disabled={selectedResources.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </button>
            <button
              onClick={() => handleBulkAction("share")}
              disabled={selectedResources.length === 0}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center"
            >
              <Share className="h-4 w-4 mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Resources Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src={resource.thumbnail}
                  alt={resource.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(resource.type)}
                    <span className="text-sm text-gray-500">
                      {resource.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleStar(resource.id)}
                      className={`p-1 rounded ${
                        resource.isStarred
                          ? "text-yellow-500"
                          : "text-gray-400 hover:text-yellow-500"
                      }`}
                    >
                      <Star className="h-4 w-4" />
                    </button>
                    <button className="p-1 rounded text-gray-400 hover:text-gray-600">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
                  {resource.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{resource.size}</span>
                  <span>{resource.downloadCount} downloads</span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      resource.status
                    )}`}
                  >
                    {resource.status}
                  </span>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleDownload(resource.id)}
                      className="p-1 text-blue-600 hover:text-blue-800"
                      title="Download"
                    >
                      <DownloadIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleEdit(resource.id)}
                      className="p-1 text-gray-600 hover:text-gray-800"
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleShare(resource.id)}
                      className="p-1 text-green-600 hover:text-green-800"
                      title="Share"
                    >
                      <Share className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
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
                          setSelectedResources(
                            filteredResources.map((r) => r.id)
                          );
                        } else {
                          setSelectedResources([]);
                        }
                      }}
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Resource
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Downloads
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredResources.map((resource) => (
                  <tr key={resource.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={selectedResources.includes(resource.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedResources([
                              ...selectedResources,
                              resource.id,
                            ]);
                          } else {
                            setSelectedResources(
                              selectedResources.filter(
                                (id) => id !== resource.id
                              )
                            );
                          }
                        }}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded object-cover"
                            src={resource.thumbnail}
                            alt={resource.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {resource.name}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            {getTypeIcon(resource.type)}
                            <span className="ml-2">{resource.type}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {resource.category}
                      </div>
                      <div className="text-sm text-gray-500">
                        {resource.folder}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {resource.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {resource.downloadCount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          resource.status
                        )}`}
                      >
                        {resource.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleDownload(resource.id)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Download"
                        >
                          <DownloadIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(resource.id)}
                          className="text-gray-600 hover:text-gray-900"
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleShare(resource.id)}
                          className="text-green-600 hover:text-green-900"
                          title="Share"
                        >
                          <Share className="h-4 w-4" />
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
      )}

      {/* Empty State */}
      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No resources found
          </h3>
          <p className="text-gray-500 mb-4">
            {searchQuery ||
            categoryFilter !== "all" ||
            typeFilter !== "all" ||
            statusFilter !== "all"
              ? "Try adjusting your filters or search terms"
              : "No resources available for the selected criteria"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Resources;
