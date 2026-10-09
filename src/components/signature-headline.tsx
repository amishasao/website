"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Word = "design" | "engineer" | null;

// "design" gets a Figma-style selected frame and "engineer" gets code
// brackets, on hover/focus. Each plays once on load as a hint.
export function SignatureHeadline({ name }: { name: string }) {
  const [playing, setPlaying] = useState<Word>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timers = [
      setTimeout(() => setPlaying("design"), 900),
      setTimeout(() => setPlaying("engineer"), 2200),
      setTimeout(() => setPlaying(null), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <h1 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight sm:text-[2.75rem]">
      <span className="block sm:whitespace-nowrap">
        Hi, I&apos;m{" "}
        <span className="inline-block -rotate-3 px-1 font-display text-[1.2em] font-normal text-primary">
          {name}
        </span>
        ,
      </span>
      <span className="block sm:whitespace-nowrap">
        a <DesignWord active={playing === "design"} />{" "}
        <EngineerWord active={playing === "engineer"} />
      </span>
    </h1>
  );
}

const reveal =
  "opacity-0 transition duration-300 group-hover/sig:opacity-100 group-focus-visible/sig:opacity-100 motion-reduce:transition-none";

function DesignWord({ active }: { active: boolean }) {
  return (
    <span tabIndex={0} className="group/sig relative inline-block outline-none">
      design
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-x-1.5 -inset-y-0.5 border-[1.5px] border-portfolio-coral",
          reveal,
          active && "opacity-100"
        )}
      >
        {["-left-1 -top-1", "-right-1 -top-1", "-bottom-1 -left-1", "-bottom-1 -right-1"].map(
          (corner) => (
            <span
              key={corner}
              className={cn(
                "absolute size-[7px] border-[1.5px] border-portfolio-coral bg-background",
                corner
              )}
            />
          )
        )}
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-portfolio-coral px-1.5 py-1 font-sans text-[10px] font-medium leading-none tracking-normal text-white dark:text-[#2d2a31]">
          Frame · 132 × 52
        </span>
      </span>
    </span>
  );
}

const bracket =
  "absolute top-1/2 -translate-y-1/2 font-mono text-[0.5em] font-medium text-portfolio-coral group-hover/sig:translate-x-0 group-focus-visible/sig:translate-x-0";

// The brackets sit outside the word so they never take up line width
function EngineerWord({ active }: { active: boolean }) {
  return (
    // ml widens the word gap just enough to fit "<" without touching "design"
    <span tabIndex={0} className="group/sig relative ml-[0.2em] inline-block outline-none">
      <span
        aria-hidden
        className={cn(bracket, reveal, "right-full translate-x-1 pr-0.5", active && "translate-x-0 opacity-100")}
      >
        &lt;
      </span>
      engineer.
      <span
        aria-hidden
        className={cn(bracket, reveal, "left-full -translate-x-1 pl-0.5", active && "translate-x-0 opacity-100")}
      >
        /&gt;
      </span>
    </span>
  );
}
