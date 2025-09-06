import React, { useState } from "react";
import { Search, Calendar, MapPin, Users, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const EventBooking = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample events data with registration fields
  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      date: "March 15, 2024",
      location: "San Francisco, CA",
      description:
        "Join industry leaders discussing the future of technology and innovation.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 299,
      category: "Technology",
      availableSlots: 45,
      totalSlots: 200,
      organizer: "Tech Innovation Corp",
      registrationFields: [
        {
          id: "firstName",
          name: "firstName",
          type: "text",
          label: "First Name",
          required: true,
          placeholder: "Enter your first name",
        },
        {
          id: "lastName",
          name: "lastName",
          type: "text",
          label: "Last Name",
          required: true,
          placeholder: "Enter your last name",
        },
        {
          id: "email",
          name: "email",
          type: "email",
          label: "Email Address",
          required: true,
          placeholder: "your.email@example.com",
        },
        {
          id: "phone",
          name: "phone",
          type: "phone",
          label: "Phone Number",
          required: true,
          placeholder: "+1 (555) 123-4567",
        },
        {
          id: "company",
          name: "company",
          type: "text",
          label: "Company",
          required: false,
          placeholder: "Your company name",
        },
        {
          id: "jobTitle",
          name: "jobTitle",
          type: "text",
          label: "Job Title",
          required: false,
          placeholder: "Your job title",
        },
        {
          id: "experience",
          name: "experience",
          type: "select",
          label: "Years of Experience",
          required: true,
          options: ["0-2 years", "3-5 years", "6-10 years", "10+ years"],
        },
        {
          id: "dietaryRestrictions",
          name: "dietaryRestrictions",
          type: "textarea",
          label: "Dietary Restrictions",
          required: false,
          placeholder: "Please specify any dietary restrictions...",
        },
      ],
    },
    {
      id: 2,
      title: "Community Art Workshop",
      date: "March 20, 2024",
      location: "Downtown Art Center",
      description:
        "Free community workshop for aspiring artists of all levels.",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 0,
      category: "Arts",
      availableSlots: 12,
      totalSlots: 25,
      organizer: "Community Arts Foundation",
      registrationFields: [
        {
          id: "fullName",
          name: "fullName",
          type: "text",
          label: "Full Name",
          required: true,
          placeholder: "Enter your full name",
        },
        {
          id: "email",
          name: "email",
          type: "email",
          label: "Email Address",
          required: true,
          placeholder: "your.email@example.com",
        },
        {
          id: "age",
          name: "age",
          type: "select",
          label: "Age Group",
          required: true,
          options: ["Under 18", "18-25", "26-35", "36-50", "51+"],
        },
        {
          id: "experience",
          name: "experience",
          type: "select",
          label: "Art Experience",
          required: true,
          options: ["Beginner", "Intermediate", "Advanced"],
        },
        {
          id: "interests",
          name: "interests",
          type: "textarea",
          label: "What interests you most about this workshop?",
          required: false,
          placeholder: "Tell us about your interests...",
        },
      ],
    },
    {
      id: 3,
      title: "Business Networking Gala",
      date: "April 2, 2024",
      location: "Grand Hotel Ballroom",
      description:
        "Premium networking event for business professionals and entrepreneurs.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 150,
      category: "Business",
      availableSlots: 28,
      totalSlots: 100,
      organizer: "Business Leaders Network",
      registrationFields: [
        {
          id: "firstName",
          name: "firstName",
          type: "text",
          label: "First Name",
          required: true,
          placeholder: "Enter your first name",
        },
        {
          id: "lastName",
          name: "lastName",
          type: "text",
          label: "Last Name",
          required: true,
          placeholder: "Enter your last name",
        },
        {
          id: "email",
          name: "email",
          type: "email",
          label: "Email Address",
          required: true,
          placeholder: "your.email@example.com",
        },
        {
          id: "phone",
          name: "phone",
          type: "phone",
          label: "Phone Number",
          required: true,
          placeholder: "+1 (555) 123-4567",
        },
        {
          id: "company",
          name: "company",
          type: "text",
          label: "Company Name",
          required: true,
          placeholder: "Your company name",
        },
        {
          id: "industry",
          name: "industry",
          type: "select",
          label: "Industry",
          required: true,
          options: [
            "Technology",
            "Finance",
            "Healthcare",
            "Education",
            "Manufacturing",
            "Other",
          ],
        },
        {
          id: "attendeeType",
          name: "attendeeType",
          type: "select",
          label: "I am attending as",
          required: true,
          options: [
            "Business Owner",
            "Executive",
            "Manager",
            "Entrepreneur",
            "Investor",
            "Other",
          ],
        },
        {
          id: "dietaryPreferences",
          name: "dietaryPreferences",
          type: "select",
          label: "Dietary Preferences",
          required: false,
          options: [
            "No restrictions",
            "Vegetarian",
            "Vegan",
            "Gluten-free",
            "Other",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Yoga & Wellness Retreat",
      date: "April 15-17, 2024",
      location: "Mountain View Resort",
      description:
        "A rejuvenating weekend retreat focused on yoga, meditation, and wellness.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 450,
      category: "Wellness",
      availableSlots: 8,
      totalSlots: 20,
      organizer: "Zen Wellness Studio",
      registrationFields: [
        {
          id: "fullName",
          name: "fullName",
          type: "text",
          label: "Full Name",
          required: true,
          placeholder: "Enter your full name",
        },
        {
          id: "email",
          name: "email",
          type: "email",
          label: "Email Address",
          required: true,
          placeholder: "your.email@example.com",
        },
        {
          id: "phone",
          name: "phone",
          type: "phone",
          label: "Phone Number",
          required: true,
          placeholder: "+1 (555) 123-4567",
        },
        {
          id: "emergencyContact",
          name: "emergencyContact",
          type: "text",
          label: "Emergency Contact",
          required: true,
          placeholder: "Name and phone number",
        },
        {
          id: "yogaExperience",
          name: "yogaExperience",
          type: "select",
          label: "Yoga Experience Level",
          required: true,
          options: [
            "Complete Beginner",
            "Some Experience",
            "Intermediate",
            "Advanced",
          ],
        },
        {
          id: "healthConditions",
          name: "healthConditions",
          type: "textarea",
          label: "Health Conditions or Injuries",
          required: false,
          placeholder:
            "Please list any health conditions or injuries we should be aware of...",
        },
        {
          id: "roomingPreference",
          name: "roomingPreference",
          type: "select",
          label: "Rooming Preference",
          required: true,
          options: [
            "Single Room (+$100)",
            "Shared Room",
            "I have a roommate preference",
          ],
        },
        {
          id: "dietaryRestrictions",
          name: "dietaryRestrictions",
          type: "textarea",
          label: "Dietary Restrictions",
          required: false,
          placeholder:
            "Please specify any dietary restrictions or allergies...",
        },
      ],
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(events.map((event) => event.category))),
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openRegistrationForm = (event) => {
    navigate(`/events/${event.id}/register`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Event Booking
          </h1>
          <p className="text-gray-600">
            Discover and register for amazing events
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => openRegistrationForm(event)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {event.price === 0 ? (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Free
                    </span>
                  ) : (
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ${event.price}
                    </span>
                  )}
                  <span className="bg-gray-900/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <Tag className="inline h-3 w-3 mr-1" />
                    {event.category}
                  </span>
                </div>
                {event.availableSlots && event.totalSlots && (
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                    <Users className="inline h-3 w-3 mr-1" />
                    {event.availableSlots} spots left
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {event.title}
                </h3>

                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                <Button className="w-full bg-green-500 hover:bg-green-600">
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No events found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventBooking;
