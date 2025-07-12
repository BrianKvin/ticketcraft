import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const EventForm = ({
  formData,
  setFormData,
  onSubmit,
  submitButtonText = "Create Event",
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Event Title *
          </label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter event title"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category *
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
          >
            <option value="">Select a category</option>
            <option value="music">Music</option>
            <option value="comedy">Comedy</option>
            <option value="sports">Sports</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="food">Food & Drink</option>
            <option value="art">Art & Culture</option>
            <option value="other">Other</option>
          </select>
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
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
          placeholder="Describe your event..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Date *
          </label>
          <Input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
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
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Location *
        </label>
        <Input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          placeholder="Enter event location"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Ticket Price *
          </label>
          <Input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            placeholder="0.00"
          />
        </div>

        <div>
          <label
            htmlFor="capacity"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Capacity *
          </label>
          <Input
            type="number"
            id="capacity"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            required
            min="1"
            placeholder="Maximum attendees"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Event Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
          accept="image/*"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
        />
        <p className="text-xs text-gray-500 mt-1">
          Recommended size: 1200x800 pixels. Max file size: 5MB.
        </p>
      </div>

      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => window.history.back()}
        >
          Cancel
        </Button>
        <Button type="submit">{submitButtonText}</Button>
      </div>
    </form>
  );
};

export default EventForm;
