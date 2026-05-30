import Image from "next/image";

const vehicleTypes = [
  "Junk cars",
  "Scrap cars",
  "Damaged vehicles",
  "Non-running cars",
  "Old used cars",
  "Unwanted vehicles",
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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,241,233,0.98)_0%,rgba(244,241,233,0.92)_42%,rgba(244,241,233,0.48)_72%,rgba(244,241,233,0.18)_100%)]" />

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

          <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.55fr)] lg:py-14">
            <div className="max-w-3xl">
              <h1 className="max-w-4xl text-5xl font-black leading-[0.93] text-[#171a17] sm:text-6xl lg:text-6xl">
                Cash for Cars Calgary
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#424940] sm:text-xl">
                We buy unwanted vehicles in Calgary and help turn old, damaged,
                junk, and non-running cars into cash with simple local service.
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
                  Write to Us
                </a>
              </div>
            </div>

            <aside className="max-w-md justify-self-start rounded-[1.75rem] bg-[#171a17] p-5 text-white shadow-2xl shadow-black/20 lg:justify-self-end">
              <div className="space-y-7 rounded-[1.25rem] border border-white/12 p-5">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c542]">
                    Who We Are
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/84">
                    Calgary Cars for Cash is a local vehicle buying service for
                    people who want a direct way to sell an unwanted car.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c542]">
                    What We Buy
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {vehicleTypes.map((type) => (
                      <div
                        className="rounded-xl bg-white/10 px-3 py-2 text-sm font-black"
                        key={type}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  <a
                    className="inline-flex justify-center rounded-full bg-[#f4c542] px-5 py-3 text-sm font-black text-[#171a17] transition hover:bg-white"
                    href="tel:+15876642401"
                  >
                    Call (587) 664-2401
                  </a>
                  <a
                    className="inline-flex justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-black text-white ring-1 ring-white/15 transition hover:bg-white hover:text-[#171a17]"
                    href="mailto:info@calgarycarsforcash.ca"
                  >
                    info@calgarycarsforcash.ca
                  </a>
                </div>
              </div>
            </aside>
          </div>

          <footer className="flex flex-col gap-2 border-t border-black/10 py-5 text-sm text-[#5a625b] sm:flex-row sm:items-center sm:justify-between">
            <p>Calgary Cars for Cash</p>
            <p>Serving Calgary and nearby communities.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
