import BlurFade from "@/components/magicui/blur-fade";
import {
  CASE_STUDIES,
  caseStudyHref,
  type CaseStudy,
} from "@/data/case-studies";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Each case study sets a theme class (see globals.css) that supplies
// --cs-heading, --cs-accent and --cs-panel, plus the deck's heading font.

export function CaseStudyArticle({
  theme,
  className,
  children,
}: {
  theme: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <article className={cn(theme, "flex flex-col gap-14 pb-16", className)}>
      {children}
    </article>
  );
}

export function CaseStudyHeader({
  study,
  hero,
  meta,
}: {
  study: CaseStudy;
  hero: React.ReactNode;
  meta: { label: string; value: string }[];
}) {
  return (
    <header className="flex flex-col gap-6">
      <BlurFade>
        <Link
          href="/#work"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back to projects
        </Link>
      </BlurFade>
      <BlurFade delay={0.04}>{hero}</BlurFade>
      <BlurFade delay={0.08} className="flex flex-col gap-3">
        <h1 className="cs-h2 text-3xl tracking-tight text-[color:var(--cs-heading)] sm:text-4xl">
          {study.title}
        </h1>
        <p className="text-base leading-7 text-muted-foreground">
          {study.summary}
        </p>
      </BlurFade>
      <BlurFade delay={0.12}>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-4 border-y py-4 sm:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-xs text-muted-foreground">{item.label}</dt>
              <dd className="mt-1 text-sm">{item.value}</dd>
            </div>
          ))}
          <div className="col-span-2 sm:col-span-4">
            <dt className="text-xs text-muted-foreground">Outcome</dt>
            <dd className="mt-1 text-sm">{study.outcome}</dd>
          </div>
        </dl>
      </BlurFade>
    </header>
  );
}

export function Section({
  title,
  className,
  children,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("flex flex-col gap-5", className)}>
      {title && (
        <h2 className="cs-h2 text-2xl tracking-tight text-[color:var(--cs-heading)] sm:text-3xl">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

export function Prose({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "space-y-4 text-[15px] leading-7 text-foreground/85",
        "[&_strong]:font-semibold [&_strong]:text-foreground",
        "[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5",
        "[&_li::marker]:text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold">{children}</h3>;
}

export function Figure({
  src,
  alt,
  width,
  height,
  caption,
  className,
  imageClassName,
  sizes = "(min-width: 672px) 624px, 100vw",
  priority,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <figure className={cn("flex flex-col gap-2", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className={cn("h-auto w-full", imageClassName)}
      />
      {caption && (
        <figcaption className="text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function CaseStudyFooter({
  study,
  credits,
}: {
  study: CaseStudy;
  credits?: React.ReactNode;
}) {
  const index = CASE_STUDIES.findIndex((s) => s.slug === study.slug);
  const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length];

  return (
    <footer className="flex flex-col gap-6 border-t pt-8 text-sm">
      {credits && <div className="text-xs text-muted-foreground">{credits}</div>}
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <Link
          href={study.deck}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
        >
          View the original presentation in Figma
          <ArrowUpRight className="size-3.5" />
        </Link>
        <Link
          href={caseStudyHref(next.slug)}
          className="inline-flex items-center gap-1 hover:underline"
        >
          Next: {next.title.split(":")[0]}
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </footer>
  );
}

export function caseStudyMetadata(study: CaseStudy) {
  return {
    title: study.title,
    description: study.summary,
    openGraph: {
      title: study.title,
      description: study.summary,
      type: "article" as const,
      images: [{ url: study.image }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: study.title,
      description: study.summary,
      images: [study.image],
    },
  };
}
