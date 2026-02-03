import ServiceCard from "../components/ServiceCard";

export default function CeramicCoatingPage() {
  return (
    <section className="bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">

        {/* PAGE TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#538e79] mb-6">
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
              { size: "Small", price: "$499" },
              { size: "Medium", price: "$549" },
              { size: "Large", price: "$599" },
              { size: "XL", price: "$649" },
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
          <h3 className="text-2xl font-bold text-[#538e79] mb-6">
            Vehicle Size Guide
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 text-[#d0d0d0]">
            <li><strong>Small:</strong> Hatchback</li>
            <li><strong>Medium:</strong> Sedan, Station Wagon</li>
            <li><strong>Large:</strong> Wagon, 5-Seater SUV</li>
            <li><strong>XL:</strong> Van, Ute, 7-Seater SUV</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
