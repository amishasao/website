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

// Mirrors the deck's content slides, with a rule in the logotype teal on top
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
        "overflow-hidden rounded-2xl border-t-[6px] border-[#7ea8b8] bg-[color:var(--cs-panel)]",
        className
      )}
    >
      {children}
    </div>
  );
}

// Section divider in the style of the deck's title slide
function Chapter({ title }: { title: string }) {
  return (
    <div className="flex h-36 items-center justify-center rounded-2xl bg-[#7ea8b8] px-6 sm:h-44">
      <p className="font-[family-name:var(--font-raleway)] text-4xl tracking-wide text-white sm:text-5xl">
        {title}
      </p>
    </div>
  );
}

// Published Figma Make prototype. Leave empty to hide the embed.
const PROTOTYPE_URL = "https://figure-happy-01428158.figma.site";

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
                <p className="text-xs text-[#4f7f91]">0{i + 1}</p>
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

      <Chapter title="Prototyping" />

      <Section title="Low fidelity">
        <Prose>
          <p>
            We started on paper, sketching the four tabs of the app and
            annotating every open question as we went.
          </p>
        </Prose>
        <div className="overflow-hidden rounded-2xl bg-white p-2">
          <Figure
            src="/case-studies/attune/lofi-home-heatmap.jpg"
            alt="Hand-drawn sketches of the home screen and the heatmap screen with annotations"
            width={1313}
            height={624}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <SubHeading>Home</SubHeading>
            <Prose>
              <p>
                Details for your next engagement up top, a graph of positive
                interactions (possibly a mini heatmap), and recommended tips
                and wikis to help you better understand nunchi. We flagged the
                settings icon as important: it controls how users want
                notifications and feedback, and which &ldquo;sensors&rdquo;
                ATTUNE should use.
              </p>
            </Prose>
          </div>
          <div className="space-y-2">
            <SubHeading>Heatmap</SubHeading>
            <Prose>
              <p>
                The first heatmap was a free-form visualization with a marker
                showing where you are relative to everyone else. An icon in
                the corner controls voice support, and below the map sit quick
                insights: easy tips and tricks that help in the moment.
              </p>
            </Prose>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl bg-white p-2">
          <Figure
            src="/case-studies/attune/lofi-activities-profile.jpg"
            alt="Hand-drawn sketches of the activities screen with two gradient ideas, and the profile screen"
            width={1133}
            height={850}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <SubHeading>Activities</SubHeading>
            <Prose>
              <p>
                A plus button to add an activity and a list of current ones.
                We sketched two ideas for summarizing each activity: a series
                of colored lines, or a smooth calm-to-tense gradient with a bar
                marking the intention you set.
              </p>
            </Prose>
          </div>
          <div className="space-y-2">
            <SubHeading>Profile</SubHeading>
            <Prose>
              <p>
                Name, bio, recent activities, and a status graph. The big
                question here was what information would actually be
                relevant: positive and negative interactions, the number of
                interactions, or a summary of the day.
              </p>
            </Prose>
          </div>
        </div>
      </Section>

      <Section title="Mid fidelity">
        <Prose>
          <p>
            In Figma, the sketches became a connected flow. Before a
            conversation, you <strong>start a new activity</strong>: name it,
            choose an intention (like a discussion, an interview or a coffee
            chat), and add participants. The home screen greets you with your
            next interaction, a week of insights, and recommended tips like
            &ldquo;Instilling Trust&rdquo; and &ldquo;Finding Intent.&rdquo;
            Settings let you choose whether ATTUNE is allowed to record
            conversations at all.
          </p>
        </Prose>
        <div className="overflow-hidden rounded-2xl bg-[#1e1e1e] p-3">
          <Figure
            src="/case-studies/attune/mid-flow.jpg"
            alt="Mid fidelity screens: start a new activity, profile, home with insights and recommendations, a tip popup, and settings"
            width={581}
            height={306}
          />
        </div>
        <div className="grid items-center gap-6 sm:grid-cols-[1fr_1.1fr]">
          <Prose>
            <p>
              During an activity, the heatmap turned into a grid that moves
              from green to red, with numbered markers for each participant
              and quick insights underneath. Tapping the speaker icon opens
              voice recording, and ending the activity asks you to{" "}
              <strong>rate the interaction</strong>, closing the loop between
              what ATTUNE sensed and how the conversation felt to you.
            </p>
          </Prose>
          <div className="overflow-hidden rounded-2xl bg-[#1e1e1e] p-3">
            <Figure
              src="/case-studies/attune/mid-heatmap.jpg"
              alt="Mid fidelity heatmap screens with quick insights, a voice recording popup, and a rate the interaction popup"
              width={354}
              height={260}
              sizes="(min-width: 640px) 330px, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section title="Style guide">
        <Prose>
          <p>
            To move into high fidelity, we pulled the visual language into a
            small style guide: the ATTUNE logotype on our signature blue,{" "}
            <strong>Raleway</strong> for headings and{" "}
            <strong>Inter</strong> for everything else, a calm primary palette
            of blue, sage and off-white, and a heatmap scale that runs from
            mint to coral. Charcoal primary buttons and sage cards and
            secondary buttons keep the interface quiet, so the heatmap can be
            the loudest thing on screen.
          </p>
        </Prose>
        <div className="grid grid-cols-[1fr_1fr] items-start gap-3 rounded-2xl bg-[#1e1e1e] p-3 sm:grid-cols-[1fr_1fr_0.55fr]">
          <Figure
            src="/case-studies/attune/style-guide.jpg"
            alt="Style guide with logotype, typography scale, color palette and icons"
            width={200}
            height={554}
            sizes="(min-width: 640px) 240px, 50vw"
          />
          <Figure
            src="/case-studies/attune/components.jpg"
            alt="Component sheet with primary and secondary buttons, input, checkbox and card"
            width={200}
            height={425}
            sizes="(min-width: 640px) 240px, 50vw"
          />
          <Figure
            src="/case-studies/attune/palette.jpg"
            alt="Heatmap color scale from mint through yellow and peach to coral"
            width={110}
            height={109}
            sizes="130px"
            className="col-span-2 mx-auto w-24 sm:col-span-1 sm:w-full"
          />
        </div>
      </Section>

      <Chapter title="High Fidelity" />

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

      {PROTOTYPE_URL && (
        <Section title="Try the prototype">
          <Prose>
            <p>
              The high fidelity prototype was built in Figma Make. Tap
              through it below, or{" "}
              <a
                href={PROTOTYPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                open it in a new tab
              </a>
              .
            </p>
          </Prose>
          <div className="mx-auto w-full max-w-[380px] rounded-[2.75rem] bg-[#1f2724] p-3 shadow-lg">
            <iframe
              src={PROTOTYPE_URL}
              title="ATTUNE interactive prototype"
              className="aspect-[9/19.5] w-full rounded-[2.1rem] bg-white"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </Section>
      )}

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
