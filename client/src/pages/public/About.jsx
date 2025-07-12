import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About TicketCraft
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting event organizers, destination owners, and attendees in
              one seamless platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At TicketCraft, we believe that amazing experiences should be
                accessible to everyone. Our platform bridges the gap between
                event organizers, destination owners, and attendees, creating a
                seamless ecosystem where unforgettable moments come to life.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're hosting a music festival, managing a luxury
                resort, or looking for your next adventure, TicketCraft provides
                the tools and connections you need to succeed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We envision a world where creating and discovering exceptional
                experiences is effortless. By empowering organizers with
                powerful tools and connecting them with engaged audiences, we're
                building the future of event and destination management.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From intimate gatherings to large-scale festivals, from boutique
                hotels to luxury resorts, TicketCraft is your partner in
                creating moments that matter.
              </p>
            </div>
          </div>

          <div className="border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Choose TicketCraft?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Easy Management
                </h3>
                <p className="text-gray-600">
                  Intuitive tools for event organizers and destination owners to
                  manage bookings, track performance, and grow their business.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Seamless Integration
                </h3>
                <p className="text-gray-600">
                  Connect with your audience through our integrated platform
                  that handles everything from discovery to booking to
                  post-event engagement.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Growth Focused
                </h3>
                <p className="text-gray-600">
                  Advanced analytics and insights help you understand your
                  audience, optimize your offerings, and maximize your revenue
                  potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
