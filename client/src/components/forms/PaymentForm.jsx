import React, { useState } from "react";
import { CreditCard, Lock, ArrowLeft } from "lucide-react";
import Button from "../common/Button";
import Input from "../common/Input";
import Label from "../common/Label";
import { RadioGroup, RadioGroupItem } from "../common/RadioGroup";
import { Card, CardContent, CardHeader, CardTitle } from "../common/Card";
import { Event, RegistrationData, PaymentSummary } from "../types/event";

const PaymentForm = ({
  event,
  registrationData,
  onSuccess,
  onBack,
  onCancel,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });
  const [billingDetails, setBillingDetails] = useState({
    address: "",
    city: "",
    zipCode: "",
    country: "United States",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate payment summary
  const paymentSummary = {
    subtotal: event.price,
    tax: Math.round(event.price * 0.08), // 8% tax
    total: event.price + Math.round(event.price * 0.08),
    currency: "USD",
  };

  const handleCardInputChange = () => {
    // Format card number with spaces
    if (field === "cardNumber") {
      const formatted = value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
      if (formatted.length <= 19) {
        // 16 digits + 3 spaces
        setCardDetails((prev) => ({ ...prev, [field]: formatted }));
      }
    }
    // Format expiry date with slash
    else if (field === "expiryDate") {
      let formatted = value.replace(/\D/g, "");
      if (formatted.length >= 2) {
        formatted = formatted.substring(0, 2) + "/" + formatted.substring(2, 4);
      }
      if (formatted.length <= 5) {
        setCardDetails((prev) => ({ ...prev, [field]: formatted }));
      }
    }
    // Limit CVV to 3-4 digits
    else if (field === "cvv") {
      const formatted = value.replace(/\D/g, "").substring(0, 4);
      setCardDetails((prev) => ({ ...prev, [field]: formatted }));
    } else {
      setCardDetails((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleBillingInputChange = () => {
    setBillingDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handlePaymentSubmit = async () => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    try {
      // Here you would integrate with Stripe, PayPal, or other payment providers
      console.log("Processing payment...", {
        event: event.title,
        amount: paymentSummary.total,
        paymentMethod,
        cardDetails: paymentMethod === "card" ? cardDetails : null,
        billingDetails,
        registrationData,
      });

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For demo purposes, always succeed
      onSuccess();
    } catch (error) {
      console.error("Payment failed:", error);
      // Handle payment error
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handlePaymentSubmit} className="space-y-6">
      {/* Payment Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Payment Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Event Registration</span>
              <span>${paymentSummary.subtotal}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Tax</span>
              <span>${paymentSummary.tax}</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>${paymentSummary.total}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Payment Method</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label
                htmlFor="card"
                className="flex items-center cursor-pointer"
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Credit/Debit Card
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal" className="cursor-pointer">
                PayPal
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Card Payment Form */}
      {paymentMethod === "card" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              Card Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="cardNumber">Card Number *</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={cardDetails.cardNumber}
                onChange={(e) =>
                  handleCardInputChange("cardNumber", e.target.value)
                }
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiryDate">Expiry Date *</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  value={cardDetails.expiryDate}
                  onChange={(e) =>
                    handleCardInputChange("expiryDate", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV *</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={cardDetails.cvv}
                  onChange={(e) => handleCardInputChange("cvv", e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="cardholderName">Cardholder Name *</Label>
              <Input
                id="cardholderName"
                placeholder="John Doe"
                value={cardDetails.cardholderName}
                onChange={(e) =>
                  handleCardInputChange("cardholderName", e.target.value)
                }
                required
              />
            </div>

            {/* Billing Address */}
            <div className="pt-4 border-t">
              <h4 className="font-semibold mb-3">Billing Address</h4>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    placeholder="123 Main Street"
                    value={billingDetails.address}
                    onChange={(e) =>
                      handleBillingInputChange("address", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      placeholder="New York"
                      value={billingDetails.city}
                      onChange={(e) =>
                        handleBillingInputChange("city", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      placeholder="10001"
                      value={billingDetails.zipCode}
                      onChange={(e) =>
                        handleBillingInputChange("zipCode", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* PayPal Option */}
      {paymentMethod === "paypal" && (
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                You will be redirected to PayPal to complete your payment
                securely.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  Amount to be charged: <strong>${paymentSummary.total}</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Security Notice */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center text-sm text-gray-600">
          <Lock className="h-4 w-4 mr-2" />
          Your payment information is encrypted and secure. We never store your
          card details.
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between pt-6">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          disabled={isProcessing}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Registration
        </Button>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isProcessing}
          >
            Cancel
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
              `Pay $${paymentSummary.total}`
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
