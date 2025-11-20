import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-yellow-600 font-semibold mb-3 tracking-wide">
            OUR WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Garden Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/flower-4.jpeg",
            "/flower-5.jpeg",
            "/flower-6.jpeg",
            "/flower-7.jpeg",
            "/flower-8.jpeg",
            "/flower-9.jpeg",
            "/garden-5.jpeg",
            "/flower-1.jpeg",
          ].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`Garden work ${i + 1}`}
              width={400}
              height={400}
              className="rounded-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
