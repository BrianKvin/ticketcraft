import React, { useState } from "react";
import { Calendar, Clock, MapPin, Users, Star } from "lucide-react";
import Button from "../common/Button";

const DashboardAgenda = ({ eventData }) => {
  const [selectedDay, setSelectedDay] = useState("day1");

  const agendaData = {
    day1: [
      {
        id: 1,
        time: "9:00 AM",
        title: "Opening Keynote: The Next Decade of Technology",
        speaker: "Dr. Emily Watson",
        location: "Main Auditorium",
        type: "Keynote",
        duration: "60 min",
        description:
          "Explore the technological trends that will shape the next decade.",
        registered: true,
      },
      {
        id: 2,
        time: "10:30 AM",
        title: "AI Revolution in Business",
        speaker: "Dr. Sarah Chen",
        location: "Tech Hall A",
        type: "Session",
        duration: "45 min",
        description:
          "How artificial intelligence is transforming modern business operations.",
        registered: false,
      },
      {
        id: 3,
        time: "11:30 AM",
        title: "Networking Coffee Break",
        speaker: "",
        location: "Exhibition Hall",
        type: "Break",
        duration: "30 min",
        description:
          "Connect with fellow attendees and explore exhibitor booths.",
        registered: false,
      },
      {
        id: 4,
        time: "12:00 PM",
        title: "Panel: Future of Work",
        speaker: "Multiple Speakers",
        location: "Conference Room B",
        type: "Panel",
        duration: "60 min",
        description:
          "Industry leaders discuss the evolution of workplace dynamics.",
        registered: true,
      },
      {
        id: 5,
        time: "1:00 PM",
        title: "Lunch & Networking",
        speaker: "",
        location: "Main Hall",
        type: "Break",
        duration: "60 min",
        description: "Enjoy lunch while networking with other professionals.",
        registered: false,
      },
      {
        id: 6,
        time: "2:00 PM",
        title: "Building Scalable Startups",
        speaker: "Marcus Johnson",
        location: "Innovation Lab",
        type: "Workshop",
        duration: "90 min",
        description:
          "Hands-on workshop on scaling startup operations effectively.",
        registered: true,
      },
    ],
    day2: [
      {
        id: 7,
        time: "9:00 AM",
        title: "Morning Networking Session",
        speaker: "",
        location: "Lobby",
        type: "Networking",
        duration: "30 min",
        description: "Start your day by connecting with industry peers.",
        registered: false,
      },
      {
        id: 8,
        time: "9:30 AM",
        title: "Future of User Experience",
        speaker: "Lisa Rodriguez",
        location: "Design Studio",
        type: "Session",
        duration: "45 min",
        description:
          "Explore emerging trends in UX design and user interaction.",
        registered: true,
      },
      {
        id: 9,
        time: "10:30 AM",
        title: "Cybersecurity in the Digital Age",
        speaker: "Michael Zhang",
        location: "Security Center",
        type: "Session",
        duration: "45 min",
        description:
          "Understanding modern cybersecurity challenges and solutions.",
        registered: false,
      },
      {
        id: 10,
        time: "11:30 AM",
        title: "Coffee & Exhibitor Showcase",
        speaker: "",
        location: "Exhibition Hall",
        type: "Break",
        duration: "30 min",
        description: "Discover innovative solutions from our exhibitors.",
        registered: false,
      },
      {
        id: 11,
        time: "12:00 PM",
        title: "Data-Driven Decision Making",
        speaker: "David Kumar",
        location: "Analytics Lab",
        type: "Workshop",
        duration: "75 min",
        description:
          "Learn to leverage data analytics for strategic decisions.",
        registered: true,
      },
      {
        id: 12,
        time: "1:30 PM",
        title: "Lunch Break",
        speaker: "",
        location: "Main Hall",
        type: "Break",
        duration: "60 min",
        description: "Networking lunch with fellow attendees.",
        registered: false,
      },
    ],
    day3: [
      {
        id: 13,
        time: "9:00 AM",
        title: "Emerging Technologies Showcase",
        speaker: "Various Presenters",
        location: "Innovation Hub",
        type: "Showcase",
        duration: "90 min",
        description: "Discover the latest breakthrough technologies.",
        registered: false,
      },
      {
        id: 14,
        time: "10:45 AM",
        title: "Investor Panel: Funding the Future",
        speaker: "Investment Partners",
        location: "Capital Room",
        type: "Panel",
        duration: "60 min",
        description:
          "VCs and angels discuss investment trends and opportunities.",
        registered: true,
      },
      {
        id: 15,
        time: "12:00 PM",
        title: "Final Networking Lunch",
        speaker: "",
        location: "Main Hall",
        type: "Break",
        duration: "90 min",
        description: "Last chance to connect and exchange contacts.",
        registered: false,
      },
      {
        id: 16,
        time: "2:00 PM",
        title: "Closing Keynote: Transforming Industries",
        speaker: "James Mitchell",
        location: "Main Auditorium",
        type: "Keynote",
        duration: "60 min",
        description:
          "Inspiring insights on industry transformation and innovation.",
        registered: true,
      },
    ],
  };

  const days = [
    { id: "day1", label: "Day 1", date: "March 15" },
    { id: "day2", label: "Day 2", date: "March 16" },
    { id: "day3", label: "Day 3", date: "March 17" },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Keynote":
        return "bg-purple-100 text-purple-800";
      case "Session":
        return "bg-blue-100 text-blue-800";
      case "Workshop":
        return "bg-green-100 text-green-800";
      case "Panel":
        return "bg-orange-100 text-orange-800";
      case "Break":
        return "bg-gray-100 text-gray-600";
      case "Networking":
        return "bg-pink-100 text-pink-800";
      case "Showcase":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Event Agenda</h1>
        <p className="text-gray-600">Complete schedule for {eventData.title}</p>
      </div>

      {/* Day Selector */}
      <div className="mb-8">
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setSelectedDay(day.id)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                selectedDay === day.id
                  ? "bg-white text-green-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {day.label}
              <span className="block text-xs text-gray-500">{day.date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* My Schedule Summary */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b">
            <h3 className="flex items-center gap-2 font-semibold">
              <Star className="h-5 w-5 text-yellow-500" />
              My Registered Sessions
            </h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.values(agendaData)
                .flat()
                .filter((session) => session.registered)
                .slice(0, 3)
                .map((session) => (
                  <div key={session.id} className="p-3 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-800 text-sm">
                      {session.title}
                    </p>
                    <p className="text-green-600 text-xs mt-1">
                      {session.time} - {session.location}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Agenda Items */}
      <div className="space-y-4">
        {agendaData[selectedDay].map((session) => (
          <div
            key={session.id}
            className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 ${
              session.registered ? "ring-2 ring-green-500 ring-opacity-20" : ""
            }`}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="text-lg font-semibold text-gray-900">
                  {session.time}
                </div>
                <div className="text-sm text-gray-600">{session.duration}</div>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {session.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {session.registered && (
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    )}
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getTypeColor(
                        session.type
                      )}`}
                    >
                      {session.type}
                    </span>
                  </div>
                </div>

                {session.speaker && (
                  <p className="text-gray-600 mb-2">
                    <Users className="h-4 w-4 inline mr-1" />
                    {session.speaker}
                  </p>
                )}

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {session.location}
                  </span>
                </div>

                <p className="text-gray-700 mb-4">{session.description}</p>

                <div className="flex gap-2">
                  {session.registered ? (
                    <Button className="bg-green-500 hover:bg-green-600 text-sm">
                      Registered
                    </Button>
                  ) : (
                    <Button variant="outline" className="text-sm">
                      Add to Schedule
                    </Button>
                  )}
                  <Button variant="outline" className="text-sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Schedule Export */}
      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Export Your Schedule
            </h3>
            <p className="text-gray-600 mb-4">
              Download your personalized agenda to your calendar app
            </p>
            <div className="flex justify-center gap-2">
              <Button className="bg-green-500 hover:bg-green-600">
                <Calendar className="h-4 w-4 mr-2" />
                Export to Calendar
              </Button>
              <Button variant="outline">Download PDF</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAgenda;
