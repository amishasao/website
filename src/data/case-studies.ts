export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  dates: string;
  image: string;
  deck: string;
};

// Order matches the project cards on the homepage
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "inner-hues",
    title: "Inner Hues: Making Art a Judgment-Free Form of Self-Care",
    summary:
      "A user research and prototyping case study from the Bits of Good Design Bootcamp, exploring how to lower the barriers that stop people from making art.",
    dates: "Jan 2026 - Apr 2026",
    image: "/case-studies/inner-hues/cover.jpg",
    deck: "https://www.figma.com/deck/HMI3kdMZ9WiTGYcFp7GaxW",
  },
  {
    slug: "attune",
    title: "ATTUNE: A Sixth Sense for Conversation",
    summary:
      "Designing a real-time conversational awareness app inspired by nunchi, the Korean art of reading the room, at FigBuild 2026.",
    dates: "March 2026",
    image: "/case-studies/attune/cover.jpg",
    deck: "https://www.figma.com/design/ZCfR7YM7K8049JRZOArAqJ/Nunchi-Prototype?node-id=56-426",
  },
  {
    slug: "hackgt-13",
    title: "HackGT 13: Designing a Seaside Market Website",
    summary:
      "Taking the HackGT 13 website from information architecture to a high-fidelity seaside market design, and then into code.",
    dates: "2026",
    image: "/case-studies/hackgt13/hero.jpg",
    deck: "https://www.figma.com/deck/GyR0cH0kPIuDZaXX7ETj7d/HackGT-13-Website-Project?node-id=13-447",
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((study) => study.slug === slug)!;
}
