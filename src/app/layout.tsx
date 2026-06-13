import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { SHOP } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "KAGU E-BIKES – E-Bike Fachgeschäft Moormerland",
  description:
    "Ihr E-Bike-Experte in Moormerland. Gazelle & Pegasus, Probefahrten, Lieferservice. ★ 4,9/5 bei 43 Google-Bewertungen. Tel: 01520 5161641",
  keywords: [
    "E-Bike Moormerland",
    "Gazelle E-Bike kaufen",
    "Pegasus E-Bike",
    "KAGU E-BIKES",
    "Fahrrad Moormerland",
  ],
  openGraph: {
    title: "KAGU E-BIKES – E-Bike Fachgeschäft",
    description:
      "E-Bikes kaufen in Moormerland. Gazelle, Pegasus, Probefahrten. ★ 4,9 Google-Bewertung",
    locale: "de_DE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SHOP.name,
  telephone: "+49-1520-5161641",
  address: {
    "@type": "PostalAddress",
    streetAddress: SHOP.address.street,
    addressLocality: "Moormerland",
    postalCode: "26802",
    addressCountry: "DE",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(SHOP.rating),
    reviewCount: String(SHOP.reviewCount),
    bestRating: "5",
  },
  openingHoursSpecification: [],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
