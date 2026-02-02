export default function Services() {
  return (
    <section id="services" className="py-24 bg-white text-center">
      <h2 className="text-4xl font-bold text-delta-dark mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {['Exterior Detailing','Interior Detailing','Ceramic Coating'].map((title,i)=>(
          <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-delta-blue">{title}</h3>
            <p className="text-gray-700">High-quality {title.toLowerCase()} to keep your vehicle looking showroom new.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
