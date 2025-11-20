"use client";

import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import Image from "next/image";

// ============================================================
// REUSABLE LOGO COMPONENTS
// ============================================================
const Logo = ({ color = "#EDDD5E", text = "white", isScrollHeader }) => {
  return (
    <div className={`flex items-center ${isScrollHeader ? "sm:ml-5 ml-3 gap-2" : "gap-2"}`}>

      {/* IMAGE BLOCK — SEPARATE & FAT */}
      <div className="w-8 h-8" style={{ color }}>
        {isScrollHeader ? (
          <Image
            src="/logo.png"
            height={40}
            width={30}
            alt="logo"
            className="transition-all -mt-1 duration-1000"
          />
        ) : (
          <Image
            src="/logo.png"
            height={40}
            width={30}
            alt="logo"
            className="invert -mt-1 brightness-0"
          />
        )}
      </div>

      {/* TEXT BLOCK — SEPARATE & FAT */}
      {isScrollHeader ? (
        <span className="text-2xl transition-all duration-1000 font-bold font-signika text-black">
          <div className="flex items-center gap-3">
            <div className="flex flex-col justify-center items-start align-middle">
              <h1 className="text-base font-medium tracking-tight sm:text-2xl">Valerian Garden</h1>
              <div className="text-[#EDDD5E] text-sm font-semibold -mt-1">design</div>
            </div>
          </div>
        </span>
      ) : (
        <span className="text-2xl font-bold font-signika text-white">
          <div className="flex items-center gap-3">
            <div className="flex flex-col justify-center items-start align-middle">
              <h1 className="text-base font-medium tracking-tight whitespace-nowrap sm:text-2xl">Valerian Garden</h1>
              <div className="text-[#EDDD5E] text-sm font-semibold -mt-1">design</div>
            </div>
          </div>
        </span>
      )}
    </div>
  );
};


