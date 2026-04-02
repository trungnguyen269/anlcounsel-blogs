import { PRACTICE_AREAS } from "@/lib/constants";
import { SectionHeading } from "@/components/content/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function PracticeAreas() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeading
          title="Lĩnh vực trọng tâm"
          description="Cấu trúc nội dung được phân loại theo chuyên ngành để thuận tiện cho cả người đọc và máy tìm kiếm."
        />
      </ScrollReveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRACTICE_AREAS.map((area, index) => (
          <ScrollReveal delay={0.08 * (index + 1)} key={area}>
            <article className="rounded-[1.75rem] border border-border bg-white px-6 py-8 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-display text-3xl text-ink">{area}</h3>
              <p className="mt-3 text-sm leading-7 text-steel">
                Chuyên mục được tối ưu cho nội dung chuyên sâu, trích dẫn văn bản và liên kết nội
                bộ theo chủ đề.
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
