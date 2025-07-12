import React from "react";
import { CheckCircle, Users, BarChart, HeadphonesIcon } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Quick Setup",
      description:
        "Get your event live in under an hour with our streamlined process.",
    },
    {
      icon: Users,
      title: "Built-in Audience",
      description:
        "Tap into our community of event-goers actively looking for experiences.",
    },
    {
      icon: BarChart,
      title: "Real-time Analytics",
      description:
        "Track ticket sales, attendee engagement, and revenue in real-time.",
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Support",
      description:
        "Get help from our event specialists throughout your journey.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose EventHub?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
