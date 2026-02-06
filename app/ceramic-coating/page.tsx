import type { Metadata } from "next";
import ServiceCard from "../components/ServiceCard";

// --- Open Graph / Page Metadata ---
export const metadata: Metadata = {
  title: "Ceramic Coating Packages | Delta Detailing",
  description:
    "Ultimate protection and extreme gloss for your vehicle with professional ceramic coating. Single & multi-layer options available.",
  openGraph: {
    title: "Ceramic Coating Packages | Delta Detailing",
    description:
      "Protect and enhance your car's paint with premium ceramic coatings. Hydrophobic, UV resistant, and long-lasting.",
    url: "https://www.deltadetailing.co.nz/ceramic-coating",
    siteName: "Delta Detailing",
    images: [
      {
        url: "https://www.deltadetailing.co.nz/services/ceramic-1.jpg",
        width: 1200,
        height: 630,
        alt: "Single Layer Ceramic Coating by Delta Detailing",
      },
    ],
    type: "website",
  },
};

export default function CeramicCoatingPage() {
  return (
    <section className="bg-[#0b0b0b] text-white font-body">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">

        {/* PAGE TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-title text-4xl md:text-5xl text-[#538e79] mb-6">
            Ceramic Coating
          </h1>
          <p className="text-[#cfcfcf] text-lg">
            Ultimate protection and extreme gloss for your vehicle. Hydrophobic, UV resistant, and long-lasting.
          </p>
        </div>

        {/* CERAMIC COATING PACKAGES */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* SINGLE LAYER */}
          <ServiceCard
            title="Single Layer Ceramic Coating"
            image="/services/ceramic-1.jpg"
            prices={[
              { size: "Small", price: "$599" },
              { size: "Medium", price: "$649" },
              { size: "Large", price: "$699" },
              { size: "XL", price: "$749" },
            ]}
            features={[
              "Professional surface prep",
              "Paint decontamination",
              "Premium ceramic coating applied",
              "UV & chemical protection",
              "Hydrophobic effect for easy cleaning",
              "Enhanced deep gloss",
            ]}
          />

          {/* MULTI LAYER */}
          <ServiceCard
            title="Multi-Layer Ceramic Coating"
            image="/services/ceramic-2.jpg"
            prices={[
              { size: "Small", price: "$699" },
              { size: "Medium", price: "$749" },
              { size: "Large", price: "$799" },
              { size: "XL", price: "$849" },
            ]}
            features={[
              "Full paint correction included",
              "Multiple layers of ceramic coating",
              "Ultimate UV & chemical protection",
              "Hydrophobic effect maximized",
              "Deep gloss & enhanced reflection",
              "Long-lasting durability",
            ]}
          />
        </div>

        {/* VEHICLE SIZE GUIDE */}
        <div className="bg-[#141414] rounded-2xl p-10">
          <h3 className="font-title text-2xl text-primary mb-6">
            Vehicle Size Guide
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 text-[#d0d0d0] font-body">
            <li className="border-b border-[#333] pb-2"><strong>Small:</strong> Hatchback</li>
            <li className="border-b border-[#333] pb-2"><strong>Medium:</strong> Sedan, Station Wagon</li>
            <li className="border-b border-[#333] pb-2"><strong>Large:</strong> Wagon, 5-Seater SUV</li>
            <li className="border-b border-[#333] pb-2"><strong>XL:</strong> Van, Ute, 7-Seater SUV</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
