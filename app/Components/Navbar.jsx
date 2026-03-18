"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Internet Guide", href: "/internet-guide" },
  { label: "Provider Info", href: "/provider-information" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false); // ⭐ important
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  // ✅ Fix hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  // ❗ Prevent SSR mismatch
  if (!mounted) return null;

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-xl font-bold text-blue-600">
              Call TV Customer Service
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    active
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:8013403488"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md"
            >
              Call
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden w-10 h-10 flex items-center justify-center"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white px-6 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm ${
                    active
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      <div className="h-[88px]" />
    </>
  );
}