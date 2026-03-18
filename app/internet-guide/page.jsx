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

const TECHNOLOGIES = [
  {
    id: "fiber",
    label: "Fiber",
    color: "from-blue-500 to-blue-700",
    accent: "bg-blue-600",
    lightBg: "bg-blue-50",
    textAccent: "text-blue-600",
    borderAccent: "border-blue-200",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Fiber Internet",
    subtitle: "The gold standard in home connectivity",
    desc: "Fiber internet uses fiber-optic cables to transmit data at high speeds and is often known for its reliability and fast performance. Light pulses travel through glass threads to deliver some of the fastest and most consistent connections available to households today.",
    specs: [
      { label: "Typical Speeds", value: "Up to 1–5 Gbps" },
      { label: "Reliability",    value: "Very High" },
      { label: "Latency",        value: "Very Low" },
      { label: "Availability",   value: "Growing" },
    ],
    best: ["4K / 8K streaming", "Remote work & video calls", "Gaming", "Smart home devices"],
  },
  {
    id: "cable",
    label: "Cable",
    color: "from-indigo-500 to-indigo-700",
    accent: "bg-indigo-600",
    lightBg: "bg-indigo-50",
    textAccent: "text-indigo-600",
    borderAccent: "border-indigo-200",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Cable Internet",
    subtitle: "Widely available, everyday reliable",
    desc: "Cable internet uses existing cable television infrastructure to deliver internet connectivity to households. It's one of the most broadly available technologies and offers good speeds for typical home use, making it a practical choice for many families.",
    specs: [
      { label: "Typical Speeds", value: "25 Mbps – 1 Gbps" },
      { label: "Reliability",    value: "Good" },
      { label: "Latency",        value: "Low–Moderate" },
      { label: "Availability",   value: "Widespread" },
    ],
    best: ["HD streaming", "Everyday browsing", "Multiple devices", "Video conferencing"],
  },
  {
    id: "dsl",
    label: "DSL",
    color: "from-slate-500 to-slate-700",
    accent: "bg-slate-600",
    lightBg: "bg-slate-50",
    textAccent: "text-slate-600",
    borderAccent: "border-slate-200",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "DSL Internet",
    subtitle: "Broad reach through phone lines",
    desc: "DSL internet operates through traditional telephone lines and may be available in many areas where fiber or cable service is limited. While speeds are generally lower than newer technologies, DSL remains an important option for households in rural or underserved areas.",
    specs: [
      { label: "Typical Speeds", value: "1 – 100 Mbps" },
      { label: "Reliability",    value: "Moderate" },
      { label: "Latency",        value: "Moderate" },
      { label: "Availability",   value: "Very Broad" },
    ],
    best: ["Web browsing", "Email & messaging", "Standard definition video", "Light remote work"],
  },
  {
    id: "wireless",
    label: "5G / Fixed Wireless",
    color: "from-cyan-500 to-cyan-700",
    accent: "bg-cyan-600",
    lightBg: "bg-cyan-50",
    textAccent: "text-cyan-600",
    borderAccent: "border-cyan-200",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    title: "Fixed Wireless & 5G",
    subtitle: "Cable-free connectivity on the rise",
    desc: "Wireless internet solutions provide connectivity through wireless signals rather than physical cable connections. Fixed wireless and 5G home internet are growing rapidly, offering a viable alternative in areas where traditional wired infrastructure is unavailable or impractical.",
    specs: [
      { label: "Typical Speeds", value: "25 Mbps – 1 Gbps" },
      { label: "Reliability",    value: "Good–Variable" },
      { label: "Latency",        value: "Low (5G)" },
      { label: "Availability",   value: "Expanding" },
    ],
    best: ["Rural households", "No-cable-needed setup", "Streaming", "General browsing"],
  },
];

const SPEED_GUIDE = [
  { activity: "Email & browsing",          speed: "1–5 Mbps",   dots: 1 },
  { activity: "HD video streaming",        speed: "5–25 Mbps",  dots: 2 },
  { activity: "4K streaming",              speed: "25+ Mbps",   dots: 3 },
  { activity: "Video calls (HD)",          speed: "10–20 Mbps", dots: 2 },
  { activity: "Online gaming",             speed: "25–50 Mbps", dots: 3 },
  { activity: "Remote work / large files", speed: "50+ Mbps",   dots: 4 },
  { activity: "Multiple users + devices",  speed: "100+ Mbps",  dots: 5 },
];

