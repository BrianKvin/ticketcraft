import React, { useState, useEffect, useCallback } from "react";
import {
  MapPin,
  Star,
  Users,
  Calendar,
  Award,
  Heart,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const DestinationsSection = () => {
  const destinations = [
    {
      name: "Paradise Beach Resort",
      location: "Maldives",
      description:
        "Experience a tropical getaway with turquoise waters, white sand beaches, and luxury accommodations. Ideal for weddings, retreats, and vacations.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      rating: 4.9,
      events: 12,
      price: "$1,200",
      pricePer: "per person sharing",
      highlights: ["Private Beach Access", "Water Sports", "Gourmet Dining"],
      capacity: "Up to 200 guests",
      availability: "Available Year-Round",
    },
    {
      name: "Mountain View Lodge",
      location: "Swiss Alps",
      description:
        "Nestled in the heart of the Swiss Alps, this luxury lodge offers breathtaking mountain views, world-class skiing, and cozy accommodations for intimate gatherings.",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      rating: 4.8,
      events: 8,
      price: "$1,800",
      pricePer: "per person sharing",
      highlights: ["Mountain Views", "Skiing", "Spa & Wellness"],
      capacity: "Up to 150 guests",
      availability: "Seasonal Availability",
    },
    {
      name: "Urban Conference Center",
      location: "New York City",
      description:
        "Modern conference center in the heart of Manhattan featuring state-of-the-art technology, flexible meeting spaces, and premium catering services.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      rating: 4.7,
      events: 25,
      price: "$800",
      pricePer: "per person",
      highlights: ["Modern Technology", "Flexible Spaces", "Premium Catering"],
      capacity: "Up to 500 guests",
      availability: "Available Year-Round",
    },
    {
      name: "Desert Oasis Resort",
      location: "Dubai",
      description:
        "Luxurious desert resort offering a unique blend of traditional Arabian hospitality and modern luxury, perfect for corporate retreats and special events.",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      rating: 4.9,
      events: 15,
      price: "$1,500",
      pricePer: "per person sharing",
      highlights: ["Desert Views", "Luxury Spa", "Cultural Experiences"],
      capacity: "Up to 300 guests",
      availability: "Available Year-Round",
    },
    {
      name: "Vineyard Estate",
      location: "Tuscany, Italy",
      description:
        "Historic Tuscan vineyard estate surrounded by rolling hills and vineyards, offering authentic Italian cuisine and world-class wine experiences.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      rating: 4.8,
      events: 10,
      price: "$1,300",
      pricePer: "per person sharing",
      highlights: ["Wine Tasting", "Italian Cuisine", "Scenic Views"],
      capacity: "Up to 120 guests",
      availability: "Seasonal Availability",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextDestination = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    );
  }, [destinations.length]);

  const prevDestination = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  }, [destinations.length]);

  const goToDestination = (index) => {
    setCurrentIndex(index);
  };

  // Auto-cycle through destinations
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextDestination, 5000);
      return () => clearInterval(interval);
    }
  }, [nextDestination, isPaused]);

  const currentDestination = destinations[currentIndex];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Featured Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Discover our premium destinations for your next event
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows - Simple < > symbols within max-w-7xl */}
          {/* <button
            onClick={prevDestination}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200"
            aria-label="Previous destination"
          >
            <ArrowLeft size={24} />
          </button>

          <button
            onClick={nextDestination}
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200"
            aria-label="Next destination"
          >
            <ArrowRight size={24} />
          </button> */}

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="relative h-96 overflow-hidden">
              <img
                src={currentDestination.image}
                alt={currentDestination.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                <div className="bg-white/95 px-3 py-1 rounded-full flex items-center shadow-md">
                  <Star
                    size={14}
                    className="text-yellow-500 mr-1 fill-current"
                  />
                  <span className="text-sm font-bold text-gray-900">
                    {currentDestination.rating}
                  </span>
                </div>
                <div className="bg-green-500/95 px-3 py-1 rounded-full text-sm font-bold text-white shadow-md">
                  {currentDestination.events} Events
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-amber-500/95 px-3 py-1 rounded-full text-sm font-bold text-white shadow-md flex items-center">
                <Award size={14} className="mr-1" />
                Featured
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-white cursor-pointer hover:scale-110">
                <Heart
                  size={18}
                  className="text-gray-600 hover:text-red-500 transition-colors"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-400/20 to-transparent rounded-tr-full"></div>
            </div>

            <div className="p-6 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-50 rounded-full -translate-y-10 translate-x-10 opacity-60"></div>
              <div className="absolute bottom-16 left-0 w-12 h-12 bg-blue-50 rounded-full -translate-x-6 opacity-40"></div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center flex-wrap gap-2">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-green-500" />
                    <span className="text-base font-semibold text-green-600">
                      {currentDestination.location}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {currentDestination.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="text-gray-600 text-base leading-relaxed">
                      {currentDestination.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                        What's Included
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentDestination.highlights.map(
                          (highlight, index) => (
                            <div
                              key={index}
                              className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-sm font-medium border border-green-200"
                            >
                              {highlight}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-20">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Users size={16} className="mr-2 text-gray-400" />
                          <span className="text-gray-600">
                            {currentDestination.capacity}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2 text-gray-400" />
                          <span className="text-gray-600">
                            {currentDestination.availability}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {currentDestination.price}
                        </div>
                        <div className="text-sm text-gray-500">
                          {currentDestination.pricePer}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-20">
                      <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg">
                        <span>Book Now</span>
                      </button>
                      <button className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-gray-300 hover:border-green-500 flex items-center justify-center space-x-2">
                        <span>Learn More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToDestination(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-green-500 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to destination ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg border-2 border-green-500 hover:border-green-600 group">
            <span>View More Destinations</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
