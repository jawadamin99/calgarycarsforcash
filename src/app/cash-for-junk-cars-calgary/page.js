import Image from "next/image";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import LeadForm from "../components/LeadForm";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Cash for Junk Cars Calgary | Running or Not, We Buy It",
  description:
    "Looking for cash for junk cars in Calgary? We pay up to $10,000 - any condition, blown engine, or write-off. instant cash paid on pickup. Call now.",
  alternates: {
    canonical: "/cash-for-junk-cars-calgary",
  },
  openGraph: {
    title: "Cash for Junk Cars Calgary | Running or Not, We Buy It",
    description:
      "Looking for cash for junk cars in Calgary? We pay up to $10,000 - any condition, blown engine, or write-off. instant cash paid on pickup. Call now.",
    url: "https://www.calgarycarsforcash.ca/cash-for-junk-cars-calgary",
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
    title: "Cash for Junk Cars Calgary | Running or Not, We Buy It",
    description:
      "Looking for cash for junk cars in Calgary? We pay up to $10,000 - any condition, blown engine, or write-off. instant cash paid on pickup. Call now.",
    images: ["/images/calgary-cash-for-cars-logo.png"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.calgarycarsforcash.ca/cash-for-junk-cars-calgary#webpage",
      url: "https://www.calgarycarsforcash.ca/cash-for-junk-cars-calgary",
      name: "Cash for Junk Cars Calgary | Running or Not, We Buy It",
      description:
        "Looking for cash for junk cars in Calgary? We pay up to $10,000 - any condition, blown engine, or write-off. instant cash paid on pickup. Call now.",
      isPartOf: {
        "@id": "https://www.calgarycarsforcash.ca/#website",
      },
      about: {
        "@id": "https://www.calgarycarsforcash.ca/#business",
      },
      inLanguage: "en-CA",
    },
    {
      "@type": "Service",
      "@id": "https://www.calgarycarsforcash.ca/cash-for-junk-cars-calgary#service",
      name: "Cash for Junk Cars Calgary",
      serviceType: "Junk car buying",
      provider: {
        "@id": "https://www.calgarycarsforcash.ca/#business",
      },
      areaServed: "Calgary",
      offers: {
        "@type": "Offer",
        priceCurrency: "CAD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 300,
          maxPrice: 10000,
          priceCurrency: "CAD",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.calgarycarsforcash.ca/cash-for-junk-cars-calgary#breadcrumb",
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
          name: "Cash for Junk Cars Calgary",
          item: "https://www.calgarycarsforcash.ca/cash-for-junk-cars-calgary",
        },
      ],
    },
  ],
};

const trustItems = [
  "$300-$10,000 Paid Cash",
  "We Buy Non-Running Cars",
  "Free Towing Included",
  "Same-Day Pickup Calgary",
];

const costRows = [
  [
    "Insurance premiums on a car you're not driving",
    "Instant cash in your hand - $300 to $10,000",
  ],
  [
    "Property tax implications for vehicles stored on driveways in Calgary",
    "Free flatbed tow truck to your door",
  ],
  [
    "Ongoing fluid leaks contaminating your driveway or garage floor",
    "Clean driveway or garage space recovered same day",
  ],
  [
    "City of Calgary bylaws on derelict vehicles in residential areas",
    "Full legal liability removed from your name",
  ],
  [
    "Parts deteriorating further - reducing the value every month it sits",
    "Market-rate offer based on today's scrap prices, not tomorrow's",
  ],
  [
    "Neighbours and strata complaints about the eyesore",
    "Problem gone in under an hour",
  ],
];

const mechanicalFailures = [
  "Blown or seized engine",
  "Failed or slipping transmission",
  "Bent or broken frame",
  "Snapped timing chain or belt",
  "Overheated and warped engine block",
  "Seized brakes or wheel bearings",
];

const damageIssues = [
  "Major collision damage - front, rear, or side",
  "Insurance write-off or total loss",
  "Flood or water damage",
  "Fire damage - interior or engine",
  "Advanced rust through body panels or frame",
  "Stripped interior, missing catalytic converter",
];

