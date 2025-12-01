"use client";
import { Facebook, FacebookIcon, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname  = usePathname();
    if (pathname.match(/\/admin(\/|$)/)) {
      return null;
    }
  return (
    <footer className="relative bg-[#F9FAF7] pt-20 pb-10 px-6">

      {/* Decorative Leaf Graphic */}
      {/* <div className="absolute bottom-10 left-1/4 opacity-20 pointer-events-none select-none">
         <img
           src="/logo.png" // replace with your leaf illustration
           alt=""
           className="w-40 md:w-56"
         />
       </div> */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 relative z-10">

        {/* Logo + Description + Social */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex flex-col">
              <h1
                className={`sm:text-xl font-semibold uppercase`}
              >
                Valerian Garden
              </h1>
              <span
                className={`text-sm font-extralight uppercase `}
              >
                design
              </span>
            </div>
          </div>

          <p className="text-gray-600 max-w-xs mb-6">
            {/* Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan risus.
            In vitae sapien viverra est Duo eu ullam inani senserit. */}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 rounded-full border hover:cursor-pointer border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200">
              <FacebookIcon />
            </button>
            <button className="w-8 h-8 rounded-full border hover:cursor-pointer border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200">
              <Twitter />
            </button>
            <button className="w-8 h-8 rounded-full border hover:cursor-pointer border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200">
              <Linkedin />
            </button>
            <button className="w-8 h-8 rounded-full border hover:cursor-pointer border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200">
              <Instagram />
            </button>
          </div>
        </div>

        {/* Text Column + Links */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-gray-800 leading-snug mb-4">
            Professional & modern, a theme designed to help <br />
            your business stand out from the rest.
          </h3>

          <div className="grid grid-cols-2 gap-10 mt-6">
            {/* Useful Links */}
            <div>
              <h4 className="text-gray-800 font-semibold mb-3">Our Pages</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Our Service's</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
              </ul>
            </div>

            {/* Working Time */}
            <div>
              <h4 className="text-gray-800 font-semibold mb-3">Working Time</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Mon - Fri: 9.00am - 5.00pm</li>
                <li>Saturday: 10.00am - 6.00pm</li>
                <li>Sunday Closed</li>
              </ul>
            </div>

            {/* Address */}
            {/* <div>
               <h4 className="text-gray-800 font-semibold mb-3">Our Address</h4>
               <ul className="space-y-2 text-gray-600">
                 <li>Old Westbury 256, New York</li>
                 <li>11201, United States</li>
               </ul>
             </div> */}
          </div>
        </div>

        {/* Empty space to match original spacing */}
        <div className="relative hidden md:block">
          <div className="absolute bottom-10 left-1/4 opacity-20 pointer-events-none select-none">
            <img
              src="/logo.png" // replace with your leaf illustration
              alt=""
              className="w-40 md:w-56"
            />
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="pt-10 mt-10 border-t border-gray-300 max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-gray-600 text-sm">
        <div className="flex gap-6 mb-4 md:mb-0">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
        <p>Copyright © 2025 Agrimo. All Rights Reserved.</p>
      </div>
    </footer>
  );
}