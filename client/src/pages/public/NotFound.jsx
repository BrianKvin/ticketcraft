import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-green-500 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-gray-600 mb-6">
              The page might have been moved, deleted, or you entered the wrong
              URL.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Go to Homepage
            </Link>
            <Link
              to="/browse-events"
              className="bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Browse Events
            </Link>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Popular Pages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/browse-events"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Browse Events
              </Link>
              <Link
                to="/browse-destinations"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Browse Destinations
              </Link>
              <Link
                to="/about"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
