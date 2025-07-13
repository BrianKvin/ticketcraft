import React from "react";
import {
  Ticket,
  QrCode,
  Smartphone,
  Mail,
  MapPin,
  Users,
  Calendar,
  Shield,
} from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Ticket,
      title: "Digital Ticketing System",
      description:
        "Create and sell tickets for your events with our comprehensive digital ticketing platform. Secure, instant, and hassle-free.",
      highlight: true,
    },
    {
      icon: QrCode,
      title: "QR Code Scanning",
      description:
        "Scan QR codes from tickets sent via email at event entrances. Fast, secure, and contactless entry verification.",
      highlight: true,
    },
    {
      icon: Smartphone,
      title: "Mobile App Integration",
      description:
        "Event organizers can leverage our mobile app to manage tickets, check-ins, and event logistics on the go.",
      highlight: true,
    },
    {
      icon: MapPin,
      title: "Destination Discovery",
      description:
        "Explore amazing venues and destinations hosting incredible events around the world.",
    },
    {
      icon: Users,
      title: "Event Creation",
      description:
        "Create and manage events of any type - from concerts to conferences, workshops to weddings.",
    },
    {
      icon: Calendar,
      title: "Smart Recommendations",
      description:
        "Get personalized event and destination recommendations based on your interests and preferences.",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-level security for all transactions and ticket data",
    },
    {
      icon: Mail,
      title: "Instant Delivery",
      description: "Tickets delivered instantly via email with QR codes",
    },
    {
      icon: Users,
      title: "Easy Management",
      description: "Simple dashboard for organizers to manage events and attendees",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Complete Event Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-green-600">TicketCraft</span> is
            more than just a ticketing system. We're your all-in-one platform
            for creating events, selling tickets, and discovering amazing
            destinations. Our{" "}
            <span className="font-semibold">digital ticketing solution</span> is
            the heart of everything we do.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl transition-all duration-300 hover:shadow-xl ${
                feature.highlight
                  ? "bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 hover:border-green-300"
                  : "bg-gray-50 border border-gray-200 hover:border-gray-300"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  feature.highlight
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
                } group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon size={24} />
              </div>
              
              <h3
                className={`text-xl font-bold mb-3 ${
                  feature.highlight ? "text-green-700" : "text-gray-900"
                }`}
              >
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              {feature.highlight && (
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Core Feature
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* How It Works Section - No Background */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Ticketing System Works
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From event creation to entry verification - seamless and secure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-green-200 transition-colors duration-300">
                  <span className="text-3xl font-bold text-green-600">1</span>
                </div>
                {/* Connecting line */}
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-green-200 transform translate-x-4"></div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Create Event</h4>
              <p className="text-gray-600">
                Event organizers create events and set up ticket sales through
                our platform
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-green-200 transition-colors duration-300">
                  <span className="text-3xl font-bold text-green-600">2</span>
                </div>
                {/* Connecting line */}
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-green-200 transform translate-x-4"></div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Purchase & Receive</h4>
              <p className="text-gray-600">
                Attendees purchase tickets and receive QR codes instantly via
                email
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-green-200 transition-colors duration-300">
                  <span className="text-3xl font-bold text-green-600">3</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Scan & Enter</h4>
              <p className="text-gray-600">
                QR codes are scanned at the entrance or managed through our
                mobile app
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Why Choose Our Platform?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <benefit.icon size={28} className="text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're an event organizer looking to sell tickets or an
              attendee wanting to discover amazing events, our platform has
              everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Create Your First Event
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 border-green-500 hover:border-green-600">
                Browse Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
