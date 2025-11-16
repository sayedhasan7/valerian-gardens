export default function GallerySection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

        {["6a8a5a", "4a7a4a", "7a9a6a", "5a8a5a"].map((c, i) => (
          <img key={i}
            src={`https://dummyimage.com/300x400/${c}/ffffff`}
            className="rounded-2xl w-full h-64 object-cover" />
        ))}

      </div>
    </section>
  );
}
