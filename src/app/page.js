import Image from "next/image";

const services = [
  "Junk cars",
  "Scrap vehicles",
  "Damaged cars",
  "Non-runners",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f1e9] text-[#171a17]">
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/coming-soon-hero.png"
          alt="Tow truck picking up a car in Calgary"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,241,233,0.98)_0%,rgba(244,241,233,0.9)_38%,rgba(244,241,233,0.34)_67%,rgba(244,241,233,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f4f1e9] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
          <nav className="flex items-center justify-between gap-4">
            <a className="flex min-w-0 items-center gap-3" href="/">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#b5252b] text-lg font-black text-white shadow-sm">
                C
              </span>
              <span className="truncate text-base font-black uppercase sm:text-lg">
                Calgary Cars for Cash
              </span>
            </a>
            <a
              className="inline-flex rounded-full bg-[#171a17] px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-[#b5252b]"
              href="tel:+15876642401"
            >
              Call Now
            </a>
          </nav>

          <div className="grid flex-1 items-center py-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.56fr)] lg:py-16">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-black text-[#b5252b] shadow-sm ring-1 ring-black/5">
                Launching soon in Calgary
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.93] text-[#171a17] sm:text-6xl lg:text-7xl">
                Cash for cars Calgary.
              </h1>
              <p className="mt-4 max-w-3xl text-3xl font-black leading-tight text-[#b5252b] sm:text-4xl lg:text-5xl">
                Full website coming soon.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#424940] sm:text-xl">
                Calgary Cars for Cash is getting ready to buy junk, scrap,
                damaged, and non-running vehicles with fast quotes, fair offers,
                and towing arranged across Calgary.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-[#b5252b] px-7 py-4 text-base font-black text-white shadow-lg shadow-[#b5252b]/20 transition hover:bg-[#9f1f25]"
                  href="tel:+15876642401"
                >
                  Call (587) 664-2401
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-black text-[#171a17] shadow-sm ring-1 ring-black/10 transition hover:text-[#b5252b]"
                  href="mailto:info@calgarycarsforcash.ca"
                >
                  Email for Updates
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {services.map((service) => (
                  <div
                    className="rounded-2xl bg-white/88 px-4 py-3 text-center text-sm font-black shadow-sm ring-1 ring-black/5"
                    key={service}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <aside className="mt-10 max-w-md justify-self-start rounded-[1.75rem] bg-[#171a17] p-5 text-white shadow-2xl shadow-black/20 lg:mt-0 lg:justify-self-end">
              <div className="rounded-[1.25rem] border border-white/12 p-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c542]">
                  Coming Next
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight">
                  A faster way to get a cash offer.
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-6 text-white/82">
                  <p>
                    The full site will include instant quote steps, vehicle
                    pickup details, service areas, FAQs, and direct contact
                    options.
                  </p>
                  <p>
                    For now, call us and we can start with the basic vehicle
                    details.
                  </p>
                </div>
                <a
                  className="mt-6 inline-flex w-full justify-center rounded-full bg-[#f4c542] px-5 py-3 text-sm font-black text-[#171a17] transition hover:bg-white"
                  href="tel:+15876642401"
                >
                  Speak With Us
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-5 pb-10 sm:px-8 lg:grid-cols-3 lg:px-10">
        {[
          ["Quick Quotes", "Share the car details and condition."],
          ["Free Towing", "Pickup will be arranged in Calgary and nearby areas."],
          ["Simple Payment", "Fair cash offers without complicated paperwork."],
        ].map(([title, text]) => (
          <div
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/6"
            key={title}
          >
            <h2 className="text-xl font-black">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#5a625b]">{text}</p>
          </div>
        ))}
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-2 border-t border-black/10 px-5 py-6 text-sm text-[#5a625b] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>Calgary Cars for Cash. Full website launching soon.</p>
        <a className="font-black text-[#171a17]" href="tel:+15876642401">
          (587) 664-2401
        </a>
      </footer>
    </main>
  );
}
