import { Schibsted_Grotesk, Hanken_Grotesk } from "next/font/google";

export const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: "variable",
  style: ["normal"],
  display: "swap",
});
