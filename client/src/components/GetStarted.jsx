import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import GetStartedHero from "../components/GetStartedHero";
import BenefitsSection from "../components/BenefitsSection";
import StepsGuide from "../components/StepsGuide";
import RequirementsChecklist from "../components/RequirementsChecklist";
import GetStartedCTA from "../components/GetStartedCTA";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GetStartedHero />
      <BenefitsSection />
      <StepsGuide />
      <RequirementsChecklist />
      <GetStartedCTA />
      <Footer />
    </div>
  );
};

export default GetStarted;
