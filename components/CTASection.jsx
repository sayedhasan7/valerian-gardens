export default function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <img src="https://dummyimage.com/600x500/a4b494/ffffff"
          className="rounded-3xl w-full h-96 object-cover" />

        <div className="bg-yellow-400 p-12 rounded-3xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lorem, ipsum dolor.</h2>
          <p className="text-gray-800 mb-8">Lorem ipsum dolor sit amet consectetur adipiscing...</p>

          <div className="grid grid-cols-2 gap-4 mb-8">

            {[
              { icon: "fa-leaf", title: "lorem ipsum" },
              { icon: "fa-carrot", title: "lorem ipsum" }
            ].map((box, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl text-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <i className={`fas ${box.icon} text-gray-800`}></i>
                </div>
                <p className="font-bold text-gray-900 text-sm">{box.title}</p>
                <p className="text-xs text-gray-600">100% result</p>
              </div>
            ))}

          </div>

          <button className="bg-gray-900 text-white px-8 py-4 rounded-full w-full font-semibold hover:bg-gray-800 transition">
            Contact Now
          </button>

        </div>

      </div>
    </section>
  );
}
