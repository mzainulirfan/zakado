import { SITE_META } from "@/lib/siteData";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_META.siteUrl}/sitemap.xml`,
    host: SITE_META.siteUrl,
  };
}
