import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Clock3,
  Database,
  FileWarning,
  GitBranch,
  Link2,
  MessageSquareText,
  Route,
  Search,
  Wrench,
} from "lucide-react";
import FailureCarousel from "@/components/FailureCarousel";

const visibleFaults = [
  "Charger appears offline",
  "Charging session is interrupted",
  "Connector overheating is reported",
];

const hiddenEvents = [
  "A cooling fan stopped working",
  "The power module became hotter",
  "Other components began reporting faults",
];

const impacts = [
  {
    icon: Clock3,
    title: "More downtime",
    description: "Technicians spend longer searching through charger logs.",
  },
  {
    icon: Wrench,
    title: "Wrong repairs",
    description: "A healthy component may be inspected or replaced.",
  },
  {
    icon: FileWarning,
    title: "Lost evidence",
    description: "Local logs are overwritten after approximately three months.",
  },
];

const solutionSteps = [
  {
    icon: Database,
    number: "01",
    title: "Collect",
    description: "Read A8 controller logs and OCPP platform events.",
  },
  {
    icon: Link2,
    number: "02",
    title: "Connect",
    description: "Match events that occurred around the same time.",
  },
  {
    icon: Route,
    number: "03",
    title: "Trace",
    description: "Reconstruct the sequence from the first fault to the symptom.",
  },
  {
    icon: MessageSquareText,
    number: "04",
    title: "Explain",
    description: "Present the likely cause and the evidence supporting it.",
  },
];

const teamMembers = [
  {
    name: "Andrew Akanga",
    initials: "AA",
    href: "/team/andrew-akanga",
  },
  {
    name: "Ann Treasure Karagwa",
    initials: "AT",
    href: "/team/ann-treasure-karagwa",
  },
  {
    name: "Mable Tusiime",
    initials: "MT",
    href: "/team/mable-tusiime",
  },
  {
    name: "Selina Wanyana Masembe",
    initials: "SW",
    href: "/team/selina-wanyana-masembe",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden px-6 py-20">
        {/* Temporary background until the animation is ready */}
        <div
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,#63c342_0%,#276b32_42%,#102c18_100%)]"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 -z-10 bg-black/50"
          aria-hidden="true"
        />

        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
            <p className="font-semibold uppercase tracking-wider text-[#9def80]">
              BSE27-2 Final Year Project
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              A charger fails. The real cause disappears beneath the alarms.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              The fault technicians see may only be the final symptom. We trace
              the failure back to where it truly began.
            </p>

            <Link
              href="#problem"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90"
            >
              Discover the problem
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="scroll-mt-20 bg-background px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-accent">
              The hidden problem
            </p>

            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Chargers tell us what happened last—not what failed first
            </h2>

            <p className="mt-4 leading-7 text-foreground">
              A single hidden failure can create a trail of misleading alarms.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Visible information */}
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background text-muted">
                <AlertTriangle className="h-6 w-6" aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-primary">
                What the platform reports
              </h3>

              <ul className="mt-6 space-y-4">
                {visibleFaults.map((fault) => (
                  <li
                    key={fault}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <AlertTriangle
                      className="h-5 w-5 shrink-0 text-muted"
                      aria-hidden="true"
                    />
                    {fault}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hidden information */}
            <div className="rounded-2xl border border-accent bg-accent/10 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Search className="h-6 w-6" aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-primary">
                What may have happened
              </h3>

              <ul className="mt-6 space-y-4">
                {hiddenEvents.map((event) => (
                  <li
                    key={event}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <GitBranch
                      className="h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-xl font-semibold text-primary">
            The final alarm can point technicians towards the wrong component.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-accent">
              Why this matters
            </p>

            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              A wrong diagnosis keeps the charger out of service
            </h2>

            <p className="mt-4 leading-7 text-foreground">
              Every delay makes the real cause harder to find.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {impacts.map((impact) => {
              const Icon = impact.icon;

              return (
                <div
                  key={impact.title}
                  className="rounded-2xl border border-border bg-background p-8 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-primary">
                    {impact.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted">
                    {impact.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-accent">
              A real example
            </p>

            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              One failure. Three different stories.
            </h2>

            <p className="mt-4 leading-7 text-foreground">
              Move through the stages to uncover what really happened.
            </p>
          </div>

          <FailureCarousel />
        </div>
      </section>

      {/* Solution */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-accent">
              How we will solve it
            </p>

            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              We turn scattered events into one clear explanation
            </h2>

            <p className="mt-4 leading-7 text-foreground">
              Instead of treating every alarm separately, we rebuild the entire
              failure story.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutionSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-border bg-background p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <span className="text-sm font-bold text-muted">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-primary">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expected difference */}
      <section className="bg-primary px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold uppercase tracking-wider text-accent">
            The expected difference
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-surface md:text-5xl">
            From searching thousands of log entries to understanding one
            complete failure story.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-surface/85">
            The goal is faster diagnosis, fewer unnecessary repairs and clearer
            evidence for technicians.
          </p>

          <Link
            href="/progress"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90"
          >
            Follow our progress
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-semibold uppercase tracking-wider text-accent">
                Meet the Team
              </p>

              <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
                The people building the solution
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-foreground">
                Four software engineering students working to make EV charger
                diagnosis clearer and faster.
              </p>
            </div>

            <Link
              href="/team"
              className="inline-flex items-center gap-2 font-semibold text-primary transition hover:text-accent"
            >
              View team details
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Link
                key={member.name}
                href={member.href}
                className="group rounded-2xl border border-border bg-surface p-6 text-center transition hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
                  {member.initials}
                </div>

                <h3 className="mt-6 text-lg font-bold text-primary transition group-hover:text-accent">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm text-muted">
                  Project Team Member
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View profile

                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}