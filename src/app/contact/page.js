import JsonLd from "../components/JsonLd";
import LeadForm from "../components/LeadForm";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Contact Calgary Cars for Cash | Call (587) 664-2401",
  description:
    "Get in touch with Calgary Cars for Cash for a free vehicle quote. Call (587) 664-2401, request a pickup online, or message us - 7 days a week.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Calgary Cars for Cash | Call (587) 664-2401",
    description:
      "Get in touch with Calgary Cars for Cash for a free vehicle quote. Call (587) 664-2401, request a pickup online, or message us - 7 days a week.",
    url: "https://www.calgarycarsforcash.ca/contact",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Contact Calgary Cars for Cash | Call (587) 664-2401",
    description:
      "Get in touch with Calgary Cars for Cash for a free vehicle quote. Call (587) 664-2401, request a pickup online, or message us - 7 days a week.",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.calgarycarsforcash.ca/contact#webpage",
      url: "https://www.calgarycarsforcash.ca/contact",
      name: "Contact Calgary Cars for Cash | Call (587) 664-2401",
      description:
        "Get in touch with Calgary Cars for Cash for a free vehicle quote. Call (587) 664-2401, request a pickup online, or message us - 7 days a week.",
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
      "@id": "https://www.calgarycarsforcash.ca/contact#breadcrumb",
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
          name: "Contact",
          item: "https://www.calgarycarsforcash.ca/contact",
        },
      ],
    },
  ],
};

const contactMethods = [
  [
    "Phone",
    "(587) 664-2401",
    "Best for an instant quote. A real person answers, 7 days a week.",
  ],
  [
    "Text Message",
    "(587) 664-2401",
    "Text your vehicle details and we’ll send back a real offer within minutes.",
  ],
  [
    "Email",
    "info@calgarycarsforcash.ca",
    "Send photos, VIN, and pickup location. We reply within a few hours.",
  ],
  [
    "Online Quote Form",
    "Request a Free Quote",
    "Fill out the form on this page and we’ll respond by phone, text, or email.",
  ],
];

const responseTimes = [
  ["Phone call (business hours)", "Immediate - we answer the phone"],
  ["Phone call (after hours)", "Within 1 hour next business day"],
  ["Text message", "Within 15 minutes during business hours"],
  ["Email", "Within 2-4 hours during business hours"],
  ["Online quote form", "Within 30 minutes during business hours"],
];

