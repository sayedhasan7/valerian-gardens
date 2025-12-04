"use client";

import Image from "next/image";
import { Leaf } from "lucide-react";

export default function CTASection() {
  return (
    <section className="px-6 bg-[#F9F7ED]">
      <div className="max-w-7xl mx-auto relative rounded-2xl sm:rounded-4xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT SIDE IMAGE */}
        <div className="sm:relative z-10 absolute h-full sm:h-[450px] lg:h-full">
          <Image
            src="/garden-5.jpeg"
            alt="Farmer Image"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT YELLOW PANEL */}
        <div className="relative bg-[#E9D55B]  px-5 sm:p-12 flex flex-col justify-center">
          
          {/* Background farmhouse illustration */}
          <div className="absolute inset-0 opacity-20 bg-[url('/grass.png')] bg-cover bg-center" />

          {/* CONTENT */}
          <div className="relative py-12 z-10 ">
            
            {/* Badge */}
            {/* <div className="flex items-center gap-2 bg-white py-2 px-4 rounded-full w-fit mb-5 shadow">
              <Leaf size={14} className="text-[#8b8e7c]" />
              <span className="text-sm font-semibold text-gray-800">What We Do</span>
            </div> */}

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Ready to Transform Your Garden?
            </h2>

            {/* Paragraph */}
            <p className="text-gray-900/80 leading-relaxed mb-10 max-w-xl">
              Let's create a beautiful, sustainable outdoor space that reflects your style and enhances your lifestyle. From concept to completion, we're here to help
            </p>

            {/* STATS ROW */}
            <div className="grid sm:grid-cols-2 items-center gap-8">

              {/* STAT 1 */}
              <div className="flex items-center gap-4">
                <CircularStat percent={100} />
                <div>
                  <h3 className="font-bold text-xl text-gray-900">Eco-Friendly</h3>
                  <p className="text-gray-800 text-sm">Sustainable practices</p>
                </div>
              </div>

              {/* STAT 2 */}
              <div className="flex items-center gap-4">
                <CircularStat percent={100} />
                <div>
                  <h3 className="font-bold text-xl text-gray-900">Personalized</h3>
                  <p className="text-gray-800 text-sm">Unique to you</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* CIRCULAR % COMPONENT */
function CircularStat({ percent }) {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Outer Circle */}
      <div className="absolute inset-0 rounded-full border-[5px] border-white opacity-70" />

      {/* Progress arc */}
      <div className="absolute inset-0 rounded-full border-[5px] border-white border-t-transparent rotate-45" />

      {/* Middle Yellow Ring */}
      <div className="absolute inset-1 rounded-full border-[6px] border-yellow-500/60" />

      {/* Percentage */}
      <div className="relative bg-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-gray-900">
        {percent}%
      </div>
    </div>
  );
}
