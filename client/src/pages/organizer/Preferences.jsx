import React, { useState } from "react";
import {
  Save,
  RefreshCw,
  Bell,
  Mail,
  Smartphone,
  Globe,
  Shield,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  User,
  Calendar,
  Clock,
  Palette,
  Monitor,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Download,
  Upload,
  Database,
  HardDrive,
  Cpu,
  MemoryStick,
  Settings,
  Check,
  X,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Plus,
  Minus,
  Edit,
  Trash2,
  Copy,
  Share,
  Star,
  Heart,
  Bookmark,
  Tag,
  Filter,
  Search,
  Grid,
  List,
  Layout,
  Maximize,
  Minimize,
  RotateCcw,
  Zap,
  Target,
  BarChart3,
  PieChart,
  LineChart,
  TrendingUp,
  TrendingDown,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info as InfoIcon,
} from "lucide-react";

const Preferences = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [preferences, setPreferences] = useState({
    // General Settings
    general: {
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.johnson@eventify.com",
      phone: "+1 (555) 123-4567",
      company: "Eventify Solutions",
      jobTitle: "Event Manager",
      timezone: "America/New_York",
      language: "en",
      dateFormat: "MM/DD/YYYY",
      timeFormat: "12h",
      currency: "USD",
    },
    // Notification Settings
    notifications: {
      email: {
        eventUpdates: true,
        attendeeRegistrations: true,
        paymentNotifications: true,
        systemAlerts: true,
        marketingEmails: false,
        weeklyReports: true,
        dailyDigest: false,
      },
      sms: {
        urgentAlerts: true,
        eventReminders: true,
        paymentConfirmations: true,
        systemAlerts: false,
      },
      push: {
        eventUpdates: true,
        attendeeActivity: false,
        systemNotifications: true,
        marketingPromotions: false,
      },
      inApp: {
        allNotifications: true,
        soundEnabled: true,
        vibrationEnabled: true,
        desktopNotifications: true,
      },
    },
    // Appearance Settings
    appearance: {
      theme: "light", // light, dark, auto
      primaryColor: "#3B82F6",
      accentColor: "#10B981",
      fontSize: "medium", // small, medium, large
      density: "comfortable", // compact, comfortable, spacious
      sidebarCollapsed: false,
      showBreadcrumbs: true,
      showTooltips: true,
      animations: true,
      highContrast: false,
    },
    // Privacy Settings
    privacy: {
      profileVisibility: "public", // public, private, restricted
      showOnlineStatus: true,
      allowDirectMessages: true,
      shareAnalytics: true,
      dataRetention: "2years", // 1year, 2years, 5years, forever
      marketingConsent: false,
      thirdPartySharing: false,
      locationTracking: false,
      cookieConsent: true,
    },
    // Security Settings
    security: {
      twoFactorAuth: true,
      loginAlerts: true,
      sessionTimeout: 30, // minutes
      passwordExpiry: 90, // days
      requireStrongPasswords: true,
      allowPasswordReset: true,
      deviceTrust: true,
      apiAccess: true,
      auditLogging: true,
    },
    // Performance Settings
    performance: {
      autoSave: true,
      autoSaveInterval: 30, // seconds
      cacheEnabled: true,
      cacheSize: 100, // MB
      backgroundSync: true,
      offlineMode: true,
      dataCompression: true,
      imageOptimization: true,
      lazyLoading: true,
    },
  });

  const [hasChanges, setHasChanges] = useState(false);

  const tabs = [
    { id: "general", name: "General", icon: User },
    { id: "notifications", name: "Notifications", icon: Bell },
    { id: "appearance", name: "Appearance", icon: Palette },
    { id: "privacy", name: "Privacy", icon: Shield },
    { id: "security", name: "Security", icon: Lock },
    { id: "performance", name: "Performance", icon: Zap },
  ];

  const handleInputChange = (section, field, value) => {
    setPreferences((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
    setHasChanges(true);
  };

  const handleNestedInputChange = (section, subsection, field, value) => {
    setPreferences((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subsection]: {
          ...prev[section][subsection],
          [field]: value,
        },
      },
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    console.log("Saving preferences:", preferences);
    setHasChanges(false);
    // Here you would typically save to backend
  };

  const handleReset = () => {
    console.log("Resetting preferences to defaults");
    // Reset to default values
    setHasChanges(false);
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            value={preferences.general.firstName}
            onChange={(e) =>
              handleInputChange("general", "firstName", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={preferences.general.lastName}
            onChange={(e) =>
              handleInputChange("general", "lastName", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={preferences.general.email}
            onChange={(e) =>
              handleInputChange("general", "email", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={preferences.general.phone}
            onChange={(e) =>
              handleInputChange("general", "phone", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company
          </label>
          <input
            type="text"
            value={preferences.general.company}
            onChange={(e) =>
              handleInputChange("general", "company", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Title
          </label>
          <input
            type="text"
            value={preferences.general.jobTitle}
            onChange={(e) =>
              handleInputChange("general", "jobTitle", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Timezone
          </label>
          <select
            value={preferences.general.timezone}
            onChange={(e) =>
              handleInputChange("general", "timezone", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="America/New_York">Eastern Time (ET)</option>
            <option value="America/Chicago">Central Time (CT)</option>
            <option value="America/Denver">Mountain Time (MT)</option>
            <option value="America/Los_Angeles">Pacific Time (PT)</option>
            <option value="Europe/London">London (GMT)</option>
            <option value="Europe/Paris">Paris (CET)</option>
            <option value="Asia/Tokyo">Tokyo (JST)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Language
          </label>
          <select
            value={preferences.general.language}
            onChange={(e) =>
              handleInputChange("general", "language", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="pt">Portuguese</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="zh">Chinese</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Currency
          </label>
          <select
            value={preferences.general.currency}
            onChange={(e) =>
              handleInputChange("general", "currency", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="JPY">JPY (¥)</option>
            <option value="CAD">CAD (C$)</option>
            <option value="AUD">AUD (A$)</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-8">
      {/* Email Notifications */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Mail className="h-5 w-5 mr-2" />
          Email Notifications
        </h3>
        <div className="space-y-4">
          {Object.entries(preferences.notifications.email).map(
            ([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </label>
                  <p className="text-xs text-gray-500">
                    {key === "eventUpdates" &&
                      "Get notified about event changes and updates"}
                    {key === "attendeeRegistrations" &&
                      "Receive alerts when new attendees register"}
                    {key === "paymentNotifications" &&
                      "Get notified about payment status changes"}
                    {key === "systemAlerts" &&
                      "Receive important system notifications"}
                    {key === "marketingEmails" &&
                      "Receive promotional emails and updates"}
                    {key === "weeklyReports" &&
                      "Get weekly performance reports"}
                    {key === "dailyDigest" &&
                      "Receive daily activity summaries"}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "notifications",
                        "email",
                        key,
                        e.target.checked
                      )
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            )
          )}
        </div>
      </div>

      {/* SMS Notifications */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Smartphone className="h-5 w-5 mr-2" />
          SMS Notifications
        </h3>
        <div className="space-y-4">
          {Object.entries(preferences.notifications.sms).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
                <p className="text-xs text-gray-500">
                  {key === "urgentAlerts" && "Receive urgent alerts via SMS"}
                  {key === "eventReminders" && "Get event reminders via SMS"}
                  {key === "paymentConfirmations" &&
                    "Receive payment confirmations via SMS"}
                  {key === "systemAlerts" && "Get system alerts via SMS"}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) =>
                    handleNestedInputChange(
                      "notifications",
                      "sms",
                      key,
                      e.target.checked
                    )
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Push Notifications */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Bell className="h-5 w-5 mr-2" />
          Push Notifications
        </h3>
        <div className="space-y-4">
          {Object.entries(preferences.notifications.push).map(
            ([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </label>
                  <p className="text-xs text-gray-500">
                    {key === "eventUpdates" &&
                      "Get push notifications for event updates"}
                    {key === "attendeeActivity" &&
                      "Receive notifications about attendee activity"}
                    {key === "systemNotifications" &&
                      "Get system notifications"}
                    {key === "marketingPromotions" &&
                      "Receive marketing promotions"}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "notifications",
                        "push",
                        key,
                        e.target.checked
                      )
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Theme
          </label>
          <div className="flex space-x-4">
            {[
              { value: "light", label: "Light", icon: Sun },
              { value: "dark", label: "Dark", icon: Moon },
              { value: "auto", label: "Auto", icon: Monitor },
            ].map((theme) => (
              <label
                key={theme.value}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="radio"
                  name="theme"
                  value={theme.value}
                  checked={preferences.appearance.theme === theme.value}
                  onChange={(e) =>
                    handleInputChange("appearance", "theme", e.target.value)
                  }
                  className="sr-only"
                />
                <div
                  className={`flex items-center px-4 py-2 border rounded-lg ${
                    preferences.appearance.theme === theme.value
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                >
                  <theme.icon className="h-4 w-4 mr-2" />
                  {theme.label}
                </div>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Font Size
          </label>
          <select
            value={preferences.appearance.fontSize}
            onChange={(e) =>
              handleInputChange("appearance", "fontSize", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Color
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="color"
              value={preferences.appearance.primaryColor}
              onChange={(e) =>
                handleInputChange("appearance", "primaryColor", e.target.value)
              }
              className="w-12 h-10 border border-gray-300 rounded-lg cursor-pointer"
            />
            <input
              type="text"
              value={preferences.appearance.primaryColor}
              onChange={(e) =>
                handleInputChange("appearance", "primaryColor", e.target.value)
              }
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Accent Color
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="color"
              value={preferences.appearance.accentColor}
              onChange={(e) =>
                handleInputChange("appearance", "accentColor", e.target.value)
              }
              className="w-12 h-10 border border-gray-300 rounded-lg cursor-pointer"
            />
            <input
              type="text"
              value={preferences.appearance.accentColor}
              onChange={(e) =>
                handleInputChange("appearance", "accentColor", e.target.value)
              }
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-md font-medium text-gray-900">Interface Options</h4>
        {Object.entries(preferences.appearance)
          .filter(([key]) =>
            [
              "sidebarCollapsed",
              "showBreadcrumbs",
              "showTooltips",
              "animations",
              "highContrast",
            ].includes(key)
          )
          .map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
                <p className="text-xs text-gray-500">
                  {key === "sidebarCollapsed" && "Start with sidebar collapsed"}
                  {key === "showBreadcrumbs" && "Show navigation breadcrumbs"}
                  {key === "showTooltips" && "Show helpful tooltips"}
                  {key === "animations" && "Enable smooth animations"}
                  {key === "highContrast" && "Use high contrast mode"}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) =>
                    handleInputChange("appearance", key, e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h4 className="text-md font-medium text-gray-900">
          Profile Visibility
        </h4>
        <div className="space-y-3">
          {[
            {
              value: "public",
              label: "Public",
              description: "Anyone can see your profile",
            },
            {
              value: "private",
              label: "Private",
              description: "Only you can see your profile",
            },
            {
              value: "restricted",
              label: "Restricted",
              description: "Only approved users can see your profile",
            },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center cursor-pointer"
            >
              <input
                type="radio"
                name="profileVisibility"
                value={option.value}
                checked={preferences.privacy.profileVisibility === option.value}
                onChange={(e) =>
                  handleInputChange(
                    "privacy",
                    "profileVisibility",
                    e.target.value
                  )
                }
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-700">
                  {option.label}
                </div>
                <div className="text-xs text-gray-500">
                  {option.description}
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-md font-medium text-gray-900">Data & Privacy</h4>
        {Object.entries(preferences.privacy)
          .filter(([key]) =>
            [
              "showOnlineStatus",
              "allowDirectMessages",
              "shareAnalytics",
              "marketingConsent",
              "thirdPartySharing",
              "locationTracking",
              "cookieConsent",
            ].includes(key)
          )
          .map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
                <p className="text-xs text-gray-500">
                  {key === "showOnlineStatus" && "Show when you are online"}
                  {key === "allowDirectMessages" &&
                    "Allow others to send you direct messages"}
                  {key === "shareAnalytics" &&
                    "Share anonymous usage data to improve the platform"}
                  {key === "marketingConsent" &&
                    "Receive marketing communications"}
                  {key === "thirdPartySharing" &&
                    "Allow sharing data with third parties"}
                  {key === "locationTracking" &&
                    "Allow location tracking for better services"}
                  {key === "cookieConsent" &&
                    "Accept cookies for enhanced functionality"}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) =>
                    handleInputChange("privacy", key, e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Data Retention Period
        </label>
        <select
          value={preferences.privacy.dataRetention}
          onChange={(e) =>
            handleInputChange("privacy", "dataRetention", e.target.value)
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="1year">1 Year</option>
          <option value="2years">2 Years</option>
          <option value="5years">5 Years</option>
          <option value="forever">Forever</option>
        </select>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h4 className="text-md font-medium text-gray-900">Authentication</h4>
        {Object.entries(preferences.security)
          .filter(([key]) =>
            [
              "twoFactorAuth",
              "loginAlerts",
              "requireStrongPasswords",
              "allowPasswordReset",
              "deviceTrust",
              "apiAccess",
              "auditLogging",
            ].includes(key)
          )
          .map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
                <p className="text-xs text-gray-500">
                  {key === "twoFactorAuth" &&
                    "Enable two-factor authentication for enhanced security"}
                  {key === "loginAlerts" &&
                    "Get notified of new login attempts"}
                  {key === "requireStrongPasswords" &&
                    "Require strong passwords for all accounts"}
                  {key === "allowPasswordReset" &&
                    "Allow password reset via email"}
                  {key === "deviceTrust" && "Trust this device for 30 days"}
                  {key === "apiAccess" && "Allow API access for integrations"}
                  {key === "auditLogging" &&
                    "Enable audit logging for security events"}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) =>
                    handleInputChange("security", key, e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Session Timeout (minutes)
          </label>
          <input
            type="number"
            min="5"
            max="480"
            value={preferences.security.sessionTimeout}
            onChange={(e) =>
              handleInputChange(
                "security",
                "sessionTimeout",
                parseInt(e.target.value)
              )
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password Expiry (days)
          </label>
          <input
            type="number"
            min="30"
            max="365"
            value={preferences.security.passwordExpiry}
            onChange={(e) =>
              handleInputChange(
                "security",
                "passwordExpiry",
                parseInt(e.target.value)
              )
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );

  const renderPerformanceSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h4 className="text-md font-medium text-gray-900">Auto-Save & Sync</h4>
        {Object.entries(preferences.performance)
          .filter(([key]) =>
            [
              "autoSave",
              "backgroundSync",
              "offlineMode",
              "dataCompression",
              "imageOptimization",
              "lazyLoading",
            ].includes(key)
          )
          .map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
                <p className="text-xs text-gray-500">
                  {key === "autoSave" &&
                    "Automatically save changes as you work"}
                  {key === "backgroundSync" && "Sync data in the background"}
                  {key === "offlineMode" &&
                    "Enable offline mode for better performance"}
                  {key === "dataCompression" &&
                    "Compress data to reduce bandwidth usage"}
                  {key === "imageOptimization" &&
                    "Optimize images for faster loading"}
                  {key === "lazyLoading" && "Load content only when needed"}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) =>
                    handleInputChange("performance", key, e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Auto-Save Interval (seconds)
          </label>
          <input
            type="number"
            min="10"
            max="300"
            value={preferences.performance.autoSaveInterval}
            onChange={(e) =>
              handleInputChange(
                "performance",
                "autoSaveInterval",
                parseInt(e.target.value)
              )
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cache Size (MB)
          </label>
          <input
            type="number"
            min="50"
            max="1000"
            value={preferences.performance.cacheSize}
            onChange={(e) =>
              handleInputChange(
                "performance",
                "cacheSize",
                parseInt(e.target.value)
              )
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return renderGeneralSettings();
      case "notifications":
        return renderNotificationSettings();
      case "appearance":
        return renderAppearanceSettings();
      case "privacy":
        return renderPrivacySettings();
      case "security":
        return renderSecuritySettings();
      case "performance":
        return renderPerformanceSettings();
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Preferences
            </h1>
            <p className="text-gray-600">
              Customize your account settings and preferences
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset to Defaults
            </button>
            <button
              onClick={handleSave}
              disabled={!hasChanges}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:w-64 flex-shrink-0">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                  activeTab === tab.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <tab.icon className="h-4 w-4 mr-3" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;

