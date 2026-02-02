export default function Services() {
  return (
    <section id="services" className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-4">Exterior Detailing</h3>
          <p>Complete paint correction, polishing, and ceramic coating.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-4">Interior Detailing</h3>
          <p>Deep clean carpets, seats, leather, and interior surfaces.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-4">Full-Service Packages</h3>
          <p>Combined interior and exterior packages for ultimate shine.</p>
        </div>
      </div>
    </section>
  );
}