import React, { useState, useEffect } from "react";
import {
  QrCode,
  Camera,
  CheckCircle,
  XCircle,
  Clock,
  User,
  Calendar,
  MapPin,
  Users,
  BarChart3,
  Download,
  RefreshCw,
} from "lucide-react";

const AdminTicketScanner = () => {
  const [_isScanning, setIsScanning] = useState(false);
  const [scannedTickets, setScannedTickets] = useState([]);
  const [scanResult, setScanResult] = useState(null);
  const [showScanner, setShowScanner] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("all");

  // Mock events for admin to scan
  const events = [
    {
      id: 1,
      name: "Tech Innovation Summit 2024",
      date: "2024-03-15",
      location: "San Francisco, CA",
      status: "active",
    },
    {
      id: 2,
      name: "Business Leadership Workshop",
      date: "2024-04-02",
      location: "New York, NY",
      status: "upcoming",
    },
    {
      id: 3,
      name: "Food & Wine Expo",
      date: "2024-02-10",
      location: "Los Angeles, CA",
      status: "completed",
    },
  ];

  // Mock scanned tickets data
  const mockScannedTickets = [
    {
      id: "TKT-001",
      attendeeName: "John Smith",
      email: "john.smith@example.com",
      eventName: "Tech Innovation Summit 2024",
      eventDate: "2024-03-15",
      eventTime: "9:00 AM",
      eventLocation: "San Francisco, CA",
      ticketType: "VIP",
      price: 299,
      scanTime: "2024-03-15T09:15:30Z",
      status: "checked-in",
      arrivalTime: "09:15 AM",
      scannedBy: "Admin Staff",
    },
    {
      id: "TKT-002",
      attendeeName: "Sarah Johnson",
      email: "sarah.j@example.com",
      eventName: "Tech Innovation Summit 2024",
      eventDate: "2024-03-15",
      eventTime: "9:00 AM",
      eventLocation: "San Francisco, CA",
      ticketType: "General",
      price: 199,
      scanTime: "2024-03-15T09:22:15Z",
      status: "checked-in",
      arrivalTime: "09:22 AM",
      scannedBy: "Admin Staff",
    },
    {
      id: "TKT-003",
      attendeeName: "Mike Chen",
      email: "mike.chen@example.com",
      eventName: "Business Leadership Workshop",
      eventDate: "2024-04-02",
      eventTime: "10:00 AM",
      eventLocation: "New York, NY",
      ticketType: "Premium",
      price: 150,
      scanTime: "2024-04-02T10:05:45Z",
      status: "checked-in",
      arrivalTime: "10:05 AM",
      scannedBy: "Admin Staff",
    },
    {
      id: "TKT-004",
      attendeeName: "Emma Wilson",
      email: "emma.wilson@example.com",
      eventName: "Tech Innovation Summit 2024",
      eventDate: "2024-03-15",
      eventTime: "9:00 AM",
      eventLocation: "San Francisco, CA",
      ticketType: "General",
      price: 199,
      scanTime: "2024-03-15T09:35:20Z",
      status: "checked-in",
      arrivalTime: "09:35 AM",
      scannedBy: "Admin Staff",
    },
    {
      id: "TKT-005",
      attendeeName: "David Rodriguez",
      email: "david.r@example.com",
      eventName: "Food & Wine Expo",
      eventDate: "2024-02-10",
      eventTime: "11:00 AM",
      eventLocation: "Los Angeles, CA",
      ticketType: "VIP",
      price: 250,
      scanTime: "2024-02-10T11:10:15Z",
      status: "checked-in",
      arrivalTime: "11:10 AM",
      scannedBy: "Admin Staff",
    },
    {
      id: "TKT-006",
      attendeeName: "Lisa Park",
      email: "lisa.park@example.com",
      eventName: "Digital Marketing Conference",
      eventDate: "2024-01-20",
      eventTime: "8:30 AM",
      eventLocation: "Chicago, IL",
      ticketType: "Early Bird",
      price: 120,
      scanTime: "2024-01-20T08:45:30Z",
      status: "checked-in",
      arrivalTime: "08:45 AM",
      scannedBy: "Admin Staff",
    },
    {
      id: "TKT-007",
      attendeeName: "Alex Thompson",
      email: "alex.t@example.com",
      eventName: "Startup Pitch Competition",
      eventDate: "2024-05-15",
      eventTime: "2:00 PM",
      eventLocation: "Austin, TX",
      ticketType: "Student",
      price: 75,
      scanTime: "2024-05-15T14:20:45Z",
      status: "checked-in",
      arrivalTime: "02:20 PM",
      scannedBy: "Admin Staff",
    },
    {
      id: "TKT-008",
      attendeeName: "Maria Garcia",
      email: "maria.garcia@example.com",
      eventName: "Tech Innovation Summit 2024",
      eventDate: "2024-03-15",
      eventTime: "9:00 AM",
      eventLocation: "San Francisco, CA",
      ticketType: "VIP",
      price: 299,
      scanTime: "2024-03-15T09:45:10Z",
      status: "checked-out",
      arrivalTime: "09:45 AM",
      scannedBy: "Admin Staff",
    },
    {
      id: "TKT-009",
      attendeeName: "James Brown",
      email: "james.brown@example.com",
      eventName: "Business Leadership Workshop",
      eventDate: "2024-04-02",
      eventTime: "10:00 AM",
      eventLocation: "New York, NY",
      ticketType: "Premium",
      price: 150,
      scanTime: "2024-04-02T10:15:30Z",
      status: "checked-in",
      arrivalTime: "10:15 AM",
      scannedBy: "Admin Staff",
    },
    {
      id: "TKT-010",
      attendeeName: "Jennifer Lee",
      email: "jennifer.lee@example.com",
      eventName: "Food & Wine Expo",
      eventDate: "2024-02-10",
      eventTime: "11:00 AM",
      eventLocation: "Los Angeles, CA",
      ticketType: "General",
      price: 150,
      scanTime: "2024-02-10T11:30:20Z",
      status: "checked-in",
      arrivalTime: "11:30 AM",
      scannedBy: "Admin Staff",
    },
  ];

  useEffect(() => {
    setScannedTickets(mockScannedTickets);
  }, []);

  const handleScan = (ticketId) => {
    // Simulate scanning a ticket
    const newTicket = {
      id: ticketId,
      attendeeName: "New Attendee",
      email: "new@example.com",
      eventName:
        selectedEvent === "all"
          ? "Current Event"
          : events.find((e) => e.id === parseInt(selectedEvent))?.name ||
            "Current Event",
      eventDate: new Date().toISOString().split("T")[0],
      eventTime: "9:00 AM",
      eventLocation: "Event Venue",
      ticketType: "General",
      price: 199,
      scanTime: new Date().toISOString(),
      status: "checked-in",
      arrivalTime: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      scannedBy: "Admin Staff",
    };

    setScannedTickets((prev) => [newTicket, ...prev]);
    setScanResult({
      success: true,
      ticket: newTicket,
    });

    // Clear result after 3 seconds
    setTimeout(() => {
      setScanResult(null);
    }, 3000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "checked-in":
        return "bg-green-100 text-green-800 border-green-200";
      case "checked-out":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "invalid":
        return "bg-red-100 text-red-800 border-red-200";
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
      case "invalid":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const filteredTickets =
    selectedEvent === "all"
      ? scannedTickets
      : scannedTickets.filter(
          (ticket) =>
            events.find((e) => e.id === parseInt(selectedEvent))?.name ===
            ticket.eventName
        );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Ticket Scanner
        </h1>
        <p className="text-gray-600">
          Scan tickets for any event and manage check-ins
        </p>
      </div>

      {/* Event Selection */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-700">
            Select Event:
          </label>
          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Events</option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.name} - {event.date}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Scanner Interface */}
      <div className="space-y-6">
        {/* Scanner Controls */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Ticket Scanner
            </h2>
            <p className="text-gray-600">Scan QR codes to check-in attendees</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowScanner(!showScanner)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                showScanner
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
            >
              {showScanner ? "Stop Scanner" : "Start Scanner"}
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </button>
          </div>
        </div>

        {/* Scanner Interface */}
        {showScanner && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Camera className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Point camera at QR code</p>
                  <button
                    onClick={() => handleScan(`TKT-${Date.now()}`)}
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Simulate Scan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Scan Result */}
        {scanResult && (
          <div
            className={`rounded-lg p-4 border ${
              scanResult.success
                ? "bg-green-50 border-green-200"
                : "bg-red-50 border-red-200"
            }`}
          >
            <div className="flex items-center">
              {scanResult.success ? (
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600 mr-2" />
              )}
              <p
                className={`font-medium ${
                  scanResult.success ? "text-green-800" : "text-red-800"
                }`}
              >
                {scanResult.success
                  ? "Ticket scanned successfully!"
                  : "Invalid ticket or already scanned"}
              </p>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Checked In</p>
                <p className="text-xl font-bold text-gray-900">
                  {
                    filteredTickets.filter((t) => t.status === "checked-in")
                      .length
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Scanned</p>
                <p className="text-xl font-bold text-gray-900">
                  {filteredTickets.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <User className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Unique Attendees</p>
                <p className="text-xl font-bold text-gray-900">
                  {new Set(filteredTickets.map((t) => t.email)).size}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                <QrCode className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Success Rate</p>
                <p className="text-xl font-bold text-gray-900">98.5%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scanned Tickets List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Scans
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Attendee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ticket Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Scan Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Scanned By
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTickets.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {ticket.attendeeName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {ticket.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {ticket.eventName}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {ticket.eventDate} at {ticket.eventTime}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {ticket.eventLocation}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {ticket.ticketType}
                      </div>
                      <div className="text-sm text-gray-500">
                        ${ticket.price}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {ticket.arrivalTime}
                      </div>
                      <div className="text-sm text-gray-500">
                        {formatTime(ticket.scanTime)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          ticket.status
                        )}`}
                      >
                        {getStatusIcon(ticket.status)}
                        <span className="ml-1 capitalize">{ticket.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ticket.scannedBy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTicketScanner;




