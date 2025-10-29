import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import EventCard from "../../components/browse-events/EventCard";
import DarkModeToggle from "../../components/common/DarkModeToggle";
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  Star,
  TrendingUp,
  Zap,
  Users,
  Clock,
  Music,
} from "lucide-react";

const BrowseEventsHero = () => {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [backgroundImages.length]);

  // Auto-cycle through images
  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="relative w-full h-[32rem] overflow-hidden rounded-3xl shadow-2xl">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
            index === currentImageIndex
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-8 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Amazing
            <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Find and book tickets for the best events in your city
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search events, venues, or artists..."
                className="w-full pl-16 pr-6 py-6 text-lg rounded-2xl border-0 shadow-2xl focus:ring-4 focus:ring-green-500/30 focus:outline-none bg-white/95 backdrop-blur-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/75 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const BrowseEvents = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filters = [
    { name: "All", icon: Star, count: 156 },
    { name: "This Weekend", icon: Calendar, count: 23 },
    { name: "Free", icon: Zap, count: 12 },
    { name: "Featured", icon: TrendingUp, count: 8 },
    { name: "Music", icon: Music, count: 45 },
    { name: "Comedy", icon: Users, count: 18 },
    { name: "Other", icon: Filter, count: 31 },
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
      attendees: 2500,
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
      attendees: 1200,
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
      category: "Tech",
      attendees: 800,
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
      category: "Art",
      attendees: 350,
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
      attendees: 200,
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
      attendees: 1500,
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
      category: "Adventure",
      attendees: 800,
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
      category: "Fashion",
      attendees: 600,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Dark Mode Toggle */}
        <div className="fixed top-24 right-6 z-50">
          <DarkModeToggle />
        </div>

        {/* Hero Section */}
        <BrowseEventsHero />

        {/* Spacing */}
        <div className="py-12"></div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 dark:border-gray-700/50">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Filter Events
                </h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden bg-green-500 text-white p-2 rounded-xl hover:bg-green-600 transition-colors"
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <div
                className={`flex flex-wrap gap-3 ${
                  showFilters ? "block" : "hidden lg:flex"
                }`}
              >
                {filters.map((filter) => {
                  const Icon = filter.icon;
                  return (
                    <button
                      key={filter.name}
                      onClick={() => setActiveFilter(filter.name)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        activeFilter === filter.name
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                          : "bg-white/60 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-700 dark:hover:text-green-400 border border-gray-200 dark:border-gray-600"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {filter.name}
                      <span className="bg-white/20 dark:bg-gray-600/20 px-2 py-1 rounded-full text-xs">
                        {filter.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* All Events Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Calendar className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              All Events
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-green-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Load More Section */}
        <div className="text-center mb-16">
          <button className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
            <span className="flex items-center gap-3">
              Load More Events
              <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse"></div>
            </span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseEvents;
