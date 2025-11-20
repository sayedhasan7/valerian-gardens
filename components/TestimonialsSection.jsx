import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="block bg-[#F8F7F0]">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">

        {/* Heading */}
        <h2 className="mx-auto mb-8 max-w-3xl text-center text-3xl text-[#404A3D] font-bold md:mb-12 md:text-5xl lg:mb-16">
          What our clients are saying
        </h2>

        {/* Cards */}
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mb-8">
          {[
            {
              name: "Sarah Mitchell",
              role: "Homeowner",
              text: "Donata transformed our small courtyard into a beautiful, sustainable garden. Her attention to detail and knowledge of plants is exceptional. We now have a space that's alive with wildlife and brings us joy every day."
            },
            {
              name: "James Robertson",
              role: "Property Owner",
              text: "Working with Valerian Gardens was a wonderful experience. The design process was collaborative and thoughtful. Our garden now feels like a natural extension of our home, and it's thriving beautifully through all seasons."
            },
            {
              name: "Emily Chen",
              role: "Garden Enthusiast",
              text: "The planting plan was perfectly tailored to our needs and the local environment. Donata's ecological approach means our garden supports local biodiversity while being stunningly beautiful. Highly recommended!"
            }
          ].map((testimonial, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-6 rounded-md border inverted-radius-5 border-gray-300 bg-white p-8 md:p-10"
            >
              {/* Stars */}
              <div className="flex">
                {[1, 2, 3, 4, 5].map((_, j) => (
                  <Image
                    key={j}
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                    alt="star"
                    width={14}
                    height={14}
                    className="mr-1 w-3.5 flex-none inline-block"
                  />
                ))}
              </div>

              {/* Review Text */}
              <div className="text-gray-500">
                &ldquo;{testimonial.text}&rdquo;
              </div>

              {/* Profile */}
              <div className="flex flex-row items-start">
                <Image
                  src="/testimonial.jpeg"
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="mr-4 h-16 w-16 rounded-full object-cover inline-block"
                />
                <div className="flex flex-col items-start">
                  <h6 className="text-base font-bold">{testimonial.name}</h6>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex flex-col">
          <a href="#" className="mx-auto font-bold bg-green-800 px-5 py-3 rounded-3xl text-white">
            Check all reviews
          </a>
        </div>
      </div>
    </section>
  );
}
