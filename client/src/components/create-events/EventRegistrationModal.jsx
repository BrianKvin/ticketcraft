import React, { useState } from 'react';
import { X, Calendar, MapPin, User, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import PaymentForm from './PaymentForm';
import { Event, RegistrationData, RegistrationField } from '../types/event';


const EventRegistrationModal = ({
  event,
  isOpen,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState<'registration' | 'payment' | 'confirmation'>('registration');
  const [formData, setFormData] = useState<RegistrationData>({});
  const [errors, setErrors] = useState({});

  const handleInputChange = () => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
    
    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    event.registrationFields.forEach(() => {
      if (field.required && (!formData[field.name] || formData[field.name] === '')) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegistrationSubmit = () => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (event.price === 0) {
      // Free event - go directly to confirmation
      handleFreeEventSubmission();
    } else {
      // Paid event - go to payment step
      setCurrentStep('payment');
    }
  };

  const handleFreeEventSubmission = () => {
    // Handle free event registration
    console.log('Free event registration:', { event: event.title, data: formData });
    setCurrentStep('confirmation');
  };

  const handlePaymentSuccess = () => {
    console.log('Paid event registration:', { event: event.title, data: formData });
    setCurrentStep('confirmation');
  };

  const renderFormField = () => {
    const fieldError = errors[field.name];

    switch (field.type) {
      case 'text':
      case 'email':
      case 'phone':
        return (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id}>
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className={fieldError ? 'border-red-500' : ''}
            />
            {fieldError && <p className="text-red-500 text-sm">{fieldError}</p>}
          </div>
        );

      case 'textarea':
        return (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id}>
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </Label>
            <Textarea
              id={field.id}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className={fieldError ? 'border-red-500' : ''}
              rows={3}
            />
            {fieldError && <p className="text-red-500 text-sm">{fieldError}</p>}
          </div>
        );

      case 'select':
        return (
          <div key={field.id} className="space-y-2">
            <Label>
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </Label>
            <RadioGroup
              value={formData[field.name]}
              onValueChange={(value) => handleInputChange(field.name, value)}
              className={fieldError ? 'border border-red-500 rounded p-2' : ''}
            >
              {field.options?.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`${field.id}-${option}`} />
                  <Label htmlFor={`${field.id}-${option}`} className="cursor-pointer">
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {currentStep === 'registration' && <User className="h-5 w-5" />}
            {currentStep === 'payment' && <CreditCard className="h-5 w-5" />}
            {currentStep === 'registration' && 'Event Registration'}
            {currentStep === 'payment' && 'Payment Details'}
            {currentStep === 'confirmation' && 'Registration Confirmed'}
          </DialogTitle>
        </DialogHeader>

        {/* Event Summary */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <img
                src={event.image}
                alt={event.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg">{event.title}</h3>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  {event.date}
                </div>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {event.location}
                </div>
                <div className="mt-2">
                  {event.price === 0 ? (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                      Free Event
                    </span>
                  ) : (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold">
                      ${event.price}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Registration Form */}
        {currentStep === 'registration' && (
          <form onSubmit={handleRegistrationSubmit} className="space-y-6">
            <div className="grid gap-6">
              {event.registrationFields.map(renderFormField)}
            </div>
            
            <div className="flex justify-between pt-6">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="bg-green-500 hover:bg-green-600">
                {event.price === 0 ? 'Register Now' : 'Continue to Payment'}
              </Button>
            </div>
          </form>
        )}

        {/* Payment Form */}
        {currentStep === 'payment' && (
          <PaymentForm
            event={event}
            registrationData={formData}
            onSuccess={handlePaymentSuccess}
            onBack={() => setCurrentStep('registration')}
            onCancel={onClose}
          />
        )}

        {/* Confirmation */}
        {currentStep === 'confirmation' && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Confirmed!</h3>
            <p className="text-gray-600 mb-6">
              You have successfully registered for <strong>{event.title}</strong>. 
              A confirmation email will be sent to your registered email address.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-2">Event Details:</h4>
              <p className="text-sm text-gray-600">{event.date} at {event.location}</p>
              <p className="text-sm text-gray-600">Organized by {event.organizer}</p>
            </div>
            <Button onClick={onClose} className="bg-green-500 hover:bg-green-600">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EventRegistrationModal;