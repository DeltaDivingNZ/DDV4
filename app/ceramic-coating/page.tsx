import ServiceCard from "../components/ServiceCard";

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
          <h3 className="font-title text-2xl text-[#538e79] mb-6">
            Vehicle Size Guide
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { size: "Small", desc: "Hatchback" },
              { size: "Medium", desc: "Sedan, Station Wagon" },
              { size: "Large", desc: "Wagon, 5-Seater SUV" },
              { size: "XL", desc: "Van, Ute, 7-Seater SUV" },
            ].map((v) => (
              <div
                key={v.size}
                className="flex flex-col justify-center p-6 bg-[#1e1e1e] rounded-xl border-b-2 border-[#538e79] hover:bg-[#2a2a2a] transition"
              >
                <span className="text-[#538e79] font-title text-lg mb-1">{v.size}</span>
                <span className="text-[#d0d0d0] font-body">{v.desc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
