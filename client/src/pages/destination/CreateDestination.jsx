import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import DestinationForm from "../../components/forms/DestinationForm";

const CreateDestination = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    category: "",
    capacity: "",
    amenities: [],
    images: [],
    pricing: {
      basePrice: "",
      currency: "USD",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Destination data:", formData);
    // Handle destination creation logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create New Destination
            </h1>
            <p className="text-gray-600">
              Fill in the details below to create your destination
            </p>
          </div>

          <DestinationForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            submitButtonText="Create Destination"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateDestination;
