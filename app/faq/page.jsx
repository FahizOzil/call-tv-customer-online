"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "../Components/Navbar";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const FAQS = [
  {
    q: "What does HomeConnectPro do?",
    a: "HomeConnectPro provides informational guidance related to television services, cable connections, and home internet technologies. Our platform helps users understand how different connectivity options work — clearly and without jargon.",
  },
  {
    q: "Are you a telecommunications provider?",
    a: "No. HomeConnectPro is not a telecommunications provider. We provide informational resources designed to help users learn about different connectivity services and technologies — we do not sell, install, or manage any services.",
  },
  {
    q: "Do you represent any specific telecom companies?",
    a: "HomeConnectPro operates independently and does not claim to represent or act on behalf of any specific telecommunications provider. Our content is unbiased and created solely to inform.",
  },
  {
    q: "Can you help me understand internet speed requirements?",
    a: "Yes. Our informational resources explain common internet speed requirements for activities such as streaming, browsing, gaming, and working from home. Visit our Internet Guide for a full breakdown.",
    cta: { label: "View Internet Guide", href: "/internet-guide" },
  },
  {
    q: "How can I contact your support team?",
    a: "You can reach us through our website contact form or email us directly at support@homeconnectpro.site for any general inquiries. Our team is available 24 hours and strives to respond as quickly as possible.",
    cta: { label: "Go to Contact Page", href: "/contact" },
  },
];

function AccordionItem({ faq, index, isOpen, onToggle, animate }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`border border-gray-100 rounded-2xl bg-white overflow-hidden transition-all duration-500 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-600/5
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-5 px-7 py-6 text-left group"
      >
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${isOpen ? "bg-blue-600 text-white" : "bg-blue-600/10 text-blue-600"}`}
          style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`flex-1 text-base font-bold leading-snug transition-colors duration-200 ${isOpen ? "text-blue-600" : "text-[#1A1A2E] group-hover:text-blue-600"}`}
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {faq.q}
        </span>

        <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-blue-200 bg-blue-50 rotate-180" : "border-gray-200 group-hover:border-blue-200"}`}>
          <svg viewBox="0 0 20 20" fill="currentColor"
            className={`w-4 h-4 transition-colors duration-200 ${isOpen ? "text-blue-600" : "text-gray-400"}`}>
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </span>
      </button>

      <div
        style={{ height, transition: "height 0.35s cubic-bezier(0.4,0,0.2,1)" }}
        className="overflow-hidden"
      >
        <div ref={contentRef} className="px-7 pb-7">
          <div className="pl-[52px]">
            <div className="w-8 h-px bg-blue-200 mb-4" />
            <p
              className="text-[#1A1A2E]/65 leading-relaxed text-sm"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}
            >
              {faq.a}
            </p>
            {faq.cta && (
              <Link
                href={faq.cta.href}
                className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                {faq.cta.label}
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M2 8a.75.75 0 01.75-.75h8.69L8.22 4.03a.75.75 0 011.06-1.06l4.25 4.25a.75.75 0 010 1.06L9.28 12.53a.75.75 0 01-1.06-1.06l3.22-3.22H2.75A.75.75 0 012 8z" clipRule="evenodd" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [heroRef, heroIn] = useInView(0.1);
  const [faqRef,  faqIn]  = useInView(0.05);
  const [ctaRef,  ctaIn]  = useInView();

  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1A1A2E]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative pt-16 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#1A1A2E08 1px,transparent 1px),linear-gradient(90deg,#1A1A2E08 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className={`inline-flex items-center gap-2 mb-8 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="w-8 h-px bg-blue-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>FAQ</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h1
              className={`text-5xl md:text-7xl font-bold leading-[1.05] transition-all duration-700 delay-100 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.03em" }}
            >
              Questions,{" "}
              <span className="italic text-blue-600">answered.</span>
            </h1>

            <p
              className={`text-lg text-[#1A1A2E]/65 leading-relaxed transition-all duration-700 delay-200 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}
            >
              Everything you need to know about HomeConnectPro and how we help households navigate home connectivity services.
            </p>
          </div>

          {/* stat strip */}
          <div className={`mt-12 flex items-center gap-8 transition-all duration-700 delay-300 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {[
              { val: "5",    label: "Questions covered" },
              { val: "24hr", label: "Support available" },
              { val: "100%", label: "Independent" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-8">
                {i > 0 && <div className="w-px h-8 bg-[#1A1A2E]/15" />}
                <div>
                  <div className="text-2xl font-bold text-blue-600" style={{ fontFamily: "'Georgia', serif" }}>{s.val}</div>
                  <div className="text-xs text-[#1A1A2E]/50 uppercase tracking-[0.1em] mt-0.5"
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 h-px bg-gradient-to-r from-blue-600 via-[#1A1A2E]/20 to-transparent transition-all duration-1000 delay-300 ${heroIn ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </section>

      {/* ── ACCORDION ── */}
      <section ref={faqRef} className="py-4 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[280px_1fr] gap-16 items-start">

          {/* sticky sidebar */}
          <div className={`hidden lg:block transition-all duration-700 ${faqIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <div className="sticky top-28">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Jump to</span>
              <div className="mt-4 w-8 h-px bg-blue-600 mb-6" />
              <nav className="space-y-1">
                {FAQS.map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => setOpenIndex(i)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs leading-snug transition-all duration-200
                      ${openIndex === i ? "bg-blue-600 text-white font-semibold" : "text-[#1A1A2E]/60 hover:bg-white hover:text-[#1A1A2E]"}`}
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                  >
                    <span className={`font-bold mr-1.5 ${openIndex === i ? "text-blue-200" : "text-blue-400"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {faq.q}
                  </button>
                ))}
              </nav>

              <div className="mt-8 p-5 rounded-2xl bg-[#1A1A2E]">
                <p className="text-xs text-white/50 mb-3 leading-relaxed"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                  Still have questions?
                </p>
                <Link href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                  Contact our team →
                </Link>
              </div>
            </div>
          </div>

          {/* accordion */}
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
                animate={faqIn}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section ref={ctaRef} className="py-4 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`relative rounded-3xl bg-[#1A1A2E] overflow-hidden p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-all duration-700 ${ctaIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-3"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Still curious?</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}>
                Didn't find what you were looking for?
              </h2>
              <p className="mt-2 text-white/50 text-sm"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                Our support team is available 24 hours. Reach out anytime.
              </p>
            </div>
            <div className="relative flex flex-wrap gap-3 flex-shrink-0">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-200"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                Contact Us
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <a href="mailto:support@homeconnectpro.site"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-200"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#1A1A2E]/10 py-10 px-6 bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <img src="/images/logo_black.png" alt="HomeConnectPro" className="h-14 w-auto" />
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "About",          href: "/about" },
              { label: "Internet Guide", href: "/internet-guide" },
              { label: "Providers",      href: "/provider-information" },
              { label: "FAQ",            href: "/faq" },
              { label: "Contact",        href: "/contact" },
              { label: "Terms",          href: "/terms" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="text-xs text-[#1A1A2E]/50 hover:text-blue-600 transition-colors duration-200"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-[#1A1A2E]/40" style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
            © {new Date().getFullYear()} HomeConnectPro.<br />An independent informational platform.
          </p>
        </div>
      </footer>
    </div>
  );
}