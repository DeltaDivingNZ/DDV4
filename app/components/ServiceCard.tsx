"use client"; // <-- make this a Client Component

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  image: string;
  prices: { size: string; price: string }[];
  features: string[];
  anchor?: string;
  popular?: boolean; // Optional badge
}

export default function ServiceCard({
  title,
  image,
  prices,
  features,
  anchor,
  popular = false,
}: Props) {
  const [underlineLoaded, setUnderlineLoaded] = useState(false);

  // Trigger mobile underline slide-in animation after mount
  useEffect(() => {
    setUnderlineLoaded(true);
  }, []);

  return (
    <div
      id={anchor}
      className="bg-[#141414] rounded-2xl overflow-hidden shadow-lg group relative flex flex-col"
    >
      {popular && (
        <span className="absolute top-4 right-4 bg-primary text-black font-bold px-3 py-1 rounded-full text-sm z-10">
          Most Popular
        </span>
      )}

      <div className="relative h-64">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main content grows to push button down */}
      <div className="p-8 flex flex-col flex-1 space-y-6">
        {/* Title */}
        <h3 className="font-title text-2xl text-primary font-bold">{title}</h3>

        {/* Prices */}
        <div className="grid grid-cols-2 gap-2 text-sm font-body text-[#d0d0d0]">
          {prices.map((p) => (
            <p
              key={p.size}
              className={`
                relative
                after:content-[''] after:block after:h-[2px] after:bg-primary 
                after:origin-left after:transition-transform after:duration-300
                sm:after:scale-x-0 sm:group-hover:after:scale-x-100
                ${underlineLoaded ? "after:translate-x-0 after:scale-x-100" : "after:-translate-x-full after:scale-x-100"}
              `}
            >
              <strong>{p.size}:</strong> {p.price}
            </p>
          ))}
        </div>

        {/* Features */}
        <ul className="list-disc list-inside text-[#bfbfbf] space-y-1 font-body">
          {features.map((f, idx) => (
            <li
              key={f}
              className="opacity-100 transition-opacity duration-300"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {f}
            </li>
          ))}
        </ul>

        {/* Button now always at bottom */}
        <div className="mt-auto">
          <Link
            href="/booking"
            className="inline-block bg-primary hover:bg-[#437564] text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            Book this service
          </Link>
        </div>
      </div>
    </div>
  );
}
