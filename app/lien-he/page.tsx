import { PageHero } from "@/components/content/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Liên hệ | ANL Counsel",
  description: "Trang liên hệ của ANL Counsel với form gửi trực tiếp tới external API và validation phía client.",
  path: "/lien-he"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="Gửi yêu cầu tư vấn hoặc đề nghị hợp tác."
        description="Phần form được render client-side để xử lý tương tác, còn phần nội dung trang vẫn là static để giữ tốc độ tải."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <article className="rounded-[2rem] border border-border bg-white p-8 shadow-card">
          <h2 className="font-display text-4xl text-ink">Thông tin liên hệ</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-steel">
            <p>Hotline: 0900 000 000</p>
            <p>Email: hello@anlcounsel.vn</p>
            <p>Địa chỉ: 12 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</p>
          </div>
        </article>
        <ContactForm />
      </section>
    </>
  );
}
