import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";

const posts: Record<string, {
  title: string;
  date: string;
  category: string;
  src: string;
  alt: string;
  content: string[];
}> = {
  "express-island-adventure": {
    title: "Express Island Adventure: The Ultimate 30-Minute Speedboat Tour in Nassau",
    date: "February 25, 2025",
    category: "Speedboat",
    src: "/ingested/cruisingadventuresltd/img-007.webp",
    alt: "Express speedboat island adventure Nassau Bahamas",
    content: [
      "Short on time but craving an adventure? Our Express Island Adventure is the perfect way to experience the beauty of Nassau in just 30 minutes!",
      "Whether you're a cruise passenger with limited time ashore or a tourist looking for a quick thrill, our 30-minute speedboat tour delivers the Bahamian experience you've been dreaming of.",
      "You'll take the helm of your own 2-seater speedboat and zip across Nassau's crystal-clear turquoise waters under the guidance of our expert team. See the stunning coastline, feel the warm Caribbean breeze, and experience the freedom of the open water.",
      "Our certified guides ensure your safety throughout while letting you experience the excitement of driving your own speedboat. No license or experience required.",
      "After your tour, guests receive complimentary drinks at the famous Lime Wedge bar. It's the perfect Nassau adventure for time-pressed travelers.",
    ],
  },
  "2-seater-speed-boat": {
    title: "Experience the Ultimate Cruising Adventure on a 2-Seater Speed Boat",
    date: "August 2024",
    category: "Speedboat",
    src: "/ingested/cruisingadventuresltd/img-025.webp",
    alt: "2-seater speedboat Nassau Bahamas",
    content: [
      "Take the helm of your very own 2-seater speed boat and explore the stunning waters surrounding Nassau, Bahamas.",
      "Our 2-seater speedboat experience is perfect for couples, friends, or solo adventurers who want the thrill of driving their own boat. You'll captain your vessel with confidence thanks to our expert pre-tour instruction.",
      "The tour takes you through Nassau's most beautiful waterways, past stunning coral reefs, and to secluded spots that only boats can access. Our guides lead the way, ensuring you see the very best of what Nassau's waters have to offer.",
      "Swimming with the famous Bahamian swimming pigs is included in this package. These friendly animals have become one of the most unique wildlife encounters in the Caribbean.",
      "No experience is required. Our certified guides provide comprehensive instructions before every tour, ensuring a safe and exhilarating adventure for everyone.",
    ],
  },
  "atv-and-speed-boat": {
    title: "Wheels and Waves: The Ultimate ATV and Speed Boat Adventure in the Bahamas",
    date: "February 2025",
    category: "Combo",
    src: "/ingested/cruisingadventuresltd/img-040.webp",
    alt: "ATV and speedboat combo adventure Bahamas",
    content: [
      "Looking for the ultimate combo adventure in Nassau? Our Wheels and Waves package delivers a once-in-a-lifetime escapade combining thrilling ATV rides with exhilarating speed boat cruising.",
      "Start your adventure on land with an exciting ATV ride through Nassau's scenic terrain. Feel the rush as you navigate trails and take in panoramic views of the island.",
      "Then head to the water for your speedboat experience. You'll take the helm of your own 2-seater speedboat and explore the crystal-clear Bahamian waters with our expert guides.",
      "This combo package is ideal for adrenaline seekers who want to experience both land and sea adventures in one unforgettable day.",
      "The combination of ATV riding and speedboating creates memories that will last a lifetime. Contact us today to book your Wheels and Waves adventure.",
    ],
  },
  "speed-boat-and-snorkeling": {
    title: "Thrill and Tranquility: The Ultimate Bahamas Speed Boat and Snorkeling Adventure",
    date: "August 2024",
    category: "Snorkeling",
    src: "/ingested/cruisingadventuresltd/img-013.webp",
    alt: "Speedboat and snorkeling Nassau Bahamas",
    content: [
      "Experience the perfect blend of thrills and tranquility with our Speed Boat and Snorkeling Adventure in Nassau, Bahamas.",
      "Captain your own speed boat while exploring the crystal-clear waters of the Bahamas, then discover the incredible underwater world through snorkeling at some of Nassau's most stunning reef locations.",
      "Our expert guides take you to the best snorkeling spots where you'll encounter colorful tropical fish, vibrant coral formations, and the diverse marine life that makes the Bahamas one of the world's premier snorkeling destinations.",
      "Whether you're an experienced snorkeler or a complete beginner, our team will ensure you have a safe and incredible experience under the water.",
      "The combination of speedboat driving excitement and the peaceful beauty of snorkeling makes this one of our most popular and highly-rated adventures.",
    ],
  },
  "snorkeling-tour": {
    title: "Embark on the Ultimate Cruising Adventures Snorkeling Tour in Nassau, Bahamas",
    date: "August 2024",
    category: "Snorkeling",
    src: "/ingested/cruisingadventuresltd/img-009.webp",
    alt: "Snorkeling Nassau Bahamas coral reef",
    content: [
      "Embark on a day filled with excitement, breathtaking scenery, and close encounters with marine life on our Nassau Snorkeling Tour.",
      "Nassau's waters are home to some of the most spectacular coral reefs in the Caribbean. Our snorkeling tour takes you to the very best spots, where you'll discover an underwater world teeming with colorful fish and coral formations.",
      "Our certified guides accompany you throughout the tour, pointing out interesting marine life and ensuring your safety at every moment. All snorkeling equipment is provided.",
      "The crystal-clear waters of the Bahamas offer visibility that snorkelers dream about. On a clear day, you can see up to 100 feet below the surface, revealing the incredible biodiversity of Nassau's marine ecosystem.",
      "Perfect for families, couples, and solo travelers alike, our snorkeling tours run daily. Contact us to book your underwater adventure.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Blog Post" };
  return {
    title: post.title,
    description: post.content[0],
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[60vh] flex-col items-center justify-center">
          <h1 className="font-display text-3xl font-bold">Post not found</h1>
          <Link href="/blog" className="mt-4 text-primary hover:underline">
            Back to Blog
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-900 py-32 text-white">
          <Image
            src={post.src}
            alt={post.alt}
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80" />
          <div className="container-px relative z-10 mx-auto max-w-4xl">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="size-4" />
                Back to Blog
              </Link>
            </Reveal>
            <Reveal>
              <div className="mt-6 flex items-center gap-3">
                <span className="rounded-full bg-primary/80 px-3 py-1 text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-sm text-white/60">{post.date}</span>
              </div>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
                {post.title}
              </h1>
            </Reveal>
          </div>
        </section>

        {/* ── Article Content ──────────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="container-px mx-auto max-w-3xl">
            <Reveal>
              <article>
                {post.content.map((paragraph, i) => (
                  <p key={i} className="mt-6 first:mt-0 text-muted-foreground leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </article>
            </Reveal>

            <Reveal>
              <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
                <h2 className="font-display text-2xl font-bold">Ready for Your Adventure?</h2>
                <p className="mt-3 text-muted-foreground">
                  Book your Nassau speedboat experience today and create your own story.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/book-an-adventure"
                    className="inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary/90 cursor-pointer"
                  >
                    Book an Adventure
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent cursor-pointer"
                  >
                    More Stories
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
