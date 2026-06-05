import Image from "next/image";
import JsonLd from "../components/JsonLd";
import LeadForm from "../components/LeadForm";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "About Calgary Cars for Cash | Local Buyers Since 2017",
  description:
    "Calgary-owned cash for cars service since 2017. We buy junk, scrap & unwanted vehicles with free towing and same-day cash. Meet our team.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Calgary Cars for Cash | Local Buyers Since 2017",
    description:
      "Calgary-owned cash for cars service since 2017. We buy junk, scrap & unwanted vehicles with free towing and same-day cash. Meet our team.",
    url: "https://www.calgarycarsforcash.ca/about-us",
    siteName: "Calgary Cars For Cash",
    images: [
      {
        url: "/images/calgary-cash-for-cars-logo.png",
        width: 1200,
        height: 1200,
        alt: "Calgary Cars For Cash logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Calgary Cars for Cash | Local Buyers Since 2017",
    description:
      "Calgary-owned cash for cars service since 2017. We buy junk, scrap & unwanted vehicles with free towing and same-day cash. Meet our team.",
    images: ["/images/calgary-cash-for-cars-logo.png"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.calgarycarsforcash.ca/about-us#webpage",
      url: "https://www.calgarycarsforcash.ca/about-us",
      name: "About Calgary Cars for Cash | Local Buyers Since 2017",
      description:
        "Calgary-owned cash for cars service since 2017. We buy junk, scrap & unwanted vehicles with free towing and same-day cash. Meet our team.",
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
      "@id": "https://www.calgarycarsforcash.ca/about-us#breadcrumb",
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
          name: "About Calgary Cars for Cash",
          item: "https://www.calgarycarsforcash.ca/about-us",
        },
      ],
    },
  ],
};

const promises = [
  [
    "Honest Quotes - Always",
    "We base every offer on real numbers. Scrap metal weight at current Alberta market prices, salvageable parts value, make/model demand, and condition. No formulas designed to protect our margins at your expense. If we say $1,800, you get $1,800.",
  ],
  [
    "Cash on the Spot - Not Later",
    "We don't pay by cheque. We don't pay by e-transfer \"once we get the car back to the yard.\" Our driver brings the agreed amount in cash and hands it to you before the vehicle leaves your property.",
  ],
  [
    "Free Towing - No Hidden Catch",
    "Towing is included for every vehicle we buy, anywhere in Calgary and within 60 km of the city. It's never deducted from your offer. There is no asterisk on that promise.",
  ],
  [
    "Licensed, Insured, and Calgary-Based",
    "We operate in accordance with Alberta Transportation regulations and City of Calgary bylaws. Title transfers and vehicle deregistration are handled properly so your legal liability ends the moment the car leaves your driveway.",
  ],
  [
    "No Pressure - Ever",
    "If our offer doesn't work for you, that's fine. Hang up, take a few days, get other quotes. Most of our customers come back - but you'll never hear a high-pressure sales pitch from us. That's not how we do business.",
  ],
];

const recycleSteps = [
  "We tow it from your location to a certified Alberta auto recycler",
  "All hazardous fluids - engine oil, transmission fluid, coolant, brake fluid, refrigerant - are drained and disposed of safely",
  "Salvageable parts are removed and resold into the local automotive supply chain",
  "The remaining steel, aluminum, and copper is recycled and returned to manufacturing",
];

const stats = [
  ["2500+", "Vehicles bought and removed across Calgary"],
  ["7 days", "Days per week we answer the phone"],
  ["30 min", "Average time from arrival to cash in your hand"],
  ["60 km", "Free tow radius around downtown Calgary"],
  ["$300-$10,000", "Typical range we pay per vehicle"],
  ["100%", "Offers honoured at pickup - no last-minute drops"],
];

