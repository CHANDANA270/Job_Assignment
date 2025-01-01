import React from "react";
import Navbar from "./componets/Navbar";
import FeaturesSection from "./componets/FeatureSection";

import FAQSection from "./componets/FaqSection";
import HeroSection from "./componets/HeroSection";
import CompanyLogo from "./componets/CompanyLogo";
import Testimonial from "./componets/Testimonial";
import Showcase from "./componets/Showcase";
import FeatureCards from "./componets/FeatureCard";
import Footer from "./componets/Footer";
import TrialBanner from "./componets/Banner";
import BlogPosts from "./componets/Blog";
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CompanyLogo />
      <FeaturesSection />
      <Testimonial />
      <Showcase />
      <FeatureCards />
      <FAQSection />
      <BlogPosts />
      <TrialBanner />
      <Footer />
    </div>
  );
};

export default App;
