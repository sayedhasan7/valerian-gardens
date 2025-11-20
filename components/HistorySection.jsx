export default function HistorySection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Garden Design Journey</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From education to expertise, creating beautiful and sustainable gardens through thoughtful design and ecological practices.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {[
          { year: "3+", title: "Years of Study", desc: "Completed Garden Design at Capel Manor College, London" },
          { year: "50+", title: "Plant Species", desc: "Expert knowledge in ecological and sustainable planting" },
          { year: "100%", title: "Client Satisfaction", desc: "Creating gardens that exceed expectations" },
          { year: "∞", title: "Seasonal Beauty", desc: "Designs that thrive and evolve throughout the year" }
        ].map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-5xl font-bold text-[#5B8C51] mb-2">{item.year}</p>
            <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