function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b5252b]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-[#171a17] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-5 text-base leading-8 text-[#4d564e] sm:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}

function ImagePanel({ alt, className = "", objectPosition = "center", src }) {
  return (
    <div
      className={` overflow-hidden rounded-[1.75rem] bg-white shadow-xl shadow-black/10 ring-1 ring-black/6 ${className}`}
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <main className="bg-[#f4f1e9] text-[#171a17]">
      <JsonLd data={pageSchema} />
      <SiteHeader />

      <section className="relative overflow-hidden">
        <Image
          src="/images/cash-for-cars-calgary-pickup-bmw.jpeg"
          alt="Calgary Cars for Cash local vehicle buyers"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[48%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,241,233,0.98)_0%,rgba(244,241,233,0.92)_48%,rgba(244,241,233,0.55)_78%,rgba(244,241,233,0.22)_100%)]" />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.54fr)] lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-black text-[#b5252b] shadow-sm ring-1 ring-black/5">
              About Calgary Cars for Cash
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-[0.98] text-[#171a17] sm:text-5xl lg:text-6xl">
              The Calgary Car Buyers Who Actually Show Up - and Actually Pay
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-lg leading-8 text-[#424940] sm:text-xl">
              <p>
                We started Calgary Cars for Cash because we were tired of
                hearing the same story from our neighbours: somebody promised
                top dollar for their old car, drove out, took one look, and
                dropped the offer by half. Or worse - never showed up at all.
              </p>
              <p>Calgarians deserve better. So we built it.</p>
              <p>
                Today, <a className="font-black text-[#b5252b]" href="/"> Calgary Cars for Cash</a> is a locally owned car buying
                service that does exactly what it says - we come to you anywhere
                in Calgary, hand you cash on the spot, and tow your vehicle away
                for free. No games. No renegotiation in your driveway. No "let
                me call my boss" routine.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#b5252b] px-7 py-4 text-base font-black text-white shadow-lg shadow-[#b5252b]/20 hover:bg-[#9f1f25]"
                href="/#quote"
              >
                Get My Free Cash Offer
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-black text-[#171a17] shadow-sm ring-1 ring-black/10 hover:text-[#b5252b]"
                href="tel:+15876642401"
              >
                Call (587)-664-2401 - Talk to a Real Person
              </a>
            </div>
          </div>

          <div className="w-full max-w-[560px] lg:justify-self-end">
            <LeadForm title="Get My Free Cash Offer" />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b5252b]">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Built in Calgary, for Calgary
            </h2>
            <ImagePanel
              alt="Local Calgary cash for cars pickup"
              className="mt-8"
              objectPosition="center 42%"
              src="/images/cash-for-cars-calgary-pickup-bmw.jpeg"
            />
          </div>
          <div className="space-y-5 rounded-[1.75rem] bg-white p-6 text-base leading-8 text-[#4d564e] shadow-sm ring-1 ring-black/6 sm:p-8">
            <p>
              Calgary Cars for Cash was founded by (AJ), born-and-raised
              Calgarians who spent years inside the local auto trade - towing,
              salvage, recycling, and dealership work - before realising the
              cash-for-cars side of the business was broken.
            </p>
            <p>
              The problem wasn't the cars. The problem was the process. Quotes
              that didn't match payouts. Tow trucks that arrived hours late.
              "Free pickups" that turned into surprise fees. Customers being
              told their vehicle was worth less the moment the driver pulled up.
            </p>
            <p>
              We knew Calgary could be served better - by buyers who actually
              live here, know the streets, and stand behind what they say on the
              phone.
            </p>
            <div className="rounded-2xl bg-[#f4f1e9] p-5">
              <h3 className="text-xl font-black">So we built a different kind of operation.</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-6">
                {[
                  "The phone is answered by a person, not a chatbot or a call centre",
                  "The quote you get is the cash you receive - not a starting point for negotiation",
                  "The driver who arrives at your home is a Calgary local, not an out-of-town subcontractor",
                  "Every vehicle is processed through licensed, environmentally compliant Alberta recyclers",
                ].map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#b5252b] text-xs font-black text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p>
              That's the company we wanted to exist. Now it does - and we run it
              the same way every single day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="What We Stand For"
            title="Our Promise to Every Calgary Customer"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {promises.map(([title, text]) => (
              <div
                className="rounded-[1.5rem] bg-[#f4f1e9] p-6 ring-1 ring-black/6"
                key={title}
              >
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4d564e]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b5252b]">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              The Team Behind Calgary Cars for Cash
            </h2>
            <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-black/6">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/junk-car-removal-calgary-flatbed.jpeg"
                  alt="Calgary Cars for Cash team and tow truck"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-[center_45%]"
                />
              </div>
            </div>
          </div>
          <div className="space-y-5 rounded-[1.75rem] bg-white p-6 text-base leading-8 text-[#4d564e] shadow-sm ring-1 ring-black/6 sm:p-8">
            <p>
              We're a small Calgary team - drivers, dispatchers, and the people
              who answer your call when you dial our number. Everyone on our
              team lives in Calgary or the surrounding region. We've driven the
              same icy LRT crossings, sat through the same Deerfoot rush hour,
              and dug our own cars out of February snowstorms.
            </p>
            <p>
              That matters when you call us. The driver who shows up at your
              place in Tuscany isn't asking Google Maps how to find Crowchild
              Trail. The dispatcher who books your pickup in Auburn Bay knows
              the difference between SE Calgary and SW. When you say "back alley
              off 17th Ave," they know exactly what you mean.
            </p>
            <p>
              We're not a national franchise that opened a Calgary number last
              quarter. We are Calgary - and that's the only city we serve.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#171a17] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c542]">
              Why We Do This
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              More Than Just Cars - A Cleaner Calgary
            </h2>
            <ImagePanel
              alt="Stored scrap vehicle ready for responsible Calgary recycling"
              className="mt-8 text-[#171a17]"
              objectPosition="center 46%"
              src="/images/stored-ford-suv-scrap-calgary.jpeg"
            />
          </div>
          <div className="space-y-5 text-base leading-8 text-white/78">
            <p>
              Every old vehicle we buy, tow, and recycle keeps another wreck off
              Calgary's streets, out of back alleys, and away from illegal
              dumping sites along the city's outskirts. Calgary has one of the
              most actively recycled scrap metal streams in Western Canada - and
              the cash-for-cars trade is a major part of that supply chain.
            </p>
            <div className="rounded-[1.5rem] bg-white p-6 text-[#171a17]">
              <h3 className="text-xl font-black">
                When you sell your car to us, here's what actually happens to it:
              </h3>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-[#4d564e]">
                {recycleSteps.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#b5252b] text-xs font-black text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p>
              It's a small piece of the bigger picture - but every car we
              process is one less wreck rusting in a Calgary driveway, and one
              more contribution to the recycled materials that go into the next
              generation of vehicles, appliances, and infrastructure.
            </p>
            <p>That matters to us. We hope it matters to you too.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="The Numbers"
            title="Calgary Cars for Cash by the Numbers"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map(([number, text]) => (
              <div
                className="rounded-[1.5rem] bg-white p-6 text-center shadow-sm ring-1 ring-black/6"
                key={number}
              >
                <p className="text-4xl font-black text-[#b5252b]">{number}</p>
                <p className="mt-3 text-sm font-bold leading-6 text-[#4d564e]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b5252b]">
            Service Area Recap
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Where We Operate
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-[#4d564e] sm:text-lg">
            <p>
              We provide cash for cars across all of Calgary - every quadrant,
              every community - and the broader Calgary metro area including
              Airdrie, Cochrane, Okotoks, High River, Strathmore, and
              Chestermere.
            </p>
            <p>
              If you're within 60 km of downtown Calgary, we'll come to you at
              no charge. If you're not sure whether you're in our service area,
              <a className="font-black text-[#b5252b]" href="/contact"> just call</a>. We can usually tell you in 30 seconds.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#b5252b] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_0.6fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Ready to Sell Your Car? We're Ready to Buy It.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-white/88 sm:text-lg">
              <p>
                Calgary Cars for Cash exists for one reason - to make selling
                your old, damaged, or unwanted vehicle the easiest part of your
                week. No paperwork stress. No tow truck headaches. No wondering
                whether the offer will hold up when the driver arrives.
              </p>
              <p>
                Just a fair number, a free tow, and cash in your hand. The way
                it should be.
              </p>
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-white p-6 text-[#171a17] shadow-2xl shadow-black/20">
            <a
              className="inline-flex w-full justify-center rounded-full bg-[#171a17] px-7 py-4 text-center text-base font-black text-white hover:bg-[#b5252b]"
              href="/#quote"
            >
              Get My Free Cash Offer Now →
            </a>
            <a
              className="mt-3 inline-flex w-full justify-center rounded-full bg-[#f4c542] px-7 py-4 text-center text-base font-black text-[#171a17] hover:bg-[#f4f1e9]"
              href="tel:+15876642401"
            >
              Or call: (587)-664-2401 - We Answer 7 Days a Week
            </a>
          </div>
        </div>
      </section>

      <SiteFooter tagline="About Calgary Cars for Cash | Local Buyers Since 2017" />
    </main>
  );
}
