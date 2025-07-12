import React from "react";
import { Check, X, Star, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
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
      price: "2.5",
      unit: "per ticket sold",
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
      ],
      limitations: [],
      cta: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
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
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
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

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, Transparent
            <span className="block text-primary">No Surprises</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We believe in honest pricing. No hidden fees, no confusing tiers.
            Just straightforward pricing that grows with your success.
          </p>
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
            <p className="text-muted-foreground text-lg">
              Start free, scale as you grow. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? "border-primary shadow-lg scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {plan.price === "Custom" ? plan.price : `$${plan.price}`}
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
