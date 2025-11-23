import Image from "next/image";
import { Lens } from "./ui/lens";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowUpRight, ChevronLeft, CircleArrowOutUpRight, Leaf, Sprout } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-24 pb-28 px-6 bg-[#5B8C51] relative">
      <div className="absolute inset-0 bg-[url('/grass.png')] bg-cover bg-center bg-no-repeat" />
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-[#404A3D] flex gap-2 items-center bg-white w-fit py-2 px-4 rounded-full font-semibold mb-3 tracking-wide">
              <Sprout className="size-4" /> What we Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Best Gardening Services</h2>
          </div>

          {/* <div className="flex gap-3">
            <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"><i className="fas fa-arrow-left text-white" /></button>
            <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"><i className="fas fa-arrow-right text-white" /></button>
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            { image: "/flower-1.jpeg", title: "Bespoke Garden Design", description: "Custom garden designs tailored to your unique outdoor space, bringing your vision to life with thoughtful planning and creativity." },
            { image: "/flower-2.jpeg", title: "Specialised Planting Plan", description: "Expert planting plans specific to your outdoor environment, selecting the perfect plants for your soil, climate, and aesthetic preferences." },
            { image: "/flower-3.jpeg", title: "Implementation & Aftercare", description: "Full implementation services and ongoing aftercare to ensure your garden thrives and evolves beautifully over time." }
          ].map((service, i) => (
            <div
              key={i}
              data-aos="fade-in-up"
              className="relative group cursor-pointer"   // <-- ADD group here
            >
              <Card
                className="relative md:max-w-md h-full inverted-radius-4 shadow-none 
               transition-all duration-300 ease-out  group-hover:shadow-xl"
              >
                <CardHeader>
                  <Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
                    <Image
                      src={service.image}
                      height={100}
                      width={400}
                      className="rounded-t-3xl w-full h-48 sm:h-60 object-cover"
                      alt={service.title}
                    />
                  </Lens>
                </CardHeader>

                <CardContent>
                  <CardTitle className="text-2xl group-hover:text-black transition-colors duration-300 text-[#404A3D] mb-4">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-[#666666]">
                    {service.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="space-x-4 py-2"></CardFooter>
              </Card>

              <button
                className="arrow-btn group-hover:rotate-45 cursor-pointer 
               absolute bottom-0 z-10 right-0 w-12 h-12 
               bg-[#EDDD5E] rounded-full flex items-center 
               justify-center transition-all duration-300"
              >
                <ArrowUpRight />
              </button>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
