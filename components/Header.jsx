"use client";

import { use, useEffect, useState } from "react";
import { Menu, Phone, PhoneCall } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname  = usePathname();
  if (pathname.match(/\/admin(\/|$)/)) {
    return null;
  }
  const [openMega, setOpenMega] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const megaMenuData = {
    services: [
      {
        items: [
          "Bespoke garden design",
          "Specialised Planting Plan",
          "Ordering Plants",
          "Implementation",
          "Aftercare",
        ],
      },
    ],
  };

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ============ MOBILE SIDEBAR ============
  const MobileSidebar = () => (
    <SheetContent
      side="left"
      className="w-[280px] overflow-y-auto hide-scrollbar bg-white rounded-r-xl p-6"
    >
      <SheetHeader className="p-0 mt-5">
        <SheetTitle className="text-xl font-semibold mb-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" height={50} width={40} alt="logo" />
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-xl font-semibold uppercase">Valerian Gardens</h1>
              <div className="-mt-1 text-lg font-extralight uppercase">design</div>
            </div>
          </div>
        </SheetTitle>
      </SheetHeader>

      <nav className="flex flex-col gap-4 text-gray-800 font-medium mt-4">
        <Link href={"/"} className={`${!isSticky ? "hover:text-[#8b8e7c]" : "hover:text-[#404A3D]"} uppercase`}>HOME</Link>

        <Accordion type="single" collapsible>
          <AccordionItem value="services">
            <AccordionTrigger className="font-semibold text-gray-800 hover:text-[#8b8e7c]">
              SERVICES
            </AccordionTrigger>

            <AccordionContent className="pl-2 mt-3">
              {megaMenuData.services[0].items.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-700 hover:text-[#8b8e7c] cursor-pointer list-none"
                >
                  {item}
                </li>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Link data-slot="sheet-close" href={"/portfolio"} className={`${!isSticky ? "hover:text-[#8b8e7c]" : "hover:text-[#404A3D]"} uppercase`}>PORTFOLIO</Link>
        <Link data-slot="sheet-close" href={"/about"} className={`${!isSticky ? "hover:text-[#8b8e7c]" : "hover:text-[#404A3D]"} uppercase`}>About US</Link>
        <Link data-slot="sheet-close" href={"/contact-us"} className={`${!isSticky ? "hover:text-[#8b8e7c]" : "hover:text-[#404A3D]"} uppercase`}>CONTACT US</Link>
      </nav>

      <div className="mt-8 flex items-center gap-3">
        <PhoneCall className="w-5 h-5 text-[#8b8e7c]" />
        <div>
          <p className="text-gray-500 text-sm">Call Us</p>
          <p className="font-semibold text-gray-800">+1(212)255-511</p>
        </div>
      </div>

      <Link href={"/contact-us"} className="bg-[#8b8e7c]/90 hover:bg-[#8b8e7c] p-2 rounded text-center font-medium text-white mt-8 w-full">Get In Touch</Link>
    </SheetContent>
  );

  // ============ MEGA MENU ============
  const MegaMenu = ({ isSticky }) => (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[260px] animate-fadeIn">
      <ul className={`space-y-2 mt-8 border-t-4 border-[#8b8e7c] bg-[#F8F7F0] text-gray-800 shadow-xl rounded-xl p-8`}>
        {megaMenuData.services[0].items.map((item, i) => (
          <li key={i} className="hover:text-[#8b8e7c] cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  // ============ MAIN RETURN ============
  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isSticky ? "bg-[#F8F7F0] shadow-md py-3" : "bg-transparent py-6"}
      `}
    >
      <div className="mx-auto sm:mt-2.5 flex items-center justify-between px-6 lg:px-8">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="logo"
            className={`${isSticky ? "brightness-0" : "invert"}`}
          />

          <div className="flex flex-col">
            <h1
              className={`sm:text-xl font-signika font-semibold uppercase ${isSticky ? "text-black" : "text-white"
                }`}
            >
              Valerian 
            </h1>
            <h1>
              Gardens
            </h1>
            <span
              className={`text-sm font-signika glfont-extralight uppercase ${isSticky ? "text-black" : "text-white"
                }`}
            >
              design
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav
          className={`hidden lg:flex items-center gap-8 ${isSticky ? "text-black" : "text-white"
            }`}
        >
          <Link href={"/"} className={`${!isSticky ? "hover:text-[#8b8e7c]" : "hover:text-[#404A3D]"} uppercase`}>HOME</Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMega(true)}
            onMouseLeave={() => setOpenMega(false)}
          >
            <button className={`${!isSticky ? "hover:text-[#8b8e7c]" : "hover:text-[#404A3D]"} uppercase`}>SERVICES</button>
            {openMega && <MegaMenu isSticky={isSticky} />}
          </div>

          <Link href={"/portfolio"} className={`${!isSticky ? "hover:text-[#8b8e7c]" : "hover:text-[#404A3D]"} uppercase`}>PORTFOLIO</Link>
          <Link href={"/about"} className={`${!isSticky ? "hover:text-[#8b8e7c]" : "hover:text-[#404A3D]"} uppercase`}>About US</Link>
          <Link href={"/contact-us"} className={`${!isSticky ? "hover:text-[#8b8e7c]" : "hover:text-[#404A3D]"} uppercase`}>CONTACT</Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* PHONE ICON */}
          <div className={`border-r-2 ${isSticky ? "border-gray-300" : "border-transparent"}`}>
            <div
              className={`lg:hidden mr-2 hover:cursor-pointer sm:block hidden transition-all sm:mr-5 xl:flex items-center rounded-full sm:border gap-3 p-2 bg-white`}
            >
              <PhoneCall strokeWidth={1} className="h-5 w-5" />
            </div>
          </div>

          {/* MOBILE MENU */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={`w-10 h-10 lg:hidden border shadow-2xl rounded-full flex items-center justify-center ${isSticky ? "bg-white" : "bg-white"
                  }`}
              >
                <Menu className="w-5 h-5 text-gray-800" />
              </button>
            </SheetTrigger>
            <MobileSidebar />
          </Sheet>

          {/* BUTTON */}
          <Link
          href={"/contact-us"}
            className={`hidden lg:flex items-center px-6 py-3 rounded-full font-semibold text-sm gap-2 whitespace-nowrap
            ${isSticky ? "bg-[#8b8e7c] text-white" : "bg-[#8b8e7c] text-white"}
          `}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
