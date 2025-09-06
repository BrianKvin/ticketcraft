import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Star,
  Users,
  Calendar,
  Award,
  Heart,
  ArrowRight,
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
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Featured Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Discover our premium destinations for your next event
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
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
                      {destination.rating}
                    </span>
                  </div>
                  <div className="bg-green-500/95 px-3 py-1 rounded-full text-sm font-bold text-white shadow-md">
                    {destination.events} Events
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
              </div>

              <div className="p-6 relative">
                <div className="space-y-4">
                  <div className="flex items-center flex-wrap gap-2">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-green-500" />
                      <span className="text-base font-semibold text-green-600">
                        {destination.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {destination.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-sm font-medium border border-green-200"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <Users size={16} className="mr-2 text-gray-400" />
                          <span className="text-gray-600 text-sm">
                            {destination.capacity}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2 text-gray-400" />
                          <span className="text-gray-600 text-sm">
                            {destination.availability}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          {destination.price}
                        </div>
                        <div className="text-sm text-gray-500">
                          {destination.pricePer}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/browse-destinations"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 inline-flex items-center group"
          >
            Browse All Destinations
            <ArrowRight
              size={20}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
