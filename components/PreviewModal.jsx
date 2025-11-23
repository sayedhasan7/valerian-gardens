"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PreviewModal({
  show,
  onClose,
  img,
  next,
  prev,
  currentIndex,
  total,
}) {
  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[99999]"
        onClick={onClose}
      >
        {/* IMAGE WRAPPER */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl w-[90%]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200 transition z-20"
          >
            <X className="size-6" />
          </button>

          {/* PREV BUTTON */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition z-20"
          >
            <ChevronLeft className="size-6 text-gray-800" />
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition z-20"
          >
            <ChevronRight className="size-6 text-gray-800" />
          </button>

          {/* IMAGE */}
          <Image
            src={img}
            width={1600}
            height={1000}
            alt="Preview"
            className="rounded-2xl w-full h-[90vh] object-cover"
          />

          {/* PAGINATION */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-1 rounded-full text-sm tracking-wide">
            {currentIndex + 1} / {total}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
