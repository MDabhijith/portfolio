import { SiteNav } from "@/components/nav/site-nav";
import { SiteFooter } from "@/components/footer/site-footer";
import { Container } from "@/components/layout/container";
import { Hero } from "@/components/homepage/hero";
import { SummarySection } from "@/components/homepage/summary-section";
import { ExperienceSection } from "@/components/homepage/experience-section";
import { SelectedWorkSection } from "@/components/homepage/selected-work-section";
import { CtaSection } from "@/components/homepage/cta-section";
import { siteConfig } from "@/lib/site-config";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: "Product & UX Designer",
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  sameAs: [siteConfig.linkedin],
  knowsAbout: [
    "Product Design",
    "UX Design",
    "Design Systems",
    "B2B SaaS",
    "AI Product Design",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <SiteNav />
      <main id="main-content" className="flex-1">
        <Hero />
        <Container className="flex flex-col gap-24 py-20 sm:gap-32 sm:py-28 lg:gap-36 lg:py-32">
          <SummarySection />
          <ExperienceSection />
          <SelectedWorkSection />
          <CtaSection />
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
