"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Progress", href: "/progress" },
  { name: "Documents", href: "/documents" },
];

const teamMembers = [
  { name: "All Team Members", href: "/team" },
  { name: "Mable Tusiime", href: "/team/mable-tusiime" },
  { name: "Member 2", href: "/team/member-2" },
  { name: "Member 3", href: "/team/member-3" },
  { name: "Member 4", href: "/team/member-4" },
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
    <header className="relative z-50 border-b border-gray-200 bg-surface shadow-sm">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        {/* Project name */}
        <Link
          href="/"
          className="text-xl font-bold leading-tight text-primary"
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

            <div className="invisible absolute right-0 top-full w-60 translate-y-2 rounded-lg border border-gray-200 bg-surface py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {teamMembers.map((member) => (
                <Link
                  key={member.name}
                  href={member.href}
                  className="block px-5 py-3 text-sm text-foreground transition-colors hover:bg-background hover:text-primary"
                >
                  {member.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="flex items-center justify-center text-foreground md:hidden"
          onClick={() => setMobileMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            // Close icon
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-200 bg-surface px-6 py-4 shadow-lg md:hidden">
          <div className="flex flex-col">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
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

            {/* Mobile Team dropdown button */}
            <button
              type="button"
              onClick={() => setMobileTeamOpen((current) => !current)}
              className={`flex items-center justify-between border-l-4 px-4 py-3 text-left font-medium ${
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
              >
                <path d="m5 7.5 5 5 5-5" />
              </svg>
            </button>

            {/* Mobile Team members */}
            {mobileTeamOpen && (
              <div className="ml-4 border-l border-gray-200">
                {teamMembers.map((member) => (
                  <Link
                    key={member.name}
                    href={member.href}
                    onClick={closeMobileMenu}
                    className="block px-5 py-3 text-sm text-foreground hover:bg-background hover:text-primary"
                  >
                    {member.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}