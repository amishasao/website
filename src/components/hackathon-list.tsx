"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

type Hackathon = (typeof DATA.hackathons)[number];

const isFeatured = (h: Hackathon) => "featured" in h && h.featured;

// Featured hackathons (featured: true) show first; the rest stay behind a
// toggle. With none featured, the first 4 show.
export function HackathonList() {
  const [expanded, setExpanded] = useState(false);
  const anyFeatured = DATA.hackathons.some(isFeatured);
  const featured = anyFeatured
    ? DATA.hackathons.filter(isFeatured)
    : DATA.hackathons.slice(0, 4);
  const rest = DATA.hackathons.filter((h) => !featured.includes(h));
  const shown = expanded ? [...featured, ...rest] : featured;

  return (
    <div className="flex flex-col gap-2">
      <ul
        id="hackathon-list"
        className="ml-4 divide-y divide-dashed border-l-2 border-l-secondary"
      >
        {shown.map((project, id) => (
          <BlurFade
            key={project.title + project.dates}
            delay={
              id < featured.length
                ? BLUR_FADE_DELAY * 15 + id * 0.05
                : (id - featured.length) * 0.03
            }
          >
            <HackathonCard
              title={project.title}
              description={project.description}
              location={project.location}
              role={"role" in project ? project.role : undefined}
              dates={project.dates}
              image={project.image}
              links={project.links}
            />
          </BlurFade>
        ))}
      </ul>
      {rest.length > 0 && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls="hackathon-list"
          onClick={() => setExpanded((e) => !e)}
          className="inline-flex w-fit items-center gap-1 rounded-full px-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {expanded
            ? "Show less"
            : `Show all ${DATA.hackathons.length} hackathons`}
          <ChevronDown
            className={cn(
              "size-4 transition-transform motion-reduce:transition-none",
              expanded && "rotate-180"
            )}
          />
        </button>
      )}
    </div>
  );
}
