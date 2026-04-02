import Image from "next/image";
import Link from "next/link";

import { HEADER_NAV_ITEMS } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/">
            <Image
              src="/logo-mark.svg"
              alt="ANL Counsel"
              width={40}
              height={40}
              priority
            />
          <div>
            <p className="font-display text-2xl leading-none text-ink">ANL Counsel</p>
            <p className="text-xs uppercase tracking-[0.25em] text-steel">
              Legal Knowledge Portal
            </p>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {HEADER_NAV_ITEMS.map((item) => (
              <li className="group relative" key={item.href}>
                <Link
                  className="inline-flex items-center gap-2 text-sm font-semibold text-steel hover:text-ink"
                  href={item.href}
                >
                  {item.label}
                  {item.children ? (
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </Link>

                {item.children ? (
                  <div className="pointer-events-none absolute left-0 top-full pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="min-w-[280px] rounded-[1.5rem] border border-border bg-white p-3 shadow-card">
                      <ul className="space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              className="block rounded-2xl px-4 py-3 text-sm font-medium text-steel hover:bg-parchment hover:text-ink"
                              href={child.href}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <Link
          className="rounded-full border border-accent/20 px-4 py-2 text-sm font-semibold text-accent hover:bg-accentSoft"
          href="/tim-kiem"
        >
          Tìm kiếm
        </Link>
      </div>
    </header>
  );
}
