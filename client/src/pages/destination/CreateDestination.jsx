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
} from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import DestinationForm from "../../components/forms/DestinationForm";
import Button from "../../components/common/Button";

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
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {!showForm ? (
        <>
          {/* Hero Background Section */}
          <section className="relative pt-20 pb-16 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-blue-900/90 to-teal-900/90 z-0"></div>
            <div className="absolute inset-0 bg-[url('../../../assets/images/tech-summit.jpg')] bg-cover bg-center opacity-20 z-0"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    Create Your Destination
                  </h1>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Showcase your venue, attract visitors, and manage bookings —
                    all in one powerful platform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Three Horizontal Cards */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Rectangular Feature Card */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Your destination, your story, your success.
                </h2>
                <p className="text-xl mb-4">
                  From discovery to booking, we've got you covered.
                </p>
                <p className="text-lg opacity-90">
                  Join thousands of venues already growing their business with
                  us.
                </p>
              </div>
            </div>
          </section>

          {/* Icons Row */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {iconFeatures.map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Image + Text Card */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <Camera className="w-24 h-24 mx-auto mb-4 opacity-80" />
                        <h3 className="text-2xl font-bold mb-2">
                          Showcase Your Venue
                        </h3>
                        <p className="opacity-90">
                          Beautiful galleries and virtual tours to attract
                          visitors
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12 flex items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        Everything You Need
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Our platform provides everything you need to showcase
                        your destination successfully. From high-quality image
                        galleries to detailed amenities, all the tools are at
                        your fingertips.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">
                            High-Quality Galleries
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">
                            Amenity Showcase
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">
                            Booking Management
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Text Card */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Ready to Showcase Your Destination?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join thousands of venues already growing their business with
                  us. Your visitors are waiting.
                </p>
                <Button
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Continue to Create Destination
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
