"use client";

import Link from "next/link";
import { Highlighter } from "./ui/highlighter";

export default function HeroSection() {
  const item = {
    title: `Welcome to Valerian Gardens Design, 
At Valerian Gardens Design, we help to bring beauty, harmony, and functionality to outdoor spaces.  
`,
    mobileVideo:
      "https://res.cloudinary.com/sayed12m/video/upload/v1763787211/flwqsv6s2ecqyym8k50k.mp4",
    video:
      "https://res.cloudinary.com/sayed12m/video/upload/v1763749426/wr4oqn5vpbqssecrbzjn.mp4", // ⭐ replace with your video
    desc: `At Valerian Gardens, Whether you're dreaming of a peaceful garden retreat, a modern outdoor living area, or a complete landscape transformation, we're here to help you design a space that reflects your style and enhances your lifestyle.
With a focus on thoughtful design, sustainable practices, and artistic detail, we create gardens that grow with you-spaces that feel alive, personal, and timeless.
`,
  };

  return (
    <section className=" w-full overflow-hidden bg-[#F8F7F0] sm:p-5 p-2">
      <div className="relative inverted-radius">
         {/* <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div> */}
        {/* ⭐ BACKGROUND VIDEO */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          {/* MOBILE VIDEO (max-width: 768px) */}
          <source
            src={item.mobileVideo}
            media="(max-width: 768px)"
            type="video/mp4"
          />
          {/* DESKTOP VIDEO */}
          {/* <source src={item.video} media="(min-width: 769px)" type="video/mp4" /> */}
          <source
            src="../testing.mp4"
            media="(min-width: 769px)"
            type="video/mp4"
          />
          {/* Fallback */}
          Your browser does not support the video tag.
        </video>

        {/* CONTENT */}
        <div className="relative  z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="md:px-5 xl:px-0 pt-14">
            <div data-aos="fade-in" className="inline-block mb-6">
              <span className="text-white text-sm font-medium px-6 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                BELIEVE IN QUALITY!
              </span>
            </div>

            <h1
              data-aos="fade-in"
              className="text-white text-3xl w-4/6 font-signika sm:text-4xl md:text-5xl font-semibold leading-tight mb-6"
            >
              {item.title}
            </h1>

            <p
              data-aos="fade-in"
              className="text-white/90 border-t pt-2 font-signika text-lg mb-10 max-w-2xl"
            >
              {item.desc}
            </p>

            <Link
              href={"/contact-us"}
              className="bg-white w-fit text-green-900 px-6 py-3 font-semibold 
hover:bg-green-900 hover:text-white 
transition-all duration-300 ease-in-out 
flex items-center rounded-full gap-2"

            >
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
