'use client';
import Image from "next/image";
import Navbar from "./Components/Navbar";
import ServicesSection from "./Components/ServicesSection";
import CtaBanner from "./Components/CtaBanner";

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

    </>
  );
}
