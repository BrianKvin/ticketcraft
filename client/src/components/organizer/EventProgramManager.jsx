import React, { useState } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Clock,
  User,
  MapPin,
  Calendar,
  Save,
  X,
} from "lucide-react";

const EventProgramManager = () => {
  const [activeTab, setActiveTab] = useState("speakers");
  const [showAddModal, setShowAddModal] = useState(false);
  const [_editingItem, setEditingItem] = useState(null);

  // Mock data
  const [speakers, _setSpeakers] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Chief Technology Officer",
      company: "TechCorp Inc.",
      bio: "Expert in AI and machine learning with 15+ years of experience. Led AI initiatives at Fortune 500 companies.",
      email: "sarah.johnson@techcorp.com",
      phone: "+1 (555) 123-4567",
      avatar: "SJ",
      sessions: [
        "Keynote: Future of AI",
        "Panel: Tech Trends",
        "Workshop: AI Implementation",
      ],
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Product Manager",
      company: "InnovateLab",
      bio: "Product strategy expert specializing in user experience design and agile methodologies.",
      email: "michael.chen@innovatelab.com",
      phone: "+1 (555) 234-5678",
      avatar: "MC",
      sessions: [
        "Workshop: Product Strategy",
        "Panel: Tech Trends",
        "Fireside Chat: Startup Growth",
      ],
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Head of Data Science",
      company: "DataFlow Analytics",
      bio: "Data science leader with expertise in machine learning, big data, and predictive analytics.",
      email: "emily.rodriguez@dataflow.com",
      phone: "+1 (555) 345-6789",
      avatar: "ER",
      sessions: ["Panel: Data-Driven Decisions", "Workshop: ML for Business"],
    },
    {
      id: 4,
      name: "James Wilson",
      title: "VP of Engineering",
      company: "CloudScale Technologies",
      bio: "Engineering leader with 20+ years in cloud architecture and distributed systems.",
      email: "james.wilson@cloudscale.com",
      phone: "+1 (555) 456-7890",
      avatar: "JW",
      sessions: [
        "Keynote: Cloud Architecture",
        "Panel: Scalability Challenges",
      ],
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "UX Design Director",
      company: "DesignFirst Studio",
      bio: "Award-winning UX designer specializing in mobile and web applications.",
      email: "lisa.park@designfirst.com",
      phone: "+1 (555) 567-8901",
      avatar: "LP",
      sessions: ["Workshop: Design Thinking", "Panel: User Experience Trends"],
    },
  ]);

  const [exhibitors, _setExhibitors] = useState([
    {
      id: 1,
      name: "TechCorp Inc.",
      contact: "John Smith",
      email: "john@techcorp.com",
      phone: "+1 (555) 345-6789",
      booth: "A1",
      category: "Technology",
      description: "Leading provider of AI solutions and enterprise software",
    },
    {
      id: 2,
      name: "InnovateLab",
      contact: "Jane Doe",
      email: "jane@innovatelab.com",
      phone: "+1 (555) 456-7890",
      booth: "A2",
      category: "Startup",
      description: "Innovative startup solutions and incubator programs",
    },
    {
      id: 3,
      name: "DataFlow Analytics",
      contact: "Mike Johnson",
      email: "mike@dataflow.com",
      phone: "+1 (555) 567-8901",
      booth: "B1",
      category: "Analytics",
      description: "Advanced data analytics and business intelligence tools",
    },
    {
      id: 4,
      name: "CloudScale Technologies",
      contact: "Sarah Williams",
      email: "sarah@cloudscale.com",
      phone: "+1 (555) 678-9012",
      booth: "B2",
      category: "Cloud Services",
      description: "Cloud infrastructure and scalable solutions",
    },
    {
      id: 5,
      name: "DesignFirst Studio",
      contact: "Alex Chen",
      email: "alex@designfirst.com",
      phone: "+1 (555) 789-0123",
      booth: "C1",
      category: "Design",
      description: "Creative design services and UX consulting",
    },
    {
      id: 6,
      name: "SecurityGuard Pro",
      contact: "David Brown",
      email: "david@securityguard.com",
      phone: "+1 (555) 890-1234",
      booth: "C2",
      category: "Security",
      description: "Cybersecurity solutions and threat protection",
    },
  ]);

  const [schedule, _setSchedule] = useState([
    {
      id: 1,
      time: "08:00 - 09:00",
      title: "Registration & Welcome Coffee",
      type: "General",
      location: "Main Lobby",
      description: "Welcome attendees, check-in, and networking",
      speakers: [],
    },
    {
      id: 2,
      time: "09:00 - 09:30",
      title: "Opening Keynote: Future of AI",
      type: "Keynote",
      location: "Main Hall",
      description:
        "Opening keynote presentation on AI trends and future outlook",
      speakers: ["Dr. Sarah Johnson"],
    },
    {
      id: 3,
      time: "09:30 - 10:30",
      title: "Panel: Emerging Tech Trends",
      type: "Panel",
      location: "Main Hall",
      description:
        "Expert panel discussion on current technology trends and innovations",
      speakers: ["Dr. Sarah Johnson", "Michael Chen", "Dr. Emily Rodriguez"],
    },
    {
      id: 4,
      time: "10:30 - 11:00",
      title: "Coffee Break & Networking",
      type: "Break",
      location: "Exhibition Hall",
      description: "Networking break with exhibitors and refreshments",
      speakers: [],
    },
    {
      id: 5,
      time: "11:00 - 12:00",
      title: "Workshop: Product Strategy & Design",
      type: "Workshop",
      location: "Room A",
      description:
        "Hands-on workshop on product strategy and user experience design",
      speakers: ["Michael Chen", "Lisa Park"],
    },
    {
      id: 6,
      time: "11:00 - 12:00",
      title: "Technical Deep Dive: Cloud Architecture",
      type: "Technical",
      location: "Room B",
      description: "Technical session on cloud architecture and scalability",
      speakers: ["James Wilson"],
    },
    {
      id: 7,
      time: "12:00 - 13:00",
      title: "Lunch & Exhibition Tour",
      type: "Meal",
      location: "Exhibition Hall",
      description: "Lunch provided with guided exhibition tour",
      speakers: [],
    },
    {
      id: 8,
      time: "13:00 - 14:00",
      title: "Fireside Chat: Startup Growth Stories",
      type: "Fireside",
      location: "Main Hall",
      description: "Intimate conversation with successful startup founders",
      speakers: ["Michael Chen"],
    },
    {
      id: 9,
      time: "14:00 - 15:00",
      title: "Workshop: Data-Driven Decision Making",
      type: "Workshop",
      location: "Room A",
      description: "Practical workshop on using data for business decisions",
      speakers: ["Dr. Emily Rodriguez"],
    },
    {
      id: 10,
      time: "15:00 - 15:30",
      title: "Afternoon Break",
      type: "Break",
      location: "Exhibition Hall",
      description: "Afternoon refreshments and networking",
      speakers: [],
    },
    {
      id: 11,
      time: "15:30 - 16:30",
      title: "Closing Keynote: The Future of Work",
      type: "Keynote",
      location: "Main Hall",
      description: "Closing keynote on the future of work and technology",
      speakers: ["Dr. Sarah Johnson"],
    },
    {
      id: 12,
      time: "16:30 - 17:30",
      title: "Networking Reception",
      type: "Networking",
      location: "Exhibition Hall",
      description: "Final networking reception with drinks and appetizers",
      speakers: [],
    },
  ]);

  const tabs = [
    { id: "speakers", name: "Speakers", count: speakers.length },
    { id: "exhibitors", name: "Exhibitors", count: exhibitors.length },
    { id: "schedule", name: "Schedule", count: schedule.length },
  ];

  const renderSpeakers = () => (
    <div className="space-y-4">
      {speakers.map((speaker) => (
        <div
          key={speaker.id}
          className="bg-white border border-gray-200 rounded-lg p-6"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-green-700">
                  {speaker.avatar}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {speaker.title} at {speaker.company}
                </p>
                <p className="text-sm text-gray-500 mt-1">{speaker.bio}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <span>{speaker.email}</span>
                  <span>{speaker.phone}</span>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-700">Sessions:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {speaker.sessions.map((session, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {session}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setEditingItem(speaker)}
                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderExhibitors = () => (
    <div className="space-y-4">
      {exhibitors.map((exhibitor) => (
        <div
          key={exhibitor.id}
          className="bg-white border border-gray-200 rounded-lg p-6"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {exhibitor.name}
                </h3>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Booth {exhibitor.booth}
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {exhibitor.category}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                {exhibitor.description}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Contact: {exhibitor.contact}</span>
                <span>{exhibitor.email}</span>
                <span>{exhibitor.phone}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setEditingItem(exhibitor)}
                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSchedule = () => (
    <div className="space-y-4">
      {schedule.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-200 rounded-lg p-6"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      item.type === "Keynote"
                        ? "bg-purple-100 text-purple-800"
                        : item.type === "Panel"
                        ? "bg-blue-100 text-blue-800"
                        : item.type === "Workshop"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {item.time}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {item.location}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                {item.speakers.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Speakers:
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {item.speakers.map((speaker, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {speaker}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setEditingItem(item)}
                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Event Program Management
          </h1>
          <p className="text-gray-600">
            Manage speakers, exhibitors, and event schedule
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add{" "}
          {activeTab === "speakers"
            ? "Speaker"
            : activeTab === "exhibitors"
            ? "Exhibitor"
            : "Session"}
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.name} ({tab.count})
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="mt-6">
        {activeTab === "speakers" && renderSpeakers()}
        {activeTab === "exhibitors" && renderExhibitors()}
        {activeTab === "schedule" && renderSchedule()}
      </div>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Add{" "}
                {activeTab === "speakers"
                  ? "Speaker"
                  : activeTab === "exhibitors"
                  ? "Exhibitor"
                  : "Session"}
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter phone"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventProgramManager;
