import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Star,
  Share2,
  Heart,
  DollarSign,
  Globe,
  Phone,
  Mail,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

const EventDetail = () => {
  const { id } = useParams();
  const [isRegistered, setIsRegistered] = useState(false);
  const [ticketQuantity, setTicketQuantity] = useState(1);

  // Mock event data - in real app this would come from API
  const event = {
    id: "1",
    title: "Tech Innovation Summit 2025",
    description:
      "Join us for the most comprehensive technology conference of the year. Discover cutting-edge innovations, network with industry leaders, and gain insights that will shape the future of technology.",
    fullDescription:
      "The Tech Innovation Summit 2025 brings together the brightest minds in technology for three days of learning, networking, and innovation. Our carefully curated program features keynote speakers from leading tech companies, hands-on workshops, and interactive sessions covering AI, blockchain, IoT, cybersecurity, and emerging technologies. Whether you're a developer, entrepreneur, or tech enthusiast, this summit will provide you with the knowledge and connections to accelerate your career and projects.",
    date: "March 15-16, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Moscone Convention Center, San Francisco, CA",
    attendees: 1250,
    maxCapacity: 1500,
    price: 299,
    category: "Technology",
    image: "/placeholder.svg",
    organizer: {
      name: "TechEvents Inc.",
      avatar: "/placeholder.svg",
      description:
        "Leading technology event organizer with 10+ years of experience",
      website: "www.techevents.com",
      phone: "+1 555-0123",
      email: "contact@techevents.com",
    },
    speakers: [
      {
        name: "Sarah Chen",
        title: "AI Research Director",
        company: "Google",
        avatar: "/placeholder.svg",
      },
      {
        name: "Mike Rodriguez",
        title: "CTO",
        company: "Tesla",
        avatar: "/placeholder.svg",
      },
      {
        name: "Lisa Wang",
        title: "Blockchain Expert",
        company: "Ethereum Foundation",
        avatar: "/placeholder.svg",
      },
    ],
    agenda: [
      { time: "9:00 AM", title: "Registration & Welcome Coffee", speaker: "" },
      {
        time: "10:00 AM",
        title: "Keynote: The Future of AI",
        speaker: "Sarah Chen",
      },
      {
        time: "11:30 AM",
        title: "Panel: Sustainable Technology",
        speaker: "Multiple Speakers",
      },
      { time: "1:00 PM", title: "Lunch & Networking", speaker: "" },
      {
        time: "2:30 PM",
        title: "Workshop: Blockchain Development",
        speaker: "Lisa Wang",
      },
      {
        time: "4:00 PM",
        title: "The Future of Electric Vehicles",
        speaker: "Mike Rodriguez",
      },
      { time: "5:30 PM", title: "Closing Remarks & Networking", speaker: "" },
    ],
    includes: [
      "Access to all sessions and workshops",
      "Breakfast, lunch, and coffee breaks",
      "Event materials and swag bag",
      "Networking opportunities",
      "Certificate of attendance",
      "Access to recorded sessions (30 days)",
    ],
  };

  const similarEvents = [
    {
      id: "2",
      title: "AI & Machine Learning Conference",
      date: "April 12-13, 2025",
      location: "Seattle, WA",
      attendees: 950,
      price: 399,
      image: "/placeholder.svg",
      category: "Technology",
    },
    {
      id: "3",
      title: "Digital Transformation Summit",
      date: "May 20-21, 2025",
      location: "Austin, TX",
      attendees: 650,
      price: 249,
      image: "/placeholder.svg",
      category: "Technology",
    },
  ];

  const handleRegister = () => {
    setIsRegistered(true);
    // In real app, this would process payment and registration
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="mb-3 bg-gradient-to-r from-purple-500 to-pink-500">
                  {event.category}
                </Badge>
                <h1 className="text-4xl font-bold text-white mb-2">
                  {event.title}
                </h1>
                <p className="text-white/90 text-lg">{event.description}</p>
              </div>
            </div>

            {/* Event Details Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="bg-white/10 backdrop-blur-md border border-white/20">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="agenda"
                  className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
                >
                  Agenda
                </TabsTrigger>
                <TabsTrigger
                  value="speakers"
                  className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
                >
                  Speakers
                </TabsTrigger>
                <TabsTrigger
                  value="organizer"
                  className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
                >
                  Organizer
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">
                      About This Event
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-white/80 leading-relaxed">
                      {event.fullDescription}
                    </p>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        What's Included
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {event.includes.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle
                              size={20}
                              className="text-green-400 flex-shrink-0"
                            />
                            <span className="text-white/80">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="agenda">
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Event Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {event.agenda.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 p-4 rounded-lg bg-white/5"
                        >
                          <div className="w-20 flex-shrink-0">
                            <Badge
                              variant="outline"
                              className="bg-white/10 text-white border-white/20"
                            >
                              {item.time}
                            </Badge>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white">
                              {item.title}
                            </h4>
                            {item.speaker && (
                              <p className="text-white/60 text-sm mt-1">
                                by {item.speaker}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="speakers">
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Featured Speakers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {event.speakers.map((speaker, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4 p-4 rounded-lg bg-white/5"
                        >
                          <Avatar className="w-16 h-16">
                            <AvatarImage
                              src={speaker.avatar}
                              alt={speaker.name}
                            />
                            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                              {speaker.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-white">
                              {speaker.name}
                            </h4>
                            <p className="text-white/70 text-sm">
                              {speaker.title}
                            </p>
                            <p className="text-white/50 text-sm">
                              {speaker.company}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="organizer">
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Event Organizer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage
                          src={event.organizer.avatar}
                          alt={event.organizer.name}
                        />
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white text-xl">
                          {event.organizer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {event.organizer.name}
                        </h3>
                        <p className="text-white/70 mb-4">
                          {event.organizer.description}
                        </p>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-white/60">
                            <Globe size={16} />
                            <span>{event.organizer.website}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-white/60">
                            <Phone size={16} />
                            <span>{event.organizer.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-white/60">
                            <Mail size={16} />
                            <span>{event.organizer.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Registration Card */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 sticky top-24">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign size={20} className="text-green-400" />
                    <span className="text-2xl font-bold text-white">
                      ${event.price}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20 p-2"
                    >
                      <Heart size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20 p-2"
                    >
                      <Share2 size={16} />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-white/80">
                    <Calendar size={18} className="text-purple-300" />
                    <div>
                      <div className="font-medium">{event.date}</div>
                      <div className="text-sm text-white/60">{event.time}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-white/80">
                    <MapPin size={18} className="text-purple-300" />
                    <div className="text-sm">{event.location}</div>
                  </div>

                  <div className="flex items-center space-x-3 text-white/80">
                    <Users size={18} className="text-purple-300" />
                    <div className="text-sm">
                      {event.attendees} / {event.maxCapacity} registered
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70">Availability</span>
                    <span className="text-green-400 font-medium">
                      {event.maxCapacity - event.attendees} spots left
                    </span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                      style={{
                        width: `${
                          (event.attendees / event.maxCapacity) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>

                {!isRegistered ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Tickets:</span>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white hover:bg-white/20 w-8 h-8 p-0"
                          onClick={() =>
                            setTicketQuantity(Math.max(1, ticketQuantity - 1))
                          }
                        >
                          -
                        </Button>
                        <span className="text-white w-8 text-center">
                          {ticketQuantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white hover:bg-white/20 w-8 h-8 p-0"
                          onClick={() => setTicketQuantity(ticketQuantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-lg font-semibold text-white">
                      <span>Total:</span>
                      <span>${event.price * ticketQuantity}</span>
                    </div>

                    <Button
                      onClick={handleRegister}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3"
                    >
                      Register Now
                    </Button>
                  </div>
                ) : (
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-green-400">
                      <CheckCircle size={24} />
                      <span className="font-semibold">You're Registered!</span>
                    </div>
                    <p className="text-white/70 text-sm">
                      Check your email for confirmation details
                    </p>
                    <Button
                      variant="outline"
                      className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20"
                    >
                      View Ticket
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Event Stats */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Star size={20} className="mr-2 text-yellow-400" />
                  Event Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-white/70">Rating</span>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="text-white ml-2">4.8</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Reviews</span>
                  <span className="text-white">128 reviews</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Organizer Rating</span>
                  <span className="text-white">4.9/5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar Events */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Similar Events You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {similarEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
