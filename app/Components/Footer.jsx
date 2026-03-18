"use client";



import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="bg-black text-white px-8 md:px-16 lg:px-24 pt-12 pb-0">
        {/* ── Top: Brand + Contact Info ─────────────────────────────────── */}
        <div className="mb-10">
          {/* Brand Name */}
          <h2 className="text-xl font-bold text-white mb-6">Home Connect Pro</h2>

          {/* Contact Details */}
          <p className="text-sm text-gray-300 mb-1">
            <span className="font-semibold text-white">Phone:</span>{" "}
            <a href="tel:8184531810" className="hover:text-emerald-400 transition-colors">
              (818) 453-1810
            </a>
          </p>
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-white">Email:</span>{" "}
            <a href="mailto:info@homeconnectpro.com" className="hover:text-emerald-400 transition-colors">
              info@homeconnectpro.com
            </a>
          </p>
        </div>

        {/* ── Divider ───────────────────────────────────────────────────── */}
        <div className="border-t border-gray-800" />

        {/* ── Bottom: Copyright ─────────────────────────────────────────── */}
        <div className="py-5 text-center text-sm text-gray-400">
          Copyright @ 2026{" "}
          <span className="font-bold text-white">homeconnectpro.com</span>{" "}
          All Rights Reserved.
        </div>
      </footer>

      {/* ── Scroll To Top Button ──────────────────────────────────────────
          Fixed to bottom-right corner, only visible after scrolling down.
      ──────────────────────────────────────────────────────────────────── */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500 text-white shadow-lg transition-all duration-300 hover:bg-emerald-400 active:scale-95
          ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18,15 12,9 6,15" />
        </svg>
      </button>
    </>
  );
}