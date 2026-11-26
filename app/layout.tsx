import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  variable: "--font-source-sans",
});

const serif = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
});

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t;}}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: site.description,
  alternates: { canonical: "/" },
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: site.portrait.src,
        width: site.portrait.width,
        height: site.portrait.height,
        alt: site.portrait.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    creator: "@santiycr",
    images: [site.portrait.src],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0ea" },
    { media: "(prefers-color-scheme: dark)", color: "#131210" },
  ],
  colorScheme: "light dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.formalName,
  jobTitle: "Head of Momentum",
  worksFor: {
    "@type": "Organization",
    name: "Salesforce",
  },
  url: site.url,
  email: `mailto:${site.email}`,
  image: `${site.url}${site.portrait.src}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rosario",
    addressCountry: "AR",
  },
  sameAs: site.sameAs,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
