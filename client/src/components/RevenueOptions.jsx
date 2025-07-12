import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreditCard,
  Building2,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Calculator,
  Users,
  HelpCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const RevenueOptions = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = (useState < string) | (null > null);

  const platformOption = {
    title: "Platform-Managed Payments",
    subtitle: "We handle everything for you",
    icon: Building2,
    color: "bg-blue-500",
    description:
      "EventHub processes all payments, deducts our fees, and pays you on a regular schedule. Perfect for organizers who want simplicity and prefer to focus on their events.",
    benefits: [
      "Zero setup required - start selling immediately",
      "Automatic payment processing and reconciliation",
      "Built-in fraud protection and dispute handling",
      "Regular, predictable payouts (weekly or monthly)",
      "Comprehensive financial reporting and analytics",
      "24/7 customer support for payment issues",
    ],
    requirements: [
      "Valid business registration or tax ID",
      "Bank account for receiving payouts",
      "Compliance with our terms of service",
    ],
    fees: "5% + $0.30 per transaction",
    payoutSchedule: "Weekly (every Friday) or Monthly (1st of each month)",
    bestFor: "New organizers, small events, or those who prefer simplicity",
  };

  const organizerOption = {
    title: "Organizer-Managed Payments",
    subtitle: "Connect your own payment processor",
    icon: CreditCard,
    color: "bg-green-500",
    description:
      "Connect your own Stripe, PayPal, or other payment processor. Payments are split instantly, and you receive funds directly. We invoice our fees separately.",
    benefits: [
      "Instant access to your revenue (minus our fees)",
      "Use your existing payment processor and rates",
      "Direct customer relationship and data ownership",
      "Flexible fee payment options (monthly invoice or auto-deduct)",
      "Advanced customization and branding options",
      "Lower overall transaction costs for high-volume events",
    ],
    requirements: [
      "Active Stripe, PayPal Business, or similar account",
      "Technical integration or developer assistance",
      "Monthly revenue minimum of $1,000",
      "Established business with payment processing history",
    ],
    fees: "3% platform fee (invoiced monthly)",
    payoutSchedule: "Instant (direct to your payment processor)",
    bestFor:
      "Established organizers, large events, or those with existing payment setups",
  };

  const faqs = [
    {
      id: "switch",
      question: "Can I switch between payment options later?",
      answer:
        "Yes! You can switch between options at any time. For existing events, the change will apply to new bookings. We'll help you through the transition process and ensure no disruption to your current events.",
    },
    {
      id: "fees",
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees! Platform-managed: 5% + $0.30 per transaction covers everything. Organizer-managed: 3% platform fee plus your payment processor's rates. All fees are clearly disclosed upfront.",
    },
    {
      id: "setup",
      question: "How long does setup take?",
      answer:
        "Platform-managed: Instant setup, start selling immediately. Organizer-managed: 1-3 business days for payment processor integration and testing.",
    },
    {
      id: "support",
      question: "What support do you provide?",
      answer:
        "We offer personalized onboarding calls, step-by-step setup guides, email support, and live chat. Our team helps you choose the right option and handles technical integration if needed.",
    },
    {
      id: "minimum",
      question: "Is there a minimum event size or revenue requirement?",
      answer:
        "Platform-managed: No minimums. Organizer-managed: $1,000 monthly revenue minimum to ensure cost-effectiveness of the separate billing process.",
    },
    {
      id: "international",
      question: "Do you support international organizers?",
      answer:
        "Yes! Platform-managed supports 30+ countries. Organizer-managed works wherever your payment processor operates. Contact us for specific country availability.",
    },
  ];

  const supportOptions = [
    {
      icon: Phone,
      title: "Personalized Onboarding Call",
      description:
        "Schedule a 30-minute call with our team to discuss your needs and choose the best option.",
      action: "Schedule Call",
    },
    {
      icon: MessageCircle,
      title: "Live Chat Support",
      description:
        "Get instant answers to your questions from our support team during business hours.",
      action: "Start Chat",
    },
    {
      icon: Mail,
      title: "Email Support",
      description:
        "Send us detailed questions and receive comprehensive responses within 4 hours.",
      action: "Send Email",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            Revenue Management
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your
            <span className="block text-primary">Payment Strategy</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We offer two flexible revenue handling options designed to meet your
            business needs. Whether you prefer simplicity or control, we have
            the perfect solution for your events.
          </p>
        </div>
      </section>

      {/* Comparison Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Platform-Managed Option */}
            <Card className="relative border-2 border-blue-200 bg-blue-50/50">
              <div className="absolute -top-3 left-6">
                <Badge className="bg-blue-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 ${platformOption.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <platformOption.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">
                  {platformOption.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {platformOption.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  {platformOption.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {platformOption.benefits
                      .slice(0, 3)
                      .map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Platform Fee</span>
                    <span className="text-xl font-bold text-blue-600">
                      {platformOption.fees}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Payout Schedule
                    </span>
                    <span className="text-sm font-medium">
                      {platformOption.payoutSchedule}
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600"
                  size="lg"
                >
                  Choose Platform-Managed
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Organizer-Managed Option */}
            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 ${organizerOption.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <organizerOption.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">
                  {organizerOption.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {organizerOption.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  {organizerOption.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center">
                    <Zap className="w-4 h-4 text-green-500 mr-2" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {organizerOption.benefits
                      .slice(0, 3)
                      .map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Platform Fee</span>
                    <span className="text-xl font-bold text-green-600">
                      {organizerOption.fees}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Payout Schedule
                    </span>
                    <span className="text-sm font-medium">
                      {organizerOption.payoutSchedule}
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-green-500 hover:bg-green-600"
                  size="lg"
                >
                  Choose Organizer-Managed
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Detailed Comparison
          </h2>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-8">
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">
                        Platform-Managed
                      </th>
                      <th className="text-center p-4 font-semibold">
                        Organizer-Managed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4 font-medium">Setup Time</td>
                      <td className="p-4 text-center">
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800"
                        >
                          Instant
                        </Badge>
                      </td>
                      <td className="p-4 text-center">
                        <Badge
                          variant="secondary"
                          className="bg-yellow-100 text-yellow-800"
                        >
                          1-3 Days
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-t bg-muted/30">
                      <td className="p-4 font-medium">Payment Processing</td>
                      <td className="p-4 text-center">✅ Handled by us</td>
                      <td className="p-4 text-center">🔧 Your processor</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 font-medium">Fraud Protection</td>
                      <td className="p-4 text-center">✅ Included</td>
                      <td className="p-4 text-center">
                        🔧 Your responsibility
                      </td>
                    </tr>
                    <tr className="border-t bg-muted/30">
                      <td className="p-4 font-medium">Customer Data</td>
                      <td className="p-4 text-center">📊 Shared access</td>
                      <td className="p-4 text-center">✅ Full ownership</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 font-medium">Payout Speed</td>
                      <td className="p-4 text-center">📅 Scheduled</td>
                      <td className="p-4 text-center">⚡ Instant</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="requirements" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Building2 className="w-5 h-5 mr-2 text-blue-500" />
                      Platform-Managed Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {platformOption.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="w-5 h-5 mr-2 text-green-500" />
                      Organizer-Managed Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {organizerOption.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="mt-8">
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-600">
                        Platform-Managed Pricing
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-3xl font-bold text-blue-600">
                        5% + $0.30
                      </div>
                      <p className="text-muted-foreground">
                        per successful transaction
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Includes:</span>
                        </div>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• Payment processing</li>
                          <li>• Fraud protection</li>
                          <li>• Customer support</li>
                          <li>• Financial reporting</li>
                          <li>• Dispute handling</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-600">
                        Organizer-Managed Pricing
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-3xl font-bold text-green-600">
                        3%
                      </div>
                      <p className="text-muted-foreground">
                        platform fee (invoiced monthly)
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Plus your processor's rates:</span>
                        </div>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• Stripe: ~2.9% + $0.30</li>
                          <li>• PayPal: ~2.9% + $0.30</li>
                          <li>• Square: ~2.6% + $0.10</li>
                          <li>• Custom rates for volume</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-muted/30">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calculator className="w-5 h-5 mr-2" />
                      Cost Comparison Example
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">For a $100 ticket sale:</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">
                          Platform-Managed
                        </h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Ticket price:</span>
                            <span>$100.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Platform fee (5%):</span>
                            <span>-$5.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Transaction fee:</span>
                            <span>-$0.30</span>
                          </div>
                          <div className="flex justify-between font-semibold pt-2 border-t">
                            <span>You receive:</span>
                            <span className="text-blue-600">$94.70</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">
                          Organizer-Managed
                        </h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Ticket price:</span>
                            <span>$100.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Platform fee (3%):</span>
                            <span>-$3.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Stripe fee (2.9% + $0.30):</span>
                            <span>-$3.20</span>
                          </div>
                          <div className="flex justify-between font-semibold pt-2 border-t">
                            <span>You receive:</span>
                            <span className="text-green-600">$93.80</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="timeline" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-blue-500" />
                      Platform-Managed Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                          1
                        </div>
                        <div>
                          <div className="font-semibold">Sign Up & Verify</div>
                          <div className="text-sm text-muted-foreground">
                            5 minutes
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                          2
                        </div>
                        <div>
                          <div className="font-semibold">Create Your Event</div>
                          <div className="text-sm text-muted-foreground">
                            15 minutes
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                          ✓
                        </div>
                        <div>
                          <div className="font-semibold">Start Selling</div>
                          <div className="text-sm text-muted-foreground">
                            Immediately
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-green-500" />
                      Organizer-Managed Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                          1
                        </div>
                        <div>
                          <div className="font-semibold">Sign Up & Apply</div>
                          <div className="text-sm text-muted-foreground">
                            Day 1
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                          2
                        </div>
                        <div>
                          <div className="font-semibold">
                            Payment Integration
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Day 1-2
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                          3
                        </div>
                        <div>
                          <div className="font-semibold">Testing & Go Live</div>
                          <div className="text-sm text-muted-foreground">
                            Day 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Collapsible
                key={faq.id}
                open={openFaq === faq.id}
                onOpenChange={() =>
                  setOpenFaq(openFaq === faq.id ? null : faq.id)
                }
              >
                <Card>
                  <CollapsibleTrigger className="w-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between text-left">
                        <h3 className="font-semibold">{faq.question}</h3>
                        {openFaq === faq.id ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Need Help Deciding?</h2>
            <p className="text-xl text-muted-foreground">
              Our team is here to help you choose the best revenue option for
              your events
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {option.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose your revenue option and start creating amazing events today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/create-event")}
              className="text-lg px-8"
            >
              Start with Platform-Managed
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Apply for Organizer-Managed
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Questions?{" "}
            <button className="text-primary hover:underline">
              Contact our team
            </button>{" "}
            for personalized guidance
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RevenueOptions;
