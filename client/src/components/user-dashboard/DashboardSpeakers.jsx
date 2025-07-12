import React from "react";
import { MessageCircle, MapPin } from "lucide-react";
import Button from "../common/Button";

const DashboardSpeakers = ({ eventData }) => {
  const speakers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      company: "TechCorp Inc.",
      bio: "Leading expert in artificial intelligence and machine learning with 15+ years of experience.",
      image: "/placeholder.svg",
      session: "AI Revolution in Business",
      time: "March 15, 10:00 AM",
      track: "Technology",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      title: "Startup Founder",
      company: "InnovateLab",
      bio: "Serial entrepreneur who has built and sold three successful tech startups.",
      image: "/placeholder.svg",
      session: "Building Scalable Startups",
      time: "March 15, 2:00 PM",
      track: "Entrepreneurship",
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      title: "Head of Design",
      company: "DesignPro",
      bio: "Award-winning UX designer specializing in human-centered design principles.",
      image: "/placeholder.svg",
      session: "Future of User Experience",
      time: "March 16, 11:00 AM",
      track: "Design",
    },
    {
      id: 4,
      name: "David Kumar",
      title: "Data Scientist",
      company: "Analytics Plus",
      bio: "Expert in big data analytics and predictive modeling for enterprise solutions.",
      image: "/placeholder.svg",
      session: "Data-Driven Decision Making",
      time: "March 16, 3:00 PM",
      track: "Analytics",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Event Speakers
        </h1>
        <p className="text-gray-600">
          Meet the inspiring speakers at {eventData.title}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex gap-4 mb-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-600">
                    {speaker.title}
                  </p>
                  <p className="text-sm text-gray-500">{speaker.company}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {speaker.bio}
              </p>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Speaking Session
                </h4>
                <p className="text-sm font-medium text-gray-800">
                  {speaker.session}
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
                  <span>{speaker.time}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {speaker.track} Track
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="bg-green-500 hover:bg-green-600 text-sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Connect
                </Button>
                <Button variant="outline" className="text-sm">
                  View Session
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Speakers Section */}
      <div className="mt-12">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Keynote Speakers</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex gap-4 items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <img
                  src="/placeholder.svg"
                  alt="Keynote Speaker"
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Dr. Emily Watson
                  </h4>
                  <p className="text-sm text-gray-600">
                    CEO, Future Innovations
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    "The Next Decade of Technology"
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Opening Keynote - March 15, 9:00 AM
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <img
                  src="/placeholder.svg"
                  alt="Keynote Speaker"
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    James Mitchell
                  </h4>
                  <p className="text-sm text-gray-600">
                    Author & Thought Leader
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    "Transforming Industries Through Innovation"
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Closing Keynote - March 17, 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSpeakers;
