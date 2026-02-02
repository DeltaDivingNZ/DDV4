"use client";

import { useState } from "react";

export default function BookingPage() {
  const services = [
    "Premium Interior Detail",
    "Premium Exterior Detail",
    "Ultimate Interior Detail",
    "Ultimate Exterior Detail",
    "Full Paint Correction",
    "Ceramic Coating",
    "Headlight Restoration",
    "Engine Bay Detail",
    "Pre-Sale Detail",
  ];

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [mobileRequired, setMobileRequired] = useState<string>("");

  const handleCheckboxChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section className="max-w-3xl mx-auto p-6 bg-[#1c1c1c] text-white rounded-lg shadow-lg mt-12">
      <h1 className="text-3xl font-bold mb-6 text-[#538e79] text-center">Book a Detail</h1>
      <form action="https://usebasin.com/f/7de6409958c9" method="POST" className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1">Name</label>
          <input type="text" name="name" required className="w-full p-2 rounded text-black" />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input type="email" name="email" required className="w-full p-2 rounded text-black" />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1">Phone</label>
          <input type="tel" name="phone" required className="w-full p-2 rounded text-black" />
        </div>

        {/* Vehicle Info */}
        <div>
          <label className="block mb-1">Vehicle Year, Make & Model</label>
          <input
            type="text"
            name="vehicle"
            required
            placeholder="e.g., 2020 Toyota Corolla"
            className="w-full p-2 rounded text-black"
          />
        </div>

        {/* Mobile Detailing */}
        <div>
          <label className="block mb-1">Mobile Detailing Required?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="mobile"
                value="Yes"
                required
                checked={mobileRequired === "Yes"}
                onChange={() => setMobileRequired("Yes")}
              />
              Yes
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="mobile"
                value="No"
                required
                checked={mobileRequired === "No"}
                onChange={() => setMobileRequired("No")}
              />
              No
            </label>
          </div>
        </div>

        {/* Services Multi-Select */}
        <div>
          <label className="block mb-1">Select Service(s)</label>
          <div className="flex flex-col gap-2 p-2 bg-[#111] rounded max-h-60 overflow-y-auto">
            {services.map((service) => (
              <label key={service} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={selectedServices.includes(service)}
                  onChange={() => handleCheckboxChange(service)}
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block mb-1">Anything else we should know?</label>
          <textarea
            name="notes"
            rows={4}
            className="w-full p-2 rounded text-black"
            placeholder="Any special instructions"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#538e79] hover:bg-[#437564] py-3 rounded-lg font-semibold transition"
        >
          Submit Booking
        </button>
      </form>
    </section>
  );
}
