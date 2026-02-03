import BookingForm from "../components/BookingForm";
import Contact from "../components/Contact";

export default function BookingPage() {
  return (
    <section className="bg-[#0b0b0b] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:flex lg:space-x-12 space-y-12 lg:space-y-0">

        {/* CONTACT DETAILS - LEFT COLUMN */}
        <div className="lg:w-1/2 space-y-8">
          <Contact />
        </div>

        {/* BOOKING FORM - RIGHT COLUMN */}
        <div className="lg:w-1/2 space-y-8">
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
