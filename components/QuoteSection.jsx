"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { api } from "@/lib/api";

function CustomSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);

  const options = [
    "Bespoke Garden Design",
    "Planting Plan",
    "Implementation",
    "Consultation",
    "Other",
  ];

  return (
    <div className="relative">
      {/* Select Box */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full bg-[#F7F5EB] px-4 py-4 rounded-xl outline-none text-left text-[#404A3D] flex items-center justify-between"
      >
        <span>{value || "Select Project Type"}</span>

        {/* Arrow */}
        <svg
          className={`w-5 h-5 text-[#404A3D] transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 right-0 bg-white border border-gray-300 rounded-xl shadow-xl mt-2 z-50">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="px-4 py-3 hover:bg-[#F7F5EB] cursor-pointer text-[#404A3D]"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default function QuoteSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [projectType, setProjectType] = useState(""); // NEW STATE

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      projectType,
      message: e.target.message.value,
    };

    try {
      await api.post("/contact", payload);
      setSuccess("Thank you! Your message has been sent.");
      e.target.reset();
      setProjectType("");
    } catch (err) {
      alert("Something went wrong, please try again.");
    }

    setLoading(false);
  }

  return (
    <section className="w-full bg-[#F9F7ED] py-16 px-6 lg:px-12">
      <div className="max-w-7xl bg-white rounded-4xl shadow-lg mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">
          <Image
            src="/about.jpeg"
            alt="Farmer"
            width={500}
            height={500}
            className="object-contain w-full sm:rounded-l-4xl rounded-t-4xl drop-shadow-xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-5 py-8">
          <p className="inline-flex items-center gap-2 bg-[#E8ECD9] text-[#4C5C3A] px-4 py-1 rounded-full font-semibold mb-4">
            <span className="size-2 bg-[#8b8e7c] rounded-full"></span>
            Free Quote
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#404A3D] mb-8">
            Book a consultation
          </h2>

          {success && (
            <p className="mb-4 text-green-700 font-medium bg-green-100 px-4 py-2 rounded-lg">
              {success}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NAME + PHONE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="bg-[#F7F5EB] px-4 py-4 rounded-xl outline-none w-full"
              />
              <input
                name="phone"
                type="text"
                required
                placeholder="Phone Number"
                className="bg-[#F7F5EB] px-4 py-4 rounded-xl outline-none w-full"
              />
            </div>

            {/* EMAIL + CUSTOM DROPDOWN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="bg-[#F7F5EB] px-4 py-4 rounded-xl outline-none w-full"
              />

              {/* Custom Dropdown */}
              <CustomSelect value={projectType} onChange={setProjectType} />
              <input type="hidden" name="projectType" value={projectType} />
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Message"
              className="bg-[#F7F5EB] px-4 py-4 rounded-xl w-full outline-none"
            ></textarea>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#8b8e7c]/80 text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-lg font-semibold hover:bg-[#8b8e7c]"
            >
              {loading ? "Sending..." : "Send Message"}
              <ArrowUpRight className="size-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
