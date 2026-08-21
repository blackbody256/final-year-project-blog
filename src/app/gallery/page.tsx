import type { Metadata } from "next";
import GalleryCollectionSection from "@/components/gallery/GalleryCollectionSection";
import { galleryCollections } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Project progress in photographs from Kiira Motors Corporation.",
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
        <p className="font-medium text-accent-text">Progress in pictures</p>

        <h1 className="mt-2 text-4xl font-bold text-primary">
          Project gallery
        </h1>

        <p className="mt-4 max-w-xl leading-7 text-muted">
          Field photos arranged in the order our project developed.
        </p>

        {/* Jump links */}
        <nav aria-label="Gallery sections" className="mt-8">
          <ul className="flex flex-wrap gap-3">
            {galleryCollections.map((collection) => (
              <li key={collection.slug}>
                <a
                  href={`#${collection.slug}`}
                  className="inline-block rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent-text"
                >
                  {collection.eyebrow}
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
