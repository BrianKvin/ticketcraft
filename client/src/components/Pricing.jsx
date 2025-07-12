import React, { useState } from "react";
import {
  Check,
  X,
  Star,
  Shield,
  Zap,
  Users,
  Smartphone,
  BarChart3,
  Headphones,
  Globe,
  CreditCard,
  Clock,
} from "lucide-react";
import Button from "./common/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./common/Card";
import Badge from "./common/Badge";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Free",
      price: { monthly: "0", yearly: "0" },
      description: "Perfect for getting started",
      features: [
        "Up to 50 attendees",
        "Basic event management",
        "Email support",
        "Standard templates",
        "Basic analytics",
      ],
      limitations: ["Limited customization", "EventHub branding"],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Pro",
      price: { monthly: "29", yearly: "290" },
      unit: billingCycle === "monthly" ? "per month" : "per year",
      description: "For growing events and organizations",
      features: [
        "Unlimited attendees",
        "Advanced event management",
        "Priority support",
        "Custom branding",
        "Advanced analytics",
        "Payment processing",
        "Marketing tools",
        "Mobile app access",
        "QR code scanning",
        "Real-time notifications",
      ],
      limitations: [],
      cta: "Start Pro Trial",
      popular: true,
      savings: billingCycle === "yearly" ? "Save 17%" : null,
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      description: "For large-scale events and organizations",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom integrations",
        "White-label solution",
        "Advanced security",
        "SLA guarantee",
        "Custom reporting",
        "API access",
        "Multi-venue support",
        "Advanced automation",
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const keyFeatures = [
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "QR scanning, event management on-the-go",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and performance tracking",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Instant help when you need it most",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with audiences worldwide",
    },
    {
      icon: CreditCard,
      title: "Competitive Pricing",
      description: "Among the most affordable in the industry",
    },
    {
      icon: Clock,
      title: "Quick Setup",
      description: "Get started in minutes, not hours",
    },
  ];

  const transparencyFeatures = [
    {
      icon: Shield,
      title: "No Hidden Fees",
      description:
        "What you see is what you pay. No surprise charges or hidden costs.",
    },
    {
      icon: Zap,
      title: "Transparent Processing",
      description: "Clear breakdown of all payment processing fees upfront.",
    },
    {
      icon: Users,
      title: "Pay as You Grow",
      description: "Only pay for what you use. Scale up or down anytime.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-indigo-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('../../assets/images/concert.jpg')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge
            variant="outline"
            className="mb-4 bg-white/10 text-white border-white/20"
          >
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Simple pricing.
            <span className="block text-blue-300">No surprises.</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We believe in honest pricing. No hidden fees, no confusing tiers.
            Just straightforward pricing that grows with your success.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            Start Creating for Free
          </Button>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose TicketCraft?</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to create, manage, and grow your events
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {transparencyFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Start free, scale as you grow. Upgrade or downgrade anytime.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 bg-gray-100 rounded-lg p-1 w-fit mx-auto">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === "yearly"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Yearly
                {billingCycle === "yearly" && (
                  <Badge className="ml-2 bg-green-500 text-white text-xs">
                    Save 17%
                  </Badge>
                )}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "border-primary shadow-lg scale-105"
                    : "hover:scale-105"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                {plan.savings && (
                  <div className="absolute -top-4 right-4">
                    <Badge className="bg-green-500 text-white text-xs">
                      {plan.savings}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {plan.price[billingCycle] === "Custom"
                        ? plan.price[billingCycle]
                        : `$${plan.price[billingCycle]}`}
                    </span>
                    {plan.unit && (
                      <span className="text-muted-foreground ml-2">
                        /{plan.unit}
                      </span>
                    )}
                  </div>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-center">
                        <X className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {limitation}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full mt-8"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Are there any setup fees?</h3>
              <p className="text-muted-foreground text-sm">
                No setup fees, no monthly minimums. You only pay when you sell
                tickets.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Can I change plans anytime?
              </h3>
              <p className="text-muted-foreground text-sm">
                Yes, upgrade or downgrade your plan at any time with no
                penalties.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-muted-foreground text-sm">
                We accept all major credit cards, PayPal, and bank transfers for
                Enterprise plans.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, all paid plans include a 14-day free trial with full access
                to features.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
