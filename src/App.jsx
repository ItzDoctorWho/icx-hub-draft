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
import InstagramEmbed from "./components/InstagramEmbed";
const App = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchOpportunities({ setOpportunities, setLoading, setError });
  }, []); // Empty dependency array

  const instagramVideoUrls = [
    "https://www.instagram.com/reel/DBosck_N87a/", // Replace with actual URLs
    "https://www.instagram.com/reel/DCMvc5RN6MN/",
    "https://www.instagram.com/reel/DBRr4pCMjv5/",
  ];

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
        <InstagramEmbed embedUrls={instagramVideoUrls} />
        <Footer />
      </div>
    </>
  );
};

export default App;
