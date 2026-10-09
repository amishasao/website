import BlurFade from "@/components/magicui/blur-fade";
import { WorkBento } from "@/components/work-bento";

export const metadata = {
  title: "Work",
  description:
    "Case studies and projects by Amisha Sao, a design engineer who designs in Figma and builds in React.",
};

export default function WorkPage() {
  return (
    <main className="flex flex-col gap-6 pb-16">
      <BlurFade>
        <h1 className="text-xl font-bold">Work</h1>
      </BlurFade>
      <BlurFade delay={0.04}>
        <WorkBento />
      </BlurFade>
    </main>
  );
}
