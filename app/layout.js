import "./globals.css";
import ScrollTitleUpdater from "@/components/ScrollTitleUpdater";
import { SITE_META } from "@/lib/siteData";

export const metadata = {
  metadataBase: new URL(SITE_META.siteUrl),
  title: "Zakado | Hampers & Kado Custom untuk Momen Spesial",
  description:
    "Zakado membantu Anda memesan hampers dan kado custom premium untuk wisuda, ulang tahun, pernikahan, dan corporate gifting dengan jalur order cepat via WhatsApp.",
  keywords: [
    "Zakado",
    "hampers custom",
    "kado wisuda",
    "gift box custom",
    "hampers ulang tahun",
    "corporate gift",
  ],
  openGraph: {
    title: "Zakado | Hampers & Kado Custom",
    description:
      "Pesan hampers custom premium untuk wisuda, ulang tahun, pernikahan, dan corporate gifting.",
    url: SITE_META.siteUrl,
    siteName: SITE_META.brandName,
    type: "website",
    images: [
      {
        url: "/products/heroImage.webp",
        width: 1200,
        height: 1200,
        alt: "Hampers custom premium Zakado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zakado | Hampers & Kado Custom",
    description:
      "Hadiah personal dengan packaging premium untuk momen spesial.",
    images: ["/products/heroImage.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/products/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollTitleUpdater />
        {children}
      </body>
    </html>
  );
}
