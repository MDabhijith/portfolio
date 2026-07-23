import Image from "next/image";
import { Tag } from "@/components/ui/tag";
import { SkillsMarquee } from "@/components/marquee/skills-marquee";
import { HeroParticles } from "@/components/homepage/hero-particles";

/** Homepage hero — gradient backdrop, hero badges, headline, sub-copy, skills ticker. */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden">
      <Image
        src="/images/hero-bg.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <HeroParticles />

      <div className="flex flex-col items-center justify-center px-6 pt-40 pb-20 sm:pt-48 sm:pb-24 lg:pt-[150px] lg:pb-[130px]">
        <div className="flex max-w-[666px] flex-col items-center gap-5">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Tag variant="solid">Product Designer</Tag>
            <Tag variant="glass">B2B SaaS</Tag>
            <Tag variant="glass">AI Systems</Tag>
          </div>

          <h1 className="text-center font-heading text-4xl font-extrabold leading-[1.15] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[56px] lg:leading-[70px]">
            Solving <em className="font-extrabold italic">real</em> problems
            through{" "}
            <em className="font-extrabold italic">human-centered</em> design.
          </h1>

          <p className="max-w-[540px] text-center font-body text-base leading-relaxed text-ink-secondary sm:text-[16.5px]">
            4+ years designing end-to-end B2B SaaS and AI products turning
            messy, fragmented operations into systems that scale and that
            people actually trust.
          </p>
        </div>
      </div>

      <div className="mt-auto mb-8 sm:mb-10">
        <SkillsMarquee />
      </div>
    </section>
  );
}
