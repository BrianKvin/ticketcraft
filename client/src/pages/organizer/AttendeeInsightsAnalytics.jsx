import React, { useState } from "react";
import {
  Users,
  TrendingUp,
  TrendingDown,
  MapPin,
  Calendar,
  Clock,
  Star,
  Download,
  Filter,
  RefreshCw,
  Target,
  Award,
  Zap,
  UserCheck,
  UserX,
  Mail,
  Phone,
  Globe,
  Building,
  GraduationCap,
  Heart,
  MessageSquare,
  Share2,
} from "lucide-react";

const AttendeeInsightsAnalytics = () => {
  const [timeRange, setTimeRange] = useState("30d");
  const [eventFilter, setEventFilter] = useState("all");
  const [demographicFilter, setDemographicFilter] = useState("all");

  // Comprehensive mock attendee insights data
  const attendeeData = {
    overview: {
      totalAttendees: 1358,
      newAttendees: 234,
      returningAttendees: 1124,
      checkInRate: 94.2,
      satisfactionScore: 4.6,
      netPromoterScore: 78,
      averageAge: 34.5,
      genderDistribution: {
        male: 58.2,
        female: 39.8,
        other: 2.0,
      },
      topCountries: [
        { country: "United States", count: 456, percentage: 33.6 },
        { country: "Canada", count: 234, percentage: 17.2 },
        { country: "United Kingdom", count: 189, percentage: 13.9 },
        { country: "Germany", count: 156, percentage: 11.5 },
        { country: "Australia", count: 123, percentage: 9.1 },
      ],
      topCities: [
        { city: "San Francisco", count: 234, percentage: 17.2 },
        { city: "New York", count: 189, percentage: 13.9 },
        { city: "London", count: 156, percentage: 11.5 },
        { city: "Toronto", count: 123, percentage: 9.1 },
        { city: "Berlin", count: 98, percentage: 7.2 },
      ],
    },
    demographics: {
      ageGroups: [
        { range: "18-25", count: 234, percentage: 17.2 },
        { range: "26-35", count: 456, percentage: 33.6 },
        { range: "36-45", count: 389, percentage: 28.7 },
        { range: "46-55", count: 189, percentage: 13.9 },
        { range: "55+", count: 90, percentage: 6.6 },
      ],
      jobTitles: [
        { title: "Software Engineer", count: 234, percentage: 17.2 },
        { title: "Product Manager", count: 189, percentage: 13.9 },
        { title: "Marketing Manager", count: 156, percentage: 11.5 },
        { title: "Data Scientist", count: 123, percentage: 9.1 },
        { title: "Designer", count: 98, percentage: 7.2 },
        { title: "CEO/Founder", count: 87, percentage: 6.4 },
        { title: "Sales Manager", count: 76, percentage: 5.6 },
        { title: "Other", count: 395, percentage: 29.1 },
      ],
      companySizes: [
        { size: "1-10 employees", count: 234, percentage: 17.2 },
        { size: "11-50 employees", count: 345, percentage: 25.4 },
        { size: "51-200 employees", count: 298, percentage: 22.0 },
        { size: "201-1000 employees", count: 234, percentage: 17.2 },
        { size: "1000+ employees", count: 247, percentage: 18.2 },
      ],
      industries: [
        { industry: "Technology", count: 456, percentage: 33.6 },
        { industry: "Finance", count: 189, percentage: 13.9 },
        { industry: "Healthcare", count: 156, percentage: 11.5 },
        { industry: "Education", count: 123, percentage: 9.1 },
        { industry: "Retail", count: 98, percentage: 7.2 },
        { industry: "Manufacturing", count: 87, percentage: 6.4 },
        { industry: "Other", count: 249, percentage: 18.3 },
      ],
    },
    behavior: {
      registrationPatterns: [
        { period: "Early Bird", count: 456, percentage: 33.6 },
        { period: "Regular", count: 567, percentage: 41.8 },
        { period: "Last Minute", count: 335, percentage: 24.7 },
      ],
      attendancePatterns: [
        { pattern: "Full Event", count: 1234, percentage: 90.9 },
        { pattern: "Partial Event", count: 98, percentage: 7.2 },
        { pattern: "No Show", count: 26, percentage: 1.9 },
      ],
      engagementLevels: [
        { level: "High", count: 456, percentage: 33.6 },
        { level: "Medium", count: 567, percentage: 41.8 },
        { level: "Low", count: 335, percentage: 24.7 },
      ],
      socialMediaActivity: {
        totalShares: 1234,
        totalLikes: 5678,
        totalComments: 890,
        topPlatforms: [
          { platform: "LinkedIn", count: 456, percentage: 37.0 },
          { platform: "Twitter", count: 345, percentage: 28.0 },
          { platform: "Facebook", count: 234, percentage: 19.0 },
          { platform: "Instagram", count: 199, percentage: 16.0 },
        ],
      },
    },
    feedback: {
      overallSatisfaction: 4.6,
      satisfactionBreakdown: [
        { aspect: "Event Content", rating: 4.7, count: 1234 },
        { aspect: "Venue Quality", rating: 4.5, count: 1234 },
        { aspect: "Networking Opportunities", rating: 4.6, count: 1234 },
        { aspect: "Food & Beverages", rating: 4.3, count: 1234 },
        { aspect: "Staff Support", rating: 4.8, count: 1234 },
        { aspect: "Value for Money", rating: 4.4, count: 1234 },
      ],
      commonFeedback: [
        {
          feedback: "Great networking opportunities",
          count: 234,
          sentiment: "positive",
        },
        {
          feedback: "Excellent speakers and content",
          count: 189,
          sentiment: "positive",
        },
        { feedback: "Well organized event", count: 156, sentiment: "positive" },
        {
          feedback: "Could improve food quality",
          count: 98,
          sentiment: "negative",
        },
        {
          feedback: "Too crowded in some areas",
          count: 76,
          sentiment: "negative",
        },
        { feedback: "Need more seating", count: 65, sentiment: "negative" },
      ],
      netPromoterScore: {
        promoters: 78,
        passives: 18,
        detractors: 4,
        score: 74,
      },
    },
    trends: {
      monthlyGrowth: [
        { month: "Jan", newAttendees: 45, returningAttendees: 123 },
        { month: "Feb", newAttendees: 52, returningAttendees: 145 },
        { month: "Mar", newAttendees: 67, returningAttendees: 167 },
        { month: "Apr", newAttendees: 43, returningAttendees: 189 },
        { month: "May", newAttendees: 78, returningAttendees: 201 },
        { month: "Jun", newAttendees: 89, returningAttendees: 234 },
      ],
      retentionRate: 82.7,
      averageLifetimeValue: 1250,
      referralRate: 23.4,
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

  const demographicFilters = [
    { value: "all", label: "All Demographics" },
    { value: "age", label: "Age Groups" },
    { value: "job", label: "Job Titles" },
    { value: "company", label: "Company Size" },
    { value: "industry", label: "Industry" },
  ];

  const getTrendIcon = (value, threshold = 0) => {
    if (value > threshold)
      return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (value < threshold)
      return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <div className="h-4 w-4" />;
  };

  const getTrendColor = (value, threshold = 0) => {
    if (value > threshold) return "text-green-600";
    if (value < threshold) return "text-red-600";
    return "text-gray-600";
  };

  const formatPercentage = (value) => {
    return `${value.toFixed(1)}%`;
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case "positive":
        return "text-green-600 bg-green-100";
      case "negative":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Attendee Insights Analytics
            </h1>
            <p className="text-gray-600">
              Deep insights into attendee demographics, behavior, and
              satisfaction
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
              Demographics
            </label>
            <select
              value={demographicFilter}
              onChange={(e) => setDemographicFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {demographicFilters.map((filter) => (
                <option key={filter.value} value={filter.value}>
                  {filter.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
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
                {attendeeData.overview.totalAttendees.toLocaleString()}
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
              <p className="text-sm font-medium text-gray-600">Check-in Rate</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatPercentage(attendeeData.overview.checkInRate)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Satisfaction</p>
              <p className="text-2xl font-bold text-gray-900">
                {attendeeData.overview.satisfactionScore}/5.0
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
              <p className="text-sm font-medium text-gray-600">NPS Score</p>
              <p className="text-2xl font-bold text-gray-900">
                {attendeeData.overview.netPromoterScore}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Demographics Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Age Distribution */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Age Distribution
          </h3>
          <div className="space-y-3">
            {attendeeData.demographics.ageGroups.map((group, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-900">
                    {group.range} years
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${group.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">
                    {group.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gender Distribution */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Gender Distribution
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-900">Male</span>
              </div>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{
                      width: `${attendeeData.overview.genderDistribution.male}%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">
                  {formatPercentage(
                    attendeeData.overview.genderDistribution.male
                  )}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-900">
                  Female
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                  <div
                    className="bg-pink-500 h-2 rounded-full"
                    style={{
                      width: `${attendeeData.overview.genderDistribution.female}%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">
                  {formatPercentage(
                    attendeeData.overview.genderDistribution.female
                  )}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-900">Other</span>
              </div>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{
                      width: `${attendeeData.overview.genderDistribution.other}%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">
                  {formatPercentage(
                    attendeeData.overview.genderDistribution.other
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Titles and Industries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Top Job Titles */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Job Titles
          </h3>
          <div className="space-y-3">
            {attendeeData.demographics.jobTitles
              .slice(0, 6)
              .map((job, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-blue-700">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {job.title}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${job.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">
                      {job.count}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Top Industries */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Industries
          </h3>
          <div className="space-y-3">
            {attendeeData.demographics.industries
              .slice(0, 6)
              .map((industry, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-green-700">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {industry.industry}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${industry.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">
                      {industry.count}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Top Countries */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Countries
          </h3>
          <div className="space-y-3">
            {attendeeData.overview.topCountries.map((country, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-medium text-yellow-700">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {country.country}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${country.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">
                    {country.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Cities */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Cities
          </h3>
          <div className="space-y-3">
            {attendeeData.overview.topCities.map((city, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-medium text-purple-700">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {city.city}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${city.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">
                    {city.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Behavior Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Registration Patterns */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Registration Patterns
          </h3>
          <div className="space-y-3">
            {attendeeData.behavior.registrationPatterns.map(
              (pattern, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-900">
                      {pattern.period}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${pattern.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">
                      {pattern.count}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Engagement Levels */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Engagement Levels
          </h3>
          <div className="space-y-3">
            {attendeeData.behavior.engagementLevels.map((level, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full mr-3 ${
                      level.level === "High"
                        ? "bg-green-500"
                        : level.level === "Medium"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  ></div>
                  <span className="text-sm font-medium text-gray-900">
                    {level.level}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div
                      className={`h-2 rounded-full ${
                        level.level === "High"
                          ? "bg-green-500"
                          : level.level === "Medium"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${level.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">
                    {level.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Satisfaction Breakdown */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Satisfaction Breakdown
          </h3>
          <div className="space-y-3">
            {attendeeData.feedback.satisfactionBreakdown.map(
              (aspect, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">
                      {aspect.aspect}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${(aspect.rating / 5) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">
                      {aspect.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Common Feedback */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Common Feedback
          </h3>
          <div className="space-y-3">
            {attendeeData.feedback.commonFeedback.map((feedback, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900">
                    {feedback.feedback}
                  </span>
                </div>
                <div className="flex items-center">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getSentimentColor(
                      feedback.sentiment
                    )}`}
                  >
                    {feedback.sentiment}
                  </span>
                  <span className="text-sm text-gray-600 ml-2">
                    {feedback.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Activity */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Social Media Activity
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {attendeeData.behavior.socialMediaActivity.totalShares.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Total Shares</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {attendeeData.behavior.socialMediaActivity.totalLikes.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Total Likes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {attendeeData.behavior.socialMediaActivity.totalComments.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Total Comments</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {formatPercentage(attendeeData.trends.retentionRate)}
            </div>
            <div className="text-sm text-gray-600">Retention Rate</div>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Key Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
              <TrendingUp className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">
                High Engagement
              </div>
              <div className="text-xs text-gray-500">
                75.4% of attendees show high or medium engagement levels
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
              <Users className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">
                Strong Retention
              </div>
              <div className="text-xs text-gray-500">
                82.7% retention rate with 1,124 returning attendees
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
              <Star className="h-4 w-4 text-yellow-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">
                Excellent Satisfaction
              </div>
              <div className="text-xs text-gray-500">
                4.6/5.0 average rating with 78 NPS score
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
              <MapPin className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">
                Global Reach
              </div>
              <div className="text-xs text-gray-500">
                Attendees from 15+ countries with strong US presence
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
              <Share2 className="h-4 w-4 text-red-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">
                Social Buzz
              </div>
              <div className="text-xs text-gray-500">
                1,234 social shares with LinkedIn being the top platform
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 mt-1">
              <Target className="h-4 w-4 text-indigo-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">
                High Value
              </div>
              <div className="text-xs text-gray-500">
                $1,250 average lifetime value per attendee
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendeeInsightsAnalytics;
