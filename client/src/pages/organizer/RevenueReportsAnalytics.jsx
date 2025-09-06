import React, { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  Users,
  Ticket,
  Download,
  Filter,
  RefreshCw,
  Target,
  Award,
  Zap,
  BarChart3,
  PieChart,
  LineChart,
  CreditCard,
  Banknote,
  Receipt,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
} from "lucide-react";

const RevenueReportsAnalytics = () => {
  const [timeRange, setTimeRange] = useState("30d");
  const [eventFilter, setEventFilter] = useState("all");
  const [reportType, setReportType] = useState("overview");

  // Comprehensive mock revenue data
  const revenueData = {
    overview: {
      totalRevenue: 127450,
      totalTicketsSold: 1358,
      averageTicketPrice: 93.85,
      totalRefunds: 2400,
      netRevenue: 125050,
      revenueGrowth: 18.2,
      ticketGrowth: 15.5,
      averageRevenuePerEvent: 25490,
      totalEvents: 5,
      completedEvents: 3,
      upcomingEvents: 2,
    },
    monthlyRevenue: [
      { month: "Jan", revenue: 15000, tickets: 180, events: 1 },
      { month: "Feb", revenue: 25600, tickets: 320, events: 1 },
      { month: "Mar", revenue: 145200, tickets: 485, events: 1 },
      { month: "Apr", revenue: 15600, tickets: 78, events: 1 },
      { month: "May", revenue: 3750, tickets: 25, events: 1 },
      { month: "Jun", revenue: 0, tickets: 0, events: 0 },
    ],
    eventBreakdown: [
      {
        id: 1,
        title: "Tech Innovation Summit 2024",
        date: "2024-03-15",
        status: "completed",
        totalRevenue: 145200,
        ticketsSold: 485,
        totalCapacity: 500,
        averageTicketPrice: 299.38,
        revenueBreakdown: {
          vip: { count: 150, price: 299, revenue: 44850 },
          general: { count: 300, price: 199, revenue: 59700 },
          student: { count: 35, price: 99, revenue: 3465 },
        },
        refunds: { count: 12, amount: 2400 },
        netRevenue: 142800,
        profitMargin: 78.5,
        costPerAcquisition: 45.50,
        returnOnInvestment: 320,
        trends: {
          revenue: { current: 145200, previous: 120000, change: 21.0 },
          tickets: { current: 485, previous: 420, change: 15.5 },
          conversion: { current: 14.9, previous: 12.1, change: 23.1 },
        },
      },
      {
        id: 2,
        title: "Business Leadership Workshop",
        date: "2024-04-02",
        status: "upcoming",
        totalRevenue: 15600,
        ticketsSold: 78,
        totalCapacity: 100,
        averageTicketPrice: 200.00,
        revenueBreakdown: {
          premium: { count: 78, price: 200, revenue: 15600 },
        },
        refunds: { count: 0, amount: 0 },
        netRevenue: 15600,
        profitMargin: 0,
        costPerAcquisition: 38.20,
        returnOnInvestment: 0,
        trends: {
          revenue: { current: 15600, previous: 0, change: 0 },
          tickets: { current: 78, previous: 0, change: 0 },
          conversion: { current: 8.8, previous: 0, change: 0 },
        },
      },
      {
        id: 3,
        title: "Food & Wine Expo",
        date: "2024-02-10",
        status: "completed",
        totalRevenue: 25600,
        ticketsSold: 320,
        totalCapacity: 350,
        averageTicketPrice: 80.00,
        revenueBreakdown: {
          vip: { count: 100, price: 150, revenue: 15000 },
          general: { count: 220, price: 80, revenue: 17600 },
        },
        refunds: { count: 8, amount: 1200 },
        netRevenue: 24400,
        profitMargin: 65.2,
        costPerAcquisition: 32.80,
        returnOnInvestment: 180,
        trends: {
          revenue: { current: 25600, previous: 22000, change: 16.4 },
          tickets: { current: 320, previous: 280, change: 14.3 },
          conversion: { current: 16.9, previous: 14.2, change: 19.0 },
        },
      },
      {
        id: 4,
        title: "Digital Marketing Conference",
        date: "2024-01-20",
        status: "completed",
        totalRevenue: 67500,
        ticketsSold: 450,
        totalCapacity: 500,
        averageTicketPrice: 150.00,
        revenueBreakdown: {
          earlyBird: { count: 200, price: 120, revenue: 24000 },
          regular: { count: 200, price: 150, revenue: 30000 },
          premium: { count: 50, price: 270, revenue: 13500 },
        },
        refunds: { count: 15, amount: 2250 },
        netRevenue: 65250,
        profitMargin: 72.8,
        costPerAcquisition: 42.30,
        returnOnInvestment: 280,
        trends: {
          revenue: { current: 67500, previous: 58000, change: 16.4 },
          tickets: { current: 450, previous: 380, change: 18.4 },
          conversion: { current: 21.4, previous: 18.7, change: 14.4 },
        },
      },
      {
        id: 5,
        title: "Startup Pitch Competition",
        date: "2024-05-15",
        status: "upcoming",
        totalRevenue: 3750,
        ticketsSold: 25,
        totalCapacity: 200,
        averageTicketPrice: 150.00,
        revenueBreakdown: {
          student: { count: 25, price: 150, revenue: 3750 },
        },
        refunds: { count: 1, amount: 75 },
        netRevenue: 3675,
        profitMargin: 0,
        costPerAcquisition: 28.50,
        returnOnInvestment: 0,
        trends: {
          revenue: { current: 3750, previous: 0, change: 0 },
          tickets: { current: 25, previous: 0, change: 0 },
          conversion: { current: 5.6, previous: 0, change: 0 },
        },
      },
    ],
    revenueSources: [
      { source: "Ticket Sales", amount: 127450, percentage: 85.2 },
      { source: "Sponsorships", amount: 15000, percentage: 10.0 },
      { source: "Merchandise", amount: 5000, percentage: 3.3 },
      { source: "Add-ons", amount: 2500, percentage: 1.7 },
    ],
    paymentMethods: [
      { method: "Credit Card", amount: 89450, percentage: 70.2 },
      { method: "PayPal", amount: 25400, percentage: 19.9 },
      { method: "Bank Transfer", amount: 12600, percentage: 9.9 },
    ],
    refunds: {
      totalRefunds: 2400,
      refundRate: 1.9,
      refundBreakdown: [
        { reason: "Cancelled Event", amount: 1200, count: 5 },
        { reason: "Customer Request", amount: 800, count: 8 },
        { reason: "Technical Issues", amount: 400, count: 3 },
      ],
    },
    projections: {
      nextMonth: 45000,
      nextQuarter: 180000,
      nextYear: 720000,
      growthRate: 18.2,
    },
  };

  const events = [
    "Tech Innovation Summit 2024",
    "Business Leadership Workshop",
    "Food & Wine Expo",
    "Digital Marketing Conference",
    "Startup Pitch Competition",
  ];

  const timeRanges = [
    { value: "7d", label: "Last 7 Days" },
    { value: "30d", label: "Last 30 Days" },
    { value: "90d", label: "Last 90 Days" },
    { value: "1y", label: "Last Year" },
  ];

  const reportTypes = [
    { value: "overview", label: "Overview" },
    { value: "detailed", label: "Detailed Breakdown" },
    { value: "projections", label: "Projections" },
    { value: "comparison", label: "Year-over-Year" },
  ];

  const filteredEvents = revenueData.eventBreakdown.filter(event => {
    const matchesEvent = eventFilter === "all" || event.title === eventFilter;
    return matchesEvent;
  });

  const getTrendIcon = (change) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-gray-500" />;
  };

  const getTrendColor = (change) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-gray-600";
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatPercentage = (value) => {
    return `${value.toFixed(1)}%`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Revenue Reports Analytics
            </h1>
            <p className="text-gray-600">
              Comprehensive revenue analysis and financial insights
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

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-48">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Range
            </label>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {timeRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          <div className="lg:w-48">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event
            </label>
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

          <div className="lg:w-48">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Type
            </label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {reportTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Key Revenue Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(revenueData.overview.totalRevenue)}
              </p>
              <div className="flex items-center mt-1">
                {getTrendIcon(revenueData.overview.revenueGrowth)}
                <span className={`text-sm ml-1 ${getTrendColor(revenueData.overview.revenueGrowth)}`}>
                  +{formatPercentage(revenueData.overview.revenueGrowth)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Ticket className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tickets Sold</p>
              <p className="text-2xl font-bold text-gray-900">
                {revenueData.overview.totalTicketsSold.toLocaleString()}
              </p>
              <div className="flex items-center mt-1">
                {getTrendIcon(revenueData.overview.ticketGrowth)}
                <span className={`text-sm ml-1 ${getTrendColor(revenueData.overview.ticketGrowth)}`}>
                  +{formatPercentage(revenueData.overview.ticketGrowth)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg. Ticket Price</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(revenueData.overview.averageTicketPrice)}
              </p>
              <div className="text-sm text-gray-500 mt-1">
                Per ticket
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Wallet className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Net Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(revenueData.overview.netRevenue)}
              </p>
              <div className="text-sm text-gray-500 mt-1">
                After refunds
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Sources */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Sources</h3>
          <div className="space-y-3">
            {revenueData.revenueSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-900">
                    {source.source}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-20 text-right">
                    {formatCurrency(source.amount)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
          <div className="space-y-3">
            {revenueData.paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-900">
                    {method.method}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${method.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-20 text-right">
                    {formatCurrency(method.amount)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Revenue Breakdown */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Event Revenue Breakdown</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tickets
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg. Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Refunds
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Net Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Profit Margin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ROI
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEvents.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {event.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {event.date}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {formatCurrency(event.totalRevenue)}
                    </div>
                    <div className="flex items-center">
                      {getTrendIcon(event.trends.revenue.change)}
                      <span className={`text-xs ml-1 ${getTrendColor(event.trends.revenue.change)}`}>
                        {event.trends.revenue.change > 0 ? "+" : ""}
                        {formatPercentage(event.trends.revenue.change)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {event.ticketsSold}
                    </div>
                    <div className="text-sm text-gray-500">
                      of {event.totalCapacity}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(event.averageTicketPrice)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatCurrency(event.refunds.amount)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {event.refunds.count} refunds
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {formatCurrency(event.netRevenue)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {formatPercentage(event.profitMargin)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {event.returnOnInvestment > 0 ? `${event.returnOnInvestment}%` : "N/A"}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Monthly Revenue Trend */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue Trend</h3>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {revenueData.monthlyRevenue.map((month, index) => (
            <div key={index} className="text-center">
              <div className="text-sm text-gray-600 mb-2">{month.month}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {formatCurrency(month.revenue)}
              </div>
              <div className="text-xs text-gray-500">
                {month.tickets} tickets
              </div>
              <div className="text-xs text-gray-500">
                {month.events} events
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Refunds Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Refund Breakdown */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Refund Analysis</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-900">Total Refunds</div>
              <div className="text-lg font-semibold text-gray-900">
                {formatCurrency(revenueData.refunds.totalRefunds)}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-900">Refund Rate</div>
              <div className="text-lg font-semibold text-gray-900">
                {formatPercentage(revenueData.refunds.refundRate)}
              </div>
            </div>
            <div className="space-y-2">
              {revenueData.refunds.refundBreakdown.map((refund, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">{refund.reason}</div>
                  <div className="text-sm font-medium text-gray-900">
                    {formatCurrency(refund.amount)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue Projections */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Projections</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-900">Next Month</div>
              <div className="text-lg font-semibold text-gray-900">
                {formatCurrency(revenueData.projections.nextMonth)}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-900">Next Quarter</div>
              <div className="text-lg font-semibold text-gray-900">
                {formatCurrency(revenueData.projections.nextQuarter)}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-900">Next Year</div>
              <div className="text-lg font-semibold text-gray-900">
                {formatCurrency(revenueData.projections.nextYear)}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-900">Growth Rate</div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-lg font-semibold text-green-600">
                  +{formatPercentage(revenueData.projections.growthRate)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Revenue Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
              <TrendingUp className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">
                Strong Growth
              </div>
              <div className="text-xs text-gray-500">
                Revenue increased by 18.2% with consistent monthly growth
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
              <Ticket className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">
                High Conversion
              </div>
              <div className="text-xs text-gray-500">
                Average ticket price of $93.85 with 1,358 total sales
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
              <Target className="h-4 w-4 text-yellow-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">
                Low Refund Rate
              </div>
              <div className="text-xs text-gray-500">
                Only 1.9% refund rate with $2,400 total refunds
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
              <CreditCard className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">
                Payment Mix
              </div>
              <div className="text-xs text-gray-500">
                70.2% credit card, 19.9% PayPal, 9.9% bank transfer
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
              <Award className="h-4 w-4 text-red-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">
                Top Performer
              </div>
              <div className="text-xs text-gray-500">
                Tech Innovation Summit generated $145,200 (78.5% margin)
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 mt-1">
              <Zap className="h-4 w-4 text-indigo-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">
                Revenue Sources
              </div>
              <div className="text-xs text-gray-500">
                85.2% ticket sales, 10% sponsorships, 5% other
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueReportsAnalytics;

