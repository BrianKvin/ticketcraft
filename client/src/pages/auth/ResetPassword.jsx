import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password data:", formData);
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
                <span className="text-2xl text-green-600">✓</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Password Reset Successfully
              </h1>
              <p className="text-gray-600">
                Your password has been updated. You can now sign in with your
                new password.
              </p>
            </div>

            <Link
              to="/auth/login"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 inline-block"
            >
              Sign In
            </Link>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Reset Password
            </h1>
            <p className="text-gray-600">Enter your new password below</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                placeholder="Enter your new password"
              />
              <p className="text-xs text-gray-500 mt-1">
                Password must be at least 8 characters long
              </p>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                placeholder="Confirm your new password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105"
            >
              Reset Password
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Remember your password?{" "}
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

export default ResetPassword;
