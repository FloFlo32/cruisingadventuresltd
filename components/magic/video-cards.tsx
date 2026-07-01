"use client";

import * as React from "react";
import { Play, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type VideoCard = { thumb: string; video: string; title: string };

/**
 * VideoCards — thumbnail grid that plays real video inline in a lightbox on click,
 * instead of navigating away. Mirrors the Gallery lightbox pattern.
 */
export function VideoCards({ cards, className }: { cards: VideoCard[]; className?: string }) {
  const [open, setOpen] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className={cn("grid gap-6 sm:grid-cols-3", className)}>
        {cards.map((c, i) => (
          <button
            key={c.title}
            onClick={() => setOpen(i)}
            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Play video: ${c.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.thumb}
              alt={c.title}
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
                {c.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={cards[open].title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-border bg-card text-foreground"
            onClick={() => setOpen(null)}
          >
            <X className="size-5" />
          </button>
          <video
            key={cards[open].video}
            src={cards[open].video}
            controls
            autoPlay
            playsInline
            className="max-h-[85vh] max-w-[90vw] rounded-xl bg-black"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
