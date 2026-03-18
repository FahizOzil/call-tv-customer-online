"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

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

const SERVICE_TYPES = [
  {
    id: "cable",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Cable Internet Services",
    desc: "Providers delivering broadband internet through coaxial cable infrastructure — one of the most widely available residential connection types across urban and suburban areas.",
    tags: ["Widespread coverage", "Good speeds", "Shared infrastructure"],
  },
  {
    id: "fiber",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Fiber Internet Connections",
    desc: "Providers using fiber-optic cable networks to offer high-speed, high-reliability internet. Generally available in more densely populated areas and newer residential developments.",
    tags: ["Fastest speeds", "Low latency", "High reliability"],
  },
  {
    id: "tv",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
      </svg>
    ),
    title: "Television & Streaming Services",
    desc: "Providers offering traditional cable television packages as well as modern streaming and on-demand content services for home entertainment.",
    tags: ["Live TV", "On-demand content", "Bundle options"],
  },
  {
    id: "bundle",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Home Communication Bundles",
    desc: "Bundled packages combining internet, television, and phone services offered by providers — often available at a combined rate for households wanting multiple services from one company.",
    tags: ["Internet + TV + Phone", "Single billing", "Potential savings"],
  },
];

const CONSIDERATIONS = [
  {
    num: "01",
    title: "Geographic Location",
    desc: "Availability of specific providers and technologies varies significantly by region. Urban areas typically have more options than rural communities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Infrastructure Type",
    desc: "The type of infrastructure in your area — fiber, cable, DSL, or wireless — directly determines which service tiers and speeds are realistically available.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Service Plans & Speeds",
    desc: "Providers typically offer tiered plans with varying speed levels. Understanding your household's actual usage needs helps identify the right plan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Bundle vs. Standalone",
    desc: "Some households benefit from bundling internet, TV, and phone under one provider, while others may prefer separate services depending on usage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
];

export default function ProviderInformationPage() {
  const [heroRef,   heroIn]   = useInView(0.1);
  const [introRef,  introIn]  = useInView();
  const [typeRef,   typeIn]   = useInView(0.05);
  const [consRef,   consIn]   = useInView();
  const [noteRef,   noteIn]   = useInView();
  const [ctaRef,    ctaIn]    = useInView();

  const [activeService, setActiveService] = useState(null);

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
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-blue-600/3 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className={`inline-flex items-center gap-2 mb-8 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="w-8 h-px bg-blue-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Provider Information</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h1
              className={`text-5xl md:text-7xl font-bold leading-[1.05] transition-all duration-700 delay-100 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.03em" }}
            >
              Find the right{" "}
              <span className="italic text-blue-600">service.</span>
            </h1>

            <p
              className={`text-lg text-[#1A1A2E]/65 leading-relaxed transition-all duration-700 delay-200 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}
            >
              Different regions may have access to a variety of connectivity providers offering television, internet, and bundled communication services. Availability varies by location and infrastructure.
            </p>
          </div>

          {/* availability notice */}
          <div className={`mt-12 inline-flex items-start gap-3 bg-white border border-blue-100 rounded-2xl px-5 py-4 transition-all duration-700 delay-300 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-sm text-[#1A1A2E]/70 leading-relaxed"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
              <strong className="font-semibold text-[#1A1A2E]">Note:</strong> Service availability varies by geographic location and local infrastructure. The options below represent general service categories, not endorsements of specific providers.
            </p>
          </div>

          <div
            className={`mt-10 h-px bg-gradient-to-r from-blue-600 via-[#1A1A2E]/20 to-transparent transition-all duration-1000 delay-400 ${heroIn ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </section>

      {/* ── INTRO ── */}
      <section ref={introRef} className="py-4 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className={`transition-all duration-700 ${introIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Overview</span>
            <div className="mt-4 w-12 h-1 bg-blue-600" />
          </div>
          <div className={`transition-all duration-700 delay-150 ${introIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-5"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.025em" }}>
              Connectivity Providers and Services
            </h2>
            <p className="text-[#1A1A2E]/65 leading-relaxed mb-4"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
              HomeConnectPro provides informational resources to help users understand common service types and how connectivity technologies function in residential environments.
            </p>
            <p className="text-[#1A1A2E]/65 leading-relaxed"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
              Providers commonly operating in various areas may offer one or more of the service categories below. Use this guide to understand what each service type involves before evaluating your local options.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICE TYPE CARDS ── */}
      <section ref={typeRef} className="py-4 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-10 transition-all duration-700 ${typeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Service Categories</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}>
              Commonly available service types.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {SERVICE_TYPES.map((s, i) => (
              <div
                key={s.id}
                onClick={() => setActiveService(activeService === s.id ? null : s.id)}
                className={`group cursor-pointer rounded-3xl border transition-all duration-400 overflow-hidden
                  ${activeService === s.id
                    ? "border-blue-300 bg-[#1A1A2E] shadow-xl shadow-blue-600/10"
                    : "border-gray-100 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5"}
                  ${typeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300
                      ${activeService === s.id
                        ? "bg-blue-600 text-white"
                        : "bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"}`}>
                      {s.icon}
                    </div>
                    <div className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300
                      ${activeService === s.id ? "border-blue-500 bg-blue-600 rotate-180" : "border-gray-200 group-hover:border-blue-300"}`}>
                      <svg viewBox="0 0 20 20" fill="currentColor"
                        className={`w-3.5 h-3.5 transition-colors ${activeService === s.id ? "text-white" : "text-gray-400"}`}>
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${activeService === s.id ? "text-white" : "text-[#1A1A2E] group-hover:text-blue-600"}`}
                    style={{ fontFamily: "'Georgia', serif" }}>
                    {s.title}
                  </h3>

                  {/* expanded description */}
                  <div className={`overflow-hidden transition-all duration-400 ${activeService === s.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-white/65 text-sm leading-relaxed mb-5"
                      style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                      {s.desc}
                    </p>
                  </div>

                  {/* tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {s.tags.map((tag) => (
                      <span key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300
                          ${activeService === s.id
                            ? "bg-white/10 text-white/70"
                            : "bg-blue-50 text-blue-600 border border-blue-100"}`}
                        style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-[#1A1A2E]/35 italic"
            style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
            * Click any card to expand details. Service types listed are general categories. HomeConnectPro does not endorse or represent any specific provider.
          </p>
        </div>
      </section>

      {/* ── CONSIDERATIONS ── */}
      <section ref={consRef} className="py-16 pb-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-14 transition-all duration-700 ${consIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>What to Consider</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.025em" }}>
              Key factors when evaluating providers.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CONSIDERATIONS.map((c, i) => (
              <div
                key={c.num}
                className={`group flex gap-6 p-7 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-600/5 bg-[#F7F5F0] transition-all duration-500
                  ${consIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {c.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-blue-400"
                      style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>{c.num}</span>
                    <h3 className="text-base font-bold text-[#1A1A2E] group-hover:text-blue-600 transition-colors duration-200"
                      style={{ fontFamily: "'Georgia', serif" }}>
                      {c.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#1A1A2E]/60 leading-relaxed"
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDEPENDENCE NOTE ── */}
      <section ref={noteRef} className="py-16 pb-16 px-6 bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className={`grid md:grid-cols-[auto_1fr] gap-8 items-start bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm transition-all duration-700 ${noteIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3"
                style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}>
                HomeConnectPro is fully independent.
              </h3>
              <p className="text-[#1A1A2E]/65 leading-relaxed text-sm mb-2"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                HomeConnectPro provides informational resources to help users understand common service types and how connectivity technologies function in residential environments. We do not represent, endorse, or act on behalf of any specific telecommunications provider.
              </p>
              <p className="text-[#1A1A2E]/65 leading-relaxed text-sm"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                All information presented is general and educational in nature. Availability of services may vary depending on geographic location and infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} className="py-4 pb-24 px-6 bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className={`relative rounded-3xl bg-[#1A1A2E] overflow-hidden p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-all duration-700 ${ctaIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-blue-600/8 rounded-full blur-2xl pointer-events-none" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-3"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Learn More</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}>
                Want to understand the technology first?
              </h2>
              <p className="mt-2 text-white/50 text-sm"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                Our Internet Guide explains fiber, cable, DSL, and wireless technologies in plain language.
              </p>
            </div>
            <div className="relative flex flex-wrap gap-3 flex-shrink-0">
              <Link href="/internet-guide"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-200"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                Internet Guide
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-200"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                Ask a Question
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