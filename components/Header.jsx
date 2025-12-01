"use client";

import { useEffect, useState } from "react";
import { Menu, PhoneCall, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // Hide header on admin paths
  if (pathname.match(/\/admin(\/|$)/)) return null;

  const [openMega, setOpenMega] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const [services, setServices] = useState([]);

  const formatSlug = (slug) =>
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    async function loadServices() {
      try {
        const res = await fetch("http://localhost:4000/api/services/get/all");
        const data = await res.json();
        setServices(data.services || []);
      } catch (err) {
        console.log("Service fetch error:", err);
      }
    }
    loadServices();
  }, []);

  // Sticky nav detection
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active checker
  const isActive = (href) => pathname === href;
  const isServiceActive = (slug) => pathname.includes(`/services/${slug}`);

  // MOBILE SIDEBAR
  const MobileSidebar = () => (
    <SheetContent
      side="left"
      className="w-[290px] overflow-y-auto hide-scrollbar bg-white rounded-r-xl p-6"
    >
      <SheetHeader className="p-0 mt-5">
        <SheetTitle className="text-xl font-semibold mb-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" height={50} width={40} alt="logo" />
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold uppercase">
                Valerian Garden
              </h1>
              <div className="-mt-1 text-lg font-extralight uppercase">
                design
              </div>
            </div>
          </div>
        </SheetTitle>
      </SheetHeader>

      {/* Mobile Navigation */}
      <nav className="flex flex-col gap-4 text-gray-900 font-medium mt-4">

        {/* HOME */}
        <Link
          href={"/"}
          className={`uppercase transition-all ${
            isActive("/")
              ? "text-[#404A3D] font-bold"
              : "hover:text-[#EDDD5E]"
          }`}
        >
          HOME
        </Link>

      {/* ⭐ PREMIUM SERVICES DROPDOWN (MOBILE) */}
<div className="mt-2">
  <button
    onClick={() => setOpenMega((prev) => !prev)}
    className="flex items-center justify-between w-full font-semibold text-gray-900 uppercase text-[16px] tracking-wide py-2"
  >
    <span>SERVICES</span>

    {/* Arrow Rotation */}
    <ChevronRight
      className={`w-5 h-5 transition-transform duration-300 ${
        openMega ? "rotate-90" : "rotate-0"
      }`}
    />
  </button>

  {/* Dropdown Content */}
  <div
    className={`transition-all overflow-hidden duration-300 ${
      openMega ? "max-h-[500px] mt-2" : "max-h-0 mt-0"
    }`}
  >
    <div className="flex flex-col gap-2 pl-1">

      {services.map((service) => (
        <Link
          key={service._id}
          href={`/services/${service.slug}`}
          data-slot="sheet-close"
        >
          <div
            className={`
              flex items-center justify-between px-3 py-2 rounded-md transition-all

              ${
                isServiceActive(service.slug)
                  ? "bg-[#EDDD5E] text-gray-900 font-semibold shadow-sm"
                  : "hover:bg-gray-100 text-gray-700"
              }
            `}
          >
            <span className="tracking-wide">{formatSlug(service.slug)}</span>

            <ChevronRight
              className={`
                w-4 h-4 transition-all 
                ${
                  isServiceActive(service.slug)
                    ? "opacity-100"
                    : "opacity-40 group-hover:opacity-80"
                }
              `}
            />
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>


        {/* PORTFOLIO */}
        <Link
          data-slot="sheet-close"
          href={"/portfolio"}
          className={`uppercase transition ${
            isActive("/portfolio")
              ? "text-[#404A3D] font-bold"
              : "hover:text-[#EDDD5E]"
          }`}
        >
          PORTFOLIO
        </Link>

        {/* ABOUT */}
        <Link
          data-slot="sheet-close"
          href={"/about"}
          className={`uppercase transition ${
            isActive("/about")
              ? "text-[#404A3D] font-bold"
              : "hover:text-[#EDDD5E]"
          }`}
        >
          ABOUT US
        </Link>

        {/* CONTACT */}
        <Link
          data-slot="sheet-close"
          href={"/contact-us"}
          className={`uppercase transition ${
            isActive("/contact-us")
              ? "text-[#404A3D] font-bold"
              : "hover:text-[#EDDD5E]"
          }`}
        >
          CONTACT US
        </Link>
      </nav>

      {/* Contact Section */}
      <div className="mt-8 flex items-center gap-3">
        <PhoneCall className="w-5 h-5 text-[#EDDD5E]" />
        <div>
          <p className="text-gray-500 text-sm">Call Us</p>
          <p className="font-semibold text-gray-900">+1(212)255-511</p>
        </div>
      </div>

      <Link
        href={"/contact-us"}
        className="bg-[#EDDD5E] p-2 rounded text-center font-medium text-gray-900 mt-8 w-full"
      >
        Get In Touch
      </Link>
    </SheetContent>
  );

  // DESKTOP MEGA MENU WITH ACTIVE TAG
  const MegaMenu = ({ isSticky }) => (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[260px] animate-fadeIn">
      <ul className="space-y-3 mt-8 border-t-4 border-[#EDDD5E] bg-[#F8F7F0] text-gray-800 shadow-xl rounded-xl p-6">
        {services.map((service) => (
          <Link key={service._id} href={`/services/${service.slug}`}>
            <li
              className={`flex items-center justify-between cursor-pointer p-2 rounded-md transition 
                ${
                  isServiceActive(service.slug)
                    ? "bg-[#EDDD5E] text-gray-900 font-semibold"
                    : "hover:bg-gray-200"
                }
              `}
            >
              {formatSlug(service.slug)}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );

  // MAIN RETURN
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
              className={`sm:text-xl font-semibold uppercase ${
                isSticky ? "text-black" : "text-white"
              }`}
            >
              Valerian Gardens
            </h1>
            <span
              className={`text-sm font-extralight uppercase ${
                isSticky ? "text-black" : "text-white"
              }`}
            >
              design
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav
          className={`hidden lg:flex items-center gap-8 ${
            isSticky ? "text-black" : "text-white"
          }`}
        >
          {/* HOME */}
          <Link
            href={"/"}
            className={`uppercase transition ${
              isActive("/")
                ? isSticky
                  ? "text-[#404A3D] font-bold"
                  : "text-[#EDDD5E] font-bold"
                : "hover:text-[#EDDD5E]"
            }`}
          >
            HOME
          </Link>

          {/* SERVICES */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMega(true)}
            onMouseLeave={() => setOpenMega(false)}
          >
            <button
              className={`uppercase transition ${
                pathname.includes("/services")
                  ? isSticky
                    ? "text-[#404A3D] font-bold"
                    : "text-[#EDDD5E] font-bold"
                  : "hover:text-[#EDDD5E]"
              }`}
            >
              SERVICES
            </button>

            {openMega && <MegaMenu isSticky={isSticky} />}
          </div>

          {/* OTHER LINKS */}
          <Link
            href={"/portfolio"}
            className={`uppercase transition ${
              isActive("/portfolio")
                ? isSticky
                  ? "text-[#404A3D] font-bold"
                  : "text-[#EDDD5E] font-bold"
                : "hover:text-[#EDDD5E]"
            }`}
          >
            PORTFOLIO
          </Link>

          <Link
            href={"/about"}
            className={`uppercase transition ${
              isActive("/about")
                ? isSticky
                  ? "text-[#404A3D] font-bold"
                  : "text-[#EDDD5E] font-bold"
                : "hover:text-[#EDDD5E]"
            }`}
          >
            ABOUT US
          </Link>

          <Link
            href={"/contact-us"}
            className={`uppercase transition ${
              isActive("/contact-us")
                ? isSticky
                  ? "text-[#404A3D] font-bold"
                  : "text-[#EDDD5E] font-bold"
                : "hover:text-[#EDDD5E]"
            }`}
          >
            CONTACT
          </Link>
        </nav>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* PHONE ICON (mobile) */}
          <div
            className={`border-r-2 ${
              isSticky ? "border-gray-300" : "border-transparent"
            }`}
          >
            <div
              className={`lg:hidden mr-2 hover:cursor-pointer sm:block hidden transition-all sm:mr-5 xl:flex items-center rounded-full sm:border gap-3 p-2 bg-white`}
            >
              <PhoneCall strokeWidth={1} className="h-5 w-5" />
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={`w-10 h-10 lg:hidden border shadow-2xl rounded-full flex items-center justify-center bg-white`}
              >
                <Menu className="w-5 h-5 text-gray-800" />
              </button>
            </SheetTrigger>
            <MobileSidebar />
          </Sheet>

          {/* GET IN TOUCH BUTTON */}
          <Link
            href={"/contact-us"}
            className={`hidden lg:flex items-center px-6 py-3 rounded-full font-semibold text-sm gap-2 whitespace-nowrap bg-[#EDDD5E] text-gray-900`}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
