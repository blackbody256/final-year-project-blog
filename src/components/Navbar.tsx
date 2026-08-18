"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className="border-b border-gray-200 bg-surface shadow-sm">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="text-xl font-bold leading-tight text-primary">
            <p>BSE27-2</p>
          </div>
        </Link>

        <div className="flex h-full items-center gap-10">
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

          {/* Team dropdown */}
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

            <div className="invisible absolute right-0 top-full z-50 w-60 translate-y-2 rounded-lg border border-gray-200 bg-surface py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
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
      </nav>
    </header>
  );
}