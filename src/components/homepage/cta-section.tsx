import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="flex flex-col items-center gap-5 py-8 text-center sm:py-16">
      <h2 className="max-w-[600px] font-heading text-3xl font-medium tracking-[-0.02em] text-ink sm:text-[42px]">
        Let&rsquo;s talk about your next product
      </h2>

      <p className="font-body text-base text-ink-secondary">
        <a
          href="https://www.linkedin.com/in/abhijithmd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand outline-none transition-opacity duration-[var(--duration-fast)] hover:opacity-70 focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
        >
          LinkedIn
        </a>
        <span> · </span>
        <a
          href="mailto:abhijithmd02@gmail.com"
          className="text-brand outline-none transition-opacity duration-[var(--duration-fast)] hover:opacity-70 focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
        >
          abhijithmd02@gmail.com
        </a>
      </p>

      <Button asChild variant="pill" size="pill-lg" className="mt-2">
        <a href="mailto:abhijithmd02@gmail.com">Say hello</a>
      </Button>
    </section>
  );
}
