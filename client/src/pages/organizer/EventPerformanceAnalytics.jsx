import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Calendar,
  MapPin,
  Eye,
  Clock,
  Star,
  Download,
  Filter,
  RefreshCw,
  Target,
  Award,
  Zap,
} from "lucide-react";

const EventPerformanceAnalytics = () => {
  const [timeRange, setTimeRange] = useState("30d");
  const [eventFilter, setEventFilter] = useState("all");
  const [metricFilter, setMetricFilter] = useState("revenue");

  // Comprehensive mock event performance data
  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      date: "2024-03-15",
      location: "San Francisco, CA",
      category: "Technology",
      status: "completed",
      totalRevenue: 145200,
      ticketsSold: 485,
      totalCapacity: 500,
      conversionRate: 14.9,
      pageViews: 3250,
      uniqueVisitors: 2100,
      avgSessionDuration: "4m 32s",
      bounceRate: 35.2,
      socialShares: 156,
      emailOpens: 1240,
      emailClicks: 89,
      refunds: 12,
      refundAmount: 2400,
      rating: 4.8,
      reviews: 89,
      completionRate: 94.2,
      checkInRate: 97.1,
      satisfactionScore: 4.6,
      netPromoterScore: 78,
      costPerAcquisition: 45.5,
      returnOnInvestment: 320,
      trends: {
        revenue: { current: 145200, previous: 120000, change: 21.0 },
        attendees: { current: 485, previous: 420, change: 15.5 },
        conversion: { current: 14.9, previous: 12.1, change: 23.1 },
        satisfaction: { current: 4.6, previous: 4.3, change: 7.0 },
      },
    },
    {
      id: 2,
      title: "Business Leadership Workshop",
      date: "2024-04-02",
      location: "New York, NY",
      category: "Business",
      status: "upcoming",
      totalRevenue: 15600,
      ticketsSold: 78,
      totalCapacity: 100,
      conversionRate: 8.8,
      pageViews: 890,
      uniqueVisitors: 650,
      avgSessionDuration: "3m 15s",
      bounceRate: 42.1,
      socialShares: 23,
      emailOpens: 450,
      emailClicks: 34,
      refunds: 2,
      refundAmount: 300,
      rating: 0,
      reviews: 0,
      completionRate: 0,
      checkInRate: 0,
      satisfactionScore: 0,
      netPromoterScore: 0,
      costPerAcquisition: 38.2,
      returnOnInvestment: 0,
      trends: {
        revenue: { current: 15600, previous: 0, change: 0 },
        attendees: { current: 78, previous: 0, change: 0 },
        conversion: { current: 8.8, previous: 0, change: 0 },
        satisfaction: { current: 0, previous: 0, change: 0 },
      },
    },
    {
      id: 3,
      title: "Food & Wine Expo",
      date: "2024-02-10",
      location: "Los Angeles, CA",
      category: "Food & Drink",
      status: "completed",
      totalRevenue: 25600,
      ticketsSold: 320,
      totalCapacity: 350,
      conversionRate: 16.9,
      pageViews: 1890,
      uniqueVisitors: 1200,
      avgSessionDuration: "5m 18s",
      bounceRate: 28.5,
      socialShares: 89,
      emailOpens: 780,
      emailClicks: 67,
      refunds: 8,
      refundAmount: 1200,
      rating: 4.7,
      reviews: 45,
      completionRate: 91.4,
      checkInRate: 95.6,
      satisfactionScore: 4.5,
      netPromoterScore: 72,
      costPerAcquisition: 32.8,
      returnOnInvestment: 180,
      trends: {
        revenue: { current: 25600, previous: 22000, change: 16.4 },
        attendees: { current: 320, previous: 280, change: 14.3 },
        conversion: { current: 16.9, previous: 14.2, change: 19.0 },
        satisfaction: { current: 4.5, previous: 4.2, change: 7.1 },
      },
    },
    {
      id: 4,
      title: "Digital Marketing Conference",
      date: "2024-01-20",
      location: "Chicago, IL",
      category: "Marketing",
      status: "completed",
      totalRevenue: 67500,
      ticketsSold: 450,
      totalCapacity: 500,
      conversionRate: 21.4,
      pageViews: 2100,
      uniqueVisitors: 1450,
      avgSessionDuration: "6m 45s",
      bounceRate: 31.2,
      socialShares: 134,
      emailOpens: 980,
      emailClicks: 78,
      refunds: 15,
      refundAmount: 2250,
      rating: 4.9,
      reviews: 67,
      completionRate: 96.8,
      checkInRate: 98.2,
      satisfactionScore: 4.7,
      netPromoterScore: 85,
      costPerAcquisition: 42.3,
      returnOnInvestment: 280,
      trends: {
        revenue: { current: 67500, previous: 58000, change: 16.4 },
        attendees: { current: 450, previous: 380, change: 18.4 },
        conversion: { current: 21.4, previous: 18.7, change: 14.4 },
        satisfaction: { current: 4.7, previous: 4.4, change: 6.8 },
      },
    },
    {
      id: 5,
      title: "Startup Pitch Competition",
      date: "2024-05-15",
      location: "Austin, TX",
      category: "Startup",
      status: "upcoming",
      totalRevenue: 3750,
      ticketsSold: 25,
      totalCapacity: 200,
      conversionRate: 5.6,
      pageViews: 450,
      uniqueVisitors: 320,
      avgSessionDuration: "2m 45s",
      bounceRate: 48.3,
      socialShares: 12,
      emailOpens: 180,
      emailClicks: 15,
      refunds: 1,
      refundAmount: 75,
      rating: 0,
      reviews: 0,
      completionRate: 0,
      checkInRate: 0,
      satisfactionScore: 0,
      netPromoterScore: 0,
      costPerAcquisition: 28.5,
      returnOnInvestment: 0,
      trends: {
        revenue: { current: 3750, previous: 0, change: 0 },
        attendees: { current: 25, previous: 0, change: 0 },
        conversion: { current: 5.6, previous: 0, change: 0 },
        satisfaction: { current: 0, previous: 0, change: 0 },
      },
    },
  ];

  const categories = [
    "Technology",
    "Business",
    "Food & Drink",
    "Marketing",
    "Startup",
  ];
  const timeRanges = [
    { value: "7d", label: "Last 7 Days" },
    { value: "30d", label: "Last 30 Days" },
    { value: "90d", label: "Last 90 Days" },
    { value: "1y", label: "Last Year" },
  ];

  const metrics = [
    { value: "revenue", label: "Revenue" },
    { value: "attendees", label: "Attendees" },
    { value: "conversion", label: "Conversion Rate" },
    { value: "satisfaction", label: "Satisfaction" },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      eventFilter === "all" || event.category === eventFilter;
    return matchesCategory;
  });

  const getTrendIcon = (change) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <div className="h-4 w-4" />;
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

  const getPerformanceScore = (event) => {
    const scores = [];
    if (event.conversionRate > 15) scores.push(1);
    if (event.satisfactionScore > 4.5) scores.push(1);
    if (event.completionRate > 90) scores.push(1);
    if (event.netPromoterScore > 70) scores.push(1);
    return (scores.length / 4) * 100;
  };

  const getPerformanceColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Event Performance Analytics
            </h1>
            <p className="text-gray-600">
              Detailed performance metrics and insights for your events
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
              Event Category
            </label>
            <select
              value={eventFilter}
              onChange={(e) => setEventFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="lg:w-48">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Metric
            </label>
            <select
              value={metricFilter}
              onChange={(e) => setMetricFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {metrics.map((metric) => (
                <option key={metric.value} value={metric.value}>
                  {metric.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(
                  filteredEvents.reduce(
                    (sum, event) => sum + event.totalRevenue,
                    0
                  )
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Attendees
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {filteredEvents.reduce(
                  (sum, event) => sum + event.ticketsSold,
                  0
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Avg. Conversion
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {formatPercentage(
                  filteredEvents.reduce(
                    (sum, event) => sum + event.conversionRate,
                    0
                  ) / filteredEvents.length
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg. Rating</p>
              <p className="text-2xl font-bold text-gray-900">
                {(
                  filteredEvents
                    .filter((event) => event.rating > 0)
                    .reduce((sum, event) => sum + event.rating, 0) /
                  filteredEvents.filter((event) => event.rating > 0).length
                ).toFixed(1)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Performance Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Event Performance Details
          </h2>
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
                  Attendees
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversion
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Satisfaction
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trends
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
                        {event.date} • {event.location}
                      </div>
                      <div className="text-xs text-gray-400">
                        {event.category}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        event.status
                      )}`}
                    >
                      {event.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {formatCurrency(event.totalRevenue)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {event.ticketsSold} tickets
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {event.ticketsSold}
                    </div>
                    <div className="text-xs text-gray-500">
                      of {event.totalCapacity}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {formatPercentage(event.conversionRate)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {event.pageViews} views
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {event.rating > 0 ? event.rating.toFixed(1) : "N/A"}
                    </div>
                    <div className="text-xs text-gray-500">
                      {event.reviews} reviews
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className={`h-2 rounded-full ${
                            getPerformanceScore(event) >= 80
                              ? "bg-green-500"
                              : getPerformanceScore(event) >= 60
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${getPerformanceScore(event)}%` }}
                        ></div>
                      </div>
                      <span
                        className={`text-sm font-medium ${getPerformanceColor(
                          getPerformanceScore(event)
                        )}`}
                      >
                        {getPerformanceScore(event).toFixed(0)}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        {getTrendIcon(event.trends.revenue.change)}
                        <span
                          className={`text-sm ml-1 ${getTrendColor(
                            event.trends.revenue.change
                          )}`}
                        >
                          {event.trends.revenue.change > 0 ? "+" : ""}
                          {formatPercentage(event.trends.revenue.change)}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed Metrics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Top Performing Events */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Performing Events
          </h3>
          <div className="space-y-4">
            {filteredEvents
              .sort((a, b) => b.totalRevenue - a.totalRevenue)
              .slice(0, 3)
              .map((event, index) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-blue-700">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {event.title}
                      </div>
                      <div className="text-xs text-gray-500">
                        {event.category} • {event.date}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {formatCurrency(event.totalRevenue)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatPercentage(event.conversionRate)} conversion
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Key Insights
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Revenue Growth
                </div>
                <div className="text-xs text-gray-500">
                  Average revenue increased by 18.2% compared to previous period
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                <Users className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Attendance Rate
                </div>
                <div className="text-xs text-gray-500">
                  94.2% average completion rate across all events
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                <Star className="h-4 w-4 text-yellow-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Customer Satisfaction
                </div>
                <div className="text-xs text-gray-500">
                  Average rating of 4.6/5 with 78 NPS score
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                <Target className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Conversion Optimization
                </div>
                <div className="text-xs text-gray-500">
                  Technology events show highest conversion rates at 15.1%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Trends */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Performance Trends
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {formatPercentage(
                filteredEvents.reduce(
                  (sum, event) => sum + event.conversionRate,
                  0
                ) / filteredEvents.length
              )}
            </div>
            <div className="text-sm text-gray-600">Avg. Conversion Rate</div>
            <div className="flex items-center justify-center mt-2">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+12.3%</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {formatPercentage(
                filteredEvents
                  .filter((event) => event.satisfactionScore > 0)
                  .reduce((sum, event) => sum + event.satisfactionScore, 0) /
                  filteredEvents.filter((event) => event.satisfactionScore > 0)
                    .length
              )}
            </div>
            <div className="text-sm text-gray-600">Avg. Satisfaction</div>
            <div className="flex items-center justify-center mt-2">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+8.7%</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {formatPercentage(
                filteredEvents
                  .filter((event) => event.completionRate > 0)
                  .reduce((sum, event) => sum + event.completionRate, 0) /
                  filteredEvents.filter((event) => event.completionRate > 0)
                    .length
              )}
            </div>
            <div className="text-sm text-gray-600">Avg. Completion</div>
            <div className="flex items-center justify-center mt-2">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+5.2%</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {Math.round(
                filteredEvents
                  .filter((event) => event.netPromoterScore > 0)
                  .reduce((sum, event) => sum + event.netPromoterScore, 0) /
                  filteredEvents.filter((event) => event.netPromoterScore > 0)
                    .length
              )}
            </div>
            <div className="text-sm text-gray-600">Avg. NPS Score</div>
            <div className="flex items-center justify-center mt-2">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPerformanceAnalytics;
