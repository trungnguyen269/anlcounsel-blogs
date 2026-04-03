import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/content/page-hero";
import { Pagination } from "@/components/content/pagination";
import { buildMetadata } from "@/lib/metadata";
import { PRACTICE_AREAS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { searchContent } from "@/services/api/content";

export const dynamic = "force-dynamic";

type SearchPageProps = {
  searchParams: {
    q?: string;
    category?: string;
    type?: "blog" | "document" | "precedent" | "all";
    page?: string;
  };
};

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const query = searchParams.q?.trim();

  return buildMetadata({
    title: query ? `Tìm kiếm "${query}" | ANL Counsel` : "Tìm kiếm | ANL Counsel",
    description:
      "Trang SSR cho tìm kiếm và lọc động, dùng cache no-store để luôn phản ánh truy vấn hiện tại.",
    path: "/tim-kiem",
    noIndex: true
  });
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q?.trim() ?? "";
  const category = searchParams.category?.trim() ?? "";
  const type = searchParams.type ?? "all";
  const page = Number(searchParams.page ?? "1");
  const results = await searchContent({
    query,
    category,
    type,
    page: Number.isNaN(page) ? 1 : page
  });

  const createHref = (targetPage: number) => {
    const params = new URLSearchParams();

    if (query) {
      params.set("q", query);
    }

    if (category) {
      params.set("category", category);
    }

    if (type && type !== "all") {
      params.set("type", type);
    }

    params.set("page", String(targetPage));

    return `/tim-kiem?${params.toString()}`;
  };

  return (
    <>
      <PageHero
        eyebrow="SSR Search"
        title="Tìm kiếm và lọc nội dung pháp lý"
        description="Đây là trang được render động phía server vì kết quả phụ thuộc trực tiếp vào truy vấn người dùng."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <form className="grid gap-4 rounded-[2rem] border border-border bg-white p-6 shadow-card lg:grid-cols-[2fr_1fr_1fr_auto]">
          <input
            className="rounded-2xl border border-border bg-parchment px-4 py-3 outline-none focus:border-accent"
            defaultValue={query}
            name="q"
            placeholder="Từ khóa tìm kiếm"
          />
          <select
            className="rounded-2xl border border-border bg-parchment px-4 py-3 outline-none focus:border-accent"
            defaultValue={category}
            name="category"
          >
            <option value="">Tất cả lĩnh vực</option>
            {PRACTICE_AREAS.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          <select
            className="rounded-2xl border border-border bg-parchment px-4 py-3 outline-none focus:border-accent"
            defaultValue={type}
            name="type"
          >
            <option value="all">Tất cả loại nội dung</option>
            <option value="blog">Bài viết</option>
            <option value="document">Văn bản</option>
            <option value="precedent">Án lệ</option>
          </select>
          <button className="rounded-full border border-beige bg-beige px-5 py-3 text-sm font-semibold text-ink hover:border-beigeDark hover:bg-beigeDark">
            Tìm kiếm
          </button>
        </form>

        <div className="mt-10 space-y-5">
          {results.items.map((item) => (
            <article className="rounded-[2rem] border border-border bg-white p-6 shadow-card" key={item.id}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {item.category} · {item.type}
              </p>
              <h2 className="mt-3 font-display text-3xl text-ink">
                <Link href={item.href}>{item.title}</Link>
              </h2>
              <p className="mt-3 text-sm leading-7 text-steel">{item.excerpt}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-steel">
                {formatDate(item.publishedAt)}
              </p>
            </article>
          ))}
          {results.items.length === 0 ? (
            <div className="rounded-[2rem] border border-dashed border-border bg-white p-8 text-sm text-steel">
              Không tìm thấy nội dung phù hợp với bộ lọc hiện tại.
            </div>
          ) : null}
        </div>

        <div className="mt-10">
          <Pagination
            currentPage={results.page}
            totalPages={results.totalPages}
            getHref={createHref}
          />
        </div>
      </section>
    </>
  );
}
