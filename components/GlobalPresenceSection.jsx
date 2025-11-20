export default function GlobalPresenceSection() {
  return (
    <section className="py-20 px-6 bg-[#5B8C51]">
      <div className="absolute inset-0 bg-[url('/grass.png')] bg-cover bg-center bg-no-repeat opacity-20" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
            <i className="fas fa-seedling text-gray-800 text-2xl"></i>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-1">Ecological Garden Design</h3>
            <p className="text-white/90">Creating sustainable spaces that inspire</p>
          </div>
        </div>

        <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
          Start Your Project
        </button>

      </div>
    </section>
  );
}
