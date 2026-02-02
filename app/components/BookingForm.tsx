"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

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

export default function BookingForm() {
  const searchParams = useSearchParams();
  const preSelected = searchParams.get("service");

  const [showServices, setShowServices] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    if (preSelected && servicesList.includes(preSelected)) {
      setSelectedServices([preSelected]);
    }
  }, [preSelected]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto bg-white text-gray-900">
      <h2 className="text-3xl font-bold text-center text-[#538e79] mb-8">Book a Detail</h2>
      <form action="https://usebasin.com/f/7de6409958c9" method="POST" className="space-y-6">
        {/* Name, Email, Phone etc */}
        <div className="grid md:grid-cols-2 gap-4">
          <div><label>Name</label><input type="text" name="name" required className="border border-[#93afbd] rounded px-3 py-2 w-full focus:ring-[#93afbd]" /></div>
          <div><label>Email</label><input type="email" name="email" required className="border border-[#93afbd] rounded px-3 py-2 w-full focus:ring-[#93afbd]" /></div>
          <div><label>Phone</label><input type="tel" name="phone" required className="border border-[#93afbd] rounded px-3 py-2 w-full focus:ring-[#93afbd]" /></div>
          <div><label>Vehicle Make & Model</label><input type="text" name="vehicle" required className="border border-[#93afbd] rounded px-3 py-2 w-full focus:ring-[#93afbd]" /></div>
        </div>

        {/* Mobile radio */}
        <div>
          <label className="font-semibold">Mobile Detailing Required?</label>
          <div className="flex gap-4 mt-1">
            <label><input type="radio" name="mobile" value="Yes" required /> Yes</label>
            <label><input type="radio" name="mobile" value="No" required /> No</label>
          </div>
        </div>

        {/* Multi-select services */}
        <div>
          <label className="block mb-1 font-semibold">Select Service(s)</label>
          <div className="relative">
            <div
              className="border rounded px-3 py-2 cursor-pointer"
              onClick={() => setShowServices(!showServices)}
            >
              {selectedServices.length > 0
                ? selectedServices.join(", ")
                : "Select service(s) ▼"}
            </div>
            {showServices && (
              <div className="absolute z-10 w-full border rounded bg-white mt-1 max-h-60 overflow-y-auto shadow-lg p-2">
                {servicesList.map((service) => (
                  <label key={service} className="flex items-center gap-2 mb-2 cursor-pointer text-[#538e79]">
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
        </div>

        <button
          type="submit"
          className="bg-[#538e79] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#437564] transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
