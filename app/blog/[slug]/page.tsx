import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { RichText } from "@/components/content/rich-text";
import { buildMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";
import { getBlogPostBySlug, getBlogSlugs } from "@/services/api/content";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return buildMetadata({
      title: "Bài viết không tồn tại | ANL Counsel",
      description: "Nội dung không còn khả dụng.",
      path: `/blog/${params.slug}`
    });
  }

  return buildMetadata({
    title: post.seoTitle ?? `${post.title} | ANL Counsel`,
    description: post.seoDescription ?? post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article"
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { href: "/", label: "Trang chủ" },
          { href: "/cap-nhat-phap-luat", label: "Cập nhật pháp luật" },
          { href: `/blog/${post.slug}`, label: post.title }
        ]}
      />
      <header className="mt-8 border-b border-border pb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          {post.category}
        </p>
        <h1 className="mt-4 font-display text-6xl leading-tight text-ink">{post.title}</h1>
        <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] text-steel">
          <span>{post.author}</span>
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readingTime} phút đọc</span>
        </div>
      </header>
      <section className="mt-10">
        <RichText html={post.content} />
      </section>
    </article>
  );
}
