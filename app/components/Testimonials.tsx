const testimonials = [
  { name: "John D.", location: "Marton", text: "Fantastic detailing service — my car looks brand new!" },
  { name: "Sarah W.", location: "Feilding", text: "Professional, friendly, and thorough. Highly recommend." },
  { name: "Mike B.", location: "Sanson", text: "Top-notch interior and exterior detail. Very happy!" },
  { name: "Lisa K.", location: "Bulls", text: "My car shines like never before. Great job!" },
  { name: "David P.", location: "Palmerston North", text: "Efficient, reliable, and excellent results." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="border rounded-xl p-6 hover:shadow-lg transition text-center">
            <img
              src={`/person${idx + 1}.jpg`}
              alt={t.name}
              className="w-16 h-16 rounded-full mb-2 mx-auto object-cover"
            />
            <p className="italic mb-4">"{t.text}"</p>
            <p className="font-semibold">{t.name} - {t.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
