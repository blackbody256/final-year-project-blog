"use client";

import { TeamMember } from "@/data/progress";

type Filter = "All" | TeamMember;

type ProgressFiltersProps = {
  activeFilter: Filter;
  onFilterChange: (filter: Filter) => void;
};

const filters: Filter[] = [
  "All",
  "Selina",
  "Andrew",
  "Mable",
  "Treasure",
];

export default function ProgressFilters({
  activeFilter,
  onFilterChange,
}: ProgressFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const active = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              active
                ? "border-accent bg-accent text-accent-foreground shadow-sm"
                : "border-border bg-surface text-muted hover:border-accent hover:text-primary"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}