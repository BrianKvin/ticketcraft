import React from "react";
import {
  Ticket,
  QrCode,
  Smartphone,
  Mail,
  Clock,
  MapPin,
  Star,
  Headphones,
  Users,
  Calendar,
  Shield,
} from "lucide-react";
import EventTypes from "./EventTypes";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/common/Card";

const AboutSection = () => {
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

  const features = [
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

  // const benefits = [
  //   {
  //     icon: Shield,
  //     title: "Secure & Reliable",
  //     description: "Bank-level security for all transactions and ticket data",
  //   },
  //   {
  //     icon: Mail,
  //     title: "Instant Delivery",
  //     description: "Tickets delivered instantly via email with QR codes",
  //   },
  //   {
  //     icon: Users,
  //     title: "Easy Management",
  //     description:
  //       "Simple dashboard for organizers to manage events and attendees",
  //   },
  // ];

  const chooseUs = [
    {
      icon: Clock,
      title: "Easy Planning",
      description: "Streamlined event creation and management tools",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security for all your events",
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "Professional features for memorable events",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance when you need it",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="py-20 bg-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Complete Event Platform
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-green-600">TicketCraft</span>{" "}
              is more than just a ticketing system. We're your all-in-one
              platform for creating events, selling tickets, and discovering
              amazing destinations. Our{" "}
              <span className="font-semibold">digital ticketing solution</span>{" "}
              is the heart of everything we do.
            </p>
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

          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-xl bg-gray-50 border border-gray-200 hover:border-gray-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gray-200 text-gray-600 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          {/* <div className="text-center mb-12">
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
          </div> */}

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
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Create Event
                </h4>
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
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Purchase & Receive
                </h4>
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
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Scan & Enter
                </h4>
                <p className="text-gray-600">
                  QR codes are scanned at the entrance or managed through our
                  mobile app
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          {/* <div className="text-center mb-16">
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
          </div> */}

          {/* Bottom Section: Informational Overview */}
          <Card className="bg-background">
            <CardHeader className="text-left pb-8">
              <CardTitle className="text-3xl font-bold">
                Why Choose Us for Your Next Event?
              </CardTitle>
              <p className="text-muted-foreground text-lg mt-2">
                Join thousands of event organizers who trust our platform to
                deliver exceptional experiences and seamless event management.
              </p>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {chooseUs.map((item, index) => (
                  <Card
                    key={index}
                    className="text-center border-muted/50 hover:border-primary/20 transition-colors"
                  >
                    <CardContent className="p-6 space-y-3">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <EventTypes />

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
                <button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Creating Events
                </button>
                <button className="bg-transparent hover:bg-white hover:text-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 border-white hover:border-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutSection;
