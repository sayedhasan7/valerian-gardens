import Image from "next/image";
import HeroVideoSection from "@/components/HeroVideoSection";

export default function ServicesPage() {
    const item = {
    title: "Our Service's",
    breadcrumb: [{ name: "Home", link: "/" }, { name: "Service's", link: "/services" }],
    mobileVideo: "https://res.cloudinary.com/sayed12m/video/upload/v1763787211/flwqsv6s2ecqyym8k50k.mp4",
    video:
      "https://res.cloudinary.com/sayed12m/video/upload/v1763787211/flwqsv6s2ecqyym8k50k.mp4", // ⭐ replace with your video
    desc: "Transform your space with easy home gardening tips. Grow fresh vegetables, herbs, and flowers at home—perfect for beginners.",
  };
  const services = [
    {
      title: "Bespoke Garden Design",
      description: "Custom garden designs tailored to your unique outdoor space. We work closely with you to understand your vision and create a design that reflects your style while enhancing your lifestyle.",
      image: "/flower-1.jpeg",
      features: ["Initial consultation", "Site analysis", "Concept development", "Detailed design plans"]
    },
    {
      title: "Specialised Planting Plans",
      description: "Expert planting plans specific to your outdoor environment. We carefully select plants based on your soil type, climate, aspect, and personal preferences, ensuring a thriving garden.",
      image: "/flower-2.jpeg",
      features: ["Plant selection", "Seasonal planning", "Soil analysis", "Wildlife-friendly choices"]
    },
    {
      title: "Ordering Plants",
      description: "We source high-quality plants from trusted nurseries and suppliers, ensuring you receive healthy specimens that are perfect for your garden design.",
      image: "/flower-3.jpeg",
      features: ["Quality sourcing", "Supplier relationships", "Plant delivery coordination", "Health guarantee"]
    },
    {
      title: "Implementation",
      description: "Professional implementation services to bring your garden design to life. We manage the entire build process, ensuring quality workmanship and attention to detail.",
      image: "/garden-4.jpeg",
      features: ["Project management", "Professional installation", "Quality assurance", "Timeline management"]
    },
    {
      title: "Aftercare",
      description: "Ongoing support and maintenance guidance to help your garden thrive. We provide expert advice on seasonal care, pruning, and plant health.",
      image: "/flower-4.jpeg",
      features: ["Maintenance guidance", "Seasonal advice", "Plant care tips", "Problem solving"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F0]">
      {/* Hero Section */}
    <HeroVideoSection {...item}/>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-4xl font-bold text-[#404A3D] mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#EDDD5E] rounded-full flex items-center justify-center shrink-0">
                        <i className="fas fa-check text-xs text-gray-800"></i>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-3xl w-full h-[400px] object-cover shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#5B8C51]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Garden Project?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Let&apos;s discuss your garden design needs and create something beautiful together.
          </p>
          <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
