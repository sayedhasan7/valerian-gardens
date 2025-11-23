"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });

    // Refresh AOS on route changes or dynamic content
    const handleRouteChange = () => {
      AOS.refresh();
    };

    window.addEventListener("load", handleRouteChange);
    
    return () => {
      window.removeEventListener("load", handleRouteChange);
    };
  }, []);

  // Prevent hydration mismatch by not rendering children until client-side mount
  if (!mounted) {
    return <div suppressHydrationWarning>{children}</div>;
  }

  return <div suppressHydrationWarning>{children}</div>;
}