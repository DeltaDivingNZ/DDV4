"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="bg-[#0e0e0e] max-w-6xl mx-auto px-4 flex justify-between items-center h-16 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
        </div>

        {/* Centered title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 font-bold text-[#538e79] text-2xl">
          Delta Detailing
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>

          {/* Services dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link href="/detailing" className="hover:underline">
              Services
            </Link>
            <ul
              className={`absolute left-0 mt-1 transition-all duration-150 ${
                dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              style={{
                // Maintain your original navbar dropdown styles
                backgroundColor: "#1e1e1e",
                borderRadius: "0.25rem",
                boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
                width: "12rem",
              }}
            >
              <li>
                <Link href="/detailing" className="block px-4 py-2 hover:bg-[#538e79]/20">
                  Detailing
                </Link>
              </li>
              <li>
                <Link href="/paint-correction" className="block px-4 py-2 hover:bg-[#538e79]/20">
                  Paint Correction
                </Link>
              </li>
              <li>
                <Link href="/ceramic-coating" className="block px-4 py-2 hover:bg-[#538e79]/20">
                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link href="/other-services" className="block px-4 py-2 hover:bg-[#538e79]/20">
                  Other Services
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>

          <li>
            <Link href="/booking" className="hover:underline">
              Book
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          {/* Keep your existing mobile menu code */}
        </div>
      </div>
    </nav>
  );
}
