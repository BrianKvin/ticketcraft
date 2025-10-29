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
  Star,
  Copy,
  Eye,
  Download,
  Heart,
  Share2,
  Tag,
  Award,
  Zap,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const EventTemplates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  // Comprehensive mock template data
  const templates = [
    {
      id: 1,
      title: "Tech Conference Template",
      description:
        "Complete template for technology conferences with speaker management, session tracks, and networking features.",
      category: "Technology",
      difficulty: "Intermediate",
      duration: "Full Day",
      attendees: "100-500",
      price: "Free",
      rating: 4.8,
      downloads: 1250,
      isPopular: true,
      isFeatured: true,
      tags: ["Conference", "Tech", "Speakers", "Networking"],
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      features: [
        "Speaker Management",
        "Session Tracks",
        "Networking Breaks",
        "Exhibition Space",
        "Catering Options",
        "AV Equipment Setup",
      ],
      organizer: "TechEvents Pro",
      createdAt: "2024-01-15",
      lastModified: "2024-03-10",
    },
    {
      id: 2,
      title: "Workshop Series Template",
      description:
        "Flexible template for educational workshops with hands-on activities, materials management, and progress tracking.",
      category: "Education",
      difficulty: "Beginner",
      duration: "Half Day",
      attendees: "10-50",
      price: "Free",
      rating: 4.6,
      downloads: 890,
      isPopular: true,
      isFeatured: false,
      tags: ["Workshop", "Education", "Hands-on", "Learning"],
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
      features: [
        "Materials Checklist",
        "Activity Planning",
        "Progress Tracking",
        "Breakout Sessions",
        "Assessment Tools",
        "Certificate Generation",
      ],
      organizer: "EduEvents",
      createdAt: "2024-02-01",
      lastModified: "2024-03-05",
    },
    {
      id: 3,
      title: "Networking Mixer Template",
      description:
        "Professional networking event template with icebreakers, name tags, and structured networking activities.",
      category: "Networking",
      difficulty: "Beginner",
      duration: "2-4 Hours",
      attendees: "50-200",
      price: "Premium",
      rating: 4.9,
      downloads: 2100,
      isPopular: true,
      isFeatured: true,
      tags: ["Networking", "Professional", "Mixer", "Business"],
      image:
        "https://images.unsplash.com/photo-1511578314322-379fbe835c65?auto=format&fit=crop&w=800&q=80",
      features: [
        "Name Tag Design",
        "Icebreaker Activities",
        "Speed Networking",
        "Business Card Exchange",
        "Follow-up Templates",
        "Contact Management",
      ],
      organizer: "NetworkPro",
      createdAt: "2023-12-01",
      lastModified: "2024-02-08",
    },
    {
      id: 4,
      title: "Product Launch Template",
      description:
        "Comprehensive template for product launches with media management, demo stations, and press kit materials.",
      category: "Marketing",
      difficulty: "Advanced",
      duration: "Full Day",
      attendees: "200-1000",
      price: "Premium",
      rating: 4.7,
      downloads: 1650,
      isPopular: false,
      isFeatured: true,
      tags: ["Product Launch", "Marketing", "Media", "Demo"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      features: [
        "Media Kit Templates",
        "Demo Station Setup",
        "Press Release Templates",
        "Social Media Integration",
        "Live Streaming Setup",
        "Press Conference Planning",
      ],
      organizer: "LaunchEvents",
      createdAt: "2024-01-20",
      lastModified: "2024-03-12",
    },
    {
      id: 5,
      title: "Charity Fundraiser Template",
      description:
        "Complete template for charity events with donation tracking, auction management, and volunteer coordination.",
      category: "Charity",
      difficulty: "Intermediate",
      duration: "Evening",
      attendees: "100-500",
      price: "Free",
      rating: 4.5,
      downloads: 750,
      isPopular: false,
      isFeatured: false,
      tags: ["Charity", "Fundraiser", "Auction", "Volunteer"],
      image:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      features: [
        "Donation Tracking",
        "Silent Auction Setup",
        "Volunteer Management",
        "Sponsor Recognition",
        "Tax Receipt Generation",
        "Impact Reporting",
      ],
      organizer: "CharityEvents",
      createdAt: "2024-02-15",
      lastModified: "2024-03-08",
    },
    {
      id: 6,
      title: "Team Building Retreat Template",
      description:
        "Engaging team building template with activities, challenges, and team bonding exercises for corporate groups.",
      category: "Corporate",
      difficulty: "Intermediate",
      duration: "1-3 Days",
      attendees: "20-100",
      price: "Premium",
      rating: 4.8,
      downloads: 980,
      isPopular: true,
      isFeatured: false,
      tags: ["Team Building", "Corporate", "Retreat", "Activities"],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      features: [
        "Activity Planning",
        "Challenge Design",
        "Team Formation",
        "Progress Tracking",
        "Awards & Recognition",
        "Feedback Collection",
      ],
      organizer: "TeamEvents",
      createdAt: "2024-01-10",
      lastModified: "2024-03-01",
    },
    {
      id: 7,
      title: "Virtual Event Template",
      description:
        "Complete virtual event template with streaming setup, interactive features, and digital engagement tools.",
      category: "Virtual",
      difficulty: "Advanced",
      duration: "Flexible",
      attendees: "Unlimited",
      price: "Premium",
      rating: 4.6,
      downloads: 3200,
      isPopular: true,
      isFeatured: true,
      tags: ["Virtual", "Online", "Streaming", "Interactive"],
      image:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=800&q=80",
      features: [
        "Live Streaming Setup",
        "Interactive Polls",
        "Breakout Rooms",
        "Chat Management",
        "Recording Setup",
        "Analytics Dashboard",
      ],
      organizer: "VirtualEvents",
      createdAt: "2023-11-01",
      lastModified: "2024-03-15",
    },
    {
      id: 8,
      title: "Wedding Reception Template",
      description:
        "Elegant wedding reception template with timeline management, vendor coordination, and guest experience planning.",
      category: "Wedding",
      difficulty: "Advanced",
      duration: "4-6 Hours",
      attendees: "50-300",
      price: "Premium",
      rating: 4.9,
      downloads: 1450,
      isPopular: false,
      isFeatured: false,
      tags: ["Wedding", "Reception", "Elegant", "Timeline"],
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      features: [
        "Timeline Management",
        "Vendor Coordination",
        "Seating Arrangements",
        "Menu Planning",
        "Entertainment Setup",
        "Photo Opportunities",
      ],
      organizer: "WeddingEvents",
      createdAt: "2024-02-20",
      lastModified: "2024-03-14",
    },
  ];

  const categories = [
    "Technology",
    "Education",
    "Networking",
    "Marketing",
    "Charity",
    "Corporate",
    "Virtual",
    "Wedding",
  ];

  const difficultyLevels = [
    {
      value: "Beginner",
      label: "Beginner",
      color: "bg-green-100 text-green-800",
    },
    {
      value: "Intermediate",
      label: "Intermediate",
      color: "bg-yellow-100 text-yellow-800",
    },
    { value: "Advanced", label: "Advanced", color: "bg-red-100 text-red-800" },
  ];

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory =
      categoryFilter === "all" || template.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.downloads - a.downloads;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const getDifficultyColor = (difficulty) => {
    const level = difficultyLevels.find((d) => d.value === difficulty);
    return level ? level.color : "bg-gray-100 text-gray-800";
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Event Templates
            </h1>
            <p className="text-gray-600">
              Choose from professionally designed event templates
            </p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Create Custom Template
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Templates
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {templates.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Download className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Downloads
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {templates
                  .reduce((sum, template) => sum + template.downloads, 0)
                  .toLocaleString()}
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
              <p className="text-sm font-medium text-gray-600">Avg. Rating</p>
              <p className="text-2xl font-bold text-gray-900">
                {(
                  templates.reduce(
                    (sum, template) => sum + template.rating,
                    0
                  ) / templates.length
                ).toFixed(1)}
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
                Popular Templates
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {templates.filter((t) => t.isPopular).length}
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
                placeholder="Search templates by title, description, or tags..."
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

          {/* Sort */}
          <div className="lg:w-48">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
              <option value="title">Alphabetical</option>
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

      {/* Featured Templates */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Featured Templates
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {templates
            .filter((t) => t.isFeatured)
            .map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center">
                      <Award className="h-3 w-3 mr-1" />
                      Featured
                    </span>
                    {template.isPopular && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs font-medium">
                      {template.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {template.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {template.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {template.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {template.attendees}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(
                          template.difficulty
                        )}`}
                      >
                        {template.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center mr-2">
                        {renderStars(template.rating)}
                      </div>
                      <span className="text-sm text-gray-500">
                        ({template.rating})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-800">
                        <Copy className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-gray-900">
                        {template.price}
                      </span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                        Use Template
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* All Templates */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          All Templates
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {sortedTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs font-medium">
                    {template.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-1">
                  {template.isPopular && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Popular
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {template.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {template.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {template.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {template.attendees}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      {renderStars(template.rating)}
                    </div>
                    <span className="text-sm text-gray-500">
                      ({template.rating})
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(
                      template.difficulty
                    )}`}
                  >
                    {template.difficulty}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {template.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {template.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{template.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <Copy className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold text-gray-900">
                      {template.price}
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {sortedTemplates.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No templates found
          </h3>
          <p className="text-gray-500 mb-4">
            {searchQuery || categoryFilter !== "all"
              ? "Try adjusting your filters or search terms"
              : "No templates available in this category"}
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 inline-flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Create Custom Template
          </button>
        </div>
      )}
    </div>
  );
};

export default EventTemplates;
