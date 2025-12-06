import { Leaf } from "lucide-react";
import Image from "next/image";
import LeaveSVG from "./LeaveSVG";
import logo from "../public/logo.png";
export default function AboutSection() {
  return (
    <section className="py-20 pb-28 px-6 bg-[#F8F7F0] overflow-hidden relative">
      {/* <LeaveSVG
        data-aos="fade-in"
        className="absolute hidden lg:block left-0 -bottom-10 rotate-45 opacity-10 z-0"
      /> */}
      <LeaveSVG
        data-aos="fade-in"
        className="absolute lg:block right-0 -bottom-16 lg:-bottom-12 rotate-[-45deg] scale-x-[-1] opacity-10 z-0"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            width={1000}
            height={1000}
            className="rounded-3xl inverted-radius-left w-full h-[450px] sm:h-[700px] object-cover"
            src="/about.jpeg"
            alt="About"
          />

          <div className="absolute top-0 right-0 bg-[#EDDD5E] p-6 rounded-2xl">
            <Image src={"/logo.png"} alt="logo" height={48} width={48} className="h-full w-full" />
          </div>
        </div>

        <div>
          <p className="text-[#404A3D] flex gap-2 items-center bg-white w-fit py-2 px-4 rounded-full font-semibold mb-3 tracking-wide">
            <Leaf className="size-4" /> ABOUT US
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[rgb(64,74,61)] mb-6 leading-tight">
            Hello, and welcome!
          </h2>

          <div className="text-gray-600 mb-8 leading-relaxed flex flex-col gap-4">
            <p>
              I’m Donata, a garden designer passionate about creating spaces
              that connect people with nature.
            </p>
            <p>
              After completing three years of Garden Design at the renowned{" "}
              <span className="font-bold">Capel Manor College in London</span> ,
              I began to specialise in{" "}
              <span className="font-bold">
                ecological and sustainable planting.
              </span>{" "}
              My work is inspired by nature and focuses on crafting gardens that
              are not only beautiful, but also resilient, wildlife-friendly, and
              in harmony with their surroundings.
            </p>
            <p>
              Every project begins with understanding how a garden will be used
              and how it can enhance the lives of those who spend time in it.
              Whether it’s a small city courtyard, a modern family garden, or a
              naturalistic landscape, I aim to bring together form, texture, and
              planting to create places that feel alive throughout the seasons.
            </p>
            <p>
              I believe a successful garden should evolve gracefully over time,
              supporting biodiversity while offering a calm, restorative space
              for people. By combining design creativity with a respect for
              ecology, my goal is to create gardens that are both
              environmentally responsible and deeply personal.
            </p>
            <p>
              {" "}
              Let’s grow something beautiful, sustainable, and uniquely yours!
            </p>
          </div>

          <button className="bg-[#8b8e7c] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#8b8e7c] transition flex items-center gap-2">
            Discover More <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
