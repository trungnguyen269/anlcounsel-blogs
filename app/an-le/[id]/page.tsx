import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { RichText } from "@/components/content/rich-text";
import { buildMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";
import { getPrecedentById, getPrecedentIds } from "@/services/api/content";

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const ids = await getPrecedentIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps) {
  const precedent = await getPrecedentById(params.id);

  if (!precedent) {
    return buildMetadata({
      title: "Án lệ không tồn tại | ANL Counsel",
      description: "Không tìm thấy án lệ yêu cầu.",
      path: `/an-le/${params.id}`
    });
  }

  return buildMetadata({
    title: `${precedent.title} | ANL Counsel`,
    description: precedent.summary,
    path: `/an-le/${precedent.id}`
  });
}

export default async function PrecedentDetailPage({ params }: PageProps) {
  const precedent = await getPrecedentById(params.id);

  if (!precedent) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { href: "/", label: "Trang chủ" },
          { href: "/an-le", label: "Án lệ" },
          { href: `/an-le/${precedent.id}`, label: precedent.id }
        ]}
      />
      <header className="mt-8 border-b border-border pb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          {precedent.court}
        </p>
        <h1 className="mt-4 font-display text-6xl leading-tight text-ink">{precedent.title}</h1>
        <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] text-steel">
          <span>{precedent.category}</span>
          <span>{formatDate(precedent.decisionDate)}</span>
        </div>
      </header>
      <section className="mt-10">
        <RichText html={precedent.body} />
      </section>
    </article>
  );
}
