import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import LeadForm from "../../components/LeadForm";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

const phoneLabel = "(587) 664-2401";
const phoneHref = "tel:+15876642401";
const servicePath = "/services/junk-car-removal-calgary";
const serviceUrl = `https://www.calgarycarsforcash.ca${servicePath}`;

export const metadata = {
  title: "Junk Car Removal Calgary | Off Your Property Today",
  description:
    "Junk car removal in Calgary - any condition, any access. Parkades, alleys, garages, no wheels. Free towing, paid at pickup. Call (587) 664-2401 for a quote.",
  alternates: {
    canonical: servicePath,
  },
  openGraph: {
    title: "Junk Car Removal Calgary | Off Your Property Today",
    description:
      "Junk car removal in Calgary - any condition, any access. Parkades, alleys, garages, no wheels. Free towing, paid at pickup. Call (587) 664-2401 for a quote.",
    url: serviceUrl,
    siteName: "Calgary Cars For Cash",
    images: [
      {
        url: "/images/accident-damaged-van-calgary.jpeg",
        width: 1200,
        height: 900,
        alt: "Junk car removal in Calgary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Car Removal Calgary | Off Your Property Today",
    description:
      "Junk car removal in Calgary - any condition, any access. Parkades, alleys, garages, no wheels. Free towing, paid at pickup. Call (587) 664-2401 for a quote.",
    images: ["/images/accident-damaged-van-calgary.jpeg"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${serviceUrl}#webpage`,
      url: serviceUrl,
      name: "Junk Car Removal Calgary | Off Your Property Today",
      description:
        "Junk car removal in Calgary - any condition, any access. Parkades, alleys, garages, no wheels. Free towing, paid at pickup.",
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
      "@id": `${serviceUrl}#service`,
      name: "Junk Car Removal Calgary",
      serviceType: "Junk car removal",
      provider: {
        "@id": "https://www.calgarycarsforcash.ca/#business",
      },
      areaServed: "Calgary",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${serviceUrl}#breadcrumb`,
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
          name: "Junk Car Removal Calgary",
          item: serviceUrl,
        },
      ],
    },
  ],
};

const bylawRules = [
  "Automobile parts must be stored so they are not visible from outside the property. The stack of takeoffs beside the car counts.",
  "Open or exposed storage of industrial fluid is prohibited, including engine oil, brake fluid, antifreeze, and other hazardous materials.",
  "Untidy property violations carry fines in the range of $100 to $500, depending on the violation.",
  "Causing or permitting a nuisance on premises carries a $500 penalty under the Community Standards Bylaw, and failing to comply with a remedial order carries another $500.",
  "Front-yard parking offences carry penalties around $400 each.",
  "On a City street or lane, 72 hours is the limit. A vehicle must be operable and moved within 72 consecutive hours or it may be treated as abandoned and removed.",
];

const junkCarItems = [
  "Won't start",
  "No keys",
  "Cracked block",
  "Seized engine",
  "Blown transmission",
  "Failed a safety or out-of-province inspection",
  "Rusted through the frame or rockers",
  "Hail write-off",
  "Collision write-off",
  "Flood or water damage",
  "Missing wheels, engine, or interior",
  "Partly disassembled project",
  "Parked so long the tires went flat and the brakes seized",
  "Registration lapsed years ago",
  "Nobody in the family knows whose name it is in",
];

const accessSituations = [
  {
    title: "Underground parkade",
    body: "Common downtown, in the Beltline, and in East Village. Standard flatbeds usually cannot enter, so we use a wheel-lift when needed or winch the vehicle up the ramp for street-level loading. Tell us the ceiling height and stall location.",
  },
  {
    title: "Back alley or narrow lane",
    body: "Common in Inglewood, Ramsay, Bridgeland, Renfrew, Killarney, and older inner-city communities. We bring trucks that fit.",
  },
  {
    title: "Inside a detached garage",
    body: "If it will not roll or steer, we bring dollies and winch it out. Measure the door width if the access is tight.",
  },
  {
    title: "No wheels, on blocks, or on jack stands",
    body: "Routine. Mention it so we bring the right gear.",
  },
  {
    title: "Buried in snow or grown into the grass",
    body: "Also routine. We just need to know so we allow enough time to free it.",
  },
  {
    title: "Soft ground, lawns, or acreage fields",
    body: "We choose equipment and an approach that minimizes marking. Ask when you book.",
  },
  {
    title: "Locked gate, compound, or storage yard",
    body: "Arrange access or a code beforehand and confirm you are authorized to release the vehicle.",
  },
  {
    title: "Condo, rental, or shared property",
    body: "You will need permission from the property owner or manager if it is not your land.",
  },
  {
    title: "Multiple vehicles",
    body: "Give us a count and we will quote the group and clear them in one visit.",
  },
];

