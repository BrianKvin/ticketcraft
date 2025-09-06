import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  MapPin,
  MessageCircle,
  Star,
  Award,
  Users,
  Building,
  Globe,
} from "lucide-react";
import Button from "../common/Button";

const AttendeeDiscovery = ({ eventData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    industry: "",
    interests: [],
    location: "",
    company: "",
  });
  const [attendees, setAttendees] = useState([]);
  const [filteredAttendees, setFilteredAttendees] = useState([]);

  // Mock attendee data
  const mockAttendees = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Product Manager",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      industry: "Technology",
      interests: ["AI/ML", "Product Strategy", "User Experience"],
      bio: "Passionate about building products that make a difference. 5+ years in tech.",
      image: "/placeholder.svg",
      networkingScore: 95,
      mutualConnections: 3,
      isOnline: true,
      lastActive: "2 minutes ago",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Senior Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      industry: "Technology",
      interests: ["Cloud Computing", "DevOps", "Startups"],
      bio: "Full-stack developer with expertise in modern web technologies.",
      image: "/placeholder.svg",
      networkingScore: 87,
      mutualConnections: 1,
      isOnline: false,
      lastActive: "1 hour ago",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Marketing Director",
      company: "GrowthCo",
      location: "Austin, TX",
      industry: "Marketing",
      interests: ["Digital Marketing", "Growth Hacking", "Analytics"],
      bio: "Marketing strategist focused on data-driven growth and customer acquisition.",
      image: "/placeholder.svg",
      networkingScore: 92,
      mutualConnections: 5,
      isOnline: true,
      lastActive: "5 minutes ago",
    },
    {
      id: 4,
      name: "David Kim",
      title: "Data Scientist",
      company: "Analytics Plus",
      location: "Seattle, WA",
      industry: "Data Science",
      interests: ["Machine Learning", "Big Data", "AI"],
      bio: "Data scientist specializing in predictive analytics and machine learning models.",
      image: "/placeholder.svg",
      networkingScore: 89,
      mutualConnections: 2,
      isOnline: true,
      lastActive: "10 minutes ago",
    },
  ];

  useEffect(() => {
    setAttendees(mockAttendees);
    setFilteredAttendees(mockAttendees);
  }, []);

  useEffect(() => {
    filterAttendees();
  }, [searchTerm, selectedFilters, attendees]);

  const filterAttendees = () => {
    let filtered = attendees.filter((attendee) => {
      const matchesSearch =
        attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attendee.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attendee.title.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesIndustry =
        !selectedFilters.industry ||
        attendee.industry === selectedFilters.industry;
      const matchesLocation =
        !selectedFilters.location ||
        attendee.location.includes(selectedFilters.location);
      const matchesCompany =
        !selectedFilters.company ||
        attendee.company
          .toLowerCase()
          .includes(selectedFilters.company.toLowerCase());

      return (
        matchesSearch && matchesIndustry && matchesLocation && matchesCompany
      );
    });

    setFilteredAttendees(filtered);
  };

  const handleConnect = (attendeeId) => {
    // Handle connection request
    console.log(`Connecting with attendee ${attendeeId}`);
  };

  const industries = [...new Set(attendees.map((a) => a.industry))];
  const locations = [
    ...new Set(
      attendees.map((a) => a.location.split(",")[1]?.trim()).filter(Boolean)
    ),
  ];

  return (
    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Discover Attendees
        </h1>
        <p className="text-gray-600">
          Connect with fellow attendees at {eventData.title}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, company, or title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <select
            value={selectedFilters.industry}
            onChange={(e) =>
              setSelectedFilters({
                ...selectedFilters,
                industry: e.target.value,
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">All Industries</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>

          <select
            value={selectedFilters.location}
            onChange={(e) =>
              setSelectedFilters({
                ...selectedFilters,
                location: e.target.value,
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>

          <Button className="bg-green-500 hover:bg-green-600">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-500 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {filteredAttendees.length}
              </p>
              <p className="text-sm text-gray-600">Attendees Found</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-green-500 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {filteredAttendees.filter((a) => a.isOnline).length}
              </p>
              <p className="text-sm text-gray-600">Online Now</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center">
            <Building className="h-8 w-8 text-purple-500 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {new Set(filteredAttendees.map((a) => a.company)).size}
              </p>
              <p className="text-sm text-gray-600">Companies</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center">
            <Award className="h-8 w-8 text-orange-500 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(
                  filteredAttendees.reduce(
                    (acc, a) => acc + a.networkingScore,
                    0
                  ) / filteredAttendees.length
                ) || 0}
              </p>
              <p className="text-sm text-gray-600">Avg. Score</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attendees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAttendees.map((attendee) => (
          <div
            key={attendee.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={attendee.image}
                      alt={attendee.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {attendee.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {attendee.name}
                    </h3>
                    <p className="text-sm text-gray-600">{attendee.title}</p>
                    <p className="text-sm text-gray-500">{attendee.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    {attendee.networkingScore}
                  </div>
                  <div className="text-xs text-gray-500">
                    {attendee.isOnline
                      ? "Online"
                      : `Last seen ${attendee.lastActive}`}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {attendee.location}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {attendee.bio}
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {attendee.interests.slice(0, 3).map((interest, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                  {attendee.interests.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{attendee.interests.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  {attendee.mutualConnections} mutual connections
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    className="text-sm"
                    onClick={() => handleConnect(attendee.id)}
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Connect
                  </Button>
                  <Button className="bg-green-500 hover:bg-green-600 text-sm">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAttendees.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No attendees found
          </h3>
          <p className="text-gray-600">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default AttendeeDiscovery;

