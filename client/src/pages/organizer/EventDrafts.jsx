import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Plus,
  Calendar,
  MapPin,
  Users,
  Clock,
  Edit,
  Trash2,
  Eye,
  Copy,
  Share2,
  MoreVertical,
  AlertCircle,
  CheckCircle,
  XCircle,
  Save,
  Send,
  Archive,
  Tag,
  BarChart3,
} from "lucide-react";

const EventDrafts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("modified");

  // Comprehensive mock draft data
  const drafts = [
    {
      id: 1,
      title: "Summer Music Festival 2024",
      description:
        "Three-day music festival featuring top artists from around the world. Planning to include multiple stages, food vendors, and camping options.",
      category: "Music",
      status: "draft",
      completion: 75,
      lastModified: "2024-03-15T14:30:00Z",
      createdAt: "2024-02-01T10:00:00Z",
      scheduledDate: "2024-08-15",
      location: "Central Park, NYC",
      estimatedAttendees: 5000,
      estimatedRevenue: 250000,
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      tags: ["Music", "Festival", "Summer", "Outdoor"],
      notes: "Need to finalize artist lineup and secure permits",
      progress: {
        basicInfo: true,
        venue: true,
        tickets: false,
        marketing: false,
        speakers: false,
        schedule: true,
      },
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      description:
        "Intensive workshop on AI and ML for business professionals. Will include hands-on coding sessions and real-world case studies.",
      category: "Technology",
      status: "review",
      completion: 90,
      lastModified: "2024-03-14T16:45:00Z",
      createdAt: "2024-01-15T09:30:00Z",
      scheduledDate: "2024-04-20",
      location: "Tech Hub, San Francisco",
      estimatedAttendees: 150,
      estimatedRevenue: 45000,
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
      tags: ["AI", "Machine Learning", "Workshop", "Technology"],
      notes: "Ready for review - waiting for speaker confirmations",
      progress: {
        basicInfo: true,
        venue: true,
        tickets: true,
        marketing: true,
        speakers: false,
        schedule: true,
      },
    },
    {
      id: 3,
      title: "Food & Wine Tasting Event",
      description:
        "Exclusive food and wine tasting event featuring local chefs and wineries. Will include cooking demonstrations and wine pairings.",
      category: "Food & Drink",
      status: "draft",
      completion: 45,
      lastModified: "2024-03-12T11:20:00Z",
      createdAt: "2024-02-20T14:15:00Z",
      scheduledDate: "2024-06-10",
      location: "Downtown LA",
      estimatedAttendees: 200,
      estimatedRevenue: 30000,
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      tags: ["Food", "Wine", "Tasting", "Culinary"],
      notes: "Need to contact local wineries and finalize menu",
      progress: {
        basicInfo: true,
        venue: false,
        tickets: false,
        marketing: false,
        speakers: false,
        schedule: false,
      },
    },
    {
      id: 4,
      title: "Startup Pitch Competition",
      description:
        "Annual startup pitch competition where entrepreneurs present their ideas to investors and industry experts.",
      category: "Startup",
      status: "draft",
      completion: 60,
      lastModified: "2024-03-10T09:15:00Z",
      createdAt: "2024-01-30T16:00:00Z",
      scheduledDate: "2024-05-25",
      location: "Austin Convention Center",
      estimatedAttendees: 300,
      estimatedRevenue: 15000,
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
      tags: ["Startup", "Pitch", "Competition", "Investment"],
      notes: "Working on judging panel and prize structure",
      progress: {
        basicInfo: true,
        venue: true,
        tickets: true,
        marketing: false,
        speakers: false,
        schedule: false,
      },
    },
    {
      id: 5,
      title: "Health & Wellness Retreat",
      description:
        "Weekend wellness retreat focusing on mindfulness, yoga, and healthy living. Will include workshops and outdoor activities.",
      category: "Health & Wellness",
      status: "archived",
      completion: 30,
      lastModified: "2024-02-28T13:45:00Z",
      createdAt: "2024-01-10T11:30:00Z",
      scheduledDate: "2024-07-15",
      location: "Sedona, AZ",
      estimatedAttendees: 100,
      estimatedRevenue: 25000,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      tags: ["Wellness", "Retreat", "Yoga", "Mindfulness"],
      notes: "Put on hold due to venue availability issues",
      progress: {
        basicInfo: true,
        venue: false,
        tickets: false,
        marketing: false,
        speakers: false,
        schedule: false,
      },
    },
    {
      id: 6,
      title: "Digital Marketing Summit",
      description:
        "Comprehensive digital marketing conference covering SEO, social media, content marketing, and emerging trends.",
      category: "Marketing",
      status: "draft",
      completion: 80,
      lastModified: "2024-03-13T15:30:00Z",
      createdAt: "2024-02-05T10:45:00Z",
      scheduledDate: "2024-09-15",
      location: "Chicago, IL",
      estimatedAttendees: 500,
      estimatedRevenue: 125000,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["Marketing", "Digital", "Conference", "SEO"],
      notes: "Almost ready to publish - just need to finalize speaker lineup",
      progress: {
        basicInfo: true,
        venue: true,
        tickets: true,
        marketing: true,
        speakers: false,
        schedule: true,
      },
    },
    {
      id: 7,
      title: "Art & Culture Festival",
      description:
        "Celebration of local and international artists featuring exhibitions, performances, and interactive workshops.",
      category: "Arts & Culture",
      status: "draft",
      completion: 35,
      lastModified: "2024-03-08T12:00:00Z",
      createdAt: "2024-02-15T14:20:00Z",
      scheduledDate: "2024-10-05",
      location: "Miami, FL",
      estimatedAttendees: 800,
      estimatedRevenue: 40000,
      image:
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80",
      tags: ["Art", "Culture", "Festival", "Creative"],
      notes: "Early planning stage - need to contact local artists",
      progress: {
        basicInfo: true,
        venue: false,
        tickets: false,
        marketing: false,
        speakers: false,
        schedule: false,
      },
    },
    {
      id: 8,
      title: "Corporate Team Building Event",
      description:
        "Team building event for corporate groups with activities, challenges, and team bonding exercises.",
      category: "Corporate",
      status: "review",
      completion: 95,
      lastModified: "2024-03-16T10:15:00Z",
      createdAt: "2024-02-25T09:00:00Z",
      scheduledDate: "2024-04-30",
      location: "Corporate Retreat Center",
      estimatedAttendees: 75,
      estimatedRevenue: 18000,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      tags: ["Team Building", "Corporate", "Activities", "Bonding"],
      notes: "Ready for final review and approval",
      progress: {
        basicInfo: true,
        venue: true,
        tickets: true,
        marketing: true,
        speakers: true,
        schedule: true,
      },
    },
  ];

  const categories = [
    "Music",
    "Technology",
    "Food & Drink",
    "Startup",
    "Health & Wellness",
    "Marketing",
    "Arts & Culture",
    "Corporate",
  ];

  const statusOptions = [
    { value: "all", label: "All Drafts", count: drafts.length },
    {
      value: "draft",
      label: "Draft",
      count: drafts.filter((d) => d.status === "draft").length,
    },
    {
      value: "review",
      label: "Under Review",
      count: drafts.filter((d) => d.status === "review").length,
    },
    {
      value: "archived",
      label: "Archived",
      count: drafts.filter((d) => d.status === "archived").length,
    },
  ];

  const filteredDrafts = drafts.filter((draft) => {
    const matchesSearch =
      draft.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      draft.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      draft.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesStatus =
      statusFilter === "all" || draft.status === statusFilter;
    const matchesCategory =
      categoryFilter === "all" || draft.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const sortedDrafts = [...filteredDrafts].sort((a, b) => {
    switch (sortBy) {
      case "modified":
        return new Date(b.lastModified) - new Date(a.lastModified);
      case "created":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "title":
        return a.title.localeCompare(b.title);
      case "completion":
        return b.completion - a.completion;
      default:
        return 0;
    }
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "draft":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "review":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "archived":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "draft":
        return <Edit className="h-4 w-4" />;
      case "review":
        return <AlertCircle className="h-4 w-4" />;
      case "archived":
        return <Archive className="h-4 w-4" />;
      default:
        return <Edit className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const getProgressItems = (progress) => {
    const items = [
      { key: "basicInfo", label: "Basic Info" },
      { key: "venue", label: "Venue" },
      { key: "tickets", label: "Tickets" },
      { key: "marketing", label: "Marketing" },
      { key: "speakers", label: "Speakers" },
      { key: "schedule", label: "Schedule" },
    ];

    return items.map((item) => ({
      ...item,
      completed: progress[item.key],
    }));
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Event Drafts
            </h1>
            <p className="text-gray-600">
              Manage your event drafts and work in progress
            </p>
          </div>
          <Link
            to="/events/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create New Draft
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Edit className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Drafts</p>
              <p className="text-2xl font-bold text-gray-900">
                {drafts.length}
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
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">
                {drafts.filter((d) => d.status === "draft").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Under Review</p>
              <p className="text-2xl font-bold text-gray-900">
                {drafts.filter((d) => d.status === "review").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Avg. Completion
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(
                  drafts.reduce((sum, draft) => sum + draft.completion, 0) /
                    drafts.length
                )}
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
                placeholder="Search drafts by title, description, or tags..."
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

          {/* Sort */}
          <div className="lg:w-48">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="modified">Last Modified</option>
              <option value="created">Date Created</option>
              <option value="title">Title</option>
              <option value="completion">Completion</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center">
              <Archive className="h-4 w-4 mr-2" />
              Archive
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center">
              <Send className="h-4 w-4 mr-2" />
              Publish
            </button>
          </div>
        </div>
      </div>

      {/* Drafts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedDrafts.map((draft) => (
          <div
            key={draft.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Draft Image */}
            <div className="relative h-48">
              <img
                src={draft.image}
                alt={draft.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                    draft.status
                  )}`}
                >
                  {getStatusIcon(draft.status)}
                  <span className="ml-1 capitalize">{draft.status}</span>
                </span>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs font-medium">
                  {draft.category}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black bg-opacity-50 text-white px-3 py-2 rounded">
                  <div className="flex items-center justify-between text-sm">
                    <span>Completion</span>
                    <span className="font-semibold">{draft.completion}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${draft.completion}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Draft Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {draft.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {draft.description}
              </p>

              {/* Draft Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(draft.scheduledDate)}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  {draft.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-2" />
                  {draft.estimatedAttendees} attendees
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  Modified {formatDateTime(draft.lastModified)}
                </div>
              </div>

              {/* Progress Items */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Progress
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {getProgressItems(draft.progress).map((item) => (
                    <div key={item.key} className="flex items-center text-xs">
                      {item.completed ? (
                        <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                      ) : (
                        <XCircle className="h-3 w-3 text-gray-400 mr-1" />
                      )}
                      <span
                        className={
                          item.completed ? "text-green-700" : "text-gray-500"
                        }
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes */}
              {draft.notes && (
                <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> {draft.notes}
                  </p>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {draft.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {draft.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{draft.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Link
                    to={`/events/edit/${draft.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit className="h-4 w-4" />
                  </Link>
                  <button className="text-green-600 hover:text-green-800">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <Copy className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-600 hover:text-gray-800">
                    <Share2 className="h-4 w-4" />
                  </button>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {sortedDrafts.length === 0 && (
        <div className="text-center py-12">
          <Edit className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No drafts found
          </h3>
          <p className="text-gray-500 mb-4">
            {searchQuery || statusFilter !== "all" || categoryFilter !== "all"
              ? "Try adjusting your filters or search terms"
              : "Get started by creating your first event draft"}
          </p>
          <Link
            to="/events/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 inline-flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create New Draft
          </Link>
        </div>
      )}
    </div>
  );
};

export default EventDrafts;
