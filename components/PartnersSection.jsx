export default function PartnersSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-12 flex-wrap opacity-40">
        {Array(4).fill(0).map((_, i) => (
          <div key={i} className="text-4xl font-bold text-gray-800">LOGO</div>
        ))}
      </div>
    </section>
  );
}
