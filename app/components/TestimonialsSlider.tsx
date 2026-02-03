"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "John D.",
    location: "Marton",
    text: "Never seen my car look like this before. Absolute top-tier work."
  },
  {
    name: "Sarah W.",
    location: "Feilding",
    text: "Exceptional attention to detail and great communication throughout."
  },
  {
    name: "Mike T.",
    location: "Sanson",
    text: "Went above and beyond under tight time pressure. Highly recommend."
  },
  {
    name: "Emma P.",
    location: "Bulls",
    text: "We use Delta Detailing regularly — consistently flawless results."
  },
  {
    name: "Tom R.",
    location: "Palmerston North",
    text: "Wouldn’t trust my vehicle with anyone else."
  }
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setIndex((index + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="bg-[#0e0e0e] py-24">
      <h2 className="text-4xl font-bold text-center text-[#538e79] mb-12">
        What Our Customers Say
      </h2>

      <div className="max-w-3xl mx-auto text-center relative px-6">
        <p className="text-xl text-[#d4d4d4] italic leading-relaxed">
          “{t.text}”
        </p>

        <p className="mt-6 font-semibold text-[#93afbd]">
          {t.name} — {t.location}
        </p>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="border border-[#538e79] px-4 py-2 rounded hover:bg-[#538e79] hover:text-black transition"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="border border-[#538e79] px-4 py-2 rounded hover:bg-[#538e79] hover:text-black transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
