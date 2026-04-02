import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/content/article-card";
import { PageHero } from "@/components/content/page-hero";
import { Pagination } from "@/components/content/pagination";
import { buildMetadata } from "@/lib/metadata";
import { getBlogPageParams, getBlogPosts } from "@/services/api/content";

type PageProps = {
  params: {
    page: string;
  };
};

export async function generateStaticParams() {
  return getBlogPageParams();
}

export async function generateMetadata({ params }: PageProps) {
  return buildMetadata({
    title: `Cập nhật pháp luật - Trang ${params.page} | ANL Counsel`,
    description: `Danh sách bài viết pháp lý trang ${params.page} của ANL Counsel.`,
    path: `/cap-nhat-phap-luat/trang/${params.page}`
  });
}

export default async function BlogPaginatedPage({ params }: PageProps) {
  const page = Number(params.page);

  if (Number.isNaN(page) || page < 2) {
    notFound();
  }

  const posts = await getBlogPosts({ page, pageSize: 3 });

  if (page > posts.totalPages) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={`Trang ${page}`}
        title="Kho cập nhật pháp luật"
        description="Phân trang thân thiện với SEO bằng route segment thay vì phụ thuộc hoàn toàn vào search params."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.items.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-8">
          <Pagination
            currentPage={page}
            totalPages={posts.totalPages}
            getHref={(targetPage) =>
              targetPage === 1
                ? "/cap-nhat-phap-luat"
                : `/cap-nhat-phap-luat/trang/${targetPage}`
            }
          />
        </div>
      </section>
    </>
  );
}
