import { ResourceCard } from "@/components/content/resource-card";
import { SectionHeading } from "@/components/content/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getPrecedents } from "@/services/api/content";

export async function LatestPrecedentsSection() {
  const items = await getPrecedents({ page: 1, pageSize: 3 });

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeading
          title="Án lệ tham khảo"
          description="Nội dung chi tiết được generate tĩnh theo từng định danh để tăng tốc độ tải và độ phủ SEO."
          action={
            <ButtonLink href="/an-le" variant="secondary">
              Xem án lệ
            </ButtonLink>
          }
        />
      </ScrollReveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {items.items.map((item, index) => (
          <ScrollReveal className="h-full" delay={0.08 * (index + 1)} key={item.id}>
            <ResourceCard
              title={item.title}
              summary={item.summary}
              meta={item.court}
              href={`/an-le/${item.id}`}
              date={item.decisionDate}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
