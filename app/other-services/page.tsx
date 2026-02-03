import ServiceCard from "../components/ServiceCard";

export default function OtherServicesPage() {
  return (
    <section className="bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">

        {/* PAGE TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#538e79] mb-6">
            Additional Services
          </h1>
          <p className="text-[#cfcfcf] text-lg">
            Enhance your vehicle with specialized services beyond standard detailing.
          </p>
        </div>

        {/* ADDITIONAL SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* HEADLIGHT RESTORATION */}
          <ServiceCard
            title="Headlight Restoration"
            image="/services/headlight.jpg"
            prices={[{ size: "Standard", price: "$79" }]}
            features={[
              "Removes oxidation and cloudiness",
              "Improves clarity and safety",
              "Enhances appearance and brightness",
            ]}
          />

          {/* ENGINE BAY DETAIL */}
          <ServiceCard
            title="Engine Bay Detail"
            image="/services/engine-bay.jpg"
            prices={[{ size: "Standard", price: "$59" }]}
            features={[
              "Careful cleaning and degreasing",
              "Dressing of components for a factory-fresh look",
              "Safe and detailed approach to sensitive areas",
            ]}
          />

          {/* PRE-SALE DETAIL */}
          <ServiceCard
            title="Pre-Sale Detail"
            image="/services/pre-sale.jpg"
            prices={[{ size: "Full Vehicle", price: "$199" }]}
            features={[
              "Comprehensive interior & exterior cleaning",
              "Paint correction and restoration included",
              "Maximises vehicle resale value",
            ]}
          />

        </div>

      </div>
    </section>
  );
}
