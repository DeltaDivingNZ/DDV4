import type { Metadata } from "next";
import ServiceCard from "../components/ServiceCard";

// --- Open Graph / Page Metadata ---
export const metadata: Metadata = {
  title: "Ceramic Coating Packages | Delta Detailing",
  description:
    "Ultimate protection and extreme gloss for your vehicle with professional ceramic coating. 2 year and 5 year options available.",
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
        alt: "2 Year Ceramic Coating by Delta Detailing",
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

          {/* CarPro */}
          <ServiceCard
            title="Two Year Ceramic Coating"
            image="/services/ceramic-1.jpg"
            prices={[
              { size: "Small", price: "$649" },
              { size: "Medium", price: "$699" },
              { size: "Large", price: "$749" },
              { size: "XL", price: "$799" },
            ]}
            features={[
              "Professional surface prep",
              "Paint decontamination",
			  "Paint Enhancement Polish",
              "CarPro CQuartz UK 3.0 Ceramic Coating applied",
              "UV & chemical protection",
              "Hydrophobic effect for easy cleaning",
              "Enhanced deep gloss",
			  "Up to 2 Years Protection*",
            ]}
          />

          {/* Gtechniq */}
          <ServiceCard
            title="Five Year Ceramic Coating"
            image="/services/ceramic-2.jpg"
			popular
            prices={[
              { size: "Small", price: "$949" },
              { size: "Medium", price: "$999" },
              { size: "Large", price: "$1049" },
              { size: "XL", price: "$1099" },
            ]}
            features={[
              "Professional surface prep",
              "Paint decontamination",
			  "Paint Enhancement Polish",
              "Gtechniq CSL Ceramic Coating applied",
              "UV & chemical protection",
              "Hydrophobic effect for easy cleaning",
              "Enhanced deep gloss",
			  "Up to 5 Years Protection*",
            ]}
          />
        </div>
		
		<div className="text-center max-w-3xl mx-auto">
          <h1 className="font-title text-4xl md:text-5xl text-[#538e79] mb-6">
            Protect Your Investment
          </h1>
          <p className="text-[#cfcfcf] text-lg">
            *Your ceramic coating is only as good as the care it receives. To keep your coating performing at its best, we recommend a professional Ceramic Coating Maintenance Wash every 6–12 months. This specialised service safely removes embedded contamination, road film, mineral deposits and other build-up that regular washing can leave behind, helping restore the coating's hydrophobic performance, gloss and slick finish. Please contact us for more information on this service.
          </p>
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
