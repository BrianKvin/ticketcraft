import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, Share2, Star, Calendar, MapPin, ArrowLeft } from "lucide-react";
import Button from "../../components/common/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/common/Card";
import EventCard, {
  RelatedEventCard,
} from "../../components/browse-events/EventCard";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

// Sample event data - in a real app, this would come from an API
const sampleEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    date: "Monday - December 16, 2024",
    time: "08:00 - 10:00",
    timezone: "GMT +7:00",
    location: "Convention Center, Jakarta",
    description:
      "Join us for the biggest tech conference of the year featuring industry leaders, innovative workshops, and networking opportunities. This event will showcase the latest trends in technology, artificial intelligence, and digital transformation. Attendees will have the chance to participate in hands-on workshops, attend keynote presentations from renowned speakers, and connect with like-minded professionals from around the world.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    price: "$299",
    minAge: "18+ years required",
    category: "Technology",
    organizer: "Tech Events Inc.",
  },
  {
    id: 2,
    title: "Digital Marketing Summit",
    date: "Friday - December 20, 2024",
    time: "09:00 - 17:00",
    timezone: "GMT +7:00",
    location: "Grand Hotel, Bali",
    description:
      "Learn the latest digital marketing strategies from industry experts.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
    price: "$199",
    minAge: "16+ years required",
    category: "Marketing",
    organizer: "Marketing Pro",
  },
  {
    id: 3,
    title: "Startup Pitch Day",
    date: "Wednesday - December 25, 2024",
    time: "10:00 - 16:00",
    timezone: "GMT +7:00",
    location: "Innovation Hub, Surabaya",
    description: "Watch innovative startups pitch their ideas to investors.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    price: "Free",
    minAge: "All ages welcome",
    category: "Business",
    organizer: "Startup Alliance",
  },
];

const relatedEvents = [
  {
    id: 4,
    title: "AI Workshop",
    date: "Jan 15, 2025",
    location: "Tech Hub",
    description: "Hands-on AI workshop for beginners",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
    price: "$150",
  },
  {
    id: 5,
    title: "UX Design Bootcamp",
    date: "Jan 22, 2025",
    location: "Design Studio",
    description: "Learn modern UX design principles",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80",
    price: "$250",
  },
  {
    id: 6,
    title: "Cloud Computing Summit",
    date: "Feb 5, 2025",
    location: "Convention Center",
    description: "Explore the future of cloud technology",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
    price: "$199",
  },
];

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the event by ID - in a real app, this would be fetched from an API
  const event =
    sampleEvents.find((e) => e.id === parseInt(id || "1")) || sampleEvents[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Section 1: Header Background */}
      <div className="w-full mt-20">
        <div className="mx-auto max-w-[1500px] relative h-64 overflow-hidden flex items-center justify-center">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 left-4 text-white hover:bg-white/20"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </div>
      </div>

      {/* Section 2: Event Details (Main Content) */}
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Event Name and About the Event */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Event Name & Interactive Row */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow hover:bg-gray-100 transition">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="font-medium text-gray-700">
                    Add to Favorite
                  </span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow hover:bg-gray-100 transition">
                  <Share2 className="w-5 h-5 text-blue-500" />
                  <span className="font-medium text-gray-700">Share Event</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow hover:bg-gray-100 transition">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium text-gray-700">Rate Event</span>
                </button>
              </div>
              {/* When & Where Cards */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* When Card */}
                <div className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col justify-center min-h-[90px]">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-800">
                      {event.date}
                    </span>
                  </div>
                  <div className="text-gray-600 text-sm ml-7">
                    <div>{event.time || "08:00 - 10:00"}</div>
                    <div>GMT +7:00</div>
                  </div>
                </div>
                {/* Where Card */}
                <div className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col justify-center min-h-[90px]">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-800">Where</span>
                  </div>
                  <div className="text-gray-600 text-sm ml-7">
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
            {/* About the Event Card */}
            <div className="bg-white rounded-xl shadow p-6 min-h-[220px]">
              <h2 className="text-lg font-semibold mb-4">About the Event</h2>
              <p className="text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
          {/* Right Column: Ticket Price and Map */}
          <div className="flex flex-col gap-8">
            {/* Ticket Price Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Ticket Price</h3>
                <div className="text-3xl font-bold text-primary mb-4">
                  {event.price}
                </div>
                <Button className="w-full mb-3">Buy Ticket</Button>
                <p className="text-sm text-muted-foreground">{event.minAge}</p>
              </CardContent>
            </Card>
            {/* Map Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Location</h3>
                <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Interactive map would be here</p>
                    <p className="text-xs">{event.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Section 3: More Events */}
      <div className="mx-auto max-w-[1500px] px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">More Events Like These</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedEvents.map((relatedEvent) => (
            <RelatedEventCard key={relatedEvent.id} event={relatedEvent} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetails;
