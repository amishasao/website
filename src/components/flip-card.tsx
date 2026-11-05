"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

// A card that flips over on click to reveal its back. Both faces share one
// grid cell, so the card is as tall as its taller face.
export function FlipCard({
  front,
  back,
  label,
  faceClassName,
  backClassName,
}: {
  front: React.ReactNode;
  back: React.ReactNode;
  // Accessible name, e.g. "Show quote for: Lack of time"
  label: string;
  faceClassName?: string;
  // Extra classes for the back face only, applied after faceClassName
  backClassName?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={label}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
      className="group cursor-pointer rounded-2xl [perspective:1200px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--cs-accent)]"
    >
      <div
        className={cn(
          "grid h-full transition-transform duration-500 [transform-style:preserve-3d] motion-reduce:transition-none",
          flipped && "[transform:rotateY(180deg)]"
        )}
      >
        <div
          aria-hidden={flipped}
          className={cn("[backface-visibility:hidden] [grid-area:1/1]", faceClassName)}
        >
          {front}
        </div>
        <div
          aria-hidden={!flipped}
          className={cn(
            "[backface-visibility:hidden] [grid-area:1/1] [transform:rotateY(180deg)]",
            faceClassName,
            backClassName
          )}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
