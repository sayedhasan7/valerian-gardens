"use client";

import { useState } from "react";
import Image from "next/image";
import HeroVideoSection from "../../components/HeroVideoSection";
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import { api } from "@/lib/api"; // axios instance

export default function ContactUsPage() {
  const item = {
    title: "Contact Us",
    breadcrumb: [
      { name: "Home", link: "/" },
      { name: "Contact Us", link: "/contact-us" },
    ],
    mobileVideo:
      "https://res.cloudinary.com/sayed12m/video/upload/v1763787211/flwqsv6s2ecqyym8k50k.mp4",
    video:
      "https://res.cloudinary.com/sayed12m/video/upload/v1763749426/wr4oqn5vpbqssecrbzjn.mp4",
    desc: "Transform your space with easy home gardening tips. Grow fresh vegetables, herbs, and flowers at home—perfect for beginners.",
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      projectType: e.target.projectType.value,
      message: e.target.message.value,
    };

    try {
      await api.post("/contact", payload);
      setSuccess("Thank you! Your message has been sent.");
      e.target.reset();
    } catch (err) {
      alert("Something went wrong, please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#F8F7F0]">
      {/* Hero Section */}
      <HeroVideoSection {...item} />

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#404A3D] mb-6">
              Send us a message
            </h2>

            {success && (
              <p className="mb-4 text-green-700 font-medium bg-green-100 px-4 py-2 rounded-lg">
                {success}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B8C51]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B8C51]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+44 123 456 7890"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B8C51]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B8C51]"
                >
                  <option value="">Select a service</option>
                  <option>Bespoke Garden Design</option>
                  <option>Planting Plan</option>
                  <option>Implementation</option>
                  <option>Consultation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your garden project..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B8C51]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#5B8C51] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4a7441] transition-all disabled:bg-opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#404A3D] mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or ready to start your garden
                project? We'd love to hear from you. Fill out the form or reach
                out through any of the methods below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#EDDD5E] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-[#404A3D]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#404A3D] mb-1">Email</h3>
                  <p className="text-gray-600">info@valeriangardens.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#EDDD5E] rounded-full flex items-center justify-center shrink-0">
                  <PhoneCall className="text-[#404A3D]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#404A3D] mb-1">Phone</h3>
                  <p className="text-gray-600">+44 (0) 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#EDDD5E] rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-[#404A3D]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#404A3D] mb-1">Location</h3>
                  <p className="text-gray-600">London, United Kingdom</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#EDDD5E] rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-[#404A3D]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#404A3D] mb-1">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: By appointment</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="mt-8">
              <Image
                src="/garden-3.jpeg"
                alt="Garden design"
                width={600}
                height={400}
                className="rounded-3xl w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#EDDD5E]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#404A3D] mb-6">
            Ready to Transform Your Garden?
          </h2>

          <p className="text-gray-800 mb-8 text-lg">
            Book a consultation to discuss your garden design project and see
            how we can help bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#5B8C51] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4a7441] transition-all">
              Schedule Consultation
            </button>
            <button className="bg-white text-[#404A3D] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
