import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import EventsList from "../../components/event-dashboard/EventsList";

const ManageEvents = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Summer Music Festival",
      date: "2024-08-15",
      location: "Central Park, NYC",
      status: "active",
      ticketsSold: 450,
      totalTickets: 500,
      revenue: 22500,
    },
    {
      id: 2,
      title: "Tech Conference 2024",
      date: "2024-09-20",
      location: "Convention Center, SF",
      status: "upcoming",
      ticketsSold: 300,
      totalTickets: 400,
      revenue: 15000,
    },
    {
      id: 3,
      title: "Food & Wine Expo",
      date: "2024-07-10",
      location: "Downtown LA",
      status: "completed",
      ticketsSold: 200,
      totalTickets: 200,
      revenue: 8100,
    },
  ]);

  const [filter, setFilter] = useState("all");

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true;
    return event.status === filter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Manage Events
              </h1>
              <p className="text-gray-600">View and manage all your events</p>
            </div>
            <Link
              to="/events/create"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Create New Event
            </Link>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-4 mb-6">
            {["all", "active", "upcoming", "completed"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  filter === status
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <EventsList events={filteredEvents} />
      </div>

      <Footer />
    </div>
  );
};

export default ManageEvents;
