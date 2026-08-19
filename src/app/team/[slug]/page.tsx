import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TeamAvatar from "@/components/TeamAvatar";
import { getTeamMember, teamMembers } from "@/data/team";

type TeamMemberPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    return { title: "Team member not found" };
  }

  const description =
    member.tagline || `${member.name} is a member of the BSE27-2 project team.`;

  return {
    title: member.name,
    description,
    openGraph: {
      title: member.name,
      description,
      type: "profile",
      images: member.photo ? [{ url: member.photo }] : undefined,
    },
  };
}

export default async function TeamMemberPage({
  params,
}: TeamMemberPageProps) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    notFound();
  }

  const profileLinks = [
    { label: "LinkedIn", href: member.links.linkedin },
    { label: "GitHub", href: member.links.github },
    { label: "X", href: member.links.x },
    {
      label: "Email",
      href: member.links.email ? `mailto:${member.links.email}` : undefined,
    },
  ].filter((link): link is { label: string; href: string } =>
    Boolean(link.href),
  );

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/team"
          className="text-sm font-medium text-accent hover:text-primary"
        >
          &larr; Meet the Team
        </Link>

        <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <TeamAvatar member={member} size={112} priority />

          <div>
            <h1 className="text-4xl font-bold text-primary">
              {member.name}
            </h1>

            {member.role && (
              <p className="mt-2 font-medium text-accent">{member.role}</p>
            )}
          </div>
        </div>

        {member.bio.length > 0 ? (
          <div className="mt-10 space-y-5">
            {member.bio.map((paragraph, index) => (
              <p key={index} className="leading-7 text-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <p className="mt-10 rounded-lg border border-dashed border-border px-5 py-4 leading-7 text-muted">
            Biography coming soon.
          </p>
        )}

        {profileLinks.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
            {profileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
