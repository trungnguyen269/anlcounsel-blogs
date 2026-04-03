import { SITE_URL } from "@/lib/constants";
import { absoluteUrl } from "@/lib/utils";
import type { BlogPost, LegalDocument, Precedent } from "@/services/api/types";

type BreadcrumbItem = {
  href: string;
  label: string;
};

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ANL Counsel",
    url: SITE_URL,
    logo: absoluteUrl("/logo-mark.svg"),
    email: "hello@anlcounsel.vn",
    telephone: "+84-909-123-456",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Nguyen Hue, District 1",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN"
    }
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ANL Counsel",
    url: SITE_URL,
    inLanguage: "vi-VN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/tim-kiem?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href)
    }))
  };
}

export function buildBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription ?? post.excerpt,
    image: [absoluteUrl(post.coverImage)],
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    url: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    articleSection: post.category,
    author: {
      "@type": "Person",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: "ANL Counsel",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo-mark.svg")
      }
    }
  };
}

export function buildLegislationSchema(document: LegalDocument) {
  return {
    "@context": "https://schema.org",
    "@type": "Legislation",
    name: document.title,
    legislationIdentifier: document.referenceNumber,
    description: document.summary,
    datePublished: document.issuedAt,
    legislationLegalValue: document.status,
    url: absoluteUrl(`/van-ban/${document.id}`),
    inLanguage: "vi-VN",
    publisher: {
      "@type": "Organization",
      name: "ANL Counsel"
    }
  };
}

export function buildLegalCaseSchema(precedent: Precedent) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalCase",
    name: precedent.title,
    description: precedent.summary,
    url: absoluteUrl(`/an-le/${precedent.id}`),
    datePublished: precedent.decisionDate,
    inLanguage: "vi-VN",
    keywords: precedent.keywordTags.join(", "),
    creator: {
      "@type": "Organization",
      name: precedent.court
    },
    publisher: {
      "@type": "Organization",
      name: "ANL Counsel"
    }
  };
}
