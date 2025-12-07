import Image from "next/image";
import HeroVideoSection from "../../components/HeroVideoSection";
import AboutSection from '@/components/AboutSection'

export default function AboutPage() {
  const item = {
    title: "About Us",
    breadcrumb: [{ name: "Home", link: "/" }, { name: "About Us", link: "/about" }],
    mobileVideo: "https://res.cloudinary.com/sayed12m/video/upload/v1763787211/flwqsv6s2ecqyym8k50k.mp4",
    video:
      "https://res.cloudinary.com/sayed12m/video/upload/v1763787211/flwqsv6s2ecqyym8k50k.mp4", // ⭐ replace with your video
    desc: "Transform your space with easy home gardening tips. Grow fresh vegetables, herbs, and flowers at home—perfect for beginners.",
  };
  return (
    <div className="min-h-screen bg-[#FDF6ED]">
      {/* Hero Section */}
     <HeroVideoSection {...item}/>

      <AboutSection/>

      {/* Philosophy Section */}
      {/* <section className="py-20 px-6 bg-[]">
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
              <div key={index} className="text-center p-8 rounded-3xl bg-[#FDF6ED]">
                <div className="w-20 h-20 bg-[#8b8e7c] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <i className={`fas ${item.icon} text-3xl text-[#404A3D]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#404A3D] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
