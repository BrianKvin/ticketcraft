import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
  MapPin,
} from "lucide-react";
import EventCard from "../../components/browse-events/EventCard";

const EventDiscovery = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState([]);

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

  const categoryFilters = [
    "All",
    "This Weekend",
    "Free",
    "Featured",
    "Music",
    "Business",
    "Food",
    "Sports",
    "Arts",
    "Comedy",
    "Other",
  ];

  const events = [
    {
      id: 1,
      title: "Summer Music Festival",
      date: "August 15-17, 2024",
      location: "Central Park, NYC",
      description:
        "Three days of incredible music featuring top artists from around the world.",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$89",
      isFree: false,
      category: "Music",
      featured: true,
    },
    {
      id: 2,
      title: "Food & Wine Expo",
      date: "September 8, 2024",
      location: "Convention Center, LA",
      description:
        "Taste the finest cuisines and wines from renowned chefs and vineyards.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$45",
      isFree: false,
      category: "Food",
      featured: false,
    },
    {
      id: 3,
      title: "Tech Innovation Summit",
      date: "October 22, 2024",
      location: "Silicon Valley, CA",
      description:
        "Join industry leaders discussing the future of technology and innovation.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$199",
      isFree: false,
      category: "Business",
      featured: true,
    },
    {
      id: 4,
      title: "Art & Culture Night",
      date: "November 5, 2024",
      location: "Downtown Gallery District",
      description:
        "An evening celebrating local artists and cultural diversity in the community.",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$25",
      isFree: false,
      category: "Arts",
      featured: false,
    },
    {
      id: 5,
      title: "Stand-Up Comedy Night",
      date: "December 3, 2024",
      location: "Comedy Club Downtown",
      description:
        "Laugh the night away with top comedians from around the country.",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$35",
      isFree: false,
      category: "Comedy",
      featured: false,
    },
    {
      id: 6,
      title: "Jazz & Blues Festival",
      date: "January 12, 2025",
      location: "Riverside Park",
      description:
        "Experience the best jazz and blues performers in an intimate outdoor setting.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$65",
      isFree: false,
      category: "Music",
      featured: false,
    },
    {
      id: 7,
      title: "Outdoor Adventure Expo",
      date: "February 20, 2025",
      location: "Mountain View Center",
      description:
        "Discover the latest in outdoor gear and adventure travel destinations.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Free",
      isFree: true,
      category: "Sports",
      featured: false,
    },
    {
      id: 8,
      title: "Fashion Week Showcase",
      date: "March 15, 2025",
      location: "Fashion District",
      description:
        "The latest trends and designs from emerging and established fashion designers.",
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$120",
      isFree: false,
      category: "Arts",
      featured: true,
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
    // Search functionality is handled by the filter logic below
  };

  // Filter events based on search query, selected filters, and active filter
  useEffect(() => {
    let filtered = [...events];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by quick filters
    if (selectedFilters.length > 0) {
      filtered = filtered.filter((event) => {
        if (selectedFilters.includes("this-weekend")) {
          // Simple weekend check - in real app, you'd check actual dates
          return (
            event.date.includes("August") || event.date.includes("September")
          );
        }
        if (selectedFilters.includes("free")) {
          return event.isFree;
        }
        if (selectedFilters.includes("music")) {
          return event.category === "Music";
        }
        if (selectedFilters.includes("business")) {
          return event.category === "Business";
        }
        if (selectedFilters.includes("food")) {
          return event.category === "Food";
        }
        if (selectedFilters.includes("sports")) {
          return event.category === "Sports";
        }
        if (selectedFilters.includes("arts")) {
          return event.category === "Arts";
        }
        return true;
      });
    }

    // Filter by category filter
    if (activeFilter !== "All") {
      if (activeFilter === "This Weekend") {
        filtered = filtered.filter(
          (event) =>
            event.date.includes("August") || event.date.includes("September")
        );
      } else if (activeFilter === "Free") {
        filtered = filtered.filter((event) => event.isFree);
      } else if (activeFilter === "Featured") {
        filtered = filtered.filter((event) => event.featured);
      } else {
        filtered = filtered.filter((event) => event.category === activeFilter);
      }
    }

    setFilteredEvents(filtered);
  }, [searchQuery, selectedFilters, activeFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Amazing Events
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Search thousands of events, filter by your preferences, and find
            your perfect experience
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

        {/* Category Filter Bar */}
        <div className="mb-8">
          <div className="bg-white rounded-[20px] p-4 shadow-sm">
            <div className="flex space-x-4 overflow-x-auto">
              {categoryFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                    activeFilter === filter
                      ? "bg-green-500 text-white"
                      : "text-gray-700 hover:bg-green-100"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredEvents.length} of {events.length} events
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No events found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters to find more events.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedFilters([]);
                setActiveFilter("All");
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredEvents.length > 0 && (
          <div className="text-center mb-12">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-[20px] font-semibold transition-colors duration-200 transform hover:scale-105">
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDiscovery;