const faqs = [
  [
    "Will I be put on a sales list if I just want a ballpark number?",
    "No. We give quotes with zero obligation and no follow-up unless you ask us to call back.",
  ],
  [
    "What if my vehicle isn't running or hasn't moved in years?",
    "That's fine - we buy non-running vehicles every day. Tell us the condition over the phone so we can quote accurately.",
  ],
  [
    "Do I need to be the legal owner to get a quote?",
    "You can get a quote regardless of ownership status. To complete a sale, you need to be the registered owner or have written authorisation from the owner.",
  ],
  [
    "How do I know your offer is fair?",
    "Call two other cash-for-cars services in Calgary. We base offers on real market data, not on what we think we can squeeze you for.",
  ],
  [
    "What areas of Calgary do you service?",
    "All four quadrants and the surrounding region - Airdrie, Cochrane, Okotoks, Chestermere, Strathmore, and High River.",
  ],
  [
    "Can I get a quote outside business hours?",
    "Yes - submit the form on this page or text (587) 664-2401 anytime. We respond first thing the next business day, often much faster.",
  ],
  [
    "Is the phone number a real Calgary number?",
    "Yes - (587) 664-2401 is a Calgary area code, and a real Calgary person answers it.",
  ],
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <SiteHeader />
      <main className="bg-[#f4f1e9] px-5 py-10 text-[#171a17] sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <section className="rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b5252b]">
              Contact - Calgary Cars for Cash
            </p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Contact Calgary Cars for Cash - Get a Real Offer in Minutes
                </h1>
                <p className="mt-6 text-base leading-8 text-[#4d564e]">
                  Whether you're ready to sell today or just want a ballpark
                  number on a car sitting in your driveway, we're easy to reach
                  - and a real Calgary person picks up the phone. No call
                  centres. No automated menus. No &quot;press 4 for towing.&quot;
                </p>
                <p className="mt-4 text-base leading-8 text-[#4d564e]">
                  Call us, text us, fill out the form below, or send us an
                  email. Whatever's easiest for you. Most quotes are returned
                  within 15 minutes during business hours, and same-day pickup
                  is available 7 days a week across Calgary and the surrounding
                  region.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-[#b5252b] px-7 py-4 text-base font-black text-white"
                    href="#quote-form"
                  >
                    Get My Free Cash Offer
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-[#f4c542] px-7 py-4 text-base font-black text-[#171a17]"
                    href="tel:+15876642401"
                  >
                    Call (587) 664-2401
                  </a>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-[#171a17] p-6 text-white shadow-2xl shadow-black/20">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c542]">
                  How to Reach Calgary Cars for Cash
                </h2>
                <div className="mt-5 grid gap-4">
                  {contactMethods.map(([label, value, description]) => (
                    <div
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      key={label}
                    >
                      <p className="text-sm font-black uppercase tracking-[0.16em] text-[#f4c542]">
                        {label}
                      </p>
                      <p className="mt-2 text-lg font-black">{value}</p>
                      <p className="mt-2 text-sm leading-6 text-white/72">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-white/8 p-4 text-sm leading-7 text-white/78 ring-1 ring-white/10">
                  <p className="font-black text-white">Service Area</p>
                  <p className="mt-2">
                    Calgary and the broader Calgary metro area - including
                    Airdrie, Cochrane, Okotoks, Chestermere, Strathmore, and
                    High River. We cover everywhere within a 60 km radius of
                    downtown Calgary at no charge.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8" id="quote-form">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b5252b]">
                  Request a Free Quote - Takes 60 Seconds
                </p>
                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  Send Us Your Vehicle Details
                </h2>
                <p className="mt-4 text-base leading-8 text-[#4d564e]">
                  Tell us about your vehicle and we'll send you a real offer -
                  no obligation, no pressure, no follow-up calls if you decide
                  not to sell.
                </p>

              </div>

              <LeadForm
                buttonLabel="Send My Quote Request"
                compact
                title="Request a Free Quote"
              />
            </div>
          </section>

          <section className="mt-8 rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
            <h2 className="text-2xl font-black">What to Have Ready Before You Get in Touch</h2>
            <p className="mt-4 text-base leading-8 text-[#4d564e]">
              You don't need to prepare anything formal before reaching out -
              but the more details you have on hand, the faster we can get you a
              real offer.
            </p>
            <ul className="mt-4 grid gap-3 text-base leading-8 text-[#4d564e]">
              <li>- Vehicle year, make, and model</li>
              <li>- General condition</li>
              <li>- VIN if available</li>
              <li>- Mileage</li>
              <li>- Your Calgary neighbourhood or pickup address</li>
              <li>- Photos, optional but helpful</li>
            </ul>
          </section>

          <section className="mt-8 rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
            <h2 className="text-2xl font-black">How Fast Will We Get Back to You?</h2>
            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/6">
              <div className="grid grid-cols-2 bg-[#f4f1e9] px-4 py-3 text-sm font-black">
                <div>Contact Method</div>
                <div>Typical Response Time</div>
              </div>
              <div className="grid gap-px bg-black/6">
                {responseTimes.map(([method, time]) => (
                  <div className="grid grid-cols-2 gap-4 bg-white px-4 py-4 text-sm leading-6 text-[#4d564e]" key={method}>
                    <div className="font-black text-[#171a17]">{method}</div>
                    <div>{time}</div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-5 text-base leading-8 text-[#4d564e]">
              If you don't hear back from us within these windows, something's
              gone wrong on our end - please call us directly at (587)
              664-2401. We don't ignore messages.
            </p>
          </section>

          <section className="mt-8 rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
            <h2 className="text-2xl font-black">Common Questions Before You Call</h2>
            <div className="mt-6 grid gap-5">
              {faqs.map(([question, answer]) => (
                <div className="rounded-2xl bg-[#f4f1e9] p-5 ring-1 ring-black/6" key={question}>
                  <h3 className="text-lg font-black">{question}</h3>
                  <p className="mt-3 text-base leading-8 text-[#4d564e]">{answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter tagline="Contact Calgary Cars for Cash | Call (587) 664-2401" />
    </>
  );
}
