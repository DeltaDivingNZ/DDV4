"use client";

import { useState, useEffect, useRef } from "react";

export default function BookingForm() {
  const servicesList = [
    "Enquiry",
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
  const [showServices, setShowServices] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowServices(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const newErrors: Record<string, string> = {};
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!formData.get("name")) newErrors.name = "Please enter your name";
    if (!formData.get("email")) newErrors.email = "Please enter your email";
    if (!formData.get("phone")) newErrors.phone = "Please enter your phone number";
    if (!formData.get("vehicle"))
      newErrors.vehicle = "Please enter your vehicle details";
    if (!formData.get("mobile"))
      newErrors.mobile = "Please select Yes or No";
    if (selectedServices.length === 0)
      newErrors.services = "Please select at least one service";

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
      return;
    }

    setErrors({});
  };

  const isFormValid =
    selectedServices.length > 0 &&
    mobileRequired !== "" &&
    typeof document !== "undefined" &&
    (() => {
      const form = document.querySelector("form");
      return form ? form.checkValidity() : false;
    })();

  return (
    <section className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg font-montserrat">
      <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#538e79] mb-8 text-center">
        Book a Detail
      </h2>

      <form
        action="https://usebasin.com/f/7de6409958c9"
        method="POST"
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div>
          <label className="block mb-2 font-semibold text-[#d0d0d0]">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 rounded text-black"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-semibold text-[#d0d0d0]">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded text-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-semibold text-[#d0d0d0]">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full p-2 rounded text-black"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Vehicle */}
        <div>
          <label className="block mb-2 font-semibold text-[#d0d0d0]">
            Vehicle Year, Make & Model
          </label>
          <input
            type="text"
            name="vehicle"
            required
            placeholder="e.g., 2020 Toyota Corolla"
            className="w-full p-2 rounded text-black"
          />
          {errors.vehicle && (
            <p className="text-red-500 text-sm mt-1">{errors.vehicle}</p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <label className="block mb-2 font-semibold text-[#d0d0d0]">
            Mobile Detailing Required?
          </label>
          <div className="flex gap-6 text-[#d0d0d0]">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="mobile"
                  value={option}
                  required
                  checked={mobileRequired === option}
                  onChange={() => setMobileRequired(option)}
                />
                {option}
              </label>
            ))}
          </div>
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Services */}
        <div className="relative" ref={dropdownRef}>
          <label className="block mb-2 font-semibold text-[#d0d0d0]">
            Select Service(s)
          </label>

          <div
            className={`border rounded px-3 py-2 cursor-pointer bg-[#151b18] font-semibold ${
              errors.services ? "border-red-500" : "border-gray-500"
            }`}
            onClick={() => setShowServices(!showServices)}
          >
            {selectedServices.length > 0
              ? selectedServices.join(", ")
              : "Select service(s) ▼"}
          </div>

          {showServices && (
            <div className="absolute z-10 w-full border rounded bg-[#1c1c1c] mt-1 max-h-60 overflow-y-auto shadow-lg p-3">
              {servicesList.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-2 mb-2 cursor-pointer text-[#bfbfbf] hover:text-[#538e79]"
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                  />
                  {service}
                </label>
              ))}
            </div>
          )}

          {errors.services && (
            <p className="text-red-500 text-sm mt-1">{errors.services}</p>
          )}

          <input
            type="hidden"
            name="services"
            value={selectedServices.join(", ")}
          />
        </div>

        {/* Notes (optional) */}
        <div>
          <label className="block mb-2 font-semibold text-[#d0d0d0]">
            Anything else we should know?
          </label>
          <textarea
            name="notes"
            rows={4}
            className="w-full p-2 rounded text-black"
            placeholder="Optional"
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            isFormValid
              ? "bg-[#538e79] hover:bg-[#437564]"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          Submit Booking
        </button>
      </form>
    </section>
  );
}
