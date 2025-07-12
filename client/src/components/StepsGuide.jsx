import React from "react";
import { Calendar, Users, CreditCard, BarChart, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const StepsGuide = () => {
  const steps = [
    {
      number: "01",
      title: "Plan Your Event",
      description:
        "Define your event details, target audience, and goals. Consider venue, date, capacity, and pricing strategy.",
      time: "30 minutes",
      icon: Calendar,
    },
    {
      number: "02",
      title: "Create Your Event",
      description:
        "Use our intuitive event builder to set up your event page with descriptions, images, and ticket types.",
      time: "15 minutes",
      icon: Users,
    },
    {
      number: "03",
      title: "Set Up Payments",
      description:
        "Configure your payment settings and payout preferences. We handle all payment processing securely.",
      time: "10 minutes",
      icon: CreditCard,
    },
    {
      number: "04",
      title: "Launch & Promote",
      description:
        "Publish your event and start promoting it through our marketing tools and social media integration.",
      time: "Ongoing",
      icon: BarChart,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How to Get Started</h2>
          <p className="text-muted-foreground text-lg">
            Follow these simple steps to launch your first event
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <step.icon className="w-6 h-6 text-primary" />
                      {step.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      <Clock className="w-3 h-3" />
                      {step.time}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsGuide;
