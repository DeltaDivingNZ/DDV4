export default function AboutPage() {
  const testimonials = [
    { name: "John D.", location: "Marton", comment: "Never seen my car look like this before.. Top work Chris." },
    { name: "Sarah W.", location: "Feilding", comment: "Great communication and extremely pleasant to deal with." },
    { name: "Mike T.", location: "Sanson", comment: "Chris went over and beyond to ensure our needs were met when we placed tight time pressures on him! Thanks again." },
    { name: "Emma P.", location: "Bulls", comment: "We have a bunch of cars that Chris details on a regular basis for us. Always a stellar job." },
    { name: "Tom R.", location: "Palmerston North", comment: "I wouldn’t take my car anywhere else." },
	{ name: "Panda M.", location: "Marton", comment: "Great result will be back again." },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 space-y-16">
      <h1 className="text-4xl font-bold text-[#538e79] text-center">About Delta Detailing</h1>
      
      <div className="space-y-6 text-[#d4d2d2]">
        <p>Detailing with military precision. Every car is treated like our own. We love your cars more than you do!</p>
        <p>From Premium to Ultimate services, our team ensures your vehicle shines inside and out, mobile or at our Marton location.</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-[#538e79] mb-6 text-center">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#e6e6e6] p-6 rounded shadow hover:shadow-lg transition">
              <p className="text-[#93afbd] italic">"{t.comment}"</p>
              <p className="mt-4 font-semibold text-[#538e79]">{t.name} — {t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
