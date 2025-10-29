import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Plus,
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  BarChart3,
  Download,
  Share2,
  Copy,
} from "lucide-react";

const AllEvents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  // Comprehensive mock event data
  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      description:
        "The premier technology conference featuring AI, machine learning, and digital transformation insights from industry leaders.",
      date: "2024-03-15",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      venue: "Moscone Center",
      category: "Technology",
      status: "active",
      ticketsSold: 485,
      totalTickets: 500,
      revenue: 145200,
      views: 3250,
      conversion: 14.9,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      tags: ["AI", "Machine Learning", "Innovation", "Tech"],
      organizer: "TechCorp Events",
      createdAt: "2024-01-15",
      lastModified: "2024-03-10",
    },
    {
      id: 2,
      title: "Business Leadership Workshop",
      description:
        "Intensive leadership development program for executives and managers looking to enhance their strategic thinking and team management skills.",
      date: "2024-04-02",
      time: "10:00 AM - 3:00 PM",
      location: "New York, NY",
      venue: "Manhattan Conference Center",
      category: "Business",
      status: "upcoming",
      ticketsSold: 78,
      totalTickets: 100,
      revenue: 15600,
      views: 890,
      conversion: 8.8,
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
      tags: ["Leadership", "Management", "Strategy", "Executive"],
      organizer: "Leadership Institute",
      createdAt: "2024-02-01",
      lastModified: "2024-03-05",
    },
    {
      id: 3,
      title: "Food & Wine Expo",
      description:
        "Culinary extravaganza featuring world-renowned chefs, premium wines, and gourmet food tastings from around the globe.",
      date: "2024-02-10",
      time: "11:00 AM - 8:00 PM",
      location: "Los Angeles, CA",
      venue: "LA Convention Center",
      category: "Food & Drink",
      status: "completed",
      ticketsSold: 320,
      totalTickets: 350,
      revenue: 25600,
      views: 1890,
      conversion: 16.9,
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      tags: ["Food", "Wine", "Culinary", "Tasting"],
      organizer: "Culinary Events Co.",
      createdAt: "2023-12-01",
      lastModified: "2024-02-08",
    },
    {
      id: 4,
      title: "Digital Marketing Conference",
      description:
        "Comprehensive digital marketing summit covering SEO, social media, content marketing, and emerging digital trends.",
      date: "2024-01-20",
      time: "8:30 AM - 6:00 PM",
      location: "Chicago, IL",
      venue: "McCormick Place",
      category: "Marketing",
      status: "completed",
      ticketsSold: 450,
      totalTickets: 500,
      revenue: 67500,
      views: 2100,
      conversion: 21.4,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["Digital Marketing", "SEO", "Social Media", "Content"],
      organizer: "Marketing Pro Events",
      createdAt: "2023-11-15",
      lastModified: "2024-01-18",
    },
    {
      id: 5,
      title: "Startup Pitch Competition",
      description:
        "Annual startup competition where entrepreneurs pitch their innovative ideas to investors and industry experts.",
      date: "2024-05-15",
      time: "2:00 PM - 8:00 PM",
      location: "Austin, TX",
      venue: "Austin Convention Center",
      category: "Startup",
      status: "upcoming",
      ticketsSold: 25,
      totalTickets: 200,
      revenue: 3750,
      views: 450,
      conversion: 5.6,
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
      tags: ["Startup", "Pitch", "Investment", "Entrepreneurship"],
      organizer: "Startup Hub",
      createdAt: "2024-02-20",
      lastModified: "2024-03-12",
    },
    {
      id: 6,
      title: "Health & Wellness Retreat",
      description:
        "Transformative wellness retreat focusing on mental health, physical fitness, and holistic living practices.",
      date: "2024-06-22",
      time: "9:00 AM - 4:00 PM",
      location: "Sedona, AZ",
      venue: "Red Rock Resort",
      category: "Health & Wellness",
      status: "draft",
      ticketsSold: 0,
      totalTickets: 150,
      revenue: 0,
      views: 0,
      conversion: 0,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      tags: ["Wellness", "Health", "Retreat", "Mindfulness"],
      organizer: "Wellness Events",
      createdAt: "2024-03-01",
      lastModified: "2024-03-15",
    },
    {
      id: 7,
      title: "Art & Culture Festival",
      description:
        "Celebration of local and international artists featuring exhibitions, performances, and interactive workshops.",
      date: "2024-07-30",
      time: "10:00 AM - 9:00 PM",
      location: "Miami, FL",
      venue: "Wynwood Arts District",
      category: "Arts & Culture",
      status: "draft",
      ticketsSold: 0,
      totalTickets: 300,
      revenue: 0,
      views: 0,
      conversion: 0,
      image:
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80",
      tags: ["Art", "Culture", "Festival", "Creative"],
      organizer: "Cultural Events",
      createdAt: "2024-02-28",
      lastModified: "2024-03-14",
    },
    {
      id: 8,
      title: "Sports & Fitness Expo",
      description:
        "Comprehensive sports and fitness expo featuring equipment demonstrations, fitness classes, and athlete meet-and-greets.",
      date: "2024-08-15",
      time: "8:00 AM - 6:00 PM",
      location: "Denver, CO",
      venue: "Colorado Convention Center",
      category: "Sports",
      status: "cancelled",
      ticketsSold: 45,
      totalTickets: 400,
      revenue: 4500,
      views: 1200,
      conversion: 3.8,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      tags: ["Sports", "Fitness", "Expo", "Athletics"],
      organizer: "Sports Events Inc.",
      createdAt: "2024-01-10",
      lastModified: "2024-03-01",
    },
  ];

  const categories = [
    "Technology",
    "Business",
    "Food & Drink",
    "Marketing",
    "Startup",
    "Health & Wellness",
    "Arts & Culture",
    "Sports",
  ];

  const statusOptions = [
    { value: "all", label: "All Events", count: events.length },
    {
      value: "active",
      label: "Active",
      count: events.filter((e) => e.status === "active").length,
    },
    {
      value: "upcoming",
      label: "Upcoming",
      count: events.filter((e) => e.status === "upcoming").length,
    },
    {
      value: "completed",
      label: "Completed",
      count: events.filter((e) => e.status === "completed").length,
    },
    {
      value: "draft",
      label: "Drafts",
      count: events.filter((e) => e.status === "draft").length,
    },
    {
      value: "cancelled",
      label: "Cancelled",
      count: events.filter((e) => e.status === "cancelled").length,
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || event.status === statusFilter;
    const matchesCategory =
      categoryFilter === "all" || event.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "upcoming":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "completed":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "draft":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4" />;
      case "upcoming":
        return <Clock className="h-4 w-4" />;
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "draft":
        return <Edit className="h-4 w-4" />;
      case "cancelled":
        return <XCircle className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              All Events
            </h1>
            <p className="text-gray-600">Manage and track all your events</p>
          </div>
          <Link
            to="/events/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create New Event
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Events</p>
              <p className="text-2xl font-bold text-gray-900">
                {events.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Attendees
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {events.reduce((sum, event) => sum + event.ticketsSold, 0)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(
                  events.reduce((sum, event) => sum + event.revenue, 0)
                )}
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
                Avg. Conversion
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {(
                  events.reduce((sum, event) => sum + event.conversion, 0) /
                  events.length
                ).toFixed(1)}
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
                placeholder="Search events by title, description, or location..."
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
              <option value="date">Sort by Date</option>
              <option value="title">Sort by Title</option>
              <option value="revenue">Sort by Revenue</option>
              <option value="attendees">Sort by Attendees</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Event Image */}
            <div className="relative h-48">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                    event.status
                  )}`}
                >
                  {getStatusIcon(event.status)}
                  <span className="ml-1 capitalize">{event.status}</span>
                </span>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs font-medium">
                  {event.category}
                </span>
              </div>
            </div>

            {/* Event Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {event.description}
              </p>

              {/* Event Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(event.date)} • {event.time}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-2" />
                  {event.ticketsSold} / {event.totalTickets} attendees
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Revenue</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {formatCurrency(event.revenue)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Conversion</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {event.conversion}%
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {event.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {event.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{event.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Link
                    to={`/events/${event.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Eye className="h-4 w-4" />
                  </Link>
                  <Link
                    to={`/events/edit/${event.id}`}
                    className="text-green-600 hover:text-green-800"
                  >
                    <Edit className="h-4 w-4" />
                  </Link>
                  <button className="text-gray-600 hover:text-gray-800">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-600 hover:text-gray-800">
                    <Copy className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No events found
          </h3>
          <p className="text-gray-500 mb-4">
            {searchQuery || statusFilter !== "all" || categoryFilter !== "all"
              ? "Try adjusting your filters or search terms"
              : "Get started by creating your first event"}
          </p>
          <Link
            to="/events/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 inline-flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create New Event
          </Link>
        </div>
      )}
    </div>
  );
};

export default AllEvents;
