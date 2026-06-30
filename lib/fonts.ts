/**
 * Fonts loaded with next/font — zero layout shift, self-hosted, no FOUT.
 */
// brand:fonts:start
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";

export const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
export const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
// brand:fonts:end

export const fontVariables = `${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`;
