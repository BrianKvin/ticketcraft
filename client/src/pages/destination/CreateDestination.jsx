import React, { useState, useRef } from "react";
import {
  MapPin,
  BarChart3,
  Users,
  Star,
  Bell,
  CreditCard,
  ChevronDown,
  Settings,
  Globe,
  Calendar,
  Camera,
  Wifi,
  Building2,
  Image as ImageIcon,
  Map,
  TrendingUp,
} from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import DestinationForm from "../../components/forms/DestinationForm";
import Button from "../../components/common/Button";
import destinationImage from "../../assets/images/tour.jpg";

const CreateDestination = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    category: "",
    capacity: "",
    amenities: [],
    images: [],
    pricing: {
      basePrice: "",
      currency: "USD",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Destination data:", formData);
    // Handle destination creation logic here
  };

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const features = [
    {
      icon: Settings,
      title: "Customize Freely",
      description: "Full control over your destination settings and branding",
    },
    {
      icon: MapPin,
      title: "Location Power",
      description: "Showcase your venue with detailed location information",
    },
    {
      icon: Users,
      title: "Guest Ready",
      description:
        "Attract visitors with compelling descriptions and amenities",
    },
  ];

  const iconFeatures = [
    {
      icon: Star,
      title: "Guest Reviews",
      description: "Build trust with authentic visitor feedback",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track visitor engagement and performance metrics",
    },
    {
      icon: Bell,
      title: "Instant Updates",
      description: "Keep visitors informed with real-time notifications",
    },
    {
      icon: CreditCard,
      title: "Flexible Pricing",
      description: "Multiple pricing tiers and booking options",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {!showForm ? (
        <>
          {/* Hero Section with Split Layout */}
          <section className="pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Side - Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      Transform Your Venue Into a
                      <span className="text-primary block">Destination</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                      Showcase your venue's unique character, attract the right
                      visitors, and turn every booking into an unforgettable
                      experience.
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        Venue Showcase
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        Revenue Growth
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Map className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        Location Power
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        Guest Management
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={scrollToForm}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Start Creating Your Destination
                    <ChevronDown className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                {/* Right Side - Image */}
                <div className="relative w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full">
                    <img
                      src={destinationImage}
                      alt="Beautiful venue destination"
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        Your Venue's Story
                      </h3>
                      <p className="opacity-90">
                        Every destination has a unique story waiting to be told
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Destination Features Grid */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Everything Your Destination Needs
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  From stunning visuals to seamless booking, we provide all the
                  tools to make your venue stand out.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <ImageIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Visual Storytelling
                  </h3>
                  <p className="text-muted-foreground">
                    Create stunning galleries and virtual tours that showcase
                    your venue's unique character and atmosphere.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Location Intelligence
                  </h3>
                  <p className="text-muted-foreground">
                    Highlight your venue's location advantages and nearby
                    attractions to attract the right visitors.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Performance Insights
                  </h3>
                  <p className="text-muted-foreground">
                    Track visitor engagement, booking patterns, and revenue
                    growth with detailed analytics.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Flexible Pricing
                  </h3>
                  <p className="text-muted-foreground">
                    Set up multiple pricing tiers, seasonal rates, and special
                    packages to maximize revenue.
                  </p>
                </div>

                {/* Feature 5 */}
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Bell className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Smart Notifications
                  </h3>
                  <p className="text-muted-foreground">
                    Keep guests informed with automated updates, reminders, and
                    personalized communications.
                  </p>
                </div>

                {/* Feature 6 */}
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Guest Reviews
                  </h3>
                  <p className="text-muted-foreground">
                    Build trust and credibility with authentic guest reviews and
                    ratings on your destination page.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Ready to Showcase Your Destination?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of venues already growing their business with
                  our platform. Your visitors are waiting to discover your
                  unique destination.
                </p>
                <Button
                  onClick={scrollToForm}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Create Your Destination Now
                  <ChevronDown className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div ref={formRef}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Create New Destination
                </h1>
                <p className="text-gray-600">
                  Fill in the details below to create your destination
                </p>
              </div>

              <DestinationForm
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleSubmit}
                submitButtonText="Create Destination"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CreateDestination;
