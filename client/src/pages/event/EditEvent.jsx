import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import EventForm from "../../components/forms/EventForm";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    // Simulate fetching event data
    const fetchEvent = async () => {
      setLoading(true);
      // Mock event data - replace with actual API call
      const mockEvent = {
        id: id,
        title: "Summer Music Festival",
        description:
          "Three days of incredible music featuring top artists from around the world.",
        date: "2024-08-15",
        time: "18:00",
        location: "Central Park, NYC",
        category: "music",
        price: "89",
        capacity: "5000",
        image: null,
      };

      setTimeout(() => {
        setFormData(mockEvent);
        setLoading(false);
      }, 1000);
    };

    fetchEvent();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated event data:", formData);
    // Handle event update logic here
    navigate("/events/manage");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Edit Event
            </h1>
            <p className="text-gray-600">Update your event details below</p>
          </div>

          <EventForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            submitButtonText="Update Event"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EditEvent;
