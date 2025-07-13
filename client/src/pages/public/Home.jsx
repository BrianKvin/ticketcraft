import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
// import EventTypes from "./EventTypes";
import EventsSection from "../../components/common/EventsSection";
import DestinationsSection from "./DestinationSection";
import NewsletterSection from "./NewsLetterSection";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Fixed Hero Background */}
      <Hero />

      {/* Scrolling Content */}
      <div className="relative z-10" style={{ marginTop: "100vh" }}>
        <div className="bg-white">
          <AboutSection />
          <EventsSection />
          <DestinationsSection />
          {/* <EventTypes /> */}
          <NewsletterSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
