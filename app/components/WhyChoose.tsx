export default function WhyChoose() {
  return (
    <section className="bg-[#111]">
      <h2 className="text-4xl font-bold text-center text-[#538e79] mb-16">
        Why Choose Delta Detailing?
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="bg-[#161616] p-8 rounded-xl hover:translate-y-[-4px] transition">
          <h3 className="text-2xl font-semibold mb-4">
            Premium Results, Every Time
          </h3>
          <p className="text-[#cfcfcf] leading-relaxed">
            At Delta Detailing, quality isn’t a bonus — it’s the baseline.
            We use professional-grade products and proven techniques to deliver
            flawless, long-lasting results that restore your vehicle to its best.
          </p>
        </div>

        <div className="bg-[#161616] p-8 rounded-xl hover:translate-y-[-4px] transition">
          <h3 className="text-2xl font-semibold mb-4">
            Detail-Oriented Craftsmanship
          </h3>
          <p className="text-[#cfcfcf] leading-relaxed">
            We don’t rush jobs or cut corners. Every vehicle receives meticulous,
            tailored care — every surface, seam, and detail refined to create a
            truly standout finish.
          </p>
        </div>

        <div className="bg-[#161616] p-8 rounded-xl hover:translate-y-[-4px] transition">
          <h3 className="text-2xl font-semibold mb-4">
            Mobile Convenience That Fits Your Schedule
          </h3>
          <p className="text-[#cfcfcf] leading-relaxed">
            Your time matters. That’s why we bring the detailing studio to you —
            home or workplace — delivering premium results without disrupting
            your day.
          </p>
        </div>
      </div>
    </section>
  );
}