const pricingRows = [
  [
    "Make & model",
    "Trucks and popular domestic makes (Ford, GM, Dodge) carry higher parts demand in Alberta and typically fetch more than smaller import vehicles of the same condition.",
  ],
  [
    "Year of the vehicle",
    "Newer junk cars have more valuable components - working airbags, functioning sensors, catalytic converters, and body panels that can be resold. Older vehicles are priced primarily on scrap metal weight.",
  ],
  [
    "What still works",
    "A junk car with a functioning alternator, battery, starter, or intact interior components is worth meaningfully more than a stripped shell. We assess this when you call.",
  ],
  [
    "Scrap metal weight",
    "Heavier vehicles - pickup trucks, full-size SUVs, vans - are worth more by weight alone. Current Alberta scrap steel prices directly influence your base offer.",
  ],
  [
    "Catalytic converter",
    "An intact catalytic converter on a junk car can add $100-$500 to your offer depending on the vehicle. Platinum and palladium inside these components are highly valuable.",
  ],
  [
    "Location in Calgary",
    "We cover all of Calgary and surrounding communities at no charge. No towing deductions. NW, NE, SW, SE - the offer stays the same wherever you are.",
  ],
];

const steps = [
  [
    "1.",
    "Call or get a quote online",
    "Tell us your vehicle's year, make, model, and condition. We give you a cash offer on the spot - no mechanic inspection, no waiting period, no obligation to accept.",
  ],
  [
    "2.",
    "Pick your pickup time",
    "You choose the time. Morning, afternoon, or evening - we're available 7 days a week. We come to your home, workplace, or storage unit anywhere in Calgary and surrounding areas.",
  ],
  [
    "3.",
    "Get paid cash, car gets towed",
    "Our driver arrives with cash in hand, verifies the vehicle matches your description, pays you immediately, and tows the junk car away for free. Done in under 30 minutes.",
  ],
];

const faqs = [
  [
    "Will you buy my junk car if the engine is completely blown?",
    "Yes, without hesitation. A blown engine is one of the most common reasons people call us. The vehicle still has scrap metal value, body panel value, and often has other working components we can recover. A blown engine does not make a car worthless - it just changes the calculation slightly.",
  ],
  [
    "My junk car has been sitting for years and hasn't moved - can you still take it?",
    "Absolutely. We tow non-moving vehicles every day in Calgary. Our flatbed truck doesn't need the car to be driveable. Whether it's on flat tires, locked up brakes, or sitting on blocks, we'll load it and take it away. Just make sure there's enough space around the vehicle for the flatbed to access it.",
  ],
  [
    "Do I need to drain the fluids before you take the junk car?",
    "No - that's our responsibility. We ensure all hazardous fluids including engine oil, coolant, transmission fluid, brake fluid, and refrigerant are properly drained and disposed of in compliance with Alberta Environmental Protection regulations. You don't touch a thing.",
  ],
  [
    "What if my junk car doesn't have a title?",
    "We understand that titles get lost - especially on vehicles that have been sitting for years. In Alberta, you'll need proof of ownership and a valid government-issued ID to complete the sale. If the title is missing, contact an Alberta registry agent or Service Alberta to obtain a replacement before we arrive. We can walk you through what's needed if you're unsure.",
  ],
  [
    "Will the offer drop when your driver arrives?",
    "Never. The offer we give over the phone is the amount our driver brings in cash. We don't renegotiate at the door. If the vehicle matches the description you gave us - which it almost always does - you get paid exactly what we quoted. No last-minute surprises.",
  ],
  [
    "Can you pick up a junk car from a storage unit or impound lot in Calgary?",
    "In most cases, yes. We pick up junk cars from residential driveways, back alleys, garages, commercial properties, and storage facilities across Calgary. If the vehicle is at an impound lot, contact us first to discuss - there may be specific requirements depending on the facility's rules.",
  ],
];

