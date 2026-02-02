import Link from "next/link";

const services = [
  { name: "Premium Interior Detail", description: "Vacuum, wipe surfaces, clean windows, dress plastics and mats.", image: "/services/interior.jpg" },
  { name: "Premium Exterior Detail", description: "Snow foam, hand wash, clean wheel faces, dress tyres & plastics.", image: "/services/exterior.jpg" },
  { name: "Ultimate Interior Detail", description: "Includes Premium Interior + full upholstery shampoo & leather care.", image: "/services/ultimate-interior.jpg" },
  { name: "Ultimate Exterior Detail", description: "Includes Premium Exterior + clay bar & machine polish.", image: "/services/ultimate-exterior.jpg" },
  { name: "Full Paint Correction", description: "Multi-stage machine polishing to restore deep gloss.", image: "/services/paint-correction.jpg" },
  { name: "Ceramic Coating", description: "Long-lasting protection with extreme gloss & UV resistance.", image: "/services/ceramic.jpg" },
  { name: "Headlight Restoration", description: "Removes oxidation & cloudiness for better clarity.", image: "/services/headlight.jpg" },
  { name: "Engine Bay Detail", description: "Clean and dress engine bay for a factory-fresh look.", image: "/services/engine-bay.jpg" },
  { name: "Pre-Sale Detail", description: "Comprehensive detail to maximize resale value.", image: "/services/pre-sale.jpg" },
];

export default function ServicesPage() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#538e79] mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.name}
            href={`/booking?service=${encodeURIComponent(service.name)}`}
            className="group border rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer transition-all duration-200 bg-white"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-[#538e79]">{service.name}</h3>
              <p className="text-[#93afbd]">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
