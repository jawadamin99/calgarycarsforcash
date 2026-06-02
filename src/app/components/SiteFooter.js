import Image from "next/image";
import Link from "next/link";

export default function SiteFooter({ tagline }) {
  return (
    <footer className="bg-[#171a17] px-5 pt-14 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.7fr_0.75fr_0.9fr]">
          <div>
            <Link className="inline-flex items-center" href="/">
              <Image
                src="/images/calgary-cash-for-cars-logo.png"
                alt="Calgary Cars for Cash"
                width={300}
                height={278}
                className="h-24 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              {tagline ||
                "Cash for Cars Calgary - Get Paid Today, We Tow for Free"}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Free Towing", "Paid on the Spot", "All Calgary"].map((item) => (
                <span className="rounded-full bg-white/8 px-3 py-1.5 text-xs font-black text-white/78 ring-1 ring-white/10" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c542]">
              Menu
            </h2>
            <nav className="mt-5 grid gap-3 text-sm font-black text-white/76">
              <Link className="inline-block" href="/">
                Home
              </Link>
              <Link className="inline-block" href="/about-us">
                About
              </Link>
              <Link className="inline-block" href="/#quote">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c542]">
              Services
            </h2>
            <nav className="mt-5 grid gap-3 text-sm font-black text-white/76">
              <Link className="inline-block" href="/cash-for-junk-cars-calgary">
                Cash for Junk Cars
              </Link>
              <Link className="inline-block" href="/scrap-car-removal-calgary">
                Scrap Car Removal
              </Link>
            </nav>
          </div>

          <div className="rounded-[1.5rem] bg-white p-5 text-[#171a17] shadow-2xl shadow-black/20">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#b5252b]">
              Get Paid Today
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#4d564e]">
              Call or write to us for a free cash offer and pickup details.
            </p>
            <a className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#b5252b] px-5 py-3 text-sm font-black text-white" href="tel:+15876642401">
              (587)-664-2401
            </a>
            <a className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#f4c542] px-5 py-3 text-sm font-black text-[#171a17]" href="mailto:info@calgarycarsforcash.ca">
              info@calgarycarsforcash.ca
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 py-6 text-xs font-bold text-white/54 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 - CalgaryCarsForCash.ca - All Rights Reserved</p>
          <p>Serving Calgary and surrounding communities.</p>
        </div>
      </div>
    </footer>
  );
}
