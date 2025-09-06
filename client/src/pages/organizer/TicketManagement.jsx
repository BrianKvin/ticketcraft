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
  Ticket,
  QrCode,
  CreditCard,
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Target,
  Zap,
  Send,
  Copy,
  Trash2,
  Archive,
  Star,
  Shield,
  Lock,
  Unlock,
  RotateCcw,
  Check,
  X,
  Clock3,
  Calendar as CalendarIcon,
  UserCheck,
  UserX,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const TicketManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [eventFilter, setEventFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [selectedTickets, setSelectedTickets] = useState([]);

  // Comprehensive mock ticket management data
  const tickets = [
    {
      id: 1,
      ticketNumber: "TECH2024-001",
      qrCode: "TECH2024-SJ-001",
      event: "Tech Innovation Summit 2024",
      eventDate: "2024-03-15",
      eventTime: "9:00 AM - 5:00 PM",
      eventLocation: "Convention Center, San Francisco",
      attendeeName: "Sarah Johnson",
      attendeeEmail: "sarah.johnson@example.com",
      attendeePhone: "+1 (555) 123-4567",
      ticketType: "VIP",
      price: 299,
      status: "active",
      purchaseDate: "2024-02-10T14:30:00Z",
      paymentMethod: "Credit Card",
      paymentStatus: "completed",
      transactionId: "TXN-001-2024",
      seatNumber: "VIP-001",
      section: "VIP Section",
      row: "A",
      seat: "1",
      dietaryRequirements: "Vegetarian",
      specialRequests: "Front row seating",
      checkInStatus: "checked-in",
      checkInTime: "2024-03-15T09:15:30Z",
      checkOutTime: null,
      refundStatus: "none",
      refundAmount: 0,
      refundDate: null,
      transferStatus: "none",
      transferTo: null,
      transferDate: null,
      notes: "Early arrival, requested front row seating",
      isTransferable: true,
      isRefundable: true,
      expiryDate: "2024-03-15T23:59:59Z",
      createdAt: "2024-02-10T14:30:00Z",
      updatedAt: "2024-03-15T09:15:30Z",
    },
    {
      id: 2,
      ticketNumber: "STARTUP2024-002",
      qrCode: "STARTUP2024-MC-002",
      event: "Startup Pitch Competition",
      eventDate: "2024-05-15",
      eventTime: "2:00 PM - 6:00 PM",
      eventLocation: "Innovation Hub, New York",
      attendeeName: "Michael Chen",
      attendeeEmail: "michael.chen@example.com",
      attendeePhone: "+1 (555) 234-5678",
      ticketType: "Student",
      price: 75,
      status: "active",
      purchaseDate: "2024-03-01T10:15:00Z",
      paymentMethod: "PayPal",
      paymentStatus: "completed",
      transactionId: "TXN-002-2024",
      seatNumber: "STU-015",
      section: "General Admission",
      row: "C",
      seat: "15",
      dietaryRequirements: "None",
      specialRequests: "Student discount applied",
      checkInStatus: "registered",
      checkInTime: null,
      checkOutTime: null,
      refundStatus: "none",
      refundAmount: 0,
      refundDate: null,
      transferStatus: "none",
      transferTo: null,
      transferDate: null,
      notes: "Student discount applied",
      isTransferable: true,
      isRefundable: true,
      expiryDate: "2024-05-15T23:59:59Z",
      createdAt: "2024-03-01T10:15:00Z",
      updatedAt: "2024-03-01T10:15:00Z",
    },
    {
      id: 3,
      ticketNumber: "FOOD2024-003",
      qrCode: "FOOD2024-EW-003",
      event: "Food & Wine Expo",
      eventDate: "2024-02-10",
      eventTime: "11:00 AM - 7:00 PM",
      eventLocation: "Exhibition Center, Chicago",
      attendeeName: "Emma Wilson",
      attendeeEmail: "emma.wilson@example.com",
      attendeePhone: "+1 (555) 345-6789",
      ticketType: "General",
      price: 80,
      status: "used",
      purchaseDate: "2024-01-15T16:45:00Z",
      paymentMethod: "Bank Transfer",
      paymentStatus: "completed",
      transactionId: "TXN-003-2024",
      seatNumber: "GEN-042",
      section: "General Admission",
      row: "D",
      seat: "42",
      dietaryRequirements: "Gluten-Free",
      specialRequests: "VIP wine tasting session interested",
      checkInStatus: "checked-out",
      checkInTime: "2024-02-10T11:30:15Z",
      checkOutTime: "2024-02-10T18:45:30Z",
      refundStatus: "none",
      refundAmount: 0,
      refundDate: null,
      transferStatus: "none",
      transferTo: null,
      transferDate: null,
      notes: "VIP wine tasting session attended",
      isTransferable: false,
      isRefundable: false,
      expiryDate: "2024-02-10T23:59:59Z",
      createdAt: "2024-01-15T16:45:00Z",
      updatedAt: "2024-02-10T18:45:30Z",
    },
    {
      id: 4,
      ticketNumber: "MARKETING2024-004",
      qrCode: "MARKETING2024-DR-004",
      event: "Digital Marketing Conference",
      eventDate: "2024-01-20",
      eventTime: "8:00 AM - 4:00 PM",
      eventLocation: "Conference Center, Los Angeles",
      attendeeName: "David Rodriguez",
      attendeeEmail: "david.rodriguez@example.com",
      attendeePhone: "+1 (555) 456-7890",
      ticketType: "Premium",
      price: 199,
      status: "active",
      purchaseDate: "2023-12-01T09:20:00Z",
      paymentMethod: "Credit Card",
      paymentStatus: "completed",
      transactionId: "TXN-004-2024",
      seatNumber: "PRE-008",
      section: "Premium Section",
      row: "B",
      seat: "8",
      dietaryRequirements: "None",
      specialRequests: "Speaker at 2:00 PM session",
      checkInStatus: "checked-in",
      checkInTime: "2024-01-20T08:45:20Z",
      checkOutTime: null,
      refundStatus: "none",
      refundAmount: 0,
      refundDate: null,
      transferStatus: "none",
      transferTo: null,
      transferDate: null,
      notes: "Speaker at 2:00 PM session",
      isTransferable: true,
      isRefundable: true,
      expiryDate: "2024-01-20T23:59:59Z",
      createdAt: "2023-12-01T09:20:00Z",
      updatedAt: "2024-01-20T08:45:20Z",
    },
    {
      id: 5,
      ticketNumber: "TECH2024-005",
      qrCode: "TECH2024-LT-005",
      event: "Tech Innovation Summit 2024",
      eventDate: "2024-03-15",
      eventTime: "9:00 AM - 5:00 PM",
      eventLocation: "Convention Center, San Francisco",
      attendeeName: "Lisa Thompson",
      attendeeEmail: "lisa.thompson@example.com",
      attendeePhone: "+1 (555) 567-8901",
      ticketType: "General",
      price: 199,
      status: "refunded",
      purchaseDate: "2024-02-20T11:45:00Z",
      paymentMethod: "Credit Card",
      paymentStatus: "refunded",
      transactionId: "TXN-005-2024",
      seatNumber: "GEN-128",
      section: "General Admission",
      row: "E",
      seat: "28",
      dietaryRequirements: "Vegan",
      specialRequests: "Requested networking session materials",
      checkInStatus: "cancelled",
      checkInTime: null,
      checkOutTime: null,
      refundStatus: "completed",
      refundAmount: 199,
      refundDate: "2024-03-01T14:30:00Z",
      transferStatus: "none",
      transferTo: null,
      transferDate: null,
      notes: "Refunded due to scheduling conflict",
      isTransferable: false,
      isRefundable: false,
      expiryDate: "2024-03-15T23:59:59Z",
      createdAt: "2024-02-20T11:45:00Z",
      updatedAt: "2024-03-01T14:30:00Z",
    },
    {
      id: 6,
      ticketNumber: "LEADERSHIP2024-006",
      qrCode: "LEADERSHIP2024-JA-006",
      event: "Business Leadership Workshop",
      eventDate: "2024-04-02",
      eventTime: "9:00 AM - 3:00 PM",
      eventLocation: "Business Center, Miami",
      attendeeName: "James Anderson",
      attendeeEmail: "james.anderson@example.com",
      attendeePhone: "+1 (555) 678-9012",
      ticketType: "Executive",
      price: 299,
      status: "transferred",
      purchaseDate: "2024-02-15T08:30:00Z",
      paymentMethod: "Credit Card",
      paymentStatus: "completed",
      transactionId: "TXN-006-2024",
      seatNumber: "EXE-003",
      section: "Executive Section",
      row: "A",
      seat: "3",
      dietaryRequirements: "None",
      specialRequests: "VIP package includes lunch meeting",
      checkInStatus: "transferred",
      checkInTime: null,
      checkOutTime: null,
      refundStatus: "none",
      refundAmount: 0,
      refundDate: null,
      transferStatus: "completed",
      transferTo: "Sarah Anderson",
      transferDate: "2024-03-15T10:00:00Z",
      notes: "Transferred to spouse due to business trip",
      isTransferable: true,
      isRefundable: true,
      expiryDate: "2024-04-02T23:59:59Z",
      createdAt: "2024-02-15T08:30:00Z",
      updatedAt: "2024-03-15T10:00:00Z",
    },
    {
      id: 7,
      ticketNumber: "FOOD2024-007",
      qrCode: "FOOD2024-MG-007",
      event: "Food & Wine Expo",
      eventDate: "2024-02-10",
      eventTime: "11:00 AM - 7:00 PM",
      eventLocation: "Exhibition Center, Chicago",
      attendeeName: "Maria Garcia",
      attendeeEmail: "maria.garcia@example.com",
      attendeePhone: "+1 (555) 789-0123",
      ticketType: "VIP",
      price: 150,
      status: "used",
      purchaseDate: "2024-01-20T13:15:00Z",
      paymentMethod: "PayPal",
      paymentStatus: "completed",
      transactionId: "TXN-007-2024",
      seatNumber: "VIP-012",
      section: "VIP Section",
      row: "A",
      seat: "12",
      dietaryRequirements: "None",
      specialRequests: "Participated in wine tasting competition",
      checkInStatus: "checked-out",
      checkInTime: "2024-02-10T10:15:30Z",
      checkOutTime: "2024-02-10T19:30:15Z",
      refundStatus: "none",
      refundAmount: 0,
      refundDate: null,
      transferStatus: "none",
      transferTo: null,
      transferDate: null,
      notes: "Participated in wine tasting competition",
      isTransferable: false,
      isRefundable: false,
      expiryDate: "2024-02-10T23:59:59Z",
      createdAt: "2024-01-20T13:15:00Z",
      updatedAt: "2024-02-10T19:30:15Z",
    },
    {
      id: 8,
      ticketNumber: "STARTUP2024-008",
      qrCode: "STARTUP2024-RK-008",
      event: "Startup Pitch Competition",
      eventDate: "2024-05-15",
      eventTime: "2:00 PM - 6:00 PM",
      eventLocation: "Innovation Hub, New York",
      attendeeName: "Robert Kim",
      attendeeEmail: "robert.kim@example.com",
      attendeePhone: "+1 (555) 890-1234",
      ticketType: "Investor",
      price: 0,
      status: "active",
      purchaseDate: "2024-04-01T10:20:00Z",
      paymentMethod: "Complimentary",
      paymentStatus: "completed",
      transactionId: "TXN-008-2024",
      seatNumber: "INV-001",
      section: "Investor Section",
      row: "A",
      seat: "1",
      dietaryRequirements: "Halal",
      specialRequests: "Judge for pitch competition",
      checkInStatus: "checked-in",
      checkInTime: "2024-05-15T13:45:10Z",
      checkOutTime: null,
      refundStatus: "none",
      refundAmount: 0,
      refundDate: null,
      transferStatus: "none",
      transferTo: null,
      transferDate: null,
      notes: "Judge for pitch competition",
      isTransferable: false,
      isRefundable: false,
      expiryDate: "2024-05-15T23:59:59Z",
      createdAt: "2024-04-01T10:20:00Z",
      updatedAt: "2024-05-15T13:45:10Z",
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
    { value: "all", label: "All Status", count: tickets.length },
    {
      value: "active",
      label: "Active",
      count: tickets.filter((t) => t.status === "active").length,
    },
    {
      value: "used",
      label: "Used",
      count: tickets.filter((t) => t.status === "used").length,
    },
    {
      value: "refunded",
      label: "Refunded",
      count: tickets.filter((t) => t.status === "refunded").length,
    },
    {
      value: "transferred",
      label: "Transferred",
      count: tickets.filter((t) => t.status === "transferred").length,
    },
    {
      value: "cancelled",
      label: "Cancelled",
      count: tickets.filter((t) => t.status === "cancelled").length,
    },
  ];

  const typeOptions = [
    { value: "all", label: "All Types", count: tickets.length },
    {
      value: "VIP",
      label: "VIP",
      count: tickets.filter((t) => t.ticketType === "VIP").length,
    },
    {
      value: "Premium",
      label: "Premium",
      count: tickets.filter((t) => t.ticketType === "Premium").length,
    },
    {
      value: "General",
      label: "General",
      count: tickets.filter((t) => t.ticketType === "General").length,
    },
    {
      value: "Student",
      label: "Student",
      count: tickets.filter((t) => t.ticketType === "Student").length,
    },
    {
      value: "Executive",
      label: "Executive",
      count: tickets.filter((t) => t.ticketType === "Executive").length,
    },
    {
      value: "Investor",
      label: "Investor",
      count: tickets.filter((t) => t.ticketType === "Investor").length,
    },
  ];

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.ticketNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.attendeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.attendeeEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.qrCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEvent = eventFilter === "all" || ticket.event === eventFilter;
    const matchesStatus =
      statusFilter === "all" || ticket.status === statusFilter;
    const matchesType =
      typeFilter === "all" || ticket.ticketType === typeFilter;

    return matchesSearch && matchesEvent && matchesStatus && matchesType;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "used":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "refunded":
        return "bg-red-100 text-red-800 border-red-200";
      case "transferred":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "cancelled":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4" />;
      case "used":
        return <CheckCircle className="h-4 w-4" />;
      case "refunded":
        return <XCircle className="h-4 w-4" />;
      case "transferred":
        return <ArrowUpRight className="h-4 w-4" />;
      case "cancelled":
        return <X className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getCheckInStatusColor = (status) => {
    switch (status) {
      case "checked-in":
        return "bg-green-100 text-green-800";
      case "checked-out":
        return "bg-blue-100 text-blue-800";
      case "registered":
        return "bg-yellow-100 text-yellow-800";
      case "transferred":
        return "bg-purple-100 text-purple-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCheckInStatusIcon = (status) => {
    switch (status) {
      case "checked-in":
        return <UserCheck className="h-4 w-4" />;
      case "checked-out":
        return <UserX className="h-4 w-4" />;
      case "registered":
        return <Clock className="h-4 w-4" />;
      case "transferred":
        return <ArrowUpRight className="h-4 w-4" />;
      case "cancelled":
        return <X className="h-4 w-4" />;
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

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const handleTransferTicket = (ticketId) => {
    console.log(`Transferring ticket ${ticketId}`);
  };

  const handleRefundTicket = (ticketId) => {
    console.log(`Refunding ticket ${ticketId}`);
  };

  const handleCancelTicket = (ticketId) => {
    console.log(`Cancelling ticket ${ticketId}`);
  };

  const handleResendTicket = (ticketId) => {
    console.log(`Resending ticket ${ticketId}`);
  };

  const handleBulkAction = (action) => {
    console.log(`Bulk action: ${action} for ${selectedTickets.length} tickets`);
  };

  const handleViewTicket = (ticketId) => {
    console.log(`Viewing ticket ${ticketId}`);
  };

  const handleEditTicket = (ticketId) => {
    console.log(`Editing ticket ${ticketId}`);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Ticket Management
            </h1>
            <p className="text-gray-600">
              Manage and track all event tickets, transfers, and refunds
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
              <Ticket className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Tickets</p>
              <p className="text-2xl font-bold text-gray-900">
                {tickets.length}
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
                Active Tickets
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {tickets.filter((t) => t.status === "active").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Used Tickets</p>
              <p className="text-2xl font-bold text-gray-900">
                {tickets.filter((t) => t.status === "used").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(
                  tickets.reduce((sum, ticket) => sum + ticket.price, 0)
                )}
              </p>
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
                placeholder="Search by ticket number, attendee name, email, or QR code..."
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

          {/* Type Filter */}
          <div className="lg:w-48">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {typeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} ({option.count})
                </option>
              ))}
            </select>
          </div>

          {/* Bulk Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => handleBulkAction("resend")}
              disabled={selectedTickets.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Resend
            </button>
            <button
              onClick={() => handleBulkAction("export")}
              disabled={selectedTickets.length === 0}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Tickets Table */}
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
                        setSelectedTickets(filteredTickets.map((t) => t.id));
                      } else {
                        setSelectedTickets([]);
                      }
                    }}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ticket Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attendee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event & Seat
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check-in
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedTickets.includes(ticket.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedTickets([...selectedTickets, ticket.id]);
                        } else {
                          setSelectedTickets(
                            selectedTickets.filter((id) => id !== ticket.id)
                          );
                        }
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Ticket className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {ticket.ticketNumber}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <QrCode className="h-3 w-3 mr-1" />
                          {ticket.qrCode}
                        </div>
                        <div className="text-xs text-gray-400">
                          {formatDateTime(ticket.purchaseDate)}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-medium text-sm">
                        {ticket.attendeeName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {ticket.attendeeName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {ticket.attendeeEmail}
                        </div>
                        <div className="text-xs text-gray-400">
                          {ticket.attendeePhone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{ticket.event}</div>
                    <div className="text-sm text-gray-500">
                      {ticket.ticketType} - {formatCurrency(ticket.price)}
                    </div>
                    <div className="text-xs text-gray-400">
                      {ticket.seatNumber} • {ticket.section}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                        ticket.status
                      )}`}
                    >
                      {getStatusIcon(ticket.status)}
                      <span className="ml-1 capitalize">{ticket.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCheckInStatusColor(
                        ticket.checkInStatus
                      )}`}
                    >
                      {getCheckInStatusIcon(ticket.checkInStatus)}
                      <span className="ml-1 capitalize">
                        {ticket.checkInStatus.replace("-", " ")}
                      </span>
                    </span>
                    {ticket.checkInTime && (
                      <div className="text-xs text-gray-500 mt-1">
                        {formatDateTime(ticket.checkInTime)}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {ticket.paymentMethod}
                    </div>
                    <div className="text-sm text-gray-500">
                      {ticket.paymentStatus}
                    </div>
                    <div className="text-xs text-gray-400">
                      {ticket.transactionId}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleViewTicket(ticket.id)}
                        className="text-blue-600 hover:text-blue-900"
                        title="View Ticket"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      {ticket.isTransferable && ticket.status === "active" && (
                        <button
                          onClick={() => handleTransferTicket(ticket.id)}
                          className="text-purple-600 hover:text-purple-900"
                          title="Transfer Ticket"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                      )}
                      {ticket.isRefundable && ticket.status === "active" && (
                        <button
                          onClick={() => handleRefundTicket(ticket.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Refund Ticket"
                        >
                          <RotateCcw className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        onClick={() => handleResendTicket(ticket.id)}
                        className="text-green-600 hover:text-green-900"
                        title="Resend Ticket"
                      >
                        <Send className="h-4 w-4" />
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
      {filteredTickets.length === 0 && (
        <div className="text-center py-12">
          <Ticket className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No tickets found
          </h3>
          <p className="text-gray-500 mb-4">
            {searchQuery ||
            eventFilter !== "all" ||
            statusFilter !== "all" ||
            typeFilter !== "all"
              ? "Try adjusting your filters or search terms"
              : "No tickets available for the selected criteria"}
          </p>
        </div>
      )}
    </div>
  );
};

export default TicketManagement;

