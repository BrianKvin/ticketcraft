import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const GetStartedHero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Badge variant="outline" className="mb-4">
          For Event Organizers
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Start Creating
          <span className="block text-primary">Amazing Events</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Everything you need to know to create, promote, and manage successful
          events. From planning to payout, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => navigate("/register")}
            className="text-lg px-8"
          >
            Register Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/create-event")}
            className="text-lg px-8"
          >
            Create Event Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedHero;
