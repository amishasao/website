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
import { fontInstrument } from "@/components/case-study-fonts";
import { FigmaPhoneEmbed } from "@/components/figma-phone-embed";
import { getCaseStudy } from "@/data/case-studies";
import { cn } from "@/lib/utils";

const study = getCaseStudy("inner-hues");

export const metadata = caseStudyMetadata(study);

const PROTOTYPE_URL =
  "https://www.figma.com/proto/Ge4ia8X6NJRuQho42JlrWy/Case-Study-Ritsu---Amisha?node-id=12114-707&p=f&viewport=439%2C-229%2C0.28&t=TqU2pWOtVrNfzjK7-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=12419%3A542&page-id=1%3A3";

// Figma serves embeddable prototypes from embed.figma.com
const PROTOTYPE_EMBED_URL =
  "https://embed.figma.com/proto/Ge4ia8X6NJRuQho42JlrWy/Case-Study-Ritsu---Amisha?node-id=12114-707&starting-point-node-id=12419%3A542&page-id=1%3A3&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1";

// The deck's section slides: a full gradient wash with an italic serif title
function Chapter({ title }: { title: string }) {
  return (
    <div className="flex h-36 items-center justify-center rounded-2xl bg-[image:var(--cs-gradient)] px-6 sm:h-44">
      <p className="font-[family-name:var(--font-instrument)] text-4xl italic text-white sm:text-5xl">
        {title}
      </p>
    </div>
  );
}

// Cream card used behind wireframes, like the deck's content slides
function Panel({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-[color:var(--cs-panel)] p-4",
        className
      )}
    >
      {children}
    </div>
  );
}

function Iteration({
  title,
  problem,
  changes,
  image,
  alt,
}: {
  title: string;
  problem: string;
  changes: string[];
  image: string;
  alt: string;
}) {
  return (
    <Section title={title}>
      <div className="grid items-center gap-6 sm:grid-cols-2">
        <Prose>
          <p>{problem}</p>
          <p className="font-semibold text-foreground">For the final design, we:</p>
          <ul>
            {changes.map((change) => (
              <li key={change}>{change}</li>
            ))}
          </ul>
        </Prose>
        <Panel>
          <Figure
            src={image}
            alt={alt}
            width={1401}
            height={1380}
            sizes="(min-width: 640px) 300px, 100vw"
          />
          <p className="mt-2 flex justify-between text-xs text-[#2d2a31]/60">
            <span>Before</span>
            <span>After</span>
          </p>
        </Panel>
      </div>
    </Section>
  );
}

