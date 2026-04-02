import type { Metadata } from "next";

import { PageHero } from "@/components/content/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Quan điểm",
  description:
    "Tổng hợp quan điểm pháp lý, nhận định thực tiễn và góc nhìn chuyên môn từ ANL Counsel."
});

const OPINION_TOPICS = [
  {
    title: "Góc nhìn thực tiễn",
    description:
      "Phân tích các tình huống pháp lý từ thực tiễn áp dụng, tập trung vào tính khả thi và rủi ro cần lưu ý."
  },
  {
    title: "Nhận định chuyên môn",
    description:
      "Các bài viết theo hướng lập luận, phản biện và định hướng xử lý dành cho doanh nghiệp và cá nhân."
  },
  {
    title: "Xu hướng pháp lý",
    description:
      "Theo dõi các thay đổi chính sách và tác động của chúng đến hoạt động quản trị, đầu tư và tranh chấp."
  }
];

export default function OpinionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Quan điểm"
        title="Nhận định pháp lý có chiều sâu, trình bày rõ ràng và dễ theo dõi."
        description="Chuyên mục dành cho các góc nhìn chuyên môn, phân tích xu hướng và quan điểm thực tiễn về những vấn đề pháp lý đáng chú ý."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {OPINION_TOPICS.map((item) => (
            <article className="rounded-[2rem] border border-border bg-white p-8 shadow-card" key={item.title}>
              <h2 className="font-display text-4xl text-ink">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-steel">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
