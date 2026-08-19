"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryCollection } from "@/data/gallery";

type GalleryCollectionSectionProps = {
  collection: GalleryCollection;
  /** The first collection on the page loads eagerly; the rest stay lazy. */
  priority?: boolean;
};

export default function GalleryCollectionSection({
  collection,
  priority = false,
}: GalleryCollectionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const gridRef = useRef<HTMLUListElement>(null);

  const imageCount = collection.images.length;

  // Reveal each tile as it scrolls into view, then stop watching it.
  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) {
      return;
    }

    const tiles = Array.from(grid.querySelectorAll("[data-reveal]"));

    function revealAll() {
      for (const tile of tiles) {
        tile.classList.add("is-visible");
      }
    }

    // The tiles start at opacity 0, so anything that stops the observer from
    // running would hide the gallery for good. Bail out to fully visible if
    // IntersectionObserver is missing or never delivers its first callback.
    if (typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    let delivered = false;

    const observer = new IntersectionObserver(
      (entries) => {
        delivered = true;

        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 },
    );

    for (const tile of tiles) {
      observer.observe(tile);
    }

    const failsafe = window.setTimeout(() => {
      if (!delivered) {
        observer.disconnect();
        revealAll();
      }
    }, 1200);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  // Drive the native dialog from state so Escape and the close button agree.
  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (openIndex !== null && !dialog.open) {
      dialog.showModal();
    } else if (openIndex === null && dialog.open) {
      dialog.close();
    }
  }, [openIndex]);

  // Keep the page behind the lightbox from scrolling.
  useEffect(() => {
    if (openIndex === null) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [openIndex]);

  const showPrevious = useCallback(() => {
    setOpenIndex((current) =>
      current === null ? current : (current - 1 + imageCount) % imageCount,
    );
  }, [imageCount]);

  const showNext = useCallback(() => {
    setOpenIndex((current) =>
      current === null ? current : (current + 1) % imageCount,
    );
  }, [imageCount]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }

    // A native dialog normally closes itself on Escape, but not in every
    // environment. Close explicitly so the behaviour is guaranteed; if the
    // browser also handles it, both paths land on the same state.
    if (event.key === "Escape") {
      setOpenIndex(null);
    }
  }

  const openImage = openIndex === null ? null : collection.images[openIndex];

  return (
    <section className="scroll-mt-24" id={collection.slug}>
      <p className="font-semibold uppercase tracking-wider text-accent-text">
        {collection.eyebrow}
      </p>

      <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
        {collection.title}
      </h2>

      <p className="mt-4 max-w-3xl leading-7 text-foreground">
        {collection.caption}
      </p>

      <ul
        ref={gridRef}
        className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5"
      >
        {collection.images.map((image, index) => (
          <li
            key={image.src}
            data-reveal
            style={{ transitionDelay: `${Math.min(index, 6) * 70}ms` }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Open image ${index + 1} of ${imageCount}: ${image.alt}`}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-[box-shadow,transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_40px_rgba(23,77,54,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  priority={priority && index === 0}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>

              {/* Hover scrim + zoom affordance */}
              <div className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/55 via-black/0 to-black/0 p-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                <span className="rounded-full bg-white/90 p-2 text-black shadow-md">
                  <Maximize2 className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        onClose={() => setOpenIndex(null)}
        onKeyDown={handleKeyDown}
        aria-label={`${collection.title} — enlarged image`}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        {openImage && (
          <div className="flex h-dvh w-dvw flex-col items-center justify-center gap-4 p-4 sm:p-8">
            <div className="flex w-full max-w-3xl items-center justify-between text-white">
              <span className="text-sm font-medium tabular-nums">
                {(openIndex ?? 0) + 1} / {imageCount}
              </span>

              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label="Close"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex w-full max-w-3xl flex-1 items-center justify-center gap-2 sm:gap-4">
              {imageCount > 1 && (
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous image"
                  className="shrink-0 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:p-3"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
              )}

              <Image
                key={openImage.src}
                src={openImage.src}
                alt={openImage.alt}
                width={openImage.width}
                height={openImage.height}
                sizes="(min-width: 640px) 60vw, 90vw"
                className="lightbox-image max-h-[70dvh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              />

              {imageCount > 1 && (
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next image"
                  className="shrink-0 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:p-3"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              )}
            </div>

            <p className="w-full max-w-3xl text-center text-sm leading-6 text-white/80">
              {openImage.alt}
            </p>
          </div>
        )}
      </dialog>
    </section>
  );
}
