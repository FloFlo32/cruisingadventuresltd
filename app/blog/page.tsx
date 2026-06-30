import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal, RevealGroup } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Adventure Blog",
  description:
    "Read about speedboat riding, snorkeling, swimming with pigs, and ATV adventures in Nassau, Bahamas. Tips, guides, and stories from Cruising Adventures.",
};

const posts = [
  {
    slug: "express-island-adventure",
    title: "Express Island Adventure: The Ultimate 30-Minute Speedboat Tour in Nassau",
    excerpt:
      "Short on time but craving an adventure? Our Express Island Adventure is the perfect way to experience the beauty of Nassau in just 30 minutes!",
    date: "February 2025",
    src: "/ingested/cruisingadventuresltd/img-007.webp",
    alt: "Express speedboat island adventure Nassau Bahamas",
    category: "Speedboat",
  },
  {
    slug: "2-seater-speed-boat",
    title: "Experience the Ultimate Cruising Adventure on a 2-Seater Speed Boat",
    excerpt:
      "Take the helm of your very own 2-seater speed boat and explore the stunning waters surrounding Nassau. The adventure of a lifetime awaits.",
    date: "August 2024",
    src: "/ingested/cruisingadventuresltd/img-025.webp",
    alt: "2-seater speedboat adventure Nassau Bahamas",
    category: "Speedboat",
  },
  {
    slug: "atv-and-speed-boat",
    title: "Wheels and Waves: The Ultimate ATV and Speed Boat Adventure in the Bahamas",
    excerpt:
      "A once-in-a-lifetime escapade combining thrilling ATV rides with exhilarating speed boat cruising through the stunning Bahamian waters.",
    date: "February 2025",
    src: "/ingested/cruisingadventuresltd/img-040.webp",
    alt: "ATV and speedboat adventure Bahamas",
    category: "Combo",
  },
  {
    slug: "speed-boat-and-snorkeling",
    title: "Thrill and Tranquility: The Ultimate Bahamas Speed Boat and Snorkeling Adventure",
    excerpt:
      "Captain your own speed boat while exploring the crystal-clear waters of the Bahamas and discover the incredible underwater world.",
    date: "August 2024",
    src: "/ingested/cruisingadventuresltd/img-013.webp",
    alt: "Speedboat and snorkeling adventure Nassau Bahamas",
    category: "Snorkeling",
  },
  {
    slug: "snorkeling-tour",
    title: "Embark on the Ultimate Cruising Adventures Snorkeling Tour in Nassau, Bahamas",
    excerpt:
      "A day filled with excitement, breathtaking scenery, and close encounters with marine life. Nassau's underwater world awaits you.",
    date: "August 2024",
    src: "/ingested/cruisingadventuresltd/img-009.webp",
    alt: "Snorkeling tour Nassau Bahamas reef",
    category: "Snorkeling",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-900 py-32 text-white">
          <Image
            src="/ingested/cruisingadventuresltd/img-006.webp"
            alt="Adventure Blog Cruising Adventures Nassau Bahamas"
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
                Stories and Guides
              </span>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 font-display text-5xl font-bold sm:text-6xl md:text-7xl">
                Adventure Blog
              </h1>
            </Reveal>
            <Reveal>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
                Tips, guides, and stories from Nassau's premier speedboat and
                water adventure company.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Blog Posts ───────────────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="container-px mx-auto max-w-7xl">
            <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.src}
                      alt={post.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h2 className="font-display text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="mt-2 text-sm font-semibold text-primary">
                      Read More
                    </span>
                  </div>
                </Link>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="bg-primary py-16 text-white">
          <div className="container-px mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold">
                Ready to Create Your Own Story?
              </h2>
              <p className="mt-4 text-white/80">
                Stop reading and start adventuring. Book your Nassau speedboat
                experience today.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/book-an-adventure"
                  className="inline-flex rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:bg-white/90 cursor-pointer"
                >
                  Book an Adventure
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 cursor-pointer"
                >
                  Contact Us
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
