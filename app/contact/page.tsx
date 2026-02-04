"use client";

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 space-y-12 font-montserrat">
      <h1 className="text-4xl font-bold text-[#538e79] text-center font-playfair">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Contact Info */}
        <div className="space-y-4 text-[#8aa4b2]">
          <p>
            <span className="font-semibold">Chris van Rossum</span> — Company Director
          </p>
          <p>
            Phone:{" "}
            <a href="tel:0210629237" className="text-[#538e79] hover:underline">
              021 0629 237
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:deltadetailingnz@gmail.com" className="text-[#538e79] hover:underline">
              deltadetailingnz@gmail.com
            </a>
          </p>
          <p>
            Facebook:{" "}
            <a
              href="https://www.facebook.com/deltadetailingnz"
              target="_blank"
              className="text-[#538e79] hover:underline"
            >
              Facebook.com/deltadetailingnz
            </a>
          </p>
          <p>Address: 12 Kereru Court, Marton 4710</p>
        </div>

        {/* Google Map */}
        <div className="w-full h-80">
          <iframe
            title="Delta Detailing Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.123456789!2d175.300123!3d-40.056789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d9b8abcdef12345%3A0x123456789abcdef!2s12%20Kereru%20Court%2C%20Marton!5e0!3m2!1sen!2snz!4v1670000000000!5m2!1sen!2snz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
