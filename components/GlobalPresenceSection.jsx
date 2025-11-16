export default function GlobalPresenceSection() {
  return (
    <section className="py-20 px-6 bg-green-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
            <i className="fas fa-globe text-gray-800 text-2xl"></i>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-1">We're popular because</h3>
            <p className="text-white/90">gardening market globally</p>
          </div>
        </div>

        <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
          Discover More
        </button>

      </div>
    </section>
  );
}
