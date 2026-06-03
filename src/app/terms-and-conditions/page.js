import JsonLd from "../components/JsonLd";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Terms & Conditions | Calgary Cars for Cash",
  description:
    "The terms that apply when you sell your car to Calgary Cars for Cash. Clear, plain language - how quotes, pickup, payment, and ownership work.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Calgary Cars for Cash",
    description:
      "The terms that apply when you sell your car to Calgary Cars for Cash. Clear, plain language - how quotes, pickup, payment, and ownership work.",
    url: "https://www.calgarycarsforcash.ca/terms-and-conditions",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | Calgary Cars for Cash",
    description:
      "The terms that apply when you sell your car to Calgary Cars for Cash. Clear, plain language - how quotes, pickup, payment, and ownership work.",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.calgarycarsforcash.ca/terms-and-conditions#webpage",
      url: "https://www.calgarycarsforcash.ca/terms-and-conditions",
      name: "Terms & Conditions | Calgary Cars for Cash",
      description:
        "The terms that apply when you sell your car to Calgary Cars for Cash. Clear, plain language - how quotes, pickup, payment, and ownership work.",
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
      "@id": "https://www.calgarycarsforcash.ca/terms-and-conditions#breadcrumb",
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
          name: "Terms & Conditions",
          item: "https://www.calgarycarsforcash.ca/terms-and-conditions",
        },
      ],
    },
  ],
};

const vehicleExamples = [
  "You said the car runs and it doesn't",
  "You said it had all four wheels and it's missing two",
  "The catalytic converter, engine, or transmission was removed before pickup",
  "The vehicle has significantly more damage than described",
  "The VIN doesn't match the vehicle you said you were selling",
];

