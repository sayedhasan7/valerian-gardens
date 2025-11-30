// app/services/[slug]/page.tsx
import HeroVideoSection from "@/components/HeroVideoSection";
import Image from "next/image";
import LeaveSVG from "../../../components/LeaveSVG";
import CTASection from "@/components/CTASection";

export default async function ServicePage({ params }) {
    // 🔥 IMPORTANT: unwrap the promise
    const { slug } = await params;

    // Backend URL
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

    // Fetch service
    const res = await fetch(`${API_URL}/services/${slug}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return (
            <div className="py-20 text-center text-2xl font-semibold text-red-500">
                Service not found
            </div>
        );
    }

    const { service } = await res.json();

    return (
        <>
            <HeroVideoSection
                title={service?.title}
                subtitle="Our Services"
                videoUrl="/videos/services-hero.mp4"
                breadcrumb = {[{ name: "Home", link: "/" },{name:"Services",link:"/services"}, { name: service?.title, link: slug }]}
            />
            <section className="relative bg-[#F8F7F0] overflow-hidden">
            <div className="py-20 px-6 max-w-5xl mx-auto">
                     <LeaveSVG data-aos="fade-in" className="absolute hidden lg:block left-0 -top-10 rotate-45  z-0" />
                        <LeaveSVG data-aos="fade-in" className="absolute lg:hidden -top-24 right-0 lg:-top-10 rotate-45 scale-[-1] z-0" />
                        <LeaveSVG data-aos="fade-in" className="absolute hidden lg:block right-0 -top-10 rotate-45 scale-[-1] z-0" />
                {service?.imageUrl && (
                    <div className="mb-8">
                        <Image
                            src={service.imageUrl}
                            alt={service.title}
                            width={1400}
                            height={800}
                            className="w-full h-80 object-cover rounded-2xl"
                        />
                    </div>
                )}

                <h1 className="text-4xl font-bold text-[#404A3D] mb-6">
                    {service?.title}
                </h1>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                </p>

                {service?.features?.length > 0 && (
                    <ul className="space-y-3">
                        {service?.features.map((f, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-lg">
                                <span className="text-[#5B8C51] text-xl">•</span>
                                <span>{f}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            </section>
            <CTASection/>
        </>
    );
}
