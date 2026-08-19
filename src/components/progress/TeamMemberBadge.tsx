import { memberColors, TeamMember } from "@/data/progress";

type TeamMemberBadgeProps = {
  member: TeamMember;
};

export default function TeamMemberBadge({
  member,
}: TeamMemberBadgeProps) {
  const color = memberColors[member];

  return (
    <span className="inline-flex items-center gap-2 text-sm text-muted">
      <span
        className="h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />

      <span>{member}</span>
    </span>
  );
}