const paymentMethods = [
  "Personal cheque",
  "Money order",
  "Cryptocurrency",
  "\"We'll pay you when we get back to the yard\" arrangements",
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <SiteHeader />
      <main className="bg-[#f4f1e9] px-5 py-10 text-[#171a17] sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <section className="rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b5252b]">
              Terms & Conditions - Calgary Cars For Cash
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Terms & Conditions
            </h1>
            <p className="mt-4 text-sm font-bold text-[#4d564e]">
              Last updated: 6-2-2026
            </p>
            <p className="mt-6 text-base leading-8 text-[#4d564e]">
              This page explains the rules of how we do business together - what
              you can expect from us, and what we expect from you. We've
              written it in plain English because we believe contracts shouldn't
              need a lawyer to read. If something here isn't clear, call us
              before you accept an offer and we'll walk you through it.
            </p>
            <p className="mt-4 text-base leading-8 text-[#4d564e]">
              By using calgarycarsforcash.ca, requesting a quote, or selling us
              your vehicle, you agree to the terms below.
            </p>
          </section>

          <div className="mt-8 grid gap-6">
            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">1. Who We Are</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                These terms apply to Calgary Cars for Cash, a locally owned car
                buying service operating out of Calgary, Alberta. Throughout
                this document, &quot;we,&quot; &quot;us,&quot; and
                &quot;our&quot; refer to Calgary Cars for Cash. &quot;You&quot;
                refers to anyone using our website or selling us a vehicle.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                Our contact details are at the bottom of this page.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">2. Our Quote - What It Means and What It Doesn't</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                When you request a quote - by phone, online form, or text - we'll
                give you a price for your vehicle based on the details you
                provide.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                The quote is real, but it has conditions. Our quote assumes that
                the information you give us is accurate. Year, make, model,
                mileage, condition, whether it runs, whether it has all four
                wheels, whether the engine and transmission are present - all of
                this affects the price. If the vehicle matches what you
                described, the quote you receive on the phone is the cash you'll
                get on pickup. Full stop.
              </p>
              <h3 className="mt-6 text-lg font-black">When a quote can change</h3>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                We will only adjust an offer at pickup if the vehicle is
                materially different from what you described. For example:
              </p>
              <ul className="mt-4 grid gap-3 text-base leading-8 text-[#4d564e]">
                {vehicleExamples.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                In these cases, we'll explain the difference clearly, show you
                what changed the offer, and give you the choice to accept the
                new amount or send us away. We don't drop offers to squeeze more
                money out of you. If we ever have to revise a quote, you'll know
                exactly why.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                Quotes are valid for 7 days. Scrap metal prices, parts demand,
                and fuel costs all shift, so if you wait longer than a week to
                accept, we may need to re-quote.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">3. Vehicle Ownership and Documentation</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                To sell us a vehicle, you must be the legal owner - or someone
                authorised in writing to act on the owner's behalf.
              </p>
              <h3 className="mt-6 text-lg font-black">What we need from you at pickup</h3>
              <ul className="mt-4 grid gap-3 text-base leading-8 text-[#4d564e]">
                <li>- Government-issued photo ID (driver's licence or Alberta ID card)</li>
                <li>- Vehicle registration in your name (or signed authorisation if you're not the registered owner)</li>
                <li>- Vehicle title or proof of ownership</li>
              </ul>
              <h3 className="mt-6 text-lg font-black">What we'll handle</h3>
              <ul className="mt-4 grid gap-3 text-base leading-8 text-[#4d564e]">
                <li>- Title transfer paperwork</li>
                <li>- Vehicle deregistration with Alberta Transportation</li>
                <li>- Removal of the vehicle from your insurance and registration obligations</li>
              </ul>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                If your vehicle has a lien, a bill of sale issue, an unpaid
                parking ticket, or any other ownership complication, tell us
                when you call. We deal with these situations all the time and
                can usually find a way through them. What we can't do is pick up
                a vehicle with hidden ownership problems and find out later -
                that protects nobody.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">4. Free Towing - The Real Story</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                Free towing is included with every vehicle we purchase, anywhere
                in Calgary and within 60 km of downtown Calgary. There are no
                fees, no deductions, no asterisks.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                However:
              </p>
              <ul className="mt-4 grid gap-3 text-base leading-8 text-[#4d564e]">
                <li>- The vehicle must be accessible to a standard flatbed tow truck.</li>
                <li>- If your car is buried in snow, blocked by other vehicles, parked in a tight underground garage, or inside a structure that requires special equipment, let us know in advance so we can plan accordingly.</li>
                <li>- If the pickup location is not accessible and we can't safely tow the vehicle, we may need to reschedule or - in rare cases - adjust the offer to cover specialised towing.</li>
                <li>- We tow only the vehicle you sold us. Personal belongings inside the vehicle are your responsibility (see Section 6).</li>
              </ul>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                If you're not sure your situation works, just call. A 30-second
                conversation prevents almost every pickup problem we've ever
                seen.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">5. Payment - Cash on the Spot</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                We pay in Canadian cash at the time of pickup. Our driver brings
                the agreed amount and hands it to you before the vehicle is
                loaded onto the tow truck.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                If you prefer Interac e-Transfer, let us know in advance and
                we'll arrange it. E-transfers are confirmed before the vehicle
                leaves your property.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                We do not pay by:
              </p>
              <ul className="mt-4 grid gap-3 text-base leading-8 text-[#4d564e]">
                {paymentMethods.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">6. Personal Belongings - Empty the Car Before We Arrive</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                We strongly recommend removing all personal belongings from your
                vehicle before our driver arrives. This includes garage door
                openers, phone chargers, sunglasses, documents, trunk contents,
                and anything attached or hidden behind panels.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                Once a vehicle is in our possession, we cannot retrieve items
                left inside. Vehicles often go directly to recycling or salvage
                operations after pickup, and items left behind are typically
                processed along with the vehicle. We aren't able to recover
                them, and we're not responsible for their loss.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">7. Cancellation and Changes</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                Before pickup: You can cancel or reschedule any pickup with no
                penalty. Just call or text us.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                At pickup: If our driver has arrived and you decide not to sell,
                that's your right - no purchase is final until the vehicle is
                loaded and payment is exchanged.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                After pickup: Once the vehicle is loaded onto our truck and
                payment has been made, the sale is final.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">8. Transfer of Liability</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                The moment our driver loads your vehicle and pays you, full
                ownership and legal responsibility for that vehicle transfers to
                us. From that point forward you are not responsible for future
                incidents, damage, or liability involving the vehicle.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">9. Our Website - How You Can Use It</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                Calgarycarsforcash.ca is provided to help you get information,
                request a quote, and contact us.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                You may browse the site freely, use our quote form for genuine
                enquiries, and share our content with proper attribution.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                You may not use automated tools to harvest data from our site,
                submit fake quote requests, attempt unauthorised access, copy
                our content for competitors, or use our brand name, logo, or
                trademarks without written permission.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">10. Accuracy of Information</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                We do our best to make sure the information on calgarycarsforcash.ca
                is accurate and current. Quoted price ranges, service areas,
                pickup times, and vehicle types are based on our typical
                operations - but they are not guarantees.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">11. Limitations of Our Responsibility</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                We stand behind every transaction we complete, but there are
                limits to what we can be held responsible for. Information
                accuracy, third-party services, force majeure, and indirect
                losses are all limited as described in the terms you provided.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">12. Disputes - How We Handle Them</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                If you have a complaint or concern about anything we've done,
                please contact us directly first. Most problems can be resolved
                with a phone call.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                These terms are governed by the laws of the Province of Alberta
                and the laws of Canada. Any legal action will be handled in the
                courts of Alberta.
              </p>
            </section>

            <section className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/6 sm:p-8">
              <h2 className="text-2xl font-black">13. Changes to These Terms</h2>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                We may update these Terms & Conditions from time to time. The
                &quot;Last updated&quot; date at the top of this page will show
                when changes were made.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4d564e]">
                If you've already received a quote or scheduled a pickup, the
                version of the terms in effect on the day you accepted the quote
                applies to your transaction.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter tagline="Terms & Conditions | Calgary Cars for Cash" />
    </>
  );
}
