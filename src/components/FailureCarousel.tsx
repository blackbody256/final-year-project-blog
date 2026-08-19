"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    label: "Visible symptom",
    title: "The charger reports an overheating connector",
    description:
      "This is the fault shown to the technician, but it may only be the final result of an earlier problem.",
    number: "01",
  },
  {
    label: "Hidden sequence",
    title: "The problem started with a cooling fan",
    description:
      "The fan stopped working, the power module became hotter and the heat eventually affected other charger components.",
    number: "02",
  },
  {
    label: "System diagnosis",
    title: "The original cause is identified and explained",
    description:
      "The system connects the related events and shows the technician how the failure developed.",
    number: "03",
  },
];

export default function FailureCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function showPreviousSlide() {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  }

  function showNextSlide() {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    );
  }

  const slide = slides[currentSlide];

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      <div
        className="grid min-h-80 md:grid-cols-[0.8fr_1.2fr]"
        aria-live="polite"
      >
        {/* Slide number */}
        <div className="flex items-center justify-center bg-primary p-10">
          <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-accent text-5xl font-bold text-surface dark:text-accent-foreground">
            {slide.number}
          </div>
        </div>

        {/* Slide content */}
        <div className="flex flex-col justify-center p-8 md:p-12">
          <p className="font-semibold uppercase tracking-wider text-accent">
            {slide.label}
          </p>

          <h3 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
            {slide.title}
          </h3>

          <p className="mt-5 max-w-2xl leading-7 text-foreground">
            {slide.description}
          </p>
        </div>
      </div>

      {/* Controls */}
        <div className="flex items-center justify-between border-t border-border px-6 py-4">
            <button
                type="button"
                onClick={showPreviousSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition hover:border-accent hover:bg-background hover:text-accent"
                aria-label="Show previous slide"
            >
                <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
            </button>

            <div className="flex gap-2">
                {slides.map((item, index) => (
                <button
                    key={item.number}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                    aria-current={currentSlide === index}
                    className={`h-2.5 rounded-full transition-all ${
                    currentSlide === index
                        ? "w-8 bg-accent"
                        : "w-2.5 bg-border hover:bg-muted"
                    }`}
                />
                ))}
            </div>

            <button
                type="button"
                onClick={showNextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition hover:border-accent hover:bg-background hover:text-accent"
                aria-label="Show next slide"
            >
                <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
            </button>
            </div>
    </div>
  );
}