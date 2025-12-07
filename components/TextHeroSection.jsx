import Link from "next/link";
import React from "react";

const TextHeroSection = () => {
  return (
    <section className="hero flex flex-col lg:flex-row items-center justify-between px-[6%] py-16 lg:py-20 bg-[#FDF6E9] font-inter gap-12">

      {/* LEFT SIDE */}
      <div className="hero-left w-full text-center lg:text-left">
        <div data-aos="fade-in" className="inline-block mb-6">
          <span className="text-[#8b8e7c] bg-white text-xs sm:text-sm font-medium px-5 py-2 border border-white/30 rounded-full backdrop-blur-sm">
            HOME GARDENING ESSENTIALS
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-[42px] leading-snug font-bold text-[rgb(64,74,61)] mt-3">
          Welcome to Valerian Gardens Design. We help to bring beauty, harmony,
          and functionality to outdoor spaces.
        </h1>

        <p className="text-[#555] leading-relaxed mt-5 text-sm sm:text-[16px]">
          At Valerian Gardens, whether you're dreaming of a peaceful garden retreat,
          a modern outdoor living area, or a complete landscape transformation, we're here
          to help you design a space that reflects your style and enhances your lifestyle.
          With a focus on thoughtful design, sustainable practices, and artistic detail,
          we create gardens that grow with you—spaces that feel alive, personal, and timeless.
        </p>
       
       <Link href={"/about"}>
        <button className="bg-[#8b8e7c]/90 hover:bg-[#8b8e7c] text-white px-6 py-3 rounded-md text-[16px] mt-6 cursor-pointer transition">
          KNow More
        </button>
       </Link>

        <p className="text-[#777] text-[14px] mt-2">
          Transform your outdoor space today
        </p>

        <div className="mt-6 text-[16px] text-[#333]">
          <p>Design. Grow. Enjoy.</p>
          <span className="block mt-1 text-[#8b8e7c] font-semibold">
            Let your garden bloom! 🌱
          </span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right w-full  text-center">
        <img
          src="/logo.png"
          alt="Plant"
          className="w-[220px] sm:w-[260px] lg:w-[320px] mb-6 mx-auto"
        />

        <div className="flex flex-col sm:flex-row justify-center lg:justify-between gap-3">
          {/* Feature 1 */}
          <div className="p-[15px] bg-[#FDF6E9] shadow-sm text-center rounded-md">
            <span className="text-2xl">🌿</span>
            <p className="mt-1.5 text-black text-sm">
              Custom Garden Design
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-[15px] bg-[#FDF6E9] shadow-sm text-center rounded-md">
            <span className="text-2xl">🌱</span>
            <p className="mt-1.5 text-black text-sm">
              Sustainable Plant Choices
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-[15px] bg-[#FDF6E9] shadow-sm text-center rounded-md">
            <span className="text-2xl">🌳</span>
            <p className="mt-1.5 text-black text-sm">
              Outdoor Living Spaces
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default TextHeroSection;
