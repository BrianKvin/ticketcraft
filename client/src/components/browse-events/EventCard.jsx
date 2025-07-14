import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, Heart, Clock } from "lucide-react";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    // Navigate to event details page
    navigate(`/events/${event.id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full flex items-center justify-center">
          <Heart className="w-5 h-5 text-red-500" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
          {event.title}
        </h3>

        <div className="flex items-center text-gray-600 mb-2">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm">{event.date}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-2" />
          <span className="text-sm">{event.location}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {event.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-left">
            <span
              className={`text-lg font-bold ${
                event.isFree ? "text-green-600" : "text-gray-900"
              }`}
            >
              {event.isFree ? "Free" : event.price}
            </span>
          </div>
          <button
            onClick={handleRegister}
            className="h-10 px-4 bg-green-500 hover:bg-green-600 text-white rounded-[20px] flex items-center justify-center transition-colors duration-200 group-hover:scale-110 text-xs font-semibold"
          >
            {event.isFree ? "Register" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

// New RelatedEventCard for 'More Events Like These' section
export const RelatedEventCard = ({ event }) => {
  // Parse date for display
  let eventDate = new Date(event.date);
  // Fallback if event.date is not a valid date string
  if (isNaN(eventDate)) {
    // Try to parse formats like 'Jan 15, 2025'
    const parts = event.date?.split(/\s|,|-/).filter(Boolean);
    if (parts && parts.length >= 3) {
      // e.g. ['Jan', '15', '2025'] or ['Monday', 'December', '16', '2024']
      const month = parts[0].length > 3 ? parts[1] : parts[0];
      const day = parts[0].length > 3 ? parts[2] : parts[1];
      const year = parts[parts.length - 1];
      eventDate = new Date(`${month} ${day}, ${year}`);
    }
  }
  const day = eventDate.getDate() || "--";
  const month =
    eventDate.toLocaleString("default", { month: "short" }) || "---";
  const year = eventDate.getFullYear() || "----";
  // Extract time (if available)
  const time =
    event.time ||
    eventDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }) ||
    "";

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-200 flex flex-col">
      <div className="relative h-40 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 flex flex-col p-4">
        <div className="flex flex-row gap-4">
          {/* Date Column */}
          <div className="flex flex-col items-center justify-start w-12 min-w-[3rem]">
            <span className="text-2xl font-bold text-green-600 leading-none">
              {day}
            </span>
            <span className="text-sm text-gray-500 leading-none">{month}</span>
            <span className="text-xs text-gray-400 leading-none">{year}</span>
          </div>
          {/* Details Column */}
          <div className="flex-1 flex flex-col justify-between min-h-[80px]">
            <div>
              <div className="text-sm font-semibold text-gray-900 mb-1">
                {event.title}
              </div>
              <div className="text-xs text-gray-500 mb-1">{event.location}</div>
              <div className="text-xs text-gray-600 line-clamp-2 mb-2">
                {event.description}
              </div>
            </div>
            <div className="flex items-end justify-end mt-auto">
              <Clock className="w-4 h-4 text-gray-400 mr-1" />
              <span className="text-xs text-gray-500">{time}</span>
            </div>
          </div>
        </div>
        <button
          onClick={() =>
            (window.location.href = `/events/${event.id}/register`)
          }
          className="mt-4 w-full border border-green-500 text-green-600 font-semibold py-2 rounded-full hover:bg-green-50 transition-colors"
        >
          Buy Ticket
        </button>
      </div>
    </div>
  );
};

export default EventCard;
