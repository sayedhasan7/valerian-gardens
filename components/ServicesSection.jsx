export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-[#5B8C51]">
            <div className="absolute inset-0 bg-[url('/grass.png')] bg-cover bg-center bg-no-repeat opacity-20" />
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-yellow-400 font-semibold mb-3 tracking-wide">WHAT WE DO</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Best Gardening Services</h2>
          </div>

          <div className="flex gap-3">
            <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"><i className="fas fa-arrow-left text-white" /></button>
            <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"><i className="fas fa-arrow-right text-white" /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            { color: "#5a8a3a", title: "lorem ipsum" },
            { color: "#d4a574", title: "lorem ipsum" },
            { color: "#7a9a6a", title: "lorem ipsum" }
          ].map((srv, i) => (
            <div key={i} className="relative">

            <div className="service-card bg-white z-0 inverted-radius-4 rounded-3xl overflow-hidden">
              <img src={`https://dummyimage.com/400x300/${srv.color.slice(1)}/ffffff`} className="w-full p-5 rounded-4xl h-48 object-cover" />

              <div className="p-6 relative">
                <h3 className="font-bold text-xl text-[#404A3D] mb-3">{srv.title}</h3>
                <p className="text-[#666666] text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipiscing elit sed lorem</p>

              </div>

            </div>
                <button className="arrow-btn cursor-pointer absolute bottom-0 z-10 right-0 w-12 h-12 bg-[#EDDD5E] rounded-full flex items-center justify-center">
                   <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
                </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
