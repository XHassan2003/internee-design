import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InternshipTracks from "@/components/InternshipTracks";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <InternshipTracks />
      <Stats />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
