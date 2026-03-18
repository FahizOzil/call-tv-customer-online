import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Call Tv Customer Service",
  description: "Terms and Conditions for Call Tv Customer Service",
};

const sections = [
  {
    number: "1",
    title: "Services Offered",
    content: (
      <>
        <p className="mb-3">
          Call Tv Customer Service operates as an authorized telecommunications dealer,
          providing customers with the ability to:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Check availability of home internet and cable services</li>
          <li>Compare eligible service plans</li>
          <li>
            Complete new service activations directly with authorized providers
          </li>
        </ul>
        <p className="mt-3">
          All services are provided under provider agreements, and the
          telecommunications provider is responsible for service delivery and
          ongoing maintenance.
        </p>
      </>
    ),
  },
  {
    number: "2",
    title: "Promotions and Offers",
    content: (
      <>
        <p className="mb-3">
          Promotional offers displayed on this website (such as discounted bills
          or free months) are subject to:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Availability based on provider coverage and location</li>
          <li>Eligibility criteria specified by the provider</li>
          <li>Terms and conditions set by the provider</li>
        </ul>
        <p className="mt-3">
          Call Tv Customer Service is responsible for facilitating enrollments, but all
          promotional terms are ultimately governed by the telecommunications
          provider.
        </p>
      </>
    ),
  },
  {
    number: "3",
    title: "User Eligibility",
    content: (
      <>
        <p className="mb-3">
          By using this website and enrolling in services, you confirm that:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>You are at least 18 years old</li>
          <li>You provide accurate and complete personal information</li>
          <li>
            You comply with all local laws regarding internet and cable service
            usage
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "4",
    title: "Payment and Billing",
    content: (
      <ul className="list-disc list-inside space-y-1 pl-2">
        <li>
          All payments for services are made directly to the
          telecommunications provider, unless otherwise specified in your
          enrollment agreement.
        </li>
        <li>
          Call Tv Customer Service does not charge additional fees beyond any authorized
          dealer commissions.
        </li>
        <li>
          Promotional offers do not constitute a guarantee of service pricing;
          final charges are subject to provider terms.
        </li>
      </ul>
    ),
  },
  {
    number: "5",
    title: "Account Security",
    content: (
      <ul className="list-disc list-inside space-y-1 pl-2">
        <li>
          Users are responsible for maintaining the confidentiality of any
          account or personal information.
        </li>
        <li>
          Call Tv Customer Service implements security measures to protect customer
          data, including secure HTTPS website encryption and controlled access
          to sensitive information.
        </li>
      </ul>
    ),
  },
  {
    number: "6",
    title: "Privacy",
    content: (
      <ul className="list-disc list-inside space-y-1 pl-2">
        <li>
          Personal information collected via this website is handled in
          accordance with our Privacy Policy.
        </li>
        <li>
          We do not sell or share customer data with unauthorized third parties.
        </li>
        <li>
          Information is used solely for service enrollment, account management,
          and customer support purposes.
        </li>
      </ul>
    ),
  },
  {
    number: "7",
    title: "Limitation of Liability",
    content: (
      <>
        <p className="mb-3">Call Tv Customer Service is not responsible for:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>
            Service interruptions, outages, or issues caused by the
            telecommunications provider
          </li>
          <li>
            Incorrect availability or pricing displayed due to provider errors
          </li>
          <li>
            Any indirect, incidental, or consequential damages related to
            service use
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "8",
    title: "Intellectual Property",
    content: (
      <ul className="list-disc list-inside space-y-1 pl-2">
        <li>
          All content on this website, including text, graphics, logos, and
          images, is owned by Call Tv Customer Service or used with permission.
        </li>
        <li>
          Unauthorized use, reproduction, or distribution of content is
          prohibited.
        </li>
        <li>
          Trademarked names of providers may only be referenced factually
          without implying ownership.
        </li>
      </ul>
    ),
  },
  {
    number: "9",
    title: "Modifications",
    content: (
      <ul className="list-disc list-inside space-y-1 pl-2">
        <li>
          Call Tv Customer Service reserves the right to modify these Terms &amp;
          Conditions at any time.
        </li>
        <li>
          Changes will be effective immediately upon posting to the website.
        </li>
        <li>
          Continued use of the website after modifications constitutes
          acceptance of the updated terms.
        </li>
      </ul>
    ),
  },
  {
    number: "10",
    title: "Governing Law",
    content: (
      <p>
        These Terms and Conditions are governed by the laws of the state in
        which Call Tv Customer Service is registered. Any disputes will be resolved in
        accordance with applicable state and federal laws.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Top Bar ───────────────────────────────────────────────────────── */}
      <header className="bg-black px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-7 w-1 rounded-full bg-emerald-400" />
          <Link href="/" className="text-xl font-bold text-white hover:text-emerald-400 transition-colors">
            Call Tv Customer Service
          </Link>
        </div>
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
        >
          ← Back to Home
        </Link>
      </header>

      {/* ── Hero Banner ───────────────────────────────────────────────────── */}
      <div className="bg-gray-950 py-14 px-8 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-3">
          Privacy Policy &amp; Terms
        </h1>
        <p className="text-gray-400 text-sm">
          Effective Date:{" "}
          <span className="text-emerald-400 font-semibold">02/25/2026</span>
          &nbsp;·&nbsp; Company:{" "}
          <span className="text-white font-semibold">Call Tv Customer Service</span>
          &nbsp;·&nbsp; Website:{" "}
          <span className="text-emerald-400">homeconnectpro.com</span>
        </p>
      </div>

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 pt-12 pb-4">
        <p className="text-gray-600 leading-relaxed border-l-4 border-emerald-500 pl-4 bg-emerald-50 py-3 rounded-r-md">
          By accessing or using this website, you agree to be bound by these
          Terms and Conditions. If you do not agree, please do not use the site.
        </p>
      </div>

      {/* ── Sections ──────────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-6 md:px-8 py-8 space-y-10">
        {sections.map((section) => (
          <div key={section.number} className="border-b border-gray-100 pb-10 last:border-0">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
              {/* Section number badge */}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white text-sm font-bold flex-shrink-0">
                {section.number}
              </span>
              {section.title}
            </h2>
            <div className="text-gray-600 leading-relaxed pl-11">
              {section.content}
            </div>
          </div>
        ))}

        {/* ── Section 11: Contact Us ───────────────────────────────────────── */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white text-sm font-bold flex-shrink-0">
              11
            </span>
            Contact Us
          </h2>
          <div className="pl-11 text-gray-600 space-y-2 text-sm leading-relaxed">
            <p>
              For questions regarding these Terms &amp; Conditions, please
              contact:
            </p>
            <p className="font-bold text-gray-800">Call Tv Customer Service</p>
            <p>
              Website:{" "}
              <a href="https://www.homeconnectpro.com" className="text-emerald-600 hover:underline">
                homeconnectpro.com
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:support@homeconnectpro.com" className="text-emerald-600 hover:underline">
                support@homeconnectpro.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:8184531810" className="text-emerald-600 hover:underline">
                (818) 453-1810
              </a>
            </p>
            <p>Address: 1009 S Rock St, Georgetown, TX 78626</p>
          </div>
        </div>
      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-black text-gray-500 text-center text-sm py-6 mt-10">
        COPYRIGHT © 2026{" "}
        <span className="text-white font-semibold">Call Tv Customer Service</span>. All
        Rights Reserved.
      </footer>
    </div>
  );
}