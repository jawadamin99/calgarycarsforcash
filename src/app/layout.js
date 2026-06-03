import { Geist, Geist_Mono } from "next/font/google";
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
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Calgary Cars For Cash",
      url: siteUrl,
      logo: `${siteUrl}/images/calgary-cash-for-cars-logo.png`,
    },
    {
      "@type": "AutomotiveBusiness",
      "@id": `${siteUrl}/#business`,
      name: "Calgary Cars For Cash",
      url: siteUrl,
      telephone: "+1-587-664-2401",
      email: "info@calgarycarsforcash.ca",
      image: `${siteUrl}/images/calgary-cash-for-cars-logo.png`,
      logo: `${siteUrl}/images/calgary-cash-for-cars-logo.png`,
      priceRange: "$300-$10,000",
      description:
        "Calgary Cars For Cash buys junk, scrap, damaged, and unwanted vehicles in Calgary with free towing, same-day pickup, and cash paid on the spot.",
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
      name: "Calgary Cars For Cash",
      alternateName: ["Calgary Cars For Cash LTD", "Calgary Cars for Cash"],
      publisher: {
        "@id": `${siteUrl}/#business`,
      },
      inLanguage: "en-CA",
    },
  ],
};

export const metadata = {
  title: "Calgary Cars For Cash",
  description:
    "Get $300 to $10,000 cash for cars Calgary - junk, scrap, or unwanted. Free towing, same-day pickup, paid on the spot. Call now (587)-664-2401",
  metadataBase: new URL("https://www.calgarycarsforcash.ca"),
  applicationName: "Calgary Cars For Cash",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cash for Cars Calgary | Top Cash for Scrap And junk Cars | Free Towing",
    description:
      "Get $300 to $10,000 cash for cars Calgary - junk, scrap, or unwanted. Free towing, same-day pickup, paid on the spot. Call now (587)-664-2401",
    url: "https://www.calgarycarsforcash.ca",
    siteName: "Calgary Cars For Cash",
    images: [
      {
        url: "/images/calgary-cash-for-cars-logo.png",
        width: 1200,
        height: 1200,
        alt: "Calgary Cars For Cash logo",
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
    images: ["/images/calgary-cash-for-cars-logo.png"],
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y411ZV7VNF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-Y411ZV7VNF');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <JsonLd data={businessSchema} />
        {children}
      </body>
    </html>
  );
}
