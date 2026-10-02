import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { CASE_STUDIES } from "@/data/case-studies";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "My thoughts on incorporating software development and aesthetics.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <h2 className="text-sm text-muted-foreground mb-4">case studies</h2>
      </BlurFade>
      {CASE_STUDIES.map((study, id) => (
        <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={study.slug}>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${study.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="tracking-tight">{study.title}</p>
              <p className="h-6 text-xs text-muted-foreground">{study.dates}</p>
            </div>
          </Link>
        </BlurFade>
      ))}
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-sm text-muted-foreground mt-8 mb-4">posts</h2>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
