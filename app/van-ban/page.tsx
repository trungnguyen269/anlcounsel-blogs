import { PageHero } from "@/components/content/page-hero";
import { ResourceCard } from "@/components/content/resource-card";
import { ButtonLink } from "@/components/ui/button";
import { buildMetadata } from "@/lib/metadata";
import { getLegalDocuments } from "@/services/api/content";

export const metadata = buildMetadata({
  title: "Văn bản | ANL Counsel",
  description: "Kho văn bản pháp luật được render tĩnh, có ISR và trang chi tiết theo định danh.",
  path: "/van-ban"
});

export default async function LegalDocumentsPage() {
  const documents = await getLegalDocuments({ page: 1, pageSize: 6 });

  return (
    <>
      <PageHero
        eyebrow="Văn bản"
        title="Kho văn bản pháp lý được tổ chức theo định danh rõ ràng và tối ưu crawl."
        description="Trang listing đầu tiên được render tĩnh, còn các nhu cầu tìm kiếm sâu và lọc động được chuyển sang SSR search page."
      >
        <ButtonLink href="/tim-kiem?type=document" variant="secondary">
          Tìm kiếm văn bản
        </ButtonLink>
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {documents.items.map((item) => (
            <ResourceCard
              key={item.id}
              title={item.title}
              summary={item.summary}
              meta={item.referenceNumber}
              href={`/van-ban/${item.id}`}
              date={item.issuedAt}
            />
          ))}
        </div>
      </section>
    </>
  );
}
