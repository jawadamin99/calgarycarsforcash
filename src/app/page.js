export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f7f2] text-[#17211b]">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between gap-4">
          <a className="flex items-center gap-3" href="/">
            <span className="grid size-11 place-items-center rounded-full bg-[#b8292f] text-lg font-black text-white shadow-sm">
              C
            </span>
            <span className="text-base font-black uppercase tracking-wide sm:text-lg">
              Calgary Cars for Cash
            </span>
          </a>
          <a
            className="hidden rounded-full border border-[#17211b]/15 px-5 py-2 text-sm font-bold text-[#17211b] transition hover:border-[#b8292f] hover:text-[#b8292f] sm:inline-flex"
            href="tel:+15877009806"
          >
            Call Soon
          </a>
        </nav>

        <div className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[1.04fr_0.96fr] lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#b8292f] shadow-sm ring-1 ring-black/5">
              New Calgary vehicle buying service
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-normal text-[#17211b] sm:text-6xl lg:text-7xl">
              Cash for cars in Calgary is coming soon.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4a534d] sm:text-xl">
              We are preparing a simple way to sell unwanted, damaged, scrap, or
              non-running vehicles in Calgary with quick quotes, free towing,
              and payment arranged without the usual back and forth.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#b8292f] px-7 py-4 text-base font-black text-white shadow-lg shadow-[#b8292f]/20 transition hover:bg-[#9f2028]"
                href="mailto:info@calgarycarsforcash.com"
              >
                Get Launch Updates
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-black text-[#17211b] shadow-sm ring-1 ring-black/8 transition hover:text-[#b8292f]"
                href="tel:+15877009806"
              >
                Call 587-700-9806
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] bg-white p-5 shadow-2xl shadow-black/10 ring-1 ring-black/6 sm:p-7">
            <div className="overflow-hidden rounded-[1.5rem] bg-[#17211b] p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#f4c542]">
                Website Preview
              </p>
              <h2 className="mt-5 text-3xl font-black leading-tight">
                One local team for quick cash offers.
              </h2>
              <div className="mt-8 grid gap-3">
                {[
                  "Junk and scrap cars",
                  "Damaged or non-running vehicles",
                  "Free Calgary towing",
                  "Straightforward payment",
                ].map((item) => (
                  <div
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold"
                    key={item}
                  >
                    <span className="size-2 rounded-full bg-[#f4c542]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <footer className="flex flex-col gap-2 border-t border-[#17211b]/10 py-5 text-sm text-[#566059] sm:flex-row sm:items-center sm:justify-between">
          <p>Calgary Cars for Cash. Full website launching soon.</p>
          <p>Serving Calgary and nearby communities.</p>
        </footer>
      </section>
    </main>
  );
}
