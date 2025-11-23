"use client";

import Image from "next/image";
import { Lens } from "./ui/lens";
import { Leaf } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import PreviewModal from "./PreviewModal";
import LeaveSVG from "./LeaveSVG";
import { api } from "@/lib/api";

export default function GallerySection({ secondLeafVisible = false }) {
  const [allImages, setAllImages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // first 8 images shown
  const [previewIndex, setPreviewIndex] = useState(null);

  const longPressTimer = useRef(null);

  // ======================
  // Fetch Images from API
  // ======================
  useEffect(() => {
    async function loadImages() {
      try {
        const { data } = await api.get("/portfolio", {
          method: "GET",
          cache: "no-store",
        });
        console.log(data)
        let imgarray = data.items.map((item) => item.imageUrl);
        // backend must return: { images: ["/img1.jpg", "/img2.jpg", ...] }
        setAllImages(imgarray || []);
      } catch (err) {
        console.error("Gallery fetch failed:", err);

        // fallback demo data (remove later)
        setAllImages([
          "/flower-4.jpeg",
          "/flower-5.jpeg",
          "/flower-6.jpeg",
          "/flower-7.jpeg",
          "/flower-8.jpeg",
          "/flower-9.jpeg",
          "/garden-5.jpeg",
          "/flower-1.jpeg",
          "/garden-2.jpeg",
          "/garden-3.jpeg",
          "/flower-2.jpeg",
        ]);
      }
    }

    loadImages();
  }, []);

  // LOAD MORE FUNCTION
  const loadMore = () => {
    setVisibleCount((prev) => prev + 8); // load next 8
  };

  // ======================
  // Preview Modal Handlers
  // ======================
  const openPreview = (index) => setPreviewIndex(index);
  const closePreview = () => setPreviewIndex(null);

  const nextImage = () => {
    setPreviewIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setPreviewIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // long press for mobile
  const startPress = (index) => {
    longPressTimer.current = setTimeout(() => {
      setPreviewIndex(index);
    }, 450);
  };

  const endPress = () => clearTimeout(longPressTimer.current);

  return (
    <section className="py-24 px-6 bg-[#F9F7ED] relative overflow-hidden">
      {/* Background grass */}
      <div className="absolute inset-0 bg-[url('/grass.png')] bg-cover bg-center" />

      {/* Leafs */}
      <LeaveSVG
        data-aos="fade-in"
        className="absolute right-0 -top-10 hidden lg:block rotate-[-45deg] scale-x-[-1] z-0"
      />

      <LeaveSVG
        data-aos="fade-in"
        className="absolute left-0 -top-10 lg:block rotate-45 z-0"
      />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADING */}
        <div className="text-center mb-12">
          <p className="text-[#404A3D] flex gap-2 mb-4 items-center bg-white mx-auto w-fit py-2 px-4 rounded-full font-semibold">
            <Leaf className="size-4" /> Our Work
          </p>
          <h2 className="text-4xl text-[#404A3D] md:text-5xl font-bold">
            Garden Gallery
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allImages.slice(0, visibleCount).map((img, i) => (
            <div
              key={i}
              onMouseDown={() => startPress(i)}
              onMouseUp={endPress}
              onMouseLeave={endPress}
              onTouchStart={() => startPress(i)}
              onTouchEnd={endPress}
              onClick={() => openPreview(i)}
              className="cursor-zoom-in"
            >
              <Lens zoomFactor={2} lensSize={150}>
                <Image
                  src={img}
                  alt={`Garden work ${i + 1}`}
                  width={400}
                  height={400}
                  className="rounded-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  data-aos="fade-in-up"
                />
              </Lens>
            </div>
          ))}
        </div>

        {/* LOAD MORE BUTTON */}
        {visibleCount < allImages.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="px-6 py-3 rounded-3xl bg-[#5B8C51] text-white font-semibold"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* IMAGE PREVIEW MODAL */}
      <PreviewModal
        show={previewIndex !== null}
        img={allImages[previewIndex] || ""}
        onClose={closePreview}
        next={nextImage}
        prev={prevImage}
        currentIndex={previewIndex ?? 0}
        total={allImages.length}
      />
    </section>
  );
}
