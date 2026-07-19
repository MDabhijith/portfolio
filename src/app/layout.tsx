import type { Metadata } from "next";
import { schibstedGrotesk, hankenGrotesk } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhijith M D — Product & UX Designer",
  description:
    "Product & UX designer turning fragmented operations into systems people rely on. Case studies in B2B SaaS, CRMs, and AI-first product design.",
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
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        {children}
      </body>
    </html>
  );
}
