import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8F7F0]">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-[#5B8C51]">
        <div className="absolute inset-0 bg-[url('/grass.png')] bg-cover bg-center bg-no-repeat opacity-20" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Valerian Gardens</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Creating beautiful, sustainable gardens that connect people with nature.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              width={1000}
              height={1000}
              className="rounded-3xl inverted-radius-left w-full h-[600px] object-cover"
              src="/about.jpeg"
              alt="Donata - Garden Designer"
            />
            <div className="absolute top-8 right-8 bg-[#EDDD5E] p-6 rounded-2xl">
              <p className="text-4xl font-bold text-[#404A3D]">
                <span className="text-[#5B8C51]">*</span> 3+
              </p>
              <p className="text-[#666666] font-semibold">Years of Study</p>
            </div>
          </div>

          <div>
            <p className="text-yellow-600 font-semibold mb-3 tracking-wide">ABOUT ME</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#404A3D] mb-6 leading-tight">
              Hello, I&apos;m Donata
            </h2>

            <div className="text-gray-600 mb-8 leading-relaxed flex flex-col gap-4">
              <p>
                I&apos;m a garden designer passionate about creating spaces that connect people with nature.
              </p>
              <p>
                After completing three years of Garden Design at the renowned{" "}
                <span className="font-bold">Capel Manor College</span> in London, I began to specialise 
                in ecological and sustainable planting. My work is inspired by nature and focuses on 
                crafting gardens that are not only beautiful, but also resilient, wildlife-friendly, 
                and in harmony with their surroundings.
              </p>
              <p>
                Every project begins with understanding how a garden will be used and how it can enhance 
                the lives of those who spend time in it. Whether it&apos;s a small city courtyard, a 
                modern family garden, or a naturalistic landscape, I aim to bring together form, texture, 
                and planting to create places that feel alive throughout the seasons.
              </p>
              <p>
                I believe a successful garden should evolve gracefully over time, supporting biodiversity 
                while offering a calm, restorative space for people. By combining design creativity with 
                a respect for ecology, my goal is to create gardens that are both environmentally 
                responsible and deeply personal.
              </p>
              <p className="font-semibold text-[#5B8C51]">
                Let&apos;s grow something beautiful, sustainable, and uniquely yours!
              </p>
            </div>

            <button className="bg-[#5B8C51] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4a7441] transition flex items-center gap-2">
              Get In Touch <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-600 font-semibold mb-3 tracking-wide">OUR APPROACH</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#404A3D]">Design Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fa-leaf",
                title: "Ecological Design",
                desc: "Creating gardens that support local biodiversity and work in harmony with nature."
              },
              {
                icon: "fa-heart",
                title: "Personal Touch",
                desc: "Every garden is unique, reflecting your style, needs, and the character of your space."
              },
              {
                icon: "fa-seedling",
                title: "Sustainable Practices",
                desc: "Using environmentally responsible methods and materials for long-lasting results."
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-8 rounded-3xl bg-[#F8F7F0]">
                <div className="w-20 h-20 bg-[#EDDD5E] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <i className={`fas ${item.icon} text-3xl text-[#404A3D]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#404A3D] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-semibold mb-3 tracking-wide">INSPIRATION</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#404A3D]">Nature&apos;s Beauty</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["/flower-1.jpeg", "/flower-2.jpeg", "/flower-3.jpeg", "/flower-4.jpeg"].map((img, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={img}
                  alt={`Garden inspiration ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
