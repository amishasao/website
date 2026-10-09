import { HackathonList } from "@/components/hackathon-list";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { SignatureHeadline } from "@/components/signature-headline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { WorkBento } from "@/components/work-bento";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

const hackathonCount = (role: "Builder" | "Organizer") =>
  DATA.hackathons.filter((h) => "role" in h && h.role === role).length;

// Each group below is one stop in the navbar dock
export default function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-14">
      <div id="top" className="flex flex-col space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="flex justify-between gap-2">
              <div className="flex flex-1 flex-col space-y-3">
                <BlurFade delay={BLUR_FADE_DELAY} yOffset={8}>
                  <SignatureHeadline name={DATA.name.split(" ")[0]} />
                </BlurFade>
                <BlurFadeText
                  className="max-w-[600px] text-muted-foreground md:text-lg"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <Link
                    href={DATA.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    View my résumé
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </BlurFade>
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="relative m-2 shrink-0">
                  <div
                    aria-hidden
                    className="absolute inset-0 translate-x-2 translate-y-2 -rotate-12 rounded-[2rem] bg-secondary"
                  />
                  <div className="relative rounded-full border-2 border-primary p-1">
                    <Avatar className="size-28">
                      <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                      <AvatarFallback>{DATA.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>
      </div>

      <div id="work" className="flex scroll-mt-12 flex-col space-y-10">
        <section id="projects" className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkBento />
          </BlurFade>
        </section>
        <section id="experience">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      </div>

      <div id="background" className="flex scroll-mt-12 flex-col space-y-10">
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                  <Badge key={skill} variant="secondary" className="rounded-full">
                    {skill}
                  </Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section id="hackathons" className="scroll-mt-12">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">Hackathons</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <p className="text-pretty text-sm text-muted-foreground">
              I&apos;ve built projects at {hackathonCount("Builder")}{" "}
              hackathons and helped organize {hackathonCount("Organizer")}{" "}
              more, from founding my hometown&apos;s first hackathon to
              leading tech for Georgia Tech&apos;s largest.
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <HackathonList />
          </BlurFade>
        </div>
      </section>

      <section id="contact" className="scroll-mt-12 pb-16">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="flex flex-col gap-y-3">
            <h2 className="text-xl font-bold">Contact</h2>
            <p className="text-pretty text-sm text-muted-foreground">
              Want to chat? Email me at{" "}
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="text-primary hover:underline"
              >
                {DATA.contact.email}
              </Link>{" "}
              message me on{" "}
              <Link
                href={DATA.contact.social.LinkedIn.url}
                className="text-primary hover:underline"
              >
                LinkedIn
              </Link>
              , or take a look at my{" "}
              <Link
                href={DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                résumé
              </Link>
              .
            </p>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
