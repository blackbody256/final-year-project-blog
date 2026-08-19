import Image from "next/image";
import { getInitials, type TeamMember } from "@/data/team";

type TeamAvatarProps = {
  member: TeamMember;
  /** Rendered width/height in pixels. */
  size: number;
  className?: string;
  priority?: boolean;
};

export default function TeamAvatar({
  member,
  size,
  className = "",
  priority = false,
}: TeamAvatarProps) {
  const shared = `overflow-hidden rounded-full border border-border bg-surface ${className}`;

  if (!member.photo) {
    return (
      <div
        className={`flex items-center justify-center font-semibold text-muted ${shared}`}
        style={{ width: size, height: size, fontSize: size / 3 }}
        aria-hidden="true"
      >
        {getInitials(member.name)}
      </div>
    );
  }

  return (
    <Image
      src={member.photo}
      alt={`Portrait of ${member.name}`}
      width={size}
      height={size}
      priority={priority}
      className={`object-cover ${shared}`}
      style={{ width: size, height: size }}
    />
  );
}
