import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Anchor, Star, Phone, Mail } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/magic/gallery";
import { Reveal, RevealGroup } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "30-Minute Express Tour",
  description:
    "Short on time but craving adventure? The Express Island Adventure is the perfect way to experience Nassau's speedboat thrill in just 30 minutes.",
};

const highlights = [
  {
    icon: Clock,
    title: "Just 30 Minutes",
    body: "Perfect for cruise ship stops or a quick taste of Nassau between other plans.",
  },
  {
    icon: Anchor,
    title: "Still Self-Drive",
    body: "You're still behind the wheel of your own speedboat, just on a shorter route.",
  },
  {
    icon: Star,
    title: "Big Views, Short Time",
    body: "Hit the highlights of Nassau's coastline without giving up your whole day.",
  },
];

const expressImages = [
  "/ingested/cruisingadventuresltd/img-009.webp",
  "/ingested/cruisingadventuresltd/img-007.webp",
  "/ingested/cruisingadventuresltd/img-028.webp",
  "/ingested/cruisingadventuresltd/img-006.webp",
].map((src, i) => ({ src, alt: `Express speedboat island adventure Nassau Bahamas ${i + 1}` }));

export default function ExpressTourPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-900 py-32 text-white">
          <Image
            src="/ingested/cruisingadventuresltd/img-007.webp"
            alt="Express speedboat island adventure Nassau Bahamas"
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
                Express
              </span>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 font-display text-5xl font-bold sm:text-6xl md:text-7xl">
                30-Minute Express Tour
              </h1>
            </Reveal>
            <Reveal>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
                Short on time but craving adventure? Our Express Island Adventure is
                the perfect way to experience Nassau in just 30 minutes.
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
                  href="/blog/express-island-adventure"
                  className="inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 cursor-pointer"
                >
                  Read More
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
                    All The Thrill,
                    <br />
                    Half The Time
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Whether you're docked for the afternoon on a cruise ship or just
                    squeezing in an adventure between plans, the Express Tour puts you
                    behind the wheel of your own speedboat for a fast-paced 30-minute
                    run along Nassau's coastline.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {[
                      "30-minute self-drive speedboat route",
                      "No license needed, quick safety briefing included",
                      "Great add-on for cruise ship stopovers",
                      "Same certified guides as our full tours",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
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
                    src="/ingested/cruisingadventuresltd/img-009.webp"
                    alt="Express speedboat tour Nassau Bahamas"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    style={{ minHeight: "260px" }}
                  />
                </div>
                <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ingested/cruisingadventuresltd/img-028.webp"
                    alt="Express speedboat tour Nassau Bahamas"
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
                  Quick Adventure
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold">
                  Express Tour Moments
                </h2>
              </div>
            </Reveal>
            <Gallery images={expressImages} />
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="bg-primary py-20 text-white">
          <div className="container-px mx-auto max-w-3xl text-center">
            <Reveal>
              <Clock className="mx-auto size-10 mb-4 text-white/60" />
              <h2 className="font-display text-4xl font-bold">
                Got 30 Minutes?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                Contact us to book your Express Island Adventure. Perfect for
                cruise stopovers and tight schedules.
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
