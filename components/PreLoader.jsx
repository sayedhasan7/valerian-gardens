"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => setIsLoaded(true), 2000);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "grayscale(1)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#FDF6ED] z-[999999] hide-scrollbar flex flex-col items-center justify-center"
        >
          {/* LOGO WITH SHINE EFFECT */}
          <motion.div
            initial={{ scale: 0.75, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[110px] h-[110px] flex items-center justify-center"
          >
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="Loading Logo"
              className="relative z-10"
            />

            <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
              <div className="shine-effect"></div>
            </div>
          </motion.div>

          {/* ANIMATED TEXT LOADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6"
          >
            <div className="loader-text">VALERIAN GARDEN</div>
            <div className="text-center">DESIGN</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
