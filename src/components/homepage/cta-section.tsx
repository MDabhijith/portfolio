import { Button } from "@/components/ui/button";
import { SlideUpLabel } from "@/components/ui/slide-up-label";

export function CtaSection() {
  return (
    <section className="relative isolate flex flex-col items-center gap-5 py-8 text-center sm:py-16">
      <div
        aria-hidden="true"
        className="mesh-dots pointer-events-none absolute inset-0 -z-10"
      />
      <h2 className="max-w-[600px] font-heading text-3xl font-medium tracking-[-0.02em] text-ink sm:text-[42px]">
        Let&rsquo;s talk about your next product
      </h2>

      <p className="font-body text-[17px] text-ink-secondary">
        <a
          href="https://www.linkedin.com/in/abhijithmd"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm font-semibold text-brand outline-none transition-opacity duration-[var(--duration-fast)] hover:opacity-70 focus-visible:ring-2 focus-visible:ring-brand"
        >
          LinkedIn
        </a>
        <span> · </span>
        <a
          href="mailto:abhijithmd02@gmail.com"
          className="rounded-sm font-semibold text-brand outline-none transition-opacity duration-[var(--duration-fast)] hover:opacity-70 focus-visible:ring-2 focus-visible:ring-brand"
        >
          abhijithmd02@gmail.com
        </a>
      </p>

      <div className="halo-ring relative isolate mt-2 overflow-hidden rounded-full p-[2px]">
        <Button asChild variant="pill" size="pill-lg" className="relative">
          <a href="mailto:abhijithmd02@gmail.com" className="group/roll">
            <SlideUpLabel label="Say hello" />
          </a>
        </Button>
      </div>
    </section>
  );
}
