import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { RichText } from "@/components/content/rich-text";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { buildLegislationSchema } from "@/lib/structured-data";
import { formatDate } from "@/lib/utils";
import { getLegalDocumentById, getLegalDocumentIds } from "@/services/api/content";

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const ids = await getLegalDocumentIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps) {
  const document = await getLegalDocumentById(params.id);

  if (!document) {
    return buildMetadata({
      title: "Văn bản không tồn tại | ANL Counsel",
      description: "Không tìm thấy văn bản yêu cầu.",
      path: `/van-ban/${params.id}`
    });
  }

  return buildMetadata({
    title: `${document.referenceNumber} | ${document.title}`,
    description: document.summary,
    path: `/van-ban/${document.id}`,
    publishedTime: document.issuedAt,
    section: document.category,
    tags: [document.referenceNumber, document.category]
  });
}

export default async function LegalDocumentDetailPage({ params }: PageProps) {
  const document = await getLegalDocumentById(params.id);

  if (!document) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={buildLegislationSchema(document)} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Trang chủ" },
          { href: "/van-ban", label: "Văn bản" },
          { href: `/van-ban/${document.id}`, label: document.referenceNumber }
        ]}
      />
      <header className="mt-8 border-b border-border pb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          {document.referenceNumber}
        </p>
        <h1 className="mt-4 font-display text-6xl leading-tight text-ink">{document.title}</h1>
        <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] text-steel">
          <span>{document.category}</span>
          <span>{formatDate(document.issuedAt)}</span>
          <span>{document.status}</span>
        </div>
      </header>
      <section className="mt-10">
        <RichText html={document.body} />
      </section>
    </article>
  );
}
