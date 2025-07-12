import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Calendar, MapPin, DollarSign, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { RegistrationField } from '../types/event';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    image: '',
    price: 0,
    category: '',
    totalSlots: 100,
    organizer: ''
  });

  const [registrationFields, setRegistrationFields] = useState([
    { id: 'firstName', name: 'firstName', type: 'text', label: 'First Name', required: true, placeholder: 'Enter your first name' },
    { id: 'lastName', name: 'lastName', type: 'text', label: 'Last Name', required: true, placeholder: 'Enter your last name' },
    { id: 'email', name: 'email', type: 'email', label: 'Email Address', required: true, placeholder: 'your.email@example.com' }
  ]);

  const fieldTypes = [
    { value: 'text', label: 'Text' },
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'textarea', label: 'Textarea' },
    { value: 'select', label: 'Select/Radio' }
  ];

  const categories = ['Technology', 'Business', 'Arts', 'Wellness', 'Education', 'Sports', 'Entertainment'];

  const handleInputChange = (field, value) => {
    setEventData(prev => ({ ...prev, [field]: value }));
  };

  const addRegistrationField = () => {
    const newField = {
      id: `field_${Date.now()}`,
      name: `field_${Date.now()}`,
      type: 'text',
      label: 'New Field',
      required: false,
      placeholder: 'Enter placeholder text'
    };
    setRegistrationFields(prev => [...prev, newField]);
  };

  const updateRegistrationField = (index, updates) => {
    setRegistrationFields(prev => 
      prev.map((field, i) => i === index ? { ...field, ...updates } : field)
    );
  };

  const removeRegistrationField = (index) => {
    if (registrationFields.length > 1) {
      setRegistrationFields(prev => prev.filter((_, i) => i !== index));
    }
  };

  const addSelectOption = () => {
    const field = registrationFields[fieldIndex];
    const newOptions = [...(field.options || []), ''];
    updateRegistrationField(fieldIndex, { options: newOptions });
  };

  const updateSelectOption = () => {
    const field = registrationFields[fieldIndex];
    const newOptions = [...(field.options || [])];
    newOptions[optionIndex] = value;
    updateRegistrationField(fieldIndex, { options: newOptions });
  };

  const removeSelectOption = () => {
    const field = registrationFields[fieldIndex];
    const newOptions = (field.options || []).filter((_, i) => i !== optionIndex);
    updateRegistrationField(fieldIndex, { options: newOptions });
  };

  const handleSubmit = () => {
    e.preventDefault();
    
    // Create the complete event object
    const newEvent = {
      id: Date.now(),
      ...eventData,
      availableSlots: eventData.totalSlots,
      registrationFields
    };

    console.log('Creating new event:', newEvent);
    
    // In a real app, you would save this to a database
    // For now, we'll navigate to the organizer dashboard
    navigate('/organizer-dashboard', { 
      state: { 
        message: 'Event created successfully!',
        event: newEvent 
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Event</h1>
          <p className="text-gray-600">Set up your event details and registration form</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Event Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Event Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="title">Event Title *</Label>
                  <Input
                    id="title"
                    value={eventData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Enter event title"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="organizer">Organizer Name *</Label>
                  <Input
                    id="organizer"
                    value={eventData.organizer}
                    onChange={(e) => handleInputChange('organizer', e.target.value)}
                    placeholder="Your organization name"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={eventData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe your event..."
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="date">Event Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={eventData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    value={eventData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="Event location"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select value={eventData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={eventData.price}
                    onChange={(e) => handleInputChange('price', parseFloat(e.target.value) || 0)}
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <Label htmlFor="totalSlots">Total Slots *</Label>
                  <Input
                    id="totalSlots"
                    type="number"
                    min="1"
                    value={eventData.totalSlots}
                    onChange={(e) => handleInputChange('totalSlots', parseInt(e.target.value) || 100)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="image">Event Image URL</Label>
                <Input
                  id="image"
                  type="url"
                  value={eventData.image}
                  onChange={(e) => handleInputChange('image', e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
                {eventData.image && (
                  <div className="mt-2">
                    <img 
                      src={eventData.image} 
                      alt="Event preview" 
                      className="w-32 h-20 object-cover rounded-lg border"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Registration Form Builder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Registration Form
              </CardTitle>
              <p className="text-sm text-gray-600">Define the fields attendees will fill out when registering</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {registrationFields.map((field, fieldIndex) => (
                <div key={field.id} className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Field {fieldIndex + 1}</Badge>
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
                      <Label>Field Label *</Label>
                      <Input
                        value={field.label}
                        onChange={(e) => updateRegistrationField(fieldIndex, { label: e.target.value })}
                        placeholder="Field label"
                      />
                    </div>
                    <div>
                      <Label>Field Type *</Label>
                      <Select 
                        value={field.type} 
                        onValueChange={(value) => updateRegistrationField(fieldIndex, { type: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {fieldTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2 mt-6">
                      <input
                        type="checkbox"
                        id={`required_${fieldIndex}`}
                        checked={field.required}
                        onChange={(e) => updateRegistrationField(fieldIndex, { required: e.target.checked })}
                        className="rounded"
                      />
                      <Label htmlFor={`required_${fieldIndex}`}>Required</Label>
                    </div>
                  </div>

                  <div>
                    <Label>Placeholder Text</Label>
                    <Input
                      value={field.placeholder || ''}
                      onChange={(e) => updateRegistrationField(fieldIndex, { placeholder: e.target.value })}
                      placeholder="Enter placeholder text"
                    />
                  </div>

                  {field.type === 'select' && (
                    <div>
                      <Label>Options</Label>
                      <div className="space-y-2">
                        {(field.options || []).map((option, optionIndex) => (
                          <div key={optionIndex} className="flex gap-2">
                            <Input
                              value={option}
                              onChange={(e) => updateSelectOption(fieldIndex, optionIndex, e.target.value)}
                              placeholder={`Option ${optionIndex + 1}`}
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removeSelectOption(fieldIndex, optionIndex)}
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
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex gap-4 justify-end">
            <Button type="button" variant="outline" onClick={() => navigate(-1)}>
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