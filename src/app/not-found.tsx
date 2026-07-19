import Link from "next/link";
import { SiteNav } from "@/components/nav/site-nav";
import { SiteFooter } from "@/components/footer/site-footer";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Page not found — Abhijith M D",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="flex-1">
        <Container className="flex min-h-[70vh] flex-col items-center justify-center gap-6 py-32 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.08em] text-brand">
            404
          </p>
          <h1 className="max-w-lg font-heading text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            This page went missing somewhere between the seams.
          </h1>
          <p className="max-w-md font-body text-base text-ink-tertiary">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
          </p>
          <Button asChild variant="pill" size="pill-lg" className="mt-2">
            <Link href="/">Back to homepage</Link>
          </Button>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
