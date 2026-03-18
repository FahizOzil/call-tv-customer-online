// DisclaimerSection Component
// ----------------------------
// No images needed.
// Place this above or below the Footer as needed.
//
// USAGE:

export default function DisclaimerSection() {
  return (
    <section className="bg-gray-950 text-gray-400 px-8 md:px-16 lg:px-24 py-12 border-t border-gray-800">
      <div className="mx-auto max-w-5xl space-y-6 text-sm leading-relaxed">

        {/* Heading */}
        <h3 className="text-base font-bold text-white uppercase tracking-widest">
          Disclaimer
        </h3>

        {/* Main disclaimer paragraphs */}
        <p>
          <span className="font-semibold text-white">Home Connect Pro</span> is
          an authorized reseller and marketing partner for various leading
          telecommunication service providers. The purpose of this website
          (homeconnectpro.com) is to present and promote the products and
          services offered by those providers through our authorized reseller
          relationship.
        </p>

        <p>
          This is not the official website of any telecommunication service
          provider. It is the official website of{" "}
          <span className="font-semibold text-white">Home Connect Pro</span>,
          which operates as a marketing partner and reseller.
        </p>

        <p>
          All trademarks, service marks, trade names, logos, and related symbols
          displayed on homeconnectpro.com are the sole property of their
          respective owners and are protected under applicable copyright and
          trademark laws. These logos and brand identifiers are used strictly for
          descriptive and informational purposes—to illustrate the products and
          services we market on behalf of the respective providers.
        </p>

        {/* Bullet points */}
        <p>The use of any third-party trademarks on this site:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>
            Does not indicate direct ownership or operation of the services by
            Home Connect Pro.
          </li>
          <li>
            Does not imply any endorsement of homeconnectpro.com by the
            respective trademark holders.
          </li>
          <li>
            Serves only to describe the products and services being offered
            through our authorized reseller agreement.
          </li>
        </ul>

        <p>
          We may occasionally send updates or service-related communications to
          the email address and/or mobile number registered with us. All content
          published on this site is for informational purposes only and does not
          in itself constitute a contractual offer. Prices and offers are subject
          to change without notice, and service availability may vary by
          location.
        </p>

        {/* Notice block */}
        <div>
          <p className="font-bold text-white mb-1">Notice</p>
          <p>
            All calls with homeconnectpro.com may be monitored or recorded for
            quality assurance and staff training purposes.
          </p>
        </div>

        {/* Copyright */}
        <p className="font-semibold text-white">
          COPYRIGHT © 2026 Home Connect Pro.
        </p>

        {/* Hours of Operation */}
        <div>
          <p className="font-bold text-white mb-1">Hours of Operation:</p>
          <ul className="list-disc list-inside pl-2">
            <li>Monday–Saturday: 8:00 AM – 11:00 PM</li>
          </ul>
        </div>

        {/* Footer note */}
        <p>
          This website is independently owned and operated by{" "}
          <span className="font-semibold text-white">Home Connect Pro</span> and
          is not the official website of any telecommunication service provider.
          For official company policies, please refer to the Privacy Policy
          available at{" "}
          <a
            href="/privacy-policy"
            className="text-emerald-400 hover:underline"
          >
            homeconnectpro.com/privacy-policy
          </a>
          .
        </p>

        <p>
          The name <span className="font-semibold text-white">"Home Connect Pro"</span>{" "}
          and its associated logo are registered trademarks of their respective
          owners. Home Connect Pro operates as an authorized marketing partner
          for leading telecommunication service providers.
        </p>
      </div>
    </section>
  );
}