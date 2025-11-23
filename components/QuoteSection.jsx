"use client";

import Image from "next/image";
import { ArrowUpRight, Tractor } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="w-full bg-[#F9F7ED] py-16 px-6 lg:px-12">
      <div className="max-w-7xl bg-white rounded-4xl shadow-lg mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE SIDE */}
        <div className="relative flex justify-center">
          <Image
            src="/about.jpeg"   // replace with your image path
            alt="Farmer"
            width={500}
            height={500}
            className="object-contain w-full sm:rounded-l-4xl rounded-bl-none sm:rounded-tr-none rounded-t-4xl drop-shadow-xl"
          />

          {/* BADGE */}
          {/* <div className="absolute top-10 right-3 lg:right-[-30px]">
            <div className="bg-[#F0D84F] w-32 h-32 rounded-full flex flex-col items-center justify-center text-center shadow-lg">
              <Tractor className="size-8 text-[#4C5C3A] mb-2" />
              <span className="text-[#4C5C3A] text-sm font-semibold">
                Founded in
              </span>
              <span className="text-[#4C5C3A] text-lg font-bold">1996</span>
            </div>
          </div> */}
        </div>

        {/* RIGHT FORM SIDE */}
        <div className=" p-5 py-8">
          {/* TAG */}
          <p className="inline-flex  items-center gap-2 bg-[#E8ECD9] text-[#4C5C3A] px-4 py-1 rounded-full font-semibold mb-4">
            <span className="size-2 bg-[#EDDD5E] rounded-full"></span>
            Free Quote
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#404A3D] mb-8">
            Get a free quote
          </h2>

          {/* FORM */}
          <form className="space-y-5">
            {/* FIRST ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#F7F5EB] px-4 py-4 rounded-xl outline-none w-full text-[#404A3D]"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-[#F7F5EB] px-4 py-4 rounded-xl outline-none w-full text-[#404A3D]"
              />
            </div>

            {/* SECOND ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-[#F7F5EB] px-4 py-4 rounded-xl outline-none w-full text-[#404A3D]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="bg-[#F7F5EB] px-4 py-4 rounded-xl outline-none w-full text-[#404A3D]"
              />
            </div>

            {/* MESSAGE BOX */}
            <textarea
              placeholder="Message"
              rows="4"
              className="bg-[#F7F5EB] px-4 py-4 rounded-xl w-full outline-none text-[#404A3D]"
            ></textarea>

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-[#5B8C51] text-white px-8 py-4 rounded-full flex items-center gap-2 text-lg font-semibold hover:bg-[#4a7541] transition-all w-fit"
            >
              Send Message
              <ArrowUpRight className="size-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
