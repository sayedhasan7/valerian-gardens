import { Tractor, Recycle, Apple, BadgeCheck, ArrowUpRight } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    { icon: <BadgeCheck size={28} strokeWidth={1.6} />, title: "lorem ipsum" },
    { icon: <BadgeCheck size={28} strokeWidth={1.6} />, title: "lorem ipsum" },
    { icon: <BadgeCheck size={28} strokeWidth={1.6} />, title: "lorem ipsum" },
    { icon: <BadgeCheck size={28} strokeWidth={1.6} />, title: "lorem ipsum" }
  ];

  return (
    <section className=" px-2 sm:px-6 bg-[#F8F7F0]">
      <div className="mx-auto grid pt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {features.map((item, i) => (
          <FarmerCard key={i} icon={item.icon} title={item.title} />
        ))}

      </div>
    </section>
  );
}

/* ========================================================= */
/* ===================   FARMER CARD   ====================== */
/* ========================================================= */

function FarmerCard({ icon, title }) {
  return (
    <div className="relative w-full max-w-[450px] mx-auto">
      {/* ==== CONTENT ==== */}
      <div className="rounded-[35px] p-8 inverted-radius-2 shadow border border-gray-100 bg-white min-h-[273px] flex flex-col justify-between">
        
        {/* ICON + TITLE */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#EDDD5E] rounded-full flex items-center justify-center">
            <span className="text-gray-700">{icon}</span>
          </div>

          <h2 className="text-xl font-semibold text-[#404A3D] leading-tight">
            {title}
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full h-0.5 bg-gray-200 my-4"></div>

        {/* Description */}
        <p className="/90 leading-relaxed mb-6 pr-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Arrow */}
      </div>
        <div className="flex justify-end z-20 absolute bottom-2 right-0">
          <button className="w-12 h-12 bg-white border border-gray-100 shadow rounded-full flex items-center justify-center hover:scale-110 transition-all">
            <ArrowUpRight size={20} className="text-gray-700" />
          </button>
        </div>
    </div>
  );
}
