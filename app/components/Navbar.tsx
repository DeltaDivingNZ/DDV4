export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">Delta Detailing</div>
      <div className="space-x-4">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#booking">Book Now</a>
      </div>
    </nav>
  );
}
