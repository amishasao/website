// Starter for a new case study. Folders starting with "_" aren't routes, so
// this page never shows up on the site.
//
// 1. Add an entry to CASE_STUDIES in src/data/case-studies.ts
// 2. Copy this folder to src/app/work/<slug>/ and set SLUG below to match
// 3. Put images in public/case-studies/<slug>/
// 4. Replace the placeholder sections with your story
//
// See "Adding content" in README.md for the full checklist.

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

const SLUG = "my-new-case-study";

const study = getCaseStudy(SLUG);

export const metadata = caseStudyMetadata(study);

export default function CaseStudyPage() {
  return (
    // cs-default uses the site palette; add your own theme in globals.css later
    <CaseStudyArticle theme="cs-default">
      <CaseStudyHeader
        study={study}
        hero={
          <Figure
            src={study.image}
            alt={`${study.name} cover`}
            width={1400}
            height={788}
            imageClassName="rounded-2xl"
            priority
          />
        }
        // Up to 4 items; Outcome is added automatically from the data file
        meta={[
          { label: "Role", value: study.role },
          { label: "Team", value: "Who you worked with" },
          { label: "Timeline", value: study.dates },
          { label: "Tools", value: "Figma, React" },
        ]}
      />

      <Section title="The problem">
        <Prose>
          <p>What was wrong, and who did it affect?</p>
        </Prose>
      </Section>

      <Section title="Research">
        <Prose>
          <p>What did you learn, and how?</p>
          <ul>
            <li>Finding one</li>
            <li>Finding two</li>
          </ul>
        </Prose>
      </Section>

      <Section title="Design process">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <SubHeading>Low fidelity</SubHeading>
            <Prose>
              <p>Sketches and the questions they raised.</p>
            </Prose>
          </div>
          <div className="space-y-2">
            <SubHeading>High fidelity</SubHeading>
            <Prose>
              <p>The final design and the decisions behind it.</p>
            </Prose>
          </div>
        </div>
      </Section>

      <Section title="Outcome & reflection">
        <Prose>
          <p>What happened, and what would you do next?</p>
        </Prose>
      </Section>

      <CaseStudyFooter study={study} />
    </CaseStudyArticle>
  );
}
