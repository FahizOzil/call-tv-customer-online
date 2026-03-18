import React from "react";

const cards = [
  {
    title: "Why Connectivity Knowledge Matters",
    body: "Television and internet services are essential parts of modern communication and entertainment. From streaming media and remote work to online education and gaming, reliable connectivity supports many aspects of daily life. Understanding how services operate allows users to recognize performance patterns, device compatibility, and connectivity requirements. Awareness of these elements helps individuals make informed decisions about their digital environment.",
  },
  {
    title: "Understanding Internet Performance",
    body: "Internet performance depends on several factors including bandwidth capacity, network congestion, and equipment quality. Activities such as video streaming, file downloads, and video conferencing require stable connections. Learning how routers, modems, and network placement influence signal strength can help users better understand how connectivity impacts everyday tasks.",
  },
  {
    title: "Television and Digital Viewing",
    body: "Modern television services combine traditional broadcasting with digital streaming technologies. Cable systems distribute channels through dedicated networks, while streaming platforms rely on internet connectivity. Understanding these delivery methods helps users recognize how signal quality, device compatibility, and viewing habits affect their experience.",
  },
  {
    title: "Informational Purpose Only",
    body: "Call Tv Customer Service provides informational guidance only. We do not sell TV packages, provide internet connections, or process payments. The purpose of this website is to help users understand cable, internet, and connectivity concepts so they can make informed decisions.",
  },
];

export default function InfoCards() {
  return (
    // Outer section — light gray background matching screenshot
    <section className="w-full bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {cards.map((card) => (
          // Each card: white bg, subtle shadow, rounded corners
          <div
            key={card.title}
            className="bg-white rounded-3xl shadow-sm border border-gray-200 px-7 py-6"
          >
            {/* Card title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {card.title}
            </h2>
            {/* Card body */}
            <p className="text-lg text-gray-700 leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}