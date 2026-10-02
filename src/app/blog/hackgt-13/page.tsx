import {
  CaseStudyArticle,
  CaseStudyFooter,
  CaseStudyHeader,
  caseStudyMetadata,
  Figure,
  Prose,
  Section,
  SubHeading,
} from "@/components/case-study";
import { getCaseStudy } from "@/data/case-studies";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const study = getCaseStudy("hackgt-13");

export const metadata = caseStudyMetadata(study);

// The deck's section slides: rippling water washing up onto sand
function Chapter({ title }: { title: string }) {
  return (
    <div className="flex h-40 items-start rounded-2xl bg-[url('/case-studies/hackgt13/water.jpg')] bg-cover bg-bottom px-6 pt-7 sm:h-48 sm:px-8 sm:pt-9">
      <p className="max-w-[80%] text-2xl font-extrabold tracking-tight text-[#1b1b1b] sm:text-4xl">
        {title}
      </p>
    </div>
  );
}

function WaterPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-[color:var(--cs-panel)] p-4">
      {children}
    </div>
  );
}

export default function HackGTPage() {
  return (
    <CaseStudyArticle theme="cs-hackgt">
      <CaseStudyHeader
        study={study}
        hero={
          <Figure
            src="/case-studies/hackgt13/hero.jpg"
            alt="HackGT 13 hero: a bear running a seaside market stall with a Register sign"
            width={1400}
            height={788}
            imageClassName="rounded-2xl"
            priority
          />
        }
        meta={[
          { label: "Role", value: "Design Engineering Director" },
          { label: "Organization", value: "HexLabs" },
          { label: "Timeline", value: study.dates },
          { label: "Tools", value: "Figma, React, TypeScript" },
        ]}
      />

      <Section title="About HexLabs">
        <div className="grid items-center gap-6 sm:grid-cols-[1fr_160px]">
          <Prose>
            <p>
              Each year, HackGT welcomes <strong>1,500+ hackers</strong> from
              around the world to tackle novel challenges, win prizes and make
              lasting connections. HackGT&apos;s stage is open to everyone,
              regardless of background, experience or skill level. Hackers can
              expect a weekend full of networking, top-tier prizes, mini-events
              and lots of swag.
            </p>
            <p>
              This year, I worked as a <strong>design engineering director</strong>,
              designing the website and leading the software engineers who
              built it. The site went on to attract thousands of applicants.
            </p>
          </Prose>
          <Figure
            src="/case-studies/hackgt13/signpost.jpg"
            alt="Wooden signpost reading Powered By HexLabs, with a seagull on top"
            width={801}
            height={1350}
            sizes="160px"
            className="mx-auto w-28 sm:w-full"
            imageClassName="rounded-2xl"
          />
        </div>
      </Section>

      <Section title="How should the website be organized?">
        <Prose>
          <p>
            Before drawing anything, we agreed on the job each section of the
            site had to do.
          </p>
        </Prose>
        <div className="relative overflow-hidden rounded-2xl bg-[color:var(--cs-sand)] p-6 text-[#5a2e14]">
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "About",
                text: "Explain who HexLabs is, and why people should apply to HackGT 13.",
              },
              {
                title: "Tracks",
                text: "A HexLabs tradition: showcase the event-specific tracks with imaginative, engaging art, while keeping each track clearly understandable.",
              },
              {
                title: "Schedule",
                text: "An interactive section that gives participants a glimpse of the weekend's events.",
              },
              {
                title: "FAQ",
                text: "Clearly answer commonly asked questions. The toggles should be on-theme but still easy to understand.",
              },
            ].map((item) => (
              <div key={item.title}>
                <p className="font-bold text-[color:var(--cs-wood)]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-6">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Chapter title="Prototyping" />

      <Section title="Interaction flow">
        <Prose>
          <p>
            Each section had a single key interaction, which I mapped out so
            the team knew exactly how it should behave:
          </p>
          <ul>
            <li>
              <strong>Tracks:</strong> click or hover on a track to flip the
              card and reveal its explanation.
            </li>
            <li>
              <strong>Schedule:</strong> click a day to switch to that
              day&apos;s schedule.
            </li>
            <li>
              <strong>FAQ:</strong> click a question box and the answer pops
              out from underneath.
            </li>
          </ul>
        </Prose>
        <Figure
          src="/case-studies/hackgt13/flow.jpg"
          alt="Flow diagram from the home section to About, Tracks, Schedule and FAQ, with the interaction for each"
          width={1401}
          height={944}
          imageClassName="rounded-2xl"
        />
      </Section>

      <Section title="Low fidelity">
        <Prose>
          <p>
            A teammate sketched the first low fidelity pass, laying out the
            seaside market world: a lighthouse hero, boats, market stalls for
            workshops and a sailboat schedule.
          </p>
        </Prose>
        <div className="overflow-hidden rounded-2xl bg-white p-2">
          <Figure
            src="/case-studies/hackgt13/lofi.jpg"
            alt="Hand-drawn low fidelity sketches of the full website with annotations"
            width={1400}
            height={678}
          />
        </div>
      </Section>

      <Section title="Mid fidelity">
        <div className="grid items-center gap-6 sm:grid-cols-[1fr_1.3fr]">
          <Prose>
            <p>
              Building on my teammate&apos;s sketches, I put together a quick
              mid fidelity version and wireframed the important sections:
              home, about, speakers, workshops, schedule and FAQ.
            </p>
            <p>
              Keeping the illustrations as labeled placeholders, like
              [boat] or [whale/shark], let us lock down the layout and
              content before spending time on art.
            </p>
          </Prose>
          <WaterPanel>
            <Figure
              src="/case-studies/hackgt13/midfi.jpg"
              alt="Mid fidelity wireframes for the home, about, speakers, workshops, schedule and FAQ sections"
              width={1401}
              height={1176}
              sizes="(min-width: 640px) 360px, 100vw"
            />
          </WaterPanel>
        </div>
      </Section>

      <Chapter title="Iteration 1 & Design Decisions" />

      <Section title="Current problems">
        <Prose>
          <p>
            Once the first full design came together, two problems stood out.
          </p>
        </Prose>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Section transitions",
              text: "There was a transition between each section, but some of them felt rough. And the more sketch-like a transition was, the harder it was to implement perfectly in code.",
              src: "/case-studies/hackgt13/problem-transitions.jpg",
              alt: "Sponsors section with a hard horizontal water transition",
            },
            {
              title: "Themed illustrations",
              text: "Many illustrations were about groceries and fresh produce in general rather than a seaside market. They felt out of place next to fish and other things you'd actually expect at a seaside market.",
              src: "/case-studies/hackgt13/problem-illustrations.jpg",
              alt: "Fresh produce illustration with a wheelbarrow of vegetables",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <div className="rounded-xl bg-[color:var(--cs-wood)] p-2">
                <Figure
                  src={item.src}
                  alt={item.alt}
                  width={1401}
                  height={807}
                  sizes="(min-width: 640px) 300px, 100vw"
                  imageClassName="rounded-md"
                />
              </div>
              <SubHeading>{item.title}</SubHeading>
              <Prose>
                <p>{item.text}</p>
              </Prose>
            </div>
          ))}
        </div>
      </Section>

      <Chapter title="Final High-Fidelity Design" />

      <Section>
        <Figure
          src="/case-studies/hackgt13/final.jpg"
          alt="Final HackGT 13 homepage displayed on a laptop"
          width={1401}
          height={850}
          imageClassName="rounded-2xl"
        />
        <Prose>
          <p>
            The final design brings the seaside market concept together from
            hero to footer. I then helped bring it to life as a fully
            responsive React and TypeScript website, so the experience holds
            up on every screen size during a high-traffic event.
          </p>
        </Prose>
        <Link
          href="https://hack.gt/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-1 rounded-full bg-[color:var(--cs-accent)] px-4 py-2 text-sm text-white hover:opacity-90"
        >
          Visit hack.gt
          <ArrowUpRight className="size-3.5" />
        </Link>
      </Section>

      <CaseStudyFooter study={study} />
    </CaseStudyArticle>
  );
}
