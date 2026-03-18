const plans = [
  {
    id: 1,
    name: "Internet",
    price: "29.99",
    featured: false,
    features: ["Get High-Speed Internet", "Safe Internet", "No Data Caps"],
    icon: (
      // WiFi icon
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 15 Q20 2 35 15" />
        <path d="M10 21 Q20 11 30 21" />
        <path d="M15 27 Q20 21 25 27" />
        <circle cx="20" cy="32" r="2" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Internet Ultra",
    price: "54.99",
    featured: true,
    features: [
      "Unlimited Surf and Stream",
      "Safe Internet Packages",
      "Online Gaming With Internet Ultra",
    ],
    icon: (
      // Monitor / screen icon
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="32" height="20" rx="2" />
        <line x1="14" y1="28" x2="26" y2="28" />
        <line x1="20" y1="28" x2="20" y2="34" />
        <line x1="14" y1="34" x2="26" y2="34" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Internet GIG",
    price: "69.99",
    featured: false,
    features: [
      "Unlimited Devices",
      "Ultra-Fast Internet",
      "Enjoy blazing-fast 300Mbps speeds",
    ],
    icon: (
      // Phone icon
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6h8l3 8-4 2a18 18 0 0 0 9 9l2-4 8 3v8a2 2 0 0 1-2 2C13 34 6 27 6 8a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* ── Section Header ─────────────────────────────────────────────── */}
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Pricing</h2>

        {/* Decorative underline */}
        <div className="mx-auto mt-3 flex items-center justify-center">
          <span className="h-px w-16 bg-gray-300" />
          <span className="h-1 w-16 bg-emerald-500" />
          <span className="h-px w-16 bg-gray-300" />
        </div>

        <p className="mt-5 text-gray-500">Pick Your Perfect Package</p>
      </div>

      {/* ── Pricing Cards ──────────────────────────────────────────────── */}
      {/* Items are vertically centered so the featured card appears taller */}
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 md:flex-row md:items-center md:justify-center">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`flex flex-col items-center rounded-2xl px-8 py-10 text-center transition-shadow duration-200
              ${
                plan.featured
                  ? // Featured card — green border, larger, elevated
                    "w-full border-2 border-emerald-500 shadow-xl md:w-80 md:py-14 md:scale-105"
                  : // Regular cards
                    "w-full border border-gray-200 shadow-sm md:w-72"
              }
            `}
          >
            {/* Plan Name */}
            <h3 className="mb-6 text-lg font-semibold text-gray-800">
              {plan.name}
            </h3>

            {/* Icon circle with glowing rings */}
            <div className="relative mb-6 flex items-center justify-center">
              {/* Outer glow ring */}
              <span className="absolute h-24 w-24 rounded-full bg-emerald-100 opacity-60" />
              {/* Inner glow ring */}
              <span className="absolute h-18 w-18 rounded-full bg-emerald-200 opacity-60" style={{ height: "4.5rem", width: "4.5rem" }} />
              {/* Icon background */}
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-md">
                {plan.icon}
              </span>
            </div>

            {/* Price */}
            <div className="mb-8 flex items-end justify-center gap-1">
              <span className="text-2xl font-bold text-emerald-500">$</span>
              <span className="text-5xl font-extrabold leading-none text-emerald-500">
                {plan.price}
              </span>
              <span className="mb-1 text-sm text-gray-400">/ month</span>
            </div>

            {/* Feature List */}
            <ul className="mb-10 w-full space-y-3 text-left">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                  {/* Green checkmark */}
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2,8 6,12 14,4" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="tel:8184531810"
              className="w-full rounded-full border border-gray-300 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-emerald-500 hover:text-emerald-600 active:scale-95"
            >
              Call Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}