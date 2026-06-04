import JsonLd from "../components/JsonLd";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Privacy Policy | Calgary Cars for Cash",
  description:
    "Read the privacy policy for calgarycarsforcash.ca. Learn how we collect, use, and protect your data when you sell your car in Calgary.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Calgary Cars for Cash",
    description:
      "Read the privacy policy for calgarycarsforcash.ca. Learn how we collect, use, and protect your data when you sell your car in Calgary.",
    url: "https://www.calgarycarsforcash.ca/privacy-policy",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Calgary Cars for Cash",
    description:
      "Read the privacy policy for calgarycarsforcash.ca. Learn how we collect, use, and protect your data when you sell your car in Calgary.",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.calgarycarsforcash.ca/privacy-policy#webpage",
      url: "https://www.calgarycarsforcash.ca/privacy-policy",
      name: "Privacy Policy | Calgary Cars for Cash",
      description:
        "Read the privacy policy for calgarycarsforcash.ca. Learn how we collect, use, and protect your data when you sell your car in Calgary.",
      isPartOf: {
        "@id": "https://www.calgarycarsforcash.ca/#website",
      },
      about: {
        "@id": "https://www.calgarycarsforcash.ca/#business",
      },
      inLanguage: "en-CA",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.calgarycarsforcash.ca/privacy-policy#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.calgarycarsforcash.ca/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Privacy Policy",
          item: "https://www.calgarycarsforcash.ca/privacy-policy",
        },
      ],
    },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <SiteHeader />
      <main className="bg-[#f4f1e9] px-5 py-10 text-[#171a17] sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <section className="rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b5252b]">
              Privacy Policy - Calgary Cars For Cash
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm font-bold text-[#4d564e]">
              Last updated: 6-2-2026
            </p>
            <p className="mt-6 text-base leading-8 text-[#4d564e]">
              Protecting your personal information is a priority for us. This
              Privacy Policy explains how Calgary Cars for Cash collects, uses,
              stores, and protects information you share with us when you use
              our website or services. By using calgarycarsforcash.ca or
              requesting a quote from us, you consent to the practices
              described below.
            </p>
            <p className="mt-4 text-base leading-8 text-[#4d564e]">
              This policy is governed by the Personal Information Protection
              and Electronic Documents Act (PIPEDA), Alberta's Personal
              Information Protection Act (PIPA), and Canada's Anti-Spam
              Legislation (CASL).
            </p>
          </section>

          <div className="mt-8 grid gap-6">
            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">1. Scope of This Policy</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                This Privacy Policy applies to calgarycarsforcash.ca and all
                related services operated by Calgary Cars for Cash, including
                phone, SMS, email, and in-person interactions related to vehicle
                quotes, pickup, and purchase.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                It does not apply to third-party websites that may be linked
                from our site.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">2. Information We Collect</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                To provide you with a vehicle quote, schedule a pickup, and
                complete the sale of your vehicle, we collect contact
                information, vehicle information, technical information, and
                communication records.
              </p>
              <ul className="mt-4 grid gap-3 text-base leading-8 text-[#4d564e]">
                <li>- Contact Information: full name, phone number, email address, pickup address or vehicle location</li>
                <li>- Vehicle Information: year, make, model, trim, VIN, mileage, condition, photos, ownership documents</li>
                <li>- Technical Information: IP address, browser type and version, device type, pages viewed, referring website</li>
                <li>- Communications: records of phone calls, SMS messages, and emails between you and our team</li>
              </ul>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">3. How We Use Your Information</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                We use your information to provide quotes, schedule pickup,
                complete the transfer of ownership, communicate with you, and
                improve our website and customer experience. We also use it for
                occasional service updates or promotions only with your
                consent.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">4. Sharing Your Information</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                We do not sell, rent, or trade your personal information to any
                third party. We share your information only with service
                partners, government and regulatory authorities, or when
                required by law.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">5. Communications and Consent (CASL Compliance)</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                By submitting a quote request, calling us, or contacting us
                through our website, you provide express consent to be
                contacted by Calgary Cars for Cash by phone, SMS text message,
                or email regarding your vehicle quote and any related follow-up.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                You can withdraw consent at any time by replying STOP to SMS,
                using the unsubscribe link in marketing email, or contacting us
                at info@calgarycarsforcash.ca or (587)-664-2401.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">6. Cookies and Tracking Technologies</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                Our website uses cookies and similar technologies to remember
                your preferences, analyse website traffic and user behaviour,
                and improve site performance and user experience.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">7. Data Retention</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                We keep your personal information only for as long as necessary
                to fulfil the purposes outlined in this policy, comply with
                legal obligations, and resolve disputes.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">8. Security of Your Information</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                We take reasonable physical, technical, and administrative
                measures to protect your personal information from unauthorised
                access, loss, misuse, or disclosure.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">9. Your Rights Under Canadian Privacy Law</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                You have the right to access your information, request
                correction, withdraw consent subject to legal or contractual
                restrictions, and make a complaint to the appropriate privacy
                authority.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">10. Children's Privacy</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                Our website and services are not directed to individuals under
                the age of 18, and we do not knowingly collect personal
                information from minors.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">11. Changes to This Policy</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                We may update this Privacy Policy from time to time to reflect
                changes in our business, technology, or legal obligations. The
                &quot;Last updated&quot; date at the top of this page will show
                when changes were made.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">12. Contact Us</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                If you have questions, concerns, or requests regarding your
                privacy or this policy, please contact us:
              </p>
              <div className="mt-4 grid gap-2 text-base leading-8 text-[#4d564e]">
                <p>Calgary Cars for Cash</p>
                <p>Email: info@calgarycarsforcash.ca</p>
                <p>Phone: (587)-664-2401</p>
                <p>Address: 3412 27 Street NE, Calgary, T1Y 5E2</p>
                <p>Website: https://calgarycarsforcash.ca</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter tagline="Privacy Policy | Calgary Cars for Cash" />
    </>
  );
}
