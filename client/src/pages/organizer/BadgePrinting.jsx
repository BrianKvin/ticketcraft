import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Printer,
  Eye,
  Edit,
  MoreVertical,
  RefreshCw,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  QrCode,
  Camera,
  Settings,
  Palette,
  Type,
  Image,
  Layout,
  FileText,
  Zap,
  Target,
  BarChart3,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Building,
  CreditCard,
  Ticket,
  Scan,
  AlertCircle,
  CheckSquare,
  Square,
} from "lucide-react";

const BadgePrinting = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [eventFilter, setEventFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedAttendees, setSelectedAttendees] = useState([]);
  const [badgeTemplate, setBadgeTemplate] = useState("standard");
  const [printSettings, setPrintSettings] = useState({
    paperSize: "A4",
    orientation: "portrait",
    copies: 1,
    colorMode: "color",
  });

  // Comprehensive mock badge printing data
  const attendees = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 123-4567",
      event: "Tech Innovation Summit 2024",
      eventDate: "2024-03-15",
      ticketType: "VIP",
      price: 299,
      status: "checked-in",
      registrationDate: "2024-02-10",
      company: "TechCorp Inc.",
      jobTitle: "Software Engineer",
      qrCode: "TECH2024-SJ-001",
      badgePrinted: true,
      badgePrintDate: "2024-03-14T10:30:00Z",
      badgeTemplate: "vip",
      dietaryRequirements: "Vegetarian",
      emergencyContact: "John Johnson (+1 555-987-6543)",
      notes: "Early arrival, requested front row seating",
      profileImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
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
      status: "registered",
      registrationDate: "2024-03-01",
      company: "InnovateLab",
      jobTitle: "Product Manager",
      qrCode: "STARTUP2024-MC-002",
      badgePrinted: false,
      badgePrintDate: null,
      badgeTemplate: "student",
      dietaryRequirements: "None",
      emergencyContact: "Lisa Chen (+1 555-876-5432)",
      notes: "Student discount applied",
      profileImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
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
      status: "checked-out",
      registrationDate: "2024-01-15",
      company: "Culinary Arts Co.",
      jobTitle: "Executive Chef",
      qrCode: "FOOD2024-EW-003",
      badgePrinted: true,
      badgePrintDate: "2024-02-09T14:20:00Z",
      badgeTemplate: "general",
      dietaryRequirements: "Gluten-Free",
      emergencyContact: "David Wilson (+1 555-765-4321)",
      notes: "VIP wine tasting session attended",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
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
      status: "checked-in",
      registrationDate: "2023-12-01",
      company: "Marketing Pro",
      jobTitle: "Digital Marketing Director",
      qrCode: "MARKETING2024-DR-004",
      badgePrinted: true,
      badgePrintDate: "2024-01-19T16:45:00Z",
      badgeTemplate: "premium",
      dietaryRequirements: "None",
      emergencyContact: "Maria Rodriguez (+1 555-654-3210)",
      notes: "Speaker at 2:00 PM session",
      profileImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
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
      status: "checked-in",
      registrationDate: "2024-02-20",
      company: "Data Solutions Inc.",
      jobTitle: "Data Scientist",
      qrCode: "TECH2024-LT-005",
      badgePrinted: true,
      badgePrintDate: "2024-03-14T11:15:00Z",
      badgeTemplate: "general",
      dietaryRequirements: "Vegan",
      emergencyContact: "Mark Thompson (+1 555-543-2109)",
      notes: "Requested networking session materials",
      profileImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
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
      status: "registered",
      registrationDate: "2024-02-15",
      company: "Leadership Institute",
      jobTitle: "CEO",
      qrCode: "LEADERSHIP2024-JA-006",
      badgePrinted: false,
      badgePrintDate: null,
      badgeTemplate: "executive",
      dietaryRequirements: "None",
      emergencyContact: "Sarah Anderson (+1 555-432-1098)",
      notes: "VIP package includes lunch meeting",
      profileImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
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
      status: "checked-out",
      registrationDate: "2024-01-20",
      company: "Wine & Dine Co.",
      jobTitle: "Sommelier",
      qrCode: "FOOD2024-MG-007",
      badgePrinted: true,
      badgePrintDate: "2024-02-09T15:30:00Z",
      badgeTemplate: "vip",
      dietaryRequirements: "None",
      emergencyContact: "Carlos Garcia (+1 555-321-0987)",
      notes: "Participated in wine tasting competition",
      profileImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
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
      status: "checked-in",
      registrationDate: "2024-04-01",
      company: "Venture Capital Partners",
      jobTitle: "Investment Partner",
      qrCode: "STARTUP2024-RK-008",
      badgePrinted: true,
      badgePrintDate: "2024-05-14T09:20:00Z",
      badgeTemplate: "investor",
      dietaryRequirements: "Halal",
      emergencyContact: "Jennifer Kim (+1 555-210-9876)",
      notes: "Judge for pitch competition",
      profileImage:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=150&q=80",
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
    { value: "all", label: "All Status", count: attendees.length },
    {
      value: "printed",
      label: "Printed",
      count: attendees.filter((a) => a.badgePrinted).length,
    },
    {
      value: "not-printed",
      label: "Not Printed",
      count: attendees.filter((a) => !a.badgePrinted).length,
    },
  ];

  const badgeTemplates = [
    {
      value: "standard",
      label: "Standard",
      color: "bg-gray-100 text-gray-800",
    },
    { value: "vip", label: "VIP", color: "bg-yellow-100 text-yellow-800" },
    { value: "premium", label: "Premium", color: "bg-blue-100 text-blue-800" },
    {
      value: "student",
      label: "Student",
      color: "bg-green-100 text-green-800",
    },
    {
      value: "executive",
      label: "Executive",
      color: "bg-purple-100 text-purple-800",
    },
    { value: "investor", label: "Investor", color: "bg-red-100 text-red-800" },
  ];

  const filteredAttendees = attendees.filter((attendee) => {
    const matchesSearch =
      attendee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.qrCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEvent =
      eventFilter === "all" || attendee.event === eventFilter;
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "printed" && attendee.badgePrinted) ||
      (statusFilter === "not-printed" && !attendee.badgePrinted);

    return matchesSearch && matchesEvent && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "checked-in":
        return "bg-green-100 text-green-800 border-green-200";
      case "checked-out":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "registered":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "checked-in":
        return <CheckCircle className="h-4 w-4" />;
      case "checked-out":
        return <XCircle className="h-4 w-4" />;
      case "registered":
        return <Clock className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getBadgeStatusColor = (printed) => {
    return printed ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  const getBadgeStatusIcon = (printed) => {
    return printed ? (
      <CheckCircle className="h-4 w-4" />
    ) : (
      <XCircle className="h-4 w-4" />
    );
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

  const handlePrintBadge = (attendeeId) => {
    console.log(`Printing badge for attendee ${attendeeId}`);
  };

  const handleBulkPrint = () => {
    console.log(
      `Bulk printing badges for ${selectedAttendees.length} attendees`
    );
  };

  const handlePreviewBadge = (attendeeId) => {
    console.log(`Previewing badge for attendee ${attendeeId}`);
  };

  const handleEditBadge = (attendeeId) => {
    console.log(`Editing badge for attendee ${attendeeId}`);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Badge Printing Management
            </h1>
            <p className="text-gray-600">
              Design, preview, and print attendee badges for your events
            </p>
          </div>
          <div className="flex items-center space-x-3">
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
                Total Attendees
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {attendees.length}
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
              <p className="text-sm font-medium text-gray-600">
                Badges Printed
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {attendees.filter((a) => a.badgePrinted).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Not Printed</p>
              <p className="text-2xl font-bold text-gray-900">
                {attendees.filter((a) => !a.badgePrinted).length}
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
              <p className="text-sm font-medium text-gray-600">Print Rate</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(
                  (attendees.filter((a) => a.badgePrinted).length /
                    attendees.length) *
                    100
                )}
                %
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Badge Template Selection */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Badge Template
        </h2>
        <div className="flex flex-wrap gap-3">
          {badgeTemplates.map((template) => (
            <button
              key={template.value}
              onClick={() => setBadgeTemplate(template.value)}
              className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                badgeTemplate === template.value
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {template.label}
            </button>
          ))}
        </div>
      </div>

      {/* Print Settings */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Print Settings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Paper Size
            </label>
            <select
              value={printSettings.paperSize}
              onChange={(e) =>
                setPrintSettings({
                  ...printSettings,
                  paperSize: e.target.value,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="A4">A4</option>
              <option value="A5">A5</option>
              <option value="Letter">Letter</option>
              <option value="Legal">Legal</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Orientation
            </label>
            <select
              value={printSettings.orientation}
              onChange={(e) =>
                setPrintSettings({
                  ...printSettings,
                  orientation: e.target.value,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="portrait">Portrait</option>
              <option value="landscape">Landscape</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Copies
            </label>
            <input
              type="number"
              min="1"
              max="10"
              value={printSettings.copies}
              onChange={(e) =>
                setPrintSettings({
                  ...printSettings,
                  copies: parseInt(e.target.value),
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color Mode
            </label>
            <select
              value={printSettings.colorMode}
              onChange={(e) =>
                setPrintSettings({
                  ...printSettings,
                  colorMode: e.target.value,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="color">Color</option>
              <option value="grayscale">Grayscale</option>
              <option value="black-white">Black & White</option>
            </select>
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
                placeholder="Search by name, email, company, or QR code..."
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

          {/* Bulk Actions */}
          <div className="flex gap-2">
            <button
              onClick={handleBulkPrint}
              disabled={selectedAttendees.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
            >
              <Printer className="h-4 w-4 mr-2" />
              Print Selected
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center">
              <Settings className="h-4 w-4 mr-2" />
              Print All
            </button>
          </div>
        </div>
      </div>

      {/* Attendees Table */}
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
                  Attendee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event & Ticket
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Badge Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Template
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Print Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  QR Code
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
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src={attendee.profileImage}
                          alt={attendee.name}
                        />
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
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getBadgeStatusColor(
                        attendee.badgePrinted
                      )}`}
                    >
                      {getBadgeStatusIcon(attendee.badgePrinted)}
                      <span className="ml-1">
                        {attendee.badgePrinted ? "Printed" : "Not Printed"}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        badgeTemplates.find(
                          (t) => t.value === attendee.badgeTemplate
                        )?.color || "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {attendee.badgeTemplate}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {attendee.badgePrintDate
                      ? formatDateTime(attendee.badgePrintDate)
                      : "Not printed"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <QrCode className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm font-mono text-gray-900">
                        {attendee.qrCode}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handlePreviewBadge(attendee.id)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Preview Badge"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handlePrintBadge(attendee.id)}
                        className="text-green-600 hover:text-green-900"
                        title="Print Badge"
                      >
                        <Printer className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleEditBadge(attendee.id)}
                        className="text-gray-600 hover:text-gray-900"
                        title="Edit Badge"
                      >
                        <Edit className="h-4 w-4" />
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
            No attendees found
          </h3>
          <p className="text-gray-500 mb-4">
            {searchQuery || eventFilter !== "all" || statusFilter !== "all"
              ? "Try adjusting your filters or search terms"
              : "No attendees available for the selected criteria"}
          </p>
        </div>
      )}
    </div>
  );
};

export default BadgePrinting;
