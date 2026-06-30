import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal, RevealGroup } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cruising Adventures. Contact us by phone, email or visit us at Arawak Cay, Nassau, Bahamas to book your speedboat adventure.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-900 py-32 text-white">
          <Image
            src="/ingested/cruisingadventuresltd/img-008.webp"
            alt="Contact Cruising Adventures Nassau Bahamas"
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
                Get in Touch
              </span>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 font-display text-5xl font-bold sm:text-6xl md:text-7xl">
                Contact Us
              </h1>
            </Reveal>
            <Reveal>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
                Feel free to contact us with any questions and concerns!
                We're here to help you plan your perfect Nassau adventure.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Contact Cards ────────────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="container-px mx-auto max-w-5xl">
            <Reveal>
              <div className="text-center">
                <h2 className="font-display text-4xl font-bold">Get in Touch</h2>
                <p className="mt-4 text-muted-foreground">
                  Contact us by email, phone, or visit us at our dock.
                </p>
              </div>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="tel:+2428172944"
                className="group flex flex-col items-center gap-5 rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 cursor-pointer"
              >
                <div className="grid size-16 place-items-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <Phone className="size-7 text-primary transition-colors group-hover:text-white" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold">Phone</p>
                  <p className="mt-2 text-primary font-semibold">242-817-2944</p>
                  <p className="mt-1 text-sm text-muted-foreground">Call or text us anytime</p>
                </div>
              </a>

              <a
                href="mailto:cruisingadventuresltd@gmail.com"
                className="group flex flex-col items-center gap-5 rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 cursor-pointer"
              >
                <div className="grid size-16 place-items-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <Mail className="size-7 text-primary transition-colors group-hover:text-white" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold">Email</p>
                  <p className="mt-2 text-primary font-semibold text-sm break-all">
                    cruisingadventuresltd@gmail.com
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">We reply quickly</p>
                </div>
              </a>

              <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                <div className="grid size-16 place-items-center rounded-2xl bg-primary/10">
                  <MapPin className="size-7 text-primary" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold">Visit Us</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Malcom Park East Bay Street<br />
                    (next to Antiki Floating Bar)<br />
                    Arawak Cay, North Nassau N.P, Bahamas
                  </p>
                </div>
              </div>
            </RevealGroup>
          </div>
        </section>

        {/* ── Hours + Social ───────────────────────────────────────────── */}
        <section className="bg-accent/20 py-16">
          <div className="container-px mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <Reveal>
                <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="grid size-10 place-items-center rounded-xl bg-primary/10">
                      <Clock className="size-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold">Hours of Operation</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { day: "Monday - Friday", time: "9:00 AM - 5:00 PM" },
                      { day: "Saturday", time: "9:00 AM - 5:00 PM" },
                      { day: "Sunday", time: "9:00 AM - 5:00 PM" },
                    ].map((h) => (
                      <div key={h.day} className="flex items-center justify-between border-b border-border/60 py-2 last:border-0">
                        <span className="font-medium">{h.day}</span>
                        <span className="text-muted-foreground">{h.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Tours are weather-dependent. We will contact you if conditions require rescheduling.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <h3 className="font-display text-xl font-bold mb-6">Follow Us</h3>
                  <div className="space-y-4">
                    <a
                      href="https://www.instagram.com/cruisingadventuresbahamas/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-xl border border-border p-4 transition-all hover:border-primary/40 hover:shadow-sm cursor-pointer"
                    >
                      <div className="grid size-10 place-items-center rounded-xl bg-pink-50">
                        <InstagramIcon className="size-5 text-pink-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Instagram</p>
                        <p className="text-sm text-muted-foreground">@cruisingadventuresbahamas</p>
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/cruisingadventures"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-xl border border-border p-4 transition-all hover:border-primary/40 hover:shadow-sm cursor-pointer"
                    >
                      <div className="grid size-10 place-items-center rounded-xl bg-blue-50">
                        <FacebookIcon className="size-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Facebook</p>
                        <p className="text-sm text-muted-foreground">Cruising Adventures</p>
                      </div>
                    </a>
                  </div>
                  <div className="mt-6 rounded-xl bg-accent/50 p-4">
                    <p className="text-sm text-muted-foreground">
                      Tag us in your adventure photos! We love seeing your Cruising Adventures
                      memories and may feature them on our page.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Map ──────────────────────────────────────────────────────── */}
        <section className="bg-white py-16">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <h2 className="mb-8 font-display text-3xl font-bold">Find Us on the Map</h2>
            </Reveal>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <iframe
                src="https://maps.google.com/maps?q=Arawak+Cay+Nassau+Bahamas&output=embed&z=15"
                title="Cruising Adventures location in Nassau Bahamas"
                className="h-[450px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
