import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/magic/gallery";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos and videos of speedboat riding, snorkeling, swimming with pigs, and ATV adventures in Nassau, Bahamas.",
};

// People-only images — confirmed by visual inspection
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
].map((src, i) => ({ src, alt: `Speedboat riding Nassau Bahamas ${i + 1}` }));

const pigIslandImages = [
  "/ingested/cruisingadventuresltd/img-027.webp",
  "/ingested/cruisingadventuresltd/img-029.webp",
  "/ingested/cruisingadventuresltd/img-049.webp",
  "/ingested/cruisingadventuresltd/img-044.webp",
].map((src, i) => ({ src, alt: `Swimming with pigs Nassau Bahamas ${i + 1}` }));

const atvImages = [
  "/ingested/cruisingadventuresltd/img-026.webp",
  "/ingested/cruisingadventuresltd/img-041.webp",
  "/ingested/cruisingadventuresltd/img-042.webp",
  "/ingested/cruisingadventuresltd/img-043.webp",
].map((src, i) => ({ src, alt: `ATV adventure Nassau Bahamas ${i + 1}` }));

const partyImages = [
  "/ingested/cruisingadventuresltd/img-034.webp",
  "/ingested/cruisingadventuresltd/img-045.webp",
  "/ingested/cruisingadventuresltd/img-049.webp",
  "/ingested/cruisingadventuresltd/img-029.webp",
  "/ingested/cruisingadventuresltd/img-014.webp",
  "/ingested/cruisingadventuresltd/img-015.webp",
  "/ingested/cruisingadventuresltd/img-016.webp",
  "/ingested/cruisingadventuresltd/img-017.webp",
].map((src, i) => ({ src, alt: `Group party event Nassau Bahamas ${i + 1}` }));

const categories = [
  { id: "speedboat", label: "Speedboat Riding", images: speedboatImages },
  { id: "pig-island", label: "Pig Island", images: pigIslandImages },
  { id: "atv", label: "ATV Adventures", images: atvImages },
  { id: "parties", label: "Group Parties", images: partyImages },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-900 py-32 text-white">
          <Image
            src="/ingested/cruisingadventuresltd/img-007.webp"
            alt="Gallery of Cruising Adventures Nassau Bahamas"
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
                Photo Gallery
              </span>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 font-display text-5xl font-bold sm:text-6xl md:text-7xl">
                Gallery
              </h1>
            </Reveal>
            <Reveal>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
                "Become a sea captain and take the wheel driving your own Speed Boat
                for a day with our unforgettable and unique tour."
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-8">
                <a
                  href="https://tourphotos.com/cruisingadventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:-translate-y-0.5 cursor-pointer"
                >
                  Relive Your Memories
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Galleries by Category ────────────────────────────────────── */}
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="border-b border-border py-20 last:border-0">
            <div className="container-px mx-auto max-w-7xl">
              <Reveal>
                <div className="mb-8">
                  <h2 className="font-display text-3xl font-bold">{cat.label}</h2>
                </div>
              </Reveal>
              <Gallery images={cat.images} />
            </div>
          </section>
        ))}

        {/* ── Relive Memories CTA ──────────────────────────────────────── */}
        <section className="bg-primary py-16 text-white">
          <div className="container-px mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold">
                Already Went on an Adventure?
              </h2>
              <p className="mt-4 text-white/80">
                Relive your memories and find your photos and videos from your
                Cruising Adventures tour.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://tourphotos.com/cruisingadventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:bg-white/90 cursor-pointer"
                >
                  View Tour Photos
                </a>
                <Link
                  href="/book-an-adventure"
                  className="inline-flex rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 cursor-pointer"
                >
                  Book Your Next Adventure
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
