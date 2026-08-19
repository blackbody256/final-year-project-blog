export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  photo: string | null;
  /** Empty strings are treated as "not supplied" and are not rendered. */
  links: {
    linkedin?: string;
    github?: string;
    x?: string;
    email?: string;
  };
  /** Full biography, one string per paragraph. Empty until the member supplies it. */
  bio: string[];
};

export const teamMembers: TeamMember[] = [
  {
    slug: "akanga-andrew",
    name: "Akanga Andrew",
    role: "Backend and Architecture",
    tagline:
      "Software Engineering finalist at Makerere. Backend and architecture.",
    photo: "/team/akanga-andrew.jpeg",
    links: {
      linkedin: "https://www.linkedin.com/in/akanga-andrew-1c4/",
      github: "https://github.com/blackbody256",
      x: "https://x.com/TinkaAndrew2",
    },
    bio: [
      "Akanga Andrew is a final-year Bachelor of Science in Software Engineering student at Makerere University's College of Computing and Information Sciences.",
      "His work sits on the backend and architecture side of software: service boundaries, data models, and the design decisions made early that determine what a system can do later. He has worked as a backend engineer at AIBOS Uganda and serves as Creative Lead for the AWS Cloud Club at Makerere.",
      "Most of what he brings to this project came from a field attachment at Kiira Motors Corporation, in the Charger Systems and Networks Division. There he led development of an electric-bus fleet operations and planning system, taking it from requirements specification through architecture, documentation and implementation, and contributed to KMC's customer-facing energy billing platform.",
      "The part that shaped this project happened away from the keyboard. He installed and commissioned chargers, connected them to the grid, tested them by charging buses, and worked alongside maintenance technicians pulling logs from faulty units and tracing failures to their cause. He watched a single fault take weeks of test-and-replace work to resolve, with the charger out of service the whole time. That experience is the origin of this project.",
      "On the team he works on the diagnosis engine and the system architecture that connects embedded controller logs, OCPP event data, and the reasoning layer that has to explain itself to the technician using it.",
      "He is interested in software that runs where the consequences are physical, and in African infrastructure problems that do not have a solution waiting to be imported.",
    ],
  },
  {
    slug: "ann-treasure-karagwa",
    name: "Ann Treasure Karagwa",
    role: "",
    tagline: "",
    photo: null,
    links: {
      linkedin: "",
      github: "",
      x: "",
    },
    bio: [],
  },
  {
    slug: "mable-tusiime",
    name: "Mable Tusiime",
    role: "",
    tagline: "",
    photo: "/team/mable-tusiime.jpeg",
    links: {
      linkedin: "",
      github: "",
      x: "",
    },
    bio: [],
  },
  {
    slug: "selina-wanyana-masembe",
    name: "Selina Wanyana Masembe",
    role: "",
    tagline: "",
    photo: "/team/selina-wanyana-masembe.jpeg",
    links: {
      linkedin: "",
      github: "",
      x: "",
    },
    bio: [],
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug);
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}
