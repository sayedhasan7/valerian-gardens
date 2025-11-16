export default function HistorySection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gardening have been since<br />1866</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          There are many variations of passages...
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {[
          { year: "1902", title: "lorem ipsum" },
          { year: "1978", title: "lorem ipsum" },
          { year: "2020", title: "lorem ipsum" },
          { year: "1847", title: "lorem ipsum" }
        ].map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-5xl font-bold text-gray-900 mb-2">{item.year}</p>
            <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet...</p>
          </div>
        ))}

      </div>
    </section>
  );
}
