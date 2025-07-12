import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./common/Button";
import { useNavigate } from "react-router-dom";

const GetStartedCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Create Your Event?</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Join thousands of successful event organizers who trust EventHub
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate("/events/create")}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Start Creating Event
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            Talk to an Expert
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Need help? Our support team is available 24/7 to assist you.
        </p>
      </div>
    </section>
  );
};

export default GetStartedCTA;
