import Image from "next/image";
import Link from "next/link";
import { Anchor, Camera, Music, Shield, Star, MapPin, Phone, ChevronDown, Play } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ImageCard } from "@/components/magic/image-card";
import { Gallery } from "@/components/magic/gallery";
import { Reveal, RevealGroup } from "@/components/magic/reveal";

// YouTube-thumbnail "video" cards from the real site's Book An Adventure section
const videoCards = [
  {
    src: "/ingested/cruisingadventuresltd/img-025.webp",
    title: "Be Your Own Captain",
    href: "/book-an-adventure",
  },
  {
    src: "/ingested/cruisingadventuresltd/img-026.webp",
    title: "Ultimate Nassau Adventure",
    href: "/book-an-adventure",
  },
  {
    src: "/ingested/cruisingadventuresltd/img-027.webp",
    title: "Swimming With Pigs",
    href: "/book-an-adventure",
  },
];

const adventures = [
  {
    eyebrow: "Most Popular",
    title: "Speedboat and Snorkeling Tour",
    description:
      "Take the helm of your own 2-seater speedboat and explore Nassau's crystal-clear waters. Our expert guides lead you to the best snorkeling spots in the Bahamas.",
    href: "/book-an-adventure",
    src: "/ingested/cruisingadventuresltd/img-010.webp",
    alt: "Woman on speedboat Nassau Bahamas turquoise water",
  },
  {
    eyebrow: "Wild Experience",
    title: "Pig Island Adventure",
    description:
      "Visit the famous Pig Beach and swim with the friendly swimming pigs of the Bahamas. An unforgettable bucket-list experience for the whole family.",
    href: "/book-an-adventure",
    src: "/ingested/cruisingadventuresltd/img-027.webp",
    alt: "Swimming pigs on the beach Nassau Bahamas",
  },
  {
    eyebrow: "Combo Package",
    title: "ATV and Speed Boat Combo",
    description:
      "The best of both worlds: thrill-seeking ATV rides through Nassau followed by an exhilarating speedboat cruise across the stunning Bahamian waters.",
    href: "/book-an-adventure",
    src: "/ingested/cruisingadventuresltd/img-026.webp",
    alt: "ATV and speedboat adventure combo Nassau Bahamas",
  },
  {
    eyebrow: "For Couples",
    title: "Love Birds Romance Package",
    description:
      "A bespoke romantic adventure on the water, crafted for couples. Enjoy a private speedboat experience with breathtaking views and unforgettable memories.",
    href: "/love-birds",
    src: "/ingested/cruisingadventuresltd/img-007.webp",
    alt: "Romantic couples speedboat tour Nassau Bahamas",
  },
];

const features = [
  {
    icon: Shield,
    title: "Safe and Certified",
    body: "No license or experience required. Our certified guides provide full instruction before every tour. Family-friendly and safe for all ages.",
  },
  {
    icon: Anchor,
    title: "Self-Drive Speedboat",
    body: "You are the captain. Take the wheel of your own speedboat and explore Nassau's most breathtaking spots under guided supervision.",
  },
  {
    icon: Star,
    title: "Premium Experiences",
    body: "From snorkeling and pig island to ATV adventures and romantic packages, we offer Nassau's most thrilling water activities.",
  },
  {
    icon: MapPin,
    title: "Private Dock",
    body: "Depart from our exclusive private dock at Arawak Cay. Convenient location right next to the famous Antiki Floating Bar.",
  },
];

const faqs = [
  {
    q: "Is there an age or weight restriction?",
    a: "Participants must be at least 16 years old to drive a speedboat. There is a weight limit of 250 lbs per person. Children under 16 can ride as passengers with a supervising adult.",
  },
  {
    q: "Do I need to know how to swim?",
    a: "Swimming experience is helpful but not required for the speedboat tour. Life jackets are provided for all guests. For the snorkeling portions, basic comfort in water is recommended.",
  },
  {
    q: "Are there health restrictions?",
    a: "Guests with heart conditions, back problems, or who are pregnant should consult their doctor before booking. We want all our guests to have a safe and enjoyable experience.",
  },
  {
    q: "Is alcohol allowed on the tours?",
    a: "No alcohol is allowed during the tour for safety reasons. Upon completion of the tour, guests receive 2 complimentary shots at the famous Lime Wedge bar.",
  },
];

