import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Anchor, Star, Phone, Mail } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/magic/gallery";
import { Reveal, RevealGroup } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Love Birds - Romance Packages",
  description:
    "A bespoke romantic speedboat adventure for couples in Nassau, Bahamas. No words needed when love birds speak the language of the heart.",
};

const highlights = [
  {
    icon: Heart,
    title: "Private Experience",
    body: "Your own private speedboat, just the two of you, exploring Nassau's most romantic spots.",
  },
  {
    icon: Anchor,
    title: "Expert Guided",
    body: "Our certified guides ensure a seamless, magical experience while you focus on each other.",
  },
  {
    icon: Star,
    title: "Unforgettable Views",
    body: "Crystal-clear turquoise waters, stunning island scenery, and golden Bahamian skies.",
  },
];

const coupleImages = [
  "/ingested/cruisingadventuresltd/img-010.webp",
  "/ingested/cruisingadventuresltd/img-011.webp",
  "/ingested/cruisingadventuresltd/img-014.webp",
  "/ingested/cruisingadventuresltd/img-015.webp",
  "/ingested/cruisingadventuresltd/img-016.webp",
  "/ingested/cruisingadventuresltd/img-017.webp",
  "/ingested/cruisingadventuresltd/img-018.webp",
  "/ingested/cruisingadventuresltd/img-021.webp",
].map((src, i) => ({ src, alt: `Romantic couples adventure Nassau Bahamas ${i + 1}` }));

export default function LoveBirdsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-900 py-32 text-white">
          <Image
            src="/ingested/cruisingadventuresltd/img-010.webp"
            alt="Romantic couples speedboat adventure Nassau Bahamas"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/80" />
          <div className="container-px relative z-10 mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="flex items-center justify-center gap-2">
                <Heart className="size-5 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Romance Package
                </span>
                <Heart className="size-5 text-primary" />
              </div>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 font-display text-5xl font-bold sm:text-6xl md:text-7xl">
                Love Birds
              </h1>
            </Reveal>
            <Reveal>
              <p className="mx-auto mt-6 max-w-xl text-xl italic text-white/80">
                "No words needed when love birds speak the language of the heart."
              </p>
            </Reveal>
            <Reveal>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
                Experience the ultimate romantic adventure in Nassau, Bahamas.
                Just the two of you, your own speedboat, and the breathtaking
                beauty of the Caribbean Sea.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+2428172944"
                  className="inline-flex rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:-translate-y-0.5 cursor-pointer"
                >
                  Book for Two
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

        {/* ── Experience Description ───────────────────────────────────── */}
        <section className="bg-accent/20 py-24">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <Reveal>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Your Experience
                  </span>
                  <h2 className="mt-3 font-display text-4xl font-bold leading-tight">
                    A Romantic Escape
                    <br />
                    on the Open Water
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Imagine sailing through Nassau's turquoise waters with the one you love,
                    the warm Bahamian sun on your faces, and nothing but the sound of the
                    ocean and laughter.
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Our Love Birds package is designed to create magical memories. From
                    the moment you step aboard your private speedboat to the last sunset
                    over the Caribbean, every detail is crafted for romance.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {[
                      "Private 2-seater speedboat for just the two of you",
                      "Expert guide to Nassau's most romantic spots",
                      "Snorkeling in crystal-clear turquoise waters",
                      "Professional photography to capture your memories",
                      "Complimentary drinks upon return",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Heart className="mt-0.5 size-4 shrink-0 text-primary" />
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

              <div className="overflow-hidden rounded-3xl shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/cruisingadventuresltd/img-011.webp"
                  alt="Couples romantic speedboat experience Nassau Bahamas"
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover"
                />
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
                  Love in the Bahamas
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold">
                  Moments Made for Two
                </h2>
              </div>
            </Reveal>
            <Gallery images={coupleImages} />
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="bg-primary py-20 text-white">
          <div className="container-px mx-auto max-w-3xl text-center">
            <Reveal>
              <Heart className="mx-auto size-10 mb-4 text-white/60" />
              <h2 className="font-display text-4xl font-bold">
                Plan Your Romantic Adventure
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                Contact us to book your Love Birds experience. We'll craft the
                perfect romantic day on Nassau's beautiful waters.
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
