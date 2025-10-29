import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  User,
  Users,
  Eye,
  Edit,
  MoreVertical,
  Plus,
  RefreshCw,
  AlertCircle,
  CheckSquare,
  Square,
  ArrowUp,
  ArrowDown,
  Minus,
  Star,
  Target,
  BarChart3,
  UserPlus,
  UserMinus,
  Send,
  MessageSquare,
  Bell,
  Zap,
} from "lucide-react";

const Waitlist = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [eventFilter, setEventFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [selectedAttendees, setSelectedAttendees] = useState([]);

  // Comprehensive mock waitlist data
  const waitlistAttendees = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 123-4567",
      event: "Tech Innovation Summit 2024",
      eventDate: "2024-03-15",
      ticketType: "VIP",
      price: 299,
      status: "waitlist",
      priority: "high",
      waitlistPosition: 1,
      waitlistDate: "2024-02-15T10:30:00Z",
      registrationDate: "2024-02-10",
      company: "TechCorp Inc.",
      jobTitle: "Software Engineer",
      dietaryRequirements: "Vegetarian",
      emergencyContact: "John Johnson (+1 555-987-6543)",
      notes: "Early arrival, requested front row seating",
      estimatedWaitTime: "2-3 days",
      lastContactDate: "2024-02-20T14:30:00Z",
      contactMethod: "email",
      responseStatus: "pending",
      alternativeEvents: [
        "Business Leadership Workshop",
        "Digital Marketing Conference",
      ],
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@example.com",
      phone: "+1 (555) 234-5678",
      event: "Startup Pitch Competition",
      eventDate: "2024-05-15",
      ticketType: "Student",
      price: 75,
      status: "waitlist",
      priority: "medium",
      waitlistPosition: 3,
      waitlistDate: "2024-03-01T09:15:00Z",
      registrationDate: "2024-03-01",
      company: "InnovateLab",
      jobTitle: "Product Manager",
      dietaryRequirements: "None",
      emergencyContact: "Lisa Chen (+1 555-876-5432)",
      notes: "Student discount applied",
      estimatedWaitTime: "1-2 weeks",
      lastContactDate: "2024-03-05T11:20:00Z",
      contactMethod: "phone",
      responseStatus: "responded",
      alternativeEvents: ["Tech Innovation Summit 2024"],
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      phone: "+1 (555) 345-6789",
      event: "Food & Wine Expo",
      eventDate: "2024-02-10",
      ticketType: "General",
      price: 80,
      status: "waitlist",
      priority: "low",
      waitlistPosition: 8,
      waitlistDate: "2024-01-20T16:45:00Z",
      registrationDate: "2024-01-15",
      company: "Culinary Arts Co.",
      jobTitle: "Executive Chef",
      dietaryRequirements: "Gluten-Free",
      emergencyContact: "David Wilson (+1 555-765-4321)",
      notes: "VIP wine tasting session interested",
      estimatedWaitTime: "3-4 weeks",
      lastContactDate: "2024-01-25T10:15:00Z",
      contactMethod: "email",
      responseStatus: "no-response",
      alternativeEvents: ["Digital Marketing Conference"],
    },
    {
      id: 4,
      name: "David Rodriguez",
      email: "david.rodriguez@example.com",
      phone: "+1 (555) 456-7890",
      event: "Digital Marketing Conference",
      eventDate: "2024-01-20",
      ticketType: "Premium",
      price: 199,
      status: "waitlist",
      priority: "high",
      waitlistPosition: 2,
      waitlistDate: "2023-12-15T14:20:00Z",
      registrationDate: "2023-12-01",
      company: "Marketing Pro",
      jobTitle: "Digital Marketing Director",
      dietaryRequirements: "None",
      emergencyContact: "Maria Rodriguez (+1 555-654-3210)",
      notes: "Speaker at 2:00 PM session",
      estimatedWaitTime: "1-2 days",
      lastContactDate: "2023-12-20T09:30:00Z",
      contactMethod: "email",
      responseStatus: "responded",
      alternativeEvents: [
        "Tech Innovation Summit 2024",
        "Business Leadership Workshop",
      ],
    },
    {
      id: 5,
      name: "Lisa Thompson",
      email: "lisa.thompson@example.com",
      phone: "+1 (555) 567-8901",
      event: "Tech Innovation Summit 2024",
      eventDate: "2024-03-15",
      ticketType: "General",
      price: 199,
      status: "waitlist",
      priority: "medium",
      waitlistPosition: 5,
      waitlistDate: "2024-02-25T11:45:00Z",
      registrationDate: "2024-02-20",
      company: "Data Solutions Inc.",
      jobTitle: "Data Scientist",
      dietaryRequirements: "Vegan",
      emergencyContact: "Mark Thompson (+1 555-543-2109)",
      notes: "Requested networking session materials",
      estimatedWaitTime: "1-2 weeks",
      lastContactDate: "2024-03-01T15:20:00Z",
      contactMethod: "email",
      responseStatus: "pending",
      alternativeEvents: ["Startup Pitch Competition"],
    },
    {
      id: 6,
      name: "James Anderson",
      email: "james.anderson@example.com",
      phone: "+1 (555) 678-9012",
      event: "Business Leadership Workshop",
      eventDate: "2024-04-02",
      ticketType: "Executive",
      price: 299,
      status: "waitlist",
      priority: "high",
      waitlistPosition: 1,
      waitlistDate: "2024-02-20T08:30:00Z",
      registrationDate: "2024-02-15",
      company: "Leadership Institute",
      jobTitle: "CEO",
      dietaryRequirements: "None",
      emergencyContact: "Sarah Anderson (+1 555-432-1098)",
      notes: "VIP package includes lunch meeting",
      estimatedWaitTime: "1-3 days",
      lastContactDate: "2024-02-25T12:00:00Z",
      contactMethod: "phone",
      responseStatus: "responded",
      alternativeEvents: [
        "Tech Innovation Summit 2024",
        "Digital Marketing Conference",
      ],
    },
    {
      id: 7,
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      phone: "+1 (555) 789-0123",
      event: "Food & Wine Expo",
      eventDate: "2024-02-10",
      ticketType: "VIP",
      price: 150,
      status: "waitlist",
      priority: "low",
      waitlistPosition: 12,
      waitlistDate: "2024-01-25T13:15:00Z",
      registrationDate: "2024-01-20",
      company: "Wine & Dine Co.",
      jobTitle: "Sommelier",
      dietaryRequirements: "None",
      emergencyContact: "Carlos Garcia (+1 555-321-0987)",
      notes: "Participated in wine tasting competition",
      estimatedWaitTime: "4-6 weeks",
      lastContactDate: "2024-01-30T16:45:00Z",
      contactMethod: "email",
      responseStatus: "no-response",
      alternativeEvents: ["Digital Marketing Conference"],
    },
    {
      id: 8,
      name: "Robert Kim",
      email: "robert.kim@example.com",
      phone: "+1 (555) 890-1234",
      event: "Startup Pitch Competition",
      eventDate: "2024-05-15",
      ticketType: "Investor",
      price: 0,
      status: "waitlist",
      priority: "high",
      waitlistPosition: 2,
      waitlistDate: "2024-04-05T10:20:00Z",
      registrationDate: "2024-04-01",
      company: "Venture Capital Partners",
      jobTitle: "Investment Partner",
      dietaryRequirements: "Halal",
      emergencyContact: "Jennifer Kim (+1 555-210-9876)",
      notes: "Judge for pitch competition",
      estimatedWaitTime: "2-3 days",
      lastContactDate: "2024-04-10T14:30:00Z",
      contactMethod: "phone",
      responseStatus: "responded",
      alternativeEvents: [
        "Tech Innovation Summit 2024",
        "Business Leadership Workshop",
      ],
    },
  ];

  const events = [
    "Tech Innovation Summit 2024",
    "Business Leadership Workshop",
    "Food & Wine Expo",
    "Digital Marketing Conference",
    "Startup Pitch Competition",
  ];

  const statusOptions = [
    { value: "all", label: "All Status", count: waitlistAttendees.length },
    {
      value: "waitlist",
      label: "Waitlist",
      count: waitlistAttendees.filter((a) => a.status === "waitlist").length,
    },
    {
      value: "promoted",
      label: "Promoted",
      count: waitlistAttendees.filter((a) => a.status === "promoted").length,
    },
    {
      value: "cancelled",
      label: "Cancelled",
      count: waitlistAttendees.filter((a) => a.status === "cancelled").length,
    },
  ];

  const priorityOptions = [
    { value: "all", label: "All Priorities", count: waitlistAttendees.length },
    {
      value: "high",
      label: "High Priority",
      count: waitlistAttendees.filter((a) => a.priority === "high").length,
    },
    {
      value: "medium",
      label: "Medium Priority",
      count: waitlistAttendees.filter((a) => a.priority === "medium").length,
    },
    {
      value: "low",
      label: "Low Priority",
      count: waitlistAttendees.filter((a) => a.priority === "low").length,
    },
  ];

  const filteredAttendees = waitlistAttendees.filter((attendee) => {
    const matchesSearch =
      attendee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEvent =
      eventFilter === "all" || attendee.event === eventFilter;
    const matchesStatus =
      statusFilter === "all" || attendee.status === statusFilter;
    const matchesPriority =
      priorityFilter === "all" || attendee.priority === priorityFilter;

    return matchesSearch && matchesEvent && matchesStatus && matchesPriority;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "high":
        return <ArrowUp className="h-4 w-4" />;
      case "medium":
        return <Minus className="h-4 w-4" />;
      case "low":
        return <ArrowDown className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getResponseStatusColor = (status) => {
    switch (status) {
      case "responded":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "no-response":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getResponseStatusIcon = (status) => {
    switch (status) {
      case "responded":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "no-response":
        return <XCircle className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handlePromoteToEvent = (attendeeId) => {
    console.log(`Promoting attendee ${attendeeId} to event`);
  };

  const handleRemoveFromWaitlist = (attendeeId) => {
    console.log(`Removing attendee ${attendeeId} from waitlist`);
  };

  const handleContactAttendee = (attendeeId) => {
    console.log(`Contacting attendee ${attendeeId}`);
  };

  const handleBulkAction = (action) => {
    console.log(
      `Bulk action: ${action} for ${selectedAttendees.length} attendees`
    );
  };

  const handleSendWaitlistUpdate = () => {
    console.log("Sending waitlist update to all attendees");
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Waitlist Management
            </h1>
            <p className="text-gray-600">
              Manage waitlisted attendees and promote them to events
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleSendWaitlistUpdate}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Update
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh Data
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Waitlist
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {waitlistAttendees.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <ArrowUp className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">High Priority</p>
              <p className="text-2xl font-bold text-gray-900">
                {waitlistAttendees.filter((a) => a.priority === "high").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Responded</p>
              <p className="text-2xl font-bold text-gray-900">
                {
                  waitlistAttendees.filter(
                    (a) => a.responseStatus === "responded"
                  ).length
                }
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Avg. Wait Time
              </p>
              <p className="text-2xl font-bold text-gray-900">2.5 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Event Filter */}
          <div className="lg:w-48">
            <select
              value={eventFilter}
              onChange={(e) => setEventFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Events</option>
              {events.map((event) => (
                <option key={event} value={event}>
                  {event}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="lg:w-48">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} ({option.count})
                </option>
              ))}
            </select>
          </div>

          {/* Priority Filter */}
          <div className="lg:w-48">
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {priorityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} ({option.count})
                </option>
              ))}
            </select>
          </div>

          {/* Bulk Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => handleBulkAction("promote")}
              disabled={selectedAttendees.length === 0}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Promote
            </button>
            <button
              onClick={() => handleBulkAction("contact")}
              disabled={selectedAttendees.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Waitlist Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedAttendees(
                          filteredAttendees.map((a) => a.id)
                        );
                      } else {
                        setSelectedAttendees([]);
                      }
                    }}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attendee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event & Ticket
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Wait Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Response
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAttendees.map((attendee) => (
                <tr key={attendee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedAttendees.includes(attendee.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedAttendees([
                            ...selectedAttendees,
                            attendee.id,
                          ]);
                        } else {
                          setSelectedAttendees(
                            selectedAttendees.filter((id) => id !== attendee.id)
                          );
                        }
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-medium text-sm">
                        {attendee.waitlistPosition}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-medium text-sm">
                        {attendee.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {attendee.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {attendee.email}
                        </div>
                        <div className="text-xs text-gray-400">
                          {attendee.company}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {attendee.event}
                    </div>
                    <div className="text-sm text-gray-500">
                      {attendee.ticketType} - {formatCurrency(attendee.price)}
                    </div>
                    <div className="text-xs text-gray-400">
                      {attendee.eventDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(
                        attendee.priority
                      )}`}
                    >
                      {getPriorityIcon(attendee.priority)}
                      <span className="ml-1 capitalize">
                        {attendee.priority}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="text-sm font-medium">
                      {attendee.estimatedWaitTime}
                    </div>
                    <div className="text-xs text-gray-500">
                      Since {formatDateTime(attendee.waitlistDate)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getResponseStatusColor(
                        attendee.responseStatus
                      )}`}
                    >
                      {getResponseStatusIcon(attendee.responseStatus)}
                      <span className="ml-1 capitalize">
                        {attendee.responseStatus.replace("-", " ")}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="text-sm">
                      {formatDateTime(attendee.lastContactDate)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {attendee.contactMethod}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handlePromoteToEvent(attendee.id)}
                        className="text-green-600 hover:text-green-900"
                        title="Promote to Event"
                      >
                        <UserPlus className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleContactAttendee(attendee.id)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Contact Attendee"
                      >
                        <MessageSquare className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleRemoveFromWaitlist(attendee.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Remove from Waitlist"
                      >
                        <UserMinus className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredAttendees.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No waitlist attendees found
          </h3>
          <p className="text-gray-500 mb-4">
            {searchQuery ||
            eventFilter !== "all" ||
            statusFilter !== "all" ||
            priorityFilter !== "all"
              ? "Try adjusting your filters or search terms"
              : "No attendees on waitlist for the selected criteria"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Waitlist;
