import React from "react";
import {
  Download,
  Share2,
  QrCode,
  User,
  Mail,
  Building,
  Calendar,
} from "lucide-react";
import Button from "../common/Button";

const DashboardMyBadge = ({
  eventData,
  user,
}) => {
  const badgeData = {
    ticketId: "TKT-2024-001234",
    attendeeId: "ATT-789456",
    company: "Tech Solutions Inc.",
    jobTitle: "Senior Developer",
    networkingInterests: ["AI/ML", "Cloud Computing", "Startups"],
    sessions: 6,
    badgeType: "General Admission",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          My Event Badge
        </h1>
        <p className="text-gray-600">
          Your personalized badge for {eventData.title}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Badge Preview */}
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-4">
              <h3 className="text-center font-semibold">Event Badge Preview</h3>
            </div>
            <div className="p-0">
              {/* Badge Design */}
              <div className="bg-white p-8">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white text-center">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold">{eventData.title}</h2>
                    <p className="text-sm opacity-90">{eventData.date}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 text-gray-900 mb-4">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                      {user.initials}
                    </div>
                    <h3 className="text-xl font-bold">{user.name}</h3>
                    <p className="text-sm text-gray-600">
                      {badgeData.jobTitle}
                    </p>
                    <p className="text-sm text-gray-600">{badgeData.company}</p>
                  </div>

                  <div className="flex justify-center items-center gap-4">
                    <div className="bg-white p-3 rounded">
                      <QrCode className="h-16 w-16 text-gray-800" />
                    </div>
                    <div className="text-left text-sm">
                      <p>Ticket ID:</p>
                      <p className="font-mono">{badgeData.ticketId}</p>
                      <p>Type: {badgeData.badgeType}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badge Actions */}
          <div className="mt-6 flex gap-3">
            <Button className="flex-1 bg-green-500 hover:bg-green-600">
              <Download className="h-4 w-4 mr-2" />
              Download Badge
            </Button>
            <Button variant="outline" className="flex-1">
              <Share2 className="h-4 w-4 mr-2" />
              Share Badge
            </Button>
          </div>
        </div>

        {/* Badge Information */}
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 border-b">
              <h3 className="flex items-center gap-2 font-semibold">
                <User className="h-5 w-5" />
                Personal Information
              </h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Full Name</p>
                    <p className="font-semibold">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <p className="font-semibold">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Company</p>
                    <p className="font-semibold">{badgeData.company}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Job Title</p>
                    <p className="font-semibold">{badgeData.jobTitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badge Details */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 border-b">
              <h3 className="flex items-center gap-2 font-semibold">
                <Building className="h-5 w-5" />
                Badge Details
              </h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Badge Type</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {badgeData.badgeType}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Attendee ID</p>
                    <p className="font-mono text-sm">{badgeData.attendeeId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Registered Sessions
                    </p>
                    <p className="font-semibold">
                      {badgeData.sessions} Sessions
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Registration Date
                    </p>
                    <p className="font-semibold">
                      {eventData.registrationDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Networking Interests */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Networking Interests</h3>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {badgeData.networkingInterests.map((interest, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  >
                    {interest}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-3">
                These interests will be visible to other attendees for
                networking purposes.
              </p>
            </div>
          </div>

          {/* Badge Instructions */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 border-b">
              <h3 className="flex items-center gap-2 font-semibold">
                <Calendar className="h-5 w-5" />
                Badge Instructions
              </h3>
            </div>
            <div className="p-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <p>
                    Download and print your badge or save it to your mobile
                    device
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <p>
                    Wear your badge visibly during the event for easy
                    identification
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <p>
                    Use the QR code for quick check-in at sessions and
                    networking events
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <p>
                    Keep your badge secure and report any issues to event staff
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Wallet */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Add to Digital Wallet</h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">
                Add your event badge to your mobile wallet for easy access
              </p>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 text-sm">
                  Add to Apple Wallet
                </Button>
                <Button variant="outline" className="flex-1 text-sm">
                  Add to Google Pay
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMyBadge;
