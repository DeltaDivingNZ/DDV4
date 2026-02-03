"use client";

import { useState } from "react";

export default function BookingForm() {
  const servicesList = [
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
  const [showServices, setShowServices] = useState<boolean>(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-[#538e79] mb-6 text-center">
        Book a Detail
      </h2>

      <form
        action="https://usebasin.com/f/7de6409958c9"
        method="POST"
        className="space-y-4"
      >
        {/* Name */}
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 rounded text-black"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded text-black"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full p-2 rounded text-black"
          />
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
        <div className="relative">
          <label className="block mb-1 font-semibold">Select Service(s)</label>
          <div
            className="border rounded px-3 py-2 cursor-pointer bg-[#151b18] text-[#538e79]"
            onClick={() => setShowServices(!showServices)}
          >
            {selectedServices.length > 0
              ? selectedServices.join(", ")
              : "Select service(s) ▼"}
          </div>
          {showServices && (
            <div className="absolute z-10 w-full border rounded bg-[#1c1c1c] mt-1 max-h-60 overflow-y-auto shadow-lg p-2">
              {servicesList.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-2 mb-2 cursor-pointer text-[#93afbd]"
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                  />
                  {service}
                </label>
              ))}
            </div>
          )}
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
