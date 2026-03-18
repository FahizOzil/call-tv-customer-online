"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";


// ── Scroll-reveal hook ──────────────────────────────────
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

// ── Data ────────────────────────────────────────────────
const stats = [
  { value: "10K+", label: "Households Informed" },
  { value: "50+",  label: "Guides Published" },
  { value: "100%", label: "Independent" },
];

const topics = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    title: "Internet Connection Types",
    desc: "Fiber, cable, DSL, satellite — we break down every technology so you know what's running through your walls.",
    href: "/internet-guide",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Typical Home Connectivity Needs",
    desc: "From solo streamers to busy families with dozens of devices — understand what speeds and plans actually make sense.",
    href: "/internet-guide",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Television & Cable Service Basics",
    desc: "Traditional cable, streaming bundles, and everything in between — explained without the jargon.",
    href: "/provider-information",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Factors Affecting Service Performance",
    desc: "Signal interference, router placement, peak hours — the hidden variables that determine your real-world experience.",
    href: "/internet-guide",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "General Service Availability",
    desc: "Coverage maps, rural vs. urban access, and how to identify what's realistically available at your address.",
    href: "/provider-information",
  },
];

const quickLinks = [
  { label: "Internet Guide",       href: "/internet-guide",        desc: "Understand connection types & speeds" },
  { label: "Provider Information", href: "/provider-information",  desc: "Compare plans & service providers" },
  { label: "FAQ",                  href: "/faq",                   desc: "Common questions answered" },
  { label: "Contact Us",           href: "/contact",               desc: "Get in touch with our team" },
];

// ── Page ────────────────────────────────────────────────
export default function AboutPage() {
  const [heroRef,    heroIn]    = useInView(0.1);
  const [missionRef, missionIn] = useInView();
  const [statsRef,   statsIn]   = useInView();
  const [topicsRef,  topicsIn]  = useInView();
  const [linksRef,   linksIn]   = useInView();
  const [closingRef, closingIn] = useInView();

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1A1A2E]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* <Navbar /> */}

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative pt-16 pb-20 px-6 overflow-hidden">
        {/* subtle grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#1A1A2E08 1px,transparent 1px),linear-gradient(90deg,#1A1A2E08 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          {/* eyebrow */}
          <div className={`inline-flex items-center gap-2 mb-8 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="w-8 h-px bg-blue-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>About Us</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h1
              className={`text-5xl md:text-7xl font-bold leading-[1.05] transition-all duration-700 delay-100 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.03em" }}
            >
              Connecting you to{" "}
              <span className="italic text-blue-600">clarity.</span>
            </h1>

            <p
              className={`text-lg text-[#1A1A2E]/65 leading-relaxed transition-all duration-700 delay-200 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}
            >
              HomeConnectPro is an independent informational platform built to demystify home connectivity — from internet speeds to television services — so every household can make genuinely informed decisions.
            </p>
          </div>

          <div
            className={`mt-16 h-px bg-gradient-to-r from-blue-600 via-[#1A1A2E]/20 to-transparent transition-all duration-1000 delay-300 ${heroIn ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </section>

      {/* ── MISSION ── */}
      <section ref={missionRef} className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className={`transition-all duration-700 ${missionIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Our Mission</span>
            <div className="mt-4 w-12 h-1 bg-blue-600" />
          </div>

          <div className={`transition-all duration-700 delay-150 ${missionIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.025em" }}>
              Making connectivity simple for every household.
            </h2>
            <div className="space-y-4 text-[#1A1A2E]/65 leading-relaxed"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
              <p>
                Many households rely on internet and television services every single day — yet understanding speeds, service types, and available options can be genuinely confusing. That's the gap HomeConnectPro was built to close.
              </p>
              <p>
                We operate as a completely independent informational resource. We do not represent or act on behalf of any specific telecommunications provider. Our only agenda is clarity.
              </p>
            </div>

            <blockquote className="mt-10 pl-6 border-l-4 border-blue-600">
              <p className="text-xl font-semibold italic text-[#1A1A2E]"
                style={{ fontFamily: "'Georgia', serif" }}>
                "Our goal is to present information in a simple and accessible format, so users can make decisions they feel confident about."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} className="py-16 px-6 bg-[#1A1A2E]">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center transition-all duration-700 ${statsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl md:text-6xl font-bold text-blue-500"
                style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.04em" }}>
                {s.value}
              </div>
              <div className="mt-2 text-sm text-white/50 uppercase tracking-[0.15em]"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section ref={topicsRef} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-700 ${topicsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>What We Cover</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.025em" }}>
              Five pillars of home connectivity guidance.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A2E]/10 border border-[#1A1A2E]/10 rounded-2xl overflow-hidden">
            {topics.map((t, i) => (
              <Link
                key={t.title}
                href={t.href}
                className={`bg-[#F7F5F0] p-8 hover:bg-white transition-all duration-500 group block ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""} ${topicsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {t.icon}
                </div>
                <h3 className="text-base font-bold mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-200"
                  style={{ fontFamily: "'Georgia', serif" }}>
                  {t.title}
                </h3>
                <p className="text-sm text-[#1A1A2E]/55 leading-relaxed"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                  {t.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section ref={linksRef} className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-10 transition-all duration-700 ${linksIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Explore</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}>
              More resources for you.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className={`group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300 ${linksIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-[#1A1A2E] group-hover:text-blue-600 transition-colors duration-200"
                    style={{ fontFamily: "'Georgia', serif" }}>
                    {l.label}
                  </span>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors duration-200">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                  {l.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDEPENDENCE BANNER ── */}
      <section ref={closingRef} className="py-24 px-6 bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className={`relative rounded-3xl bg-[#1A1A2E] overflow-hidden p-12 md:p-16 transition-all duration-700 ${closingIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-600/8 rounded-full blur-2xl" />

            <div className="relative max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Our Independence</span>
              <h2 className="mt-4 mb-6 text-3xl md:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.03em" }}>
                No providers. No agendas. Just information.
              </h2>
              <p className="text-white/55 leading-relaxed mb-10"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                HomeConnectPro operates entirely independently. We are not affiliated with, endorsed by, or funded by any telecommunications company. Every resource we publish exists solely to serve you — the household making a decision.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/internet-guide"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-blue-500 transition-colors duration-200"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                >
                  Explore Our Guides
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-white/20 transition-colors duration-200"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#1A1A2E]/10 py-10 px-6 bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <img src="/images/logo_black.png" alt="HomeConnectPro" className="h-14 w-auto" />

            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { label: "About",       href: "/about" },
                { label: "Internet Guide", href: "/internet-guide" },
                { label: "Providers",   href: "/provider-information" },
                { label: "FAQ",         href: "/faq" },
                { label: "Contact",     href: "/contact" },
                { label: "Terms",       href: "/terms" },
              ].map((l) => (
                <Link key={l.href} href={l.href}
                  className="text-xs text-[#1A1A2E]/50 hover:text-blue-600 transition-colors duration-200"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                  {l.label}
                </Link>
              ))}
            </nav>

            <p className="text-xs text-[#1A1A2E]/40"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
              © {new Date().getFullYear()} HomeConnectPro.<br />An independent informational platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}