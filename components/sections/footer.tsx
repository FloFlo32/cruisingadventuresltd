import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons";
import { brand } from "@/brand.config";

const explore = [
  { label: "Home", href: "/" },
  { label: "Book an Adventure", href: "/book-an-adventure" },
  { label: "Love Birds", href: "/love-birds" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
];

const legal = [
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy and Security Policy", href: "/privacy-security-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-300">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-[2fr_1fr_1fr_1.5fr]">
        {/* Brand column */}
        <div>
          <Link href="/" aria-label={brand.name}>
            <Image
              src="/logo.png"
              alt={`${brand.name} logo`}
              width={150}
              height={52}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            {brand.description}
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="https://www.instagram.com/cruisingadventuresbahamas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-9 place-items-center rounded-lg border border-slate-700 text-slate-400 transition-colors hover:border-primary/60 hover:text-primary cursor-pointer"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href="https://www.facebook.com/cruisingadventures"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid size-9 place-items-center rounded-lg border border-slate-700 text-slate-400 transition-colors hover:border-primary/60 hover:text-primary cursor-pointer"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={`mailto:${brand.social.email}`}
              aria-label="Email"
              className="grid size-9 place-items-center rounded-lg border border-slate-700 text-slate-400 transition-colors hover:border-primary/60 hover:text-primary cursor-pointer"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-100">
            Explore
          </h4>
          <ul className="space-y-2.5">
            {explore.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-slate-400 transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-100">
            Company
          </h4>
          <ul className="space-y-2.5">
            {legal.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-slate-400 transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-100">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-sm text-slate-400 leading-snug">{brand.contact.address}</span>
            </li>
            <li>
              <a
                href={`tel:+${brand.contact.phone}`}
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-primary cursor-pointer"
              >
                <Phone className="size-4 shrink-0 text-primary" />
                {brand.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${brand.social.email}`}
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-primary cursor-pointer"
              >
                <Mail className="size-4 shrink-0 text-primary" />
                {brand.social.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6">
        <p className="container-px mx-auto max-w-7xl text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {brand.name}. All rights reserved. Nassau, Bahamas.
        </p>
      </div>
    </footer>
  );
}
