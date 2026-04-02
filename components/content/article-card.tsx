import Link from "next/link";

import type { BlogPost } from "@/services/api/types";
import { formatDate } from "@/lib/utils";

type ArticleCardProps = {
  post: BlogPost;
};

export function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-border bg-white p-6 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {post.category}
      </p>
      <div className="flex-1">
        <h3 className="mt-4 line-clamp-3 font-display text-3xl leading-tight text-ink">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-steel">{post.excerpt}</p>
      </div>
      <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-steel">
        <span>{formatDate(post.publishedAt)}</span>
        <span>{post.readingTime} phút đọc</span>
      </div>
    </article>
  );
}
