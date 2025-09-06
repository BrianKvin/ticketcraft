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
  Receipt,
  Banknote,
  AlertTriangle,
  FileText,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Info,
  HelpCircle,
} from "lucide-react";

const Refunds = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [eventFilter, setEventFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [methodFilter, setMethodFilter] = useState("all");
  const [selectedRefunds, setSelectedRefunds] = useState([]);

  // Comprehensive mock refunds data
  const refunds = [
    {
      id: 1,
      refundId: "REF-001-2024",
      ticketNumber: "TECH2024-005",
      qrCode: "TECH2024-LT-005",
      event: "Tech Innovation Summit 2024",
      eventDate: "2024-03-15",
      attendeeName: "Lisa Thompson",
      attendeeEmail: "lisa.thompson@example.com",
      attendeePhone: "+1 (555) 567-8901",
      ticketType: "General",
      originalPrice: 199,
      refundAmount: 199,
      refundStatus: "completed",
      refundMethod: "Credit Card",
      refundDate: "2024-03-01T14:30:00Z",
      processedDate: "2024-03-01T15:45:00Z",
      reason: "Scheduling Conflict",
      reasonCategory: "Personal",
      description: "Unable to attend due to work commitment",
      requestedBy: "Lisa Thompson",
      requestedDate: "2024-02-28T10:15:00Z",
      approvedBy: "John Smith",
      approvedDate: "2024-03-01T09:30:00Z",
      processingTime: "2 hours",
      refundFee: 0,
      netRefund: 199,
      transactionId: "TXN-005-2024",
      refundTransactionId: "REF-TXN-001-2024",
      paymentProvider: "Stripe",
      refundProvider: "Stripe",
      notes: "Refunded due to scheduling conflict",
      isPartial: false,
      partialAmount: 0,
      remainingAmount: 0,
      isDisputed: false,
      disputeReason: null,
      disputeDate: null,
      isReversed: false,
      reversalDate: null,
      reversalReason: null,
      createdAt: "2024-02-28T10:15:00Z",
      updatedAt: "2024-03-01T15:45:00Z",
    },
    {
      id: 2,
      refundId: "REF-002-2024",
      ticketNumber: "FOOD2024-009",
      qrCode: "FOOD2024-JD-009",
      event: "Food & Wine Expo",
      eventDate: "2024-02-10",
      attendeeName: "John Davis",
      attendeeEmail: "john.davis@example.com",
      attendeePhone: "+1 (555) 111-2222",
      ticketType: "VIP",
      originalPrice: 150,
      refundAmount: 120,
      refundStatus: "completed",
      refundMethod: "PayPal",
      refundDate: "2024-02-05T16:20:00Z",
      processedDate: "2024-02-05T17:30:00Z",
      reason: "Event Cancelled",
      reasonCategory: "Event",
      description: "Event was cancelled due to weather conditions",
      requestedBy: "System",
      requestedDate: "2024-02-05T14:00:00Z",
      approvedBy: "System",
      approvedDate: "2024-02-05T14:00:00Z",
      processingTime: "1 hour",
      refundFee: 30,
      netRefund: 120,
      transactionId: "TXN-009-2024",
      refundTransactionId: "REF-TXN-002-2024",
      paymentProvider: "PayPal",
      refundProvider: "PayPal",
      notes: "Partial refund due to event cancellation",
      isPartial: true,
      partialAmount: 120,
      remainingAmount: 30,
      isDisputed: false,
      disputeReason: null,
      disputeDate: null,
      isReversed: false,
      reversalDate: null,
      reversalReason: null,
      createdAt: "2024-02-05T14:00:00Z",
      updatedAt: "2024-02-05T17:30:00Z",
    },
    {
      id: 3,
      refundId: "REF-003-2024",
      ticketNumber: "MARKETING2024-010",
      qrCode: "MARKETING2024-AB-010",
      event: "Digital Marketing Conference",
      eventDate: "2024-01-20",
      attendeeName: "Alice Brown",
      attendeeEmail: "alice.brown@example.com",
      attendeePhone: "+1 (555) 333-4444",
      ticketType: "Premium",
      originalPrice: 199,
      refundAmount: 199,
      refundStatus: "pending",
      refundMethod: "Bank Transfer",
      refundDate: null,
      processedDate: null,
      reason: "Duplicate Purchase",
      reasonCategory: "Technical",
      description: "Accidentally purchased two tickets for the same event",
      requestedBy: "Alice Brown",
      requestedDate: "2024-01-18T11:30:00Z",
      approvedBy: "Sarah Johnson",
      approvedDate: "2024-01-18T14:15:00Z",
      processingTime: "Pending",
      refundFee: 0,
      netRefund: 199,
      transactionId: "TXN-010-2024",
      refundTransactionId: null,
      paymentProvider: "Bank Transfer",
      refundProvider: "Bank Transfer",
      notes: "Duplicate purchase refund approved",
      isPartial: false,
      partialAmount: 0,
      remainingAmount: 0,
      isDisputed: false,
      disputeReason: null,
      disputeDate: null,
      isReversed: false,
      reversalDate: null,
      reversalReason: null,
      createdAt: "2024-01-18T11:30:00Z",
      updatedAt: "2024-01-18T14:15:00Z",
    },
    {
      id: 4,
      refundId: "REF-004-2024",
      ticketNumber: "STARTUP2024-011",
      qrCode: "STARTUP2024-CD-011",
      event: "Startup Pitch Competition",
      eventDate: "2024-05-15",
      attendeeName: "Chris Davis",
      attendeeEmail: "chris.davis@example.com",
      attendeePhone: "+1 (555) 555-6666",
      ticketType: "Student",
      originalPrice: 75,
      refundAmount: 75,
      refundStatus: "rejected",
      refundMethod: "Credit Card",
      refundDate: null,
      processedDate: null,
      reason: "Change of Mind",
      reasonCategory: "Personal",
      description: "Decided not to attend the event",
      requestedBy: "Chris Davis",
      requestedDate: "2024-05-10T09:45:00Z",
      approvedBy: "Mike Wilson",
      approvedDate: "2024-05-10T16:20:00Z",
      processingTime: "N/A",
      refundFee: 0,
      netRefund: 0,
      transactionId: "TXN-011-2024",
      refundTransactionId: null,
      paymentProvider: "Stripe",
      refundProvider: "Stripe",
      notes: "Refund rejected - too close to event date",
      isPartial: false,
      partialAmount: 0,
      remainingAmount: 75,
      isDisputed: true,
      disputeReason: "Customer disputes rejection",
      disputeDate: "2024-05-11T10:00:00Z",
      isReversed: false,
      reversalDate: null,
      reversalReason: null,
      createdAt: "2024-05-10T09:45:00Z",
      updatedAt: "2024-05-11T10:00:00Z",
    },
    {
      id: 5,
      refundId: "REF-005-2024",
      ticketNumber: "LEADERSHIP2024-012",
      qrCode: "LEADERSHIP2024-EF-012",
      event: "Business Leadership Workshop",
      eventDate: "2024-04-02",
      attendeeName: "Eva Foster",
      attendeeEmail: "eva.foster@example.com",
      attendeePhone: "+1 (555) 777-8888",
      ticketType: "Executive",
      originalPrice: 299,
      refundAmount: 299,
      refundStatus: "processing",
      refundMethod: "Credit Card",
      refundDate: "2024-03-25T13:15:00Z",
      processedDate: null,
      reason: "Medical Emergency",
      reasonCategory: "Personal",
      description: "Unable to attend due to medical emergency",
      requestedBy: "Eva Foster",
      requestedDate: "2024-03-25T08:30:00Z",
      approvedBy: "Lisa Anderson",
      approvedDate: "2024-03-25T10:45:00Z",
      processingTime: "Processing",
      refundFee: 0,
      netRefund: 299,
      transactionId: "TXN-012-2024",
      refundTransactionId: "REF-TXN-005-2024",
      paymentProvider: "Stripe",
      refundProvider: "Stripe",
      notes: "Medical emergency refund approved",
      isPartial: false,
      partialAmount: 0,
      remainingAmount: 0,
      isDisputed: false,
      disputeReason: null,
      disputeDate: null,
      isReversed: false,
      reversalDate: null,
      reversalReason: null,
      createdAt: "2024-03-25T08:30:00Z",
      updatedAt: "2024-03-25T13:15:00Z",
    },
    {
      id: 6,
      refundId: "REF-006-2024",
      ticketNumber: "TECH2024-013",
      qrCode: "TECH2024-GH-013",
      event: "Tech Innovation Summit 2024",
      eventDate: "2024-03-15",
      attendeeName: "George Harris",
      attendeeEmail: "george.harris@example.com",
      attendeePhone: "+1 (555) 999-0000",
      ticketType: "VIP",
      originalPrice: 299,
      refundAmount: 250,
      refundStatus: "completed",
      refundMethod: "PayPal",
      refundDate: "2024-03-10T11:20:00Z",
      processedDate: "2024-03-10T12:30:00Z",
      reason: "Event Postponed",
      reasonCategory: "Event",
      description: "Event was postponed and new date conflicts with schedule",
      requestedBy: "George Harris",
      requestedDate: "2024-03-08T15:45:00Z",
      approvedBy: "Tom Wilson",
      approvedDate: "2024-03-09T09:15:00Z",
      processingTime: "1 day",
      refundFee: 49,
      netRefund: 250,
      transactionId: "TXN-013-2024",
      refundTransactionId: "REF-TXN-006-2024",
      paymentProvider: "PayPal",
      refundProvider: "PayPal",
      notes: "Partial refund due to event postponement",
      isPartial: true,
      partialAmount: 250,
      remainingAmount: 49,
      isDisputed: false,
      disputeReason: null,
      disputeDate: null,
      isReversed: false,
      reversalDate: null,
      reversalReason: null,
      createdAt: "2024-03-08T15:45:00Z",
      updatedAt: "2024-03-10T12:30:00Z",
    },
    {
      id: 7,
      refundId: "REF-007-2024",
      ticketNumber: "FOOD2024-014",
      qrCode: "FOOD2024-IJ-014",
      event: "Food & Wine Expo",
      eventDate: "2024-02-10",
      attendeeName: "Ivy Johnson",
      attendeeEmail: "ivy.johnson@example.com",
      attendeePhone: "+1 (555) 111-3333",
      ticketType: "General",
      originalPrice: 80,
      refundAmount: 80,
      refundStatus: "reversed",
      refundMethod: "Credit Card",
      refundDate: "2024-02-08T14:30:00Z",
      processedDate: "2024-02-08T15:45:00Z",
      reason: "Technical Error",
      reasonCategory: "Technical",
      description: "Refund processed in error",
      requestedBy: "System",
      requestedDate: "2024-02-08T14:30:00Z",
      approvedBy: "System",
      approvedDate: "2024-02-08T14:30:00Z",
      processingTime: "1 hour",
      refundFee: 0,
      netRefund: 0,
      transactionId: "TXN-014-2024",
      refundTransactionId: "REF-TXN-007-2024",
      paymentProvider: "Stripe",
      refundProvider: "Stripe",
      notes: "Refund reversed due to technical error",
      isPartial: false,
      partialAmount: 0,
      remainingAmount: 80,
      isDisputed: false,
      disputeReason: null,
      disputeDate: null,
      isReversed: true,
      reversalDate: "2024-02-08T16:00:00Z",
      reversalReason: "Technical error in refund processing",
      createdAt: "2024-02-08T14:30:00Z",
      updatedAt: "2024-02-08T16:00:00Z",
    },
    {
      id: 8,
      refundId: "REF-008-2024",
      ticketNumber: "MARKETING2024-015",
      qrCode: "MARKETING2024-KL-015",
      event: "Digital Marketing Conference",
      eventDate: "2024-01-20",
      attendeeName: "Kevin Lee",
      attendeeEmail: "kevin.lee@example.com",
      attendeePhone: "+1 (555) 222-4444",
      ticketType: "Premium",
      originalPrice: 199,
      refundAmount: 199,
      refundStatus: "completed",
      refundMethod: "Bank Transfer",
      refundDate: "2024-01-15T10:15:00Z",
      processedDate: "2024-01-15T11:30:00Z",
      reason: "Event Cancelled",
      reasonCategory: "Event",
      description: "Event was cancelled due to venue issues",
      requestedBy: "System",
      requestedDate: "2024-01-15T09:00:00Z",
      approvedBy: "System",
      approvedDate: "2024-01-15T09:00:00Z",
      processingTime: "1.5 hours",
      refundFee: 0,
      netRefund: 199,
      transactionId: "TXN-015-2024",
      refundTransactionId: "REF-TXN-008-2024",
      paymentProvider: "Bank Transfer",
      refundProvider: "Bank Transfer",
      notes: "Full refund due to event cancellation",
      isPartial: false,
      partialAmount: 0,
      remainingAmount: 0,
      isDisputed: false,
      disputeReason: null,
      disputeDate: null,
      isReversed: false,
      reversalDate: null,
      reversalReason: null,
      createdAt: "2024-01-15T09:00:00Z",
      updatedAt: "2024-01-15T11:30:00Z",
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
    { value: "all", label: "All Status", count: refunds.length },
    {
      value: "completed",
      label: "Completed",
      count: refunds.filter((r) => r.refundStatus === "completed").length,
    },
    {
      value: "pending",
      label: "Pending",
      count: refunds.filter((r) => r.refundStatus === "pending").length,
    },
    {
      value: "processing",
      label: "Processing",
      count: refunds.filter((r) => r.refundStatus === "processing").length,
    },
    {
      value: "rejected",
      label: "Rejected",
      count: refunds.filter((r) => r.refundStatus === "rejected").length,
    },
    {
      value: "reversed",
      label: "Reversed",
      count: refunds.filter((r) => r.refundStatus === "reversed").length,
    },
  ];

  const methodOptions = [
    { value: "all", label: "All Methods", count: refunds.length },
    {
      value: "Credit Card",
      label: "Credit Card",
      count: refunds.filter((r) => r.refundMethod === "Credit Card").length,
    },
    {
      value: "PayPal",
      label: "PayPal",
      count: refunds.filter((r) => r.refundMethod === "PayPal").length,
    },
    {
      value: "Bank Transfer",
      label: "Bank Transfer",
      count: refunds.filter((r) => r.refundMethod === "Bank Transfer").length,
    },
  ];

  const filteredRefunds = refunds.filter((refund) => {
    const matchesSearch =
      refund.refundId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      refund.ticketNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      refund.attendeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      refund.attendeeEmail.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEvent = eventFilter === "all" || refund.event === eventFilter;
    const matchesStatus =
      statusFilter === "all" || refund.refundStatus === statusFilter;
    const matchesMethod =
      methodFilter === "all" || refund.refundMethod === methodFilter;

    return matchesSearch && matchesEvent && matchesStatus && matchesMethod;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "processing":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      case "reversed":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "processing":
        return <RotateCcw className="h-4 w-4" />;
      case "rejected":
        return <XCircle className="h-4 w-4" />;
      case "reversed":
        return <ArrowLeft className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getReasonCategoryColor = (category) => {
    switch (category) {
      case "Personal":
        return "bg-blue-100 text-blue-800";
      case "Event":
        return "bg-green-100 text-green-800";
      case "Technical":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
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

  const handleApproveRefund = (refundId) => {
    console.log(`Approving refund ${refundId}`);
  };

  const handleRejectRefund = (refundId) => {
    console.log(`Rejecting refund ${refundId}`);
  };

  const handleProcessRefund = (refundId) => {
    console.log(`Processing refund ${refundId}`);
  };

  const handleReverseRefund = (refundId) => {
    console.log(`Reversing refund ${refundId}`);
  };

  const handleViewRefund = (refundId) => {
    console.log(`Viewing refund ${refundId}`);
  };

  const handleBulkAction = (action) => {
    console.log(`Bulk action: ${action} for ${selectedRefunds.length} refunds`);
  };

  const handleExportRefunds = () => {
    console.log("Exporting refunds report");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Refunds Management
            </h1>
            <p className="text-gray-600">
              Manage and track all ticket refunds, approvals, and processing
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleExportRefunds}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center"
            >
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
              <Receipt className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Refunds</p>
              <p className="text-2xl font-bold text-gray-900">
                {refunds.length}
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
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">
                {refunds.filter((r) => r.refundStatus === "completed").length}
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
                {
                  refunds.filter(
                    (r) =>
                      r.refundStatus === "pending" ||
                      r.refundStatus === "processing"
                  ).length
                }
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
              <p className="text-sm font-medium text-gray-600">
                Total Refunded
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(
                  refunds.reduce((sum, refund) => sum + refund.netRefund, 0)
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
                placeholder="Search by refund ID, ticket number, attendee name, or email..."
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

          {/* Method Filter */}
          <div className="lg:w-48">
            <select
              value={methodFilter}
              onChange={(e) => setMethodFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {methodOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} ({option.count})
                </option>
              ))}
            </select>
          </div>

          {/* Bulk Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => handleBulkAction("approve")}
              disabled={selectedRefunds.length === 0}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Approve
            </button>
            <button
              onClick={() => handleBulkAction("reject")}
              disabled={selectedRefunds.length === 0}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 flex items-center"
            >
              <XCircle className="h-4 w-4 mr-2" />
              Reject
            </button>
          </div>
        </div>
      </div>

      {/* Refunds Table */}
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
                        setSelectedRefunds(filteredRefunds.map((r) => r.id));
                      } else {
                        setSelectedRefunds([]);
                      }
                    }}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Refund Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attendee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event & Ticket
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reason
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRefunds.map((refund) => (
                <tr key={refund.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedRefunds.includes(refund.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedRefunds([...selectedRefunds, refund.id]);
                        } else {
                          setSelectedRefunds(
                            selectedRefunds.filter((id) => id !== refund.id)
                          );
                        }
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Receipt className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {refund.refundId}
                        </div>
                        <div className="text-sm text-gray-500">
                          {refund.ticketNumber}
                        </div>
                        <div className="text-xs text-gray-400">
                          {formatDateTime(refund.requestedDate)}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-medium text-sm">
                        {refund.attendeeName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {refund.attendeeName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {refund.attendeeEmail}
                        </div>
                        <div className="text-xs text-gray-400">
                          {refund.attendeePhone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{refund.event}</div>
                    <div className="text-sm text-gray-500">
                      {refund.ticketType} -{" "}
                      {formatCurrency(refund.originalPrice)}
                    </div>
                    <div className="text-xs text-gray-400">
                      {refund.eventDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {formatCurrency(refund.refundAmount)}
                    </div>
                    {refund.isPartial && (
                      <div className="text-xs text-gray-500">
                        Partial: {formatCurrency(refund.partialAmount)}
                      </div>
                    )}
                    {refund.refundFee > 0 && (
                      <div className="text-xs text-red-500">
                        Fee: {formatCurrency(refund.refundFee)}
                      </div>
                    )}
                    <div className="text-xs text-gray-400">
                      Net: {formatCurrency(refund.netRefund)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                        refund.refundStatus
                      )}`}
                    >
                      {getStatusIcon(refund.refundStatus)}
                      <span className="ml-1 capitalize">
                        {refund.refundStatus}
                      </span>
                    </span>
                    {refund.refundDate && (
                      <div className="text-xs text-gray-500 mt-1">
                        {formatDateTime(refund.refundDate)}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{refund.reason}</div>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getReasonCategoryColor(
                        refund.reasonCategory
                      )}`}
                    >
                      {refund.reasonCategory}
                    </span>
                    <div className="text-xs text-gray-500 mt-1">
                      {refund.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleViewRefund(refund.id)}
                        className="text-blue-600 hover:text-blue-900"
                        title="View Refund"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      {refund.refundStatus === "pending" && (
                        <>
                          <button
                            onClick={() => handleApproveRefund(refund.id)}
                            className="text-green-600 hover:text-green-900"
                            title="Approve Refund"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleRejectRefund(refund.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Reject Refund"
                          >
                            <XCircle className="h-4 w-4" />
                          </button>
                        </>
                      )}
                      {refund.refundStatus === "processing" && (
                        <button
                          onClick={() => handleProcessRefund(refund.id)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Process Refund"
                        >
                          <RotateCcw className="h-4 w-4" />
                        </button>
                      )}
                      {refund.refundStatus === "completed" && (
                        <button
                          onClick={() => handleReverseRefund(refund.id)}
                          className="text-purple-600 hover:text-purple-900"
                          title="Reverse Refund"
                        >
                          <ArrowLeft className="h-4 w-4" />
                        </button>
                      )}
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
      {filteredRefunds.length === 0 && (
        <div className="text-center py-12">
          <Receipt className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No refunds found
          </h3>
          <p className="text-gray-500 mb-4">
            {searchQuery ||
            eventFilter !== "all" ||
            statusFilter !== "all" ||
            methodFilter !== "all"
              ? "Try adjusting your filters or search terms"
              : "No refunds available for the selected criteria"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Refunds;
