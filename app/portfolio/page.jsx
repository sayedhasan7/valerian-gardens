import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import HeroVideoSection from "../../components/HeroVideoSection";
import GallerySection from "../../components/GallerySection";
import LeaveSVG from "../../components/LeaveSVG";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import CTASection from "@/components/CTASection";

export default function PortfolioPage() {
  const item = {
    title: "Portfolio",
    breadcrumb: [{ name: "Home", link: "/" }, { name: "Portfolio", link: "/portfolio" }],
    mobileVideo: "https://res.cloudinary.com/sayed12m/video/upload/v1763787211/flwqsv6s2ecqyym8k50k.mp4",
    video:
      "https://res.cloudinary.com/sayed12m/video/upload/v1763787211/flwqsv6s2ecqyym8k50k.mp4", // ⭐ replace with your video
    desc: "Transform your space with easy home gardening tips. Grow fresh vegetables, herbs, and flowers at home—perfect for beginners.",
  };
  const projects = [
    {
      title: "Contemporary Garden",
      category: "Residential",
      image: "/garden-1.jpeg",
      description: "A contemporary family garden featuring sustainable planting and wildlife-friendly design elements."
    },
    {
      title: "Woodland Lady’s Delight ( Brentford )",
      category: "Urban Design",
      image: "/garden-2.jpeg",
      description: "Transformed a small city courtyard into a peaceful retreat with layered planting and natural materials."
    },
    {
      title: "Jubilee Celebration ( Hounslow )",
      category: "Ecological",
      image: "/garden-3.jpeg",
      description: "A naturalistic garden design that supports biodiversity and creates year-round visual interest."
    },
  ];

  const gardenImages = [
    { src: "/flower-1.jpeg", alt: "Garden detail 1" },
    { src: "/flower-2.jpeg", alt: "Garden detail 2" },
    { src: "/flower-3.jpeg", alt: "Garden detail 3" },
    { src: "/flower-4.jpeg", alt: "Garden detail 4" },
    { src: "/flower-5.jpeg", alt: "Garden detail 5" },
    { src: "/flower-6.jpeg", alt: "Garden detail 6" },
    { src: "/flower-7.jpeg", alt: "Garden detail 7" },
    { src: "/flower-8.jpeg", alt: "Garden detail 8" },
    { src: "/flower-9.jpeg", alt: "Garden detail 9" }
  ];

  return (
    <div className="min-h-screen bg-[#FDF6ED] overflow-hidden">
      {/* Hero Section */}
      <HeroVideoSection {...item} />
      <GallerySection secondLeafVisible={true} />

      {/* Featured Projects */}
      <section className="py-20 px-6 relative">
        <LeaveSVG data-aos="fade-in" className="absolute hidden lg:block left-0 -top-10 rotate-45  z-0" />
        <LeaveSVG data-aos="fade-in" className="absolute lg:hidden -top-24 right-0 lg:-top-10 rotate-45 scale-[-1] z-0" />
        <LeaveSVG data-aos="fade-in" className="absolute hidden lg:block right-0 -top-10 rotate-45 scale-[-1] z-0" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-600 font-semibold mb-3 tracking-wide">FEATURED WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#404A3D]">Recent Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <span className="text-yellow-400 text-sm font-semibold mb-2">{project.category}</span>
                  <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      {/* <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-600 font-semibold mb-3 tracking-wide">GALLERY</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#404A3D]">Garden Details</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {gardenImages.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl aspect-square group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-[#8b8e7c] rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-[#404A3D] mb-6">Let&apos;s Create Your Dream Garden</h2>
          <p className="text-gray-800 mb-8 text-lg">
            Every garden tells a story. Let us help you tell yours.
          </p>
          <button className="bg-[#8b8e7c] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#4a7441] transition-all">
            Start Your Project
          </button>
        </div>
      </section> */}
      {/* <div className="mb-6">
      <CTASection/>
      </div>
      <GlobalPresenceSection /> */}
    </div>
  );
}
