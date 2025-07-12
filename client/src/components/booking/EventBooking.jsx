import React, { useState } from "react";
import { Calendar, MapPin, Users, CreditCard } from "lucide-react";

const EventBooking = ({ event }) => {
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [isBooking, setIsBooking] = useState(false);

  const handleBooking = () => {
    setIsBooking(true);
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      alert(
        "Booking successful! You will receive a confirmation email shortly."
      );
    }, 2000);
  };

  const totalPrice = event.price
    ? parseFloat(event.price.replace(/[^0-9.]/g, "")) * ticketQuantity
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Tickets</h3>
        <p className="text-gray-600">Secure your spot for this amazing event</p>
      </div>

      {/* Event Info */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <Calendar className="w-5 h-5 text-gray-500 mr-3" />
          <span className="text-gray-700">{event.date}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-gray-500 mr-3" />
          <span className="text-gray-700">{event.location}</span>
        </div>
        <div className="flex items-center">
          <Users className="w-5 h-5 text-gray-500 mr-3" />
          <span className="text-gray-700">
            {event.availableTickets} tickets available
          </span>
        </div>
      </div>

      {/* Pricing */}
      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Price per ticket:</span>
          <span className="text-xl font-bold text-gray-900">{event.price}</span>
        </div>
      </div>

      {/* Ticket Quantity */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of Tickets
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            disabled={ticketQuantity <= 1}
          >
            -
          </button>
          <span className="flex-1 text-center py-2 font-medium">
            {ticketQuantity}
          </span>
          <button
            onClick={() =>
              setTicketQuantity(
                Math.min(event.availableTickets, ticketQuantity + 1)
              )
            }
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            disabled={ticketQuantity >= event.availableTickets}
          >
            +
          </button>
        </div>
      </div>

      {/* Total */}
      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-gray-900">Total:</span>
          <span className="text-2xl font-bold text-green-600">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Book Button */}
      <button
        onClick={handleBooking}
        disabled={isBooking || event.availableTickets === 0}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center ${
          isBooking || event.availableTickets === 0
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600 text-white transform hover:scale-105"
        }`}
      >
        {isBooking ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Processing...
          </>
        ) : event.availableTickets === 0 ? (
          "Sold Out"
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
          Free cancellation up to 24 hours before the event
        </p>
      </div>
    </div>
  );
};

export default EventBooking;
