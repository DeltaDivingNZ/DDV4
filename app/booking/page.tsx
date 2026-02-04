"use client";

import BookingForm from "../components/BookingForm";
import Contact from "../components/Contact";
import Image from "next/image";

export default function BookingPage() {
  return (
    <section className="relative w-full min-h-screen">

      {/* HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/services/interior-ultimate.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* PAGE TITLE */}
      <div className="max-w-7xl mx-auto px-6 pt-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#538e79]">
          Talk To The Team!
        </h1>
      </div>

      {/* CONTACT & BOOKING FORM CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:flex lg:space-x-12 space-y-12 lg:space-y-0 items-start">

        {/* CONTACT INFO */}
        <div className="lg:w-1/2 bg-[#1c1c1c] p-8 rounded-xl shadow-lg self-start space-y-8">
          <Contact />
        </div>

        {/* BOOKING FORM */}
        <div className="lg:w-1/2 bg-[#1c1c1c] p-8 rounded-xl shadow-lg space-y-8">
          <BookingForm />
        </div>
      </div>

      {/* GOOGLE MAPS WIDGET */}
      <div className="w-full mt-12 h-[400px] lg:h-[500px]">
        <iframe
          title="Delta Detailing Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.015617880068!2d175.07100431519364!3d-40.06824487940412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3b3b92fcb8a2b9%3A0x7f1b9e89f3c9f!2s12%20Kereru%20Court%2C%20Marton!5e0!3m2!1sen!2snz!4v1671234567890!5m2!1sen!2snz"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
