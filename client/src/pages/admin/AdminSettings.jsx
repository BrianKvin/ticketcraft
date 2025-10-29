import React, { useState } from "react";
import {
  Settings,
  Users,
  Shield,
  Bell,
  Mail,
  Globe,
  Database,
  Key,
  Save,
  RefreshCw,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [settings, setSettings] = useState({
    general: {
      platformName: "TicketCraft",
      platformDescription:
        "The ultimate event management and ticketing platform",
      timezone: "UTC-8",
      currency: "USD",
      language: "en",
      maintenanceMode: false,
    },
    security: {
      requireEmailVerification: true,
      requirePhoneVerification: false,
      twoFactorAuth: true,
      sessionTimeout: 30,
      passwordMinLength: 8,
      maxLoginAttempts: 5,
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      adminAlerts: true,
      userRegistrationAlerts: true,
      eventCreationAlerts: true,
    },
    integrations: {
      stripeEnabled: true,
      paypalEnabled: false,
      googleAnalytics: true,
      facebookPixel: false,
      mailchimpEnabled: true,
      slackEnabled: false,
    },
    limits: {
      maxEventsPerOrganizer: 50,
      maxAttendeesPerEvent: 10000,
      maxFileSize: 10,
      maxImagesPerEvent: 20,
      storageLimit: 1000,
    },
  });

  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  const tabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "integrations", label: "Integrations", icon: Globe },
    { id: "limits", label: "Limits", icon: Database },
  ];

  const handleSettingChange = (category, key, value) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value,
      },
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveStatus(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSaving(false);
    setSaveStatus("success");

    // Clear success message after 3 seconds
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Platform Name
          </label>
          <input
            type="text"
            value={settings.general.platformName}
            onChange={(e) =>
              handleSettingChange("general", "platformName", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Timezone
          </label>
          <select
            value={settings.general.timezone}
            onChange={(e) =>
              handleSettingChange("general", "timezone", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="UTC-8">Pacific Time (UTC-8)</option>
            <option value="UTC-5">Eastern Time (UTC-5)</option>
            <option value="UTC+0">UTC</option>
            <option value="UTC+1">Central European Time (UTC+1)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Platform Description
        </label>
        <textarea
          value={settings.general.platformDescription}
          onChange={(e) =>
            handleSettingChange(
              "general",
              "platformDescription",
              e.target.value
            )
          }
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Currency
          </label>
          <select
            value={settings.general.currency}
            onChange={(e) =>
              handleSettingChange("general", "currency", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="CAD">CAD - Canadian Dollar</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Language
          </label>
          <select
            value={settings.general.language}
            onChange={(e) =>
              handleSettingChange("general", "language", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="maintenanceMode"
          checked={settings.general.maintenanceMode}
          onChange={(e) =>
            handleSettingChange("general", "maintenanceMode", e.target.checked)
          }
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          htmlFor="maintenanceMode"
          className="ml-2 block text-sm text-gray-700"
        >
          Enable maintenance mode
        </label>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              Email Verification
            </h4>
            <p className="text-sm text-gray-500">
              Require users to verify their email address
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.security.requireEmailVerification}
            onChange={(e) =>
              handleSettingChange(
                "security",
                "requireEmailVerification",
                e.target.checked
              )
            }
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              Phone Verification
            </h4>
            <p className="text-sm text-gray-500">
              Require users to verify their phone number
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.security.requirePhoneVerification}
            onChange={(e) =>
              handleSettingChange(
                "security",
                "requirePhoneVerification",
                e.target.checked
              )
            }
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              Two-Factor Authentication
            </h4>
            <p className="text-sm text-gray-500">
              Enable 2FA for admin accounts
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.security.twoFactorAuth}
            onChange={(e) =>
              handleSettingChange("security", "twoFactorAuth", e.target.checked)
            }
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Session Timeout (minutes)
          </label>
          <input
            type="number"
            value={settings.security.sessionTimeout}
            onChange={(e) =>
              handleSettingChange(
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
            Password Minimum Length
          </label>
          <input
            type="number"
            value={settings.security.passwordMinLength}
            onChange={(e) =>
              handleSettingChange(
                "security",
                "passwordMinLength",
                parseInt(e.target.value)
              )
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Max Login Attempts
        </label>
        <input
          type="number"
          value={settings.security.maxLoginAttempts}
          onChange={(e) =>
            handleSettingChange(
              "security",
              "maxLoginAttempts",
              parseInt(e.target.value)
            )
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              Email Notifications
            </h4>
            <p className="text-sm text-gray-500">
              Send notifications via email
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.notifications.emailNotifications}
            onChange={(e) =>
              handleSettingChange(
                "notifications",
                "emailNotifications",
                e.target.checked
              )
            }
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              SMS Notifications
            </h4>
            <p className="text-sm text-gray-500">Send notifications via SMS</p>
          </div>
          <input
            type="checkbox"
            checked={settings.notifications.smsNotifications}
            onChange={(e) =>
              handleSettingChange(
                "notifications",
                "smsNotifications",
                e.target.checked
              )
            }
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              Push Notifications
            </h4>
            <p className="text-sm text-gray-500">
              Send push notifications to mobile apps
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.notifications.pushNotifications}
            onChange={(e) =>
              handleSettingChange(
                "notifications",
                "pushNotifications",
                e.target.checked
              )
            }
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Admin Alerts</h4>
            <p className="text-sm text-gray-500">Send alerts to admin users</p>
          </div>
          <input
            type="checkbox"
            checked={settings.notifications.adminAlerts}
            onChange={(e) =>
              handleSettingChange(
                "notifications",
                "adminAlerts",
                e.target.checked
              )
            }
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              User Registration Alerts
            </h4>
            <p className="text-sm text-gray-500">
              Notify when new users register
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.notifications.userRegistrationAlerts}
            onChange={(e) =>
              handleSettingChange(
                "notifications",
                "userRegistrationAlerts",
                e.target.checked
              )
            }
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              Event Creation Alerts
            </h4>
            <p className="text-sm text-gray-500">
              Notify when new events are created
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.notifications.eventCreationAlerts}
            onChange={(e) =>
              handleSettingChange(
                "notifications",
                "eventCreationAlerts",
                e.target.checked
              )
            }
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>
      </div>
    </div>
  );

  const renderIntegrationSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              Stripe Payment Processing
            </h4>
            <p className="text-sm text-gray-500">
              Enable Stripe for payment processing
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.integrations.stripeEnabled}
            onChange={(e) =>
              handleSettingChange(
                "integrations",
                "stripeEnabled",
                e.target.checked
              )
            }
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              PayPal Payment Processing
            </h4>
            <p className="text-sm text-gray-500">
              Enable PayPal for payment processing
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.integrations.paypalEnabled}
            onChange={(e) =>
              handleSettingChange(
                "integrations",
                "paypalEnabled",
                e.target.checked
              )
            }
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              Google Analytics
            </h4>
            <p className="text-sm text-gray-500">
              Track website analytics with Google Analytics
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.integrations.googleAnalytics}
            onChange={(e) =>
              handleSettingChange(
                "integrations",
                "googleAnalytics",
                e.target.checked
              )
            }
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              Facebook Pixel
            </h4>
            <p className="text-sm text-gray-500">
              Track conversions with Facebook Pixel
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.integrations.facebookPixel}
            onChange={(e) =>
              handleSettingChange(
                "integrations",
                "facebookPixel",
                e.target.checked
              )
            }
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              Mailchimp Integration
            </h4>
            <p className="text-sm text-gray-500">
              Sync user data with Mailchimp
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.integrations.mailchimpEnabled}
            onChange={(e) =>
              handleSettingChange(
                "integrations",
                "mailchimpEnabled",
                e.target.checked
              )
            }
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              Slack Integration
            </h4>
            <p className="text-sm text-gray-500">
              Send notifications to Slack channels
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.integrations.slackEnabled}
            onChange={(e) =>
              handleSettingChange(
                "integrations",
                "slackEnabled",
                e.target.checked
              )
            }
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>
      </div>
    </div>
  );

  const renderLimitSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Events per Organizer
          </label>
          <input
            type="number"
            value={settings.limits.maxEventsPerOrganizer}
            onChange={(e) =>
              handleSettingChange(
                "limits",
                "maxEventsPerOrganizer",
                parseInt(e.target.value)
              )
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Attendees per Event
          </label>
          <input
            type="number"
            value={settings.limits.maxAttendeesPerEvent}
            onChange={(e) =>
              handleSettingChange(
                "limits",
                "maxAttendeesPerEvent",
                parseInt(e.target.value)
              )
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max File Size (MB)
          </label>
          <input
            type="number"
            value={settings.limits.maxFileSize}
            onChange={(e) =>
              handleSettingChange(
                "limits",
                "maxFileSize",
                parseInt(e.target.value)
              )
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Images per Event
          </label>
          <input
            type="number"
            value={settings.limits.maxImagesPerEvent}
            onChange={(e) =>
              handleSettingChange(
                "limits",
                "maxImagesPerEvent",
                parseInt(e.target.value)
              )
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Storage Limit per Organizer (MB)
        </label>
        <input
          type="number"
          value={settings.limits.storageLimit}
          onChange={(e) =>
            handleSettingChange(
              "limits",
              "storageLimit",
              parseInt(e.target.value)
            )
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return renderGeneralSettings();
      case "security":
        return renderSecuritySettings();
      case "notifications":
        return renderNotificationSettings();
      case "integrations":
        return renderIntegrationSettings();
      case "limits":
        return renderLimitSettings();
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Settings
        </h1>
        <p className="text-gray-600">
          Configure platform settings and preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border border-gray-200 mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">{renderTabContent()}</div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
        >
          {saving ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Settings
            </>
          )}
        </button>
      </div>

      {/* Save Status */}
      {saveStatus && (
        <div className="fixed bottom-4 right-4">
          <div
            className={`p-4 rounded-lg shadow-lg flex items-center ${
              saveStatus === "success"
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-red-100 text-red-800 border border-red-200"
            }`}
          >
            {saveStatus === "success" ? (
              <CheckCircle className="h-5 w-5 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2" />
            )}
            {saveStatus === "success"
              ? "Settings saved successfully!"
              : "Failed to save settings"}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSettings;





