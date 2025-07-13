import React from "react";
import {
  MapPin,
  Star,
  ArrowRight,
  Users,
  Calendar,
  Award,
  Heart,
} from "lucide-react";

const DestinationsSection = () => {
  const featuredDestination = {
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
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Featured Destination
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Discover our premium destination for your next event
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
          <div className="relative h-96 overflow-hidden">
            <img
              src={featuredDestination.image}
              alt={featuredDestination.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 flex flex-col space-y-2">
              <div className="bg-white/95 px-3 py-1 rounded-full flex items-center shadow-md">
                <Star size={14} className="text-yellow-500 mr-1 fill-current" />
                <span className="text-sm font-bold text-gray-900">
                  {featuredDestination.rating}
                </span>
              </div>
              <div className="bg-green-500/95 px-3 py-1 rounded-full text-sm font-bold text-white shadow-md">
                {featuredDestination.events} Events
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
                    {featuredDestination.location}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  {featuredDestination.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {featuredDestination.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                      What's Included
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredDestination.highlights.map(
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
                          {featuredDestination.capacity}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-gray-400" />
                        <span className="text-gray-600">
                          {featuredDestination.availability}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {featuredDestination.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {featuredDestination.pricePer}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-20">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg">
                      <span>Book Now</span>
                      <ArrowRight size={16} />
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

        <div className="text-center mt-12">
          <button className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg border-2 border-green-500 hover:border-green-600 group">
            <span>View More Destinations</span>
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
