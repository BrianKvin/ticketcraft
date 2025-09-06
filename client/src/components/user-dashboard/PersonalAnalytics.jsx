import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Users,
  Calendar,
  Award,
  Target,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react";
import Button from "../common/Button";

const PersonalAnalytics = ({ eventData, user }) => {
  const [timeRange, setTimeRange] = useState("week");
  const [analytics, setAnalytics] = useState({});

  // Mock analytics data
  const mockAnalytics = {
    week: {
      sessionsAttended: 12,
      networkingConnections: 23,
      hoursSpent: 18.5,
      achievements: 5,
      engagementScore: 87,
      topInterests: ["AI/ML", "Cloud Computing", "Product Strategy"],
      sessionTypes: {
        Keynotes: 3,
        Workshops: 4,
        Panels: 2,
        Networking: 3,
      },
      dailyActivity: [
        { day: "Mon", sessions: 2, connections: 5, hours: 3.5 },
        { day: "Tue", sessions: 3, connections: 8, hours: 4.2 },
        { day: "Wed", sessions: 4, connections: 6, hours: 5.1 },
        { day: "Thu", sessions: 2, connections: 3, hours: 3.2 },
        { day: "Fri", sessions: 1, connections: 1, hours: 2.5 },
      ],
      goals: {
        sessionsTarget: 15,
        connectionsTarget: 25,
        hoursTarget: 20,
      },
    },
    month: {
      sessionsAttended: 45,
      networkingConnections: 89,
      hoursSpent: 67.5,
      achievements: 18,
      engagementScore: 92,
      topInterests: [
        "AI/ML",
        "Cloud Computing",
        "Product Strategy",
        "Data Analytics",
      ],
      sessionTypes: {
        Keynotes: 12,
        Workshops: 18,
        Panels: 8,
        Networking: 7,
      },
      dailyActivity: [
        { day: "Week 1", sessions: 12, connections: 23, hours: 18.5 },
        { day: "Week 2", sessions: 15, connections: 28, hours: 22.1 },
        { day: "Week 3", sessions: 10, connections: 20, hours: 15.2 },
        { day: "Week 4", sessions: 8, connections: 18, hours: 11.7 },
      ],
      goals: {
        sessionsTarget: 50,
        connectionsTarget: 100,
        hoursTarget: 80,
      },
    },
  };

  useEffect(() => {
    setAnalytics(mockAnalytics[timeRange]);
  }, [timeRange]);

  const getProgressPercentage = (current, target) => {
    return Math.min((current / target) * 100, 100);
  };

  const getEngagementColor = (score) => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getEngagementBgColor = (score) => {
    if (score >= 90) return "bg-green-100";
    if (score >= 70) return "bg-yellow-100";
    return "bg-red-100";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <BarChart3 className="h-8 w-8 text-purple-600" />
              Personal Analytics
            </h1>
            <p className="text-gray-600">
              Track your event engagement and networking progress
            </p>
          </div>
          <div className="flex space-x-2">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
            <Button className="bg-purple-500 hover:bg-purple-600">
              <Activity className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Sessions Attended
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {analytics.sessionsAttended}
              </p>
              <p className="text-sm text-gray-500">
                {analytics.goals?.sessionsTarget &&
                  `${analytics.goals.sessionsTarget} target`}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          {analytics.goals?.sessionsTarget && (
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{
                    width: `${getProgressPercentage(
                      analytics.sessionsAttended,
                      analytics.goals.sessionsTarget
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Connections Made
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {analytics.networkingConnections}
              </p>
              <p className="text-sm text-gray-500">
                {analytics.goals?.connectionsTarget &&
                  `${analytics.goals.connectionsTarget} target`}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
          {analytics.goals?.connectionsTarget && (
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{
                    width: `${getProgressPercentage(
                      analytics.networkingConnections,
                      analytics.goals.connectionsTarget
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Hours Spent</p>
              <p className="text-2xl font-bold text-gray-900">
                {analytics.hoursSpent}h
              </p>
              <p className="text-sm text-gray-500">
                {analytics.goals?.hoursTarget &&
                  `${analytics.goals.hoursTarget}h target`}
              </p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          {analytics.goals?.hoursTarget && (
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-600 h-2 rounded-full"
                  style={{
                    width: `${getProgressPercentage(
                      analytics.hoursSpent,
                      analytics.goals.hoursTarget
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Engagement Score
              </p>
              <p
                className={`text-2xl font-bold ${getEngagementColor(
                  analytics.engagementScore
                )}`}
              >
                {analytics.engagementScore}%
              </p>
              <p className="text-sm text-gray-500">Overall activity</p>
            </div>
            <div
              className={`p-3 rounded-full ${getEngagementBgColor(
                analytics.engagementScore
              )}`}
            >
              <Award
                className={`h-6 w-6 ${getEngagementColor(
                  analytics.engagementScore
                )}`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Session Types Breakdown */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <PieChart className="h-5 w-5 text-purple-600" />
            Session Types
          </h3>
          <div className="space-y-4">
            {Object.entries(analytics.sessionTypes || {}).map(
              ([type, count]) => (
                <div key={type} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {type}
                  </span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{
                          width: `${
                            (count /
                              Math.max(
                                ...Object.values(analytics.sessionTypes || {})
                              )) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 w-8">
                      {count}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Top Interests */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600" />
            Top Interests
          </h3>
          <div className="space-y-3">
            {analytics.topInterests?.map((interest, index) => (
              <div key={interest} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {interest}
                  </span>
                </div>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${100 - index * 15}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Activity Chart */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          Daily Activity
        </h3>
        <div className="space-y-4">
          {analytics.dailyActivity?.map((day, index) => (
            <div key={day.day} className="flex items-center space-x-4">
              <div className="w-16 text-sm font-medium text-gray-700">
                {day.day}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Sessions</span>
                  <span className="font-semibold">{day.sessions}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{
                      width: `${
                        (day.sessions /
                          Math.max(
                            ...analytics.dailyActivity?.map((d) => d.sessions)
                          )) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{day.connections} connections</span>
                  <span>{day.hours}h</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Award className="h-5 w-5 text-yellow-600" />
          Recent Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Networking Pro",
              description: "Made 20+ connections",
              icon: Users,
              earned: true,
            },
            {
              title: "Session Master",
              description: "Attended 10+ sessions",
              icon: Calendar,
              earned: true,
            },
            {
              title: "Early Bird",
              description: "First to arrive at 3 sessions",
              icon: Target,
              earned: true,
            },
            {
              title: "Social Butterfly",
              description: "Most active in networking",
              icon: TrendingUp,
              earned: false,
            },
            {
              title: "Knowledge Seeker",
              description: "Attended all workshops",
              icon: Award,
              earned: false,
            },
            {
              title: "Time Master",
              description: "Spent 20+ hours at event",
              icon: Activity,
              earned: false,
            },
          ].map((achievement, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 ${
                achievement.earned
                  ? "border-yellow-500 bg-yellow-50"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2 rounded-full ${
                    achievement.earned ? "bg-yellow-100" : "bg-gray-100"
                  }`}
                >
                  <achievement.icon
                    className={`h-5 w-5 ${
                      achievement.earned ? "text-yellow-600" : "text-gray-400"
                    }`}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold ${
                      achievement.earned ? "text-yellow-800" : "text-gray-600"
                    }`}
                  >
                    {achievement.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      achievement.earned ? "text-yellow-700" : "text-gray-500"
                    }`}
                  >
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalAnalytics;

