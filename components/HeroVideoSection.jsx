"use client";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function HeroVideoSection({
  title,
  breadcrumb = [],
  video = "https://res.cloudinary.com/sayed12m/video/upload/v1763787211/flwqsv6s2ecqyym8k50k.mp4",
  mobileVideo,
  // overlay = "from-green-900/70 via-green-800/60 to-green-900/70 opacity-95",
}) {
  return (
    <section className="w-full overflow-hidden bg-[#F8F7F0] sm:p-5 p-2">
      <div className="relative inverted-radius">
        <div className="absolute inset-0 backdrop-blur-xl h-24 opacity-50"></div>

        {/* VIDEO */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={mobileVideo} media="(max-width: 768px)" type="video/mp4" />
          <source src={video} media="(min-width: 769px)" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* OVERLAY */}
        {/* <div className={`absolute inset-0 bg-linear-to-b ${overlay}`}></div> */}

        <div className="relative h-[50vh] z-10 max-w-7xl mx-auto px-6 flex items-baseline-last">
          <div className="md:px-5 xl:px-0 mb-24">

            {/* TITLE */}
            <h1
              data-aos="fade-in"
              className="text-white text-4xl sm:text-4xl md:text-5xl font-medium leading-tight mb-2"
            >
              {title}
            </h1>

            {/* BREADCRUMB */}
            <Breadcrumb className="mt-4" data-aos="fade-in">
              <BreadcrumbList className="text-white/80">
                {breadcrumb.map((crumb, i) => (
                  <BreadcrumbItem key={i}>
                    <BreadcrumbLink
                      href={crumb.link}
                      className={`${
                        breadcrumb.length - 1 === i
                          ? "text-white"
                          : "text-white/80"
                      } hover:text-white transition`}
                    >
                      {crumb.name}
                    </BreadcrumbLink>

                    {i !== breadcrumb.length - 1 && (
                      <BreadcrumbSeparator className="text-white/60" />
                    )}
                  </BreadcrumbItem>
                ))}
              </BreadcrumbList>
            </Breadcrumb>

          </div>
        </div>
      </div>
    </section>
  );
}
