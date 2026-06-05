import Image from "next/image";
import JsonLd from "./components/JsonLd";
import LeadForm from "./components/LeadForm";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export const metadata = {
  title: "Cash for Cars Calgary | $300–$10,000 Paid, Free Towing",
  description:
    "Get $300 to $10,000 cash for cars Calgary - junk, scrap, or unwanted. Free towing, same-day pickup, paid on the spot. Call now (587)-664-2401",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cash for Cars Calgary | $300–$10,000 Paid, Free Towing",
    description:
      "Get $300 to $10,000 cash for cars Calgary - junk, scrap, or unwanted. Free towing, same-day pickup, paid on the spot. Call now (587)-664-2401",
    url: "https://www.calgarycarsforcash.ca",
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
    title: "Cash for Cars Calgary | $300–$10,000 Paid, Free Towing",
    description:
      "Get $300 to $10,000 cash for cars Calgary - junk, scrap, or unwanted. Free towing, same-day pickup, paid on the spot. Call now (587)-664-2401",
    images: ["/images/calgary-cash-for-cars-logo.png"],
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.calgarycarsforcash.ca/#webpage",
      url: "https://www.calgarycarsforcash.ca/",
      name: "Cash for Cars Calgary | $300–$10,000 Paid, Free Towing",
      description:
        "Get $300 to $10,000 cash for cars Calgary - junk, scrap, or unwanted. Free towing, same-day pickup, paid on the spot. Call now (587)-664-2401",
      isPartOf: {
        "@id": "https://www.calgarycarsforcash.ca/#website",
      },
      about: {
        "@id": "https://www.calgarycarsforcash.ca/#business",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.calgarycarsforcash.ca/images/cash-for-cars-calgary-pickup-bmw.jpeg",
      },
      inLanguage: "en-CA",
    },
    {
      "@type": "Service",
      "@id": "https://www.calgarycarsforcash.ca/#cash-for-cars-service",
      name: "Cash for Cars Calgary",
      serviceType: "Cash for cars, junk car buying, scrap car removal",
      provider: {
        "@id": "https://www.calgarycarsforcash.ca/#business",
      },
      areaServed: [
        "Calgary",
        "Airdrie",
        "Cochrane",
        "Okotoks",
        "Chestermere",
        "Strathmore",
      ],
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
  ],
};

const trustItems = [
  "Free Towing - Always",
  "Cash Paid on the Spot",
  "All Conditions Accepted",
  "Serving All Calgary Quadrants",
];

const steps = [
  [
    "Step 1",
    "Get Your Free Quote",
    "Call us or fill out the form with your vehicle details - year, make, model, and condition. We give you a real offer in minutes, with no obligation and no pressure.",
  ],
  [
    "Step 2",
    "Pick Your Pickup Time",
    "You choose when works for you - morning, afternoon, or evening. We operate 7 days a week across all Calgary neighbourhoods and surrounding communities.",
  ],
  [
    "Step 3",
    "Get Paid on the Spot",
    "Our driver arrives, verifies the vehicle, hands you cash - and tows it away for free. The whole process takes less than 30 minutes from arrival to payment.",
  ],
];

const vehicleTypes = [
  "Cars & sedans (any year, any make)",
  "Trucks & pickup trucks",
  "SUVs & crossovers",
  "Vans & minivans",
  "Motorcycles & ATVs",
  "Commercial vehicles",
];

const conditions = [
  "Fully running vehicles",
  "Non-running / won't start",
  "Blown engines or seized transmissions",
  "Accident-damaged & insurance write-offs",
  "Flood or fire damaged vehicles",
  "Stripped, missing parts, or rusted through",
  "Old clunkers with no safety certificate",
];

const removalReasons = [
  "The car hasn't run in years and you can't justify repairing it",
  "The repair estimate is higher than the vehicle's market value",
  "The car failed its Alberta out-of-province inspection",
  "Your insurance lapsed and you just want it gone",
  "You inherited an old vehicle and have no use for it",
  "The car was declared a total loss by your insurance company",
  "The vehicle is taking up a parking space you need",
];

