/**
 * ────────────────────────────────────────────────────────────────────────────
 *  BRAND CONFIG — Cruising Adventures Ltd
 * ────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  name: "Cruising Adventures",

  tagline: "Drive Your Own Speedboat in Nassau, Bahamas",

  description:
    "Experience the most popular water activity in Nassau Bahamas. Drive your own speedboat, snorkel, swim with pigs, and ride ATVs with expert guides.",

  domain: "cruisingadventuresltd.getyetti.com",

  theme: {
    hue: 25,
    corners: "rounded" as "sharp" | "rounded" | "pill",
    defaultScheme: "light" as "light" | "dark",
  },

  fonts: {
    display: "Playfair Display",
    sans: "DM Sans",
    mono: "JetBrains Mono",
  },

  social: {
    github: "your-org/your-repo",
    x: "yourhandle",
    email: "cruisingadventuresltd@gmail.com",
    instagram: "https://www.instagram.com/cruisingadventuresbahamas/",
  },

  contact: {
    whatsapp: "",
    phone: "2428172944",
    address: "Malcom Park East Bay Street (next to Antiki Floating Bar), Arawak Cay, North Nassau N.P, Bahamas",
    mapQuery: "Malcom Park East Bay Street, Arawak Cay, Nassau, Bahamas",
  },
} as const;

export type Brand = typeof brand;
export default brand;
