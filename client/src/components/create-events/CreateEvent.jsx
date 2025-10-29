import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Minus,
  Calendar,
  MapPin,
  DollarSign,
  Users,
  Clock,
  Image as ImageIcon,
  X,
  Tag,
} from "lucide-react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Button from "../common/Button";
import Input from "../common/Input";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    image: "",
    price: "",
    category: "",
    totalSlots: 100,
    organizer: "",
    isOnline: false,
    tags: [],
    requirements: "",
  });

  const [newTag, setNewTag] = useState("");
  const [registrationFields, setRegistrationFields] = useState([
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
  ]);

  const fieldTypes = [
    { value: "text", label: "Text" },
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone" },
    { value: "textarea", label: "Textarea" },
    { value: "select", label: "Select/Radio" },
  ];

  const categories = [
    "Technology",
    "Business",
    "Arts",
    "Music",
    "Sports",
    "Education",
    "Health",
    "Food",
    "Travel",
    "Networking",
    "Workshop",
    "Conference",
    "Wellness",
  ];

  const handleInputChange = (field, value) => {
    setEventData((prev) => ({ ...prev, [field]: value }));
  };

  const addTag = () => {
    if (newTag.trim() && !eventData.tags.includes(newTag.trim())) {
      handleInputChange("tags", [...eventData.tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    handleInputChange(
      "tags",
      eventData.tags.filter((tag) => tag !== tagToRemove)
    );
  };

  const addRegistrationField = () => {
    const newField = {
      id: `field_${Date.now()}`,
      name: `field_${Date.now()}`,
      type: "text",
      label: "New Field",
      required: false,
      placeholder: "Enter placeholder text",
    };
    setRegistrationFields((prev) => [...prev, newField]);
  };

  const updateRegistrationField = (index, updates) => {
    setRegistrationFields((prev) =>
      prev.map((field, i) => (i === index ? { ...field, ...updates } : field))
    );
  };

  const removeRegistrationField = (index) => {
    if (registrationFields.length > 1) {
      setRegistrationFields((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const addSelectOption = (fieldIndex) => {
    const field = registrationFields[fieldIndex];
    const newOptions = [...(field.options || []), ""];
    updateRegistrationField(fieldIndex, { options: newOptions });
  };

  const updateSelectOption = (fieldIndex, optionIndex, value) => {
    const field = registrationFields[fieldIndex];
    const newOptions = [...(field.options || [])];
    newOptions[optionIndex] = value;
    updateRegistrationField(fieldIndex, { options: newOptions });
  };

  const removeSelectOption = (fieldIndex, optionIndex) => {
    const field = registrationFields[fieldIndex];
    const newOptions = (field.options || []).filter(
      (_, i) => i !== optionIndex
    );
    updateRegistrationField(fieldIndex, { options: newOptions });
  };

  const progress = () => {
    const fields = [
      eventData.title,
      eventData.description,
      eventData.category,
      eventData.date,
      eventData.time,
      eventData.location,
      eventData.price,
    ];
    const filledFields = fields.filter(
      (field) => field && field.toString().trim() !== ""
    ).length;
    return Math.round((filledFields / fields.length) * 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the complete event object
    const newEvent = {
      id: Date.now(),
      ...eventData,
      availableSlots: eventData.totalSlots,
      registrationFields,
    };

    console.log("Creating new event:", newEvent);

    // Navigate to the organizer dashboard
    navigate("/organizer/dashboard", {
      state: {
        message: "Event created successfully!",
        event: newEvent,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-white shadow-sm border-b pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create New Event
          </h1>
          <p className="text-gray-600">
            Set up your event details and registration form
          </p>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{progress()}% complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress()}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Event Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <ImageIcon className="h-5 w-5" />
                Basic Information
              </h2>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Event Title *
                  </label>
                  <Input
                    id="title"
                    value={eventData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Give your event a catchy title"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="organizer"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Organizer Name *
                  </label>
                  <Input
                    id="organizer"
                    value={eventData.organizer}
                    onChange={(e) =>
                      handleInputChange("organizer", e.target.value)
                    }
                    placeholder="Your organization name"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Description *
                </label>
                <textarea
                  id="description"
                  value={eventData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe what your event is about..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Category *
                  </label>
                  <select
                    id="category"
                    value={eventData.category}
                    onChange={(e) =>
                      handleInputChange("category", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Event Image URL
                  </label>
                  <Input
                    id="image"
                    value={eventData.image}
                    onChange={(e) => handleInputChange("image", e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="flex space-x-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag"
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addTag())
                    }
                  />
                  <Button
                    type="button"
                    onClick={addTag}
                    className="bg-gray-500 hover:bg-gray-600"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                {eventData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {eventData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-2 text-green-600 hover:text-green-800"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Event Details
              </h2>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Date *
                  </label>
                  <Input
                    id="date"
                    type="date"
                    value={eventData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Time *
                  </label>
                  <Input
                    id="time"
                    type="time"
                    value={eventData.time}
                    onChange={(e) => handleInputChange("time", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Location *
                  </label>
                  <Input
                    id="location"
                    value={eventData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    placeholder="Event location or venue"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Price (USD) *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="price"
                      type="number"
                      value={eventData.price}
                      onChange={(e) =>
                        handleInputChange("price", e.target.value)
                      }
                      placeholder="0.00"
                      className="pl-10"
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="totalSlots"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Total Slots *
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="totalSlots"
                      type="number"
                      value={eventData.totalSlots}
                      onChange={(e) =>
                        handleInputChange("totalSlots", e.target.value)
                      }
                      className="pl-10"
                      min="1"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="requirements"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Requirements/Prerequisites
                </label>
                <textarea
                  id="requirements"
                  value={eventData.requirements}
                  onChange={(e) =>
                    handleInputChange("requirements", e.target.value)
                  }
                  placeholder="Any requirements or prerequisites for attendees..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="isOnline"
                  type="checkbox"
                  checked={eventData.isOnline}
                  onChange={(e) =>
                    handleInputChange("isOnline", e.target.checked)
                  }
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="isOnline"
                  className="ml-2 block text-sm text-gray-700"
                >
                  This is an online event
                </label>
              </div>
            </div>
          </div>

          {/* Registration Form Builder */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Registration Form
              </h2>
              <p className="text-gray-600 mt-2">
                Customize the registration form for your event attendees
              </p>
            </div>

            <div className="space-y-4">
              {registrationFields.map((field, index) => (
                <div
                  key={field.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Field Label
                      </label>
                      <Input
                        value={field.label}
                        onChange={(e) =>
                          updateRegistrationField(index, {
                            label: e.target.value,
                          })
                        }
                        placeholder="Field label"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Field Type
                      </label>
                      <select
                        value={field.type}
                        onChange={(e) =>
                          updateRegistrationField(index, {
                            type: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        {fieldTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Placeholder
                      </label>
                      <Input
                        value={field.placeholder}
                        onChange={(e) =>
                          updateRegistrationField(index, {
                            placeholder: e.target.value,
                          })
                        }
                        placeholder="Placeholder text"
                      />
                    </div>
                    <div className="flex items-end">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={field.required}
                          onChange={(e) =>
                            updateRegistrationField(index, {
                              required: e.target.checked,
                            })
                          }
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Required
                        </span>
                      </label>
                      {registrationFields.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeRegistrationField(index)}
                          className="ml-auto text-red-600 hover:text-red-800"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Select/Radio Options */}
                  {(field.type === "select" || field.type === "radio") && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Options
                      </label>
                      <div className="space-y-2">
                        {(field.options || []).map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className="flex items-center space-x-2"
                          >
                            <Input
                              value={option}
                              onChange={(e) =>
                                updateSelectOption(
                                  index,
                                  optionIndex,
                                  e.target.value
                                )
                              }
                              placeholder={`Option ${optionIndex + 1}`}
                              className="flex-1"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                removeSelectOption(index, optionIndex)
                              }
                              className="text-red-600 hover:text-red-800"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                        <Button
                          type="button"
                          onClick={() => addSelectOption(index)}
                          className="bg-gray-500 hover:bg-gray-600"
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add Option
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <Button
                type="button"
                onClick={addRegistrationField}
                className="bg-gray-500 hover:bg-gray-600"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Registration Field
              </Button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              onClick={() => navigate("/organizer/dashboard")}
              className="bg-gray-500 hover:bg-gray-600"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-green-500 hover:bg-green-600">
              Create Event
            </Button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CreateEvent;
