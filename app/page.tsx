"use client";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import ServicesSection from "@/components/ServicesSection";
import ChooseSection from "@/components/ChooseSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import HistorySection from "@/components/HistorySection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <PartnersSection />
      <ServicesSection />
      <ChooseSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      <HistorySection />
      <GlobalPresenceSection />
      {/* <BlogSection /> */}
      <Footer />
    </>
  );
}
