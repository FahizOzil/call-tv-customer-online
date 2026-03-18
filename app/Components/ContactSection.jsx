"use client";



import { useEffect, useRef, useState } from "react";

function useSlideUp() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function ContactSection() {
  const header = useSlideUp();
  const cards = useSlideUp();
  const form = useSlideUp();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // 👇 Wire up your form submission logic here (e.g. EmailJS, API route, etc.)
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-12 lg:px-24">

      {/* ── Section Header ─────────────────────────────────────────────── */}
      <div
        ref={header.ref}
        className={`mb-12 text-center transition-all duration-700 ease-out
          ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
        <div className="mx-auto mt-3 flex items-center justify-center">
          <span className="h-px w-16 bg-gray-300" />
          <span className="h-1 w-16 bg-emerald-500" />
          <span className="h-px w-16 bg-gray-300" />
        </div>
        <p className="mt-5 text-gray-500">Send us a message or give us a call</p>
      </div>

      <div className="mx-auto max-w-5xl">

        {/* ── Call Us / Email Us Cards ──────────────────────────────────── */}
        <div
          ref={cards.ref}
          className={`mb-6 grid grid-cols-1 divide-y md:grid-cols-2 md:divide-x md:divide-y-0 divide-gray-200 border border-gray-200 rounded-lg overflow-hidden transition-all duration-700 ease-out delay-100
            ${cards.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Call Us */}
          <div className="flex flex-col items-center py-10 px-6">
            <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10 mb-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 6h8l3 8-4 2a18 18 0 0 0 9 9l2-4 8 3v8a2 2 0 0 1-2 2C13 34 6 27 6 8a2 2 0 0 1 2-2z" />
            </svg>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Call Us</h3>
            <a href="tel:8184531810" className="text-gray-500 hover:text-emerald-500 transition-colors">
              (818) 453-1810
            </a>
          </div>

          {/* Email Us */}
          <div className="flex flex-col items-center py-10 px-6">
            <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10 mb-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="10" width="32" height="22" rx="2" />
              <polyline points="4,10 20,24 36,10" />
            </svg>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Email Us</h3>
            <a href="mailto:info@homeconnectpro.com" className="text-gray-500 hover:text-emerald-500 transition-colors">
              info@homeconnectpro.com
            </a>
          </div>
        </div>

        {/* ── Contact Form ──────────────────────────────────────────────── */}
        <div
          ref={form.ref}
          className={`border border-gray-200 rounded-lg p-8 transition-all duration-700 ease-out delay-200
            ${form.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={6}
              required
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 resize-y"
            />

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="rounded-full bg-emerald-500 px-12 py-3 text-sm font-semibold text-white shadow transition-all duration-200 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-300/40 active:scale-95"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}