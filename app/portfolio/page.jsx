import Image from "next/image";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Modern Family Garden",
      category: "Residential",
      image: "/garden-1.jpeg",
      description: "A contemporary family garden featuring sustainable planting and wildlife-friendly design elements."
    },
    {
      title: "Courtyard Oasis",
      category: "Urban Design",
      image: "/garden-2.jpeg",
      description: "Transformed a small city courtyard into a peaceful retreat with layered planting and natural materials."
    },
    {
      title: "Naturalistic Landscape",
      category: "Ecological",
      image: "/garden-3.jpeg",
      description: "A naturalistic garden design that supports biodiversity and creates year-round visual interest."
    },
    {
      title: "Cottage Garden Revival",
      category: "Traditional",
      image: "/garden-4.jpeg",
      description: "Classic cottage garden with mixed borders, featuring perennials, herbs, and seasonal blooms."
    },
    {
      title: "Sustainable Garden",
      category: "Eco-Friendly",
      image: "/garden-5.jpeg",
      description: "Environmentally responsible design using native plants, rain gardens, and composting areas."
    }
  ];

  const gardenImages = [
    { src: "/flower-1.jpeg", alt: "Garden detail 1" },
    { src: "/flower-2.jpeg", alt: "Garden detail 2" },
    { src: "/flower-3.jpeg", alt: "Garden detail 3" },
    { src: "/flower-4.jpeg", alt: "Garden detail 4" },
    { src: "/flower-5.jpeg", alt: "Garden detail 5" },
    { src: "/flower-6.jpeg", alt: "Garden detail 6" },
    { src: "/flower-7.jpeg", alt: "Garden detail 7" },
    { src: "/flower-8.jpeg", alt: "Garden detail 8" },
    { src: "/flower-9.jpeg", alt: "Garden detail 9" }
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F0]">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-[#5B8C51]">
        <div className="absolute inset-0 bg-[url('/grass.png')] bg-cover bg-center bg-no-repeat opacity-20" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Portfolio</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our collection of garden designs—each unique, sustainable, and crafted with care.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-600 font-semibold mb-3 tracking-wide">FEATURED WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#404A3D]">Recent Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <span className="text-yellow-400 text-sm font-semibold mb-2">{project.category}</span>
                  <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-600 font-semibold mb-3 tracking-wide">GALLERY</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#404A3D]">Garden Details</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {gardenImages.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl aspect-square group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-[#EDDD5E] rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-[#404A3D] mb-6">Let&apos;s Create Your Dream Garden</h2>
          <p className="text-gray-800 mb-8 text-lg">
            Every garden tells a story. Let us help you tell yours.
          </p>
          <button className="bg-[#5B8C51] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#4a7441] transition-all">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
