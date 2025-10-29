import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  TrendingUp,
  Clock,
  Star,
  Ticket,
  Calendar,
  ArrowRight,
  Eye,
  Heart,
  Zap,
} from "lucide-react";

const LiveActivityHub = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [onlineUsers, setOnlineUsers] = useState(47);
  const [eventsCreated, setEventsCreated] = useState(127);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate fluctuating online users
      setOnlineUsers((prev) =>
        Math.max(30, Math.min(80, prev + (Math.random() > 0.5 ? 1 : -1)))
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Update events created every 30 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setEventsCreated((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  const liveActivities = [
    {
      id: 1,
      type: "booking",
      message: "Sarah just booked tickets for Summer Music Festival",
      time: "2 min ago",
      icon: Ticket,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: 2,
      type: "event",
      message: "Mike created a new Tech Conference in San Francisco",
      time: "5 min ago",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: 3,
      type: "review",
      message: "5-star review for Jazz Night at Blue Note",
      time: "8 min ago",
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      id: 4,
      type: "trending",
      message: "Food & Wine Expo trending +23% this week",
      time: "12 min ago",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const quickStats = [
    {
      icon: Eye,
      label: "People browsing",
      value: onlineUsers,
      suffix: "now",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Calendar,
      label: "Events created",
      value: eventsCreated,
      suffix: "today",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Ticket,
      label: "Tickets sold",
      value: "2,847",
      suffix: "today",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const urgentOffers = [
    {
      event: "Jazz Night at Blue Note",
      remaining: "Last 3 tickets",
      price: "$45",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      event: "Tech Innovation Summit",
      remaining: "Only 12 spots left",
      price: "$199",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <h2 className="text-2xl font-bold text-gray-900">
              Live Activity Hub
            </h2>
          </div>
          <p className="text-gray-600">
            See what's happening right now on TicketCraft
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Live Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <Zap className="w-5 h-5 text-yellow-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                Live Stats
              </h3>
            </div>
            <div className="space-y-4">
              {quickStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-lg ${stat.bgColor} flex items-center justify-center mr-3`}
                    >
                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                    </div>
                    <span className="text-sm text-gray-600">{stat.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.suffix}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Activity
              </h3>
            </div>
            <div className="space-y-3">
              {liveActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div
                    className={`w-8 h-8 rounded-lg ${activity.bgColor} flex items-center justify-center flex-shrink-0`}
                  >
                    <activity.icon className={`w-4 h-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 font-medium">
                      {activity.message}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Urgent Offers */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <Heart className="w-5 h-5 text-red-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                Limited Time
              </h3>
            </div>
            <div className="space-y-3">
              {urgentOffers.map((offer, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${offer.bgColor} border border-gray-200`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">
                      {offer.event}
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {offer.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-medium ${offer.color}`}>
                      {offer.remaining}
                    </span>
                    <button className="text-xs bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-full transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                to="/browse-events"
                className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                Browse All Events
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Current Time Display */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
            <Clock className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">
              Last updated: {currentTime.toLocaleTimeString()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveActivityHub;