function Header() {
  return (
    <header className="w-full bg-white shadow-sm ring-1 ring-black/6">
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link className="flex shrink-0 items-center" href="/">
          <Image
            src="/images/calgary-cash-for-cars-logo.png"
            alt="Calgary Cars for Cash"
            width={300}
            height={278}
            priority
            className="h-20 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-black text-[#3f473f] lg:flex">
          <a className="hover:text-[#b5252b]" href="#problem">
            Problem
          </a>
          <a className="hover:text-[#b5252b]" href="#what-counts">
            What Counts
          </a>
          <a className="hover:text-[#b5252b]" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-[#b5252b]" href="#faq">
            FAQ
          </a>
        </nav>
        <a
          className="inline-flex items-center gap-2 rounded-full bg-[#171a17] px-4 py-2.5 text-sm font-black text-white shadow-sm hover:bg-[#b5252b] sm:px-5"
          href="tel:+15876642401"
        >
          <svg
            aria-hidden="true"
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.25-1.25a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92Z" />
          </svg>
          <span className="hidden sm:inline">Call (587)-664-2401</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

function QuoteForm() {
  return (
    <LeadForm
      buttonLabel="Free Quote in 5 Minutes"
      title="Get My Junk Car Cash Offer"
    />
  );
}

function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
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

function CheckList({ items }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li className="flex gap-3 text-sm leading-6 text-[#3f473f]" key={item}>
          <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#b5252b] text-xs font-black text-white">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
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

function Footer() {
  return (
    <footer className="bg-[#171a17] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr_0.7fr]">
        <div>
          <Link className="flex items-center gap-3" href="/">
            <Image
              src="/images/calgary-cash-for-cars-logo.png"
              alt="Calgary Cars for Cash"
              width={300}
              height={278}
              className="h-20 w-auto"
            />
          </Link>
          <p className="mt-4 text-sm leading-6 text-white/68">
            Cash for Junk Cars Calgary - Your Dead Car Is Worth More Than You
            Think
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm font-black text-white/78 sm:grid-cols-4">
          <a className="hover:text-white" href="#problem">
            Problem
          </a>
          <a className="hover:text-white" href="#what-counts">
            What Counts
          </a>
          <a className="hover:text-white" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-white" href="#faq">
            FAQ
          </a>
        </div>
        <div className="grid gap-3 text-sm font-black">
          <a className="text-[#f4c542]" href="tel:+15876642401">
            (587)-664-2401
          </a>
          <a href="mailto:info@calgarycarsforcash.ca">
            info@calgarycarsforcash.ca
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function CashForJunkCarsCalgaryPage() {
  return (
    <main className="bg-[#f4f1e9] text-[#171a17]">
      <JsonLd data={pageSchema} />
      <SiteHeader />

      <section className="relative overflow-hidden">
        <Image
          src="/images/accident-damaged-van-calgary.jpeg"
          alt="Tow truck picking up a junk car in Calgary"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,241,233,0.98)_0%,rgba(244,241,233,0.92)_45%,rgba(244,241,233,0.55)_76%,rgba(244,241,233,0.2)_100%)]" />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.54fr)] lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-black text-[#b5252b] shadow-sm ring-1 ring-black/5">
              Cash for Junk Cars Calgary
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-[0.98] text-[#171a17] sm:text-5xl lg:text-5xl">
              Your Dead Car Is Worth More Than You Think
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-lg leading-8 text-[#424940] sm:text-xl">
              <p>
                Most people with a junk car sitting in their driveway assume the
                same thing: it's worthless. The engine is blown, the
                transmission is gone, or it hasn't started in three winters - so
                what could it possibly be worth?
              </p>
              <p>
                More than you think. At Calgary Cars for Cash, we pay $300 to
                $10,000 for <a className="font-black text-[#b5252b]" href="/cash-for-junk-cars-calgary">junk cars across Calgary</a> - regardless of whether
                they run, regardless of how bad the damage is, and regardless of
                how long they've been sitting.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#b5252b] px-7 py-4 text-base font-black text-white shadow-lg shadow-[#b5252b]/20 hover:bg-[#9f1f25]"
                href="#quote"
              >
                Get My Junk Car Cash Offer
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-black text-[#171a17] shadow-sm ring-1 ring-black/10 hover:text-[#b5252b]"
                href="tel:+15876642401"
              >
                Call (587)-664-2401 - 7 days a week
              </a>
            </div>
          </div>
          <div id="quote">
            <QuoteForm />
          </div>
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl gap-3 px-5 pb-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {trustItems.map((item) => (
            <div
              className="rounded-2xl bg-white/92 px-4 py-3 text-center text-sm font-black shadow-sm ring-1 ring-black/5"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-black/6 sm:p-8">
          <p className="text-base leading-8 text-[#4d564e] sm:text-lg">
            A dead car is not a worthless car. It's scrap metal, salvageable
            parts, and reusable materials that have real dollar value on today's
            Alberta market.
          </p>
          <p className="mt-4 text-base leading-8 text-[#4d564e] sm:text-lg">
            Call us, describe your vehicle, and we'll give you a real number in
            minutes. No inspection required. No mechanic's report. No haggling.
            Just a straight cash offer for your junk car in Calgary, with free
            towing and same-day pickup available anywhere in the city.
          </p>
        </div>
      </section>

      <section id="problem" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="The Problem"
            title="The Real Cost of Keeping That Junk Car in Your Driveway"
          >
            <p>
              Calgary winters are hard on vehicles. Road salt on Deerfoot Trail
              and Glenmore Trail, freeze-thaw cycles along the Bow River valley,
              and UV exposure in Alberta's high-altitude sun accelerate
              corrosion and mechanical failure faster than in milder provinces.
              A car that's already struggling doesn't stand much of a chance.
            </p>
          </SectionIntro>
          <div className="mt-12 overflow-hidden rounded-[1.5rem] bg-[#f4f1e9] ring-1 ring-black/8">
            <div className="grid bg-[#171a17] text-sm font-black uppercase tracking-[0.14em] text-white md:grid-cols-2">
              <div className="p-4">The hidden cost of keeping it</div>
              <div className="p-4">What you get by calling us instead</div>
            </div>
            {costRows.map(([cost, benefit]) => (
              <div className="grid border-t border-black/8 md:grid-cols-2" key={cost}>
                <div className="bg-white p-4 text-sm leading-7 text-[#4d564e]">
                  ✗ {cost}
                </div>
                <div className="p-4 text-sm font-bold leading-7 text-[#3f473f]">
                  ✓ {benefit}
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-center text-base leading-8 text-[#4d564e]">
            The longer a junk car sits, the less it's worth and the more it
            costs you. Calling Calgary Cars for Cash today is almost always the
            financially smarter move - even if the car has sentimental value,
            the math rarely supports holding onto it.
          </p>
        </div>
      </section>

      <section id="what-counts" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="What Counts as a Junk Car"
            title="What Counts as a Junk Car? (Spoiler: Probably Yours)"
          >
            <p>
              People are often surprised by what we consider a junk car -
              because our definition is much broader than most. If your vehicle
              has any of the following, it qualifies, and we'll <a className="font-black text-[#b5252b]" href="/">pay you cash for
              it in Calgary</a> today:
            </p>
          </SectionIntro>
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
            <ImagePanel
              alt="Stored unwanted SUV that qualifies as a junk car in Calgary"
              objectPosition="center 46%"
              src="/images/stored-ford-suv-scrap-calgary.jpeg"
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/6">
                <h3 className="mb-5 text-2xl font-black">
                  Mechanical failures
                </h3>
                <CheckList items={mechanicalFailures} />
              </div>
              <div className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/6">
                <h3 className="mb-5 text-2xl font-black">
                  Damage & condition issues
                </h3>
                <CheckList items={damageIssues} />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-5xl space-y-5 text-center text-base leading-8 text-[#4d564e]">
            <p>
              We also buy junk cars that simply won't pass Alberta's
              out-of-province inspection, vehicles with lapsed registration,
              cars that failed their safety certificate, and inherited vehicles
              you have no use for. Whatever the reason it's sitting there -
              we'll buy it.
            </p>
            <p>
              We buy junk cars, trucks, SUVs, vans, minivans, and motorcycles.
              Any make, any model, any year. Domestic or import. If it's taking
              up space in Calgary, we want it.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Pricing"
            title="How Much Will You Pay for My Junk Car in Calgary?"
          >
            <p>
              We pay between $300 and $10,000 for junk cars in Calgary. The
              exact amount depends on your specific vehicle. Here is what drives
              the number:
            </p>
          </SectionIntro>
          <div className="mt-12 overflow-hidden rounded-[1.5rem] bg-[#f4f1e9] ring-1 ring-black/8">
            <div className="grid bg-[#171a17] text-sm font-black uppercase tracking-[0.14em] text-white md:grid-cols-[0.35fr_0.65fr]">
              <div className="p-4">What affects your offer</div>
              <div className="p-4">How it works</div>
            </div>
            {pricingRows.map(([factor, text]) => (
              <div
                className="grid border-t border-black/8 md:grid-cols-[0.35fr_0.65fr]"
                key={factor}
              >
                <div className="bg-white p-4 font-black">{factor}</div>
                <div className="p-4 text-sm leading-7 text-[#4d564e]">
                  {text}
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-center text-base leading-8 text-[#4d564e]">
            The best way to find out exactly what your junk car is worth is to
            call us. We'll ask you a few questions about your vehicle - year,
            make, model, what's wrong with it, and whether the title is
            available - and give you a real dollar figure in under 5 minutes. No
            obligation. No pressure. Just a straight number.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Process"
            title="How to Sell Your Junk Car in Calgary - It Takes Less Than an Hour"
          >
            <p>
              Most of our customers are surprised by how fast and painless the
              process is. Here's exactly what happens:
            </p>
          </SectionIntro>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {steps.map(([step, title, text]) => (
              <div
                className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/6"
                key={step}
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b5252b]">
                  {step}
                </p>
                <h3 className="mt-3 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#4d564e]">{text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-center text-base leading-8 text-[#4d564e]">
            There's no paperwork for you to sort out in advance. Bring your
            Alberta vehicle registration and a piece of government-issued ID. We
            handle the transfer of ownership and notify Alberta Transportation
            that the vehicle has been disposed of - so you're not liable for
            anything that happens to it after it leaves your property.
          </p>
        </div>
      </section>

      <section id="faq" className="bg-[#171a17] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c542]">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Junk Car Questions - Answered Straight
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <div
                className="rounded-[1.5rem] bg-white p-6 text-[#171a17]"
                key={question}
              >
                <h3 className="text-xl font-black">{question}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4d564e]">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#b5252b] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_0.6fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Your Junk Car Is Sitting There Losing Value - Call Us Today
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-white/88 sm:text-lg">
              <p>
                Every week that junk car sits in Calgary's climate, it loses
                value. Rust spreads. Fluids degrade. Parts that were worth money
                last month aren't worth as much next month. The best time to
                call us was last year. The second best time is right now.
              </p>
              <p>
                Calgary Cars for Cash pays $300 to $10,000 cash for junk cars
                across Calgary and the surrounding area - Airdrie, Cochrane,
                Okotoks, Strathmore, and Chestermere included. We tow for free,
                we pay on the spot, and we take care of all the paperwork. You
                walk away with cash and a clear conscience.
              </p>
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-white p-6 text-[#171a17] shadow-2xl shadow-black/20">
            <a
              className="inline-flex w-full justify-center rounded-full bg-[#171a17] px-7 py-4 text-center text-base font-black text-white hover:bg-[#b5252b]"
              href="#quote"
            >
              Get My Junk Car Cash Offer - Free Quote in 5 Minutes
            </a>
            <a
              className="mt-3 inline-flex w-full justify-center rounded-full bg-[#f4c542] px-7 py-4 text-center text-base font-black text-[#171a17] hover:bg-[#f4f1e9]"
              href="tel:+15876642401"
            >
              Call (587)-664-2401 - 7 days a week, including weekends
            </a>
          </div>
        </div>
      </section>

      <SiteFooter tagline="Cash for Junk Cars Calgary - Your Dead Car Is Worth More Than You Think" />
    </main>
  );
}
