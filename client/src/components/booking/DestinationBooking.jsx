import React, { useState } from "react";
import { Calendar, MapPin, Users, CreditCard, Star } from "lucide-react";

const DestinationBooking = ({ destination }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [isBooking, setIsBooking] = useState(false);

  const handleBooking = () => {
    if (!startDate || !endDate) {
      alert("Please select check-in and check-out dates");
      return;
    }

    setIsBooking(true);
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      alert(
        "Booking successful! You will receive a confirmation email shortly."
      );
    }, 2000);
  };

  // Calculate number of nights
  const calculateNights = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const nights = calculateNights();
  const totalPrice = destination.pricing.basePrice * nights * guests;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Book This Destination
        </h3>
        <p className="text-gray-600">Reserve your perfect getaway</p>
      </div>

      {/* Destination Info */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-gray-500 mr-3" />
          <span className="text-gray-700">{destination.location}</span>
        </div>
        <div className="flex items-center">
          <Users className="w-5 h-5 text-gray-500 mr-3" />
          <span className="text-gray-700">
            {destination.availableSpots} spots available
          </span>
        </div>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400 mr-3" />
          <span className="text-gray-700">Premium Destination</span>
        </div>
      </div>

      {/* Date Selection */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-in Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-out Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            min={startDate || new Date().toISOString().split("T")[0]}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Guest Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of Guests
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={() => setGuests(Math.max(1, guests - 1))}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            disabled={guests <= 1}
          >
            -
          </button>
          <span className="flex-1 text-center py-2 font-medium">{guests}</span>
          <button
            onClick={() =>
              setGuests(Math.min(destination.capacity, guests + 1))
            }
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            disabled={guests >= destination.capacity}
          >
            +
          </button>
        </div>
      </div>

      {/* Pricing Breakdown */}
      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Price per night:</span>
            <span className="text-gray-900">
              ${destination.pricing.basePrice}
            </span>
          </div>
          {nights > 0 && (
            <>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Nights:</span>
                <span className="text-gray-900">{nights}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Guests:</span>
                <span className="text-gray-900">{guests}</span>
              </div>
            </>
          )}
          <div className="border-t border-gray-200 pt-2 mt-2">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-green-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Book Button */}
      <button
        onClick={handleBooking}
        disabled={
          isBooking ||
          destination.availableSpots === 0 ||
          !startDate ||
          !endDate
        }
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center ${
          isBooking ||
          destination.availableSpots === 0 ||
          !startDate ||
          !endDate
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600 text-white transform hover:scale-105"
        }`}
      >
        {isBooking ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Processing...
          </>
        ) : destination.availableSpots === 0 ? (
          "Fully Booked"
        ) : !startDate || !endDate ? (
          "Select Dates"
        ) : (
          <>
            <CreditCard className="w-5 h-5 mr-2" />
            Book Now
          </>
        )}
      </button>

      {/* Additional Info */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Secure payment powered by Stripe
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Free cancellation up to 48 hours before check-in
        </p>
      </div>
    </div>
  );
};

export default DestinationBooking;
