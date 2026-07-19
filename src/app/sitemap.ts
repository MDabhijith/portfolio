import type { MetadataRoute } from "next";
import { getAllCaseStudySlugs } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const caseStudyEntries: MetadataRoute.Sitemap = getAllCaseStudySlugs().map(
    (slug) => ({
      url: `${siteConfig.url}/work/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudyEntries,
  ];
}
