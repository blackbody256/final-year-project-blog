import Link from "next/link";
import FailureCarousel from "@/components/FailureCarousel";

const failureSteps = [
  {
    number: "1",
    title: "Cooling fan stops",
    description: "Cooling inside the charger is reduced.",
  },
  {
    number: "2",
    title: "Temperature rises",
    description: "The power module begins to overheat.",
  },
  {
    number: "3",
    title: "A fault is reported",
    description: "The connector overheat warning appears.",
  },
];

const solutionSteps = [
  {
    number: "01",
    title: "Collect",
    description: "Read charger logs and platform events.",
  },
  {
    number: "02",
    title: "Connect",
    description: "Match events that happened around the same time.",
  },
  {
    number: "03",
    title: "Trace",
    description: "Follow the sequence from the first fault to the final symptom.",
  },
  {
    number: "04",
    title: "Explain",
    description: "Present the likely cause in understandable language.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="overflow-hidden bg-background px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-wider text-accent">
              BSE27-2 Final Year Project
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
              Finding the real cause behind EV charger failures
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-foreground">
              Our system follows the clues hidden in charger records to show
              technicians what failed, why it failed and how the failure
              developed.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/progress"
                className="rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90"
              >
                Follow Our Progress
              </Link>

              <Link
                href="/gallery"
                className="rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-surface"
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* Temporary animated hero visual */}
          <div className="relative rounded-3xl border border-border bg-surface p-8 shadow-xl">
            <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-background px-3 py-1">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent" />

              <span className="text-xs font-semibold text-primary">
                Analysing
              </span>
            </div>

            <div className="pt-12">
              <div className="mx-auto flex max-w-sm flex-col items-center">
                <div className="w-full rounded-xl border border-border bg-background p-5 text-center">
                  <p className="text-sm text-muted">First event</p>
                  <p className="mt-1 font-semibold text-primary">
                    Cooling fan failure
                  </p>
                </div>

                <div className="h-10 w-1 animate-pulse bg-accent" />

                <div className="w-full rounded-xl border border-border bg-background p-5 text-center">
                  <p className="text-sm text-muted">Resulting condition</p>
                  <p className="mt-1 font-semibold text-primary">
                    Power module overheats
                  </p>
                </div>

                <div className="h-10 w-1 animate-pulse bg-accent" />

                <div className="w-full rounded-xl border border-accent bg-accent/10 p-5 text-center">
                  <p className="text-sm text-muted">Reported symptom</p>
                  <p className="mt-1 font-semibold text-primary">
                    Connector overheat
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-muted">
              This animation will be replaced by the final project video.
            </p>
          </div>
        </div>
      </section>

      {/* Illustrative failure example */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-accent">
              Why diagnosis is difficult
            </p>

            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              One failure can trigger several others
            </h2>

            <p className="mt-4 leading-7 text-foreground">
              The final warning may not show where the problem actually began.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {failureSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="h-full rounded-2xl border border-border bg-background p-7 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent font-bold text-accent-foreground">
                    {step.number}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-primary">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </div>

                {index < failureSteps.length - 1 && (
                  <span
                    className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-2xl font-bold text-accent md:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-xl border-l-4 border-accent bg-background p-5 text-center">
            <p className="font-semibold text-primary">
              The reported fault may be the final symptom—not the original
              cause.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge comparison */}
      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-accent">
              The challenge
            </p>

            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Seeing a fault is not the same as understanding it
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h3 className="text-xl font-bold text-primary">
                What technicians see
              </h3>

              <ul className="mt-6 space-y-4">
                {[
                  "Charger offline",
                  "Charging session interrupted",
                  "Connector overheated",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <span className="h-3 w-3 rounded-full bg-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-accent bg-accent/10 p-8">
              <h3 className="text-xl font-bold text-primary">
                What they need to know
              </h3>

              <ul className="mt-6 space-y-4">
                {[
                  "Which component failed first?",
                  "What sequence of events caused it?",
                  "What should be inspected or repaired?",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-accent">
              Our solution
            </p>

            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              From confusing records to a clear explanation
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutionSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-border bg-background p-7"
              >
                <p className="text-3xl font-bold text-accent">{step.number}</p>

                <h3 className="mt-5 text-xl font-bold text-primary">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-accent">
              Example
            </p>

            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              How a charger failure unfolds
            </h2>

            <p className="mt-4 text-foreground">
              Move through the three stages to see how the system helps.
            </p>
          </div>

          <FailureCarousel />
        </div>
      </section>
    </main>
  );
}