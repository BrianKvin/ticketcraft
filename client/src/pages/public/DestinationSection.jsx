import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Star, ArrowRight } from "lucide-react";

const DestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      name: "Paradise Beach Resort",
      location: "Maldives",
      description:
        "Crystal clear waters and pristine beaches for the perfect getaway.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      events: 12,
      price: "$1,200",
      pricePer: "per person sharing",
    },
    {
      id: 2,
      name: "Mountain Adventure Lodge",
      location: "Swiss Alps",
      description:
        "Breathtaking mountain views and world-class skiing experiences.",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      events: 8,
      price: "$850",
      pricePer: "per person sharing",
    },
    {
      id: 3,
      name: "Urban Cultural Hub",
      location: "Tokyo, Japan",
      description:
        "Immerse yourself in rich culture, amazing food, and vibrant nightlife.",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      events: 25,
      price: "$650",
      pricePer: "per person sharing",
    },
    {
      id: 4,
      name: "Historic Wine Valley",
      location: "Tuscany, Italy",
      description:
        "Rolling hills, ancient villages, and world-renowned wine tastings.",
      image:
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      events: 15,
      price: "$950",
      pricePer: "per person sharing",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore amazing venues and destinations hosting incredible events
            around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                  <Star
                    size={14}
                    className="text-yellow-400 mr-1 fill-current"
                  />
                  <span className="text-sm font-semibold text-gray-900">
                    {destination.rating}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white">
                  {destination.events} Events
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {destination.name}
                </h3>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">{destination.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-lg font-bold text-gray-900">
                      {destination.price}
                    </div>
                    <div className="text-xs text-gray-500">
                      {destination.pricePer}
                    </div>
                  </div>
                  <button className="h-10 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-[20px] flex items-center justify-center transition-colors duration-200 group-hover:scale-110 text-xs font-semibold">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/browse-destinations"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 inline-block"
          >
            View More Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
