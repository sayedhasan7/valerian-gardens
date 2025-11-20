export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-[#F8F7F0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="relative">
          <img className="rounded-3xl inverted-radius-left w-full h-[700px] object-center"
            src="/about.jpeg" />

          <div className="absolute top-0 right-0 bg-[#EDDD5E] p-6 rounded-2xl">
            <p className="text-4xl font-bold text-[#404A3D]"><span className="text-[#5B8C51]">*</span> #3+</p>
            <p className="text-[#666666] font-semibold">Years of gardening</p>
          </div>
        </div>

        <div>

          <p className="text-yellow-600 font-semibold mb-3 tracking-wide">ABOUT US</p>

          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(64,74,61)] mb-6 leading-tight">
Lelit. Sequi cum, voluptatibus 
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            There are many variations of passages of lorem ipsum available but the majority have suffered alteration...
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-bold text-[#404A3D] mb-2 text-lg">01) Lorem, ipsum.</h4>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <h4 className="font-bold text-[#404A3D] mb-2 text-lg">02) Lorem, ipsum.</h4>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <button className="bg-[#5B8C51] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5B8C51] transition flex items-center gap-2">
            Discover More <i className="fas fa-arrow-right"></i>
          </button>

        </div>

      </div>
    </section>
  );
}
