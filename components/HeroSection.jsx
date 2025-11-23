"use client";

import Link from "next/link";

export default function HeroSection() {
  const item = {
    title: "Grow Fresh, Live Fresh",
    title2: "Home Gardening Essentials",
    mobileVideo:"https://res.cloudinary.com/sayed12m/video/upload/v1763787211/flwqsv6s2ecqyym8k50k.mp4",
    video:
      "https://res.cloudinary.com/sayed12m/video/upload/v1763749426/wr4oqn5vpbqssecrbzjn.mp4", // ⭐ replace with your video
    desc: "Transform your space with easy home gardening tips. Grow fresh vegetables, herbs, and flowers at home—perfect for beginners.",
  };

  return (
    <section className=" w-full overflow-hidden bg-[#F8F7F0] sm:p-5 p-2">
      <div className="relative  inverted-radius">
        {/* ⭐ BACKGROUND VIDEO */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          {/* MOBILE VIDEO (max-width: 768px) */}
          <source src={item.mobileVideo} media="(max-width: 768px)" type="video/mp4" />

          {/* DESKTOP VIDEO */}
          <source src={item.video} media="(min-width: 769px)" type="video/mp4" />

          {/* Fallback */}
          Your browser does not support the video tag.
        </video>


        {/* ⭐ OVERLAY GRADIENT */}
        {/* <div className="absolute inset-0 bg-linear-to-b from-green-900/70 via-green-800/60 to-green-900/70 opacity-95"></div> */}

        {/* CONTENT */}
        <div className="relative  z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="md:px-5 xl:px-0 pt-20">
            <div data-aos="fade-in" className="inline-block mb-6">
              <span className="text-white text-sm font-medium px-6 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                BELIEVE IN QUALITY!
              </span>
            </div>

            <h1 data-aos="fade-in" className="text-white text-4xl font-signika sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
              {item.title}
              <br />
              {item.title2}
            </h1>

            <p data-aos="fade-in" className="text-white/90 border-t pt-2 font-signika text-lg mb-10 max-w-2xl">
              {item.desc}
            </p>

            <Link href={"/contact-us"} className="bg-white w-fit text-gray-900 px-8 py-4 font-semibold hover:bg-gray-100 transition-all flex items-center rounded-full gap-2">
              Contact Us
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
