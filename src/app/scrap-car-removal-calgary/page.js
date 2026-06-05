import Image from "next/image";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import LeadForm from "../components/LeadForm";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Scrap Car Removal Calgary — Same-Day Pickup, Paid Cash",
  description:
    "Calgary's #1 scrap car removal service - we pick up your scrap car for free and pay $300-$10,000 cash same day. All Calgary areas covered. Get a free quote today.",
  alternates: {
    canonical: "/scrap-car-removal-calgary",
  },
  openGraph: {
    title: "Scrap Car Removal Calgary — Same-Day Pickup, Paid Cash",
    description:
      "Calgary's #1 scrap car removal service - we pick up your scrap car for free and pay $300-$10,000 cash same day. All Calgary areas covered. Get a free quote today.",
    url: "https://www.calgarycarsforcash.ca/scrap-car-removal-calgary",
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
    title: "Scrap Car Removal Calgary — Same-Day Pickup, Paid Cash",
    description:
      "Calgary's #1 scrap car removal service - we pick up your scrap car for free and pay $300-$10,000 cash same day. All Calgary areas covered. Get a free quote today.",
    images: ["/images/calgary-cash-for-cars-logo.png"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.calgarycarsforcash.ca/scrap-car-removal-calgary#webpage",
      url: "https://www.calgarycarsforcash.ca/scrap-car-removal-calgary",
      name: "Scrap Car Removal Calgary — Same-Day Pickup, Paid Cash",
      description:
        "Calgary's #1 scrap car removal service - we pick up your scrap car for free and pay $300-$10,000 cash same day. All Calgary areas covered. Get a free quote today.",
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
      "@id": "https://www.calgarycarsforcash.ca/scrap-car-removal-calgary#service",
      name: "Scrap Car Removal Calgary",
      serviceType: "Scrap car removal and recycling",
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
      "@id": "https://www.calgarycarsforcash.ca/scrap-car-removal-calgary#breadcrumb",
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
          name: "Scrap Car Removal Calgary",
          item: "https://www.calgarycarsforcash.ca/scrap-car-removal-calgary",
        },
      ],
    },
  ],
};

const trustItems = [
  "Free Scrap Car Removal",
  "Paid on the Spot",
  "Same-Day Service Available",
  "Eco-Compliant Recycling",
];

const processSteps = [
  [
    "You call us",
    "You give us your vehicle details. We make you a cash offer in minutes based on your vehicle's make, model, year, condition, and current Alberta scrap metal prices.",
  ],
  [
    "We schedule pickup",
    "We confirm a time that works for you - same day in most cases across Calgary. We send a licensed driver with a flatbed tow truck to your location anywhere in the city.",
  ],
  [
    "We load the vehicle",
    "Our driver arrives, verifies the vehicle, and hands you cash on the spot. The vehicle is loaded onto the flatbed - no damage to your driveway, no mess, no fuss.",
  ],
  [
    "Hazardous fluid removal",
    "At the recycling facility, all hazardous fluids are professionally extracted and disposed of in compliance with Alberta Environment and Protected Areas regulations. This includes engine oil, coolant, transmission fluid, brake fluid, power steering fluid, and refrigerant (Freon).",
  ],
  [
    "Parts salvage",
    "Reusable components - alternators, starters, batteries, usable body panels, wheels, tires, and working electronics - are removed and resold through the secondary automotive parts market, extending the useful life of functional components.",
  ],
  [
    "Metal recycling",
    "The remaining steel and aluminum shell is crushed, shredded, and sent to Alberta steel recyclers. Scrap steel from vehicles is one of the most efficiently recycled materials on the planet - and your car contributes directly to that supply chain.",
  ],
  [
    "Title transfer",
    "We register the vehicle disposal with Alberta Transportation so your liability is legally terminated. You won't receive parking tickets, fines, or notices for a vehicle you no longer own.",
  ],
];

