export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-6 flex justify-between items-center">
      <div className="text-2xl font-bold">Delta Detailing</div>
      <div className="space-x-6">
        <a href="#services" className="hover:text-orange-500">Services</a>
        <a href="#contact" className="hover:text-orange-500">Contact</a>
      </div>
    </nav>
  );
}