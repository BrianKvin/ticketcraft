import React from "react";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Download,
  Share2,
  QrCode,
  Video,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DashboardMyEvent = ({ eventData }) => {
  const registrationDetails = {
    ticketId: "TKT-2024-001234",
    registrationDate: "2024-01-15",
    paymentStatus: "Confirmed",
    ticketType: "General Admission",
    price: "$299",
    qrCode: "/placeholder.svg",
  };

  const eventResources = [
    {
      id: 1,
      title: "Event Guide",
      description:
        "Complete guide with maps, schedule, and important information",
      type: "PDF",
      size: "2.5 MB",
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "Mobile App",
      description: "Download the official event app for updates and networking",
      type: "App",
      size: "iOS/Android",
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Parking Information",
      description:
        "Venue parking details and alternative transportation options",
      type: "PDF",
      size: "1.2 MB",
      downloadUrl: "#",
    },
    {
      id: 4,
      title: "Speaker Presentations",
      description: "Access presentation slides after the event",
      type: "ZIP",
      size: "Available post-event",
      downloadUrl: "#",
    },
  ];

  const importantUpdates = [
    {
      id: 1,
      date: "2024-03-10",
      title: "New Speaker Added",
      message:
        "We're excited to announce Dr. Alex Thompson will be joining our keynote lineup.",
      type: "announcement",
    },
    {
      id: 2,
      date: "2024-03-08",
      title: "Venue WiFi Information",
      message:
        "Network: EventWiFi | Password: Tech2024 (will be displayed at the venue)",
      type: "info",
    },
    {
      id: 3,
      date: "2024-03-05",
      title: "Mobile App Now Available",
      message:
        "Download the official event app from the App Store or Google Play.",
      type: "update",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          My Event Details
        </h1>
        <p className="text-gray-600">
          Everything you need to know about your registered event
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Event Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Event Details Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex gap-6">
                <img
                  src={eventData.image}
                  alt={eventData.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {eventData.title}
                  </h2>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      {eventData.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      {eventData.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      {eventData.type} Event
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />3 Days Conference
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button className="bg-green-500 hover:bg-green-600">
                      <Video className="h-4 w-4 mr-2" />
                      Join Virtual
                    </Button>
                    <Button variant="outline">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Event
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Registration Details */}
          <Card>
            <CardHeader>
              <CardTitle>Registration Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Ticket ID</p>
                  <p className="font-semibold">
                    {registrationDetails.ticketId}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Registration Date
                  </p>
                  <p className="font-semibold">
                    {registrationDetails.registrationDate}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Payment Status</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {registrationDetails.paymentStatus}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Ticket Type</p>
                  <p className="font-semibold">
                    {registrationDetails.ticketType}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Amount Paid</p>
                  <p className="font-semibold text-green-600">
                    {registrationDetails.price}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Event Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Event Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {eventResources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {resource.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {resource.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {resource.type} • {resource.size}
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* QR Code Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Event QR Code</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-gray-100 p-6 rounded-lg mb-4">
                <QrCode className="h-24 w-24 mx-auto text-gray-400" />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Show this QR code at the venue for quick check-in
              </p>
              <Button size="sm" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download QR Code
              </Button>
            </CardContent>
          </Card>

          {/* Important Updates */}
          <Card>
            <CardHeader>
              <CardTitle>Important Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {importantUpdates.map((update) => (
                  <div
                    key={update.id}
                    className="border-l-4 border-blue-500 pl-4 py-2"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-sm">{update.title}</h4>
                      <span className="text-xs text-gray-500">
                        {update.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{update.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Add to Calendar
              </Button>
              <Button className="w-full" variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share with Colleagues
              </Button>
              <Button className="w-full" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Ticket
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardMyEvent;
