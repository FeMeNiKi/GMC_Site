import type { MetadataRoute } from "next";
import { site } from "@/content/copy";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
