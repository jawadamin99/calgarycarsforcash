import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import JsonLd from "./components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.calgarycarsforcash.ca";
const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutomotiveBusiness",
      "@id": `${siteUrl}/#business`,
      name: "Calgary Cars for Cash",
      url: siteUrl,
      telephone: "+1-587-664-2401",
      email: "info@calgarycarsforcash.ca",
      image: `${siteUrl}/images/cash-for-cars-calgary-pickup-bmw.jpeg`,
      logo: `${siteUrl}/images/calgary-cash-for-cars-logo.png`,
      priceRange: "$300-$10,000",
      description:
        "Calgary Cars for Cash buys junk, scrap, damaged, and unwanted vehicles in Calgary with free towing, same-day pickup, and cash paid on the spot.",
      areaServed: [
        "Calgary",
        "Airdrie",
        "Cochrane",
        "Okotoks",
        "Chestermere",
        "Strathmore",
        "High River",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-587-664-2401",
        contactType: "customer service",
        areaServed: "CA-AB",
        availableLanguage: "en",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Calgary Cars for Cash",
      publisher: {
        "@id": `${siteUrl}/#business`,
      },
      inLanguage: "en-CA",
    },
  ],
};

export const metadata = {
  title: "Cash for Cars Calgary | Top Cash for Scrap And junk Cars | Free Towing",
  description:
    "Get $300 to $10,000 cash for cars Calgary - junk, scrap, or unwanted. Free towing, same-day pickup, paid on the spot. Call now (587)-664-2401",
  metadataBase: new URL("https://www.calgarycarsforcash.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cash for Cars Calgary | Top Cash for Scrap And junk Cars | Free Towing",
    description:
      "Get $300 to $10,000 cash for cars Calgary - junk, scrap, or unwanted. Free towing, same-day pickup, paid on the spot. Call now (587)-664-2401",
    url: "https://www.calgarycarsforcash.ca",
    siteName: "Calgary Cars for Cash",
    images: [
      {
        url: "/images/cash-for-cars-calgary-pickup-bmw.jpeg",
        width: 1200,
        height: 1600,
        alt: "Cash for cars pickup in Calgary",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cash for Cars Calgary | Top Cash for Scrap And junk Cars | Free Towing",
    description:
      "Get $300 to $10,000 cash for cars Calgary - junk, scrap, or unwanted. Free towing, same-day pickup, paid on the spot. Call now (587)-664-2401",
    images: ["/images/cash-for-cars-calgary-pickup-bmw.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "icon", url: "/icon-512.png", sizes: "512x512" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZRTNMQFQSS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZRTNMQFQSS');
          `}
        </Script>
        <JsonLd data={businessSchema} />
        {children}
      </body>
    </html>
  );
}