// ============================================================
// MOBILE SIDEBAR (USED TWICE → NOW ONLY ONCE)
// ============================================================
const MobileSidebar = ({ megaMenuData }) => (
  <SheetContent
    side="left"
    className="w-[280px] overflow-y-auto hide-scrollbar scroll-smooth bg-white rounded-r-xl p-6"
  >
    <SheetHeader className="p-0 mt-5">
      <SheetTitle className="text-xl font-semibold mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 text-[#EDDD5E] flex items-center justify-center">
            <Image
              src="/logo.png"
              height={40}
              width={30}
              alt="logo"
              className="-mt-1"
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-xl font-medium tracking-tight">Valerian Garden</h1>
            <div className="text-[#EDDD5E] -mt-1 text-xl font-semibold">design</div>
          </div>
        </div>
      </SheetTitle>
    </SheetHeader>

    {/* MOBILE NAVIGATION */}
    <nav className="flex flex-col gap-4 text-gray-800 font-medium mt-4">
      <a className="hover:text-[#EDDD5E]">HOME</a>
      <Accordion type="single" collapsible>
        <AccordionItem value="services">
          <AccordionTrigger className="font-semibold text-gray-800 hover:text-[#EDDD5E]">
            SERVICES
          </AccordionTrigger>

          <AccordionContent className="pl-2 mt-3">
            {megaMenuData.services.map((section, idx) => (
              <div key={idx} className="mb-4">
                <ul className="space-y-2">
                  {section.items.map((item, i2) => (
                    <li key={i2} className="text-gray-700 hover:text-[#EDDD5E] cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <a className="hover:text-[#EDDD5E]">PORTFOLIO</a>
      <a className="hover:text-[#EDDD5E]">BLOG</a>
      <a className="hover:text-[#EDDD5E]">CONTACT US</a>
    </nav>

    {/* PHONE */}
    <div className="mt-8 flex items-center gap-3">
      <Phone className="w-5 h-5 text-[#EDDD5E]" />
      <div>
        <p className="text-gray-500 text-sm">Call Us</p>
        <p className="font-semibold text-gray-800">+1(212)255-511</p>
      </div>
    </div>

    <Button className="bg-[#EDDD5E] text-gray-900 mt-8 w-full">Get In Touch</Button>
  </SheetContent>
);

// ============================================================
// MAIN HEADER COMPONENT
// ============================================================
export default function Header() {
  const [openMega, setOpenMega] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  const megaMenuData = {
    services: [
      {
        items: ["Bespoke garden design", "Specialised Planting Plan", "Ordering Plants","Implementation","Aftercare"],
      },
    ],
  };

  useEffect(() => {
    const scrollHandler = () => setShowSticky(window?.scrollY > 120);
    window?.addEventListener("scroll", scrollHandler);
    return () => window?.removeEventListener("scroll", scrollHandler);
  }, []);

  // ============================================================
  // REUSABLE DESKTOP MEGA MENU
  // ============================================================
  const MegaMenu = (
    <div
      className="
        absolute top-full left-1/2 -translate-x-1/2 
        w-[250px] border-t-4 border-[#EDDD5E] bg-[#F8F7F0] text-gray-800 shadow-xl 
        rounded-xl p-8 grid grid-cols-1 gap-6 animate-fadeIn
      "
    >
      {megaMenuData.services.map((section, i) => (
        <div key={i}>
          <ul className="space-y-2">
            {section.items.map((item, j) => (
              <li key={j} className="hover:text-[#5B8C51] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  // ============================================================
  // RETURN UI (Unchanged)
  // ============================================================
  return (
    <>
      {/* ORIGINAL HEADER */}
      <header className="absolute top-0 left-0 right-0 z-50 pl-5 pt-5 sm:p-12 pr-2 sm:pr-5">
        <div className="mx-auto flex items-center justify-between">
          <Logo isScrollHeader={showSticky} />

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-white relative">
            <a className="hover:text-[#EDDD5E]">HOME</a>
            

            <div
              className="relative"
              onMouseEnter={() => setOpenMega(true)}
              onMouseLeave={() => setOpenMega(false)}
            >
              <button className="hover:text-[#EDDD5E]">SERVICES</button>
              {openMega && MegaMenu}
            </div>

            <a className="hover:text-[#EDDD5E]">PORTFOLIO</a>
            <a className="hover:text-[#EDDD5E]">BLOG</a>
            <a className="hover:text-[#EDDD5E]">CONTACT US</a>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center sm:gap-4">
            <div className="lg:hidden xl:flex flex items-center lg:mr-2 gap-3 bg-gray-50 p-2 mr-8 rounded-full text-white">
              <Phone className="w-5 h-5" color="black" />
              {/* <div className="">
                <div className="text-gray-300">Call us Now</div>
                <div className="font-semibold">+1(212)255-511</div>
              </div> */}
            </div>

            {/* MOBILE SIDEBAR */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="w-10 h-10 lg:hidden bg-white border shadow-2xl rounded-full mr-3.5  sm:mr-0 flex items-center justify-center">
                  <Menu className="w-5 h-5 text-gray-800" />
                </button>
              </SheetTrigger>
              <MobileSidebar megaMenuData={megaMenuData} />
            </Sheet>

            <button className="bg-[#EDDD5E] text-gray-900 hidden  px-4 sm:px-7 py-3 rounded-full font-semibold lg:flex items-center text-sm gap-2 whitespace-nowrap">
              Get In Touch
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* STICKY HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#F8F7F0] shadow-md transition-all duration-300 
          ${showSticky ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
      >
        <div className="mx-auto flex items-center justify-between px-2 sm:px-6 py-4">
          <Logo color="#5B8C51" isScrollHeader={showSticky} text="black" />

          <nav className="hidden lg:flex items-center gap-8 text-black">
            <a className="hover:text-[#5B8C51]">HOME</a>

            <div
              className="relative"
              onMouseEnter={() => setOpenMega(true)}
              onMouseLeave={() => setOpenMega(false)}
            >
              <button className="hover:text-[#5B8C51]">SERVICES</button>
              {openMega && MegaMenu}
            </div>

            <a className="hover:text-[#5B8C51]">PORTFOLIO</a>
            <a className="hover:text-[#5B8C51]">CONTACT</a>
          </nav>

          <div className="flex">
             <div className="lg:hidden xl:flex flex items-center gap-3 bg-gray-50 p-2 mr-4 border rounded-full text-white">
              <Phone className="w-5 h-5" color="black" />
              {/* <div className="">
                <div className="text-gray-300">Call us Now</div>
                <div className="font-semibold">+1(212)255-511</div>
              </div> */}
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <button className="w-10 h-10 lg:hidden bg-white border shadow-2xl rounded-full mr-2 sm:mr-8 flex items-center justify-center">
                  <Menu className="w-5 h-5 text-gray-800" />
                </button>
              </SheetTrigger>
              <MobileSidebar megaMenuData={megaMenuData} />
            </Sheet>
            <button className="bg-[#EDDD5E] hidden lg:bloxk text-gray-900 px-4 sm:px-7 py-3 rounded-full font-semibold lg:flex items-center text-sm gap-2 whitespace-nowrap">
              Get In Touch
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
