"use client";

import { useMemo, useState } from "react";

import ProgressEntry from "@/components/progress/ProgressEntry";
import ProgressFilters from "@/components/progress/ProgressFilters";

import { getSortedProgressEntries, TeamMember } from "@/data/progress";

type Filter = "All" | TeamMember;

export default function ProgressPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const allEntries = useMemo(() => getSortedProgressEntries(), []);

  const filteredEntries = useMemo(() => {
    if (activeFilter === "All") {
      return allEntries;
    }

    return allEntries.filter((entry) => entry.members.includes(activeFilter));
  }, [activeFilter, allEntries]);

  const latestEntry = allEntries[0];

  return (
    <main className="min-h-screen bg-background">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative isolate overflow-hidden bg-[#102c18] text-white">
        {/* Grid background */}
        <div
          className="absolute inset-0 -z-10 opacity-40 bg-[linear-gradient(rgba(157,239,128,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(157,239,128,0.12)_1px,transparent_1px)] [background-size:72px_72px]"
          aria-hidden="true"
        />

        {/* Decorative circle */}
        <div
          className="absolute -right-32 -top-40 -z-10 h-136 w-136 rounded-full border border-[#9def80]/20 shadow-[0_0_0_42px_rgba(157,239,128,0.04),0_0_0_84px_rgba(157,239,128,0.03)]"
          aria-hidden="true"
        />

        {/* Green glow */}
        <div
          className="absolute -bottom-40 left-1/3 -z-10 h-80 w-80 rounded-full bg-[#63c342]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid min-h-130 items-end gap-12 pb-20 pt-24 md:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.7fr)] md:pb-24 md:pt-28 lg:gap-24">
            {/* Hero heading */}
            <div className="max-w-4xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#9def80]/20 bg-[#9def80]/5 px-3 py-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#9def80]"
                  aria-hidden="true"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9def80]">
                  Development Log
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                Project
                <span className="block text-[#9def80]">Progress.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                Follow our journey as we design and develop an explainable root
                cause diagnosis system for EV fast charger failures.
              </p>
            </div>

            {/* Current phase */}
            <div className="relative">
              <div className="border-l border-white/15 pl-6 md:pl-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  Current phase
                </p>

                <p className="mt-3 text-2xl font-semibold text-[#9def80]">
                  Analysis of Sample Data Logs
                </p>

                <p className="mt-3 max-w-xs text-sm leading-6 text-white/50">
                  The team is currently analyzing sample data logs from the
                  Kiira Vehicle Plant to decode the existing product codes, DCB
                  frames, study the correlation between the JUZA OCCP and A8
                  logs to figure out how to structure the data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRESS CONTENT
      ====================================================== */}
      <section className="relative -mt-8">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          {/* Main content surface */}
          <div className="rounded-2xl border border-border bg-background shadow-[0_20px_60px_rgba(24,35,24,0.06)]">
            {/* =================================================
                FILTER BAR
            ================================================== */}
            <div className="border-b border-border px-6 py-6 md:px-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Development updates
                  </p>

                  <p className="mt-1 text-sm text-muted">
                    {filteredEntries.length}{" "}
                    {filteredEntries.length === 1
                      ? "project update"
                      : "project updates"}
                  </p>
                </div>

                <ProgressFilters
                  activeFilter={activeFilter}
                  onFilterChange={setActiveFilter}
                />
              </div>
            </div>

            {/* =================================================
                UPDATE LIST
            ================================================== */}
            <div className="space-y-4 p-4 md:p-6">
              {filteredEntries.length > 0 ? (
                filteredEntries.map((entry) => (
                  <ProgressEntry
                    key={entry.id}
                    entry={entry}
                    isLatest={
                      activeFilter === "All" && latestEntry?.id === entry.id
                    }
                  />
                ))
              ) : (
                <div className="rounded-xl border border-border bg-surface py-20 text-center">
                  <p className="text-muted">
                    No progress updates found for this team member.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-24" />
    </main>
  );
}
