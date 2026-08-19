import Link from "next/link";

const teamMembers = [
  {
    name: "Andrew Akanga",
    slug: "andrew-akanga",
    initials: "AA",
  },
  {
    name: "Ann Treasure Karagwa",
    slug: "ann-treasure-karagwa",
    initials: "AK",
  },
  {
    name: "Mable Tusiime",
    slug: "mable-tusiime",
    initials: "MT",
  },
  {
    name: "Selina Wanyana Masembe",
    slug: "selina-wanyana-masembe",
    initials: "SM",
  },
];

const problemSteps = [
  {
    number: "01",
    title: "A hidden fault begins",
    description:
      "A component such as a cooling fan may stop working without immediately stopping the charger.",
  },
  {
    number: "02",
    title: "Other components react",
    description:
      "Temperature rises and connected modules begin reporting their own warnings.",
  },
  {
    number: "03",
    title: "The final warning appears",
    description:
      "The reported fault may point to an overheated connector instead of the original fan failure.",
  },
];

const solutionSteps = [
  {
    number: "01",
    title: "Collect",
    description:
      "Bring together A8 controller logs and events recorded by the Juza platform.",
  },
  {
    number: "02",
    title: "Reconstruct",
    description:
      "Arrange the records in the order they occurred around the failure.",
  },
  {
    number: "03",
    title: "Diagnose",
    description:
      "Trace the chain of events to identify the most likely original cause.",
  },
  {
    number: "04",
    title: "Explain",
    description:
      "Give technicians a clear diagnosis supported by the available evidence.",
  },
];

function ChevronRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="m9 5 7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RotatingCharger() {
  const vents = Array.from({ length: 30 });

  return (
    <div
      className="charger-scene"
      role="img"
      aria-label="Rotating representation of a KMC EV charger"
    >
      <div className="charger-light" />
      <div className="charger-floor" />
      <div className="charger-shadow" />

      <div className="charger-rotation">
        <div className="charger-model">
          {/* Front face */}
          <div className="charger-face charger-front">
            <div className="body-highlight" />

            <div className="charger-screen">
              <div className="screen-content">
                <strong>KMC</strong>
                <span>DC CHARGER</span>
              </div>
            </div>

            <div className="charger-controls">
              <span className="emergency-control" />
              <span className="status-control">
                <i />
                <i />
              </span>
            </div>

            <div className="charger-brand">
              <strong>KMC</strong>
              <span>KIIRA MOTORS</span>
              <span>CORPORATION</span>
            </div>

            <div className="vent-column front-vents-left">
              {vents.map((_, index) => (
                <span key={`front-left-${index}`} />
              ))}
            </div>

            <div className="vent-column front-vents-right">
              {vents.map((_, index) => (
                <span key={`front-right-${index}`} />
              ))}
            </div>

            <div className="charger-base-opening" />
          </div>

          {/* Back face */}
          <div className="charger-face charger-back">
            <div className="back-indicator" />

            <div className="back-service-door">
              <span className="door-border" />
              <span className="back-door-handle" />
            </div>

            <div className="vent-column back-vents-left">
              {vents.map((_, index) => (
                <span key={`back-left-${index}`} />
              ))}
            </div>

            <div className="vent-column back-vents-right">
              {vents.map((_, index) => (
                <span key={`back-right-${index}`} />
              ))}
            </div>

            <div className="charger-base-opening" />
          </div>

          {/* Left side */}
          <div className="charger-face charger-left">
            <div className="side-reflection" />
            <div className="side-indicator" />

            <div className="side-cable-entry">
              <span />
            </div>

            <div className="side-service-door">
              <span className="door-edge" />
              <span className="service-handle" />
            </div>

            <div className="side-louvres">
              {vents.slice(0, 17).map((_, index) => (
                <span key={`side-left-${index}`} />
              ))}
            </div>

            <div className="side-base-cutout" />
          </div>

          {/* Right side */}
          <div className="charger-face charger-right">
            <div className="side-reflection" />
            <div className="side-indicator" />

            <div className="side-cable-entry">
              <span />
            </div>

            <div className="side-service-door">
              <span className="door-edge" />
              <span className="service-handle" />
            </div>

            <div className="side-louvres">
              {vents.slice(0, 17).map((_, index) => (
                <span key={`side-right-${index}`} />
              ))}
            </div>

            <div className="side-base-cutout" />
          </div>

          <div className="charger-face charger-top" />
          <div className="charger-face charger-bottom" />

          {/* Raised top section */}
          <div className="charger-cap cap-front" />
          <div className="charger-cap cap-back" />
          <div className="charger-cap cap-left" />
          <div className="charger-cap cap-right" />
          <div className="charger-cap cap-top" />

          {/* Cable support arms */}
          <div className="cable-arm cable-arm-left" />
          <div className="cable-arm cable-arm-right" />

          {/* Two charging cables */}
          <div className="cable-loop cable-loop-left" />
          <div className="cable-loop cable-loop-right" />

          <div className="connector connector-left">
            <span className="connector-head" />
            <span className="connector-handle" />
          </div>

          <div className="connector connector-right">
            <span className="connector-head" />
            <span className="connector-handle" />
          </div>
        </div>
      </div>

      <div className="rotation-message">
        <span className="rotation-dot" />
        360° charger view
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4.5rem)] overflow-hidden bg-[#06140d]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(99,195,66,0.19),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,20,13,0.98),rgba(6,20,13,0.7),rgba(6,20,13,0.92))]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-8 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative z-10 text-center lg:text-left">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              EV charger fault diagnosis
            </p>

            <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:mx-0 lg:text-6xl">
              Finding the fault that happened{" "}
              <span className="text-accent">before the alarm.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg lg:mx-0">
              We are developing a system that reconstructs EV charger failures
              and helps technicians identify the original cause—not only the
              final warning.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/progress"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-[#07150e] transition hover:-translate-y-0.5 hover:bg-[#75d455]"
              >
                Follow our progress
                <ChevronRightIcon />
              </Link>

              <a
                href="#the-problem"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:border-accent hover:text-accent"
              >
                Understand the problem
                <ChevronDownIcon />
              </a>
            </div>
          </div>

          <RotatingCharger />
        </div>
      </section>

      {/* Problem */}
      <section id="the-problem" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            The problem
          </p>

          <h2 className="mt-4 text-3xl font-bold text-primary sm:text-5xl">
            The alarm is not always the cause.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
            EV charger components are connected. One small failure can trigger
            several other warnings, making the final alarm look like the
            original problem. The charger logs used during investigation are
            also overwritten after approximately 30 days, so delayed diagnosis
            can permanently remove important evidence.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-5 lg:grid-cols-3">
          {problemSteps.map((step, index) => (
            <article
              key={step.number}
              className="relative rounded-3xl border bg-surface p-7 shadow-sm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent font-bold text-[#07150e]">
                {step.number}
              </span>

              <h3 className="mt-6 text-xl font-bold text-primary">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">{step.description}</p>

              
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border-l-4 border-accent bg-surface px-6 py-5 text-center shadow-sm">
          <p className="font-semibold text-primary">
            Fixing only the final symptom can leave the actual fault inside the
            charger.
          </p>
        </div>
      </section>

      {/* Example */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-primary px-6 py-14 text-center text-white sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            A simple example
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
            The system should find where the failure began.
          </h2>

          <div className="mt-12 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <div className="rounded-2xl bg-white/10 p-6">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent font-bold text-[#07150e]">
                1
              </span>

              <h3 className="mt-4 font-bold">Cooling fan stops</h3>

              <p className="mt-2 text-sm leading-6 text-white/70">
                Cooling inside the charger is reduced.
              </p>
            </div>

            <span className="mx-auto hidden text-accent md:block">
              <ChevronRightIcon />
            </span>

            <div className="rounded-2xl bg-white/10 p-6">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent font-bold text-[#07150e]">
                2
              </span>

              <h3 className="mt-4 font-bold">Temperature rises</h3>

              <p className="mt-2 text-sm leading-6 text-white/70">
                The power module begins to overheat.
              </p>
            </div>

            <span className="mx-auto hidden text-accent md:block">
              <ChevronRightIcon />
            </span>

            <div className="rounded-2xl bg-white/10 p-6">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent font-bold text-[#07150e]">
                3
              </span>

              <h3 className="mt-4 font-bold">A warning appears</h3>

              <p className="mt-2 text-sm leading-6 text-white/70">
                A connector overheating fault is reported.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white px-6 py-4 font-semibold text-primary">
            The connector warning is the final symptom. The stopped cooling fan
            is the possible root cause.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-surface px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Our solution
            </p>

            <h2 className="mt-4 text-3xl font-bold text-primary sm:text-5xl">
              Turn scattered records into one clear explanation.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
              The proposed system will connect what the charger recorded
              internally with what the Juza platform observed externally.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {solutionSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-3xl border bg-background p-7"
              >
                <span className="text-sm font-bold text-accent">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-primary">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mt-10 text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition hover:bg-accent hover:text-[#07150e]"
            >
              View the team
              <ChevronRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .charger-scene {
          position: relative;
          display: flex;
          width: 100%;
          height: 620px;
          align-items: center;
          justify-content: center;
          perspective: 1500px;
        }

        .charger-light {
          position: absolute;
          width: 430px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(99, 195, 66, 0.2),
            rgba(99, 195, 66, 0.04) 48%,
            transparent 72%
          );
          filter: blur(18px);
        }

        .charger-floor {
          position: absolute;
          bottom: 35px;
          width: 420px;
          height: 115px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: linear-gradient(
            rgba(255, 255, 255, 0.035),
            rgba(0, 0, 0, 0.4)
          );
          transform: rotateX(68deg);
        }

        .charger-shadow {
          position: absolute;
          bottom: 60px;
          width: 220px;
          height: 46px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.8);
          filter: blur(16px);
          transform: rotateX(65deg);
        }

        .charger-rotation {
          position: relative;
          width: 190px;
          height: 470px;
          transform-style: preserve-3d;
          animation: chargerTurn 22s linear infinite;
        }

        .charger-model {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
        }

        .charger-face {
          position: absolute;
          box-sizing: border-box;
          overflow: hidden;
          border: 1px solid rgba(202, 207, 200, 0.9);
          backface-visibility: hidden;
          background:
            linear-gradient(
              100deg,
              rgba(255, 255, 255, 0.25),
              transparent 24%,
              rgba(255, 255, 255, 0.82) 47%,
              transparent 65%
            ),
            linear-gradient(90deg, #d5d8d2, #fafbf7 48%, #c9cdc6);
          box-shadow:
            inset -8px 0 18px rgba(0, 0, 0, 0.1),
            inset 3px 0 8px rgba(255, 255, 255, 0.45);
        }

        .charger-front,
        .charger-back {
          width: 190px;
          height: 470px;
          border-radius: 27px 27px 16px 16px;
        }

        .charger-front {
          transform: translateZ(66px);
        }

        .charger-back {
          transform: rotateY(180deg) translateZ(66px);
        }

        .charger-left,
        .charger-right {
          left: 29px;
          width: 132px;
          height: 470px;
          border-radius: 8px;
        }

        .charger-left {
          transform: rotateY(-90deg) translateZ(95px);
        }

        .charger-right {
          transform: rotateY(90deg) translateZ(95px);
        }

        .charger-top,
        .charger-bottom {
          left: 29px;
          width: 132px;
          height: 190px;
        }

        .charger-top {
          top: -95px;
          transform: rotateX(90deg) translateZ(-95px);
        }

        .charger-bottom {
          bottom: -95px;
          transform: rotateX(-90deg) translateZ(-375px);
        }

        .body-highlight,
        .side-reflection {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 24px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.85),
            transparent
          );
          filter: blur(5px);
        }

        .body-highlight {
          left: 21px;
        }

        .side-reflection {
          right: 17px;
        }

        .charger-screen {
          position: absolute;
          top: 53px;
          left: 50%;
          width: 66px;
          height: 66px;
          padding: 5px;
          transform: translateX(-50%);
          border: 6px solid #d1d4ce;
          border-radius: 50%;
          background: #ffffff;
          box-shadow:
            inset 0 0 8px rgba(0, 0, 0, 0.15),
            0 3px 8px rgba(0, 0, 0, 0.16);
        }

        .screen-content {
          display: flex;
          height: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #e8f7e2;
          color: #174d36;
        }

        .screen-content strong {
          font-size: 9px;
        }

        .screen-content span {
          margin-top: 2px;
          font-size: 4px;
          font-weight: 700;
        }

        .charger-controls {
          position: absolute;
          top: 134px;
          left: 50%;
          display: flex;
          gap: 11px;
          transform: translateX(-50%);
        }

        .emergency-control,
        .status-control {
          display: block;
          width: 25px;
          height: 25px;
          border: 2px solid #bfc3bd;
          border-radius: 4px;
          background: #dedfdb;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);
        }

        .emergency-control::after {
          content: "";
          display: block;
          width: 13px;
          height: 13px;
          margin: 4px auto;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #ef6565, #941818);
        }

        .status-control {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          background: #b9bbce;
        }

        .status-control i {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #394a78;
        }

        .charger-brand {
          position: absolute;
          top: 177px;
          left: 50%;
          display: flex;
          width: 110px;
          transform: translateX(-50%);
          flex-direction: column;
          align-items: center;
          line-height: 1;
        }

        .charger-brand strong {
          color: #ed1c2b;
          font-size: 29px;
          font-weight: 900;
          letter-spacing: -0.12em;
          transform: skewX(-8deg);
        }

        .charger-brand span {
          margin-top: 4px;
          color: #242424;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 0.15em;
        }

        .charger-brand span:last-child {
          margin-top: 2px;
          font-size: 5.5px;
          letter-spacing: 0.22em;
        }

        .vent-column {
          position: absolute;
          top: 180px;
          bottom: 48px;
          display: flex;
          width: 18px;
          flex-direction: column;
          justify-content: space-between;
        }

        .vent-column span,
        .side-louvres span {
          display: block;
          height: 2.5px;
          border-radius: 3px;
          background: linear-gradient(90deg, #2b302d, #606560);
          box-shadow: inset 0 1px rgba(255, 255, 255, 0.12);
        }

        .front-vents-left,
        .back-vents-left {
          left: 9px;
        }

        .front-vents-right,
        .back-vents-right {
          right: 9px;
        }

        .charger-base-opening {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 65px;
          height: 15px;
          transform: translateX(-50%);
          border-radius: 12px 12px 0 0;
          background: #0d130f;
        }

        .back-indicator,
        .side-indicator {
          position: absolute;
          top: 38px;
          left: 18px;
          right: 18px;
          height: 7px;
          border: 1px solid #aeb5b0;
          border-radius: 5px;
          background: linear-gradient(90deg, #abb6b0, #ecefeb, #adb6b1);
        }

        .back-service-door {
          position: absolute;
          top: 82px;
          right: 24px;
          bottom: 56px;
          left: 24px;
          border: 1px solid rgba(87, 92, 88, 0.4);
          border-radius: 5px;
        }

        .back-door-handle {
          position: absolute;
          top: 45%;
          right: -7px;
          width: 11px;
          height: 38px;
          border-radius: 3px;
          background: linear-gradient(90deg, #101211, #3d413e);
        }

        .side-service-door {
          position: absolute;
          top: 76px;
          right: 13px;
          bottom: 56px;
          left: 13px;
          border: 1px solid rgba(75, 81, 76, 0.42);
          border-radius: 4px;
          box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.22);
        }

        .door-edge {
          position: absolute;
          inset: 3px;
          border: 1px solid rgba(86, 91, 87, 0.16);
          border-radius: 3px;
        }

        .service-handle {
          position: absolute;
          top: 45%;
          right: -6px;
          width: 11px;
          height: 39px;
          border-radius: 3px;
          background: linear-gradient(90deg, #090b0a, #343936);
          box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
        }

        .side-cable-entry {
          position: absolute;
          top: 55px;
          left: 17px;
          width: 25px;
          height: 16px;
          border-radius: 3px;
          background: #272b29;
          box-shadow: inset 0 0 0 2px #535955;
        }

        .side-cable-entry span {
          position: absolute;
          top: 4px;
          left: 8px;
          width: 9px;
          height: 8px;
          border-radius: 3px;
          background: #090a09;
        }

        .side-louvres {
          position: absolute;
          right: 5px;
          bottom: 53px;
          display: flex;
          width: 24px;
          height: 130px;
          flex-direction: column;
          justify-content: space-between;
        }

        .side-base-cutout {
          position: absolute;
          right: 22px;
          bottom: 0;
          left: 22px;
          height: 13px;
          border-radius: 11px 11px 0 0;
          background: #0e1410;
        }

        .charger-cap {
          position: absolute;
          border: 1px solid #ced2cc;
          background: linear-gradient(105deg, #d7dad5, #ffffff 48%, #c5c9c3);
          box-shadow:
            inset -5px -4px 9px rgba(0, 0, 0, 0.08),
            0 3px 6px rgba(0, 0, 0, 0.15);
        }

        .cap-front,
        .cap-back {
          top: -30px;
          left: 4px;
          width: 182px;
          height: 56px;
          border-radius: 11px 11px 4px 4px;
        }

        .cap-front {
          transform: translateZ(63px);
        }

        .cap-back {
          transform: rotateY(180deg) translateZ(63px);
        }

        .cap-left,
        .cap-right {
          top: -30px;
          left: 31px;
          width: 128px;
          height: 56px;
        }

        .cap-left {
          transform: rotateY(-90deg) translateZ(91px);
        }

        .cap-right {
          transform: rotateY(90deg) translateZ(91px);
        }

        .cap-top {
          top: -94px;
          left: 31px;
          width: 128px;
          height: 182px;
          transform: rotateX(90deg);
        }

        .cable-arm {
          position: absolute;
          top: -11px;
          width: 92px;
          height: 25px;
          border: 1px solid #d0d4ce;
          border-radius: 5px;
          background: linear-gradient(#f6f8f4, #c9cdc7);
          box-shadow: 0 3px 7px rgba(0, 0, 0, 0.22);
        }

        .cable-arm-left {
          left: -76px;
          transform: translateZ(28px);
        }

        .cable-arm-right {
          right: -76px;
          transform: translateZ(28px);
        }

        .cable-loop {
          position: absolute;
          top: 6px;
          width: 82px;
          height: 210px;
          border: 8px solid #121513;
          border-radius: 46% 46% 50% 50%;
          box-shadow:
            inset 2px 0 2px rgba(255, 255, 255, 0.1),
            3px 5px 8px rgba(0, 0, 0, 0.4);
        }

        .cable-loop-left {
          left: -82px;
          transform: translateZ(25px) rotate(-3deg);
        }

        .cable-loop-right {
          right: -82px;
          transform: translateZ(25px) rotate(3deg);
        }

        .connector {
          position: absolute;
          top: 177px;
          width: 21px;
          height: 48px;
          transform-style: preserve-3d;
        }

        .connector-head {
          position: absolute;
          top: 0;
          left: 0;
          width: 21px;
          height: 27px;
          border-radius: 7px;
          background: linear-gradient(90deg, #aaaFA9, #f6f7f4, #858b86);
          box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.35);
        }

        .connector-handle {
          position: absolute;
          top: 20px;
          left: 7px;
          width: 9px;
          height: 28px;
          border-radius: 4px;
          background: #161917;
        }

        .connector-left {
          left: -36px;
          transform: translateZ(62px) rotate(12deg);
        }

        .connector-right {
          right: -36px;
          transform: translateZ(62px) rotate(-12deg);
        }

        .rotation-message {
          position: absolute;
          bottom: 2px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .rotation-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #63c342;
          box-shadow: 0 0 9px rgba(99, 195, 66, 0.8);
        }

        @keyframes chargerTurn {
          from {
            transform: rotateX(-3deg) rotateY(-25deg);
          }

          to {
            transform: rotateX(-3deg) rotateY(335deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .charger-rotation {
            animation: none;
            transform: rotateX(-3deg) rotateY(-25deg);
          }
        }

        @media (max-width: 640px) {
          .charger-scene {
            height: 440px;
            margin-block: -20px;
            transform: scale(0.68);
            transform-origin: center;
          }

          .charger-floor {
            width: 340px;
          }
        }

        @media (min-width: 641px) and (max-width: 1023px) {
          .charger-scene {
            height: 560px;
            transform: scale(0.88);
            transform-origin: center;
          }
        }

        @media (max-width: 380px) {
          .charger-scene {
            height: 410px;
            transform: scale(0.6);
          }
        }
      `}</style>
    </main>
  );
}