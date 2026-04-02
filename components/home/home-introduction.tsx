import Image from 'next/image';

import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function HomeIntroduction() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-start gap-10 lg:grid-cols-[360px_1fr] lg:gap-12">
        <ScrollReveal className="max-w-[320px]">
          <div className="border-2 border-beigeDark bg-parchment p-3 shadow-card">
            <div className="relative aspect-[4/5] overflow-hidden bg-white">
              <Image
                src="/hero-law.svg"
                alt="ANL Counsel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <p className="text-sm font-semibold text-steel">
            Cormorant Garamond SemiBold
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-5xl leading-tight text-ink">
            A Legacy of Excellence &amp; Trust.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-steel">
            ANL Counsel xây dựng cổng nội dung pháp lý theo hướng rõ ràng, chuẩn
            mực và dễ tiếp cận. Từ văn bản, án lệ đến cập nhật pháp luật, mọi
            nội dung đều được tổ chức mạch lạc để người đọc nhanh chóng nắm được
            vấn đề trọng tâm.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-steel">
            Trải nghiệm được thiết kế tối giản nhưng đáng tin cậy, phù hợp với
            hình ảnh của một thương hiệu tư vấn pháp lý chuyên nghiệp và bền
            vững.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
