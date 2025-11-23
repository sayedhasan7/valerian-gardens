"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import LeaveSVG from "./LeaveSVG";
import { MessageSquare } from "lucide-react";
import { api } from "@/lib/api";

const FilledStar = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
            d="M7.88838 -0.0159998C7.95238 -0.0159998 8.01638 -0.0159998 8.08038 -0.0159998C8.19771 0.0159998 8.30438 0.0799999 8.40038 0.176C8.99771 1.38133 9.74438 2.96533 10.6404 4.928C12.859 5.29067 14.5284 5.552 15.6484 5.712C15.8084 5.776 15.9204 5.87733 15.9844 6.016V6.384C15.899 6.52267 15.8084 6.64 15.7124 6.736L12.3204 10.208C12.5764 11.968 12.8484 13.728 13.1364 15.488C13.1257 15.7227 13.0137 15.888 12.8004 15.984H12.4164L10.6884 15.024C9.49371 14.352 8.59238 13.8507 7.98438 13.52L3.55238 15.984H3.16838C2.95504 15.888 2.84304 15.7227 2.83238 15.488C3.21638 13.1413 3.49371 11.3813 3.66438 10.208L0.288375 6.768C0.213708 6.68267 0.112375 6.55467 -0.015625 6.384V6.016C0.048375 5.86667 0.165708 5.76533 0.336375 5.712C1.44571 5.552 3.10971 5.29067 5.32838 4.928C5.93638 3.60533 6.68304 2.02133 7.56838 0.176C7.66438 0.0799999 7.77104 0.0159998 7.88838 -0.0159998Z"
            fill="#FDCF00"
        />
    </svg>
);

const EmptyStar = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
            d="M7.88838 -0.0159998C7.95238 -0.0159998 8.01638 -0.0159998 8.08038 -0.0159998C8.19771 0.0159998 8.30438 0.0799999 8.40038 0.176C8.99771 1.38133 9.74438 2.96533 10.6404 4.928C12.859 5.29067 14.5284 5.552 15.6484 5.712C15.8084 5.776 15.9204 5.87733 15.9844 6.016V6.384C15.899 6.52267 15.8084 6.64 15.7124 6.736L12.3204 10.208C12.5764 11.968 12.8484 13.728 13.1364 15.488C13.1257 15.7227 13.0137 15.888 12.8004 15.984H12.4164L10.6884 15.024C9.49371 14.352 8.59238 13.8507 7.98438 13.52L3.55238 15.984H3.16838C2.95504 15.888 2.84304 15.7227 2.83238 15.488C3.21638 13.1413 3.49371 11.3813 3.66438 10.208L0.288375 6.768C0.213708 6.68267 0.112375 6.55467 -0.015625 6.384V6.016C0.048375 5.86667 0.165708 5.76533 0.336375 5.712C1.44571 5.552 3.10971 5.29067 5.32838 4.928C5.93638 3.60533 6.68304 2.02133 7.56838 0.176C7.66438 0.0799999 7.77104 0.0159998 7.88838 -0.0159998Z"
            fill="#EDDD5E"
            fillOpacity="0.5"
        />
    </svg>
);

