import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="w-full bg-white shadow-sm ring-1 ring-black/6">
      <div className="mx-auto flex h-28 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-8 lg:px-10">
        <details className="group/menu relative lg:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-full bg-[#171a17] text-white shadow-sm [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open menu</span>
            <svg
              aria-hidden="true"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>
          <div className="absolute left-0 top-full z-40 mt-3 w-72 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/8">
            <Link className="block rounded-xl px-4 py-3 text-sm font-black text-[#3f473f]" href="/">
              Home
            </Link>
            <Link className="block rounded-xl px-4 py-3 text-sm font-black text-[#3f473f]" href="/about-us">
              About
            </Link>
            <Link className="block rounded-xl px-4 py-3 text-sm font-black text-[#3f473f]" href="/cash-for-junk-cars-calgary">
              Cash for Junk Cars
            </Link>
            <Link className="block rounded-xl px-4 py-3 text-sm font-black text-[#3f473f]" href="/scrap-car-removal-calgary">
              Scrap Car Removal
            </Link>
            <Link className="block rounded-xl px-4 py-3 text-sm font-black text-[#3f473f]" href="/#quote">
              Contact
            </Link>
          </div>
        </details>

        <Link className="flex shrink-0 items-center" href="/">
          <Image
            src="/images/calgary-cash-for-cars-logo.png"
            alt="Calgary Cars for Cash"
            width={300}
            height={278}
            priority
            className="h-24 w-auto lg:h-28"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-black text-[#3f473f] lg:flex">
          <Link className="text-[#3f473f]" href="/">
            Home
          </Link>
          <Link className="text-[#3f473f]" href="/about-us">
            About
          </Link>
          <Link className="text-[#3f473f]" href="/cash-for-junk-cars-calgary">
            Cash for Junk Cars
          </Link>
          <Link className="text-[#3f473f]" href="/scrap-car-removal-calgary">
            Scrap Car Removal
          </Link>
          <Link className="text-[#3f473f]" href="/#quote">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a className="inline-flex items-center gap-2 rounded-full bg-[#f4c542] px-3 py-2.5 text-sm font-black text-[#171a17] shadow-sm sm:px-5" href="tel:+15876642401">
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
      </div>
    </header>
  );
}
