// ── 3. FEATURE CARDS ───────────────────────────────────
// Each card: icon (emoji or swap for <Image>), title, body text
// Add or remove cards by editing the `features` array below.
const features = [
  {
    // 📺 Swap emoji for a real icon component if desired
    icon: "/images/1f4fa.svg", // example: TV emoji as an image
    title: "TV Service Basics",
    description:
      "Television services deliver programming through cable or digital networks. Understanding channel systems and signal delivery helps users evaluate viewing options.",
  },
  {
    icon: "/images/1f310.svg", // example: antenna emoji as an image
    title: "Internet Connectivity",
    description:
      "Internet services rely on network infrastructure, routers, and data transmission technologies. Learning about speeds and connections helps users understand performance.",
  },
  {
    icon: "/images/1f4f6.svg", // example: laptop emoji as an image
    title: "Internet Speed Check Guide",
    description:
      "Checking your internet speed helps you understand connection performance, download rates, and network stability. Regular speed tests can reveal slow connections and signal issues.",
  },
  {
    icon: "/images/1f4ca.svg", // example: mobile signal emoji as an image
    title: "Usage Awareness",
    description:
      "Recognizing how streaming, downloads, and devices affect bandwidth helps users understand network performance and digital habits.",
  },
];

export default function FeatureCards() {
  return (
    <section className="w-full bg-white py-16 px-6">
      {/* Responsive grid: 1 col → 2 col → 4 col */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col gap-3">
            {/* Icon + title row */}
            <div className="flex items-center gap-2">
              {/* <span className="text-xl">{feature.icon}</span> */}
              <img src={feature.icon} alt={feature.title} className="h-6 w-6" />
              <h3 className="text-xl font-medium text-blue-600 leading-snug">
                {feature.title}
              </h3>
            </div>
            {/* Body copy */}
            <p className="text-sm text-gray-700 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
