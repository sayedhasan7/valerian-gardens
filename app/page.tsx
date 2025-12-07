"use client";

import { Suspense } from "react";
import AOSWrapper from "@/components/AOSWrapper";
import Preloader from "@/components/PreLoader";
import PartnersSection from "@/components/PartnersSection";
import TextHeroSection from "@/components/TextHeroSection"
// Standard Imports (No SSR: false)
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ChooseSection from "@/components/ChooseSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteSection from "@/components/QuoteSection";
// import HistorySection from "@/components/HistorySection"; // Uncomment if needed
// import GlobalPresenceSection from "@/components/GlobalPresenceSection"; // Uncomment if needed

export default function Page() {
  return (
    <Suspense fallback={<></>}>
      <AOSWrapper>
        <HeroSection />
        <TextHeroSection/>
        <AboutSection />
        {/* <PartnersSection /> */}
        <ServicesSection />
        {/* <FeaturesSection /> */}
        <ChooseSection />
        <GallerySection />
        <TestimonialsSection />
        <QuoteSection />
        {/* <GlobalPresenceSection /> */}
      </AOSWrapper>
    </Suspense>
  );
}