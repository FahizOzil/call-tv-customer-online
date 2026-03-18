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
    id: "information-collected",
    num: "01",
    title: "Information We Collect",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    intro: "When you visit our website, we may collect certain information, including:",
    bullets: [
      "Basic contact information that you voluntarily provide, such as name, phone number, or email address",
      "Technical information such as IP address, browser type, and device information",
      "Website usage information through cookies or analytics tools",
    ],
    outro: "This information helps us improve our website and better understand how visitors use our platform.",
  },
  {
    id: "how-we-use",
    num: "02",
    title: "How We Use Information",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    intro: "Information collected may be used to:",
    bullets: [
      "Respond to inquiries submitted through our website",
      "Provide informational guidance related to connectivity services",
      "Improve website functionality and user experience",
      "Monitor website performance and security",
    ],
    outro: "We do not sell or rent personal information to third parties.",
    outroHighlight: true,
  },
  {
    id: "cookies",
    num: "03",
    title: "Cookies and Tracking Technologies",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
      </svg>
    ),
    content: [
      "Our website may use cookies or similar technologies to enhance user experience and analyze website traffic. Users may disable cookies through their browser settings if preferred.",
    ],
  },
  {
    id: "third-party",
    num: "04",
    title: "Third-Party Services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    content: [
      "Our website may include references to third-party providers or services for informational purposes. We are not responsible for the privacy practices or policies of external websites.",
    ],
  },
  {
    id: "data-protection",
    num: "05",
    title: "Data Protection",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    content: [
      "We take reasonable administrative and technical measures to protect information collected through our website from unauthorized access or disclosure.",
    ],
  },
  {
    id: "childrens-privacy",
    num: "06",
    title: "Children's Privacy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    content: [
      "Our website is not directed toward children under the age of 13, and we do not knowingly collect personal information from minors.",
    ],
  },
  {
    id: "changes",
    num: "07",
    title: "Changes to This Policy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    content: [
      "Blue Wave Promotion LLC reserves the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date.",
    ],
  },
];

export default function PrivacyPage() {
  const [heroRef, heroIn] = useInView(0.1);
  const [bodyRef, bodyIn] = useInView(0.05);
  const [ctaRef,  ctaIn]  = useInView();

  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-25% 0px -60% 0px" }
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
              Privacy{" "}
              <span className="italic text-blue-600">Policy.</span>
            </h1>

            <div className={`transition-all duration-700 delay-200 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <p className="text-lg text-[#1A1A2E]/65 leading-relaxed mb-5"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                HomeConnectPro, operated by{" "}
                <span className="font-medium text-[#1A1A2E]">Blue Wave Promotion LLC</span>,
                values the privacy of visitors to our website. This policy explains how we collect, use, and protect information when users visit{" "}
                <span className="font-medium text-[#1A1A2E]">www.homeconnectpro.site</span>.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <span className="text-xs font-semibold text-[#1A1A2E]/60"
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                    Effective Date: January 1, 2025
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-2.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span className="text-xs font-semibold text-green-700"
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                    We do not sell your data
                  </span>
                </div>
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
                <a
                  href="#contact-info"
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs transition-all duration-200
                    ${activeSection === "contact-info"
                      ? "bg-blue-600 text-white font-semibold"
                      : "text-[#1A1A2E]/55 hover:bg-white hover:text-[#1A1A2E]"}`}
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                >
                  <span className={`font-bold tabular-nums flex-shrink-0 ${activeSection === "contact-info" ? "text-blue-200" : "text-blue-400"}`}>08</span>
                  Contact Us
                </a>
              </nav>

              <div className="mt-8 p-5 rounded-2xl bg-[#1A1A2E]">
                <p className="text-xs text-white/50 mb-1 leading-relaxed"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Privacy questions?</p>
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
            {SECTIONS.map((s) => (
              <div
                key={s.id}
                id={s.id}
                ref={(el) => (sectionRefs.current[s.id] = el)}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-md hover:shadow-blue-600/5 transition-all duration-300 overflow-hidden"
              >
                {/* header */}
                <div className="flex items-center gap-4 px-8 py-5 border-b border-gray-50">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {s.icon}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-blue-400"
                      style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>{s.num}</span>
                    <h2 className="text-base md:text-lg font-bold text-[#1A1A2E] group-hover:text-blue-600 transition-colors duration-200"
                      style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.01em" }}>
                      {s.title}
                    </h2>
                  </div>
                </div>

                {/* body */}
                <div className="px-8 py-6 space-y-4">
                  {s.intro && (
                    <p className="text-sm text-[#1A1A2E]/65 leading-relaxed"
                      style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                      {s.intro}
                    </p>
                  )}

                  {s.bullets && (
                    <ul className="space-y-2.5">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                          <p className="text-sm text-[#1A1A2E]/65 leading-relaxed"
                            style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                            {b}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.content && s.content.map((para, i) => (
                    <p key={i} className="text-sm text-[#1A1A2E]/65 leading-relaxed"
                      style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                      {para}
                    </p>
                  ))}

                  {s.outro && (
                    s.outroHighlight ? (
                      <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3 mt-2">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-green-600 flex-shrink-0">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-xs font-semibold text-green-700"
                          style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                          {s.outro}
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-[#1A1A2E]/65 leading-relaxed"
                        style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                        {s.outro}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Contact card */}
            <div
              id="contact-info"
              ref={(el) => (sectionRefs.current["contact-info"] = el)}
              className="bg-[#1A1A2E] rounded-2xl overflow-hidden"
            >
              <div className="flex items-center gap-4 px-8 py-5 border-b border-white/10">
                <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-blue-400"
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>08</span>
                  <h2 className="text-base md:text-lg font-bold text-white"
                    style={{ fontFamily: "'Georgia', serif" }}>Contact Us</h2>
                </div>
              </div>
              <div className="px-8 py-6 space-y-4">
                <p className="text-sm text-white/55 leading-relaxed"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                  For questions or concerns regarding this Privacy Policy, please contact:
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: "'Georgia', serif" }}>
                    Blue Wave Promotion LLC
                  </p>
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
                Have a privacy concern?
              </h2>
              <p className="mt-2 text-white/50 text-sm"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                Our team is available 24 hours for any questions about your privacy or our data practices.
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
              <Link href="/terms"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-200"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                View Terms & Conditions
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
              { label: "Privacy",        href: "/privacy" },
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