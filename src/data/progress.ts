export type TeamMember = "Selina" | "Andrew" | "Mable" | "Treasure";

export type ProgressEntry = {
  id: number;
  date: string;
  title: string;
  description: string;
  members: TeamMember[];
  gallerySlug?: string;
};

export const memberColors: Record<TeamMember, string> = {
  Selina: "#f59e0b",
  Andrew: "#3b82f6",
  Mable: "#c084fc",
  Treasure: "#fc8eac",
};

export const progressEntries: ProgressEntry[] = [
  {
    id: 1,
    date: "2026-07-01",
    title: "Problem Identification",
    description:
      "One of the members in the team identified a key challenge in diagnosing EV fast charger failures during her internship at Kiira Vehicle Plant in Jinja.",
    members: ["Treasure"],
    gallerySlug: "problem-identification",
  },

  {
    id: 2,
    date: "2026-07-19",
    title:
      "Presentation of the proposed diagnostic pipeline to Product Development team at Kiira Vehicle Plant",
    description:
      "The team presented the proposed diagnostic pipeline to the Product Development team at Kiira Vehicle Plant, highlighting its potential to enhance the efficiency and accuracy of diagnosing EV fast charger failures. The team received verbal approval to proceed with the project, and the Product Development team expressed interest in collaborating on the development and implementation of the diagnostic pipeline.",
    members: ["Andrew", "Treasure"],
  },

  {
    id: 3,
    date: "2026-08-13",
    title:
      "Presentation of the project to preferred supervisor and project mentor",
    description:
      "The team presented the project to the preferred supervisor and project mentor, Dr. Odongo Stephen Eyobu, outlining the project's objectives, scope and expected outcomes. The presentation received positive feedback, and the team was encouraged to proceed with the project.",
    members: ["Andrew", "Selina", "Mable", "Treasure"],
  },

  {
    id: 4,
    date: "2026-08-13",
    title: "Request for data and information from Kiira Vehicle Plant",
    description:
      "The team submitted a formal request to Kiira Vehicle Plant for access to relevant data and information needed for the diagnostic pipeline development.",
    members: ["Treasure"],
  },

  {
    id: 5,
    date: "2026-08-19",
    title: "Assigned an Expert from Kiira Vehicle Plant to support the project",
    description:
      "The team was assigned an expert from Kiira Vehicle Plant to provide guidance and support throughout the project, ensuring that the diagnostic pipeline aligns with industry standards and best practices.",
    members: ["Andrew", "Selina", "Mable", "Treasure"],
  },

  {
    id: 6,
    date: "2026-08-19",
    title: "Submit Concept Note to Supervisor and Project Mentor for review",
    description:
      "The team submitted a concept note to the supervisor and project mentor for review, outlining the project's objectives, scope and expected outcomes.",
    members: ["Andrew", "Selina", "Mable", "Treasure"],
  },

    {
    id: 7,
    date: "2026-08-20",
    title: "Work on Project Blog",
    description:
      "The team worked on the project blog, documenting the progress and key milestones achieved during the development of the diagnostic pipeline.",
    members: ["Andrew", "Selina", "Mable", "Treasure"],
  },

  /*
   * Add new weekly updates here.
   *
   * Example:
   *
   * {
   *   id: 5,
   *   date: "2026-08-26",
   *   title: "A8 log investigation",
   *   description:
   *     "Reviewed the available A8 controller archives and documented the initial log structure, timestamp formats, event types, and fields that may be useful for incident reconstruction.",
   *   members: ["Selina", "Mable"],
   * },
   */
];

/**
 * Returns progress entries from newest to oldest.
 */
export function getSortedProgressEntries(): ProgressEntry[] {
  return [...progressEntries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/**
 * Returns the latest progress entry.
 */
export function getLatestProgress(): ProgressEntry | undefined {
  return getSortedProgressEntries()[0];
}

/**
 * Returns the latest number of progress entries.
 */
export function getLatestProgressEntries(count: number): ProgressEntry[] {
  return getSortedProgressEntries().slice(0, count);
}
