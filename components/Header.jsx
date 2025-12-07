"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "@/redux/serviceSlice";

export default function Header() {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const { list: services } = useSelector((state) => state.services);

  const [openMega, setOpenMega] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (pathname.match(/\/admin(\/|$)/)) return null;

  // FETCH SERVICES GLOBAL
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  // Sticky header
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-open dropdown if on service page
  useEffect(() => {
    if (services?.some((s) => pathname.includes(`/services/${s.slug}`))) {
      setMobileOpen(true);
    }
  }, [pathname, services]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);

  const formatSlug = (slug) =>
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const isActive = (href) => pathname === href;
  const isServiceActive = (slug) => pathname.includes(`/services/${slug}`);

  // Close sidebar when link is clicked
  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  // ---------------- CUSTOM MOBILE SIDEBAR ----------------
  const CustomMobileSidebar = () => (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-90 transition-opacity duration-300 lg:hidden ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[290px] bg-white shadow-2xl z-100 transform transition-transform duration-300 ease-in-out rounded-r-2xl lg:hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full overflow-y-auto hide-scrollbar">
          {/* Sidebar Header */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-4">
              <Link href={"/"} className="flex items-center bg-[#ffffff] p-2 pr-5 px-4 rounded-2xl gap-3">
                <Image src="/logo.png" height={50} width={40} alt="logo" />
                <div className="flex flex-col">
                  <h1 className=" leading-4 tracking-wide font-semibold uppercase text-[#404A3D]">
                    Valerian <br /> Gardens
                    <br />
                    design
                  </h1>
                </div>
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>


          {/* Sidebar Navigation */}
          <nav className="flex flex-col gap-2 p-6 flex-1">
            {/* HOME */}
            <Link
              href={"/"}
              onClick={handleLinkClick}
              className={`px-4 py-3 rounded-lg uppercase font-medium transition-all ${isActive("/")
                ? "bg-[#8b8e7c]/20 text-[#404A3D] font-bold"
                : "text-gray-900 hover:bg-gray-100"
                }`}
            >
              HOME
            </Link>

            {/* SERVICES DROPDOWN */}
            <div className="mt-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileOpen((p) => !p);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg uppercase font-medium transition-all ${pathname.includes("/services")
                  ? "bg-[#8b8e7c]/20 text-[#404A3D] font-bold"
                  : "text-gray-900 hover:bg-gray-100"
                  }`}
              >
                <span>SERVICES</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${mobileOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
              </button>

              {/* Services List with smooth animation */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="flex flex-col gap-1 mt-2 pl-2">
                  {services?.map((service) => (
                    <Link
                      key={service._id}
                      href={`/services/${service.slug}`}
                      scroll={false}
                      onClick={handleLinkClick}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-all ${isServiceActive(service.slug)
                        ? "bg-[#8b8e7c]/30 text-[#404A3D] font-semibold"
                        : "text-gray-700 hover:bg-[#8b8e7c]/10"
                        }`}
                    >
                      <span className="text-sm">{formatSlug(service.slug)}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* PORTFOLIO */}
            <Link
              href={"/portfolio"}
              onClick={handleLinkClick}
              className={`px-4 py-3 rounded-lg uppercase font-medium transition-all ${isActive("/portfolio")
                ? "bg-[#8b8e7c]/20 text-[#404A3D] font-bold"
                : "text-gray-900 hover:bg-gray-100"
                }`}
            >
              PORTFOLIO
            </Link>

            {/* ABOUT US */}
            <Link
              href={"/about"}
              onClick={handleLinkClick}
              className={`px-4 py-3 rounded-lg uppercase font-medium transition-all ${isActive("/about")
                ? "bg-[#8b8e7c]/20 text-[#404A3D] font-bold"
                : "text-gray-900 hover:bg-gray-100"
                }`}
            >
              ABOUT US
            </Link>

            {/* CONTACT US */}
            <Link
              href={"/contact-us"}
              onClick={handleLinkClick}
              className={`px-4 py-3 rounded-lg uppercase font-medium transition-all ${isActive("/contact-us")
                ? "bg-[#8b8e7c]/20 text-[#404A3D] font-bold"
                : "text-gray-900 hover:bg-gray-100"
                }`}
            >
              CONTACT US
            </Link>
          </nav>

          {/* Sidebar Footer CTA */}
          <div className="p-6 border-t">
            <Link
              href={"/contact-us"}
              onClick={handleLinkClick}
              className="block w-full text-center px-6 py-3 rounded-full font-semibold text-sm bg-[#8b8e7c] text-white hover:bg-[#404A3D] transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  // ---------------- DESKTOP MEGA MENU ----------------
  const MegaMenu = () => (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[260px] animate-fadeIn">
      <ul className="space-y-3 mt-8 border-t-4 border-[#8b8e7c] bg-[#FDF6E9] text-gray-800 shadow-xl rounded-xl p-6">
        {services?.map((service) => (
          <Link key={service._id} href={`/services/${service.slug}`}>
            <li
              className={`flex items-center justify-between cursor-pointer p-2 rounded-md transition 
                ${isServiceActive(service.slug)
                  ? "bg-[#8b8e7c]/40 text-[#404A3D] font-semibold"
                  : "hover:bg-[#8b8e7c]/15"
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

  // ---------------- HEADER ----------------
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${isSticky ? "bg-[#FDF6E9] shadow-md py-3" : "bg-transparent py-6"
          }`}
      >
        <div className="mx-auto sm:mt-2.5 flex items-center justify-between px-6 lg:px-8">
          <Link href={"/"} className="flex items-center bg-[#ffffff] p-2 pr-5 px-4 rounded-2xl gap-3">
            <Image src="/logo.png" height={50} width={40} alt="logo" />
            <div className="flex flex-col">
              <h1 className=" leading-4 tracking-wide font-semibold uppercase text-[#404A3D]">
                Valerian <br /> Gardens
                <br />
                design
              </h1>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className={`hidden lg:flex items-center gap-4 ${isSticky ? "text-[#404A3D]" : "text-white"
              }`}
          >
            <Link
              href="/"
              className={`uppercase transition p-2 px-5 rounded-full ${isActive("/")
                ? `text-[#8b8e7c] ${!isSticky ? "bg-white" : "bg-white shadow"
                }`
                : "hover:text-[#8b8e7c] hover:bg-white"
                }`}
            >
              HOME
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOpenMega(true)}
              onMouseLeave={() => setOpenMega(false)}
            >
              <button
                className={`uppercase transition p-2 px-5 rounded-full ${pathname.includes("/services")
                  ? `text-[#8b8e7c] ${!isSticky ? "bg-white" : "bg-white shadow"
                  }`
                  : "hover:text-[#8b8e7c] hover:bg-white"
                  }`}
              >
                SERVICES
              </button>

              {openMega && <MegaMenu />}
            </div>

            <Link
              href="/portfolio"
              className={`uppercase transition p-2 px-5 rounded-full ${isActive("/portfolio")
                ? `text-[#8b8e7c] ${!isSticky ? "bg-white" : "bg-white shadow"
                }`
                : "hover:text-[#8b8e7c] hover:bg-white"
                }`}
            >
              PORTFOLIO
            </Link>

            <Link
              href="/about"
              className={`uppercase transition p-2 px-5 rounded-full ${isActive("/about")
                ? `text-[#8b8e7c] ${!isSticky ? "bg-white" : "bg-white shadow"
                }`
                : "hover:text-[#8b8e7c] hover:bg-white"
                }`}
            >
              ABOUT US
            </Link>

            <Link
              href="/contact-us"
              className={`uppercase transition p-2 px-5 rounded-full ${isActive("/contact-us")
                ? `text-[#8b8e7c] ${!isSticky ? "bg-white" : "bg-white shadow"
                }`
                : "hover:text-[#8b8e7c] hover:bg-white"
                }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="w-14 h-16 lg:hidden -mr-3 border rounded-md flex items-center justify-center bg-white hover:bg-gray-50 transition"
            >
              <Menu className="w-6 h-6 text-[#404A3D]" />
            </button>

            <Link
              href={"/contact-us"}
              className="hidden lg:flex items-center px-6 py-3 rounded-full font-semibold text-sm gap-2 whitespace-nowrap bg-[#8b8e7c] text-white hover:bg-[#404A3D] transition"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </header>

      {/* Custom Mobile Sidebar */}
      <CustomMobileSidebar />
    </>
  );
}