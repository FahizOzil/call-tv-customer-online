

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FeatureCards from "./FeatureCards";


const NAV_LINKS = [
   { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Internet Guide", href: "/internet-guide" },
  { label: "Provider Info", href: "/provider-information" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms" },
  {label: "Privacy Policy", href: "/privacy" },
];

// ── 1. NAVBAR ──────────────────────────────────────────
 export default function Navbar() {


  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);
  
return (
  <>
    <nav
    className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white shadow-sm"
    }`}
    >
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
      {/* ── Logo ── */}
      <Link href="/" className="shrink-0">
      <span className="text-xl font-bold text-blue-600" style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
        Call TV Customer Service
      </span>
      </Link>

      {/* ── Desktop Nav ── */}
      <div className="hidden lg:flex items-center gap-1">
      {NAV_LINKS.map((link) => {
        const active = pathname === link.href;
        return (
        <Link
          key={link.href}
          href={link.href}
          className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 group
          ${
            active
            ? "text-blue-600 bg-blue-50"
            : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/60"
          }`}
          style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
        >
          {link.label}
          {active && (
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600" />
          )}
        </Link>
        );
      })}
      </div>

      {/* ── CTA + Hamburger ── */}
      <div className="flex items-center gap-3">
      <a
        href="tel:8013403488"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800
             text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md
             transition-colors duration-200"
        style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
      >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 shrink-0"
        >
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z" />
        </svg>
        <span className="hidden sm:inline">Call For Info</span>
        <span className="sm:hidden">Call</span>
      </a>

      {/* Hamburger — mobile only */}
      <button
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200 gap-1.5"
      >
        <span
        className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${
          menuOpen ? "rotate-45 translate-y-2" : ""
        }`}
        />
        <span
        className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
          menuOpen ? "opacity-0 scale-x-0" : ""
        }`}
        />
        <span
        className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${
          menuOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
        />
      </button>
      </div>
    </div>

    {/* ── Mobile Menu ── */}
    <div
      className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
      menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
      }`}
    >
      <div className="bg-white px-6 py-4 flex flex-col gap-1">
      {NAV_LINKS.map((link) => {
        const active = pathname === link.href;
        return (
        <Link
          key={link.href}
          href={link.href}
          className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
          active
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
          }`}
          style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
        >
          {link.label}
        </Link>
        );
      })}
      </div>
    </div>
    </nav>

    {/* Spacer so page content isn't hidden under fixed nav */}
    <div className="h-[88px]" />
  </>
  );
}







