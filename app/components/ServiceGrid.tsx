import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Exterior Detailing",
    image: "/services/exterior.jpg",
    href: "/detailing#exterior",
  },
  {
    title: "Interior Detailing",
    image: "/services/interior.jpg",
    href: "/detailing#interior",
  },
  {
    title: "Paint Correction",
    image: "/services/paint.jpg",
    href: "/paint-correction",
  },
  {
    title: "Ceramic Coating",
    image: "/services/ceramic.jpg",
    href: "/ceramic-coating",
  },
  {
    title: "Headlight Restoration",
    image: "/services/headlights.jpg",
    href: "/other-services#headlights",
  },
  {
    title: "Other Services",
    image: "/services/other.jpg",
    href: "/other-services",
  },
];

export default function ServiceGrid() {
  return (
    <section className="bg-[#0e0e0e] py-24">
      <h2 className="text-4xl font-bold text-center text-[#538e79] mb-16">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="group block rounded-xl overflow-hidden bg-[#161616]"
          >
            <div className="relative h-80">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#93afbd] group-hover:text-[#538e79] transition">
                {service.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
