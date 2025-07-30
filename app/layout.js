import "./globals.css";
import ScrollTitleUpdater from "@/components/ScrollTitleUpdater";

export const metadata = {
  title: "Zakado",
  description: "Deskripsi Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Link Boxicons CDN */}
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
