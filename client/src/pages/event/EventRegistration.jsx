import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  User,
  CreditCard,
  ArrowLeft,
  Check,
} from "lucide-react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Label from "../../components/common/Label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/common/Card";
import PaymentForm from "../../components/forms/PaymentForm";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Textarea from "../../components/common/Textarea";
import { RadioGroup, RadioGroupItem } from "../../components/common/RadioGroup";
import dayjs from "dayjs";

const getDaysUntilEvent = (dateStr) => {
  const eventDate = dayjs(dateStr);
  const now = dayjs();
  const diff = eventDate.diff(now, "day");
  return diff > 0 ? diff : 0;
};

const EventRegistration = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState("registration");
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching event data
  useEffect(() => {
    // In a real app, you would fetch the event data from an API
    const mockEvent = {
      id: eventId,
      title: "Tech Innovation Summit 2024",
      date: "March 15, 2024",
      location: "San Francisco, CA",
      description:
        "Join industry leaders discussing the future of technology and innovation.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 299,
      category: "Technology",
      availableSlots: 45,
      totalSlots: 200,
      organizer: "Tech Innovation Corp",
      registrationFields: [
        {
          id: "firstName",
          name: "firstName",
          type: "text",
          label: "First Name",
          required: true,
          placeholder: "Enter your first name",
        },
        {
          id: "lastName",
          name: "lastName",
          type: "text",
          label: "Last Name",
          required: true,
          placeholder: "Enter your last name",
        },
        {
          id: "email",
          name: "email",
          type: "email",
          label: "Email Address",
          required: true,
          placeholder: "your.email@example.com",
        },
        {
          id: "phone",
          name: "phone",
          type: "phone",
          label: "Phone Number",
          required: true,
          placeholder: "+1 (555) 123-4567",
        },
        {
          id: "company",
          name: "company",
          type: "text",
          label: "Company",
          required: false,
          placeholder: "Your company name",
        },
        {
          id: "jobTitle",
          name: "jobTitle",
          type: "text",
          label: "Job Title",
          required: false,
          placeholder: "Your job title",
        },
        {
          id: "experience",
          name: "experience",
          type: "select",
          label: "Years of Experience",
          required: true,
          options: ["0-2 years", "3-5 years", "6-10 years", "10+ years"],
        },
        {
          id: "dietaryRestrictions",
          name: "dietaryRestrictions",
          type: "textarea",
          label: "Dietary Restrictions",
          required: false,
          placeholder: "Please specify any dietary restrictions...",
        },
      ],
    };

    setEvent(mockEvent);
    setLoading(false);
  }, [eventId]);

  const handleInputChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    event?.registrationFields.forEach((field) => {
      if (
        field.required &&
        (!formData[field.name] || formData[field.name] === "")
      ) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (event?.price === 0) {
      // Free event - go directly to confirmation
      handleFreeEventSubmission();
    } else {
      // Paid event - go to payment step
      setCurrentStep("payment");
    }
  };

  const handleFreeEventSubmission = () => {
    // Handle free event registration
    console.log("Free event registration:", {
      event: event?.title,
      data: formData,
    });
    setCurrentStep("confirmation");
  };

  const handlePaymentSuccess = () => {
    console.log("Paid event registration:", {
      event: event?.title,
      data: formData,
    });
    setCurrentStep("confirmation");
  };

  const renderFormField = (field) => {
    const fieldError = errors[field.name];

    switch (field.type) {
      case "text":
      case "email":
      case "phone":
        return (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id}>
              {field.label}{" "}
              {field.required && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className={fieldError ? "border-red-500" : ""}
            />
            {fieldError && <p className="text-red-500 text-sm">{fieldError}</p>}
          </div>
        );

      case "textarea":
        return (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id}>
              {field.label}{" "}
              {field.required && <span className="text-red-500">*</span>}
            </Label>
            <Textarea
              id={field.id}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className={fieldError ? "border-red-500" : ""}
              rows={3}
            />
            {fieldError && <p className="text-red-500 text-sm">{fieldError}</p>}
          </div>
        );

      case "select":
        return (
          <div key={field.id} className="space-y-2">
            <Label>
              {field.label}{" "}
              {field.required && <span className="text-red-500">*</span>}
            </Label>
            <RadioGroup
              value={formData[field.name] || ""}
              onValueChange={(value) => handleInputChange(field.name, value)}
              className={fieldError ? "border border-red-500 rounded p-2" : ""}
            >
              {field.options?.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`${field.id}-${option}`} />
                  <Label
                    htmlFor={`${field.id}-${option}`}
                    className="cursor-pointer"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {fieldError && <p className="text-red-500 text-sm">{fieldError}</p>}
          </div>
        );

      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading event details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Event Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              The event you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/browse-events"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200"
            >
              Browse Events
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              to="/browse-events"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Link>
          </div>

          {/* Hero Section */}
          <div className="mb-10">
            <Card className="w-full overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                {/* Event Image */}
                <div className="md:w-2/5 w-full h-64 md:h-auto">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Event Details */}
                <div className="md:w-3/5 w-full p-6 flex flex-col justify-between bg-white">
                  <div>
                    <h2 className="font-bold text-2xl md:text-3xl mb-2 text-gray-900">
                      {event.title}
                    </h2>
                    <div className="flex items-center text-gray-600 text-base mb-2">
                      <Calendar className="h-5 w-5 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600 text-base mb-4">
                      <MapPin className="h-5 w-5 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.price === 0 ? (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Free Event
                        </span>
                      ) : (
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          ${event.price}
                        </span>
                      )}
                      <span className="text-sm text-gray-500">
                        {event.availableSlots} spots remaining
                      </span>
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-4">
                    <button
                      type="button"
                      className="flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <span>Favorite</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 4v16h16V4H4zm2 2h12v12H6V6zm3 3v6h6V9H9z" />
                      </svg>
                      <span>Share</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <span>Rate</span>
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-500 justify-center">
            <span
              className={
                currentStep === "registration" ? "font-bold text-green-600" : ""
              }
            >
              1. Registration Info
            </span>
            <span>→</span>
            <span
              className={
                currentStep === "payment" ? "font-bold text-green-600" : ""
              }
            >
              2. Payment
            </span>
            <span>→</span>
            <span
              className={
                currentStep === "confirmation" ? "font-bold text-green-600" : ""
              }
            >
              3. Confirmation
            </span>
          </div>

          {/* Registration Form Section */}
          <div className="mb-10">
            {currentStep === "registration" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Registration Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleRegistrationSubmit}
                    className="space-y-6"
                    autoComplete="on"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {event.registrationFields.map((field, idx) => {
                        // Long-form fields (textarea) span both columns
                        if (field.type === "textarea") {
                          return (
                            <div key={field.id} className="md:col-span-2">
                              {renderFormField(field)}
                            </div>
                          );
                        }
                        return (
                          <div key={field.id}>
                            {renderFormField(field)}
                            {/* Helper text for email/phone */}
                            {field.type === "email" && (
                              <p className="text-xs text-gray-400 mt-1">
                                We'll never share your email.
                              </p>
                            )}
                            {field.type === "phone" && (
                              <p className="text-xs text-gray-400 mt-1">
                                Format: +1 (555) 123-4567
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between pt-6 border-t gap-4">
                      <Link
                        to="/browse-events"
                        className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors text-center"
                      >
                        Cancel
                      </Link>
                      <Button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 px-8"
                        disabled={loading}
                        autoFocus
                      >
                        {event.price === 0
                          ? "Register Now"
                          : "Continue to Payment"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Payment Form */}
            {currentStep === "payment" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PaymentForm
                    event={event}
                    registrationData={formData}
                    onSuccess={handlePaymentSuccess}
                    onBack={() => setCurrentStep("registration")}
                    onCancel={() => navigate("/browse-events")}
                  />
                </CardContent>
              </Card>
            )}

            {/* Confirmation */}
            {currentStep === "confirmation" && (
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Registration Confirmed!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    You have successfully registered for{" "}
                    <strong>{event.title}</strong>. A confirmation email will be
                    sent to your registered email address.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold mb-2">Event Details:</h4>
                    <p className="text-sm text-gray-600">
                      {event.date} at {event.location}
                    </p>
                    <p className="text-sm text-gray-600">
                      Organized by {event.organizer}
                    </p>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <Link
                      to="/browse-events"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200"
                    >
                      Browse More Events
                    </Link>
                    <Link
                      to="/user/dashboard"
                      className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Go to Dashboard
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventRegistration;
