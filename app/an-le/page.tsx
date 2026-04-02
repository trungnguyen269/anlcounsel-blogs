import { PageHero } from "@/components/content/page-hero";
import { ResourceCard } from "@/components/content/resource-card";
import { ButtonLink } from "@/components/ui/button";
import { buildMetadata } from "@/lib/metadata";
import { getPrecedents } from "@/services/api/content";

export const metadata = buildMetadata({
  title: "Án lệ | ANL Counsel",
  description: "Kho án lệ với trang chi tiết được statically generated và tái tạo bằng ISR.",
  path: "/an-le"
});

export default async function PrecedentsPage() {
  const items = await getPrecedents({ page: 1, pageSize: 6 });

  return (
    <>
      <PageHero
        eyebrow="Án lệ"
        title="Kho án lệ tham khảo cho phân tích và viện dẫn lập luận."
        description="Trang chi tiết dùng SSG + ISR theo định danh để đảm bảo hiệu năng và khả năng index."
      >
        <ButtonLink href="/tim-kiem?type=precedent" variant="secondary">
          Tìm kiếm án lệ
        </ButtonLink>
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {items.items.map((item) => (
            <ResourceCard
              key={item.id}
              title={item.title}
              summary={item.summary}
              meta={item.court}
              href={`/an-le/${item.id}`}
              date={item.decisionDate}
            />
          ))}
        </div>
      </section>
    </>
  );
}
