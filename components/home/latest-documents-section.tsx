import { ResourceCard } from "@/components/content/resource-card";
import { SectionHeading } from "@/components/content/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getLegalDocuments } from "@/services/api/content";

export async function LatestDocumentsSection() {
  const documents = await getLegalDocuments({ page: 1, pageSize: 3 });

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeading
          title="Văn bản nổi bật"
          description="Kho văn bản dùng slug/id sạch, metadata động và dữ liệu được cache theo tag."
          action={
            <ButtonLink href="/van-ban" variant="secondary">
              Vào kho văn bản
            </ButtonLink>
          }
        />
      </ScrollReveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {documents.items.map((item, index) => (
          <ScrollReveal className="h-full" delay={0.08 * (index + 1)} key={item.id}>
            <ResourceCard
              title={item.title}
              summary={item.summary}
              meta={item.referenceNumber}
              href={`/van-ban/${item.id}`}
              date={item.issuedAt}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
