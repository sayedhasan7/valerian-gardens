import LeaveSVG from "./LeaveSVG";
import { NumberTicker } from "./ui/number-ticker";

export default function HistorySection() {
  return (
    <section className="pt-28 px-6 relative bg-[#F9F7ED] overflow-hidden">
      <LeaveSVG data-aos="fade-in" className="absolute hidden lg:block left-0 top-10 rotate-45 opacity-10 z-0" />
      <LeaveSVG data-aos="fade-in" className="absolute lg:hidden left-0 -top-10 rotate-45 opacity-10 z-0" />
      <LeaveSVG data-aos="fade-in" className="absolute hidden lg:block right-0 top-10 -rotate-45 scale-x-[-1] opacity-10 z-0" />

      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#404A3D] mb-4">Our Garden Design Journey</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From education to expertise, creating beautiful and sustainable gardens through thoughtful design and ecological practices.
        </p>
      </div>

      <div className="max-w-7xl mt-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {[
          { year: "3", sign : "+" ,title: "Years of Study", desc: "Completed Garden Design at Capel Manor College, London" },
          { year: "50", sign : "+" ,title: "Plant Species", desc: "Expert knowledge in ecological and sustainable planting" },
          { year: "100", sign : " %" ,title: "Client Satisfaction", desc: "Creating gardens that exceed expectations" },
          { year: "100", sign : " %" ,title: "Seasonal Beauty", desc: "Designs that thrive and evolve throughout the year" }
        ].map((item, i) => (
          <div key={i} className="text-center bg-white p-5 rounded-4xl py-8" data-aos="fade-in">
            <span className="text-5xl font-bold text-[#404A3D]">
            <NumberTicker
              value={item.year}
              className="text-5xl font-bold tracking-tighter whitespace-pre-wrap text-[#404A3D] dark:text-white"
            />{item.sign}
            </span>
            <h3 className="font-bold text-xl text-[#8b8e7c]  mb-5">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}

      </div>

      <hr className="mt-24" />
    </section>
  );
}
