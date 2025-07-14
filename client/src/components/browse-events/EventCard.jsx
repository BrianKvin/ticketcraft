import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, Heart } from "lucide-react";

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

export default EventCard;
