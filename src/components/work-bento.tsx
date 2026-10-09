import { fontInstrument, fontRaleway } from "@/components/case-study-fonts";
import {
  CASE_STUDIES,
  caseStudyHref,
  DEFAULT_TILE,
  type CaseStudy,
} from "@/data/case-studies";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Lays out every case study in CASE_STUDIES plus DATA.projects ("other work").
// On sm+ it's a 6-column grid: the first two case studies sit side by side,
// then other work next to the third, so the big tiles zigzag. Any further
// case studies pair up in halves below, and the last odd one goes full width.

const ROW = 158;
const GAP = 12;
const MINI = 58 + 8;
const LABEL = 24;

// Grid rows needed to fit a given content height
const rowsFor = (height: number) => Math.ceil((height + GAP) / (ROW + GAP));

type Span = "wide" | "narrow" | "half" | "full";

const SPAN: Record<Span, string> = {
  wide: "sm:col-span-4",
  narrow: "sm:col-span-2",
  half: "sm:col-span-3",
  full: "sm:col-span-6",
};

const SIZES: Record<Span, string> = {
  wide: "(min-width: 640px) 480px, 100vw",
  narrow: "(min-width: 640px) 240px, 100vw",
  half: "(min-width: 640px) 360px, 100vw",
  full: "(min-width: 640px) 720px, 100vw",
};

// Row span comes from a CSS variable so it can follow the content
const rowSpan = "sm:[grid-row:span_var(--rows)]";
const rowsStyle = (rows: number) => ({ "--rows": rows }) as React.CSSProperties;

const tile =
  "group/tile relative flex min-w-0 flex-col overflow-hidden rounded-[22px] transition duration-300 ease-out hover:-translate-y-[3px] hover:-rotate-[0.6deg] hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:transform-none";

const chip = "rounded-full px-2.5 py-1.5 text-[11.5px] font-medium leading-none";

function GoArrow({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute right-3.5 top-3.5 z-10 grid size-8 place-items-center rounded-full text-white backdrop-blur transition duration-300 group-hover/tile:rotate-45 group-hover/tile:bg-portfolio-coral group-hover/tile:text-[#2d2a31]",
        className
      )}
    >
      <ArrowUpRight className="size-4" />
    </span>
  );
}

type TileProps = { study: CaseStudy; span: Span; rows: number };

// Cover image on top with nothing over it; a solid band holds the text
function PhotoTile({ study, span, rows }: TileProps) {
  const colors = study.tile ?? DEFAULT_TILE;
  return (
    <Link
      href={caseStudyHref(study.slug)}
      style={rowsStyle(rows)}
      className={cn(
        tile,
        "grid grid-rows-[170px_auto] sm:grid-rows-[minmax(0,1fr)_auto]",
        SPAN[span],
        rowSpan
      )}
    >
      <div className="relative min-h-0 overflow-hidden">
        <Image
          src={study.image}
          alt=""
          fill
          sizes={SIZES[span]}
          className="object-cover transition duration-500 group-hover/tile:scale-[1.04] motion-reduce:transition-none"
        />
      </div>
      <GoArrow className="bg-[#2d2a31]/35" />
      <div
        className="flex flex-col gap-1 px-4 pb-3.5 pt-3"
        style={{ backgroundColor: colors.band, color: colors.ink }}
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.06em] opacity-70">
          Case study · {study.dates}
        </span>
        {colors.font === "instrument" ? (
          <h3 className="font-[family-name:var(--font-instrument)] text-[32px] italic leading-none">
            {study.name}
          </h3>
        ) : (
          <h3 className="font-heading text-[22px] font-bold leading-tight tracking-tight">
            {study.name}
          </h3>
        )}
        <p className="max-w-[46ch] text-[13px] leading-snug opacity-85">
          {study.tagline}
        </p>
        <div className="mt-0.5 flex flex-wrap gap-1.5">
          <span
            className={chip}
            style={{ backgroundColor: colors.roleChip.bg, color: colors.roleChip.ink }}
          >
            {study.role}
          </span>
          <span
            className={chip}
            style={{
              backgroundColor: colors.highlightChip.bg,
              color: colors.highlightChip.ink,
            }}
          >
            {study.highlight}
          </span>
        </div>
      </div>
    </Link>
  );
}

