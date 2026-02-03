import ServiceCard from "../components/ServiceCard";

export default function DetailingPage() {
  return (
    <section className="bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

        {/* EXTERIOR */}
        <div id="exterior">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#538e79] mb-16">
            Exterior Detail Packages
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            <ServiceCard
              title="Premium Exterior Detail"
              image="/services/exterior-premium.jpg"
              prices={[
                { size: "Small", price: "$99" },
                { size: "Medium", price: "$129" },
                { size: "Large", price: "$159" },
                { size: "XL", price: "$179" },
              ]}
              features={[
                "Snow foam pre-wash",
                "High pressure rinse",
                "Vehicle hand washed",
                "Door jambs cleaned",
                "Wheel faces & tyres cleaned & dressed",
                "3 month protective coating applied",
              ]}
            />

            <ServiceCard
              title="Ultimate Exterior Detail"
              image="/services/exterior-ultimate.jpg"
              prices={[
                { size: "Small", price: "$119" },
                { size: "Medium", price: "$149" },
                { size: "Large", price: "$179" },
                { size: "XL", price: "$199" },
              ]}
              features={[
                "Snow foam pre-wash",
                "High pressure rinse",
                "Vehicle hand washed",
                "Chemical paint decontamination",
                "Surface fallout removed",
                "Exterior plastics dressed",
                "Wheel faces & tyres cleaned & dressed",
                "3 month protective coating applied",
              ]}
            />
          </div>
        </div>

        {/* INTERIOR */}
        <div id="interior">
          <h2 className="text-4xl font-bold text-center text-[#538e79] mb-16">
            Interior Detail Packages
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <ServiceCard
              title="Premium Interior Detail"
              image="/services/interior-premium.jpg"
              prices={[
                { size: "Small", price: "$89" },
                { size: "Medium", price: "$109" },
                { size: "Large", price: "$129" },
                { size: "XL", price: "$149" },
              ]}
              features={[
                "Deep interior vacuum",
                "Door panels & plastics cleaned",
                "Dashboard & console cleaned",
                "Plastics UV protected",
                "Clean interior glass",
              ]}
            />

            <ServiceCard
              title="Ultimate Interior Detail"
              image="/services/interior-ultimate.jpg"
              prices={[
                { size: "Small", price: "$179" },
                { size: "Medium", price: "$199" },
                { size: "Large", price: "$229" },
                { size: "XL", price: "$249" },
              ]}
              features={[
                "Deep interior vacuum",
                "Door panels & plastics cleaned",
                "Dashboard & console cleaned",
                "Plastics UV protected",
                "Fabric seats shampooed",
                "Floor mats shampooed",
                "Leather cleaned & conditioned",
              ]}
            />
          </div>
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

        {/* DISCLAIMER */}
        <p className="text-sm text-[#a0a0a0] text-center max-w-4xl mx-auto">
          Additional charges may apply for excessive pet hair, heavy soiling, or rubbish removal.
          A biohazard fee of $50 applies to bodily fluids.
        </p>
      </div>
    </section>
  );
}
