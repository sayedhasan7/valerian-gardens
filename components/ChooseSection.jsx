"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Users,
  Search,
  Palette,
  Leaf,
  Presentation,
  Hammer,
  BadgeCheck,
} from "lucide-react";
import LeaveSVG from "./LeaveSVG";

const items = [
  {
    num: "01",
    title: "Consultation",
    desc: "Where taking clients brief and current circumstances",
    Icon: Users,
  },
  {
    num: "02",
    title: "Survey and analysis",
    desc: "Another visit to take details of aspect, soil, existing plants",
    Icon: Search,
  },
  {
    num: "03",
    title: "Concept & Design",
    desc: "Creating a thoughtful design that brings your vision to life",
    Icon: Palette,
  },
  {
    num: "04",
    title: "Planting Plans",
    desc: "Detailed planting plans tailored to your space and preferences",
    Icon: Leaf,
  },
  {
    num: "05",
    title: "Presentation",
    desc: "Presenting the complete design with visual materials and specifications",
    Icon: Presentation,
  },
  {
    num: "06",
    title: "Implementation",
    desc: "Professional build and planting to bring your garden to reality",
    Icon: Hammer,
  },
];


export default function ChooseSection() {


  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightStyle, setHighlightStyle] = useState({
    top: "0px",
    height: "0px",
    opacity: 1,
  });

  // INIT AOS ONLY (NO ACTIVE HANDLING)
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: false,
      mirror: true,
    });
  }, []);

  // INTERSECTION OBSERVER HANDLES ACTIVE INDEX
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx);
          }
        });
      },
      {
        threshold: 0.55,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // MOVE HIGHLIGHT
  useEffect(() => {
    const item = itemRefs.current[activeIndex];
    if (!item) return;

    setHighlightStyle({
      opacity: 1,
      top: item.offsetTop + "px",
      height: item.clientHeight + "px",
    });
  }, [activeIndex]);

  return (
    <section className="relative py-24 pt-38 px-6 overflow-hidden bg-[#F8F7F0]">
      {/* <LeaveSVG data-aos="fade-in" className="absolute  lg:block left-0 -bottom-10 rotate-45 opacity-10 z-0" /> */}
      <LeaveSVG
        data-aos="fade-in"
        className="absolute right-0 top-0  lg:block rotate-[-45deg] scale-x-[-1] opacity-10 z-0"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <p className="text-[#404A3D] flex gap-2 items-center bg-white w-fit py-2 px-4 rounded-full font-semibold mb-3 tracking-wide">
            <BadgeCheck className="size-4" /> Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl text=[#404A3D] font-bold ">
            Choose What’s Perfect<br /> For Your Field
          </h2>

          <div className="mt-10">
            <Image
              src="/garden-4.jpeg"
              width={900}
              height={600}
              alt="Garden"
              className="rounded-3xl w-full"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative my-auto" ref={containerRef}>

          {/* Highlight box */}
          <div
            className="absolute left-0 w-full bg-[#EDDD5E] rounded-xl shadow-xl transition-all duration-[650ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none"
            style={highlightStyle}
          />

          {/* Items */}
          <div className="relative space-y-5">
            {items.map((item, i) => (
              <div
                key={i}
                data-index={i}
                ref={(el) => (itemRefs.current[i] = el)}
                data-aos="fade-up"
                data-aos-once="true"
                className="relative p-6 rounded-xl cursor-default"
              >
                <div className="flex gap-6 relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 px-2 sm:px-0 rounded-lg bg-white backdrop-blur-sm">
                    <item.Icon
                      className={`w-7 h-7 transition-all ${activeIndex === i ? "text-[#6E8F5E]" : "text-[#404A3D]"
                        }`}
                    />
                  </div>


                  <div>
                    <h3
                      className={`text-xl font-bold transition-all ${activeIndex === i ? "text-gray-900" : "text-[#404A3D]"
                        }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm mt-1 transition-all ${activeIndex === i ? "text-gray-700" : "text-[#666666]"
                        }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
