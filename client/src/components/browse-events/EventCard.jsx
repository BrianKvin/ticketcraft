import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Heart,
  Clock,
  Star,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";

const EventCard = ({ event, variant = "default" }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleRegister = () => {
    navigate(`/events/${event.id}`);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  // Determine if event is trending or popular
  const isTrending = event.id % 3 === 0;
  const isPopular = event.id % 4 === 0;
  const isAlmostSoldOut = event.id % 5 === 0;

  // Get status badge
  const getStatusBadge = () => {
    if (isAlmostSoldOut)
      return { text: "Almost Gone", color: "bg-orange-500", icon: Zap };
    if (isTrending)
      return { text: "Trending", color: "bg-purple-500", icon: TrendingUp };
    if (isPopular) return { text: "Popular", color: "bg-blue-500", icon: Star };
    return null;
  };

  const statusBadge = getStatusBadge();
  const StatusIcon = statusBadge?.icon;

  if (variant === "hero") {
    return (
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-green-600">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Status Badge */}
          {statusBadge && (
            <div
              className={`absolute top-6 left-6 ${statusBadge.color} text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm font-semibold backdrop-blur-sm`}
            >
              <StatusIcon className="w-4 h-4" />
              {statusBadge.text}
            </div>
          )}

          {/* Like Button */}
          <button
            onClick={handleLike}
            className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <Heart
              className={`w-5 h-5 ${
                isLiked ? "text-red-500 fill-red-500" : "text-white"
              }`}
            />
          </button>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white leading-tight group-hover:text-green-300 transition-colors duration-300">
                {event.title}
              </h3>

              <div className="flex items-center text-white/90 space-x-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg">{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{event.location}</span>
                </div>
              </div>

              <p className="text-white/80 text-lg line-clamp-2 max-w-2xl">
                {event.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span
                    className={`text-3xl font-bold ${
                      event.isFree ? "text-green-300" : "text-white"
                    }`}
                  >
                    {event.isFree ? "Free" : event.price}
                  </span>
                  {!event.isFree && (
                    <span className="text-white/60 line-through text-lg">
                      $199
                    </span>
                  )}
                </div>

                <button
                  onClick={handleRegister}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                >
                  {event.isFree ? "Register Free" : "Buy Tickets"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 dark:border-gray-700/50 group-hover:border-green-200/50 dark:group-hover:border-green-400/50 group-hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Status Badge */}
          {statusBadge && (
            <div
              className={`absolute top-4 left-4 ${statusBadge.color} text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm shadow-lg`}
            >
              <StatusIcon className="w-3 h-3" />
              {statusBadge.text}
            </div>
          )}

          {/* Like Button */}
          <button
            onClick={handleLike}
            className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2.5 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <Heart
              className={`w-4 h-4 ${
                isLiked
                  ? "text-red-500 fill-red-500"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            />
          </button>

          {/* Quick Action Overlay */}
          <div
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={handleRegister}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              {event.isFree ? "Register Free" : "Buy Now"}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 line-clamp-2">
            {event.title}
          </h3>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Calendar className="w-4 h-4 mr-2 text-green-500" />
              <span className="text-sm font-medium">{event.date}</span>
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="w-4 h-4 mr-2 text-green-500" />
              <span className="text-sm font-medium">{event.location}</span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-2 leading-relaxed">
            {event.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span
                className={`text-2xl font-bold ${
                  event.isFree
                    ? "text-green-600 dark:text-green-400"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {event.isFree ? "Free" : event.price}
              </span>
              {!event.isFree && (
                <span className="text-gray-400 dark:text-gray-500 text-sm line-through">
                  $199
                </span>
              )}
            </div>

            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
              <Users className="w-4 h-4" />
              <span>{Math.floor(Math.random() * 500) + 50} going</span>
            </div>
          </div>
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
