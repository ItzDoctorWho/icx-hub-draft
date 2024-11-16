import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import axios from "axios";
import { useEffect, useState } from "react";
import fetchOpportunities from "./controllers/opportunities";

const App = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchOpportunities({ setOpportunities, setLoading, setError });
  }, []); // Empty dependency array

  return (
    <>
      <Navbar />
      <div className="max-w-full mx-auto  w-full">
        <HeroSection />
        <Pricing />
        <Testimonials />
        <FeatureSection
          opportunities={opportunities}
          loading={loading}
          error={error}
        />

        <Footer />
      </div>
    </>
  );
};

export default App;
