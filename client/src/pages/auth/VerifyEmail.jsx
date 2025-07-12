import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Verify email:", email);
    setIsSubmitted(true);
    // UI only - no auth logic
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-600">📧</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Check Your Email
              </h1>
              <p className="text-gray-600">
                We've sent a verification link to <strong>{email}</strong>
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                Click the link in your email to verify your account and complete
                registration.
              </p>

              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
              >
                Resend Email
              </button>

              <Link
                to="/auth/login"
                className="block text-green-600 hover:text-green-700 font-medium"
              >
                Back to Login
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-green-600">📧</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Verify Your Email
            </h1>
            <p className="text-gray-600">
              Enter your email address to receive a verification link
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                placeholder="Enter your email address"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105"
            >
              Send Verification Email
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already verified?{" "}
              <Link
                to="/auth/login"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VerifyEmail;
