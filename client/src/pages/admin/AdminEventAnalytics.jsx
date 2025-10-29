import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  BarChart3,
  Users,
  DollarSign,
  Calendar,
  Clock,
  TrendingUp,
  Download,
  Share2,
  Eye,
  CheckCircle,
  XCircle,
} from "lucide-react";
import ChartComponent from "../../components/shared-dashboard/ChartComponent";

const AdminEventAnalytics = () => {
  const { id } = useParams();
  const [timeRange, setTimeRange] = useState("30d");

  // Mock event data
  const event = {
    id: parseInt(id),
    title: "Tech Innovation Summit 2024",
    date: "2024-03-15",
    location: "San Francisco, CA",
    organizer: "TechCorp Events",
    status: "active",
  };

  // Mock analytics data
  const analytics = {
    overview: {
      totalAttendees: 485,
      checkedIn: 420,
      noShows: 65,
      checkInRate: 86.6,
      totalRevenue: 145200,
      averageTicketPrice: 299,
      conversionRate: 14.9,
      totalViews: 3250,
    },
    revenue: {
      total: 145200,
      byTicketType: [
        { type: "VIP", count: 150, revenue: 44850, percentage: 30.9 },
        { type: "General", count: 300, revenue: 59700, percentage: 41.1 },
        { type: "Student", count: 35, revenue: 3465, percentage: 2.4 },
        { type: "Early Bird", count: 0, revenue: 0, percentage: 0 },
      ],
      monthly: [
        { month: "Jan", revenue: 25000 },
        { month: "Feb", revenue: 45000 },
        { month: "Mar", revenue: 75200 },
      ],
    },
    attendance: {
      checkInTimes: [
        { time: "8:00-9:00", count: 45 },
        { time: "9:00-10:00", count: 180 },
        { time: "10:00-11:00", count: 120 },
        { time: "11:00-12:00", count: 75 },
      ],
      byCompany: [
        { company: "TechCorp Inc.", count: 45, percentage: 10.7 },
        { company: "InnovateLab", count: 38, percentage: 9.0 },
        { company: "DataFlow Analytics", count: 32, percentage: 7.6 },
        { company: "CloudScale Technologies", count: 28, percentage: 6.7 },
        { company: "Others", count: 277, percentage: 66.0 },
      ],
      demographics: {
        byJobTitle: [
          { title: "Software Engineer", count: 120, percentage: 28.6 },
          { title: "Product Manager", count: 85, percentage: 20.2 },
          { title: "Data Scientist", count: 65, percentage: 15.5 },
          { title: "UX Designer", count: 45, percentage: 10.7 },
          { title: "DevOps Engineer", count: 35, percentage: 8.3 },
          { title: "Others", count: 70, percentage: 16.7 },
        ],
        byLocation: [
          { location: "San Francisco Bay Area", count: 180, percentage: 42.9 },
          { location: "New York Metro", count: 95, percentage: 22.6 },
          { location: "Los Angeles", count: 65, percentage: 15.5 },
          { location: "Chicago", count: 45, percentage: 10.7 },
          { location: "Others", count: 35, percentage: 8.3 },
        ],
      },
    },
    engagement: {
      sessionDuration: {
        average: "4.5 hours",
        distribution: [
          { range: "0-2 hours", count: 45, percentage: 10.7 },
          { range: "2-4 hours", count: 120, percentage: 28.6 },
          { range: "4-6 hours", count: 180, percentage: 42.9 },
          { range: "6+ hours", count: 75, percentage: 17.8 },
        ],
      },
      popularSessions: [
        {
          name: "AI & Machine Learning Keynote",
          attendees: 380,
          percentage: 90.5,
        },
        {
          name: "Digital Transformation Panel",
          attendees: 320,
          percentage: 76.2,
        },
        { name: "Startup Pitch Competition", attendees: 280, percentage: 66.7 },
        { name: "Networking Break", attendees: 420, percentage: 100.0 },
      ],
      feedback: {
        averageRating: 4.7,
        totalResponses: 385,
        distribution: [
          { rating: 5, count: 280, percentage: 72.7 },
          { rating: 4, count: 75, percentage: 19.5 },
          { rating: 3, count: 20, percentage: 5.2 },
          { rating: 2, count: 7, percentage: 1.8 },
          { rating: 1, count: 3, percentage: 0.8 },
        ],
      },
    },
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

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Link
            to={`/admin/events/${id}`}
            className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Event
          </Link>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Event Analytics
            </h1>
            <p className="text-gray-600">
              {event.title} - {event.date} • {event.location}
            </p>
            <p className="text-sm text-gray-500">
              Organized by {event.organizer}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                {analytics.overview.totalAttendees}
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
              <p className="text-sm font-medium text-gray-600">Check-in Rate</p>
              <p className="text-2xl font-bold text-gray-900">
                {analytics.overview.checkInRate}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(analytics.overview.totalRevenue)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Conversion Rate
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {analytics.overview.conversionRate}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Revenue by Ticket Type
          </h3>
          <div className="space-y-4">
            {analytics.revenue.byTicketType.map((ticket, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                  <span className="text-sm font-medium text-gray-900">
                    {ticket.type}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {formatCurrency(ticket.revenue)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {ticket.count} tickets •{" "}
                    {formatPercentage(ticket.percentage)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Revenue Trend
          </h3>
          <ChartComponent data={analytics.revenue.monthly} />
        </div>
      </div>

      {/* Attendance Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Check-in Times
          </h3>
          <div className="space-y-3">
            {analytics.attendance.checkInTimes.map((time, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{time.time}</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${
                          (time.count /
                            Math.max(
                              ...analytics.attendance.checkInTimes.map(
                                (t) => t.count
                              )
                            )) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {time.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Companies
          </h3>
          <div className="space-y-3">
            {analytics.attendance.byCompany.map((company, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{company.company}</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${company.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {company.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Demographics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Job Titles
          </h3>
          <div className="space-y-3">
            {analytics.attendance.demographics.byJobTitle.map((job, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{job.title}</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${job.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {job.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Geographic Distribution
          </h3>
          <div className="space-y-3">
            {analytics.attendance.demographics.byLocation.map(
              (location, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    {location.location}
                  </span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: `${location.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {location.count}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Engagement Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Session Duration
          </h3>
          <div className="space-y-3">
            {analytics.engagement.sessionDuration.distribution.map(
              (duration, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    {duration.range}
                  </span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: `${duration.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {duration.count}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Average Duration:</span>
              <span className="text-sm font-medium text-gray-900">
                {analytics.engagement.sessionDuration.average}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Sessions
          </h3>
          <div className="space-y-3">
            {analytics.engagement.popularSessions.map((session, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{session.name}</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div
                      className="bg-pink-500 h-2 rounded-full"
                      style={{ width: `${session.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {session.attendees}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback Analytics */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Event Feedback
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">Average Rating:</span>
              <span className="text-2xl font-bold text-gray-900">
                {analytics.engagement.feedback.averageRating}/5.0
              </span>
            </div>
            <div className="space-y-2">
              {analytics.engagement.feedback.distribution.map(
                (rating, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-8 text-sm text-gray-600">
                      {rating.rating}★
                    </span>
                    <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: `${rating.percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-12 text-sm text-gray-600 text-right">
                      {rating.count}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {analytics.engagement.feedback.totalResponses}
            </div>
            <div className="text-sm text-gray-600">Total Responses</div>
            <div className="text-sm text-gray-500 mt-2">
              {formatPercentage(
                (analytics.engagement.feedback.totalResponses /
                  analytics.overview.checkedIn) *
                  100
              )}{" "}
              response rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEventAnalytics;





