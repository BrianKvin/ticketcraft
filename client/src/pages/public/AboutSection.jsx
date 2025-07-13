import React from "react";
import { Link } from "react-router-dom";
import {
  Ticket,
  QrCode,
  Smartphone,
  Shield,
  ArrowRight,
  Users,
  Calendar,
  TrendingUp,
} from "lucide-react";

const PlatformHighlights = () => {
  const keyFeatures = [
    {
      icon: Ticket,
      title: "Digital Ticketing",
      description: "Secure, instant ticket creation and sales",
      stat: "10M+",
      statLabel: "Tickets Sold",
    },
    {
      icon: QrCode,
      title: "QR Code Scanning",
      description: "Fast, contactless entry verification",
      stat: "99.9%",
      statLabel: "Success Rate",
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      description: "Manage events and check-ins on the go",
      stat: "50K+",
      statLabel: "Active Users",
    },
  ];

  const stats = [
    { number: "1M+", label: "Events Created" },
    { number: "500+", label: "Destinations" },
    { number: "24/7", label: "Support" },
    { number: "98%", label: "Satisfaction" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose TicketCraft?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of event organizers and attendees who trust our
            platform for seamless event experiences.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
            >
              <div className="w-16 h-16 rounded-xl bg-green-500 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-green-600">
                  {feature.stat}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {feature.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Bank-Level Security
              </h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your data and transactions are protected with enterprise-grade
              security. We process millions of tickets safely every year.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Events?
            </h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful event organizers who trust
              TicketCraft for their ticketing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/events"
                className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Start Creating Events
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/about"
                className="bg-transparent hover:bg-white hover:text-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 border-white hover:border-white inline-flex items-center justify-center"
              >
                Learn More
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformHighlights;