const serviceSituations = [
  [
    "Insurance write-offs",
    "Your insurer declared the vehicle a total loss. The payout didn't cover what you hoped. We'll buy the write-off from you for additional cash on top of what you've already received.",
  ],
  [
    "Failed out-of-province inspection",
    "You bought a vehicle from outside Alberta and it failed the OOP inspection. Repairs would cost more than the car is worth. We buy it as-is, no safety certificate required.",
  ],
  [
    "Inherited vehicles",
    "A family member passed away and left a vehicle you have no use for. We handle the process sensitively and efficiently - with the right documentation we can complete the purchase quickly.",
  ],
  [
    "Long-term non-runners",
    "The car has been sitting for years. You keep meaning to fix it. You never do. We come and remove it from your Calgary property within 24 hours of your call - and pay you the same day.",
  ],
  [
    "End-of-lease write-offs",
    "Your lease ended, the vehicle has damage beyond normal wear, and the buyout or return penalties make no financial sense. We can often offer a better return than the lease company's disposition.",
  ],
  [
    "Fleet vehicle disposal",
    "You're a business with old fleet vehicles - trucks, vans, or commercial units - that need to be disposed of responsibly. We handle bulk scrap car removal across Calgary for businesses of all sizes.",
  ],
];

const serviceAreas = {
  "NW Calgary":
    "Tuscany, Edgemont, Hamptons, Varsity, Dalhousie, Scenic Acres, Bowness, Silver Springs",
  "NE Calgary":
    "Saddle Ridge, Taradale, Martindale, Falconridge, Pineridge, Rundle, Castleridge, Forest Lawn",
  "SW Calgary":
    "Evergreen, Signal Hill, Shawnessy, Lakeview, Killarney, Marda Loop, Glamorgan, Discovery Ridge",
  "SE Calgary":
    "Auburn Bay, Cranston, Mahogany, Seton, McKenzie Towne, New Brighton, Copperfield, Chaparral",
};

const faqs = [
  [
    "How quickly can you remove my scrap car in Calgary?",
    "In most cases, same day. If you call before noon on any day of the week, we can typically arrange pickup before the end of the day across all Calgary quadrants. If same-day isn't possible, next-day service is almost always available. We operate 7 days a week including weekends and most holidays.",
  ],
  [
    "Do I need to be home when you pick up the scrap car?",
    "You need to be present to receive payment and sign the transfer documents - so yes, someone should be there. However, if your schedule is tight, we can work around it. Some customers arrange for a family member or trusted person to be present on their behalf. Contact us to discuss your situation.",
  ],
  [
    "What documents do I need for scrap car removal?",
    "You'll need your Alberta vehicle registration and a valid government-issued photo ID. If the vehicle is registered in someone else's name - an estate situation or inherited vehicle - you may need additional documentation such as a grant of administration or bill of sale. Contact us before we arrive and we'll tell you exactly what to have ready.",
  ],
  [
    "Is scrap car removal in Calgary environmentally safe?",
    "Yes - when done by a licensed operator like Calgary Cars for Cash. We work with certified auto recyclers in Calgary's NE industrial area who comply with Alberta Environment and Protected Areas regulations for vehicle depollution. All fluids are extracted and disposed of through approved channels. The metal is recycled through Canadian steel processing facilities. Nothing goes to landfill that can be recycled.",
  ],
  [
    "Can you remove more than one scrap car at a time?",
    "Yes. We handle multi-vehicle removals for estates, businesses, and property cleanouts. If you have two or more scrap cars at the same Calgary location, contact us to arrange a combined pickup - we'll send the appropriate equipment and offer competitive pricing for the lot.",
  ],
  [
    "What if my scrap car is in a tight space - back alley or small garage?",
    "We deal with this regularly in Calgary's older neighbourhoods where back-alley garages and narrow lanes are common. Our drivers are experienced with tight access situations. Give us the details when you call and we'll confirm whether standard flatbed access works, or whether we need to make alternate arrangements. In most cases, we find a way to get it out.",
  ],
];

