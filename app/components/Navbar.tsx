import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="font-bold text-xl text-[#538e79]">Delta Detailing</div>
      <div className="space-x-6">
        <Link href="/" className="text-gray-700 hover:text-[#538e79] font-semibold">Home</Link>
        <Link href="/services" className="text-gray-700 hover:text-[#538e79] font-semibold">Services</Link>
        <Link href="/booking" className="text-gray-700 hover:text-[#538e79] font-semibold">Booking</Link>
        <Link href="/about" className="text-gray-700 hover:text-[#538e79] font-semibold">About</Link>
        <Link href="/contact" className="text-gray-700 hover:text-[#538e79] font-semibold">Contact</Link>
      </div>
    </nav>
  );
}
