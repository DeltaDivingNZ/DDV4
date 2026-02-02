export default function AboutPage() {
  const testimonials = [
    { name: "John D.", location: "Marton", comment: "Fantastic detailing! My car looks brand new." },
    { name: "Sarah W.", location: "Feilding", comment: "Professional service, highly recommend." },
    { name: "Mike T.", location: "Sanson", comment: "Attention to detail is incredible." },
    { name: "Emma P.", location: "Bulls", comment: "Every car is treated like their own. Amazing!" },
    { name: "Tom R.", location: "Palmerston North", comment: "I wouldn’t take my car anywhere else." },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 space-y-16">
      <h1 className="text-4xl font-bold text-[#538e79] text-center">About Delta Detailing</h1>
      
      <div className="space-y-6 text-gray-900">
        <p>Detailing with military precision. Every car is treated like our own. We love your cars more than you do!</p>
        <p>From Premium to Ultimate services, our team ensures your vehicle shines inside and out, mobile or at our Marton location.</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-[#538e79] mb-6 text-center">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <p className="text-[#93afbd] italic">"{t.comment}"</p>
              <p className="mt-4 font-semibold text-[#538e79]">{t.name} — {t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