const serviceAreas = {
  "NW Calgary": [
    "Tuscany",
    "Scenic Acres",
    "Varsity",
    "Brentwood",
    "Dalhousie",
    "Edgemont",
    "Hamptons",
    "Ranchlands",
    "Silver Springs",
    "Bowness",
  ],
  "NE Calgary": [
    "Martindale",
    "Taradale",
    "Saddle Ridge",
    "Falconridge",
    "Pineridge",
    "Rundle",
    "Whitehorn",
    "Monterey Park",
    "Castleridge",
    "Forest Lawn",
  ],
  "SW Calgary": [
    "Evergreen",
    "Shawnessy",
    "Signal Hill",
    "Glamorgan",
    "Lakeview",
    "Killarney",
    "Marda Loop",
    "Rutland Park",
    "Springbank Hill",
    "Discovery Ridge",
  ],
  "SE Calgary": [
    "Auburn Bay",
    "Cranston",
    "Mahogany",
    "Seton",
    "McKenzie Towne",
    "New Brighton",
    "Copperfield",
    "Legacy",
    "Chaparral",
    "Douglasdale",
  ],
};

const valueFactors = [
  [
    "Make & model",
    "Trucks, SUVs, and popular North American makes like Ford, GM, and Dodge hold higher scrap and parts value in Alberta's market.",
  ],
  [
    "Year",
    "Newer vehicles typically have more valuable parts - catalytic converters, sensors, body panels. Older vehicles are priced mainly on scrap weight.",
  ],
  [
    "Condition",
    "Running vehicles or those with low damage fetch more. Non-running vehicles are still valuable - especially if the engine, transmission, or body panels are intact.",
  ],
  [
    "Scrap metal weight",
    "Heavier vehicles (trucks, vans, SUVs) are worth more by weight. Current Alberta scrap steel prices influence the base offer on all vehicles.",
  ],
  [
    "Demand for parts",
    "Vehicles with high-demand components - catalytic converters, alloy wheels, functional airbags - command higher offers regardless of condition.",
  ],
  [
    "Location in Calgary",
    "We cover all Calgary areas at no extra cost - NW, NE, SW, SE, and surrounding cities like Airdrie and Cochrane.",
  ],
];

const reasonsToChoose = [
  [
    "We Pay More",
    "Our offers are based on real market data - current scrap metal prices, parts demand, and actual vehicle weight. We don't use low-ball formulas designed to protect our margins at your expense.",
  ],
  [
    "We're Fast",
    "Same-day pickup is available 7 days a week across all Calgary quadrants and surrounding communities. Most customers are paid within hours of calling us.",
  ],
  [
    "We're Honest",
    "The quote we give over the phone is the amount we pay at pickup. We don't drop the offer when we arrive. No surprises, no excuses, no pressure.",
  ],
  [
    "Towing is Always Free",
    "We cover Calgary and surrounding areas at zero towing cost to you. There's no deduction from your offer - what we quote is what you receive, with free vehicle removal included.",
  ],
  [
    "We Handle the Paperwork",
    "We manage the title transfer and Alberta-required documentation for vehicle disposal. Once the car leaves your driveway, your legal liability ends - properly and permanently.",
  ],
  [
    "We're Local",
    "We're a Calgary-based business. We know the city, we know the communities, and we're accountable to the people we serve. Your money stays in Calgary.",
  ],
];

const nextSteps = [
  "Call us or fill out the quote form - takes 2 minutes",
  "Get a real cash offer with no obligation",
  "Pick a pickup time that works for you - including same-day",
  "We arrive, hand you cash, and tow the car away for free",
];

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

