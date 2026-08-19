import type { Metadata } from "next";
import Link from "next/link";
import TeamAvatar from "@/components/TeamAvatar";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Project Team",
  description:
    "The four final-year Software Engineering students behind the BSE27-2 project.",
};

export default function TeamPage() {
  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="font-medium text-accent-text">BSE27-2</p>

        <h1 className="mt-2 text-4xl font-bold text-primary">
          Project Team
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-muted">
          Four final-year Software Engineering students at Makerere
          University&apos;s College of Computing and Information Sciences.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <li key={member.slug}>
              <Link
                href={`/team/${member.slug}`}
                className="flex h-full flex-col items-center rounded-xl border border-border bg-surface p-8 text-center transition-colors hover:border-accent"
              >
                <TeamAvatar
                  member={member}
                  size={128}
                  priority={index === 0}
                />

                <h2 className="mt-5 text-lg font-semibold text-primary">
                  {member.name}
                </h2>

                {member.role && (
                  <p className="mt-1 text-sm font-medium text-accent-text">
                    {member.role}
                  </p>
                )}

                {member.tagline && (
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {member.tagline}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
