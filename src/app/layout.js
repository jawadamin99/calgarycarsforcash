import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Calgary Cars for Cash | Coming Soon",
  description:
    "Calgary Cars for Cash is launching soon with fast vehicle buying, free towing, and fair cash offers across Calgary.",
  metadataBase: new URL("https://calgarycarsforcash.ca"),
  openGraph: {
    title: "Calgary Cars for Cash | Coming Soon",
    description:
      "A Calgary cash-for-cars service is launching soon with quick quotes, free towing, and straightforward payment.",
    url: "https://calgarycarsforcash.ca",
    siteName: "Calgary Cars for Cash",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calgary Cars for Cash | Coming Soon",
    description:
      "Fast cash offers for unwanted cars in Calgary. Full website coming soon.",
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
        {children}
      </body>
    </html>
  );
}
