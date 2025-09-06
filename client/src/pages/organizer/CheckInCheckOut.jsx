import React, { useState } from "react";
import {
  Search,
  Filter,
  QrCode,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  UserCheck,
  UserX,
  Download,
  RefreshCw,
  Camera,
  Smartphone,
  Wifi,
  WifiOff,
  AlertCircle,
  CheckSquare,
  Square,
  Eye,
  Edit,
  MoreVertical,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Building,
  CreditCard,
  Ticket,
  Scan,
  Zap,
  Target,
  BarChart3,
} from "lucide-react";

const CheckInCheckOut = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [eventFilter, setEventFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [scanMode, setScanMode] = useState("checkin");
  const [isScanning, setIsScanning] = useState(false);
  const [selectedAttendees, setSelectedAttendees] = useState([]);

  // Comprehensive mock check-in/check-out data
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
      checkInTime: "2024-03-15T09:15:30Z",
      checkOutTime: null,
      arrivalTime: "09:15 AM",
      departureTime: null,
      registrationDate: "2024-02-10",
      company: "TechCorp Inc.",
      jobTitle: "Software Engineer",
      qrCode: "TECH2024-SJ-001",
      badgePrinted: true,
      dietaryRequirements: "Vegetarian",
      emergencyContact: "John Johnson (+1 555-987-6543)",
      notes: "Early arrival, requested front row seating",
      checkInMethod: "QR Code",
      checkInLocation: "Main Entrance",
      checkInStaff: "Alice Smith",
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
      checkInTime: null,
      checkOutTime: null,
      arrivalTime: null,
      departureTime: null,
      registrationDate: "2024-03-01",
      company: "InnovateLab",
      jobTitle: "Product Manager",
      qrCode: "STARTUP2024-MC-002",
      badgePrinted: false,
      dietaryRequirements: "None",
      emergencyContact: "Lisa Chen (+1 555-876-5432)",
      notes: "Student discount applied",
      checkInMethod: null,
      checkInLocation: null,
      checkInStaff: null,
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
      checkInTime: "2024-02-10T11:30:15Z",
      checkOutTime: "2024-02-10T18:45:30Z",
      arrivalTime: "11:30 AM",
      departureTime: "06:45 PM",
      registrationDate: "2024-01-15",
      company: "Culinary Arts Co.",
      jobTitle: "Executive Chef",
      qrCode: "FOOD2024-EW-003",
      badgePrinted: true,
      dietaryRequirements: "Gluten-Free",
      emergencyContact: "David Wilson (+1 555-765-4321)",
      notes: "VIP wine tasting session attended",
      checkInMethod: "Manual",
      checkInLocation: "VIP Entrance",
      checkInStaff: "Bob Johnson",
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
      checkInTime: "2024-01-20T08:45:20Z",
      checkOutTime: null,
      arrivalTime: "08:45 AM",
      departureTime: null,
      registrationDate: "2023-12-01",
      company: "Marketing Pro",
      jobTitle: "Digital Marketing Director",
      qrCode: "MARKETING2024-DR-004",
      badgePrinted: true,
      dietaryRequirements: "None",
      emergencyContact: "Maria Rodriguez (+1 555-654-3210)",
      notes: "Speaker at 2:00 PM session",
      checkInMethod: "QR Code",
      checkInLocation: "Speaker Entrance",
      checkInStaff: "Carol Davis",
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
      checkInTime: "2024-03-15T10:30:45Z",
      checkOutTime: null,
      arrivalTime: "10:30 AM",
      departureTime: null,
      registrationDate: "2024-02-20",
      company: "Data Solutions Inc.",
      jobTitle: "Data Scientist",
      qrCode: "TECH2024-LT-005",
      badgePrinted: true,
      dietaryRequirements: "Vegan",
      emergencyContact: "Mark Thompson (+1 555-543-2109)",
      notes: "Requested networking session materials",
      checkInMethod: "QR Code",
      checkInLocation: "Main Entrance",
      checkInStaff: "Alice Smith",
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
      checkInTime: null,
      checkOutTime: null,
      arrivalTime: null,
      departureTime: null,
      registrationDate: "2024-02-15",
      company: "Leadership Institute",
      jobTitle: "CEO",
      qrCode: "LEADERSHIP2024-JA-006",
      badgePrinted: false,
      dietaryRequirements: "None",
      emergencyContact: "Sarah Anderson (+1 555-432-1098)",
      notes: "VIP package includes lunch meeting",
      checkInMethod: null,
      checkInLocation: null,
      checkInStaff: null,
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
      checkInTime: "2024-02-10T10:15:30Z",
      checkOutTime: "2024-02-10T19:30:15Z",
      arrivalTime: "10:15 AM",
      departureTime: "07:30 PM",
      registrationDate: "2024-01-20",
      company: "Wine & Dine Co.",
      jobTitle: "Sommelier",
      qrCode: "FOOD2024-MG-007",
      badgePrinted: true,
      dietaryRequirements: "None",
      emergencyContact: "Carlos Garcia (+1 555-321-0987)",
      notes: "Participated in wine tasting competition",
      checkInMethod: "QR Code",
      checkInLocation: "VIP Entrance",
      checkInStaff: "Bob Johnson",
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
      checkInTime: "2024-05-15T13:45:10Z",
      checkOutTime: null,
      arrivalTime: "01:45 PM",
      departureTime: null,
      registrationDate: "2024-04-01",
      company: "Venture Capital Partners",
      jobTitle: "Investment Partner",
      qrCode: "STARTUP2024-RK-008",
      badgePrinted: true,
      dietaryRequirements: "Halal",
      emergencyContact: "Jennifer Kim (+1 555-210-9876)",
      notes: "Judge for pitch competition",
      checkInMethod: "Manual",
      checkInLocation: "Judge Entrance",
      checkInStaff: "Carol Davis",
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
      value: "registered",
      label: "Registered",
      count: attendees.filter((a) => a.status === "registered").length,
    },
    {
      value: "checked-in",
      label: "Checked In",
      count: attendees.filter((a) => a.status === "checked-in").length,
    },
    {
      value: "checked-out",
      label: "Checked Out",
      count: attendees.filter((a) => a.status === "checked-out").length,
    },
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
      statusFilter === "all" || attendee.status === statusFilter;

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

  const formatTime = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleCheckIn = (attendeeId) => {
    // Mock check-in functionality
    console.log(`Checking in attendee ${attendeeId}`);
  };

  const handleCheckOut = (attendeeId) => {
    // Mock check-out functionality
    console.log(`Checking out attendee ${attendeeId}`);
  };

  const handleBulkAction = (action) => {
    console.log(
      `Bulk action: ${action} for ${selectedAttendees.length} attendees`
    );
  };

  const handleQRScan = () => {
    setIsScanning(true);
    // Mock QR scan functionality
    setTimeout(() => {
      setIsScanning(false);
      console.log("QR Code scanned successfully");
    }, 2000);
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
              Check-in/Check-out Management
            </h1>
            <p className="text-gray-600">
              Manage attendee check-ins and check-outs for your events
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
              <UserCheck className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Checked In</p>
              <p className="text-2xl font-bold text-gray-900">
                {attendees.filter((a) => a.status === "checked-in").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <UserX className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Checked Out</p>
              <p className="text-2xl font-bold text-gray-900">
                {attendees.filter((a) => a.status === "checked-out").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">
                {attendees.filter((a) => a.status === "registered").length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* QR Scanner Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            QR Code Scanner
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setScanMode("checkin")}
              className={`px-3 py-1 rounded text-sm font-medium ${
                scanMode === "checkin"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Check-in
            </button>
            <button
              onClick={() => setScanMode("checkout")}
              className={`px-3 py-1 rounded text-sm font-medium ${
                scanMode === "checkout"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Check-out
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleQRScan}
            disabled={isScanning}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            <QrCode className="h-4 w-4 mr-2" />
            {isScanning ? "Scanning..." : "Start QR Scan"}
          </button>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Wifi className="h-4 w-4" />
            <span>Scanner Online</span>
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
              onClick={() => handleBulkAction("checkin")}
              disabled={selectedAttendees.length === 0}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center"
            >
              <UserCheck className="h-4 w-4 mr-2" />
              Check In
            </button>
            <button
              onClick={() => handleBulkAction("checkout")}
              disabled={selectedAttendees.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
            >
              <UserX className="h-4 w-4 mr-2" />
              Check Out
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
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check-in Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check-out Time
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
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                        attendee.status
                      )}`}
                    >
                      {getStatusIcon(attendee.status)}
                      <span className="ml-1 capitalize">
                        {attendee.status.replace("-", " ")}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {attendee.checkInTime ? (
                      <div>
                        <div>{formatTime(attendee.checkInTime)}</div>
                        <div className="text-xs text-gray-500">
                          {attendee.checkInMethod} • {attendee.checkInLocation}
                        </div>
                      </div>
                    ) : (
                      "Not checked in"
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {attendee.checkOutTime ? (
                      <div>
                        <div>{formatTime(attendee.checkOutTime)}</div>
                        <div className="text-xs text-gray-500">
                          Duration:{" "}
                          {attendee.checkInTime
                            ? Math.round(
                                (new Date(attendee.checkOutTime) -
                                  new Date(attendee.checkInTime)) /
                                  (1000 * 60 * 60)
                              ) + "h"
                            : "N/A"}
                        </div>
                      </div>
                    ) : (
                      "Not checked out"
                    )}
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
                      {attendee.status === "registered" && (
                        <button
                          onClick={() => handleCheckIn(attendee.id)}
                          className="text-green-600 hover:text-green-900"
                          title="Check In"
                        >
                          <UserCheck className="h-4 w-4" />
                        </button>
                      )}
                      {attendee.status === "checked-in" && (
                        <button
                          onClick={() => handleCheckOut(attendee.id)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Check Out"
                        >
                          <UserX className="h-4 w-4" />
                        </button>
                      )}
                      <button className="text-gray-600 hover:text-gray-900">
                        <Eye className="h-4 w-4" />
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

export default CheckInCheckOut;
