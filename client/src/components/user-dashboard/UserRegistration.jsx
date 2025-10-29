import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Building,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Clock,
  Tag,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const UserRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  // Get event data from navigation state or use default
  const eventData = location.state?.event || {
    id: 1,
    title: "Tech Innovation Summit 2024",
    date: "March 15-17, 2024",
    location: "San Francisco Convention Center",
    price: 299,
    isFree: false,
    totalSlots: 200,
    availableSlots: 45,
    category: "Technology",
    image: "/api/placeholder/400/300",
    description:
      "Join us for the biggest tech conference of the year featuring industry leaders and cutting-edge innovations. Experience keynotes, workshops, and networking opportunities.",
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    location: "",
    dietaryRestrictions: "",
    specialRequirements: "",
    agreeToTerms: false,
    agreeToMarketing: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const registration = {
      id: Date.now(),
      eventId: eventData.id,
      eventTitle: eventData.title,
      user: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        jobTitle: formData.jobTitle,
        location: formData.location,
        dietaryRestrictions: formData.dietaryRestrictions,
        specialRequirements: formData.specialRequirements,
        initials:
          `${formData.firstName[0]}${formData.lastName[0]}`.toUpperCase(),
      },
      registrationDate: new Date().toISOString(),
      ticketId: `TKT-${eventData.id}-${Date.now()}`,
      price: eventData.isFree ? 0 : eventData.price,
      status: eventData.isFree ? "confirmed" : "pending_payment",
    };

    console.log("User registration:", registration);

    if (eventData.isFree) {
      navigate("/user/dashboard", {
        state: {
          message: "Registration successful! Welcome to the event.",
          registration: registration,
          eventData: eventData,
        },
      });
    } else {
      navigate("/user/payment", {
        state: {
          registration: registration,
          eventData: eventData,
        },
      });
    }
  };

  const Button = ({ children, onClick, type = "button", className = "" }) => (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium transition-colors ${className}`}
    >
      {children}
    </button>
  );

  const Input = ({ className = "", ...props }) => (
    <input
      {...props}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${className}`}
    />
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Event Registration
            </h1>
            <p className="text-gray-600">
              Complete your registration for {eventData.title}
            </p>
          </div>
        </div>

        {/* Mobile Event Summary */}
        <div className="lg:hidden bg-white border-b">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">
                  {eventData.title}
                </h3>
                <p className="text-sm text-gray-600 flex items-center mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  {eventData.date}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">
                  {eventData.isFree ? "Free" : `$${eventData.price}`}
                </p>
                <p className="text-sm text-gray-600">
                  {eventData.availableSlots} spots left
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Enhanced Event Details Card */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-8">
                {/* Event Image */}
                <div className="relative">
                  <img
                    src={eventData.image}
                    alt={eventData.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <Tag className="h-3 w-3 mr-1" />
                      {eventData.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <DollarSign className="h-3 w-3 mr-1" />
                      {eventData.isFree ? "Free" : `$${eventData.price}`}
                    </span>
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {eventData.title}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-3 text-gray-400" />
                      <span className="text-sm">{eventData.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-3 text-gray-400" />
                      <span className="text-sm">{eventData.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-3 text-gray-400" />
                      <span className="text-sm">
                        {eventData.availableSlots} of {eventData.totalSlots}{" "}
                        spots available
                      </span>
                    </div>
                  </div>

                  {/* Expandable Description */}
                  <div className="mt-4">
                    <button
                      onClick={() => setIsCardExpanded(!isCardExpanded)}
                      className="flex items-center text-sm text-green-600 hover:text-green-700 font-medium"
                    >
                      {isCardExpanded ? (
                        <>
                          <ChevronUp className="h-4 w-4 mr-1" />
                          Show less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4 mr-1" />
                          Show more
                        </>
                      )}
                    </button>
                    {isCardExpanded && (
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {eventData.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Registration Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <User className="h-5 w-5 mr-2 text-green-600" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-green-600" />
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Building className="h-5 w-5 mr-2 text-green-600" />
                      Professional Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <Input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          placeholder="Enter your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title
                        </label>
                        <Input
                          type="text"
                          value={formData.jobTitle}
                          onChange={(e) =>
                            handleInputChange("jobTitle", e.target.value)
                          }
                          placeholder="Enter your job title"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      <Input
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                          handleInputChange("location", e.target.value)
                        }
                        placeholder="Enter your location"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-green-600" />
                      Additional Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Dietary Restrictions
                        </label>
                        <textarea
                          value={formData.dietaryRestrictions}
                          onChange={(e) =>
                            handleInputChange(
                              "dietaryRestrictions",
                              e.target.value
                            )
                          }
                          placeholder="Any dietary restrictions or allergies?"
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Special Requirements
                        </label>
                        <textarea
                          value={formData.specialRequirements}
                          onChange={(e) =>
                            handleInputChange(
                              "specialRequirements",
                              e.target.value
                            )
                          }
                          placeholder="Any special requirements or accommodations needed?"
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={(e) =>
                          handleInputChange("agreeToTerms", e.target.checked)
                        }
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
                      />
                      <label
                        htmlFor="agreeToTerms"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        I agree to the{" "}
                        <a
                          href="/terms"
                          className="text-green-600 hover:text-green-700 font-medium"
                        >
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href="/privacy"
                          className="text-green-600 hover:text-green-700 font-medium"
                        >
                          Privacy Policy
                        </a>
                        *
                      </label>
                    </div>
                    {errors.agreeToTerms && (
                      <p className="text-red-500 text-sm">
                        {errors.agreeToTerms}
                      </p>
                    )}

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="agreeToMarketing"
                        checked={formData.agreeToMarketing}
                        onChange={(e) =>
                          handleInputChange(
                            "agreeToMarketing",
                            e.target.checked
                          )
                        }
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
                      />
                      <label
                        htmlFor="agreeToMarketing"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        I would like to receive updates about future events and
                        promotions
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold text-lg"
                    >
                      {eventData.isFree
                        ? "Complete Registration"
                        : "Continue to Payment"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserRegistration;
