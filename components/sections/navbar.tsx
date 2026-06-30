"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/book-an-adventure", label: "Book Adventure" },
  { href: "/love-birds", label: "Love Birds" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-white/90 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-white/80 backdrop-blur-sm"
      )}
    >
      <nav className="container-px mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 py-3">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center" aria-label={brand.name}>
          <Image
            src="/logo.png"
            alt={`${brand.name} logo`}
            width={160}
            height={56}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href.split("#")[0]));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary",
                  active ? "text-primary" : "text-foreground/70"
                )}
              >
                {l.label}
                {active && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Phone + CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:+${brand.contact.phone}`}
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary cursor-pointer"
          >
            <Phone className="size-3.5" />
            {brand.contact.phone}
          </a>
          <Link
            href="/book-an-adventure"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 cursor-pointer"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="grid size-10 place-items-center rounded-lg border border-border/60 text-foreground lg:hidden cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {open && (
        <div className="border-t border-border/60 bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border/60 pt-4">
              <a
                href={`tel:+${brand.contact.phone}`}
                className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm text-muted-foreground hover:bg-accent"
              >
                <Phone className="size-4 text-primary" />
                {brand.contact.phone}
              </a>
              <Link
                href="/book-an-adventure"
                onClick={() => setOpen(false)}
                className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Book an Adventure
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
