import React from "react";
import Button from "../../components/common/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/common/Card";
import {
  Calendar,
  Users,
  MapPin,
  Trophy,
  Clock,
  Shield,
  Star,
  Headphones,
} from "lucide-react";

const EventHighlight = () => {
  const sampleEvents = [
    {
      title: "Tech Conference 2024",
      date: "Mar 15-17",
      location: "San Francisco",
      icon: Calendar,
    },
    {
      title: "Networking Mixer",
      date: "Apr 5",
      location: "New York",
      icon: Users,
    },
    {
      title: "Workshop Series",
      date: "May 10",
      location: "Virtual",
      icon: Trophy,
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto space-y-16">
      {/* Top Section: Feature Area */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left Side: Primary Content (3/5 width for 60/40 split) */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-primary leading-tight">
                  Plan Your Ideal Gathering
                </h2>
                <p className="text-lg text-muted-foreground">
                  From networking mixers to conferences, we've got you covered
                  with professional tools and seamless experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1 sm:flex-none">
                  Browse All Events
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 sm:flex-none"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side: Event Cards in Columns (2/5 width) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
              {sampleEvents.map((event, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow bg-background/80 backdrop-blur-sm"
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <event.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{event.title}</h3>
                        <div className="text-xs text-muted-foreground mt-1">
                          <div>{event.date}</div>
                          <div>{event.location}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHighlight;
