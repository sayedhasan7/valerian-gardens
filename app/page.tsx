"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import AOSWrapper from "@/components/AOSWrapper";
import Preloader from "@/components/PreLoader";
import PartnersSection from "@/components/PartnersSection"
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: false,
  loading: () => <Preloader />,
});

const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), {
  ssr: false,
  loading: () => <Preloader />,
});

const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  ssr: false,
  loading: () => <Preloader />,
});

const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  ssr: false,
  loading: () => <Preloader />,
});

const ChooseSection = dynamic(() => import("@/components/ChooseSection"), {
  ssr: false,
  loading: () => <Preloader />,
});

const GallerySection = dynamic(() => import("@/components/GallerySection"), {
  ssr: false,
  loading: () => <Preloader />,
});

const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), {
  ssr: false,
  loading: () => <Preloader />,
});

const HistorySection = dynamic(() => import("@/components/HistorySection"), {
  ssr: false,
  loading: () => <Preloader />,
});

const QuoteSection = dynamic(() => import("@/components/QuoteSection"), {
  ssr: false,
  loading: () => <Preloader />,
});

const GlobalPresenceSection = dynamic(() => import("@/components/GlobalPresenceSection"), {
  ssr: false,
  loading: () => <Preloader />,
});

// Loading skeleton component
function SectionSkeleton({ height = "400px" }: { height?: string }) {
  return (
    <div
      className="w-full animate-pulse bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
      style={{ height }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          <p className="text-gray-500 text-sm">Loading...</p>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <AOSWrapper>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ChooseSection />
      <GallerySection />
      <TestimonialsSection />
      <QuoteSection />
      {/* <GlobalPresenceSection /> */}
    </AOSWrapper>
  );
}