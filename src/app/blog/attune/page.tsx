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
import { fontRaleway } from "@/components/case-study-fonts";
import { getCaseStudy } from "@/data/case-studies";
import { cn } from "@/lib/utils";

const study = getCaseStudy("attune");

export const metadata = caseStudyMetadata(study);

// Mirrors the deck's content slides: white with a dark green rule on top
function Slide({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border-t-[6px] border-[#2f6235] bg-[color:var(--cs-panel)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export default function AttunePage() {
  return (
    <CaseStudyArticle theme={cn("cs-attune", fontRaleway.variable)}>
      <CaseStudyHeader
        study={study}
        hero={
          <div className="flex aspect-video flex-col items-center justify-center gap-4 rounded-2xl bg-[#7ea8b8] px-6 text-center font-[family-name:var(--font-raleway)]">
            <p className="text-3xl text-[#45555d] sm:text-5xl">FigBuild 2026</p>
            <div className="text-white">
              <p className="text-3xl sm:text-5xl">ATTUNE,</p>
              <p className="text-xl sm:text-3xl">the sixth sense</p>
            </div>
            <p className="text-xs text-[#3b4a52] sm:text-sm">
              Made with <span className="text-[#e0383e]">&#10084;</span> by
              Amisha Sao &amp; Ritsu Ueda
            </p>
          </div>
        }
        meta={[
          { label: "Event", value: "FigBuild 2026" },
          { label: "Timeline", value: study.dates },
          { label: "Team", value: "Amisha Sao & Ritsu Ueda" },
          { label: "Focus", value: "Product & interaction design" },
        ]}
      />

      <Section title="The problem">
        <div className="grid items-center gap-6 sm:grid-cols-[1fr_220px]">
          <Prose>
            <p>
              Every conversation carries a second layer of meaning. Tone,
              pauses and energy shift long before anyone says out loud that
              something feels off. Picking up on that layer is a skill, and it
              is one most of us are never taught directly.
            </p>
            <ul>
              <li>People struggle to read the room.</li>
              <li>Conversations carry hidden emotional signals.</li>
              <li>Social awareness is hard to practice.</li>
            </ul>
          </Prose>
          <Figure
            src="/case-studies/attune/problem.jpg"
            alt="Illustration of a person running from a crowd of watching eyes"
            width={1401}
            height={1284}
            sizes="220px"
            imageClassName="rounded-2xl"
            className="mx-auto w-48 sm:w-full"
          />
        </div>
      </Section>

      <Section title="Nunchi (눈치): the Korean art of reading the room">
        <Prose>
          <p>
            Our starting point was <strong>nunchi</strong>, a Korean concept
            that translates roughly to &ldquo;eye-measure.&rdquo; Someone with
            good nunchi can walk into a room and quickly sense its mood, then
            adjust how they act. We built the project around three ideas from
            it:
          </p>
        </Prose>
        <ol className="grid gap-3 sm:grid-cols-3">
          {[
            {
              title: "The art of “eye-measure”",
              body: "Observing what people show you, not just what they say.",
            },
            {
              title: "Situational awareness over directness",
              body: "Reading the context of a moment before reacting to it.",
            },
            {
              title: "Processing behavior rapidly",
              body: "Noticing shifts as they happen, in real time.",
            },
          ].map((item, i) => (
            <li key={item.title}>
              <Slide className="h-full p-4">
                <p className="text-xs text-[#2f6235]/80">0{i + 1}</p>
                <p className="mt-1 text-sm font-semibold text-[#1f2724]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-[#1f2724]/75">
                  {item.body}
                </p>
              </Slide>
            </li>
          ))}
        </ol>
        <Prose>
          <p>
            That led to our question: what if an app could act as a sixth
            sense, helping people practice nunchi during the conversations
            they are already having?
          </p>
        </Prose>
      </Section>

      <Section title="Introducing ATTUNE">
        <Slide className="grid items-center gap-6 p-6 sm:grid-cols-[1fr_180px]">
          <div className="text-[#1f2724]">
            <p className="cs-h2 text-2xl">Improve your interactions by reading the room</p>
            <p className="mt-5 text-sm font-semibold">Concept</p>
            <ol className="mt-2 space-y-2 text-sm leading-6 text-[#1f2724]/85">
              <li>
                <span className="font-semibold">1.</span> Start a conversation
                activity
              </li>
              <li>
                <span className="font-semibold">2.</span> See a{" "}
                <span className="font-semibold">live emotional heatmap</span>
              </li>
              <li>
                <span className="font-semibold">3.</span> Receive{" "}
                <span className="font-semibold">real-time insights</span>
              </li>
            </ol>
          </div>
          <Figure
            src="/case-studies/attune/phone.jpg"
            alt="ATTUNE splash screen on a phone"
            width={800}
            height={1548}
            sizes="180px"
            className="mx-auto w-36 sm:w-full"
          />
        </Slide>
      </Section>

      <Section title="Wellness goals">
        <Prose>
          <p>
            ATTUNE is meant to help bridge the gap between{" "}
            <strong>social perception</strong> and{" "}
            <strong>internal peace</strong>. We framed the product around three
            kinds of wellbeing:
          </p>
        </Prose>
        <div className="grid items-center gap-6 sm:grid-cols-[1fr_240px]">
          <div className="flex flex-col gap-5">
            <div className="space-y-1">
              <SubHeading>Social wellbeing</SubHeading>
              <Prose>
                <p>
                  Users can move through social interactions more smoothly,
                  which lowers social anxiety.
                </p>
              </Prose>
            </div>
            <div className="space-y-1">
              <SubHeading>Mental wellbeing</SubHeading>
              <Prose>
                <p>
                  Users get real-time feedback on how the conversation is
                  going, along with validation when it goes well.
                </p>
              </Prose>
            </div>
            <div className="space-y-1">
              <SubHeading>Emotional intelligence</SubHeading>
              <Prose>
                <p>
                  Over time, users build the skill of recognizing how others
                  are feeling on their own.
                </p>
              </Prose>
            </div>
          </div>
          <Figure
            src="/case-studies/attune/wellness.jpg"
            alt="Illustration of three friends talking"
            width={1401}
            height={1413}
            sizes="240px"
            imageClassName="rounded-2xl"
            className="mx-auto w-52 sm:w-full"
          />
        </div>
      </Section>

      <Section title="Key feature: the heatmap">
        <div className="grid items-start gap-6 sm:grid-cols-[1fr_240px]">
          <Prose>
            <p>
              The heatmap is the core of the experience. During an activity,
              each person in the conversation appears as a numbered marker on
              a grid that shifts from <strong>calm</strong> greens to{" "}
              <strong>tense</strong> oranges and reds. A recording indicator
              and timer stay visible at the top, so you always know the
              session is live.
            </p>
            <p>While in a conversation, you can:</p>
            <ul>
              <li>Detect calm and tense moments as they happen</li>
              <li>
                Gain key insights to have more intentional conversations
              </li>
              <li>Be mindful of how your words affect others</li>
            </ul>
            <p>
              Under the map, a <strong>Quick Insights</strong> panel turns the
              colors into short, readable notes for each person, like
              &ldquo;Person 2 is calm &mdash; good energy for deeper
              discussion.&rdquo; When the conversation wraps up,{" "}
              <strong>End Activity</strong> closes the session.
            </p>
          </Prose>
          <Slide className="p-4">
            <Figure
              src="/case-studies/attune/heatmap.jpg"
              alt="Heatmap screen showing a calm-to-tense grid with three participants, quick insights, and an End Activity button"
              width={801}
              height={1472}
              sizes="240px"
              imageClassName="rounded-lg"
            />
          </Slide>
        </div>
      </Section>

      <Section title="Safeguards & privacy">
        <div className="grid items-center gap-6 sm:grid-cols-[1fr_240px]">
          <Prose>
            <p>
              An app that listens to conversations has to earn trust. We
              treated privacy as part of the design from the start:
            </p>
            <ul>
              <li>
                <strong>Opt-in recording.</strong> Voice recording sits
                behind a clear toggle.
              </li>
              <li>
                <strong>Active sessions only.</strong> Recording runs only
                while an activity is running.
              </li>
              <li>
                <strong>State, not content.</strong> The heatmap gives no
                information about conversations outside an activity, and it
                only tracks whether people seem calm or tense, not what was
                said.
              </li>
            </ul>
          </Prose>
          <Figure
            src="/case-studies/attune/privacy.jpg"
            alt="Illustration of a person reviewing a privacy policy next to a shield and padlock"
            width={1401}
            height={1369}
            sizes="240px"
            imageClassName="rounded-2xl"
            className="mx-auto w-52 sm:w-full"
          />
        </div>
      </Section>

      <Slide className="flex flex-col items-center gap-2 px-6 py-12 text-center text-[#1f2724]">
        <p className="cs-h2 text-4xl">Attune</p>
        <p className="font-semibold">Your 6th sense for conversation</p>
      </Slide>

      <CaseStudyFooter
        study={study}
        credits={
          <>
            Illustrations by{" "}
            <a
              href="https://storyset.com/people"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Storyset
            </a>
            .
          </>
        }
      />
    </CaseStudyArticle>
  );
}
