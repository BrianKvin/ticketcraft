import React from "react";
import { Link } from "react-router-dom";
import { Ticket, QrCode, Smartphone, Shield, ArrowRight } from "lucide-react";

const AboutSection = () => {
  const keyFeatures = [
    {
      icon: Ticket,
      title: "Digital Ticketing System",
      description:
        "Create and sell tickets with our comprehensive digital platform.",
    },
    {
      icon: QrCode,
      title: "QR Code Scanning",
      description: "Fast, secure, and contactless entry verification.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Integration",
      description: "Manage tickets and check-ins on the go.",
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            <span className="font-semibold text-green-600">TicketCraft</span> is
            more than just a ticketing system. We're your all-in-one platform
            for creating events, selling tickets, and discovering amazing
            destinations.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're hosting a music festival, managing a luxury resort,
            or looking for your next adventure, TicketCraft provides the tools
            and connections you need to succeed.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-green-700 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
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
              <Link
                to="/events"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Create Your First Event
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/about"
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 border-green-500 hover:border-green-600 inline-flex items-center justify-center"
              >
                Learn More About Us
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
