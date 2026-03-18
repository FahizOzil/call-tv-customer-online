"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

function useInView(threshold = 0.1) {
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

const SECTIONS = [
  {
    id: "use",
    num: "01",
    title: "Use of the Website",
    content: [
      "HomeConnectPro provides informational content related to television services, cable connections, and internet technologies. The information presented on this website is intended for general informational purposes only.",
      "Users agree to use this website in a lawful manner and not engage in activities that may damage or interfere with the operation of the website.",
    ],
  },
  {
    id: "informational",
    num: "02",
    title: "Informational Purpose",
    content: [
      "HomeConnectPro operates as an independent informational platform designed to help individuals understand connectivity technologies and general service options.",
      "The website does not guarantee the availability, pricing, or performance of any telecommunications services.",
    ],
  },
  {
    id: "affiliation",
    num: "03",
    title: "No Affiliation with Providers",
    content: [
      "HomeConnectPro is not affiliated with, endorsed by, or officially connected with any telecommunications provider mentioned on the website. All brand names and trademarks belong to their respective owners.",
    ],
  },
  {
    id: "third-party",
    num: "04",
    title: "Third-Party References",
    content: [
      "The website may reference third-party companies or services for informational purposes. Blue Wave Promotion LLC does not control or guarantee the services provided by third-party companies.",
    ],
  },
  {
    id: "liability",
    num: "05",
    title: "Limitation of Liability",
    content: [
      "Blue Wave Promotion LLC shall not be held liable for any damages or losses arising from the use of this website or reliance on the information provided.",
      "Users are encouraged to verify details directly with service providers before making decisions regarding connectivity services.",
    ],
  },
  {
    id: "ip",
    num: "06",
    title: "Intellectual Property",
    content: [
      "All content on this website, including text, graphics, and layout, is the property of Blue Wave Promotion LLC unless otherwise stated and may not be copied or reproduced without permission.",
    ],
  },
  {
    id: "changes",
    num: "07",
    title: "Changes to Terms",
    content: [
      "Blue Wave Promotion LLC reserves the right to update or modify these Terms and Conditions at any time. Updates will be posted on this page.",
    ],
  },
  {
    id: "law",
    num: "08",
    title: "Governing Law",
    content: [
      "These Terms and Conditions shall be governed by and interpreted in accordance with applicable laws.",
    ],
  },
];

export default function TermsPage() {
  const [heroRef, heroIn] = useInView(0.1);
  const [bodyRef, bodyIn] = useInView(0.05);
  const [ctaRef,  ctaIn]  = useInView();

  const [activeSection, setActiveSection] = useState(null);

  // Scroll spy
  const sectionRefs = useRef({});
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    Object.values(sectionRefs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [bodyIn]);

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
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Legal</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h1
              className={`text-5xl md:text-7xl font-bold leading-[1.05] transition-all duration-700 delay-100 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.03em" }}
            >
              Terms &{" "}
              <span className="italic text-blue-600">Conditions.</span>
            </h1>

            <div className={`transition-all duration-700 delay-200 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <p className="text-lg text-[#1A1A2E]/65 leading-relaxed mb-5"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                These Terms and Conditions govern the use of{" "}
                <span className="font-medium text-[#1A1A2E]">www.homeconnectpro.site</span>,
                operated by Blue Wave Promotion LLC. By accessing this website, you agree to the terms outlined below.
              </p>
              {/* effective date badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span className="text-xs font-semibold text-[#1A1A2E]/60"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                  Effective Date: January 1, 2025
                </span>
              </div>
            </div>
          </div>

          <div
            className={`mt-12 h-px bg-gradient-to-r from-blue-600 via-[#1A1A2E]/20 to-transparent transition-all duration-1000 delay-300 ${heroIn ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </section>

      {/* ── BODY ── */}
      <section ref={bodyRef} className="py-4 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[260px_1fr] gap-16 items-start">

          {/* ── Sticky TOC ── */}
          <div className={`hidden lg:block transition-all duration-700 ${bodyIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <div className="sticky top-28">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 block mb-4"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Contents</span>
              <div className="w-8 h-px bg-blue-600 mb-5" />
              <nav className="space-y-0.5">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs transition-all duration-200
                      ${activeSection === s.id
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-[#1A1A2E]/55 hover:bg-white hover:text-[#1A1A2E]"}`}
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                  >
                    <span className={`font-bold tabular-nums flex-shrink-0 ${activeSection === s.id ? "text-blue-200" : "text-blue-400"}`}>
                      {s.num}
                    </span>
                    {s.title}
                  </a>
                ))}
              </nav>

              {/* contact shortcut */}
              <div className="mt-8 p-5 rounded-2xl bg-[#1A1A2E]">
                <p className="text-xs text-white/50 mb-1 leading-relaxed"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Questions about these terms?</p>
                <a href="mailto:support@homeconnectpro.site"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200 break-all"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                  support@homeconnectpro.site
                </a>
              </div>
            </div>
          </div>

          {/* ── Sections ── */}
          <div className={`space-y-2 transition-all duration-700 delay-150 ${bodyIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {SECTIONS.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                ref={(el) => (sectionRefs.current[s.id] = el)}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-md hover:shadow-blue-600/5 transition-all duration-300 overflow-hidden"
              >
                {/* section header */}
                <div className="flex items-center gap-5 px-8 py-6 border-b border-gray-50">
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                  >
                    {s.num}
                  </span>
                  <h2 className="text-lg font-bold text-[#1A1A2E] group-hover:text-blue-600 transition-colors duration-200"
                    style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.01em" }}>
                    {s.title}
                  </h2>
                </div>

                {/* section body */}
                <div className="px-8 py-6 pl-[84px] space-y-3">
                  {s.content.map((para, j) => (
                    <p key={j} className="text-sm text-[#1A1A2E]/65 leading-relaxed"
                      style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact section */}
            <div
              id="contact-info"
              ref={(el) => (sectionRefs.current["contact-info"] = el)}
              className="bg-[#1A1A2E] rounded-2xl overflow-hidden"
            >
              <div className="flex items-center gap-5 px-8 py-6 border-b border-white/10">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-xs font-bold"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>09</span>
                <h2 className="text-lg font-bold text-white"
                  style={{ fontFamily: "'Georgia', serif" }}>Contact Information</h2>
              </div>
              <div className="px-8 py-6 pl-[84px] space-y-4">
                <p className="text-sm text-white/55 leading-relaxed"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                  For questions regarding these Terms and Conditions, please contact:
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-white"
                    style={{ fontFamily: "'Georgia', serif" }}>Blue Wave Promotion LLC</p>
                  <a href="mailto:support@homeconnectpro.site"
                    className="block text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                    support@homeconnectpro.site
                  </a>
                  <a href="https://www.homeconnectpro.site" target="_blank" rel="noopener noreferrer"
                    className="block text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                    www.homeconnectpro.site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} className="py-4 pb-24 px-6 bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className={`relative rounded-3xl bg-[#1A1A2E] overflow-hidden p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-all duration-700 ${ctaIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-3"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Questions?</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}>
                Need to get in touch with us?
              </h2>
              <p className="mt-2 text-white/50 text-sm"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                Our team is available 24 hours for any questions about our terms or services.
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
              <Link href="/faq"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-200"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                View FAQ
              </Link>
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