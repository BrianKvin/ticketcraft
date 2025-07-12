import React, { useState } from 'react';
import { ArrowRight, Upload, CheckCircle, AlertCircle, User, Building, Camera, FileText, Shield, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { useForm } from 'react-hook-form';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [accountType, setAccountType] = useState<'organizer' | 'destination' | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState({
    profilePhoto: null,
    idDocument: null,
    businessLicense: null,
    insuranceCert: null
  });

  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      businessName: '',
      businessType: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      website: '',
      description: '',
      bankAccount: '',
      routingNumber: '',
      taxId: ''
    }
  });

  const steps = [
    { number: 1, title: "Account Type", description: "Choose your role" },
    { number: 2, title: "Personal Info", description: "Your details" },
    { number: 3, title: "Business Info", description: "Company details" },
    { number: 4, title: "Verification", description: "Identity & documents" },
    { number: 5, title: "Payment Setup", description: "Banking info" }
  ];

  const accountTypes = [
    {
      type: 'organizer',
      title: 'Event Organizer',
      description: 'Create and manage events, sell tickets, and track analytics',
      features: ['Event creation tools', 'Ticket sales management', 'Real-time analytics', 'Marketing suite'],
      icon: Calendar
    },
    {
      type: 'destination',
      title: 'Destination Owner',
      description: 'List your venue, attraction, or destination for events',
      features: ['Venue listing', 'Booking management', 'Revenue sharing', 'Guest reviews'],
      icon: Building
    }
  ];

  const verificationDocuments = [
    {
      key: 'profilePhoto',
      title: 'Profile Photo',
      description: 'Clear photo of yourself',
      icon: Camera,
      required: true
    },
    {
      key: 'idDocument',
      title: 'Government ID',
      description: 'Driver\'s license, passport, or state ID',
      icon: FileText,
      required: true
    },
    {
      key: 'businessLicense',
      title: 'Business License',
      description: 'Valid business registration document',
      icon: Shield,
      required: accountType === 'destination'
    },
    {
      key: 'insuranceCert',
      title: 'Insurance Certificate',
      description: 'Liability insurance documentation',
      icon: Shield,
      required: accountType === 'destination'
    }
  ];

  const handleFileUpload = () => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFiles(prev => ({ ...prev, [key]: file }));
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Registration submitted:', {
      accountType,
      formData: form.getValues(),
      files: uploadedFiles
    });
    navigate('/organizer-dashboard');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Progress Bar */}
      <div className="pt-20 pb-8 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step.number 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    step.number
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-full h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">{steps[currentStep - 1].title}</h1>
            <p className="text-muted-foreground">{steps[currentStep - 1].description}</p>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          
          {/* Step 1: Account Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Choose Your Account Type</h2>
                <p className="text-muted-foreground">Select the option that best describes your role</p>
              </div>
              
              <div className="grid gap-6">
                {accountTypes.map((type) => (
                  <Card 
                    key={type.type}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      accountType === type.type ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setAccountType(type.type)}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <type.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle>{type.title}</CardTitle>
                          <CardDescription>{type.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        {type.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>
                  Tell us about yourself
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      {...form.register('firstName')} 
                      placeholder="John" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      {...form.register('lastName')} 
                      placeholder="Smith" 
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    {...form.register('email')} 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    {...form.register('phone')} 
                    placeholder="+1 (555) 123-4567" 
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Business Information */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Business Information
                </CardTitle>
                <CardDescription>
                  {accountType === 'organizer' ? 'Event organization details' : 'Destination business details'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input 
                    id="businessName" 
                    {...form.register('businessName')} 
                    placeholder="Your Business Name" 
                  />
                </div>
                <div>
                  <Label htmlFor="businessType">Business Type</Label>
                  <Input 
                    id="businessType" 
                    {...form.register('businessType')} 
                    placeholder={accountType === 'organizer' ? 'Event Planning Company' : 'Venue, Restaurant, Hotel, etc.'} 
                  />
                </div>
                <div>
                  <Label htmlFor="address">Business Address</Label>
                  <Input 
                    id="address" 
                    {...form.register('address')} 
                    placeholder="123 Main Street" 
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city" 
                      {...form.register('city')} 
                      placeholder="San Francisco" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input 
                      id="state" 
                      {...form.register('state')} 
                      placeholder="CA" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input 
                      id="zipCode" 
                      {...form.register('zipCode')} 
                      placeholder="94105" 
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="website">Website (Optional)</Label>
                  <Input 
                    id="website" 
                    {...form.register('website')} 
                    placeholder="https://yourwebsite.com" 
                  />
                </div>
                <div>
                  <Label htmlFor="description">Business Description</Label>
                  <Textarea 
                    id="description" 
                    {...form.register('description')} 
                    placeholder="Describe your business and what makes it special..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Identity Verification */}
          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Identity Verification
                </CardTitle>
                <CardDescription>
                  Upload required documents to verify your identity and business
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {verificationDocuments.map((doc) => (
                  <div key={doc.key} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <doc.icon className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <h4 className="font-medium">{doc.title}</h4>
                          <p className="text-sm text-muted-foreground">{doc.description}</p>
                        </div>
                      </div>
                      {doc.required && (
                        <Badge variant="destructive" className="text-xs">Required</Badge>
                      )}
                    </div>
                    
                    <div className="border-2 border-dashed border-muted rounded-lg p-6">
                      {uploadedFiles[doc.key] ? (
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm font-medium">{uploadedFiles[doc.key]?.name}</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setUploadedFiles(prev => ({ ...prev, [doc.key]: null }))}
                          >
                            Remove
                          </Button>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <div className="space-y-1">
                            <Label htmlFor={doc.key} className="cursor-pointer">
                              <span className="text-primary hover:underline">Click to upload</span> or drag and drop
                            </Label>
                            <p className="text-xs text-muted-foreground">PNG, JPG, PDF up to 10MB</p>
                          </div>
                          <Input
                            id={doc.key}
                            type="file"
                            className="hidden"
                            accept="image/*,.pdf"
                            onChange={(e) => handleFileUpload(doc.key, e)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-blue-900 mb-1">Identity Verification Process</p>
                      <p className="text-blue-700">
                        Your documents will be reviewed within 24-48 hours. You'll receive an email confirmation once verified.
                        All documents are encrypted and stored securely.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Payment Setup */}
          {currentStep === 5 && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Setup</CardTitle>
                <CardDescription>
                  Configure your banking information for payouts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="bankAccount">Bank Account Number</Label>
                  <Input 
                    id="bankAccount" 
                    {...form.register('bankAccount')} 
                    placeholder="Account number" 
                    type="password"
                  />
                </div>
                <div>
                  <Label htmlFor="routingNumber">Routing Number</Label>
                  <Input 
                    id="routingNumber" 
                    {...form.register('routingNumber')} 
                    placeholder="9-digit routing number" 
                  />
                </div>
                <div>
                  <Label htmlFor="taxId">Tax ID / EIN</Label>
                  <Input 
                    id="taxId" 
                    {...form.register('taxId')} 
                    placeholder="XX-XXXXXXX or XXX-XX-XXXX" 
                  />
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-green-900 mb-1">Secure Payment Processing</p>
                      <p className="text-green-700">
                        We use bank-level encryption to protect your financial information. 
                        Payouts are processed automatically based on your chosen schedule.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              Back
            </Button>
            
            {currentStep < 5 ? (
              <Button 
                onClick={handleNext}
                disabled={currentStep === 1 && !accountType}
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit}>
                Complete Registration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;