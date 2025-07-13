import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Smartphone,
  BarChart3,
  Users,
  QrCode,
  Bell,
  CreditCard,
  ChevronDown,
  Settings,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Button from "../common/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../common/Card";
import ticketImage from "../../assets/images/ticket.jpg";

const EventPage = () => {
  const navigate = useNavigate();

  const handleContinueToForm = () => {
    navigate("/events/create");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Background Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="overflow-hidden">
            <div
              className="h-[28rem] bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${ticketImage})`,
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Create Your Event
                  </h1>
                  <p className="text-xl opacity-90">
                    Where memorable experiences begin
                  </p>
                </div>
              </div>
            </div>
            <CardContent className="p-8 text-center">
              <p className="text-lg text-muted-foreground">
                Effortlessly manage your events, scan QR codes, and reach a
                wider audience — all in one place.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Three Horizontal Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Customize Freely</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Full control over your event settings, branding, and
                  registration forms. Make it uniquely yours.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-green-500" />
                </div>
                <CardTitle className="text-xl">Mobile Power</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seamlessly manage your events via our mobile app. Check-in
                  attendees with QR codes on the go.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl">Audience Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Powerful tools to attract and engage attendees. From marketing
                  to analytics, we've got you covered.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rectangular Feature Card */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center p-12">
            <CardContent className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Your event, your brand, your rules.
              </h2>
              <p className="text-xl text-muted-foreground">
                From registration to check-in, we've got you covered.
              </p>
              <p className="text-lg text-muted-foreground">
                Take control of every aspect of your event experience with our
                comprehensive platform.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Icons Row */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">QR Check-in</h3>
              <p className="text-sm text-muted-foreground">
                Fast, contactless entry
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-semibold mb-2">Real-Time Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Track performance live
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold mb-2">Instant Notifications</h3>
              <p className="text-sm text-muted-foreground">
                Stay updated always
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Ticketing</h3>
              <p className="text-sm text-muted-foreground">
                Custom pricing options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text Card */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-16 h-16 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-16 h-2 bg-primary/20 rounded mx-auto"></div>
                    <div className="w-20 h-2 bg-primary/30 rounded mx-auto"></div>
                    <div className="w-12 h-2 bg-primary/20 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">
                  Mobile App in Action
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our mobile app puts the power of event management in your
                  pocket. Scan QR codes, check in attendees, monitor real-time
                  stats, and handle last-minute changes — all from your
                  smartphone.
                </p>
                <p className="text-muted-foreground">
                  Whether you're at the venue or on the move, stay connected to
                  your event with push notifications and instant updates.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Additional Text Card */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center p-12 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Join thousands of creators already growing their events with us.
              </h2>
              <p className="text-xl text-muted-foreground">
                Your audience is waiting.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Button
            onClick={handleContinueToForm}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Continue to Create Event
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Ready to bring your vision to life? Let's get started.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventPage;
