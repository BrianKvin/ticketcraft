import React from "react";
import { Calendar, MapPin, Users, Clock, Download, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DashboardHome = ({ eventData, user }) => {
  const calculateDaysUntilEvent = () => {
    const eventDate = new Date("2024-03-15");
    const today = new Date();
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const daysUntilEvent = calculateDaysUntilEvent();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user.name.split(" ")[0]}!
        </h1>
        <p className="text-gray-600">
          Here's your event dashboard with all the important information.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Event Details Card */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-600" />
                Your Registered Event
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <img
                  src={eventData.image}
                  alt={eventData.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {eventData.title}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {eventData.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {eventData.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {eventData.type} Event
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button
                      size="sm"
                      className="bg-green-500 hover:bg-green-600"
                    >
                      <Video className="h-4 w-4 mr-2" />
                      Join Virtual Session
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download Details
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Event Countdown */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Event Countdown
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {daysUntilEvent}
              </div>
              <p className="text-gray-600">Days Until Event</p>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  Don't forget to prepare for the event!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">View Speakers</h3>
            <p className="text-sm text-gray-600">
              Explore event speakers and their sessions
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Exhibitors</h3>
            <p className="text-sm text-gray-600">
              Browse exhibitors and their booths
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Event Agenda</h3>
            <p className="text-sm text-gray-600">
              View the complete event schedule
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Download className="h-8 w-8 text-red-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">My Badge</h3>
            <p className="text-sm text-gray-600">Download your event badge</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Registration Confirmed</p>
                  <p className="text-xs text-gray-600">
                    Successfully registered for {eventData.title}
                  </p>
                </div>
                <span className="text-xs text-gray-500">2 days ago</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Payment Processed</p>
                  <p className="text-xs text-gray-600">
                    Payment confirmation sent to your email
                  </p>
                </div>
                <span className="text-xs text-gray-500">2 days ago</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Event Reminder</p>
                  <p className="text-xs text-gray-600">
                    Event starts in {daysUntilEvent} days
                  </p>
                </div>
                <span className="text-xs text-gray-500">Just now</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