export default function InternetGuidePage() {
  const [heroRef,    heroIn]    = useInView(0.1);
  const [introRef,   introIn]   = useInView();
  const [techRef,    techIn]    = useInView(0.05);
  const [speedRef,   speedIn]   = useInView();
  const [ctaRef,     ctaIn]     = useInView();

  const [activeTab, setActiveTab] = useState("fiber");
  const active = TECHNOLOGIES.find((t) => t.id === activeTab);

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
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Internet Guide</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h1
              className={`text-5xl md:text-7xl font-bold leading-[1.05] transition-all duration-700 delay-100 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.03em" }}
            >
              Know your{" "}
              <span className="italic text-blue-600">connection.</span>
            </h1>

            <p
              className={`text-lg text-[#1A1A2E]/65 leading-relaxed transition-all duration-700 delay-200 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}
            >
              Home internet services play an important role in modern communication and entertainment. Understanding the differences between technologies helps you evaluate the right option for your household.
            </p>
          </div>

          {/* tech pills */}
          <div className={`mt-12 flex flex-wrap gap-3 transition-all duration-700 delay-300 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {TECHNOLOGIES.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200
                  ${activeTab === t.id
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-[#1A1A2E]/60 border-gray-200 hover:border-blue-300 hover:text-blue-600"}`}
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div
            className={`mt-10 h-px bg-gradient-to-r from-blue-600 via-[#1A1A2E]/20 to-transparent transition-all duration-1000 delay-300 ${heroIn ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
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
              Understanding Home Internet Services
            </h2>
            <p className="text-[#1A1A2E]/65 leading-relaxed"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
              Different types of internet technologies offer varying speeds, reliability levels, and coverage availability. Some common types include fiber, cable, DSL, and fixed wireless or 5G — each with distinct characteristics that may suit different households and locations.
            </p>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY TABS ── */}
      <section ref={techRef} className="py-4 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* tab strip */}
          <div className={`flex gap-1 bg-white border border-gray-100 rounded-2xl p-1.5 mb-8 w-full overflow-x-auto transition-all duration-700 ${techIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {TECHNOLOGIES.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300
                  ${activeTab === t.id ? "bg-[#1A1A2E] text-white shadow-md" : "text-[#1A1A2E]/50 hover:text-[#1A1A2E] hover:bg-gray-50"}`}
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                <span className={activeTab === t.id ? "text-blue-400" : ""}>{t.icon}</span>
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            ))}
          </div>

          {/* active card */}
          {TECHNOLOGIES.map((t) => (
            <div
              key={t.id}
              className={`transition-all duration-500 ${activeTab === t.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 hidden"}`}
            >
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">

                {/* main info */}
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100">
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${t.lightBg} ${t.textAccent} mb-6`}>
                    {t.icon}
                    <span className="text-sm font-bold" style={{ fontFamily: "'Georgia', serif" }}>{t.label}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2"
                    style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}>
                    {t.title}
                  </h3>
                  <p className={`text-sm font-semibold mb-5 ${t.textAccent}`}
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>{t.subtitle}</p>
                  <p className="text-[#1A1A2E]/65 leading-relaxed text-sm"
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                    {t.desc}
                  </p>

                  {/* best for */}
                  <div className="mt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A2E]/40 mb-4"
                      style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Best For</p>
                    <div className="flex flex-wrap gap-2">
                      {t.best.map((b) => (
                        <span key={b}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium ${t.lightBg} ${t.textAccent} border ${t.borderAccent}`}
                          style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* specs */}
                <div className="bg-[#1A1A2E] rounded-3xl p-8 md:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-6"
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>At a Glance</p>
                  <div className="space-y-5">
                    {t.specs.map((s, i) => (
                      <div key={s.label}
                        className={`pb-5 ${i < t.specs.length - 1 ? "border-b border-white/10" : ""}`}>
                        <p className="text-xs text-white/40 mb-1.5 uppercase tracking-[0.1em]"
                          style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>{s.label}</p>
                        <p className="text-lg font-bold text-white"
                          style={{ fontFamily: "'Georgia', serif" }}>{s.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <Link href="/provider-information"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                      View provider information →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SPEED GUIDE ── */}
      <section ref={speedRef} className="py-16 pb-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-12 transition-all duration-700 ${speedIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Speed Reference</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.025em" }}>
              How much speed do you actually need?
            </h2>
            <p className="mt-3 text-[#1A1A2E]/55 text-sm max-w-xl"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
              Common internet speed requirements vary widely depending on your household's activities. Use this as a general reference when evaluating service options.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SPEED_GUIDE.map((item, i) => (
              <div
                key={item.activity}
                className={`group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-500 bg-[#F7F5F0]
                  ${speedIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* dots */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, d) => (
                    <div
                      key={d}
                      className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${d < item.dots ? "bg-blue-600" : "bg-gray-200"}`}
                    />
                  ))}
                </div>
                <p className="text-sm font-bold text-[#1A1A2E] mb-1 group-hover:text-blue-600 transition-colors duration-200"
                  style={{ fontFamily: "'Georgia', serif" }}>{item.activity}</p>
                <p className="text-xs text-blue-600 font-semibold"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>{item.speed}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-[#1A1A2E]/35 italic"
            style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
            * Speed requirements are general estimates and may vary based on provider, network conditions, and device capabilities.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} className="py-16 pb-24 px-6 bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className={`relative rounded-3xl bg-[#1A1A2E] overflow-hidden p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-all duration-700 ${ctaIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-blue-600/8 rounded-full blur-2xl pointer-events-none" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-3"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>Next Steps</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}>
                Ready to explore provider options?
              </h2>
              <p className="mt-2 text-white/50 text-sm"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 300 }}>
                Browse our provider information guide or get in touch with any questions.
              </p>
            </div>
            <div className="relative flex flex-wrap gap-3 flex-shrink-0">
              <Link href="/provider-information"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-200"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                Provider Information
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