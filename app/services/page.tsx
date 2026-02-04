import Image from "next/image";
import Link from "next/link";

const coreServices = [
  {
    title: "Premium Interior Detail",
    price: "From $89",
    image: "/services/premium-interior.jpg",
    items: [
      "Interior vacuumed",
      "Interior surfaces wiped down",
      "Inside windows cleaned",
      "Interior plastics & vinyl dressed",
      "Floor mats shampooed (if applicable)",
      "Rubber mats cleaned & dressed (if applicable)",
    ],
  },
  {
    title: "Premium Exterior Detail",
    price: "From $99",
    image: "/services/premium-exterior.jpg",
    items: [
      "Snow foam pre-wash",
      "High pressure rinse",
      "Vehicle hand washed",
      "Door jambs cleaned",
      "Wheel faces & tyres dressed",
      "Exterior plastics dressed",
      "Protective coating applied",
    ],
  },
  {
    title: "Ultimate Interior Detail",
    price: "From $139",
    image: "/services/ultimate-interior.jpg",
    items: [
      "Everything in Premium Interior Detail",
      "Full upholstery shampoo",
      "Leather clean & conditioning (if applicable)",
    ],
  },
  {
    title: "Ultimate Exterior Detail",
    price: "From $179",
    image: "/services/ultimate-exterior.jpg",
    items: [
      "Everything in Premium Exterior Detail",
      "Clay bar decontamination",
      "Iron & fallout removal",
      "Machine cut & polish",
    ],
  },
];

const additionalServices = [
  {
    title: "Full Paint Correction",
    price: "From $299",
    description:
      "Multi-stage machine polishing to remove swirls, scratches, and oxidation, restoring deep gloss.",
  },
  {
    title: "Ceramic Coating",
    price: "From $499",
    description:
      "Long-lasting protection with extreme gloss, hydrophobic properties, and UV resistance.",
  },
  {
    title: "Headlight Restoration",
    price: "From $79",
    description:
      "Removes oxidation and cloudiness to improve clarity, safety, and appearance.",
  },
  {
    title: "Engine Bay Detail",
    price: "From $59",
    description:
      "Careful cleaning and dressing for a clean, factory-fresh engine bay.",
  },
  {
    title: "Pre-Sale Detail",
    price: "From $199",
    description:
      "A comprehensive detail designed to maximise your vehicle’s resale value.",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-[#0f1412] py-20 font-montserrat">
      <div className="max-w-6xl mx-auto px-4 space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-[#538e79]">
            Our Services
          </h1>
          <p className="text-[#8aa4b2] max-w-2xl mx-auto text-lg md:text-xl">
            Premium car detailing with military precision. Mobile or at our Marton location.
          </p>
        </div>

        {/* Core Services */}
        <div className="grid md:grid-cols-2 gap-10">
          {coreServices.map((service) => (
            <div
              key={service.title}
              className="bg-[#151b18] rounded-lg shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold font-playfair text-[#538e79]">
                    {service.title}
                  </h2>
                  <p className="text-[#8aa4b2] font-semibold">{service.price}</p>
                </div>

                <ul className="list-disc list-inside space-y-1 text-[#8aa4b2]">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <Link
                  href={`/booking?service=${encodeURIComponent(service.title)}`}
                  className="inline-block bg-[#538e79] text-white px-6 py-2 rounded hover:bg-[#466f60] transition font-semibold"
                >
                  Book This Service
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#538e79] text-center">
            Additional Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="bg-[#151b18] p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold font-playfair text-[#538e79]">
                      {service.title}
                    </h3>
                    <p className="text-[#8aa4b2] mt-2">{service.description}</p>
                  </div>
                  <span className="text-[#93afbd] font-semibold whitespace-nowrap">
                    {service.price}
                  </span>
                </div>

                <Link
                  href={`/booking?service=${encodeURIComponent(service.title)}`}
                  className="inline-block mt-4 text-[#538e79] font-semibold hover:underline"
                >
                  Enquire / Book →
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
