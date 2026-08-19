import {
  ProgressEntry as ProgressEntryType,
} from "@/data/progress";
import TeamMemberBadge from "./TeamMemberBadge";

type ProgressEntryProps = {
  entry: ProgressEntryType;
  isLatest?: boolean;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}


export default function ProgressEntry({
  entry,
  isLatest = false,
}: ProgressEntryProps) {
  return (
    <article
      className={`group relative border-t border-border py-10 md:py-12 ${
        isLatest
          ? "border-l-2 border-l-accent pl-5 md:pl-8"
          : ""
      }`}
    >
      <div className="grid gap-6 md:grid-cols-[150px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[180px_minmax(0,1fr)]">
        {/* Date */}
        <div className="md:pt-1">
          <time
            dateTime={entry.date}
            className={`block text-sm font-semibold ${
              isLatest
                ? "text-accent"
                : "text-muted"
            }`}
          >
            <span className="md:hidden">
              {formatDate(entry.date)}
            </span>

            <span className="hidden md:block">
              {formatDate(entry.date)}
            </span>
          </time>

          {isLatest && (
            <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-primary">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              Latest
            </span>
          )}
        </div>

        {/* Content */}
        <div className="max-w-3xl">
          <h2
            className={`text-2xl font-semibold tracking-tight md:text-3xl ${
              isLatest
                ? "text-primary"
                : "text-foreground group-hover:text-primary"
            } transition-colors`}
          >
            {entry.title}
          </h2>

          <p className="mt-4 text-base leading-7 text-muted md:text-lg md:leading-8">
            {entry.description}
          </p>

          {/* Contributors */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            {entry.members.map((member) => (
              <TeamMemberBadge
                key={member}
                member={member}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}