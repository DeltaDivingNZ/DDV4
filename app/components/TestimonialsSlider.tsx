"use client";

import { useEffect, useRef, useState } from "react";

type Testimonial = {
  name: string;
  location: string;
  text: string;
  rating: number; // 1–5
};

// 🔹 This can later be replaced by CMS / API data
const testimonials: Testimonial[] = [
  {
    name: "John D.",
    location: "Marton",
    text: "Never seen my car look like this before. Absolute top-tier work.",
    rating: 5
  },
  {
    name: "Sarah W.",
    location: "Feilding",
    text: "Exceptional attention to detail and great communication throughout.",
    rating: 5
  },
  {
    name: "Mike T.",
    location: "Sanson",
    text: "Went above and beyond under tight time pressure. Highly recommend.",
    rating: 5
  },
  {
    name: "Emma P.",
    location: "Bulls",
    text: "We use Delta Detailing regularly — consistently flawless results.",
    rating: 5
  },
  {
    name: "Tom R.",
    location: "Palmerston North",
    text: "Wouldn’t trust my vehicle with anyone else.",
    rating: 5
  }
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const heightRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>();

  const testimonial = testimonials[index];

  /* -------------------- Animation helpers -------------------- */

  const animateTo = (newIndex: number, dir: "next" | "prev") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setIndex(newIndex);
      setAnimating(false);
    }, 300);
  };

  const next = () =>
    animateTo((index + 1) % testimonials.length, "next");

  const prev = () =>
    animateTo((index - 1 + testimonials.length) % testimonials.length, "prev");

  /* -------------------- Auto cycle -------------------- */

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused, index]);

  /* -------------------- Auto height -------------------- */

  useEffect(() => {
    if (heightRef.current) {
      setHeight(heightRef.current.offsetHeight);
    }
  }, [index]);

  /* -------------------- Swipe support -------------------- */

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
    touchStartX.current = null;
  };

  return (
    <section className="bg-[#0e0e0e] py-24 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-[#538e79] mb-12">
        What Our Customers Say
      </h2>

      <div
        className="max-w-3xl mx-auto text-center px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ height }}
      >
        <div
          ref={heightRef}
          className={`transition-all duration-300 transform ${
            animating
              ? direction === "next"
                ? "-translate-x-8 opacity-0 scale-95"
                : "translate-x-8 opacity-0 scale-95"
              : "translate-x-0 opacity-100 scale-100"
          }`}
        >
          {/* ⭐ Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-xl ${
                  i < testimonial.rating
                    ? "text-yellow-400"
                    : "text-gray-600"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          <p className="text-xl text-[#d4d4d4] italic leading-relaxed">
            “{testimonial.text}”
          </p>

          <p className="mt-6 font-semibold text-[#93afbd]">
            {testimonial.name} — {testimonial.location}
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-10 mt-10">
          <button
            onClick={prev}
            className="text-3xl font-bold text-[#538e79] hover:text-[#437564] transition"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="text-3xl font-bold text-[#538e79] hover:text-[#437564] transition"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() =>
                animateTo(i, i > index ? "next" : "prev")
              }
              className={`w-3 h-3 rounded-full transition ${
                i === index
                  ? "bg-[#538e79]"
                  : "bg-[#3a3a3a] hover:bg-[#538e79]/60"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
