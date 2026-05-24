import { SITE_META } from "@/lib/siteData";

export default function sitemap() {
  return [
    {
      url: SITE_META.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
