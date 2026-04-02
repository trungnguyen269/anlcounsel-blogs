import Link from "next/link";

import { formatDate } from "@/lib/utils";

type ResourceCardProps = {
  title: string;
  summary: string;
  meta: string;
  href: string;
  date?: string;
};

export function ResourceCard({ title, summary, meta, href, date }: ResourceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-border/80 bg-white p-6 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{meta}</p>
      <div className="flex-1">
        <h3 className="mt-4 line-clamp-3 font-display text-3xl text-ink">
          <Link href={href}>{title}</Link>
        </h3>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-steel">{summary}</p>
      </div>
      {date ? (
        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-steel">{formatDate(date)}</p>
      ) : null}
    </article>
  );
}
