import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import EventCard from "../../components/browse-events/EventCard";

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
    <div className="relative w-full h-[28rem] overflow-hidden rounded-lg">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentImageIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/75"
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
      price: "$89",
      isFree: false,
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
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
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
