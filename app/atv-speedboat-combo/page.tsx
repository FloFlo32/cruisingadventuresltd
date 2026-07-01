import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Zap, Anchor, Users, Phone, Mail } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/magic/gallery";
import { Reveal, RevealGroup } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "ATV & Speed Boat Combo",
  description:
    "The best of both worlds: thrilling ATV rides through Nassau followed by an exhilarating speedboat cruise, with Cruising Adventures.",
};

const highlights = [
  {
    icon: Zap,
    title: "ATV Thrills",
    body: "Rip through Nassau's backroads and trails on a guided ATV ride before you hit the water.",
  },
  {
    icon: Anchor,
    title: "Speedboat Finish",
    body: "Cool off and cruise the coastline on your own speedboat right after the ATV leg.",
  },
  {
    icon: Users,
    title: "Great for Groups",
    body: "A high-energy combo built for friends, families, and corporate outings alike.",
  },
];

const atvImages = [
  "/ingested/cruisingadventuresltd/img-026.webp",
  "/ingested/cruisingadventuresltd/img-041.webp",
  "/ingested/cruisingadventuresltd/img-042.webp",
  "/ingested/cruisingadventuresltd/img-043.webp",
].map((src, i) => ({ src, alt: `ATV and speedboat combo adventure Nassau Bahamas ${i + 1}` }));

export default function AtvSpeedboatComboPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-900 py-32 text-white">
          <Image
            src="/ingested/cruisingadventuresltd/img-026.webp"
            alt="ATV and speedboat combo adventure Nassau Bahamas"
            fill
            className="object-cover opacity-55"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/80" />
          <div className="container-px relative z-10 mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
                Combo Package
              </span>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 font-display text-5xl font-bold sm:text-6xl md:text-7xl">
                ATV & Speed Boat Combo
              </h1>
            </Reveal>
            <Reveal>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
                The best of both worlds: thrill-seeking ATV rides through Nassau followed
                by an exhilarating speedboat cruise across the stunning Bahamian waters.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+2428172944"
                  className="inline-flex rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:-translate-y-0.5 cursor-pointer"
                >
                  Book This Tour
                </a>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 cursor-pointer"
                >
                  Learn More
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Highlights ───────────────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="container-px mx-auto max-w-5xl">
            <RevealGroup className="grid gap-8 sm:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.title} className="text-center">
                  <div className="mx-auto mb-5 grid size-16 place-items-center rounded-2xl bg-primary/10">
                    <h.icon className="size-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{h.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{h.body}</p>
                </div>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ── Experience — split layout ─────────────────────────────────── */}
        <section className="bg-accent/20 py-24">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <Reveal>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Your Experience
                  </span>
                  <h2 className="mt-3 font-display text-4xl font-bold leading-tight">
                    Two Adventures,
                    <br />
                    One Unforgettable Day
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Start on land with a guided ATV ride through Nassau's trails and
                    backroads, then head straight to the dock for a speedboat cruise
                    along the coast. A once-in-a-lifetime escapade combining both worlds.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {[
                      "Guided ATV ride through Nassau's backroads",
                      "Speedboat cruise immediately after",
                      "Safety gear and certified guides for both legs",
                      "Ideal for groups, families, and corporate events",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Zap className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex gap-4">
                    <a
                      href="tel:+2428172944"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary/90 cursor-pointer"
                    >
                      <Phone className="size-4" />
                      Call to Book
                    </a>
                    <a
                      href="mailto:cruisingadventuresltd@gmail.com"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white cursor-pointer"
                    >
                      <Mail className="size-4" />
                      Email Us
                    </a>
                  </div>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ingested/cruisingadventuresltd/img-041.webp"
                    alt="ATV adventure Nassau Bahamas"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    style={{ minHeight: "260px" }}
                  />
                </div>
                <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ingested/cruisingadventuresltd/img-042.webp"
                    alt="ATV adventure Nassau Bahamas"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    style={{ minHeight: "260px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ──────────────────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-10 text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  On Land & Water
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold">
                  ATV & Speedboat Moments
                </h2>
              </div>
            </Reveal>
            <Gallery images={atvImages} />
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="bg-primary py-20 text-white">
          <div className="container-px mx-auto max-w-3xl text-center">
            <Reveal>
              <Zap className="mx-auto size-10 mb-4 text-white/60" />
              <h2 className="font-display text-4xl font-bold">
                Ready for Double the Adventure?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                Contact us to book your ATV & Speed Boat Combo. Perfect for groups
                who want it all in one day.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+2428172944"
                  className="inline-flex rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:bg-white/90 cursor-pointer"
                >
                  Call 242-817-2944
                </a>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 cursor-pointer"
                >
                  Send Us a Message
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
