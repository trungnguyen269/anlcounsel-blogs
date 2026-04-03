import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema } from "@/lib/structured-data";

type BreadcrumbItem = {
  href: string;
  label: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="text-sm text-steel">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li className="flex items-center gap-2" key={item.href}>
              {index > 0 ? <span>/</span> : null}
              <Link className="hover:text-ink" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
