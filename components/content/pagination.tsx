import Link from "next/link";

import { cn } from "@/lib/utils";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  getHref: (page: number) => string;
};

export function Pagination({ currentPage, totalPages, getHref }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className="flex flex-wrap items-center gap-3">
      <Link
        className={cn(
          "rounded-full border px-4 py-2 text-sm font-semibold",
          currentPage === 1
            ? "pointer-events-none border-border text-steel/40"
            : "border-accent/20 text-accent hover:bg-accentSoft"
        )}
        href={getHref(Math.max(currentPage - 1, 1))}
      >
        Trang trước
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold",
            currentPage === page
              ? "border-accent bg-accent text-white"
              : "border-accent/20 text-accent hover:bg-accentSoft"
          )}
          href={getHref(page)}
        >
          {page}
        </Link>
      ))}

      <Link
        className={cn(
          "rounded-full border px-4 py-2 text-sm font-semibold",
          currentPage === totalPages
            ? "pointer-events-none border-border text-steel/40"
            : "border-accent/20 text-accent hover:bg-accentSoft"
        )}
        href={getHref(Math.min(currentPage + 1, totalPages))}
      >
        Trang sau
      </Link>
    </nav>
  );
}
