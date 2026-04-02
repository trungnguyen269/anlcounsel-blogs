import { ArticleCard } from "@/components/content/article-card";
import { PageHero } from "@/components/content/page-hero";
import { Pagination } from "@/components/content/pagination";
import { buildMetadata } from "@/lib/metadata";
import { getBlogPosts } from "@/services/api/content";

export const metadata = buildMetadata({
  title: "Cập nhật pháp luật | ANL Counsel",
  description: "Blog pháp lý của ANL Counsel với prerender SSG + ISR cho từng bài viết và trang listing.",
  path: "/cap-nhat-phap-luat"
});

export default async function BlogIndexPage() {
  const posts = await getBlogPosts({ page: 1, pageSize: 3 });

  return (
    <>
      <PageHero
        eyebrow="Blog pháp lý"
        title="Phân tích, cập nhật và góc nhìn thực tiễn về pháp luật."
        description="Đây là ví dụ điển hình của trang SSG + ISR: listing ổn định, giàu SEO và tự làm mới theo chu kỳ."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.items.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-8">
          <Pagination
            currentPage={1}
            totalPages={posts.totalPages}
            getHref={(page) =>
              page === 1 ? "/cap-nhat-phap-luat" : `/cap-nhat-phap-luat/trang/${page}`
            }
          />
        </div>
      </section>
    </>
  );
}
