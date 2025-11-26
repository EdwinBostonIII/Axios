"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/teas", label: "Our Teas" },
    { href: "/about", label: "Our Story" },
    { href: "/science", label: "The Science" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-navy text-cream sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center">
            <span className="font-serif text-2xl font-bold tracking-wider text-gold">
              AXIOS
            </span>
            <span className="greek-text text-xs text-cream/80">ἄξιος</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream hover:text-gold transition-colors duration-300 text-sm uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart Icon */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/cart"
              className="text-cream hover:text-gold transition-colors duration-300"
              aria-label="Shopping Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gold/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-cream hover:text-gold transition-colors duration-300 text-sm uppercase tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className="block py-3 text-cream hover:text-gold transition-colors duration-300 text-sm uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
