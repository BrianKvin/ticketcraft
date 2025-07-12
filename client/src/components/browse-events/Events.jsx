import React, { useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import BrowseEventsHero from "../components/BrowseEventsHero";
import EventCard from "../components/EventCard";

const BrowseEvents = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "This Weekend",
    "Free",
    "Featured",
    "Music",
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
      price: "From $89",
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
      price: "From $45",
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
      price: "From $199",
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
      price: "From $25",
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
      price: "From $35",
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
      price: "From $65",
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
      price: "From $120",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Image Section */}
        <BrowseEventsHero />

        {/* Title */}
        <div className="py-8">
          <h1 className="text-3xl font-bold text-gray-900">Browse Events</h1>
        </div>

        {/* Filter Bar */}
        <div className="mb-8">
          <div className="bg-white rounded-[20px] p-4 shadow-sm">
            <div className="flex space-x-4 overflow-x-auto">
              {filters.map((filter) => (
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

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mb-12">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-[20px] font-semibold transition-colors duration-200 transform hover:scale-105">
            Load More
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseEvents;