export default function TestimonialsSection() {
    const [allReviews, setAllReviews] = useState([]);
    const [visibleCount, setVisibleCount] = useState(3);

    // ============================
    // FETCH REVIEWS FROM BACKEND
    // ============================
    useEffect(() => {
        async function fetchReviews() {
            try {
                const data = await api.get("/reviews", {
                    method: "GET",
                    cache: "no-store",
                });
                setAllReviews(data.data.reviews);
            } catch (err) {
                console.error("Error fetching reviews:", err);

                // fallback dummy data
                setAllReviews([
                    {
                        name: "Sarah Mitchell",
                        role: "Homeowner",
                        rating: 5,
                        text: "Amazing service!",
                        profilePic: "/testimonial.jpeg"
                    },
                    {
                        name: "James Robertson",
                        role: "Property Owner",
                        rating: 4,
                        text: "Great experience overall.",
                        profilePic: "/testimonial.jpeg"
                    },
                    {
                        name: "Emily Chen",
                        role: "Garden Enthusiast",
                        rating: 5,
                        text: "Loved the ecological approach!",
                        profilePic: "/testimonial.jpeg"
                    },
                    {
                        name: "Alex Carter",
                        role: "Villa Owner",
                        rating: 3,
                        text: "Good work, can improve in some areas. sfdsfsf sfdsf lorem ipsum",
                        profilePic: "/testimonial.jpeg"
                    }
                ]);
            }
        }

        fetchReviews();
    }, []);

    // LOAD NEXT 3 REVIEWS
    const loadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    return (
        <section className="block relative bg-[#F8F7F0] overflow-hidden">

            {/* Background SVGs */}
            <LeaveSVG className="absolute hidden lg:block left-0 top-10 rotate-45 z-0" />
            <LeaveSVG className="absolute lg:hidden right-0 -top-10 -rotate-45 scale-x-[-1] z-0" />
            <LeaveSVG className="absolute hidden lg:block right-0 top-10 -rotate-45 scale-x-[-1] z-0" />

            <div className="mx-auto w-full max-w-7xl px-5 py-24 md:px-10 md:py-20">

                {/* Heading */}
                <h2 className="mx-auto mb-8 max-w-3xl text-center text-3xl text-[#404A3D] font-bold md:mb-12 md:text-5xl lg:mb-16">
                    What our clients are saying
                </h2>

                {/* Cards */}
                <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:mb-8">

                    {allReviews.slice(0, visibleCount).map((testimonial, i) => (
                        <div data-aos="fade-in" className="relative"
                            key={i}>
                            {/* Comment Icon */}
                            <div
                                className="absolute right-2 top-0 p-2 rounded-full bg-[#EDDD5E]"
                                size={20}
                            >  <svg
                                width="34"
                                height="34"
                                viewBox="0 0 50 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                    <g clipPath="url(#clip0_1_365)">
                                        <path
                                            d="M22.2752 9.61538L13.1405 26.6026L7.85208 28.0449C8.41297 26.9765 9.12077 26.0283 9.97547 25.2003C10.8035 24.4257 11.6849 24.0385 12.6197 24.0385C14.8633 24.0385 16.9066 24.9866 18.7495 26.883C20.5925 28.7794 21.5139 31.1298 21.5139 33.9343C21.5139 36.9525 20.4856 39.5566 18.429 41.7468C16.3724 43.937 13.835 45.0321 10.8168 45.0321C7.9055 45.0321 5.3681 43.9637 3.20464 41.8269C1.04118 39.6902 -0.0271974 37.0593 -0.000487976 33.9343C-0.000487976 32.7591 0.253251 31.3301 0.76073 29.6474C1.26821 27.9647 2.21639 25.8413 3.60528 23.2772L13.5412 4.96795L22.2752 9.61538ZM49.9995 9.61538L40.8248 26.6026L35.5764 28.0449C36.1106 27.0032 36.7917 26.055 37.6197 25.2003C38.3943 24.4257 39.3024 24.0385 40.3441 24.0385C42.5609 24.0385 44.5909 24.9866 46.4338 26.883C48.2768 28.7794 49.1982 31.1298 49.1982 33.9343C49.1982 36.9525 48.1566 39.5566 46.0732 41.7468C43.9899 43.937 41.4258 45.0321 38.3809 45.0321C35.5497 45.0321 33.0658 43.9637 30.929 41.8269C28.7922 39.6902 27.7105 37.0593 27.6838 33.9343C27.6838 32.7324 27.9509 31.3034 28.4851 29.6474C29.0193 27.9915 29.9541 25.8681 31.2896 23.2772L41.2255 4.96795L49.9995 9.61538Z"
                                            fill="#404A3D"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_365">
                                            <rect
                                                width="50"
                                                height="50"
                                                fill="white"
                                                transform="matrix(1 0 0 -1 0 50)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg></div>
                            <div
                                className="relative grid h-full inverted-radius-5 grid-cols-1 gap-6 rounded-md bg-white p-8 md:p-10 shadow-sm"
                            >

                                {/* Dynamic Stars */}
                                <div className="flex">
                                    {Array.from({ length: 5 }).map((_, j) => {
                                        const filled = j < testimonial.rating;
                                        return (
                                            <div key={j} className="mr-1">
                                                {filled ? <FilledStar /> : <EmptyStar />}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Review Text */}
                                <div className="text-[#666666]">
                                    &ldquo;{testimonial.text}&rdquo;
                                </div>

                                {/* Profile */}
                                <div className="flex flex-row items-start">
                                    <Image
                                        src={testimonial.profilePic || "/testimonial.jpeg"}
                                        alt={testimonial.name}
                                        width={64}
                                        height={64}
                                        className="mr-4 h-16 w-16 rounded-full object-cover"
                                    />
                                    <div className="flex flex-col items-start">
                                        <h6 className="text-base font-bold text-[#404A3D]">{testimonial.name}</h6>
                                        <p className="text-sm text-[#666666]">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* LOAD MORE BUTTON */}
                {visibleCount < allReviews.length && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={loadMore}
                            className="px-6 py-3 rounded-3xl bg-[#5B8C51] text-white font-semibold"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
