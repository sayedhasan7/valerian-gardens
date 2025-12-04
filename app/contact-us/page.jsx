"use client";

import { useState } from "react";
import Image from "next/image";
import HeroVideoSection from "../../components/HeroVideoSection";
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import { api } from "@/lib/api";

// Stars
const FilledStar = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      d="M7.88838 -0.0159998C7.95238 -0.0159998 8.01638 -0.0159998 8.08038 -0.0159998C8.19771 0.0159998 8.30438 0.0799999 8.40038 0.176C8.99771 1.38133 9.74438 2.96533 10.6404 4.928C12.859 5.29067 14.5284 5.552 15.6484 5.712C15.8084 5.776 15.9204 5.87733 15.9844 6.016V6.384C15.899 6.52267 15.8084 6.64 15.7124 6.736L12.3204 10.208C12.5764 11.968 12.8484 13.728 13.1364 15.488C13.1257 15.7227 13.0137 15.888 12.8004 15.984H12.4164L10.6884 15.024C9.49371 14.352 8.59238 13.8507 7.98438 13.52L3.55238 15.984H3.16838C2.95504 15.888 2.84304 15.7227 2.83238 15.488C3.21638 13.1413 3.49371 11.3813 3.66438 10.208L0.288375 6.768C0.213708 6.68267 0.112375 6.55467 -0.015625 6.384V6.016C0.048375 5.86667 0.165708 5.76533 0.336375 5.712C1.44571 5.552 3.10971 5.29067 5.32838 4.928C5.93638 3.60533 6.68304 2.02133 7.56838 0.176C7.66438 0.0799999 7.77104 0.0159998 7.88838 -0.0159998Z"
      fill="#FDCF00"
    />
  </svg>
);

const EmptyStar = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      d="M7.88838 -0.0159998C7.95238 -0.0159998 8.01638 -0.0159998 8.08038 -0.0159998C8.19771 0.0159998 8.30438 0.0799999 8.40038 0.176C8.99771 1.38133 9.74438 2.96533 10.6404 4.928C12.859 5.29067 14.5284 5.552 15.6484 5.712C15.8084 5.776 15.9204 5.87733 15.9844 6.016V6.384C15.899 6.52267 15.8084 6.64 15.7124 6.736L12.3204 10.208C12.5764 11.968 12.8484 13.728 13.1364 15.488C13.1257 15.7227 13.0137 15.888 12.8004 15.984H12.4164L10.6884 15.024C9.49371 14.352 8.59238 13.8507 7.98438 13.52L3.55238 15.984H3.16838C2.95504 15.888 2.84304 15.7227 2.83238 15.488C3.21638 13.1413 3.49371 11.3813 3.66438 10.208L0.288375 6.768C0.213708 6.68267 0.112375 6.55467 -0.015625 6.384V6.016C0.048375 5.86667 0.165708 5.76533 0.336375 5.712C1.44571 5.552 3.10971 5.29067 5.32838 4.928C5.93638 3.60533 6.68304 2.02133 7.56838 0.176C7.66438 0.0799999 7.77104 0.0159998 7.88838 -0.0159998Z"
      fill="#8b8e7c"
      fillOpacity="0.5"
    />
  </svg>
);

export default function ContactUsPage() {
  const item = {
    title: "Write a Review",
    breadcrumb: [
      { name: "Home", link: "/" },
      { name: "Review", link: "/contact-us" },
    ],
    mobileVideo:
      "https://res.cloudinary.com/sayed12m/video/upload/v1763787211/flwqsv6s2ecqyym8k50k.mp4",
    video:
      "https://res.cloudinary.com/sayed12m/video/upload/v1763749426/wr4oqn5vpbqssecrbzjn.mp4",
    desc: "Share your experience and help others learn about our service.",
  };

  // FORM STATES
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      title: e.target.title.value,
      review: e.target.review.value,
      rating,
    };

    try {
      await api.post("/reviews", payload);
      setSuccess("Thank you! Your review has been submitted.");
      e.target.reset();
      setRating(0);
    } catch (err) {
      alert("Error submitting review!");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F7F0]">
      <HeroVideoSection {...item} />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Review Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#404A3D] mb-6">
              Write a Review
            </h2>

            {success && (
              <p className="mb-4 text-green-700 font-medium bg-green-100 px-4 py-2 rounded-lg">
                {success}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-[#F7F5EB] px-4 py-4 rounded-xl outline-none"
              />

              {/* EMAIL & PHONE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="bg-[#F7F5EB] px-4 py-4 rounded-xl outline-none w-full"
                />
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="bg-[#F7F5EB] px-4 py-4 rounded-xl outline-none w-full"
                />
              </div>

              {/* TITLE */}
              <input
                type="text"
                name="title"
                required
                placeholder="Review Title"
                className="w-full bg-[#F7F5EB] px-4 py-4 rounded-xl outline-none"
              />

              {/* STAR RATING */}
              <div>
                <p className="font-semibold mb-2 text-[#404A3D]">Rating</p>
                <div className="flex gap-2">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const starIndex = i + 1;
                    return (
                      <span
                        key={i}
                        onClick={() => setRating(starIndex)}
                        onMouseEnter={() => setHoverRating(starIndex)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="cursor-pointer"
                      >
                        {starIndex <= (hoverRating || rating) ? (
                          <FilledStar size={28} />
                        ) : (
                          <EmptyStar size={28} />
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* REVIEW */}
              <textarea
                name="review"
                rows={5}
                required
                placeholder="Write your review..."
                className="w-full bg-[#F7F5EB] px-4 py-4 rounded-xl outline-none"
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="bg-[#8b8e7c]/90 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#8b8e7c] transition-all"
              >
                {loading ? "Submitting..." : "Submit Review"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#404A3D] mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-[#404A3D]" size={32} />
                <div>
                  <h3 className="font-semibold text-[#404A3D] mb-1">Email</h3>
                  <p className="text-gray-600">info@valeriangardens.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <PhoneCall className="text-[#404A3D]" size={32} />
                <div>
                  <h3 className="font-semibold text-[#404A3D] mb-1">Phone</h3>
                  <p className="text-gray-600">+44 (0) 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-[#404A3D]" size={32} />
                <div>
                  <h3 className="font-semibold text-[#404A3D] mb-1">Location</h3>
                  <p className="text-gray-600">London, United Kingdom</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-[#404A3D]" size={32} />
                <div>
                  <h3 className="font-semibold text-[#404A3D] mb-1">Working Hours</h3>
                  <p className="text-gray-600">Mon - Fri: 9 AM - 6 PM</p>
                  <p className="text-gray-600">Saturday: By appointment</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Image
                src="/garden-3.jpeg"
                alt="garden"
                width={600}
                height={400}
                className="rounded-3xl w-full h-[300px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
