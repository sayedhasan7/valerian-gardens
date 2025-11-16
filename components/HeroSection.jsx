"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSection() {
const slides = [
  {
    title: "Grow Fresh, Live Fresh",
    title2: "Home Gardening Essentials",
    image: "https://images.pexels.com/photos/4751971/pexels-photo-4751971.jpeg?auto=compress&cs=tinysrgb&w=1920",
    desc: "Transform your space with easy home gardening tips. Grow fresh vegetables, herbs, and flowers at home—perfect for beginners.",
  },
  {
    title: "Healthy Soil, Healthy Plants",
    title2: "Organic Gardening",
    image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1920",
    desc: "Improve soil nutrition with organic fertilizers and compost. Boost plant growth naturally and sustainably.",
  },
  {
    title: "Plant Smart, Grow Better",
    title2: "Seasonal Gardening Guide",
    image: "https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&w=1920",
    desc: "Discover the ideal plants for every season. Learn watering schedules and sunlight needs to keep your garden thriving.",
  },
];


  return (
    <section className="relative h-auto w-full">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel={false}
        allowTouchMove={false}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        observer={true}
        observeParents={true}
        loop={true}
        touchReleaseOnEdges={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, Pagination, EffectFade, Mousewheel]}
        className="h-[115vh] bg-[#F8F7F0] w-full"
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative bg-[#F8F7F0] pb-0 overflow-hidden">

              {/* BACKGROUND IMAGE */}
              <div
                className="absolute sm:m-5 m-2 inverted-radius rounded inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/60 to-green-900/70"></div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-40">
                <div className="px-5 xl:px-0 pt-20">
                  <div className="inline-block mb-6">
                    <span className="text-white text-sm font-medium px-6 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                      BELIEVE IN QUALITY!
                    </span>
                  </div>

                  <h1 className="text-white text-4xl font-signika sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
                    {item.title}
                    <br />
                    {item.title2}
                  </h1>

                  <p className="text-white/90 border-t pt-2 font-signika text-lg mb-10 max-w-2xl">
                    {item.desc}
                  </p>

                  <button className="bg-white text-gray-900 px-8 py-4 font-semibold hover:bg-gray-100 transition-all flex items-center rounded-full gap-2">
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
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
