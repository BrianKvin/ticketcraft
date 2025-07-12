import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Minus, Calendar, MapPin, DollarSign, Users } from "lucide-react";
import Button from "../common/Button";
import Input from "../common/Input";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    image: "",
    price: 0,
    category: "",
    totalSlots: 100,
    organizer: "",
  });

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
    "Wellness",
    "Education",
    "Sports",
    "Entertainment",
  ];

  const handleInputChange = (field, value) => {
    setEventData((prev) => ({ ...prev, [field]: value }));
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

    // In a real app, you would save this to a database
    // For now, we'll navigate to the organizer dashboard
    navigate("/organizer-dashboard", {
      state: {
        message: "Event created successfully!",
        event: newEvent,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create New Event
          </h1>
          <p className="text-gray-600">
            Set up your event details and registration form
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Event Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Event Details
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
                    placeholder="Enter event title"
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
                  placeholder="Describe your event..."
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Event Date *
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
                    placeholder="Event location"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <option value="">Select category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Price ($)
                  </label>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={eventData.price}
                    onChange={(e) =>
                      handleInputChange(
                        "price",
                        parseFloat(e.target.value) || 0
                      )
                    }
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label
                    htmlFor="totalSlots"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Total Slots *
                  </label>
                  <Input
                    id="totalSlots"
                    type="number"
                    min="1"
                    value={eventData.totalSlots}
                    onChange={(e) =>
                      handleInputChange(
                        "totalSlots",
                        parseInt(e.target.value) || 100
                      )
                    }
                    required
                  />
                </div>
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
                  type="url"
                  value={eventData.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
                {eventData.image && (
                  <div className="mt-2">
                    <img
                      src={eventData.image}
                      alt="Event preview"
                      className="w-32 h-20 object-cover rounded-lg border"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}
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
              <p className="text-sm text-gray-600">
                Define the fields attendees will fill out when registering
              </p>
            </div>
            <div className="space-y-6">
              {registrationFields.map((field, fieldIndex) => (
                <div
                  key={field.id}
                  className="bg-gray-50 p-4 rounded-lg space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm font-medium">
                      Field {fieldIndex + 1}
                    </span>
                    {registrationFields.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeRegistrationField(fieldIndex)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Field Label *
                      </label>
                      <Input
                        value={field.label}
                        onChange={(e) =>
                          updateRegistrationField(fieldIndex, {
                            label: e.target.value,
                          })
                        }
                        placeholder="Field label"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Field Type *
                      </label>
                      <select
                        value={field.type}
                        onChange={(e) =>
                          updateRegistrationField(fieldIndex, {
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
                    <div className="flex items-center space-x-2 mt-6">
                      <input
                        type="checkbox"
                        id={`required_${fieldIndex}`}
                        checked={field.required}
                        onChange={(e) =>
                          updateRegistrationField(fieldIndex, {
                            required: e.target.checked,
                          })
                        }
                        className="rounded"
                      />
                      <label
                        htmlFor={`required_${fieldIndex}`}
                        className="text-sm font-medium text-gray-700"
                      >
                        Required
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Placeholder Text
                    </label>
                    <Input
                      value={field.placeholder || ""}
                      onChange={(e) =>
                        updateRegistrationField(fieldIndex, {
                          placeholder: e.target.value,
                        })
                      }
                      placeholder="Enter placeholder text"
                    />
                  </div>

                  {field.type === "select" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Options
                      </label>
                      <div className="space-y-2">
                        {(field.options || []).map((option, optionIndex) => (
                          <div key={optionIndex} className="flex gap-2">
                            <Input
                              value={option}
                              onChange={(e) =>
                                updateSelectOption(
                                  fieldIndex,
                                  optionIndex,
                                  e.target.value
                                )
                              }
                              placeholder={`Option ${optionIndex + 1}`}
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                removeSelectOption(fieldIndex, optionIndex)
                              }
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => addSelectOption(fieldIndex)}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Option
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <Button
                type="button"
                variant="outline"
                onClick={addRegistrationField}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Registration Field
              </Button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-green-500 hover:bg-green-600">
              Create Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
