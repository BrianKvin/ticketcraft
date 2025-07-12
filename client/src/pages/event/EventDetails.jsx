import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import EventBooking from "../../components/booking/EventBooking";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching event data
    const fetchEvent = async () => {
      setLoading(true);
      // Mock event data - replace with actual API call
      const mockEvent = {
        id: id,
        title: "Summer Music Festival",
        date: "August 15-17, 2024",
        time: "6:00 PM",
        location: "Central Park, NYC",
        description:
          "Three days of incredible music featuring top artists from around the world. Experience the best live performances in an amazing outdoor setting.",
        image:
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: "From $89",
        capacity: 5000,
        availableTickets: 1200,
        category: "Music",
        organizer: "Music Events Inc.",
        contact: "info@musicevents.com",
        phone: "+1 (555) 123-4567",
      };

      setTimeout(() => {
        setEvent(mockEvent);
        setLoading(false);
      }, 1000);
    };

    fetchEvent();
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

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Event Not Found
            </h1>
            <p className="text-gray-600">
              The event you're looking for doesn't exist.
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
          {/* Event Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {event.title}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">📅</span>
                    <span className="text-gray-700">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">🕒</span>
                    <span className="text-gray-700">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">📍</span>
                    <span className="text-gray-700">{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">🎵</span>
                    <span className="text-gray-700">{event.category}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    About This Event
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Event Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Organizer</p>
                      <p className="text-gray-900">{event.organizer}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Contact</p>
                      <p className="text-gray-900">{event.contact}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-900">{event.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Available Tickets</p>
                      <p className="text-gray-900">
                        {event.availableTickets} of {event.capacity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="lg:col-span-1">
            <EventBooking event={event} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventDetails;
