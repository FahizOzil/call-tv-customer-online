// TapToCallAndFooter.jsx
// -------------------------------------------------------
// Two bottom-of-page sections:
//   1. <TapToCall>  — Blue rounded card with phone number CTA
//                     The entire card is a clickable tel: link
//   2. <Footer>     — Dark navy background, site name, disclaimer, copyright
// -------------------------------------------------------
// Usage:
//   import TapToCallAndFooter from "@/components/TapToCallAndFooter";
//   <TapToCallAndFooter />
// -------------------------------------------------------

import React from "react";

// Phone number — update here to change everywhere in this file
const PHONE_NUMBER = "8013403488";
const PHONE_DISPLAY = "(801) 340-3488";

// ── 1. TAP TO CALL BANNER ──────────────────────────────
function TapToCall() {
  return (
    // White section wrapping the blue card
    <section className="w-full bg-white py-10 px-6">
      {/*
        The entire card is wrapped in an <a> tag so tapping ANYWHERE
        on the card triggers the phone dialer — matching the design intent.
      */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="block max-w-2xl mx-auto rounded-2xl px-12 py-10 text-center text-white
                   cursor-pointer select-none transition-opacity duration-200 hover:opacity-90 active:opacity-75"
        style={{
          // Matches the solid blue card in the screenshot
          background: "linear-gradient(135deg, #3b82f6 0%, #4338ca 100%)",
        }}
      >
        <h2 className="text-4xl font-medium mb-3">Tap Anywhere To Call</h2>
        <p className="text-blue-100 font-medium text-2xl leading-relaxed mb-5">
          If you would like more information about TV or internet services,
          simply tap anywhere on this page to connect.
        </p>
        {/* Bold phone number display */}
        <span className="text-lg font-medium tracking-wide">{PHONE_DISPLAY}</span>
      </a>
    </section>
  );
}

// ── 2. FOOTER ──────────────────────────────────────────
function Footer() {
  return (  
    <footer
      className="w-full py-12 px-6 text-center"
      style={{ backgroundColor: "#0f172a" }} // dark navy — matches screenshot
    >
      {/* Site name */}
      <p className="text-white font-bold tracking-widest text-sm mb-4">
        Call Tv Customer Service
      </p>

      {/* Legal disclaimer */}
      <p className="text-gray-400 text-xs leading-relaxed max-w-xl mx-auto mb-5">
        This website is for informational purposes only. We do not sell
        television or internet services, process payments, or provide service
        connections. The content is intended to educate users about connectivity
        concepts.
      </p>

      {/* Copyright line — year auto-updates */}
      <p className="text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Call Tv Customer Service. All rights reserved.
      </p>
    </footer>
  );
}

// ── DEFAULT EXPORT ─────────────────────────────────────
export default function TapToCallAndFooter() {
  return (
    <>
      <TapToCall />
      <Footer />
    </>
  );
}