// Hand-built to echo the ATTUNE deck: brand blue, Raleway, tilted heatmap
function AttuneTile({ study, span, rows }: TileProps) {
  return (
    <Link
      href={caseStudyHref(study.slug)}
      style={rowsStyle(rows)}
      className={cn(
        tile,
        "min-h-[300px] justify-between bg-[#7ea8b8] p-4 sm:min-h-0",
        SPAN[span],
        rowSpan,
        fontRaleway.variable
      )}
    >
      <GoArrow className="bg-white/20" />
      <div className="relative z-10 font-[family-name:var(--font-raleway)] text-white [text-shadow:0_1px_2px_rgba(28,39,45,0.35)]">
        <h3 className="text-[26px] leading-none tracking-wide">ATTUNE,</h3>
        <p className="text-[15px] font-medium">the sixth sense</p>
      </div>
      <Image
        src="/case-studies/attune/heatmap.jpg"
        alt=""
        width={801}
        height={1472}
        sizes="(min-width: 640px) 130px, 40vw"
        className="absolute -bottom-[26%] -right-[8%] w-[42%] rotate-[10deg] rounded-[14px] shadow-[0_10px_24px_rgba(30,40,45,0.35)] transition duration-500 group-hover/tile:-translate-y-2 group-hover/tile:rotate-6 motion-reduce:transition-none sm:-right-[14%] sm:w-[62%]"
      />
      <div className="relative z-10 flex max-w-[52%] flex-col gap-1.5">
        <span className="text-[13px] font-semibold leading-snug text-[#1c272d]">
          {study.tagline}
        </span>
        <span className={cn(chip, "w-fit bg-white/70 text-[#1c272d]")}>
          {study.highlight}
        </span>
      </div>
    </Link>
  );
}

// Case studies that need a one-off tile; everything else uses PhotoTile
const CUSTOM_TILES: Record<string, (props: TileProps) => React.ReactNode> = {
  attune: AttuneTile,
};

function CaseStudyTile(props: TileProps) {
  const Tile = CUSTOM_TILES[props.study.slug] ?? PhotoTile;
  return <Tile {...props} />;
}

function OtherWork({ full, rows }: { full: boolean; rows: number }) {
  return (
    <div
      style={rowsStyle(rows)}
      className={cn(
        "order-last flex flex-col gap-2 sm:order-none",
        full ? SPAN.full : SPAN.narrow,
        rowSpan
      )}
    >
      <span className="pl-1 text-xs font-semibold text-muted-foreground">
        Other work
      </span>
      <div
        className={cn(
          "grid flex-1 gap-2",
          full ? "sm:grid-cols-3 sm:content-start" : "auto-rows-fr"
        )}
      >
        {DATA.projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex min-h-[58px] min-w-0 flex-col justify-center rounded-2xl border bg-portfolio-sage/70 py-2.5 pl-3 pr-9 transition duration-200 hover:translate-x-0.5 hover:border-portfolio-coral motion-reduce:transition-none dark:bg-card"
          >
            <span className="text-[13.5px] font-semibold">
              {project.title.split(":")[0]}
            </span>
            {"tagline" in project && project.tagline && (
              <span className="truncate text-[11.5px] text-muted-foreground">
                {project.tagline}
              </span>
            )}
            <ArrowUpRight className="absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-portfolio-coral" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function WorkBento() {
  const [first, second, third, ...more] = CASE_STUDIES;
  const projectCount = DATA.projects.length;

  // Other work sits beside the third case study; without one it goes full width
  const otherFull = !third;
  const otherRows = otherFull
    ? rowsFor(LABEL + Math.ceil(projectCount / 3) * MINI)
    : Math.max(2, rowsFor(LABEL + projectCount * MINI));

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 sm:auto-rows-[158px] sm:grid-cols-6",
        fontInstrument.variable
      )}
    >
      {first && (
        <CaseStudyTile study={first} span={second ? "wide" : "full"} rows={2} />
      )}
      {second && <CaseStudyTile study={second} span="narrow" rows={2} />}
      {projectCount > 0 && <OtherWork full={otherFull} rows={otherRows} />}
      {third && (
        <CaseStudyTile
          study={third}
          span={projectCount > 0 ? "wide" : "full"}
          rows={projectCount > 0 ? otherRows : 2}
        />
      )}
      {more.map((study, i) => (
        <CaseStudyTile
          key={study.slug}
          study={study}
          span={i === more.length - 1 && more.length % 2 === 1 ? "full" : "half"}
          rows={2}
        />
      ))}
    </div>
  );
}