function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b5252b]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-[#171a17] sm:text-4xl lg:text-4xl">
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

function QuoteForm() {
  return (
    <LeadForm
      buttonLabel="Get a Cash Offer in Minutes"
      title="Book Free Scrap Car Removal"
    />
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

export default function ScrapCarRemovalCalgaryPage() {
  return (
    <main className="bg-[#f4f1e9] text-[#171a17]">
      <JsonLd data={pageSchema} />
      <SiteHeader />

      <section className="relative overflow-hidden">
        <Image
          src="/images/junk-car-removal-calgary-flatbed.jpeg"
          alt="Tow truck removing a scrap car in Calgary"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,241,233,0.98)_0%,rgba(244,241,233,0.92)_45%,rgba(244,241,233,0.55)_76%,rgba(244,241,233,0.2)_100%)]" />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.54fr)] lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-black text-[#b5252b] shadow-sm ring-1 ring-black/5">
              Scrap Car Removal Calgary
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-[0.98] text-[#171a17] sm:text-5xl lg:text-5xl">
              Free Pickup, Up to $10,000 Cash, Gone Today
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-lg leading-8 text-[#424940] sm:text-xl">
              <p>
                You don't need to figure out how to get rid of your old car. You
                don't need to find a tow truck, locate a scrap yard, or deal
                with Alberta recycling paperwork. <a href="/scrap-car-removal-calgary" className="font-black text-[#b5252b]">Scrap car removal in Calgary</a> {" "} is exactly what we do - we come to you, we load the vehicle, we
                pay you cash on the spot, and we handle everything after that.
              </p>
              <p>
                Calgary Cars for Cash provides free scrap car removal across all
                of Calgary and surrounding communities. We pay between $300 and
                $10,000 depending on your vehicle, and we operate 7 days a week
                with same-day service available in most cases.
              </p>
              <p className="font-black text-[#b5252b]">
                You call. We come. We pay. We remove. That's it.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#b5252b] px-7 py-4 text-base font-black text-white shadow-lg shadow-[#b5252b]/20 hover:bg-[#9f1f25]"
                href="#quote"
              >
                Book Free Scrap Car Removal
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-black text-[#171a17] shadow-sm ring-1 ring-black/10 hover:text-[#b5252b]"
                href="tel:+15876642401"
              >
                Call (587)-664-2401 - Same-day service available
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

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="What Scrap Car Removal Actually Means"
            title="What Scrap Car Removal in Calgary Actually Involves"
          >
            <p>
              A lot of people searching for scrap car removal in Calgary aren't
              sure exactly what happens to their vehicle after it gets towed
              away. It's a fair question - and the answer matters, especially
              with Alberta's environmental regulations around vehicle disposal.
            </p>
            <p className="mt-4">
              Here's the full process, from the moment you call us to the moment
              your vehicle becomes recycled material:
            </p>
          </SectionIntro>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(([title, text]) => (
              <div
                className="rounded-[1.5rem] bg-[#f4f1e9] p-6 ring-1 ring-black/6"
                key={title}
              >
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4d564e]">{text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-center text-base leading-8 text-[#4d564e]">
            When scrap car removal is handled properly, an old vehicle doesn't
            end up in a landfill - it gets disassembled and redirected back into
            the economy. That's good for Alberta's environment, good for the
            secondary parts market, and good for you since you get paid for it.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b5252b]">
              Free Towing Explained
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#171a17] sm:text-4xl lg:text-5xl">
              Why Is Scrap Car Removal Free in Calgary? Here's the Honest Answer
            </h2>
            <ImagePanel
              alt="Scrap Hyundai Sonata ready for free removal in Calgary"
              className="mt-8"
              objectPosition="center 46%"
              src="/images/scrap-hyundai-sonata-calgary.jpeg"
            />
          </div>
          <div className="space-y-5 rounded-[1.75rem] bg-white p-6 text-base leading-8 text-[#4d564e] shadow-sm ring-1 ring-black/6 sm:p-8">
            <p>
              This is the question we get asked the most. If you're removing my
              car for free and paying me on top of that - what's in it for you?
            </p>
            <p>
              The honest answer is that your vehicle has commodity value even
              when it doesn't run. Scrap steel trades on Alberta commodity
              markets daily. Catalytic converters contain platinum, palladium,
              and rhodium - precious metals with real spot market prices.
              Functional parts - alternators, transmissions, suspension
              components - are in constant demand in the used auto parts market
              that serves Calgary's 500,000+ registered vehicles.
            </p>
            <p>
              Your old scrap car is a source of raw materials. We buy it from
              you at fair market value, recover those materials through our
              recycling partners, and the economics work out. You get paid. We
              handle the logistics. The recycler gets raw material. No one in
              that chain loses.
            </p>
            <p>
              That's why <a href="/" className="font-black text-[#f4c542]">scrap car removal in Calgary</a> is genuinely free - not as
              a gimmick, not with a catch, and not with a deduction hidden in the
              fine print. The towing is free. The pickup is free. The paperwork
              is free. The offer we quote is what you receive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#171a17] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c542]">
              Who This Service Is For
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Who Uses Scrap Car Removal in Calgary?
            </h2>
            <p className="mt-5 text-base leading-8 text-white/78 sm:text-lg">
              Almost anyone with an unwanted vehicle. Here are the most common
              situations we deal with across Calgary every week:
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceSituations.map(([title, text]) => (
              <div
                className="rounded-[1.5rem] bg-white p-6 text-[#171a17]"
                key={title}
              >
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4d564e]">{text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-center text-base leading-8 text-white/78">
            Whatever your situation, scrap car removal in Calgary doesn't have to
            be complicated. One call, one visit, one cash payment - and the
            vehicle is gone. We've handled estates, fleet disposals, insurance
            write-offs, and everything in between. There's no scenario we
            haven't seen.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Calgary Service Area"
            title="Scrap Car Removal Across All of Calgary and Surrounding Communities"
          >
            <p>
              We provide scrap car removal across the entire City of Calgary -
              all four quadrants, the city centre, and every community in
              between. There are no zones we don't cover, and no location
              surcharge for any Calgary address.
            </p>
          </SectionIntro>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {Object.entries(serviceAreas).map(([quadrant, areas]) => (
              <div
                className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/6"
                key={quadrant}
              >
                <h3 className="text-2xl font-black text-[#b5252b]">
                  {quadrant}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#4d564e]">{areas}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-5xl space-y-5 text-center text-base leading-8 text-[#4d564e]">
            <p>
              Beyond Calgary's city limits, we provide scrap car removal in
              Airdrie (Rocky View County), Cochrane, Okotoks, High River,
              Strathmore, Chestermere, and most communities within 60 km of
              downtown Calgary. Call us to confirm availability in your specific
              location - there's rarely an area we can't reach.
            </p>
            <p>
              Calgary's NE industrial corridor - along Barlow Trail NE, 36
              Street NE, and the Stoney Trail ring road - is home to the
              majority of Alberta's licensed auto recyclers and scrap yards. We
              work directly with facilities in this corridor to ensure your
              vehicle is processed efficiently and compliantly, with full
              chain-of-custody documentation available on request.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="FAQ"
            title="Scrap Car Removal in Calgary - Your Questions Answered"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <div
                className="rounded-[1.5rem] bg-[#f4f1e9] p-6 ring-1 ring-black/6"
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
              Book Your Free Scrap Car Removal in Calgary - Get Paid Today
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-white/88 sm:text-lg">
              <p>
                Getting rid of a scrap car in Calgary doesn't need to be
                difficult, expensive, or time-consuming. Calgary Cars for Cash
                makes it as simple as one phone call - and pays you up to
                $10,000 for the privilege of taking it off your hands.
              </p>
              <p>
                We cover all of Calgary and surrounding communities. We operate
                7 days a week. We pay cash on the spot. And we take care of
                everything - the towing, the paperwork, the recycling, and the
                transfer of liability. By the time we drive away, the car is gone
                and the money is yours.
              </p>
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-white p-6 text-[#171a17] shadow-2xl shadow-black/20">
            <a
              className="inline-flex w-full justify-center rounded-full bg-[#171a17] px-7 py-4 text-center text-base font-black text-white hover:bg-[#b5252b]"
              href="/cash-for-junk-cars-calgary"
            >
              Book Free Scrap Car Removal - Get a Cash Offer in Minutes
            </a>
            <a
              className="mt-3 inline-flex w-full justify-center rounded-full bg-[#f4c542] px-7 py-4 text-center text-base font-black text-[#171a17] hover:bg-[#f4f1e9]"
              href="tel:+15876642401"
            >
              Call: (587)-664-2401 - Same-day service available, 7 days a week
            </a>
          </div>
        </div>
      </section>

      <SiteFooter tagline="Scrap Car Removal Calgary - Free Pickup, Up to $10,000 Cash, Gone Today" />
    </main>
  );
}
