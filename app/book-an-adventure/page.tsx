import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Anchor, Clock, Users, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Book An Adventure",
  description:
    "Book your speedboat, snorkeling, ATV, or Pig Island adventure in Nassau, Bahamas. Contact Cruising Adventures to reserve your spot today.",
};

const packages = [
  {
    eyebrow: "Self-Drive",
    title: "Speedboat Tour",
    description:
      "Take the helm of your own 2-seater speedboat. Explore Nassau's crystal waters with our certified guide leading the way to the best spots.",
    href: "/contact",
    src: "/ingested/cruisingadventuresltd/img-006.webp",
    alt: "Self-drive speedboat tour Nassau Bahamas",
  },
  {
    eyebrow: "Snorkel",
    title: "Snorkeling Adventure",
    description:
      "Dive into Nassau's underwater world. Encounter colorful reef fish, coral formations, and the incredible marine life of the Bahamas.",
    href: "/contact",
    src: "/ingested/cruisingadventuresltd/img-013.webp",
    alt: "Snorkeling tour Nassau Bahamas reef",
  },
  {
    eyebrow: "Wildlife",
    title: "Swimming with Pigs",
    description:
      "Visit the famous Pig Beach and swim with the friendly Bahamian swimming pigs. A bucket-list experience for the entire family.",
    href: "/contact",
    src: "/ingested/cruisingadventuresltd/img-025.webp",
    alt: "Swimming with pigs Nassau Bahamas",
  },
  {
    eyebrow: "Combo",
    title: "ATV and Speedboat",
    description:
      "A once-in-a-lifetime escapade combining thrilling ATV rides with exhilarating speedboat cruising across the Bahamas.",
    href: "/contact",
    src: "/ingested/cruisingadventuresltd/img-040.webp",
    alt: "ATV speedboat adventure combo Nassau",
  },
  {
    eyebrow: "Express",
    title: "30-Minute Express Tour",
    description:
      "Short on time but craving adventure? Our Express Island Adventure is the perfect way to experience Nassau in just 30 minutes.",
    href: "/contact",
    src: "/ingested/cruisingadventuresltd/img-007.webp",
    alt: "Express speedboat tour Nassau Bahamas",
  },
  {
    eyebrow: "Romantic",
    title: "Love Birds Package",
    description:
      "A bespoke romantic experience crafted for couples. Private speedboat tour with breathtaking island views.",
    href: "/love-birds",
    src: "/ingested/cruisingadventuresltd/img-010.webp",
    alt: "Romantic couples speedboat tour Nassau",
  },
];

const info = [
  { icon: Clock, title: "Tour Duration", body: "30 min, 2 hours, or full day options available" },
  { icon: Users, title: "Group Size", body: "Individuals, couples, groups and corporate events" },
  { icon: Anchor, title: "Departure", body: "Private dock at Arawak Cay, Nassau" },
  { icon: MapPin, title: "Location", body: "Malcom Park East Bay Street, next to Antiki Floating Bar" },
];

export default function BookAdventurePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-900 py-32 text-white">
          <Image
            src="/ingested/cruisingadventuresltd/img-025.webp"
            alt="Book a speedboat adventure in Nassau Bahamas"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80" />
          <div className="container-px relative z-10 mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
                Nassau, Bahamas
              </span>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 font-display text-5xl font-bold sm:text-6xl md:text-7xl">
                Book An Adventure
              </h1>
            </Reveal>
            <Reveal>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
                Find your paradise. Choose from our range of thrilling Nassau
                adventures and contact us to reserve your spot today.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="#packages"
                  className="inline-flex rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:-translate-y-0.5 cursor-pointer"
                >
                  See Packages
                </a>
                <a
                  href="tel:+2428172944"
                  className="inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 cursor-pointer"
                >
                  Call Us Now
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Info Cards ───────────────────────────────────────────────── */}
        <section className="bg-white py-14">
          <div className="container-px mx-auto max-w-7xl">
            <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {info.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-border bg-accent/30 p-5"
                >
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ── Packages ─────────────────────────────────────────────────── */}
        <section id="packages" className="bg-accent/20 py-20">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <div className="text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Adventure Packages
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold">
                  Choose Your Experience
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                  Every adventure is guided by our certified professionals.
                  No experience needed. Just bring your sense of adventure.
                </p>
              </div>
            </Reveal>
            <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {packages.map((pkg) => (
                <ImageCard
                  key={pkg.title}
                  src={pkg.src}
                  alt={pkg.alt}
                  title={pkg.title}
                  description={pkg.description}
                  href={pkg.href}
                  eyebrow={pkg.eyebrow}
                  ratio="aspect-[16/9]"
                />
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ── Get in Touch ─────────────────────────────────────────────── */}
        <section className="bg-white py-24">
          <div className="container-px mx-auto max-w-4xl">
            <Reveal>
              <div className="text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Get in Touch!
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold">
                  Ready to Book?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Contact us by phone or email and we'll get you booked on your next
                  Nassau adventure. We typically respond within a few hours.
                </p>
              </div>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-3">
              <a
                href="tel:+2428172944"
                className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-primary/5 hover:border-primary/30 cursor-pointer"
              >
                <div className="grid size-14 place-items-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                  <Phone className="size-6 text-primary transition-colors group-hover:text-white" />
                </div>
                <div>
                  <p className="font-display font-semibold">Call Us</p>
                  <p className="mt-1 text-sm text-primary font-medium">242-817-2944</p>
                  <p className="mt-1 text-xs text-muted-foreground">Available daily</p>
                </div>
              </a>

              <a
                href="mailto:cruisingadventuresltd@gmail.com"
                className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-primary/5 hover:border-primary/30 cursor-pointer"
              >
                <div className="grid size-14 place-items-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                  <Mail className="size-6 text-primary transition-colors group-hover:text-white" />
                </div>
                <div>
                  <p className="font-display font-semibold">Email Us</p>
                  <p className="mt-1 text-sm text-primary font-medium break-all">cruisingadventuresltd@gmail.com</p>
                  <p className="mt-1 text-xs text-muted-foreground">Quick response</p>
                </div>
              </a>

              <Link
                href="/contact"
                className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-primary/5 hover:border-primary/30 cursor-pointer"
              >
                <div className="grid size-14 place-items-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                  <MapPin className="size-6 text-primary transition-colors group-hover:text-white" />
                </div>
                <div>
                  <p className="font-display font-semibold">Visit Us</p>
                  <p className="mt-1 text-sm text-muted-foreground">Arawak Cay, Nassau</p>
                  <p className="mt-1 text-xs text-primary font-medium flex items-center justify-center gap-1">
                    Get Directions <ChevronRight className="size-3" />
                  </p>
                </div>
              </Link>
            </RevealGroup>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
