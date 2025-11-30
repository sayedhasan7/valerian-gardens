"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"; // Adjust path to where you put the Aceternity UI components
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/lib/auth"; // Your auth helper
import { IconArrowLeft, IconBrandTabler, IconBriefcase, IconMail, IconMessage, IconPackage } from "@tabler/icons-react";
import Image from "next/image";
import { Power } from "lucide-react";

export default function AdminSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Hydration fix
  useEffect(() => {
    setMounted(true);
  }, []);

  const isLoggedIn = () => {
    if (typeof window === "undefined") return false;
    return !!sessionStorage.getItem("token");
  };

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  // Define Links with Active Check logic inside the render
  const links = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Reviews",
      href: "/admin/reviews",
      icon: (
        <IconMessage className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Portfolio",
      href: "/admin/portfolio",
      icon: (
        <IconBriefcase className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Services",
      href: "/admin/services",
      icon: (
        <IconPackage className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Contact",
      href: "/admin/contact",
      icon: (
        <IconMail className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  // Prevent rendering if not mounted or not logged in (optional protection)
  if (!mounted) return null;
  // Note: Usually redirection happens in middleware, but we'll keep your check here
  if (!isLoggedIn()) return null;

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-full mx-auto border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // Full screen height
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => {
                // ACTIVE STATUS LOGIC
                const isActive = pathname === link.href;

                return (
                  <SidebarLink
                    key={idx}
                    link={link}
                    // We pass a className to highlight the active item
                    className={cn(
                      isActive
                        ? "bg-neutral-200 dark:bg-neutral-700 text-black rounded-md"
                        : "text-neutral-700 dark:text-neutral-200"
                    )}
                  />
                );
              })}
            </div>
          </div>

          {/* USER / LOGOUT SECTION */}
          <div>
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded cursor-pointer bg-red-500 text-white px-1 pr-4 py-1 hover:bg-red-600 transition"
            >
              <Power className="h-5 w-5 shrink-0" />
              Logout
            </button>

            {/* <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <SidebarLink
                link={{
                    label: "Admin User",
                    href: "#",
                    icon: (
                    <div className="h-7 w-7 shrink-0 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                        AD
                    </div>
                    ),
                }}
                />
            </div> */}
          </div>
        </SidebarBody>
      </Sidebar>

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-1 overflow-y-scroll scroll-smooth scrollbar-hide">
        <div className="p-2 md:p-5 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="/admin"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <Image height={20} width={25}  src={"/logo.png"} alt="logo" />
      {/* <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" /> */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-xl text-black dark:text-white whitespace-pre"
      >
        Valerian Garden Admin
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="/admin"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >

      <Image height={20} width={25} src={"/logo.png"} alt="logo" />
    </Link>
  );
};