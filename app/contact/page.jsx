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

const INITIAL = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
  const [heroRef,  heroIn]  = useInView(0.1);
  const [cardsRef, cardsIn] = useInView();
  const [formRef,  formIn]  = useInView();

  const [form, setForm]       = useState(INITIAL);
  const [status, setStatus]   = useState("idle"); // idle | sending | sent | error
  const [focused, setFocused] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your real form submission logic / API route
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
    setForm(INITIAL);
  };

  const inputBase =
    "w-full bg-white border rounded-xl px-4 py-3.5 text-sm text-[#1A1A2E] outline-none transition-all duration-200 placeholder-gray-300";
  const inputFocus = (name) =>
    focused === name
      ? "border-blue-500 ring-2 ring-blue-500/15 shadow-sm"
      : "border-gray-200 hover:border-gray-300";

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
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Get In Touch</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h1
              className={`text-5xl md:text-7xl font-bold leading-[1.05] transition-all duration-700 delay-100 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.03em" }}
            >
              We're here{" "}
              <span className="italic text-blue-600">to help.</span>
            </h1>

            <p
              className={`text-lg text-[#1A1A2E]/65 leading-relaxed transition-all duration-700 delay-200 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}
            >
              Have questions about the information on our website or need guidance understanding television or internet services? Our support team is available around the clock.
            </p>
          </div>

          <div
            className={`mt-16 h-px bg-gradient-to-r from-blue-600 via-[#1A1A2E]/20 to-transparent transition-all duration-1000 delay-300 ${heroIn ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section ref={cardsRef} className="py-4 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Email */}
          <div className={`group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-500 ${cardsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0ms" }}>
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 mb-2"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Email Support</p>
            <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Georgia', serif" }}>Send us a message</h3>
            <a href="mailto:support@homeconnectpro.site"
              className="text-sm text-blue-600 hover:text-blue-800 font-medium break-all transition-colors duration-200"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
              support@homeconnectpro.site
            </a>
          </div>

          {/* Availability */}
          <div className={`group bg-[#1A1A2E] rounded-2xl p-8 border border-transparent transition-all duration-500 ${cardsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "100ms" }}>
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400 mb-2"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Customer Assistance</p>
            <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>Available 24 Hours</h3>
            <p className="text-sm text-white/50 leading-relaxed"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
              Our team strives to respond to all inquiries as quickly as possible, any time of day.
            </p>
            {/* live indicator */}
            <div className="mt-5 inline-flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-xs text-green-400" style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Support is online</span>
            </div>
          </div>

          {/* Response time */}
          <div className={`group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-500 ${cardsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "200ms" }}>
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 mb-2"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>General Inquiries</p>
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Georgia', serif" }}>Use the contact form</h3>
            <p className="text-sm text-[#1A1A2E]/55 leading-relaxed"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
              For connectivity information and service questions, the form below gets you to the right person fast.
            </p>
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