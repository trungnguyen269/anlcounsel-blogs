import { PageHero } from "@/components/content/page-hero";
import { ResourceCard } from "@/components/content/resource-card";
import { getTemplates } from "@/services/api/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Biểu mẫu | ANL Counsel",
  description: "Kho biểu mẫu pháp lý tham khảo với metadata động và cấu trúc semantic HTML.",
  path: "/bieu-mau"
});

export default async function TemplatesPage() {
  const templates = await getTemplates();

  return (
    <>
      <PageHero
        eyebrow="Biểu mẫu"
        title="Biểu mẫu tham khảo cho các nhu cầu pháp lý thường gặp."
        description="Phù hợp cho các landing page SEO ổn định, nơi dữ liệu đến từ external API nhưng vẫn được cache phía Next.js."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {templates.map((template) => (
            <ResourceCard
              key={template.id}
              title={template.title}
              summary={template.summary}
              meta={template.category}
              href={template.href}
            />
          ))}
        </div>
      </section>
    </>
  );
}
