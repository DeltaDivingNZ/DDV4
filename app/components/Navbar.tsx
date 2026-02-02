import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#0f1412] border-b border-[#1f2a24] px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-[#8aa4b2] hover:text-[#538e79] font-semibold">Delta Detailing</div>
      <div className="space-x-6">
        <Link href="/" className="text-[#8aa4b2] hover:text-[#538e79] font-semibold">Home</Link>
        <Link href="/services" className="text-[#8aa4b2] hover:text-[#538e79] font-semibold">Services</Link>
        <Link href="/booking" className="text-[#8aa4b2] hover:text-[#538e79] font-semibold">Booking</Link>
        <Link href="/about" className="text-[#8aa4b2] hover:text-[#538e79] font-semibold">About</Link>
        <Link href="/contact" className="text-[#8aa4b2] hover:text-[#538e79] font-semibold">Contact</Link>
      </div>
    </nav>
  );
}
