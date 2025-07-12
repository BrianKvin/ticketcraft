import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const DestinationForm = ({
  formData,
  setFormData,
  onSubmit,
  submitButtonText = "Create Destination",
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePricingChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [name]: value,
      },
    }));
  };

  const handleAmenitiesChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      amenities: checked
        ? [...prev.amenities, value]
        : prev.amenities.filter((amenity) => amenity !== value),
    }));
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: files,
    }));
  };

  const amenities = [
    "WiFi",
    "Parking",
    "Restaurant",
    "Pool",
    "Spa",
    "Gym",
    "Beach Access",
    "Mountain View",
    "City Center",
    "Airport Shuttle",
    "Room Service",
    "Conference Room",
    "Wedding Venue",
    "Event Space",
  ];

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Destination Name *
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter destination name"
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
            <option value="resort">Resort</option>
            <option value="hotel">Hotel</option>
            <option value="lodge">Lodge</option>
            <option value="villa">Villa</option>
            <option value="cabin">Cabin</option>
            <option value="beach-house">Beach House</option>
            <option value="mountain-retreat">Mountain Retreat</option>
            <option value="city-center">City Center</option>
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
          placeholder="Describe your destination..."
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
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          placeholder="Enter destination location"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            placeholder="Maximum capacity"
          />
        </div>

        <div>
          <label
            htmlFor="basePrice"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Base Price *
          </label>
          <Input
            type="number"
            id="basePrice"
            name="basePrice"
            value={formData.pricing.basePrice}
            onChange={handlePricingChange}
            required
            min="0"
            step="0.01"
            placeholder="0.00"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amenities
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {amenities.map((amenity) => (
            <label key={amenity} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={amenity}
                checked={formData.amenities.includes(amenity)}
                onChange={handleAmenitiesChange}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="images"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Destination Images
        </label>
        <input
          type="file"
          id="images"
          name="images"
          onChange={handleImagesChange}
          accept="image/*"
          multiple
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
        />
        <p className="text-xs text-gray-500 mt-1">
          You can select multiple images. Recommended size: 1200x800 pixels. Max
          file size: 5MB per image.
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

export default DestinationForm;
