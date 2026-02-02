const services = [
  {
    title: "Premium Interior Detail",
    price: "$89",
    items: [
      "Interior Vacuumed",
      "Interior Surfaces Wiped Down",
      "Inside Windows Cleaned",
      "Interior Plastic/Vinyl Dressed",
      "Floor Mats Shampooed (If Applicable)",
      "Rubber Mats Cleaned & Dressed (If Applicable)",
    ],
  },
  {
    title: "Premium Exterior Detail",
    price: "$99",
    items: [
      "Snow Foam Pre-Wash",
      "High Pressure Rinse",
      "Vehicle Hand Washed",
      "Door Jambs Cleaned",
      "Wheel Faces & Tyres Dressed",
      "Exterior Plastics Dressed",
      "Protective Coating Applied",
    ],
  },
  {
    title: "Ultimate Interior Detail",
    price: "$139",
    items: [
      "Everything in Premium Interior Detail",
      "Full Upholstery Shampoo",
      "Leather Clean & Conditioning (If Applicable)",
    ],
  },
  {
    title: "Ultimate Exterior Detail",
    price: "$179",
    items: [
      "Everything in Premium Exterior Detail",
      "Physical Decontamination (Clay Bar)",
      "Chemical Decontamination (Iron + Fallout Removal)",
      "Machine Cut & Polish",
    ],
  },
  {
    title: "Additional Services",
    price: "From $59",
    items: [
      "Full Paint Correction - From $299",
      "Ceramic Coating - From $499",
      "Headlight Restoration - From $79",
      "Engine Bay Detail - From $59",
      "Pre-Sale Detail - From $199",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="border rounded-xl p-6 hover:shadow-lg transition">
            <img
              src={`/service${idx + 1}.jpg`}
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-primary font-bold mb-4">{service.price}</p>
            <ul className="list-disc list-inside space-y-1">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
