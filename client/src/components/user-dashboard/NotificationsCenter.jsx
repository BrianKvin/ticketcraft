import React, { useState, useEffect } from "react";
import {
  Bell,
  MessageCircle,
  Calendar,
  Users,
  AlertCircle,
  CheckCircle,
  X,
  Settings,
} from "lucide-react";
import Button from "../common/Button";

const NotificationsCenter = ({ eventData }) => {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isRealTime, setIsRealTime] = useState(true);

  // Mock notifications data
  const mockNotifications = [
    {
      id: 1,
      type: "session",
      title: "Session Starting Soon",
      message: "AI Revolution in Business starts in 15 minutes at Tech Hall A",
      timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
      isRead: false,
      priority: "high",
      actionUrl: "/user/dashboard?section=agenda",
      icon: Calendar,
    },
    {
      id: 2,
      type: "networking",
      title: "New Connection Request",
      message: "Sarah Johnson wants to connect with you",
      timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
      isRead: false,
      priority: "medium",
      actionUrl: "/user/dashboard?section=networking",
      icon: Users,
    },
    {
      id: 3,
      type: "announcement",
      title: "Event Update",
      message: "Lunch will be served in the Main Hall from 12:00-1:30 PM",
      timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      isRead: true,
      priority: "low",
      actionUrl: null,
      icon: AlertCircle,
    },
    {
      id: 4,
      type: "message",
      title: "Direct Message",
      message: "Michael Chen sent you a message about the workshop",
      timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
      isRead: false,
      priority: "medium",
      actionUrl: "/user/dashboard?section=messages",
      icon: MessageCircle,
    },
    {
      id: 5,
      type: "achievement",
      title: "Networking Milestone",
      message: "Congratulations! You've made 10 new connections",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      isRead: true,
      priority: "low",
      actionUrl: "/user/dashboard?section=analytics",
      icon: CheckCircle,
    },
  ];

  useEffect(() => {
    setNotifications(mockNotifications);
  }, []);

  useEffect(() => {
    if (isRealTime) {
      // Simulate real-time notifications
      const interval = setInterval(() => {
        const newNotification = {
          id: Date.now(),
          type: "session",
          title: "Live Session Update",
          message: "New poll available in the current session",
          timestamp: new Date(),
          isRead: false,
          priority: "medium",
          actionUrl: "/user/dashboard?section=agenda",
          icon: Calendar,
        };

        setNotifications((prev) => [newNotification, ...prev.slice(0, 9)]);
      }, 60000); // Add notification every minute

      return () => clearInterval(interval);
    }
  }, [isRealTime]);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-l-red-500 bg-red-50";
      case "medium":
        return "border-l-yellow-500 bg-yellow-50";
      case "low":
        return "border-l-blue-500 bg-blue-50";
      default:
        return "border-l-gray-500 bg-gray-50";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "session":
        return "text-green-600";
      case "networking":
        return "text-blue-600";
      case "announcement":
        return "text-orange-600";
      case "message":
        return "text-purple-600";
      case "achievement":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const markAsRead = (notificationId) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === notificationId ? { ...notif, isRead: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, isRead: true }))
    );
  };

  const deleteNotification = (notificationId) => {
    setNotifications((prev) =>
      prev.filter((notif) => notif.id !== notificationId)
    );
  };

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === "all") return true;
    if (filter === "unread") return !notif.isRead;
    return notif.type === filter;
  });

  const unreadCount = notifications.filter((notif) => !notif.isRead).length;

  return (
    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Bell className="h-8 w-8 text-blue-600" />
              Notifications
            </h1>
            <p className="text-gray-600">
              Stay updated with real-time event notifications
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  isRealTime ? "bg-green-500" : "bg-gray-400"
                }`}
              ></div>
              <span className="text-sm text-gray-600">
                {isRealTime ? "Live" : "Paused"}
              </span>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsRealTime(!isRealTime)}
              className="text-sm"
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      {/* Stats and Controls */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {notifications.length}
            </div>
            <div className="text-sm text-gray-600">Total Notifications</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{unreadCount}</div>
            <div className="text-sm text-gray-600">Unread</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {notifications.filter((n) => n.priority === "high").length}
            </div>
            <div className="text-sm text-gray-600">High Priority</div>
          </div>
          <div className="text-center">
            <Button
              onClick={markAllAsRead}
              className="bg-green-500 hover:bg-green-600"
              disabled={unreadCount === 0}
            >
              Mark All Read
            </Button>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {[
            { id: "all", label: "All", count: notifications.length },
            { id: "unread", label: "Unread", count: unreadCount },
            {
              id: "session",
              label: "Sessions",
              count: notifications.filter((n) => n.type === "session").length,
            },
            {
              id: "networking",
              label: "Networking",
              count: notifications.filter((n) => n.type === "networking")
                .length,
            },
            {
              id: "announcement",
              label: "Updates",
              count: notifications.filter((n) => n.type === "announcement")
                .length,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                filter === tab.id
                  ? "bg-white text-green-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab.label}
              {tab.count > 0 && (
                <span
                  className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    filter === tab.id
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => {
          const IconComponent = notification.icon;
          return (
            <div
              key={notification.id}
              className={`bg-white rounded-lg shadow-md border-l-4 ${getPriorityColor(
                notification.priority
              )} ${
                !notification.isRead
                  ? "ring-2 ring-blue-500 ring-opacity-20"
                  : ""
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div
                      className={`p-2 rounded-full ${getTypeColor(
                        notification.type
                      )} bg-opacity-10`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {notification.title}
                        </h3>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            notification.priority === "high"
                              ? "bg-red-100 text-red-800"
                              : notification.priority === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {notification.priority}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{formatTimestamp(notification.timestamp)}</span>
                        <span className="capitalize">{notification.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {!notification.isRead && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => markAsRead(notification.id)}
                      >
                        Mark Read
                      </Button>
                    )}
                    {notification.actionUrl && (
                      <Button
                        className="bg-green-500 hover:bg-green-600"
                        size="sm"
                      >
                        View
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteNotification(notification.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredNotifications.length === 0 && (
        <div className="text-center py-12">
          <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No notifications
          </h3>
          <p className="text-gray-600">
            {filter === "unread"
              ? "All caught up! No unread notifications."
              : "No notifications match your filter."}
          </p>
        </div>
      )}
    </div>
  );
};

export default NotificationsCenter;

