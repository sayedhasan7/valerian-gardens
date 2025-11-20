import Image from "next/image";
export default function ChooseSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-yellow-600 font-semibold mb-3 tracking-wide">WHY CHOOSE US</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Choose What&apos;s Perfect<br />For Your Field
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            {[
              { icon: "fa-comments", title: "Initial Consultation", desc: "Understanding your vision, taking client's brief and current circumstances" },
              { icon: "fa-search", title: "Survey & Analysis", desc: "Site visit to assess aspect, soil conditions, and existing plants" },
              { icon: "fa-palette", title: "Concept & Design", desc: "Creating a thoughtful design that brings your vision to life" },
              { icon: "fa-leaf", title: "Planting Plans", desc: "Detailed planting plans tailored to your space and preferences" },
              { icon: "fa-file-alt", title: "Presentation", desc: "Presenting the complete design with visual materials and specifications" },
              { icon: "fa-hammer", title: "Implementation", desc: "Professional build and planting to bring your garden to reality" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                  <i className={`fas ${item.icon} text-gray-800 text-xl`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Image className="w-full h-auto rounded-3xl object-cover" src="/garden-4.jpeg" width={1000} height={1000} alt="Garden 4" />
          </div>

        </div>

      </div>
    </section>
  );
}
