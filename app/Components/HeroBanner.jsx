// ── 2. HERO BANNER ─────────────────────────────────────
export default function HeroBanner() {
   return (
    <section
      className="w-[90%] py-16 px-6 text-center text-white flex flex-col gap-6 mx-auto"
      style={{
        // Matches the blue-to-purple diagonal gradient in the screenshot
        background: "linear-gradient(135deg, #3b82f6 0%, #4338ca 100%)",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-extralight leading-tight max-w-2xl mx-auto">
        Understand TV &amp; Internet Services Before You Decide
      </h1>
      <p className="mt-5 text-sm md:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
        Call Tv Customer Service provides informational guidance to help individuals
        understand television services, cable connections, and internet
        technologies. Our goal is to offer clear explanations so users can
        learn how different services work and how connectivity options may
        support their communication and entertainment needs.
      </p>
    </section>
  );
}