export default function InnerHuesPage() {
  return (
    <CaseStudyArticle theme={cn("cs-inner-hues", fontInstrument.variable)}>
      <CaseStudyHeader
        study={study}
        hero={
          <Figure
            src="/case-studies/inner-hues/cover.jpg"
            alt="Inner Hues title slide with a warm orange and pink gradient and crayon squiggles"
            width={1400}
            height={788}
            imageClassName="rounded-2xl"
            priority
          />
        }
        meta={[
          { label: "Role", value: study.role },
          { label: "Team", value: "Side by side with Ritsu Ueda" },
          { label: "Timeline", value: study.dates },
          { label: "Methods", value: "Surveys, interviews, usability testing" },
        ]}
      />

      <Section title="Motivation for our research">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              src: "/case-studies/inner-hues/motivation-1.jpg",
              alt: "Illustration of a person painting a large canvas",
              h: 1379,
              text: "Art is an act of mindfulness and can allow people to be more present.",
            },
            {
              src: "/case-studies/inner-hues/motivation-2.jpg",
              alt: "Illustration of three people holding oversized art supplies",
              h: 1273,
              text: "People of varying skill levels can find joy in making art.",
            },
            {
              src: "/case-studies/inner-hues/motivation-3.jpg",
              alt: "Illustration of a person surrounded by thought clouds",
              h: 1379,
              text: "Perfectionism can be a creative block.",
            },
          ].map((item) => (
            <Panel key={item.src} className="flex flex-col gap-3">
              <Figure
                src={item.src}
                alt={item.alt}
                width={1401}
                height={item.h}
                sizes="(min-width: 640px) 200px, 100vw"
                className="mx-auto w-40 sm:w-full"
              />
              <p className="text-center text-sm leading-6 text-[#2d2a31]">
                {item.text}
              </p>
            </Panel>
          ))}
        </div>
        <Prose>
          <p>
            Making art is good for you, but plenty of people never start or
            give up early. We wanted to understand what gets in the way, and
            how a product could make the process feel lighter.
          </p>
        </Prose>
      </Section>

      <Chapter title="User Research" />

      <Section title="Research question">
        <blockquote className="border-l-2 border-[color:var(--cs-accent)] pl-5 font-[family-name:var(--font-instrument)] text-2xl italic leading-snug text-[color:var(--cs-heading)] sm:text-3xl">
          How might we make art a stress-free form of self-care, free from the
          pressure of perfection?
        </blockquote>
      </Section>

      <Section title="Research goals">
        <Prose>
          <ol>
            <li>
              Identify positive and negative experiences people have with art.
            </li>
            <li>
              Understand what specifically prevents people from starting a new
              artwork.
            </li>
            <li>Explore ways to lower barriers to the art-making process.</li>
          </ol>
        </Prose>
      </Section>

      <Section title="Competitor analysis">
        <Prose>
          <p>
            We mapped five existing apps by <strong>cost</strong> and by how
            much <strong>guidance</strong> they give: The Art Therapy App,
            Hobi, LINA, Scribble Journey and Thirsty for Art. Seeing them on
            two axes made it easier to talk about where a new tool could fit.
          </p>
        </Prose>
        <Panel>
          <Figure
            src="/case-studies/inner-hues/competitors.jpg"
            alt="Two-by-two chart plotting five art apps by cost and level of guidance"
            width={1400}
            height={641}
          />
        </Panel>
      </Section>

      <Section title="Research method & participants">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <SubHeading>Surveys</SubHeading>
            <Prose>
              <p>
                We shared the survey with roughly 300 students through
                creative and community organizations, including The Hive
                Makerspace and The Artsy Orchard Instagram. We received{" "}
                <strong>15 valid responses</strong>.
              </p>
            </Prose>
          </div>
          <div className="space-y-2">
            <SubHeading>In-depth interviews</SubHeading>
            <Prose>
              <p>We recruited four interviewees from the survey respondents:</p>
              <ul>
                <li>
                  <strong>P1:</strong> Content editor who enjoys art but
                  isn&apos;t an artist
                </li>
                <li>
                  <strong>P2:</strong> Art hobbyist who works in many mediums
                  and took AP Art Portfolio
                </li>
                <li>
                  <strong>P3:</strong> Hive crafts master PI who crafts for fun
                </li>
                <li>
                  <strong>P4:</strong> Artist who takes commissions
                </li>
              </ul>
            </Prose>
          </div>
        </div>
      </Section>

      <Section title="Key findings">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              src: "/case-studies/inner-hues/finding-time.jpg",
              alt: "Illustration of a person beside a lightbulb and a ringing clock",
              h: 1150,
              title: "Lack of time & confidence",
              text: "These were the top two barriers across both the survey and the interviews.",
            },
            {
              src: "/case-studies/inner-hues/finding-options.jpg",
              alt: "Illustration of a person sitting cross-legged under a burst of ideas",
              h: 1199,
              title: "Too many options are overwhelming",
              text: "Having too many ideas, or none at all, is stressful and blocks creativity.",
            },
            {
              src: "/case-studies/inner-hues/finding-community.jpg",
              alt: "Illustration of a diverse group of people standing together",
              h: 1313,
              title: "Supportive community without critiques",
              text: "Interviewees said art should be a judgment-free activity that values the process over the product.",
            },
          ].map((item) => (
            <Panel key={item.src} className="flex flex-col gap-3">
              <Figure
                src={item.src}
                alt={item.alt}
                width={1401}
                height={item.h}
                sizes="(min-width: 640px) 200px, 100vw"
                className="mx-auto w-40 sm:w-full"
              />
              <p className="text-sm font-semibold text-[#2d2a31]">
                {item.title}
              </p>
              <p className="text-sm leading-6 text-[#2d2a31]/75">{item.text}</p>
            </Panel>
          ))}
        </div>
      </Section>

      <Section title="Design recommendations">
        <Prose>
          <p>Each finding turned into a &ldquo;how might we&rdquo; question:</p>
          <ol>
            <li>
              How might we <strong>lower barriers</strong> for both artists
              and non-artists facing time constraints and low confidence?
            </li>
            <li>
              How might we <strong>simplify the art-making process</strong> to
              prevent choice paralysis?
            </li>
            <li>
              How might we design a <strong>judgment-free community</strong>{" "}
              that prioritizes process over product?
            </li>
          </ol>
        </Prose>
      </Section>

      <Chapter title="Prototyping" />

      <Section title="User flow">
        <Prose>
          <p>
            We kept the structure simple: from the home page, users branch
            into three areas: <strong>Activities</strong>,{" "}
            <strong>Gallery</strong> and <strong>Profile</strong>.
          </p>
        </Prose>
        <Panel>
          <Figure
            src="/case-studies/inner-hues/userflow.jpg"
            alt="User flow diagram: Home Page branches into Activities, Gallery and Profile"
            width={1401}
            height={776}
          />
        </Panel>
      </Section>

      <Section title="Low fidelity">
        <Prose>
          <p>
            We sketched quickly on paper and whiteboard to explore layouts for
            each screen before committing to anything in Figma.
          </p>
        </Prose>
        <Panel className="flex flex-col gap-4">
          <Figure
            src="/case-studies/inner-hues/lofi-1.jpg"
            alt="Hand-drawn low fidelity sketches of the home and activity screens"
            width={1401}
            height={374}
          />
          <Figure
            src="/case-studies/inner-hues/lofi-2.jpg"
            alt="Low fidelity sketches of the full set of screens connected by arrows"
            width={1400}
            height={592}
          />
        </Panel>
      </Section>

      <Section title="Mid fidelity wireframes">
        <div className="flex flex-col gap-10">
          {[
            {
              title: "Home",
              text: "A daily mini activity with its time estimate shown up front. This lowers the barrier to starting by addressing time constraints, and builds confidence along the way.",
              src: "/case-studies/inner-hues/mid-home.jpg",
              alt: "Mid fidelity home screen wireframe with today's mini activity and activities for you",
              w: 801,
              h: 1608,
              narrow: true,
            },
            {
              title: "Activity",
              text: "Step-by-step instructions with adjustable levels of guidance make each activity feel approachable, reduce decision fatigue, and build confidence for every skill level.",
              src: "/case-studies/inner-hues/mid-activity.jpg",
              alt: "Mid fidelity activity screens with music choice, level of guidance and an animation step",
              w: 1401,
              h: 1344,
            },
            {
              title: "Gallery",
              text: "A shared space where users can explore others' work and share their own, building a supportive community centered on participation and creativity rather than judgment.",
              src: "/case-studies/inner-hues/mid-gallery.jpg",
              alt: "Mid fidelity gallery screens with personal and community sections",
              w: 1401,
              h: 1313,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="grid items-center gap-6 sm:grid-cols-2"
            >
              <div className="space-y-2">
                <SubHeading>{item.title}</SubHeading>
                <Prose>
                  <p>{item.text}</p>
                </Prose>
              </div>
              <Panel>
                <Figure
                  src={item.src}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  sizes="(min-width: 640px) 300px, 100vw"
                  className={cn("mx-auto", item.narrow && "w-1/2")}
                />
              </Panel>
            </div>
          ))}
        </div>
      </Section>

      <Chapter title="Feedback & Iterations" />

      <Prose>
        <p>
          We ran usability tests on the mid fidelity prototype. Three themes
          came up again and again, and each one shaped the final design.
        </p>
      </Prose>

      <Iteration
        title="Improved navigation"
        problem="Users found the side scrolling unintuitive, categories were difficult to filter, and the outlined cards felt sharp and tense."
        changes={[
          "Changed horizontal scrolling to vertical",
          "Added tabs for each category instead of relying on subheadings",
          "Set cards apart with shadow and color instead of outlines",
        ]}
        image="/case-studies/inner-hues/iter-navigation.jpg"
        alt="Gallery screen before and after: outlined horizontal rows become colorful cards with category tabs"
      />

      <Iteration
        title="Clarifying levels of guidance"
        problem="Users didn't understand what low, medium or high guidance meant, and the section didn't look like a button."
        changes={[
          "Added an info icon that explains each level of guidance when tapped: Guided, Semi-Guided and Unguided",
          "Used consistent buttons that clearly highlight the current selection",
        ]}
        image="/case-studies/inner-hues/iter-guidance.jpg"
        alt="Activity screen before and after: vague guidance levels become labeled buttons with an explanation popup"
      />

      <Iteration
        title="Improved visual clarity"
        problem="The initial design was visually cluttered. The sharp edges and small text didn't match the calm aesthetic we were going for."
        changes={[
          "Increased the corner radius",
          "Refined the text hierarchy",
          "Applied a pastel color palette",
        ]}
        image="/case-studies/inner-hues/iter-visual.jpg"
        alt="Home screen before and after: a cluttered wireframe becomes a pastel layout with a mood picker and daily insights"
      />

      <Section title="The final prototype">
        <Prose>
          <p>
            The final design brings everything together: a short daily
            activity on the home screen, guidance you can dial up or down,
            and a gallery that feels like a community rather than a critique.
            We presented it as a live demo at the end of the bootcamp. Tap
            through it below, or{" "}
            <a
              href={PROTOTYPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              open it in Figma
            </a>
            .
          </p>
        </Prose>
        <div className="mx-auto w-full max-w-[380px] rounded-[2rem] bg-[image:var(--cs-gradient)] p-2.5">
          <FigmaPhoneEmbed
            src={PROTOTYPE_EMBED_URL}
            title="Inner Hues interactive prototype"
            className="rounded-[1.5rem] bg-[#fdfbf5]"
          />
        </div>
      </Section>

      <Section title="Key takeaways">
        <Prose>
          <ul>
            <li>
              <strong>Visual clarity is about intent, not just aesthetics.</strong>{" "}
              Every design choice should tell the user how to feel and what to
              do next.
            </li>
            <li>
              <strong>Creativity thrives in safe, judgment-free spaces.</strong>{" "}
              Beginner or seasoned artist, everyone needs a space where they
              feel valued.
            </li>
            <li>
              <strong>Art therapy is a growing field.</strong> Design has a
              real opportunity to shape how it develops and to keep it
              accessible to everyone.
            </li>
          </ul>
        </Prose>
      </Section>

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
