"use client";

import Image from "next/image";
import { Lens } from "./ui/lens";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { ArrowUpRight, Sprout, ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useState } from "react";

export default function ServicesSection({ isServicePage = false }) {
  const { list: services } = useSelector((state) => state.services);

  const itemsPerPage = 3;
  const totalPages = Math.ceil((services?.length || 0) / itemsPerPage);

  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const currentItems = services.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section className={`py-24 pb-28 px-6 ${isServicePage ? "bg-[#8b8e7c]" : "bg-[#8b8e7c]"} relative`}>
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/logo.png')] bg-repeat bg-center" />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        {!isServicePage &&
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[#404A3D] flex gap-2 items-center bg-white w-fit py-2 px-4 rounded-full font-semibold mb-3 tracking-wide">
                <Sprout className="size-4" /> What We Do.
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold text-white">Services</h2>
            </div>

            {/* NEXT / PREV BUTTONS */}
            {services.length > 3 && (
              <div className="flex gap-3">
                <button
                  onClick={prevPage}
                  disabled={page === 0}
                  className={`w-12 h-12 bg-white/20 rounded-full flex items-center justify-center transition ${page === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/30"
                    }`}
                >
                  <ChevronLeft className="text-white" />
                </button>

                <button
                  onClick={nextPage}
                  disabled={page === totalPages - 1}
                  className={`w-12 h-12 bg-white/20 rounded-full flex items-center justify-center transition ${page === totalPages - 1
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-white/30"
                    }`}
                >
                  <ChevronRight className="text-white" />
                </button>
              </div>
            )}
          </div>
        }

        {/* GRID (3 items per page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
          {currentItems.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>

        {/* PAGINATION DOTS (optional but clean) */}
        {services.length > 3 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-3 h-3 rounded-full transition ${page === i ? "bg-white" : "bg-white/40"
                  }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function ServiceCard({ service }) {
  return (
    <div className="relative group cursor-pointer">
      <Card className="relative inverted-radius-4 shadow-none transition-all duration-300 group-hover:shadow-xl rounded-3xl">
        <CardHeader>
          <Lens zoomFactor={2} lensSize={150} isStatic={false}>
            <Image
              src={service.imageUrl || "/placeholder.jpg"}
              height={100}
              width={400}
              className="rounded-t-3xl w-full h-48 sm:h-60 object-cover"
              alt={service.title}
            />
          </Lens>
        </CardHeader>

        <CardContent>
          <CardTitle className="text-2xl text-[#404A3D] group-hover:text-black transition mb-4">
            {service.title}
          </CardTitle>
        </CardContent>

        <CardFooter />
      </Card>

      <Link
        href={`/services/${service.slug}`}
        className="absolute bottom-0 right-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow hover:rotate-45 transition"
      >
        <ArrowUpRight />
      </Link>
    </div>
  );
}
