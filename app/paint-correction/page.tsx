// app/pages/paint-correction.tsx
import ServiceCard from "../components/ServiceCard";

export default function PaintCorrectionPage() {
  return (
    <section className="bg-[#0b0b0b] text-white font-body">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">

        {/* PAGE TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-title text-4xl md:text-5xl text-[#538e79] mb-6">
            Paint Correction
          </h1>
          <p className="text-[#cfcfcf] text-lg">
            Restore depth, clarity, and gloss by removing swirl marks,
            oxidation, and imperfections from your vehicle’s paintwork.
          </p>
        </div>

        {/* PACKAGES */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* CUT & POLISH */}
          <ServiceCard
            title="Cut & Polish"
            image="/services/paint-correction-1.jpg"
            prices={[
              { size: "Small", price: "$249" },
              { size: "Medium", price: "$299" },
              { size: "Large", price: "$349" },
              { size: "XL", price: "$399" },
            ]}
            features={[
              "Snow foam pre-wash",
              "High pressure rinse",
              "Vehicle hand washed",
              "Physical paint decontamination (clay bar)",
              "Chemical paint decontamination (iron + fallout removal)",
              "Light scratch & swirl removal",
              "Deep gloss enhancement",
              "3 month protective coating applied",
            ]}
          />

          {/* 2 STAGE */}
          <ServiceCard
            title="2 Stage Paint Correction"
            image="/services/paint-correction-2.jpg"
            popular
            prices={[
              { size: "Small", price: "$399" },
              { size: "Medium", price: "$449" },
              { size: "Large", price: "$499" },
              { size: "XL", price: "$549" },
            ]}
            features={[
              "Snow foam pre-wash",
              "High pressure rinse",
              "Vehicle hand washed",
              "Physical paint decontamination (clay bar)",
              "Chemical paint decontamination (iron + fallout removal)",
              "Oxidation removal",
              "Medium to heavy scratch removal",
              "Deep gloss enhancement",
              "3 month protective coating applied",
            ]}
          />
        </div>

        {/* CERAMIC UPSELL */}
        <div className="bg-[#141414] rounded-2xl p-10 text-center">
          <h3 className="font-title text-2xl text-[#538e79] mb-4">
            Take It Further
          </h3>
          <p className="text-[#d0d0d0] text-lg font-body">
            Add a <strong>professional ceramic coating</strong> for just{" "}
            <span className="text-[#93afbd] font-semibold">$350</span> and lock in
            gloss, protection, and hydrophobic performance for the long term.
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
