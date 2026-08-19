import { notFound } from "next/navigation";

const teamMembers = {
  "mable-tusiime": {
    name: "Mable Tusiime",
    role: "Team Member",
    description: "Add Mable's biography and project responsibilities here.",
  },

  "member-2": {
    name: "Member 2",
    role: "Team Member",
    description: "Add this member's biography and responsibilities here.",
  },

  "member-3": {
    name: "Member 3",
    role: "Team Member",
    description: "Add this member's biography and responsibilities here.",
  },

  "member-4": {
    name: "Member 4",
    role: "Team Member",
    description: "Add this member's biography and responsibilities here.",
  },
};

type TeamMemberPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TeamMemberPage({
  params,
}: TeamMemberPageProps) {
  const { slug } = await params;

  const member =
    teamMembers[slug as keyof typeof teamMembers];

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="font-medium text-accent">Meet the Team</p>

        <h1 className="mt-2 text-4xl font-bold text-primary">
          {member.name}
        </h1>

        <p className="mt-3 font-medium text-foreground">
          {member.role}
        </p>

        <p className="mt-6 max-w-2xl leading-7 text-foreground">
          {member.description}
        </p>
      </div>
    </main>
  );
}