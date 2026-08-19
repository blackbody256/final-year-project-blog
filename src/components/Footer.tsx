import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Progress", href: "/progress" },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "/team" },
];

export default function Footer() {
  return (
    <footer className="bg-[#06140d] px-6 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 py-14 md:grid-cols-2">
        <div>
          <Link
            href="/"
            className="text-xl font-bold tracking-wide text-white"
          >
            BSE27-2
          </Link>

          <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
            Developing an explainable system that helps technicians trace EV
            charger failures and identify their most likely root causes.
          </p>
        </div>

        <div className="md:text-right">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Explore
          </h2>

          <nav
            aria-label="Footer navigation"
            className="mt-5 flex flex-wrap gap-x-6 gap-y-3 md:justify-end"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/10 py-6 text-center text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} BSE27-2. All rights reserved.</p>

        <p>Makerere University · Software Engineering</p>
      </div>
    </footer>
  );
}