import Image from "next/image";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#F8F7F0]">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-[#5B8C51]">
        <div className="absolute inset-0 bg-[url('/grass.png')] bg-cover bg-center bg-no-repeat opacity-20" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Let&apos;s discuss your garden project and bring your outdoor vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#404A3D] mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B8C51]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B8C51]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+44 123 456 7890"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B8C51]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Project Type</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B8C51]">
                  <option>Select a service</option>
                  <option>Bespoke Garden Design</option>
                  <option>Planting Plan</option>
                  <option>Implementation</option>
                  <option>Consultation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your garden project..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B8C51]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#5B8C51] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4a7441] transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#404A3D] mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or ready to start your garden project? 
                We&apos;d love to hear from you. Fill out the form or reach out through any of the methods below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#EDDD5E] rounded-full flex items-center justify-center shrink-0">
                  <i className="fas fa-envelope text-[#404A3D]"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-[#404A3D] mb-1">Email</h3>
                  <p className="text-gray-600">info@valeriangardens.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#EDDD5E] rounded-full flex items-center justify-center shrink-0">
                  <i className="fas fa-phone text-[#404A3D]"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-[#404A3D] mb-1">Phone</h3>
                  <p className="text-gray-600">+44 (0) 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#EDDD5E] rounded-full flex items-center justify-center shrink-0">
                  <i className="fas fa-map-marker-alt text-[#404A3D]"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-[#404A3D] mb-1">Location</h3>
                  <p className="text-gray-600">London, United Kingdom</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#EDDD5E] rounded-full flex items-center justify-center shrink-0">
                  <i className="fas fa-clock text-[#404A3D]"></i>
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
          <h2 className="text-4xl font-bold text-[#404A3D] mb-6">Ready to Transform Your Garden?</h2>
          <p className="text-gray-800 mb-8 text-lg">
            Book a consultation to discuss your garden design project and see how we can help bring your vision to life.
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
