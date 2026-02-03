"use client";

import { useState, useEffect } from "react";

// FAQ data
const faqs = [
  {
    question: "What is a ceramic coating?",
    answer: "A ceramic coating is a premium, liquid polymer protective layer that bonds to your vehicle’s paintwork at a molecular level. Once cured, it forms a hard, glossy shield that resists UV rays, chemical staining, oxidation, and environmental contaminants. In short: it’s the most advanced paint protection available — and a must have for anyone serious about preserving their vehicle’s finish."
  },
  {
    question: "What are the benefits of ceramic coatings?",
    answer: "Ceramic coatings offer unmatched protection and aesthetics, including long-term gloss and clarity that far exceed waxes and sealants, exceptional hydrophobicity, meaning water, mud, and dirt slide off effortlessly, reduced risk of scratching, etching, and fading, and far easier cleaning, saving you time, effort, and money."
  },
  {
    question: "How is automotive detailing different from a simple car groomer?",
    answer: "A car groomer focuses on basic cleaning. Detailing, on the other hand, is a meticulous, precision driven restoration and protection process designed to elevate your vehicle to a near showroom standard. Detailing includes advanced paint decontamination, machine polishing and restoration, premium interior treatment and material-specific care, and high-grade protective coatings."
  },
  {
    question: "Should I use public or automated car washes?",
    answer: "Automated car washes may be convenient, but they’re also one of the fastest ways to damage your paint. Their brushes often trap dirt and grit from previous vehicles, creating micro scratches and swirl marks. They also use harsh chemicals that strip wax, dull paint, and accelerate clear coat degradation."
  },
  {
    question: "What are the benefits of regular detailing?",
    answer: "Regular detailing keeps your vehicle in peak condition, inside and out. Benefits include preserved paintwork and interior materials, higher resale value, protection against UV, oxidation, mould, and staining, a consistently luxurious, well cared for aesthetic, and reduced long term maintenance costs."
  },
  {
    question: "Do you offer mobile detailing?",
    answer: "Yes. Delta Detailing brings a luxury grade detailing studio directly to your home or workplace. You enjoy premium results with zero disruption to your schedule — detailing that fits your lifestyle."
  },
  {
    question: "How long does a detail take?",
    answer: "It depends on your chosen package and your vehicle’s condition, but most services range from 2–6 hours. We take the time required to deliver exceptional, uncompromising results. Quality over speed — always."
  },
  {
    question: "Is detailing worth it for older vehicles?",
    answer: "Absolutely. Older vehicles often show the biggest transformations. Paint correction, deep decontamination, and interior rejuvenation can dramatically restore the look and feel of an aging vehicle — often adding significant resale value."
  },
  {
    question: "How do I know which service my vehicle needs?",
    answer: "Every vehicle is different. We offer tailored recommendations based on your car’s condition, your goals, and your budget. Whether you want protection, restoration, or a complete transformation, we’ll guide you to the perfect service."
  }
];

// Testimonials
const testimonials = [
  { name: "John D.", location: "Marton", comment: "Never seen my car look like this before.. Top work Chris." },
  { name: "Sarah W.", location: "Feilding", comment: "Great communication and extremely pleasant to deal with." },
  { name: "Mike T.", location: "Sanson", comment: "Chris went over and beyond to ensure our needs were met when we placed tight time pressures on him! Thanks again." },
  { name: "Emma P.", location: "Bulls", comment: "We have a bunch of cars that Chris details on a regular basis for us. Always a stellar job." },
  { name: "Tom R.", location: "Palmerston North", comment: "I wouldn’t take my car anywhere else." },
];

export default function AboutPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTestimonialIndex((testimonialIndex + 1) % testimonials.length);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialIndex]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 space-y-16 text-[#d0d0d0]">
      {/* About Section */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-[#538e79] text-center">About Delta Detailing</h1>
        <p>Delta Detailing is the premium choice for discerning vehicle owners across the Manawatū–Rangitīkei region. We specialise in delivering an elevated standard of automotive care — the kind typically reserved for luxury marques and prestige collections.</p>
        <p>Passion fuels everything we do. In fact, I’ll admit it: I probably care about your car more than you do. That devotion is reflected in the precision, finesse, and uncompromising attention to detail infused into every service.</p>
        <p>With over 10 years of professional detailing experience, Delta Detailing blends elite grade products with internationally recognised techniques to create a finish that is not only immaculate, but enduring. Every surface, contour, and material is treated with the respect it deserves — ensuring your vehicle presents at its absolute best, inside and out.</p>
        <p>For your convenience, our mobile detailing studio brings this premium experience directly to you. Whether at your residence or workplace, we deliver luxury level results without disrupting your schedule.</p>
        <p>Delta Detailing isn’t just a service — it’s a standard. A commitment to craftsmanship. And a promise that your vehicle will be cared for at a level that exceeds expectation.</p>
      </section>

      {/* FAQ Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-[#538e79] text-center">FAQ</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#333]">
              <button
                onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                className="w-full text-left py-4 font-semibold text-lg flex justify-between items-center"
              >
                {faq.question}
                <span>{activeFAQ === i ? "−" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  activeFAQ === i ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-[#d0d0d0]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-[#538e79] text-center">What Our Customers Say</h2>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className={`text-lg transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
            "{testimonials[testimonialIndex].comment}"
          </p>
          <p className={`font-semibold text-[#538e79] transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
            {testimonials[testimonialIndex].name} — {testimonials[testimonialIndex].location}
          </p>
          <div className="flex justify-center gap-6 mt-2">
            <button
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length);
                  setFade(true);
                }, 300);
              }}
              className="text-3xl font-bold text-[#538e79] hover:text-[#437564]"
            >
              ‹
            </button>
            <button
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setTestimonialIndex((testimonialIndex + 1) % testimonials.length);
                  setFade(true);
                }, 300);
              }}
              className="text-3xl font-bold text-[#538e79] hover:text-[#437564]"
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
