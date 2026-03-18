'use client';
import Image from "next/image";
import Navbar from "./Components/Navbar";
import ServicesSection from "./Components/ServicesSection";
import CtaBanner from "./Components/CtaBanner";
import PricingSection from "./Components/PricingSection";
import ContactSection from "./Components/ContactSection";
import DisclaimerSection from "./Components/DisclaimerSection";

import Footer from "./Components/Footer";
import HeroBanner from "./Components/HeroBanner";
import FeatureCards from "./Components/FeatureCards";



export default function Home() {
  return (
    <>
     <Navbar />
     <HeroBanner />
     <FeatureCards />
    <ServicesSection />
     <CtaBanner />
     {/* <PricingSection />
     <ContactSection />
     <DisclaimerSection /> */}
     {/* <Footer />  */}
    </>
  );
}
