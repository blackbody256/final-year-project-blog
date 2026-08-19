import type { Metadata } from "next";
import GalleryCollectionSection from "@/components/gallery/GalleryCollectionSection";
import { galleryCollections } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Field photographs of electric-bus charging infrastructure at Kiira Motors Corporation: commissioning, maintenance and fault diagnosis.",
};

export default function GalleryPage() {
  return (
    <main className="px-6 py-16">
      {/* Without JavaScript the reveal animation never runs, so make sure the
          tiles are visible regardless. */}
      <noscript>
        <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
      </noscript>

      <div className="mx-auto max-w-7xl">
        <p className="font-medium text-accent">Field work</p>

        <h1 className="mt-2 text-4xl font-bold text-primary">Gallery</h1>

        <p className="mt-4 max-w-3xl leading-7 text-muted">
          Photographs from the charging infrastructure this project is built
          around, taken at Kiira Motors Corporation. Each set documents one
          piece of work: what the hardware is, what was done to it, and why it
          matters to the problem we are solving.
        </p>

        {/* Jump links */}
        <nav aria-label="Gallery sections" className="mt-8">
          <ul className="flex flex-wrap gap-3">
            {galleryCollections.map((collection) => (
              <li key={collection.slug}>
                <a
                  href={`#${collection.slug}`}
                  className="inline-block rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {collection.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-16 space-y-20">
          {galleryCollections.map((collection, index) => (
            <GalleryCollectionSection
              key={collection.slug}
              collection={collection}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
