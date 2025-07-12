import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import DestinationBooking from "../../components/booking/DestinationBooking";

const DestinationDetails = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching destination data
    const fetchDestination = async () => {
      setLoading(true);
      // Mock destination data - replace with actual API call
      const mockDestination = {
        id: id,
        name: "Sunset Beach Resort",
        description:
          "A luxurious beachfront resort offering stunning ocean views, world-class amenities, and unforgettable experiences. Perfect for weddings, corporate events, and family vacations.",
        location: "Maldives",
        category: "Resort",
        capacity: 500,
        availableSpots: 150,
        images: [
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        amenities: [
          "Beach Access",
          "Spa",
          "Restaurant",
          "Pool",
          "WiFi",
          "Parking",
        ],
        pricing: {
          basePrice: 299,
          currency: "USD",
          perNight: true,
        },
        owner: "Luxury Resorts Inc.",
        contact: "info@sunsetbeach.com",
        phone: "+960 123-4567",
      };

      setTimeout(() => {
        setDestination(mockDestination);
        setLoading(false);
      }, 1000);
    };

    fetchDestination();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Destination Not Found
            </h1>
            <p className="text-gray-600">
              The destination you're looking for doesn't exist.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Destination Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={destination.images[0]}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {destination.category}
                </div>
              </div>

              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {destination.name}
                </h1>

                <div className="flex items-center mb-4">
                  <span className="text-gray-500 mr-2">📍</span>
                  <span className="text-gray-700">{destination.location}</span>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    About This Destination
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {destination.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Amenities
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {destination.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <span className="text-green-500 mr-2">✓</span>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Destination Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Owner</p>
                      <p className="text-gray-900">{destination.owner}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Contact</p>
                      <p className="text-gray-900">{destination.contact}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-900">{destination.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Available Spots</p>
                      <p className="text-gray-900">
                        {destination.availableSpots} of {destination.capacity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="lg:col-span-1">
            <DestinationBooking destination={destination} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationDetails;
