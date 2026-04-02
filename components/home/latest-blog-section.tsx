import { ArticleCard } from "@/components/content/article-card";
import { SectionHeading } from "@/components/content/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getBlogPosts } from "@/services/api/content";

export async function LatestBlogSection() {
  const posts = await getBlogPosts({ page: 1, pageSize: 3 });

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeading
          title="Cập nhật pháp luật"
          description="Bài viết dạng blog được prerender bằng SSG + ISR để đạt hiệu năng tốt cho SEO."
          action={
            <ButtonLink href="/cap-nhat-phap-luat" variant="secondary">
              Xem tất cả
            </ButtonLink>
          }
        />
      </ScrollReveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {posts.items.map((post, index) => (
          <ScrollReveal className="h-full" delay={0.08 * (index + 1)} key={post.id}>
            <ArticleCard post={post} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
