"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Progress", href: "/progress" },
  { name: "Gallery", href: "/gallery" },
];

const teamMembers = [
  { name: "All Team Members", href: "/team" },
  { name: "Andrew Akanga", href: "/team/andrew-akanga" },
  { name: "Ann Treasure Karagwa", href: "/team/ann-treasure-karagwa"},
  { name: "Mable Tusiime", href: "/team/mable-tusiime" },
  { name: "Selina Wanyana Masembe", href: "/team/selina-wanyana-masembe"},
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setMobileTeamOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface shadow-sm">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        {/* Project name */}
        <Link
          href="/"
          className="text-xl font-bold text-primary"
          onClick={closeMobileMenu}
        >
          BSE27-2
        </Link>

        {/* Desktop navigation */}
        <div className="hidden h-full items-center gap-10 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-full items-center border-b-4 px-1 text-base font-medium transition-colors ${
                  isActive
                    ? "border-accent text-accent"
                    : "border-transparent text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Desktop Team dropdown */}
          <div className="group relative flex h-full items-center">
            <Link
              href="/team"
              className={`flex h-full items-center gap-2 border-b-4 px-1 text-base font-medium transition-colors ${
                pathname.startsWith("/team")
                  ? "border-accent text-accent"
                  : "border-transparent text-foreground hover:text-primary"
              }`}
            >
              Team

              <svg
                className="h-4 w-4 transition-transform group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="m5 7.5 5 5 5-5" />
              </svg>
            </Link>

            {/* Desktop dropdown */}
            <div className="invisible absolute right-0 top-full w-64 translate-y-2 rounded-lg border border-border bg-surface py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {teamMembers.map((member) => {
                const isActive = pathname === member.href;

                return (
                  <Link
                    key={member.name}
                    href={member.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block border-l-4 px-5 py-3 text-sm transition-colors ${
                      isActive
                        ? "border-accent bg-background font-semibold text-accent"
                        : "border-transparent text-foreground hover:bg-background hover:text-primary"
                    }`}
                  >
                    {member.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex items-center justify-center text-foreground md:hidden"
          onClick={() => setMobileMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-border bg-surface px-6 py-4 shadow-lg md:hidden">
          <div className="flex flex-col">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`border-l-4 px-4 py-3 font-medium transition-colors ${
                    isActive
                      ? "border-accent bg-background text-accent"
                      : "border-transparent text-foreground hover:bg-background hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Team button */}
            <button
              type="button"
              onClick={() => setMobileTeamOpen((current) => !current)}
              className={`flex items-center justify-between border-l-4 px-4 py-3 text-left font-medium transition-colors ${
                pathname.startsWith("/team")
                  ? "border-accent bg-background text-accent"
                  : "border-transparent text-foreground hover:bg-background hover:text-primary"
              }`}
              aria-expanded={mobileTeamOpen}
            >
              Team

              <svg
                className={`h-4 w-4 transition-transform ${
                  mobileTeamOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="m5 7.5 5 5 5-5" />
              </svg>
            </button>

            {/* Mobile Team links */}
            {mobileTeamOpen && (
              <div className="ml-4 border-l border-border">
                {teamMembers.map((member) => {
                  const isActive = pathname === member.href;

                  return (
                    <Link
                      key={member.name}
                      href={member.href}
                      onClick={closeMobileMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={`block border-l-4 px-5 py-3 text-sm transition-colors ${
                        isActive
                          ? "border-accent bg-background font-semibold text-accent"
                          : "border-transparent text-foreground hover:bg-background hover:text-primary"
                      }`}
                    >
                      {member.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}