const galleryImages = [
  "/ingested/cruisingadventuresltd/img-013.webp",
  "/ingested/cruisingadventuresltd/img-011.webp",
  "/ingested/cruisingadventuresltd/img-007.webp",
  "/ingested/cruisingadventuresltd/img-029.webp",
  "/ingested/cruisingadventuresltd/img-034.webp",
  "/ingested/cruisingadventuresltd/img-041.webp",
  "/ingested/cruisingadventuresltd/img-044.webp",
  "/ingested/cruisingadventuresltd/img-049.webp",
  "/ingested/cruisingadventuresltd/img-022.webp",
  "/ingested/cruisingadventuresltd/img-023.webp",
  "/ingested/cruisingadventuresltd/img-024.webp",
  "/ingested/cruisingadventuresltd/img-005.webp",
].map((src, i) => ({ src, alt: `Cruising Adventures Nassau Bahamas experience ${i + 1}` }));

const partyImages = [
  "/ingested/cruisingadventuresltd/img-034.webp",
  "/ingested/cruisingadventuresltd/img-026.webp",
  "/ingested/cruisingadventuresltd/img-029.webp",
  "/ingested/cruisingadventuresltd/img-041.webp",
  "/ingested/cruisingadventuresltd/img-044.webp",
  "/ingested/cruisingadventuresltd/img-049.webp",
].map((src, i) => ({ src, alt: `Party event Nassau Bahamas ${i + 1}` }));

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero with Video Background ────────────────────────────────── */}
        <section className="relative min-h-screen overflow-hidden bg-slate-900">
          {/* Background poster image — shown while/if video loads */}
          <Image
            src="/ingested/cruisingadventuresltd/img-010.webp"
            alt="Woman on speedboat Nassau Bahamas crystal clear waters"
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
            quality={85}
          />

          {/* YouTube video background — muted autoplay loop */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLnFgLPXmGMp7Igi1iBbJoq0yXF5B6_9h0&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playsinline=1&enablejsapi=1"
              allow="autoplay; encrypted-media"
              className="absolute w-[177.78vh] h-[56.25vw] min-w-full min-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"
              style={{ border: "none" }}
              title="Cruising Adventures background video"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-900/80" />

          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-32 text-center text-white">
            <Reveal>
              <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
                Nassau, Bahamas
              </span>
            </Reveal>
            <Reveal>
              <h1 className="mt-2 font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Let Me Drive
                <br />
                <span className="text-primary">The Boat!</span>
              </h1>
            </Reveal>
            <Reveal>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
                Take the wheel of your own speedboat and explore Nassau's stunning
                waters. No license needed. Just pure Bahamian adventure.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/book-an-adventure"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 cursor-pointer"
                >
                  Book an Adventure
                </Link>
                <Link
                  href="/#adventures"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 cursor-pointer"
                >
                  See Packages
                </Link>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <Shield className="size-4 text-primary" />
                  Certified Guides
                </span>
                <span className="flex items-center gap-2">
                  <Star className="size-4 text-primary" />
                  5-Star Rated
                </span>
                <span className="flex items-center gap-2">
                  <Anchor className="size-4 text-primary" />
                  Private Dock
                </span>
              </div>
            </Reveal>

            <a
              href="/#about"
              className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 hover:text-white/80 transition-colors cursor-pointer"
              aria-label="Scroll down"
            >
              <ChevronDown className="size-8" />
            </a>
          </div>
        </section>

        {/* ── Book an Adventure (Video Cards) ──────────────────────────── */}
        <section className="bg-white py-16">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <div className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Book An Adventure
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold">
                  Choose Your Ride
                </h2>
              </div>
            </Reveal>
            <RevealGroup className="grid gap-6 sm:grid-cols-3">
              {videoCards.map((v) => (
                <Link
                  key={v.title}
                  href={v.href}
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.src}
                    alt={v.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ aspectRatio: "16/9" }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="grid size-14 place-items-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="size-6 text-primary fill-primary ml-0.5" />
                    </div>
                    <span className="font-display text-lg font-bold text-white drop-shadow-lg text-center px-4">
                      {v.title}
                    </span>
                  </div>
                </Link>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────────────────── */}
        <section id="about" className="bg-accent/20 py-24">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <Reveal>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    About Cruising Adventures
                  </span>
                  <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                    Nassau's Premier
                    <br />
                    Speedboat Experience
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Embark on an unforgettable adventure with Cruising Adventures. Take the
                    wheel of your own speedboat and explore Nassau's stunning waters on a
                    thrilling guided tour that combines speed boating and snorkeling.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Start from our private dock with easy instructions, then follow our
                    expert guides to the island's most breathtaking spots. Safe, exciting,
                    and family-friendly. It's the ultimate Bahamian experience!
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      { n: "500+", label: "Happy Adventurers" },
                      { n: "5", label: "Unique Experiences" },
                      { n: "100%", label: "Safety Record" },
                      { n: "5 Stars", label: "Guest Rating" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                        <p className="font-display text-3xl font-bold text-primary">{s.n}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/ingested/cruisingadventuresltd/img-007.webp"
                      alt="Couple on speedboat Nassau"
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/ingested/cruisingadventuresltd/img-013.webp"
                      alt="Woman on speedboat Nassau Bahamas"
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/ingested/cruisingadventuresltd/img-011.webp"
                      alt="Woman on boat Nassau Bahamas"
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/ingested/cruisingadventuresltd/img-027.webp"
                      alt="Swimming pigs Nassau Bahamas"
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ────────────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <div className="text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Why Choose Us
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold text-foreground">
                  Built for Adventure
                </h2>
              </div>
            </Reveal>
            <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-primary/5"
                >
                  <div className="mb-4 grid size-12 place-items-center rounded-xl bg-primary/10">
                    <f.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ── Adventure Packages ───────────────────────────────────────── */}
        <section id="adventures" className="bg-accent/20 py-24">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <div className="text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Cruising Adventures
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
                  Choose Your Adventure
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  From solo speedboat tours to romantic couples packages, we have
                  the perfect Nassau adventure waiting for you.
                </p>
              </div>
            </Reveal>
            <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {adventures.map((a) => (
                <ImageCard
                  key={a.title}
                  src={a.src}
                  alt={a.alt}
                  title={a.title}
                  description={a.description}
                  href={a.href}
                  eyebrow={a.eyebrow}
                  ratio="aspect-[3/2]"
                />
              ))}
            </RevealGroup>
            <Reveal>
              <div className="mt-10 text-center">
                <Link
                  href="/book-an-adventure"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
                >
                  View All Adventures
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Photography and Videography ──────────────────────────────── */}
        <section className="bg-slate-900 py-24 text-white">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="overflow-hidden rounded-3xl">
                <Gallery images={galleryImages.slice(0, 8)} />
              </div>
              <Reveal>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Photography and Videography
                  </span>
                  <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
                    Capture Every
                    <br />
                    <span className="text-primary">Breathtaking Moment</span>
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-white/80">
                    "Discover yourself through the lens. Where every shot reveals the beauty,
                    confidence, and story within you."
                  </p>
                  <p className="mt-4 leading-relaxed text-white/60">
                    Our professional photography and videography team captures the energy,
                    laughter, and unforgettable vibes of your adventure. Every tour
                    includes stunning photo and video memories you'll treasure forever.
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="grid size-12 place-items-center rounded-xl bg-primary/20">
                      <Camera className="size-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Professional Media Capture</p>
                      <p className="text-sm text-white/60">Photos and videos from every angle</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://tourphotos.com/cruisingadventures"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 cursor-pointer"
                    >
                      Relive Your Memories
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Party Mode ───────────────────────────────────────────────── */}
        <section className="bg-white py-24">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <div className="text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Party Mode On!
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
                  Group Events and Celebrations
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  "Turn every moment into a celebration. We capture the energy, laughter,
                  and unforgettable vibes of your special event."
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 overflow-hidden rounded-3xl shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/cruisingadventuresltd/img-034.webp"
                  alt="Group party on speedboat Nassau Bahamas"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  style={{ minHeight: "400px" }}
                />
              </div>
              <div className="space-y-5">
                {[
                  {
                    icon: Music,
                    title: "Birthday Parties",
                    body: "Make your birthday unforgettable with a private speedboat party in Nassau's beautiful waters.",
                  },
                  {
                    icon: Anchor,
                    title: "Corporate Events",
                    body: "Team building and corporate adventures on the water. Perfect for groups of all sizes.",
                  },
                  {
                    icon: Star,
                    title: "Bachelor Parties",
                    body: "Send off the groom with an epic speedboat adventure in the Bahamas. A party to remember.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-border bg-accent/30 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10">
                      <item.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                    </div>
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="block rounded-full bg-primary px-6 py-4 text-center text-sm font-semibold text-white transition-all hover:bg-primary/90 cursor-pointer"
                >
                  Plan Your Group Event
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <Gallery images={partyImages} />
            </div>
          </div>
        </section>

        {/* ── Gallery Preview ──────────────────────────────────────────── */}
        <section className="bg-accent/20 py-20">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-10 flex items-end justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Guider's Replay
                  </span>
                  <h2 className="mt-2 font-display text-4xl font-bold">
                    Adventures in Action
                  </h2>
                </div>
                <Link
                  href="/gallery"
                  className="hidden rounded-full border border-primary/40 px-5 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white sm:inline-flex cursor-pointer"
                >
                  View All Photos
                </Link>
              </div>
            </Reveal>
            <Gallery images={galleryImages} />
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/gallery"
                className="inline-flex rounded-full border border-primary/40 px-6 py-3 text-sm font-medium text-primary"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────── */}
        <section className="bg-white py-24">
          <div className="container-px mx-auto max-w-4xl">
            <Reveal>
              <div className="text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  FAQ
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Everything you need to know before booking your Nassau adventure.
                </p>
              </div>
            </Reveal>
            <RevealGroup className="mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-border bg-card shadow-sm open:shadow-md transition-all duration-200"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-foreground hover:text-primary">
                    {faq.q}
                    <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="border-t border-border px-6 pb-6 pt-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ── Location ─────────────────────────────────────────────────── */}
        <section className="bg-accent/20 py-20">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Find Us
                  </span>
                  <h2 className="mt-3 font-display text-4xl font-bold">
                    Our Location in Nassau
                  </h2>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 size-5 shrink-0 text-primary" />
                      <p className="text-muted-foreground">
                        Malcom Park East Bay Street (next to Antiki Floating Bar),
                        Arawak Cay, North Nassau N.P, Bahamas
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="size-5 shrink-0 text-primary" />
                      <a href="tel:+2428172944" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        242-817-2944
                      </a>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary/90 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Get in Touch
                  </Link>
                </div>
              </Reveal>
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <iframe
                  src="https://maps.google.com/maps?q=Arawak+Cay+Nassau+Bahamas&output=embed&z=15"
                  title="Cruising Adventures location map"
                  className="h-80 w-full border-0 lg:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ───────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-primary py-20 text-white">
          <div className="absolute inset-0 opacity-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ingested/cruisingadventuresltd/img-049.webp"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="container-px relative z-10 mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
                Ready for Your Nassau Adventure?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                Book today and experience the thrill of driving your own speedboat
                through the crystal-clear waters of the Bahamas.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/book-an-adventure"
                  className="inline-flex rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:bg-white/90 hover:-translate-y-0.5 cursor-pointer"
                >
                  Book an Adventure
                </Link>
                <a
                  href="tel:+2428172944"
                  className="inline-flex rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 cursor-pointer"
                >
                  Call 242-817-2944
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
