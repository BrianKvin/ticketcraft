import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CreditCard, Lock, Shield, CheckCircle, Calendar, MapPin, DollarSign } from "lucide-react";
import Button from "../common/Button";
import Input from "../common/Input";

const UserPayment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get registration and event data from navigation state
  const { registration, eventData } = location.state || {
    registration: {
      ticketId: "TKT-001-123456",
      price: 299,
      user: { name: "John Doe", email: "john@example.com" }
    },
    eventData: {
      title: "Tech Innovation Summit 2024",
      date: "March 15-17, 2024",
      location: "San Francisco Convention Center",
      price: 299
    }
  };

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZip: "",
    billingCountry: "",
    saveCard: false,
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card"); // card, paypal, etc.

  const handleInputChange = (field, value) => {
    setPaymentData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!paymentData.cardNumber.replace(/\s/g, "").match(/^\d{16}$/)) {
      newErrors.cardNumber = "Please enter a valid 16-digit card number";
    }

    if (!paymentData.cardholderName.trim()) {
      newErrors.cardholderName = "Cardholder name is required";
    }

    if (!paymentData.expiryMonth || !paymentData.expiryYear) {
      newErrors.expiry = "Expiry date is required";
    }

    if (!paymentData.cvv.match(/^\d{3,4}$/)) {
      newErrors.cvv = "Please enter a valid CVV";
    }

    if (!paymentData.billingAddress.trim()) {
      newErrors.billingAddress = "Billing address is required";
    }

    if (!paymentData.billingCity.trim()) {
      newErrors.billingCity = "City is required";
    }

    if (!paymentData.billingZip.trim()) {
      newErrors.billingZip = "ZIP code is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    handleInputChange("cardNumber", formatted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Update registration status
      const updatedRegistration = {
        ...registration,
        status: "confirmed",
        paymentDate: new Date().toISOString(),
        paymentMethod: paymentMethod,
        paymentId: `PAY-${Date.now()}`,
      };

      console.log("Payment successful:", updatedRegistration);

      // Navigate to dashboard with success message
      navigate("/user/dashboard", {
        state: {
          message: "Payment successful! Your registration is confirmed.",
          registration: updatedRegistration,
          eventData: eventData,
        },
      });
    } catch (error) {
      console.error("Payment failed:", error);
      setErrors({ payment: "Payment failed. Please try again." });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Complete Payment
          </h1>
          <p className="text-gray-600">
            Secure payment for {eventData.title}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{eventData.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {eventData.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {eventData.location}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ticket Price</span>
                    <span className="font-semibold">${eventData.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Fee</span>
                    <span className="font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">$0.00</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-green-600">${eventData.price}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center text-green-800">
                    <Shield className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Secure Payment</span>
                  </div>
                  <p className="text-xs text-green-700 mt-1">
                    Your payment information is encrypted and secure
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Information</h2>

              {errors.payment && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700">{errors.payment}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Payment Method Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-green-500">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                      />
                      <CreditCard className="h-5 w-5 ml-3 text-gray-600" />
                      <span className="ml-3 font-medium">Credit/Debit Card</span>
                    </label>
                    
                    <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-green-500">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                      />
                      <span className="ml-3 font-medium">PayPal</span>
                    </label>
                  </div>
                </div>

                {paymentMethod === "card" && (
                  <>
                    {/* Card Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Card Information
                      </h3>
                      
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number *
                        </label>
                        <Input
                          id="cardNumber"
                          value={paymentData.cardNumber}
                          onChange={handleCardNumberChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                          className={errors.cardNumber ? "border-red-500" : ""}
                        />
                        {errors.cardNumber && (
                          <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700 mb-2">
                          Cardholder Name *
                        </label>
                        <Input
                          id="cardholderName"
                          value={paymentData.cardholderName}
                          onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                          placeholder="Name on card"
                          className={errors.cardholderName ? "border-red-500" : ""}
                        />
                        {errors.cardholderName && (
                          <p className="text-red-500 text-sm mt-1">{errors.cardholderName}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="expiryMonth" className="block text-sm font-medium text-gray-700 mb-2">
                            Month *
                          </label>
                          <select
                            id="expiryMonth"
                            value={paymentData.expiryMonth}
                            onChange={(e) => handleInputChange("expiryMonth", e.target.value)}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.expiry ? "border-red-500" : ""}`}
                          >
                            <option value="">MM</option>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                              <option key={month} value={month.toString().padStart(2, '0')}>
                                {month.toString().padStart(2, '0')}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="expiryYear" className="block text-sm font-medium text-gray-700 mb-2">
                            Year *
                          </label>
                          <select
                            id="expiryYear"
                            value={paymentData.expiryYear}
                            onChange={(e) => handleInputChange("expiryYear", e.target.value)}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.expiry ? "border-red-500" : ""}`}
                          >
                            <option value="">YYYY</option>
                            {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(year => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                            CVV *
                          </label>
                          <Input
                            id="cvv"
                            value={paymentData.cvv}
                            onChange={(e) => handleInputChange("cvv", e.target.value)}
                            placeholder="123"
                            maxLength="4"
                            className={errors.cvv ? "border-red-500" : ""}
                          />
                          {errors.cvv && (
                            <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                          )}
                        </div>
                      </div>
                      {errors.expiry && (
                        <p className="text-red-500 text-sm">{errors.expiry}</p>
                      )}
                    </div>

                    {/* Billing Address */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Billing Address</h3>
                      
                      <div>
                        <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700 mb-2">
                          Address *
                        </label>
                        <Input
                          id="billingAddress"
                          value={paymentData.billingAddress}
                          onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                          placeholder="Street address"
                          className={errors.billingAddress ? "border-red-500" : ""}
                        />
                        {errors.billingAddress && (
                          <p className="text-red-500 text-sm mt-1">{errors.billingAddress}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="billingCity" className="block text-sm font-medium text-gray-700 mb-2">
                            City *
                          </label>
                          <Input
                            id="billingCity"
                            value={paymentData.billingCity}
                            onChange={(e) => handleInputChange("billingCity", e.target.value)}
                            placeholder="City"
                            className={errors.billingCity ? "border-red-500" : ""}
                          />
                          {errors.billingCity && (
                            <p className="text-red-500 text-sm mt-1">{errors.billingCity}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="billingState" className="block text-sm font-medium text-gray-700 mb-2">
                            State
                          </label>
                          <Input
                            id="billingState"
                            value={paymentData.billingState}
                            onChange={(e) => handleInputChange("billingState", e.target.value)}
                            placeholder="State"
                          />
                        </div>
                        <div>
                          <label htmlFor="billingZip" className="block text-sm font-medium text-gray-700 mb-2">
                            ZIP Code *
                          </label>
                          <Input
                            id="billingZip"
                            value={paymentData.billingZip}
                            onChange={(e) => handleInputChange("billingZip", e.target.value)}
                            placeholder="ZIP code"
                            className={errors.billingZip ? "border-red-500" : ""}
                          />
                          {errors.billingZip && (
                            <p className="text-red-500 text-sm mt-1">{errors.billingZip}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="billingCountry" className="block text-sm font-medium text-gray-700 mb-2">
                          Country
                        </label>
                        <select
                          id="billingCountry"
                          value={paymentData.billingCountry}
                          onChange={(e) => handleInputChange("billingCountry", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Select Country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="AU">Australia</option>
                          <option value="DE">Germany</option>
                          <option value="FR">France</option>
                          <option value="JP">Japan</option>
                          <option value="IN">India</option>
                        </select>
                      </div>
                    </div>

                    {/* Save Card Option */}
                    <div className="flex items-center">
                      <input
                        id="saveCard"
                        type="checkbox"
                        checked={paymentData.saveCard}
                        onChange={(e) => handleInputChange("saveCard", e.target.checked)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-700">
                        Save this card for future payments
                      </label>
                    </div>
                  </>
                )}

                {paymentMethod === "paypal" && (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">You will be redirected to PayPal to complete your payment.</p>
                    <Button
                      type="button"
                      className="bg-blue-500 hover:bg-blue-600"
                      onClick={() => {
                        // Simulate PayPal redirect
                        alert("Redirecting to PayPal...");
                      }}
                    >
                      Continue with PayPal
                    </Button>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-end space-x-4">
                  <Button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="bg-gray-500 hover:bg-gray-600"
                    disabled={isProcessing}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Pay ${eventData.price}
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPayment; 