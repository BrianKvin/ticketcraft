import React from "react";
import { Calendar, MapPin } from "lucide-react";

const EventCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
          {event.price}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
          {event.title}
        </h3>

        <div className="flex items-center text-gray-600 mb-2">
          <Calendar size={16} className="mr-2 flex-shrink-0" />
          <span className="text-sm">{event.date}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-2 flex-shrink-0" />
          <span className="text-sm">{event.location}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
          {event.description}
        </p>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition-colors duration-200 mt-auto">
          Get Tickets
        </button>
      </div>
    </div>
  );
};

export default EventCard;