const removalSteps = [
  "We arrive in the agreed window. You get a call or text when the operator is on the way.",
  "We confirm the vehicle: year, make, model, and VIN.",
  "We check your photo ID and proof of ownership, then complete a bill of sale. Both parties sign and you keep a copy.",
  "You get paid at pickup by e-transfer before the vehicle is loaded.",
  "We load and go using a flatbed, wheel-lift, winch, or dollies depending on the situation.",
  "Your plates stay with you. Take them off before we arrive.",
];

const requirements = [
  "Proof of ownership: your Alberta registration or title, in your name",
  "Valid government-issued photo ID: registered owner, 18 or older",
];

const faqItems = [
  [
    "How fast can you remove it?",
    "Often the same day, usually within 24 hours.",
  ],
  [
    "Do I need to be home?",
    "Yes, normally. The registered owner signs the bill of sale and shows ID.",
  ],
  [
    "Will you remove a car that is not in my name?",
    "No. Nobody can legally buy that from you.",
  ],
  [
    "Can you get into an underground parkade?",
    "Usually. Tell us the ceiling height and whether it rolls and steers.",
  ],
  [
    "What if it has been sitting for fifteen years and has no wheels?",
    "Completely normal for us.",
  ],
  [
    "Will you damage my driveway or lawn?",
    "We take reasonable care, but winching an immobile vehicle can mark a surface. Tell us your concerns and we will agree an approach first.",
  ],
  [
    "Do I have to clean it out?",
    "Yes. Remove everything before we arrive. Once a vehicle goes for processing, contents cannot be recovered. Check the glovebox, console, under the seats, the trunk, and the spare-wheel well.",
  ],
];

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b5252b]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-[#171a17] sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-5 space-y-4 text-base leading-8 text-[#4d564e] sm:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-black/6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

export default function JunkCarRemovalCalgaryPage() {
  return (
    <main className="bg-[#f4f1e9] text-[#171a17]">
      <JsonLd data={pageSchema} />
      <SiteHeader />

      <section className="px-5 pb-12 pt-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.44fr)]">
          <Card className="bg-[#171a17] text-white shadow-xl shadow-black/10 ring-white/10">
            <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-[#f4c542]">
              Junk Car Removal Calgary
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] sm:text-5xl">
              Off Your Property, Often the Same Day
            </h1>
            <div className="mt-6 space-y-5 text-base leading-8 text-white/82 sm:text-lg">
              <p>
                Most people do not call us because they want money. They call because they want the thing gone. It is blocking a garage, filling a stall, sinking into a lawn, or drawing looks from neighbours, and every month it stays, it costs a little more in insurance, registration, or patience.
              </p>
              <p>
                Junk My Car YYC removes junk vehicles anywhere in Calgary, in any condition and from almost any position, and pays you at pickup instead of charging you.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#f4c542] px-6 py-3.5 text-base font-black text-[#171a17]"
                href={phoneHref}
              >
                Free quote, no obligation: {phoneLabel}
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3.5 text-base font-black text-white ring-1 ring-white/15"
                href="#book"
              >
                Book a removal
              </a>
            </div>
          </Card>

          <div className="lg:sticky lg:top-8 lg:self-start">
            <LeadForm
              buttonLabel="Get My Free Quote"
              title="Request Junk Car Removal"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Calgary Bylaws"
            title="In Calgary, a Derelict Vehicle Is a Bylaw Problem, Not Just an Eyesore"
          >
            <p>
              This is the part most Calgarians do not know, and it is the reason to act sooner rather than later.
            </p>
            <p>
              Dilapidated vehicles are prohibited anywhere on private property unless they are inside a building. Inside a garage is fine. On the driveway, side yard, or back pad is not.
            </p>
            <p>
              How enforcement usually starts: a neighbour calls 311. Calgary does not accept anonymous bylaw complaints, but once a file opens you are on a deadline and still have to arrange removal yourself, only now under pressure.
            </p>
            <p>
              The straightforward version is to deal with it first. One call, one pickup, paid at the door, no file with your address on it.
            </p>
          </SectionHeading>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {bylawRules.map((rule) => (
              <Card key={rule} className="h-full">
                <p className="text-sm leading-7 text-[#4d564e]">{rule}</p>
              </Card>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-sm leading-7 text-[#6a706a]">
            This is a plain-English summary, not legal advice. Fine amounts and wording change. Confirm current requirements with 311 or the bylaws themselves.
          </p>
        </div>
      </section>

      <section id="what-counts" className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What Counts"
            title="What Counts as a Junk Car"
          >
            <p>
              If any of these describe your vehicle, we will take it.
            </p>
            <p>
              Cars, trucks, SUVs, vans, minivans, and one-tons. Domestic or import. Gas, diesel, or hybrid. Complete or stripped.
            </p>
          </SectionHeading>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {junkCarItems.map((item) => (
              <div
                className="rounded-2xl bg-white px-5 py-4 text-sm font-bold leading-6 text-[#3f473f] shadow-sm ring-1 ring-black/6"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Access"
            title="Every Access Situation We Handle"
          >
            <p>
              Access is the actual problem in most removals, not the vehicle. Tell us the situation on the phone and we bring the right equipment the first time.
            </p>
          </SectionHeading>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {accessSituations.map((item) => (
              <Card key={item.title} className="h-full">
                <h3 className="text-xl font-black text-[#171a17]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4d564e]">{item.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Card>
            <SectionHeading
              eyebrow="Removal Day"
              title="What Happens on Removal Day"
            >
              <p>No mystery, no surprises.</p>
            </SectionHeading>
            <ol className="mt-8 grid gap-4">
              {removalSteps.map((step, index) => (
                <li
                  className="rounded-2xl bg-[#f4f1e9] px-5 py-4 text-sm leading-7 text-[#3f473f]"
                  key={step}
                >
                  <span className="mr-2 font-black text-[#b5252b]">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-7 text-[#4d564e]">
              Typical time on site: 15 to 30 minutes for a straightforward pickup.
            </p>
          </Card>

          <Card>
            <SectionHeading
              eyebrow="What You Need"
              title="What You Need"
            >
              <p>Two things.</p>
            </SectionHeading>
            <ul className="mt-8 grid gap-4">
              {requirements.map((item) => (
                <li
                  className="rounded-2xl bg-[#f4f1e9] px-5 py-4 text-sm font-bold leading-7 text-[#3f473f]"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[#4d564e]">
              <p>We prepare and provide the bill of sale. If the vehicle is not registered to you, we cannot legally buy it.</p>
              <p>Lost the registration? A registry agent can generally sort ownership using the VIN and your ID. Estate vehicle? You will need executor documentation. Loan still on it? The lien must be cleared through Alberta&apos;s Personal Property Registry first.</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pricing"
            title="Removal Costs You Nothing"
          >
            <p>No towing fee. Pickup anywhere in Calgary is included.</p>
            <p>No admin, paperwork, or disposal fee.</p>
            <p>No fee if you decline. If our number changes because the vehicle is not as described, you are free to walk away at no cost.</p>
            <p>
              Any operator who quotes you a removal price, then deducts towing on arrival, is not doing you a favour. You should be paid for a junk car, not billed for it.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section id="faq" className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="FAQ" title="Common Questions" />
          <div className="mt-10 grid gap-4">
            {faqItems.map(([question, answer]) => (
              <Card key={question}>
                <h3 className="text-xl font-black text-[#171a17]">{question}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4d564e]">{answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="bg-[#b5252b] px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.42fr)] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c542]">
              Book a Removal
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Book a Removal
            </h2>
            <p className="mt-5 text-base leading-8 text-white/88 sm:text-lg">
              Call or text {phoneLabel}. We answer 7 days a week and cover all quadrants of Calgary and surrounding towns.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-black text-[#171a17]"
                href={phoneHref}
              >
                Call or text {phoneLabel}
              </a>
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3.5 text-base font-black text-white ring-1 ring-white/15"
                href="/scrap-car-removal-calgary"
              >
                Related: Scrap car removal
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold text-white/82">
              <Link href="/blog/junk-car-worth-in-calgary">Related: How scrap value is calculated</Link>
              <span>Related: Free towing</span>
            </div>
          </div>
          <LeadForm
            buttonLabel="Book My Pickup"
            title="Get a Quote"
          />
        </div>
      </section>

      <SiteFooter tagline="Junk Car Removal Calgary - Free towing, paid at pickup, any access situation handled." />
    </main>
  );
}
