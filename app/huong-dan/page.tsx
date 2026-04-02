import { PageHero } from "@/components/content/page-hero";
import { ResourceCard } from "@/components/content/resource-card";
import { getGuides } from "@/services/api/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Hướng dẫn | ANL Counsel",
  description: "Hướng dẫn thực tiễn theo từng lĩnh vực pháp lý, được render tĩnh và tái tạo bằng ISR.",
  path: "/huong-dan"
});

export default async function GuidesPage() {
  const guides = await getGuides();

  return (
    <>
      <PageHero
        eyebrow="Hướng dẫn"
        title="Checklist và quy trình pháp lý dành cho doanh nghiệp và cá nhân."
        description="Trang này dùng SSG + ISR vì nội dung không thay đổi theo truy vấn người dùng nhưng vẫn cần được cập nhật định kỳ."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {guides.map((guide) => (
            <ResourceCard
              key={guide.id}
              title={guide.title}
              summary={guide.summary}
              meta={guide.category}
              href={guide.href}
            />
          ))}
        </div>
      </section>
    </>
  );
}
