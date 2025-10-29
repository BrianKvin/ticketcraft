import React, { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    // Handle newsletter subscription logic here
    setEmail("");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Up To Date
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Get the latest updates on new events, exclusive deals, and
                platform features. Join thousands of event organizers who trust
                our insights.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </div>
                <p className="text-sm text-gray-400">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </form>
            </div>

            {/* Right side - Images */}
            <div className="relative">
              <div className="relative z-10">
                {/* Laptop mockup */}
                <div className="bg-gray-800 rounded-2xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Dashboard preview"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>

                {/* Phone mockup */}
                <div className="absolute -bottom-6 -right-4 bg-gray-900 rounded-2xl p-2 shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white rounded-lg w-24 h-44 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Mobile ticket view"
                      className="w-20 h-40 object-cover rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-3xl blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
