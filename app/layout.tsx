import type { Metadata } from "next";

import "../node_modules/@fontsource/inter/index.css";
import "../node_modules/@fontsource/stack-sans-text/index.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://skytrackwestafrica.com"),
  title: {
    default: "Skytrack West Africa | Marine Logistics & Construction Experts",
    template: "%s | Skytrack West Africa",
  },
  description:
    "Skytrack West Africa leads the logistics, construction, and water vessel manufacturing industry across the continent — delivering efficiency, reliability, and innovation in marine infrastructure.",
  keywords: [
    "Skytrack West Africa",
    "marine logistics",
    "boat construction",
    "water vessel import",
    "shipping company Africa",
    "logistics Nigeria",
    "marine engineering",
    "offshore construction",
    "freight transport West Africa",
    "supply chain management",
  ],
  authors: [{ name: "Skytrack West Africa" }],
  creator: "Skytrack West Africa",
  publisher: "Skytrack West Africa",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://skytrackwestafrica.com",
    siteName: "Skytrack West Africa",
    title: "Skytrack West Africa | Marine Logistics & Construction Experts",
    description:
      "Skytrack West Africa provides leading solutions in logistics, marine construction, and vessel importation across Africa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Skytrack West Africa - Marine Logistics & Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skytrack West Africa | Marine Logistics & Construction Experts",
    description:
      "Leaders in logistics, marine construction, and vessel importation — connecting Africa to global waters.",
    images: ["/og-image.jpg"],
    creator: "@skytrackafrica",
  },
  alternates: {
    canonical: "https://skytrackwestafrica.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Skytrack West Africa",
              url: "https://skytrackwestafrica.com",
              logo: "https://skytrackwestafrica.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/skytrackwestafrica",
                "https://twitter.com/skytrackafrica",
              ],
              description:
                "Skytrack West Africa is a logistics and marine construction company specializing in vessel importation, offshore construction, and freight solutions across Africa.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+234-000-000-0000",
                contactType: "Customer Support",
                areaServed: "NG",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </head>
      <body className="font-inter relative antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
