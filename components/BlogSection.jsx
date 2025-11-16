export default function BlogSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-yellow-600 font-semibold mb-3 tracking-wide">NEWS & BLOGS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Latest posts & articles</h2>
          </div>

          <div className="flex gap-3">
            <button className="w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300"><i className="fas fa-arrow-left text-gray-700"></i></button>
            <button className="w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300"><i className="fas fa-arrow-right text-gray-700"></i></button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {[
            { date: "23 Nov 2024", title: "What technology is used in organic farming?", color: "5a8a4a" },
            { date: "25 Nov 2024", title: "Know type of farming and use organic services", color: "7a9a6a" },
            { date: "28 Nov 2024", title: "The Organic Agriculture Profitable Business", color: "b4a484" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg">

              <div className="relative">
                <img src={`https://dummyimage.com/400x300/${item.color}/ffffff`} className="w-full h-56 object-cover" />
                <span className="absolute top-4 left-4 bg-yellow-400 px-4 py-2 rounded-full text-sm font-semibold">
                  {item.date}
                </span>
              </div>

              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2"><i className="fas fa-user mr-2"></i>By Admin</p>

                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>

                <a className="text-green-700 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
