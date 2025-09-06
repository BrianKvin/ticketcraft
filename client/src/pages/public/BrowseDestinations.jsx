import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const BrowseDestinations = () => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  // Featured destinations for carousel
  const featuredDestinations = [
    {
      id: 1,
      name: "Santorini Paradise",
      location: "Greece",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Beautiful white-washed buildings overlooking the Aegean Sea",
      events: 15,
    },
    {
      id: 2,
      name: "Swiss Alpine Resort",
      location: "Switzerland",
      image:
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Majestic mountain views and pristine skiing conditions",
      events: 8,
    },
    {
      id: 3,
      name: "Tropical Island Getaway",
      location: "Maldives",
      image:
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Crystal clear waters and overwater bungalows",
      events: 12,
    },
    {
      id: 4,
      name: "Ancient City Tours",
      location: "Morocco",
      image:
        "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Historic architecture and vibrant culture",
      events: 20,
    },
    {
      id: 5,
      name: "Desert Adventure",
      location: "UAE",
      image:
        "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Luxury desert camps under starlit skies",
      events: 6,
    },
    {
      id: 6,
      name: "Coastal Paradise",
      location: "Portugal",
      image:
        "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Dramatic cliffs and pristine beaches",
      events: 18,
    },
  ];

  // All destinations for grid
  const allDestinations = [
    ...featuredDestinations,
    {
      id: 7,
      name: "Mountain Lodge",
      location: "Canada",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Cozy lodges surrounded by pristine wilderness",
      events: 10,
    },
    {
      id: 8,
      name: "Urban Explorer",
      location: "Japan",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern city life meets traditional culture",
      events: 25,
    },
  ];

  const [visibleDestinations, setVisibleDestinations] = useState(8);

  const getCurrentCarouselDestinations = () => {
    const startIndex = currentCarouselIndex * 3;
    return featuredDestinations.slice(startIndex, startIndex + 3);
  };

  const nextCarousel = () => {
    const maxIndex = Math.ceil(featuredDestinations.length / 3) - 1;
    setCurrentCarouselIndex(
      currentCarouselIndex >= maxIndex ? 0 : currentCarouselIndex + 1
    );
  };

  const prevCarousel = () => {
    const maxIndex = Math.ceil(featuredDestinations.length / 3) - 1;
    setCurrentCarouselIndex(
      currentCarouselIndex <= 0 ? maxIndex : currentCarouselIndex - 1
    );
  };

  const loadMore = () => {
    setVisibleDestinations((prev) =>
      Math.min(prev + 4, allDestinations.length)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Search Bar */}
      <div className="bg-white py-6 pt-24">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-2xl py-2 px-4 flex items-center space-x-4">
            <div className="flex-grow">
              <Input
                type="text"
                placeholder="Search destinations..."
                className="border-0 shadow-none text-lg focus-visible:ring-0"
              />
            </div>
            <div className="text-gray-400">|</div>
            <div className="text-gray-600 font-medium cursor-pointer hover:text-green-600 transition-colors">
              Dates
            </div>
            <div className="text-gray-400">|</div>
            <div className="text-gray-600 font-medium cursor-pointer hover:text-green-600 transition-colors">
              Location
            </div>
            <Button
              size="icon"
              className="bg-green-500 hover:bg-green-600 rounded-full"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Destinations Carousel */}
      <div className="py-12">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={prevCarousel}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            {/* Carousel Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {getCurrentCarouselDestinations().map((destination) => (
                <div
                  key={destination.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white">
                      {destination.events} Events
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {destination.name}
                    </h3>
                    <p className="text-gray-600 mb-3">{destination.location}</p>
                    <p className="text-gray-600 text-sm mb-4">
                      {destination.description}
                    </p>
                    <Link to={`/destinations/${destination.id}`}>
                      <Button className="w-full bg-green-500 hover:bg-green-600">
                        Explore Destination
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextCarousel}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Promotional Ribbon */}
      <div className="py-0">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="h-48 rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-center relative overflow-hidden"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-white px-6">
              <h2 className="text-4xl font-bold mb-4">
                Discover places you've never been, and revisit the ones you
                love.
              </h2>
              <p className="text-xl opacity-90">
                Unforgettable experiences await at every destination
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="py-16">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Browse Destinations
          </h2>

          {/* Destination Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {allDestinations
              .slice(0, visibleDestinations)
              .map((destination) => (
                <div
                  key={destination.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {destination.events && (
                      <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white">
                        {destination.events} Events
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                      {destination.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {destination.location}
                    </p>
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                      {destination.description}
                    </p>
                    <Link to={`/destinations/${destination.id}`}>
                      <Button
                        size="sm"
                        className="w-full bg-green-500 hover:bg-green-600 text-sm"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          {/* Load More Button */}
          {visibleDestinations < allDestinations.length && (
            <div className="text-center">
              <Button
                onClick={loadMore}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-[20px] transition-all duration-200 hover:shadow-lg"
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseDestinations;
