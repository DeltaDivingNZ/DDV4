export default function BookingForm() {
  return (
    <section id="booking" className="py-20 px-4 bg-secondary text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Book Your Detail</h2>
      <form 
        action="https://usebasin.com/f/7de6409958c9" 
        method="POST" 
        className="max-w-3xl mx-auto grid gap-4"
      >
        <input type="text" name="name" placeholder="Name" className="p-3 rounded text-gray-900"/>
        <input type="email" name="email" placeholder="Email" className="p-3 rounded text-gray-900"/>
        <input type="text" name="phone" placeholder="Phone Number" className="p-3 rounded text-gray-900"/>
        <input type="text" name="vehicleYear" placeholder="Vehicle Year" className="p-3 rounded text-gray-900"/>
        <input type="text" name="vehicleMake" placeholder="Vehicle Make" className="p-3 rounded text-gray-900"/>
        <input type="text" name="vehicleModel" placeholder="Vehicle Model" className="p-3 rounded text-gray-900"/>
        <select name="mobileDetailing" className="p-3 rounded text-gray-900">
          <option value="">Mobile Detailing Required?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <select name="services" className="p-3 rounded text-gray-900" multiple>
          <option value="Premium Interior Detail">Premium Interior Detail</option>
          <option value="Premium Exterior Detail">Premium Exterior Detail</option>
          <option value="Ultimate Interior Detail">Ultimate Interior Detail</option>
          <option value="Ultimate Exterior Detail">Ultimate Exterior Detail</option>
          <option value="Full Paint Correction">Full Paint Correction</option>
          <option value="Ceramic Coating">Ceramic Coating</option>
          <option value="Headlight Restoration">Headlight Restoration</option>
          <option value="Engine Bay Detail">Engine Bay Detail</option>
          <option value="Pre-Sale Detail">Pre-Sale Detail</option>
        </select>
        <textarea name="notes" placeholder="Anything else we should know?" className="p-3 rounded text-gray-900"/>
        <button type="submit" className="bg-primary text-white p-3 rounded hover:bg-green-700 font-semibold">Submit</button>
      </form>
    </section>
  );
}