function ImageCard({
  alt,
  imageClassName = "object-cover",
  innerClassName = "relative aspect-[4/3]",
  className = "",
  objectPosition = "center",
  src = "/images/cash-for-cars-calgary-pickup-bmw.jpeg",
}) {
  return (
    <figure
      className={` overflow-hidden rounded-[1.75rem] bg-white shadow-xl shadow-black/10 ring-1 ring-black/6 ${className}`}
    >
      <div className={innerClassName}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
          className={imageClassName}
          style={{ objectPosition }}
        />
      </div>
    </figure>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f4f1e9] text-[#171a17]">
      <JsonLd data={homePageSchema} />
      <section className="relative overflow-hidden">
        <Image
          src="/images/cash-for-cars-calgary-pickup-bmw.jpeg"
          alt="Cash for cars pickup in Calgary"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[48%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,241,233,0.98)_0%,rgba(244,241,233,0.92)_45%,rgba(244,241,233,0.52)_76%,rgba(244,241,233,0.18)_100%)]" />

        <div className="relative z-20">
          <SiteHeader />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-7xl flex-col px-5 sm:px-8 lg:px-10">
          <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.54fr)] lg:py-14">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-black text-[#b5252b] shadow-sm ring-1 ring-black/5">
                Cash for Cars Calgary
              </p>
              <h1
                className="max-w-4xl text-4xl font-black leading-[0.98] text-[#171a17] sm:text-5xl lg:text-6xl"
              >
                Get Paid Today for Cash for Cars Calgary — We Tow for Free
              </h1>
              <div
                className="mt-6 max-w-2xl text-lg leading-8 text-[#424940] sm:text-xl"
              >
                <p>
                  Selling your car in Calgary should put money in your pocket -
                  not stress on your plate. At Calgary Cars for Cash, we buy
                  junk cars, scrap cars, and unwanted vehicles of every make,
                  model, and condition.
                </p>
              </div>

              <div
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  className="inline-flex items-center justify-center rounded-full bg-[#b5252b] px-7 py-4 text-base font-black text-white shadow-lg shadow-[#b5252b]/20 hover:bg-[#9f1f25]"
                  href="#quote"
                >
                  Get My Free Cash Offer
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-black text-[#171a17] shadow-sm ring-1 ring-black/10 hover:text-[#b5252b]"
                  href="tel:+15876642401"
                >
                  Call (587)-664-2401 - We Answer 7 Days a Week
                </a>
              </div>
            </div>

            <LeadForm />
          </div>

          <div className="grid gap-3 pb-7 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                className=" rounded-2xl bg-white/90 px-4 py-3 text-center text-sm font-black shadow-sm ring-1 ring-black/5"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className=" mx-auto max-w-7xl rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-black/6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
            <div className="grid gap-4">
              <p className="text-2xl font-black leading-tight text-[#b5252b]">
                Most Trusted Cash For Cars Calgary Service - Local,Fast &amp;
                Honest
              </p>
              <p className="text-base leading-8 text-[#4d564e]">
                Whether you have a rusted-out clunker sitting in your NW
                driveway, a written-off truck in Airdrie, or a seized-engine SUV
                parked on your SE Calgary street, we come to you. No dealership
                red tape. No lowball offers. Just honest cash for your vehicle,
                when you need it.
              </p>
            </div>
            <ImageCard
              alt="Unwanted SUV accepted for cash in Calgary"
              className="shadow-none"
              objectPosition="center 48%"
              src="/images/unwanted-suv-calgary.jpeg"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className=" overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-black/10 ring-1 ring-black/6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div
                className="bg-[#b5252b] p-7 text-white sm:p-10 lg:p-12"
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-white/75">
                  Who We Are
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  Calgary's Trusted Cash for Cars Service - Local, Fast, and Honest
                </h2>
                <div className="mt-8 grid gap-3">
                  {[
                    "Locally owned and operated",
                    "Real person, real offer",
                    "Cash at pickup",
                    "Calgary and surrounding region",
                  ].map((item) => (
                    <div
                      className=" rounded-2xl bg-white/12 px-4 py-3 text-sm font-black ring-1 ring-white/15"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-7 sm:p-10 lg:p-12">
                <div
                  className="max-w-5xl space-y-6 text-base leading-8 text-[#4d564e]"
                >
                  <p>
                    Calgary is a city built on hard work and straight dealing -
                    and that's exactly how we operate. Calgary Cars for Cash is
                    a locally owned and operated{" "}
                    <a className="font-black text-[#b5252b]" href="/">
                      car buying service
                    </a>{" "}
                    based right here in Calgary, Alberta. We've helped homeowners, renters,
                    and businesses across every neighbourhood - from Beltline
                    and Bridgeland to Evergreen, Tuscany, and Forest Lawn - turn
                    old, damaged, and unwanted vehicles into real money without
                    the hassle.
                  </p>
                  <p>
                    We are not a middleman, a broker, or an automated online
                    form that sends your information to three different buyers.
                    When you call Calgary Cars for Cash, you speak to a real
                    person. When we make you an offer, it's a real number. When
                    our driver shows up, they bring cash - not a cheque, not an
                    e-transfer promise, not a coupon toward a future service.
                  </p>
                  <p>
                    We buy cars in every condition across all of Calgary and the
                    surrounding region - including Airdrie, Cochrane, Okotoks,
                    Chestermere, and Strathmore. Whether your vehicle runs,
                    limps, or hasn't moved in two years, we want it, and we'll
                    pay you fairly for it today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="bg-white px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="How It Works"
            title="How to Get Cash for Your Car in Calgary - 3 Simple Steps"
          >
            <p>
              We've removed every friction point from the process. Here's
              exactly how it works:
            </p>
          </SectionIntro>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {steps.map(([step, title, text]) => (
              <div
                className=" rounded-[1.5rem] bg-[#f4f1e9] p-6 ring-1 ring-black/6"
                key={step}
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b5252b]">
                  {step}
                </p>
                <h3 className="mt-3 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#4d564e]">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <p
            className="mx-auto mt-10 max-w-4xl text-center text-base leading-8 text-[#4d564e]"
          >
            There are no hidden fees deducted at pickup, no last-minute
            renegotiation, and no paperwork headaches. We handle the title
            transfer and vehicle deregistration in accordance with Alberta
            Transportation regulations so you don't have to worry about
            liability after the car leaves your driveway.
          </p>
        </div>
      </section>

      <section
        id="what-we-buy"
        className="px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="What We Buy"
            title="We Buy Junk Cars, Scrap Cars, and Every Vehicle in Between"
          >
            <p>
              Not sure if your vehicle qualifies? It does. We buy everything -
              running or completely dead. Here's what we accept:
            </p>
          </SectionIntro>
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.36fr_0.64fr]">
            <ImageCard
              alt="Used Volkswagen car accepted for cash in Calgary"
              objectPosition="center 52%"
              src="/images/used-volkswagen-car-calgary.jpeg"
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <div
                className=" rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/6"
              >
                <h3 className="mb-5 text-2xl font-black">
                  Vehicle Types We Buy
                </h3>
                <CheckList items={vehicleTypes} />
              </div>
              <div
                className=" rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/6"
              >
                <h3 className="mb-5 text-2xl font-black">
                  Conditions We Accept
                </h3>
                <CheckList items={conditions} />
              </div>
            </div>
          </div>
          <p
            className="mx-auto mt-10 max-w-4xl text-center text-base leading-8 text-[#4d564e]"
          >
            We pay based on the real market value of your vehicle - taking into
            account its weight in scrap metal, salvageable parts, make and model
            demand, and current Alberta scrap metal prices. A 2015 Ford F-150
            with a bad engine is worth more than a 2003 Civic in the same shape
            - and we price accordingly. You'll always know exactly what you're
            getting before we arrive.
          </p>
        </div>
      </section>

      <section
        className="bg-[#171a17] px-5 py-20 text-white sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c542]">
              Junk Car Removal Calgary
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Junk Car Removal Calgary and Scrap Car Removal Calgary
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-2">
          <div
            className=" rounded-[1.75rem] bg-white/7 p-6 ring-1 ring-white/10 sm:p-8"
          >
            <ImageCard
              alt="Accident damaged van ready for junk car removal in Calgary"
              className="mb-7 text-[#171a17]"
              objectPosition="center 40%"
              src="/images/accident-damaged-van-calgary.jpeg"
            />
            <h3 className="text-3xl font-black leading-tight sm:text-4xl">
              Junk Car Removal Calgary - We Come to You, Anywhere in the City
            </h3>
            <div className="mt-6 space-y-5 text-base leading-8 text-white/78">
              <p>
                Got a junk car taking up space in your garage, driveway, back
                alley, or yard? Junk car removal in Calgary is one of the most
                searched services for good reason - nobody wants to look at a
                dead vehicle every morning, and most people have no idea how to
                get rid of one legally and profitably.
              </p>
              <p>
                Calgary Cars for Cash handles every {" "}
                <a className="font-black text-[#f4c542]" href="/cash-for-junk-cars-calgary">
                  junk car removal
                </a>{" "} from start
                to finish. You don't rent a trailer, you don't call a tow
                company separately, and you don't pay a disposal fee. We bring
                our flatbed tow truck to your location anywhere in Calgary - NW,
                NE, SW, SE, and the city centre - and we take the junk car off
                your hands at no cost to you. In fact, we pay you.
              </p>
            </div>
            <div
              className=" mt-7 rounded-2xl bg-white p-5 text-[#171a17]"
            >
              <h3 className="mb-4 text-xl font-black">
                Common reasons Calgary residents call us for junk car removal:
              </h3>
              <CheckList items={removalReasons} />
            </div>
            <p className="mt-6 text-base leading-8 text-white/78">
              Whatever the reason, we show up without judgment and leave you
              with cash in hand. Junk car removal in Calgary shouldn't cost you
              anything - and with us, it never does.
            </p>
          </div>

          <div
            className=" rounded-[1.75rem] bg-[#f4c542] p-6 text-[#171a17] sm:p-8"
          >
            <ImageCard
              alt="Stored Ford SUV ready for scrap car removal in Calgary"
              className="mb-7"
              objectPosition="center 46%"
              src="/images/stored-ford-suv-scrap-calgary.jpeg"
            />
            <h3 className="text-3xl font-black leading-tight sm:text-4xl">
              Scrap Car Removal Calgary - We Recycle Responsibly, You Get Paid
            </h3>
            <div className="mt-6 space-y-5 text-base leading-8">
              <p>
                When a vehicle reaches the end of its road, scrap car removal is
                the most responsible and profitable way to deal with it. Calgary
                has a robust auto recycling infrastructure - certified auto
                wreckers and scrap yards operate throughout the city, many
                located in the industrial areas of NE Calgary along Barlow Trail
                and 36 Street NE - and we work directly within that ecosystem.
              </p>
              <p>
                Calgary Cars for Cash facilitates environmentally compliant {" "}
                <a className="font-black text-[#b5252b]" href="/scrap-car-removal-calgary">
                  scrap car removal in Calgary
                </a>{" "} by ensuring all hazardous fluids -
                engine oil, transmission fluid, coolant, brake fluid, and
                refrigerant - are properly drained and disposed of before the
                vehicle enters the recycling stream. Scrap metal from vehicles
                is one of Alberta's most actively recycled materials, and we
                ensure your car is processed in line with both City of Calgary
                bylaws and provincial environmental standards.
              </p>
              <p>
                When you choose us for scrap car removal in Calgary, your
                vehicle doesn't just disappear - it gets a second life as
                recycled steel, aluminum, copper, and salvaged parts that go
                back into the automotive supply chain. And you get paid cash on
                the spot for making that happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="service-area"
        className="px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Calgary Service Area"
            title="We Buy Cars Across All of Calgary - Every Neighbourhood, Every Quadrant"
          >
            <p>
              Calgary is Canada's fourth-largest city and home to over 1.3
              million people spread across four quadrants and more than 200
              distinct communities. We provide cash for cars service across the
              entire city - no zone restrictions, no extra charges based on
              location, and no minimum vehicle value.
            </p>
          </SectionIntro>
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
            <ImageCard
              alt="Calgary service area map"
              className="h-full min-h-[520px] p-4"
              imageClassName="object-contain"
              innerClassName="relative h-full min-h-[488px]"
              objectPosition="center"
              src="/images/calgary-map.jpg"
            />
            <div className="grid gap-5 lg:grid-cols-4">
              {Object.entries(serviceAreas).map(([quadrant, areas]) => (
                <div
                  className=" rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/6"
                  key={quadrant}
                >
                  <h3 className="text-2xl font-black text-[#b5252b]">
                    {quadrant}
                  </h3>
                  <div className="mt-5 grid gap-2">
                    {areas.map((area) => (
                      <p
                        className="rounded-xl bg-[#f4f1e9] px-3 py-2 text-sm font-bold text-[#3f473f]"
                        key={area}
                      >
                        {area}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="mx-auto mt-10 max-w-5xl space-y-5 text-center text-base leading-8 text-[#4d564e]"
          >
            <p>
              We also serve the broader Calgary metro area - including Airdrie
              to the north, Cochrane to the northwest, Okotoks and High River to
              the south, Strathmore to the east, and Chestermere along the
              Chestermere Lake corridor. If you're within 60 km of downtown
              Calgary, we'll come to you at no charge.
            </p>
            <p>
              Calgary sits within the foothills of the Rocky Mountains along the
              Bow and Elbow Rivers - a geography that means harsh winters, road
              salt exposure, and UV degradation that accelerates rust and
              mechanical wear on vehicles. Many Calgary residents find their
              cars deteriorate faster than in milder climates. That's precisely
              why the demand for scrap car removal and cash for junk cars in
              Calgary is consistently high year-round - and why having a
              reliable local buyer matters.
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-white px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="How Much Will I Get?"
            title="How Much Is My Junk Car or Scrap Car Worth in Calgary?"
          >
            <p>
              This is the most common question we get - and it deserves a
              straight answer. In Calgary, a junk car or scrap car is typically
              worth between $200 and $10,000 depending on several factors.
              Here's exactly what determines your vehicle's value:
            </p>
          </SectionIntro>
          <div className="mt-12">
            <div
              className=" overflow-hidden rounded-[1.5rem] bg-[#f4f1e9] ring-1 ring-black/8"
            >
              <div className="grid bg-[#171a17] text-sm font-black uppercase tracking-[0.14em] text-white md:grid-cols-[0.35fr_0.65fr]">
                <div className="p-4">Factor</div>
                <div className="p-4">How it affects your offer</div>
              </div>
              {valueFactors.map(([factor, text]) => (
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
          </div>
          <p
            className="mx-auto mt-10 max-w-4xl text-center text-base leading-8 text-[#4d564e]"
          >
            The best way to know your exact number is to call us - we'll give
            you a real quote in under 5 minutes based on your specific vehicle.
            There's no obligation, and our offers don't expire while we're
            talking.
          </p>
        </div>
      </section>

      <section
        id="why-choose"
        className="px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Why Choose Calgary Cars for Cash"
            title="Why Calgary Residents Choose Us Over the Competition"
          >
            <p>
              There are a handful of cash for cars buyers in Calgary - so why do
              customers keep calling us? It comes down to a few things that
              aren't negotiable for us:
            </p>
          </SectionIntro>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasonsToChoose.map(([title, text]) => (
              <div
                className=" rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/6"
                key={title}
              >
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4d564e]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-[#b5252b] px-5 py-20 text-white sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_0.6fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Ready to Get Cash for Your Car in Calgary? Call Us Now.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-white/88 sm:text-lg">
              <p>
                Turn your junk car, scrap car, or unwanted vehicle into cash
                today. Calgary Cars for Cash is available <a className="font-black text-[#f4c542]" href="/contact">
                7 days a week
              </a>{" "} across
                all of Calgary and the surrounding region. Getting rid of your
                vehicle has never been simpler - or more profitable.
              </p>
              <p>Here's what happens next:</p>
            </div>
            <ul className="mt-6 grid gap-3">
              {nextSteps.map((item) => (
                <li className="flex gap-3 text-base leading-7" key={item}>
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-white text-xs font-black text-[#b5252b]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg font-black">
              No waiting. No runaround. No fees. Just cash for your car in
              Calgary, done right.
            </p>
          </div>
          <div
            className=" rounded-[1.75rem] bg-white p-6 text-[#171a17] shadow-2xl shadow-black/20"
          >
            <a
              className="inline-flex w-full justify-center rounded-full bg-[#171a17] px-7 py-4 text-base font-black text-white hover:bg-[#b5252b]"
              href="/"
            >
              Get My Free Cash Offer Now →
            </a>
            <a
              className="mt-3 inline-flex w-full justify-center rounded-full bg-[#f4c542] px-7 py-4 text-base font-black text-[#171a17] hover:bg-[#f4f1e9]"
              href="tel:+15876642401"
            >
              Call: (587)-664-2401 - We Answer 7 Days a Week
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
