import React from "react";
import Navabar from "../../components/common/Navabar";
import Footer from "../../components/common/Footer";
import Hero from "./Hero";
import EventTypes from "./EventTypes";
import EventsSection from "../../components/common/EventsSection";
import DestinationsSection from "./DestinationSection";
import NewsletterSection from "./NewsLetterSection";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <Navabar />
      <Hero />
      <EventTypes />
      <EventsSection />
      <DestinationsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};
export default Home;

