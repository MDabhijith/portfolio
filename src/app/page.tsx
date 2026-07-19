import { Container } from "@/components/layout/container";

export default function Home() {
  return (
    <main className="flex-1">
      <Container className="py-24">
        <p className="font-heading text-2xl font-semibold">
          MD Folio — foundation ready.
        </p>
        <p className="mt-2 text-ink-tertiary font-body">
          Fonts, tokens, and layout are wired up. Homepage content lands in
          Phase 3.
        </p>
      </Container>
    </main>
  );
}
