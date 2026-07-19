import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyTemplate } from "@/components/case-study/case-study-template";
import { getAllCaseStudySlugs, getCaseStudy } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};

  const url = `${siteConfig.url}/work/${slug}`;
  const ogImage = `/work/${slug}/opengraph-image`;

  return {
    title: caseStudy.title,
    description: caseStudy.subtitle,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      type: "article",
      url,
      title: caseStudy.title,
      description: caseStudy.subtitle,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.subtitle,
      images: [ogImage],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.title,
    description: caseStudy.subtitle,
    url: `${siteConfig.url}/work/${slug}`,
    image: `${siteConfig.url}/work/${slug}/opengraph-image`,
    datePublished: caseStudy.year,
    creator: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: caseStudy.category,
    keywords: [caseStudy.category, caseStudy.client].join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyTemplate caseStudy={caseStudy} />
    </>
  );
}
