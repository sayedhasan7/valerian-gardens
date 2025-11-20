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
              { icon: "fa-spa", title: "Initial Consultation" },
              { icon: "fa-apple-alt", title: "Survey & Analysis" },
              { icon: "fa-leaf", title: "Concept Design" },
              { icon: "fa-seedling", title: "Planting Plans" },
              { icon: "fa-seedling", title: "Presentation" },
              { icon: "fa-seedling", title: "Build" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                  <i className={`fas ${item.icon} text-gray-800 text-xl`}>{i + 1}</i>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">{item.title}</h3>
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
