// To add a case study: add an entry here, then copy
// src/app/work/_template/page.tsx to src/app/work/<slug>/page.tsx.
// The homepage tile, /work page and "Next" links pick it up automatically.

export type CaseStudyTile = {
  // Text band under the cover image
  band: string;
  ink: string;
  roleChip: { bg: string; ink: string };
  highlightChip: { bg: string; ink: string };
  // Heading style for the tile title; defaults to the site's heading font
  font?: "heading" | "instrument";
};

export type CaseStudy = {
  slug: string;
  // Short name for the homepage tile, e.g. "Inner Hues"
  name: string;
  title: string;
  summary: string;
  dates: string;
  // Cover image: used on the tile and for link previews
  image: string;
  deck: string;
  // One line about the product itself, for the homepage tile
  tagline: string;
  role: string;
  // Full outcome for the case study header; highlight is the short chip version
  outcome: string;
  highlight: string;
  // Optional tile colors, borrowed from the project's own deck
  tile?: CaseStudyTile;
};

// Sage band with plum and coral chips, from the Design Portfolio palette
export const DEFAULT_TILE: CaseStudyTile = {
  band: "#f4f5e7",
  ink: "#2d2a31",
  roleChip: { bg: "#2d2a31", ink: "#faf6ec" },
  highlightChip: { bg: "#c94f37", ink: "#ffffff" },
  font: "heading",
};

// Order matches the tiles on the homepage
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "inner-hues",
    name: "Inner Hues",
    title: "Inner Hues: Making Art a Judgment-Free Form of Self-Care",
    summary:
      "A user research and prototyping case study from the Bits of Good Design Bootcamp, exploring how to lower the barriers that stop people from making art.",
    dates: "Jan 2026 - Apr 2026",
    image: "/case-studies/inner-hues/cover.jpg",
    deck: "https://www.figma.com/deck/HMI3kdMZ9WiTGYcFp7GaxW",
    tagline:
      "A judgment-free digital art space that makes creative self-care feel approachable.",
    role: "User researcher & product designer",
    outcome:
      "Research with 15 survey responses and 4 interviews led to 3 usability-driven iterations, presented as a live demo at the Bits of Good bootcamp.",
    highlight: "15 surveys · 4 interviews · 3 tested iterations",
    tile: {
      band: "#f3f1e6",
      ink: "#2d2a31",
      roleChip: { bg: "#2d2a31", ink: "#faf6ec" },
      highlightChip: { bg: "#c94f37", ink: "#ffffff" },
      font: "instrument",
    },
  },
  {
    slug: "attune",
    name: "ATTUNE",
    title: "ATTUNE: A Sixth Sense for Conversation",
    summary:
      "Designing a real-time conversational awareness app inspired by nunchi, the Korean art of reading the room, at FigBuild 2026.",
    dates: "March 2026",
    image: "/case-studies/attune/cover.jpg",
    deck: "https://www.figma.com/design/ZCfR7YM7K8049JRZOArAqJ/Nunchi-Prototype?node-id=56-426",
    tagline: "Reading the room, in real time",
    role: "User researcher & product designer",
    outcome:
      "Presented at FigBuild 2026. Feedback from the popular vote now shapes my newer projects.",
    highlight: "FigBuild 2026",
    // ATTUNE has its own hand-built tile in work-bento.tsx
  },
  {
    slug: "hackgt-13",
    name: "HackGT 13 Website",
    title: "HackGT 13: Designing a Seaside Market Website",
    summary:
      "Taking the HackGT 13 website from information architecture to a high-fidelity seaside market design, and then into code.",
    dates: "2026",
    image: "/case-studies/hackgt13/hero.jpg",
    deck: "https://www.figma.com/deck/GyR0cH0kPIuDZaXX7ETj7d/HackGT-13-Website-Project?node-id=13-447",
    tagline:
      "A seaside-market site for Georgia Tech's largest hackathon, from information architecture to React.",
    role: "Design Engineer",
    outcome:
      "Launched at hack.gt and drew thousands of applicants for a 1,500+ hacker event.",
    highlight: "Thousands of applicants",
    tile: {
      band: "#efcfa8",
      ink: "#5a2e14",
      roleChip: { bg: "#8a4b24", ink: "#fff3e4" },
      highlightChip: { bg: "#2f6f86", ink: "#ffffff" },
    },
  },
];

export function getCaseStudy(slug: string) {
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) {
    throw new Error(
      `No case study with slug "${slug}". Add it to CASE_STUDIES in src/data/case-studies.ts.`
    );
  }
  return study;
}

export function caseStudyHref(slug: string) {
  return `/work/${slug}`;
}
