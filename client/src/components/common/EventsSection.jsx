import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Summer Music Festival",
      date: "August 15-17, 2024",
      location: "Central Park, NYC",
      description:
        "Three days of incredible music featuring top artists from around the world.",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$89",
      isFree: false,
    },
    {
      id: 2,
      title: "Food & Wine Expo",
      date: "September 8, 2024",
      location: "Convention Center, LA",
      description:
        "Taste the finest cuisines and wines from renowned chefs and vineyards.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$45",
      isFree: false,
    },
    {
      id: 3,
      title: "Tech Innovation Summit",
      date: "October 22, 2024",
      location: "Silicon Valley, CA",
      description:
        "Join industry leaders discussing the future of technology and innovation.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$199",
      isFree: false,
    },
    {
      id: 4,
      title: "Art & Culture Night",
      date: "November 5, 2024",
      location: "Downtown Gallery District",
      description:
        "An evening celebrating local artists and cultural diversity in the community.",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Free",
      isFree: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing events happening near you and book your tickets
            today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                  {event.isFree ? "Free" : `From ${event.price}`}
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
                  <button className="h-10 px-4 bg-green-500 hover:bg-green-600 text-white rounded-[20px] flex items-center justify-center transition-colors duration-200 group-hover:scale-110 text-xs font-semibold">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/browse-events"
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 inline-block"
          >
            View More Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
