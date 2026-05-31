"use client";

import Link from "next/link";
import { Menu, Hotel } from "lucide-react";
import { useState } from "react";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
              <Hotel className="h-6 w-6 text-white" strokeWidth={2} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-gray-900">
                Hotel Tours AI
              </span>
              <span className="text-[11px] font-medium uppercase tracking-widest text-emerald-600">
                Virtual Tours &amp; AI Concierge
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Number and CTA (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center">
              <span className="text-sm text-gray-500">Call us:</span>
              <a href="tel:02038869021" className="ml-2 text-emerald-600 font-semibold">
                020 3886 9021
              </a>
            </div>
            <Link
              href="/contact"
              className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-200"
            >
              BOOK A DEMO
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:02038869021"
                  className="block text-emerald-600 font-semibold py-2"
                >
                  Call: 020 3886 9021
                </a>
                <Link
                  href="/contact"
                  className="block bg-emerald-600 text-white text-center px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-200 mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BOOK A DEMO
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
