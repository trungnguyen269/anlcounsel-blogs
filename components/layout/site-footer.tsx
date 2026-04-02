import Link from "next/link";

import { FOOTER_NAV_ITEMS, PRACTICE_AREAS } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-accent/20 bg-steel text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.25fr_1fr_1fr] lg:px-8">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Về công ty
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-7 text-white">
            <p className="font-semibold text-white">ANL Counsel</p>
            <p>
              <Link className="hover:text-parchment" href="/gioi-thieu">
                Giới thiệu
              </Link>
            </p>
            <p>
              <Link className="hover:text-parchment" href="/lien-he">
                Liên hệ
              </Link>
            </p>
            <p>Địa chỉ: 12 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</p>
            <p>
              Email:{" "}
              <a className="hover:text-parchment" href="mailto:hello@anlcounsel.vn">
                hello@anlcounsel.vn
              </a>
            </p>
            <p>
              Hot line:{" "}
              <a className="hover:text-parchment" href="tel:0909123456">
                0909 123 456
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Chuyên mục
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white">
            {FOOTER_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-parchment" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Lĩnh vực
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white">
            {PRACTICE_AREAS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
}
