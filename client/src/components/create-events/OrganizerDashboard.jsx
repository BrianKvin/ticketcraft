import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Plus,
  Calendar,
  MapPin,
  Users,
  Edit,
  Trash2,
  Eye,
  DollarSign,
  History,
  Download,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import OrganizerProfile from "../components/organizer/OrganizerProfile";

const OrganizerDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("events");

  // Mock organizer data
  const organizer = {
    name: "Sarah Johnson",
    email: "sarah.johnson@eventify.com",
    initials: "SJ",
    company: "Event Masters LLC",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Experienced event organizer with over 5 years in the industry. Specialized in tech conferences and business workshops.",
    joinDate: "January 2023",
  };

  // Mock data - in a real app, this would come from your database
  const [events] = useState([
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      date: "2024-03-15",
      location: "San Francisco, CA",
      category: "Technology",
      price: 299,
      totalSlots: 200,
      registeredAttendees: 155,
      revenue: 46245,
      status: "active",
    },
    {
      id: 2,
      title: "Business Leadership Workshop",
      date: "2024-04-02",
      location: "New York, NY",
      category: "Business",
      price: 150,
      totalSlots: 50,
      registeredAttendees: 32,
      revenue: 4800,
      status: "active",
    },
  ]);

  const [attendees] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      event: "Tech Innovation Summit 2024",
      registrationDate: "2024-02-01",
      paymentStatus: "paid",
      amount: 299,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      event: "Tech Innovation Summit 2024",
      registrationDate: "2024-02-03",
      paymentStatus: "paid",
      amount: 299,
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike.chen@example.com",
      event: "Business Leadership Workshop",
      registrationDate: "2024-02-15",
      paymentStatus: "pending",
      amount: 150,
    },
  ]);

  const [changeHistory] = useState([
    {
      id: 1,
      action: "Event Created",
      item: "Tech Innovation Summit 2024",
      timestamp: "2024-01-15 10:30 AM",
      user: "Admin",
    },
    {
      id: 2,
      action: "Price Updated",
      item: "Tech Innovation Summit 2024",
      timestamp: "2024-01-20 2:15 PM",
      user: "Admin",
      details: "$249 → $299",
    },
    {
      id: 3,
      action: "Event Created",
      item: "Business Leadership Workshop",
      timestamp: "2024-02-01 9:00 AM",
      user: "Admin",
    },
  ]);

  const totalRevenue = events.reduce((sum, event) => sum + event.revenue, 0);
  const totalAttendees = events.reduce(
    (sum, event) => sum + event.registeredAttendees,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Organizer Dashboard
              </h1>
              <p className="text-gray-600">
                Manage your events and track performance
              </p>
            </div>
            <Button
              onClick={() => navigate("/create-event")}
              className="bg-green-500 hover:bg-green-600"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Button>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {location.state?.message && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="text-green-800">{location.state.message}</div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Total Events
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {events.length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Total Attendees
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {totalAttendees}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Total Revenue
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${totalRevenue.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Eye className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Avg. Fill Rate
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Math.round(
                      (totalAttendees /
                        events.reduce(
                          (sum, event) => sum + event.totalSlots,
                          0
                        )) *
                        100
                    )}
                    %
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="attendees">Attendees</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {event.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </div>
                            <Badge variant="secondary">{event.category}</Badge>
                          </div>
                          <div className="flex items-center gap-6 text-sm">
                            <span>
                              <strong>{event.registeredAttendees}</strong> /{" "}
                              {event.totalSlots} attendees
                            </span>
                            <span>
                              Revenue:{" "}
                              <strong>${event.revenue.toLocaleString()}</strong>
                            </span>
                            <Badge
                              variant={
                                event.status === "active"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {event.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Delete Event</DialogTitle>
                              </DialogHeader>
                              <p>
                                Are you sure you want to delete "{event.title}"?
                                This action cannot be undone.
                              </p>
                              <div className="flex justify-end gap-2 mt-4">
                                <Button variant="outline">Cancel</Button>
                                <Button variant="destructive">Delete</Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Attendees Tab */}
          <TabsContent value="attendees" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Attendee Management</CardTitle>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>Registration Date</TableHead>
                      <TableHead>Payment Status</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendees.map((attendee) => (
                      <TableRow key={attendee.id}>
                        <TableCell className="font-medium">
                          {attendee.name}
                        </TableCell>
                        <TableCell>{attendee.email}</TableCell>
                        <TableCell className="text-sm">
                          {attendee.event}
                        </TableCell>
                        <TableCell>{attendee.registrationDate}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              attendee.paymentStatus === "paid"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {attendee.paymentStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>${attendee.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Records</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-600">Total Revenue</p>
                      <p className="text-2xl font-bold text-green-600">
                        ${totalRevenue.toLocaleString()}
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-600">Pending Payments</p>
                      <p className="text-2xl font-bold text-yellow-600">
                        $
                        {attendees
                          .filter((a) => a.paymentStatus === "pending")
                          .reduce((sum, a) => sum + a.amount, 0)}
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-600">
                        Completed Payments
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        {
                          attendees.filter((a) => a.paymentStatus === "paid")
                            .length
                        }
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Attendee</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendees.map((attendee) => (
                      <TableRow key={attendee.id}>
                        <TableCell className="font-medium">
                          {attendee.name}
                        </TableCell>
                        <TableCell className="text-sm">
                          {attendee.event}
                        </TableCell>
                        <TableCell>${attendee.amount}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              attendee.paymentStatus === "paid"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {attendee.paymentStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>{attendee.registrationDate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="h-5 w-5" />
                  Change History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {changeHistory.map((change) => (
                    <div
                      key={change.id}
                      className="border-l-4 border-blue-500 pl-4 py-2"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-900">
                            {change.action}: {change.item}
                          </p>
                          {change.details && (
                            <p className="text-sm text-gray-600">
                              {change.details}
                            </p>
                          )}
                          <p className="text-xs text-gray-500 mt-1">
                            {change.timestamp} by {change.user}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <OrganizerProfile organizer={organizer} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
