import type { Metadata } from "next";
import ServiceCard from "../components/ServiceCard";

// --- Open Graph / Page Metadata ---
export const metadata: Metadata = {
  title: "Additional Services | Delta Detailing",
  description:
    "Enhance your vehicle with specialized services beyond standard detailing, including pre-sale preparation, headlight restoration, and engine bay detailing.",
  openGraph: {
    title: "Additional Services | Delta Detailing",
    description:
      "Specialized detailing services to protect, restore, and enhance your vehicle. Maximise appearance and resale value.",
    url: "https://www.deltadetailing.co.nz/other-services",
    siteName: "Delta Detailing",
    images: [
      {
        url: "https://www.deltadetailing.co.nz/services/pre-sale.jpg",
        width: 1200,
        height: 630,
        alt: "Pre-Sale Vehicle Detail by Delta Detailing",
      },
    ],
    type: "website",
  },
};

export default function OtherServicesPage() {
  return (
    <section className="bg-[#0b0b0b] text-white font-body">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">

        {/* PAGE TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-title text-4xl md:text-5xl text-[#538e79] mb-6">
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
            prices={[{ size: "Standard", price: "from $79" }]}
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
            prices={[{ size: "Standard", price: "from $59" }]}
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
            prices={[{ size: "Full Vehicle", price: "from $449" }]}
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
