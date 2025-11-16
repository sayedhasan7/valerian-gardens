export default function ChooseSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-yellow-600 font-semibold mb-3 tracking-wide">WHY CHOOSE US</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Choose What's Perfect<br />For Your Field
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            {[
              { icon: "fa-spa", title: "lorem ipsum" },
              { icon: "fa-apple-alt", title: "lorem ipsum" },
              { icon: "fa-leaf", title: "lorem ipsum" },
              { icon: "fa-seedling", title: "lorem ipsum" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                  <i className={`fas ${item.icon} text-gray-800 text-xl`}>{i + 1}</i>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img className="w-80 h-auto" src="https://dummyimage.com/400x500/f4e4a6/ffffff" />
          </div>

        </div>

      </div>
    </section>
  );
}
