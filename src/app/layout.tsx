import type { Metadata } from "next";
import { schibstedGrotesk, hankenGrotesk } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${schibstedGrotesk.variable} ${hankenGrotesk.variable} h-full antialiased`}
    >
      <head>
        {/* Without JS the reveal observer never runs, so unhide everything. */}
        <noscript>
          <style>{`[data-reveal],[data-reveal-stagger] > *{opacity:1 !important;translate:none !important;scale:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-cs-paper text-ink font-body">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100] focus-visible:rounded-full focus-visible:bg-ink focus-visible:px-5 focus-visible:py-3 focus-visible:text-sm focus-visible:font-medium focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Skip to main content
        </a>
        <SmoothScroll />
        {children}
        <ScrollToTop />
        <CustomCursor />
      </body>
    </html>
  );
}
