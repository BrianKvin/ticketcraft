import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Calendar,
  Filter,
  Star,
  Music,
  Briefcase,
  Utensils,
  Gamepad2,
  Palette,
} from "lucide-react";

const QuickEventSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const quickFilters = [
    {
      id: "this-weekend",
      label: "This Weekend",
      icon: Calendar,
      color: "bg-blue-500",
    },
    { id: "free", label: "Free Events", icon: Star, color: "bg-green-500" },
    { id: "music", label: "Music", icon: Music, color: "bg-purple-500" },
    {
      id: "business",
      label: "Business",
      icon: Briefcase,
      color: "bg-gray-500",
    },
    {
      id: "food",
      label: "Food & Drink",
      icon: Utensils,
      color: "bg-orange-500",
    },
    { id: "sports", label: "Sports", icon: Gamepad2, color: "bg-red-500" },
    {
      id: "arts",
      label: "Arts & Culture",
      icon: Palette,
      color: "bg-pink-500",
    },
  ];

  const handleFilterToggle = (filterId) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Build search URL with filters
    const params = new URLSearchParams();
    if (searchQuery) params.append("q", searchQuery);
    if (selectedFilters.length > 0)
      params.append("filters", selectedFilters.join(","));

    const searchUrl = `/browse-events?${params.toString()}`;
    window.location.href = searchUrl;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Event
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Search thousands of events, filter by your preferences, and discover
            amazing experiences
          </p>
        </div>

        {/* Main Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events, locations, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl font-semibold transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Quick Filters */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-gray-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">
              Quick Filters
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {quickFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterToggle(filter.id)}
                className={`flex items-center px-4 py-2 rounded-full border-2 transition-all duration-200 ${
                  selectedFilters.includes(filter.id)
                    ? `${filter.color} text-white border-transparent`
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                }`}
              >
                <filter.icon className="w-4 h-4 mr-2" />
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickEventSearch;
