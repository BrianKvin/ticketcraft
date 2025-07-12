import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import EventForm from "../../components/forms/EventForm";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    price: "",
    capacity: "",
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event data:", formData);
    // Handle event creation logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create New Event
            </h1>
            <p className="text-gray-600">
              Fill in the details below to create your event
            </p>
          </div>

          <EventForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            submitButtonText="Create Event"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateEvent;
