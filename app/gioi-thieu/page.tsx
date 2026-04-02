import { PageHero } from "@/components/content/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Giới thiệu | ANL Counsel",
  description:
    "Giới thiệu về ANL Counsel và kiến trúc cổng nội dung pháp lý tối ưu cho SEO, hiệu năng và khả năng mở rộng.",
  path: "/gioi-thieu"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Giới thiệu"
        title="Nền tảng nội dung pháp lý được thiết kế như một hệ thống xuất bản chuyên nghiệp."
        description="ANL Counsel ưu tiên chất lượng nội dung, tốc độ tải trang và khả năng mở rộng khi số lượng văn bản, án lệ và bài viết tăng trưởng."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        {[
          {
            title: "SEO làm nền tảng",
            description:
              "Mỗi trang nội dung quan trọng được prerender tĩnh, có metadata riêng, URL sạch và cấu trúc semantic HTML."
          },
          {
            title: "API-first",
            description:
              "Toàn bộ dữ liệu đi từ backend Spring Boot để frontend giữ vai trò trình bày, cache và tối ưu trải nghiệm."
          },
          {
            title: "Sẵn sàng mở rộng",
            description:
              "Kiến trúc tách lớp theo App Router, services, lib, hooks và reusable components để mở rộng dễ dàng."
          }
        ].map((item) => (
          <article className="rounded-[2rem] border border-border bg-white p-8 shadow-card" key={item.title}>
            <h2 className="font-display text-4xl text-ink">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-steel">{item.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
