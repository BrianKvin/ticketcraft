import React from "react";
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RequirementsChecklist = () => {
  const requirements = [
    {
      category: "Essential Requirements",
      items: [
        "Valid business email address",
        "Event details (name, date, venue)",
        "High-quality event images",
        "Clear event description",
        "Pricing and capacity information",
      ],
    },
    {
      category: "Payment Setup",
      items: [
        "Bank account for payouts",
        "Tax identification number",
        "Business registration (if applicable)",
        "Valid government-issued ID",
      ],
    },
    {
      category: "Marketing Materials",
      items: [
        "Event banner/cover image (1920x1080px)",
        "Logo or branding assets",
        "Social media content plan",
        "Email marketing list (optional)",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What You'll Need</h2>
          <p className="text-muted-foreground text-lg">
            Make sure you have these items ready before you start
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {requirements.map((req, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{req.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {req.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsChecklist;
