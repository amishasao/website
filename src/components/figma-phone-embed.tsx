"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

// Space around the frame so Figma's "scale-down" mode renders it at 100%.
// The iframe is then cropped to just the frame, hiding Figma's backdrop.
const PADDING = 80;

export function FigmaPhoneEmbed({
  src,
  title,
  frameWidth = 360,
  frameHeight = 800,
  className,
}: {
  src: string;
  title: string;
  frameWidth?: number;
  frameHeight?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Shrink the cropped frame to fit narrow screens
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) =>
      setScale(entry.contentRect.width / frameWidth)
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [frameWidth]);

  return (
    <div
      ref={ref}
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio: `${frameWidth} / ${frameHeight}` }}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allowFullScreen
        className="absolute left-0 top-0 origin-top-left border-0"
        style={{
          width: frameWidth + PADDING * 2,
          height: frameHeight + PADDING * 2,
          transform: `scale(${scale}) translate(-${PADDING}px, -${PADDING}px)`,
        }}
      />
    </div>
  );
}
