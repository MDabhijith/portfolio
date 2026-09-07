import { Inter, Geist_Mono } from "next/font/google";

export const schibstedGrotesk = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

export const hankenGrotesk = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "variable",
  display: "swap",
});
