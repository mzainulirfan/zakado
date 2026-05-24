import "./globals.css";
import ScrollTitleUpdater from "@/components/ScrollTitleUpdater";
import { SITE_META } from "@/lib/siteData";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata = {
  metadataBase: new URL(SITE_META.siteUrl),
  title: {
    default: SITE_META.defaultTitle,
    template: SITE_META.titleTemplate,
  },
  description: SITE_META.seoDescription,
  applicationName: SITE_META.siteName,
  category: "shopping",
  keywords: [
    "zakado",
    "hampers custom bandung",
    "kado custom bandung",
    "kado wisuda",
    "gift box custom",
    "hampers ulang tahun",
    "corporate gift",
    "hampers custom indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE_META.seoTitle,
    description: SITE_META.seoDescription,
    url: SITE_META.siteUrl,
    siteName: SITE_META.siteName,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: SITE_META.ogImage,
        width: 1200,
        height: 1200,
        alt: "Hampers custom premium Zakado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META.seoTitle,
    description: SITE_META.seoDescription,
    images: [SITE_META.ogImage],
  },
  icons: {
    icon: "/products/favicon.ico",
    shortcut: "/products/favicon.ico",
    apple: "/products/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: SITE_META.brandName,
      alternateName: "Blueshop - Zakado",
      description: SITE_META.seoDescription,
      email: SITE_META.email,
      areaServed: SITE_META.serviceArea,
      image: `${SITE_META.siteUrl}${SITE_META.ogImage}`,
      url: SITE_META.siteUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_META.storeLocation,
        addressCountry: "ID",
      },
    },
    {
      "@type": "WebSite",
      name: SITE_META.siteName,
      url: SITE_META.siteUrl,
      description: SITE_META.seoDescription,
      inLanguage: "id-ID",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="antialiased">
        <ScrollTitleUpdater />
        {children}
      </body>
    </html>
  );
}
