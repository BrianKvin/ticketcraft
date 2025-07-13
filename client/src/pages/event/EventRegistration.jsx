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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/common/Card";
import PaymentForm from "../../components/forms/PaymentForm";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
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

      <main className="flex-1 py-8">
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

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Event Registration
            </h1>
            <p className="text-gray-600">
              Complete your registration for this event
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Event Summary */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center justify-between">
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
                  </div>
                </CardContent>
              </Card>

              {/* Registration Form */}
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
                    >
                      <div className="grid gap-6">
                        {event.registrationFields.map(renderFormField)}
                      </div>

                      <div className="flex justify-between pt-6 border-t">
                        <Link
                          to="/browse-events"
                          className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Cancel
                        </Link>
                        <Button
                          type="submit"
                          className="bg-green-500 hover:bg-green-600 px-8"
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
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Registration Confirmed!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      You have successfully registered for{" "}
                      <strong>{event.title}</strong>. A confirmation email will
                      be sent to your registered email address.
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

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Registration Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Event:</span>
                    <span className="font-medium">{event.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{event.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-medium">
                      {event.price === 0 ? "Free" : `$${event.price}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available:</span>
                    <span className="font-medium">
                      {event.availableSlots} spots
                    </span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>
                      {event.price === 0 ? "Free" : `$${event.price}`}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventRegistration;
