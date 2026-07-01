import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Anchor, Shield, Fish, Phone, Mail } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/magic/gallery";
import { Reveal, RevealGroup } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Speedboat & Snorkeling Tour",
  description:
    "Take the helm of your own 2-seater speedboat and snorkel Nassau's crystal-clear waters on a guided tour with Cruising Adventures.",
};

const highlights = [
  {
    icon: Anchor,
    title: "Self-Drive Speedboat",
    body: "No license needed. Take the wheel of your own 2-seater speedboat with easy instructions from our dock.",
  },
  {
    icon: Fish,
    title: "Guided Snorkeling",
    body: "Follow our expert guides to the best reef spots in Nassau's crystal-clear turquoise waters.",
  },
  {
    icon: Shield,
    title: "Safe & Family-Friendly",
    body: "Certified guides, life jackets, and an easy briefing make this adventure safe for every skill level.",
  },
];

const speedboatImages = [
  "/ingested/cruisingadventuresltd/img-010.webp",
  "/ingested/cruisingadventuresltd/img-007.webp",
  "/ingested/cruisingadventuresltd/img-013.webp",
  "/ingested/cruisingadventuresltd/img-011.webp",
  "/ingested/cruisingadventuresltd/img-022.webp",
  "/ingested/cruisingadventuresltd/img-023.webp",
  "/ingested/cruisingadventuresltd/img-024.webp",
  "/ingested/cruisingadventuresltd/img-006.webp",
  "/ingested/cruisingadventuresltd/img-008.webp",
  "/ingested/cruisingadventuresltd/img-009.webp",
  "/ingested/cruisingadventuresltd/img-025.webp",
  "/ingested/cruisingadventuresltd/img-028.webp",
].map((src, i) => ({ src, alt: `Speedboat and snorkeling tour Nassau Bahamas ${i + 1}` }));

export default function SpeedboatSnorkelingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-900 py-32 text-white">
          <Image
            src="/ingested/cruisingadventuresltd/img-010.webp"
            alt="Woman driving her own speedboat in Nassau Bahamas"
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
                Most Popular
              </span>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 font-display text-5xl font-bold sm:text-6xl md:text-7xl">
                Speedboat & Snorkeling Tour
              </h1>
            </Reveal>
            <Reveal>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
                Take the wheel of your own speedboat and explore Nassau's stunning waters
                on a thrilling guided tour that combines speed boating and snorkeling.
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
                    Drive Your Own Boat,
                    <br />
                    Explore Nassau's Reefs
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Start from our private dock with easy instructions, then follow our
                    expert guides to the island's most breathtaking spots. Safe, exciting,
                    and family-friendly. It's the ultimate Bahamian experience!
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    No alcohol is allowed during this tour, but on completion every guest
                    receives two free shots at Lime Wedge.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {[
                      "Your own 2-seater speedboat, no license needed",
                      "Certified guide leads the way to the best snorkel spots",
                      "Mask, snorkel, and life jacket included",
                      "Two free shots at Lime Wedge on return",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Anchor className="mt-0.5 size-4 shrink-0 text-primary" />
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
                    src="/ingested/cruisingadventuresltd/img-013.webp"
                    alt="Woman on speedboat Nassau Bahamas"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    style={{ minHeight: "260px" }}
                  />
                </div>
                <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ingested/cruisingadventuresltd/img-022.webp"
                    alt="Snorkeling group Nassau Bahamas"
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
                  On The Water
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold">
                  Speedboat & Snorkel Moments
                </h2>
              </div>
            </Reveal>
            <Gallery images={speedboatImages} />
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="bg-primary py-20 text-white">
          <div className="container-px mx-auto max-w-3xl text-center">
            <Reveal>
              <Anchor className="mx-auto size-10 mb-4 text-white/60" />
              <h2 className="font-display text-4xl font-bold">
                Ready to Take the Wheel?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                Contact us to book your Speedboat & Snorkeling Tour. Groups, couples,
                and solo adventurers all welcome.
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
