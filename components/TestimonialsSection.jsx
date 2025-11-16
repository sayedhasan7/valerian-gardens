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
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-6 rounded-md border inverted-radius-5 border-gray-300 bg-white p-8 md:p-10"
            >
              {/* Stars */}
              <div className="flex">
                {[1, 2, 3, 4, 5].map((_, j) => (
                  <img
                    key={j}
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                    alt=""
                    className="mr-1 w-3.5 flex-none inline-block"
                  />
                ))}
              </div>

              {/* Review Text */}
              <div className="text-gray-500">
                “Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet
                luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
              </div>

              {/* Profile */}
              <div className="flex flex-row items-start">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="mr-4 h-16 w-16 rounded-full object-cover inline-block"
                />
                <div className="flex flex-col items-start">
                  <h6 className="text-base font-bold">Laila Bahar</h6>
                  <p className="text-sm text-gray-500">Designer</p>
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
