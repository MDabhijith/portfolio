import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/brand/logo";

const navigate = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/AbhijithMD.pdf", label: "Resume", external: true },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-footer text-footer-foreground">
      {/* Decorative gradient blobs — plain <img> since SVG needs no optimization */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/footer-ellipse-1.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-0 right-[-120px] size-[380px] select-none sm:right-[-40px] sm:size-[530px]"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/footer-ellipse-2.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-[160px] size-[380px] select-none sm:size-[530px]"
      />

      <Container className="relative flex flex-col gap-10 pt-16 pb-8 sm:pt-24 sm:pb-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="flex flex-col gap-3">
            <Logo variant="light" />
            <p className="max-w-[251px] font-body text-sm leading-[1.7] text-footer-foreground/60">
              Product &amp; UX designer turning ideas into meaningful product
              experiences.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-4">
            <h2 className="font-body text-xs uppercase tracking-[1.2px] text-footer-foreground/55">
              Navigate
            </h2>
            <ul className="flex flex-col gap-2.5">
              {navigate.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="font-body text-[14.5px] text-footer-foreground/85 outline-none transition-opacity duration-[var(--duration-fast)] hover:opacity-70 focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <h2 className="font-body text-xs uppercase tracking-[1.2px] text-footer-foreground/55">
              Contact
            </h2>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:abhijithmd02@gmail.com"
                  className="font-body text-[14.5px] text-footer-foreground/85 outline-none transition-opacity duration-[var(--duration-fast)] hover:opacity-70 focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
                >
                  abhijithmd02@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abhijithmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[14.5px] text-footer-foreground/85 outline-none transition-opacity duration-[var(--duration-fast)] hover:opacity-70 focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-footer-foreground/12 pt-6 sm:flex-row sm:justify-between">
          <p className="font-body text-xs text-footer-foreground/50">
            © {year} Abhijith M D. All rights reserved.
          </p>
          <p className="font-body text-xs text-footer-foreground/50">
            Creatively built using Claude
          </p>
        </div>
      </Container>

      <div className="relative flex justify-center overflow-hidden opacity-[0.06]" aria-hidden="true">
        <span className="whitespace-nowrap font-heading text-[18vw] font-extrabold tracking-[-0.04em] sm:text-[220px] lg:text-[320px]">
          ABHIJITH M D
        </span>
      </div>
    </footer>
  );
}
