import { DEFAULT_PAGE_SIZE, DEFAULT_REVALIDATE, STATIC_PAGE_LIMIT } from "@/lib/constants";
import { CACHE_TAGS } from "@/lib/cache-tags";
import { apiFetch } from "@/services/api/client";
import {
  blogPosts,
  guideItems,
  legalDocuments,
  precedents,
  templateItems
} from "@/services/api/mock-data";
import type {
  BlogPost,
  ContactPayload,
  ContactResponse,
  GuideItem,
  LegalDocument,
  PaginatedResponse,
  Precedent,
  SearchResult,
  TemplateItem
} from "@/services/api/types";

type ListingParams = {
  page?: number;
  pageSize?: number;
  query?: string;
  category?: string;
  noStore?: boolean;
};

function paginate<T>(items: T[], page = 1, pageSize = DEFAULT_PAGE_SIZE): PaginatedResponse<T> {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const startIndex = (safePage - 1) * pageSize;

  return {
    items: items.slice(startIndex, startIndex + pageSize),
    total,
    page: safePage,
    pageSize,
    totalPages
  };
}

function filterByQuery<T extends { title: string; summary?: string; excerpt?: string; category: string }>(
  items: T[],
  query?: string,
  category?: string
) {
  return items.filter((item) => {
    const matchesCategory = !category || item.category === category;
    const searchValue = `${item.title} ${item.summary ?? ""} ${item.excerpt ?? ""}`.toLowerCase();
    const matchesQuery = !query || searchValue.includes(query.toLowerCase());

    return matchesCategory && matchesQuery;
  });
}

export async function getHomePageData() {
  const [latestPosts, latestDocuments, latestPrecedents] = await Promise.all([
    getBlogPosts({ page: 1, pageSize: 3 }),
    getLegalDocuments({ page: 1, pageSize: 3 }),
    getPrecedents({ page: 1, pageSize: 3 })
  ]);

  return {
    latestPosts: latestPosts.items,
    latestDocuments: latestDocuments.items,
    latestPrecedents: latestPrecedents.items
  };
}

export async function getBlogPosts({
  page = 1,
  pageSize = DEFAULT_PAGE_SIZE,
  query,
  category,
  noStore = false
}: ListingParams = {}) {
  const fallbackData = paginate(filterByQuery(blogPosts, query, category), page, pageSize);
  const searchParams = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize)
  });

  if (query) {
    searchParams.set("query", query);
  }

  if (category) {
    searchParams.set("category", category);
  }

  return apiFetch<PaginatedResponse<BlogPost>>(`/v1/blog-posts?${searchParams.toString()}`, {
    cache: noStore ? "no-store" : "force-cache",
    next: noStore
      ? undefined
      : {
          revalidate: DEFAULT_REVALIDATE,
          tags: [CACHE_TAGS.blog]
        },
    fallbackData
  });
}

export async function getBlogPostBySlug(slug: string) {
  const fallbackData = blogPosts.find((post) => post.slug === slug) ?? null;

  return apiFetch<BlogPost | null>(`/v1/blog-posts/${slug}`, {
    next: {
      revalidate: DEFAULT_REVALIDATE,
      tags: [CACHE_TAGS.blog, `${CACHE_TAGS.blog}:${slug}`]
    },
    fallbackData
  });
}

export async function getBlogSlugs() {
  const response = await getBlogPosts({
    page: 1,
    pageSize: 100
  });

  return response.items.map((item) => item.slug);
}

export async function getBlogPageParams() {
  const response = await getBlogPosts({
    page: 1,
    pageSize: 3
  });
  const totalPages = Math.min(response.totalPages, STATIC_PAGE_LIMIT);

  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) => ({
    page: String(index + 2)
  }));
}

export async function getLegalDocuments({
  page = 1,
  pageSize = DEFAULT_PAGE_SIZE,
  query,
  category,
  noStore = false
}: ListingParams = {}) {
  const filtered = filterByQuery(legalDocuments, query, category);
  const fallbackData = paginate(filtered, page, pageSize);
  const searchParams = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize)
  });

  if (query) {
    searchParams.set("query", query);
  }

  if (category) {
    searchParams.set("category", category);
  }

  return apiFetch<PaginatedResponse<LegalDocument>>(
    `/v1/legal-documents?${searchParams.toString()}`,
    {
      cache: noStore ? "no-store" : "force-cache",
      next: noStore
        ? undefined
        : {
            revalidate: DEFAULT_REVALIDATE,
            tags: [CACHE_TAGS.documents]
          },
      fallbackData
    }
  );
}

export async function getLegalDocumentById(id: string) {
  const fallbackData = legalDocuments.find((item) => item.id === id) ?? null;

  return apiFetch<LegalDocument | null>(`/v1/legal-documents/${id}`, {
    next: {
      revalidate: DEFAULT_REVALIDATE,
      tags: [CACHE_TAGS.documents, `${CACHE_TAGS.documents}:${id}`]
    },
    fallbackData
  });
}

export async function getLegalDocumentIds() {
  const response = await getLegalDocuments({
    page: 1,
    pageSize: 100
  });

  return response.items.map((item) => item.id);
}

export async function getPrecedents({
  page = 1,
  pageSize = DEFAULT_PAGE_SIZE,
  query,
  category,
  noStore = false
}: ListingParams = {}) {
  const filtered = filterByQuery(precedents, query, category);
  const fallbackData = paginate(filtered, page, pageSize);
  const searchParams = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize)
  });

  if (query) {
    searchParams.set("query", query);
  }

  if (category) {
    searchParams.set("category", category);
  }

  return apiFetch<PaginatedResponse<Precedent>>(`/v1/precedents?${searchParams.toString()}`, {
    cache: noStore ? "no-store" : "force-cache",
    next: noStore
      ? undefined
      : {
          revalidate: DEFAULT_REVALIDATE,
          tags: [CACHE_TAGS.precedents]
        },
    fallbackData
  });
}

export async function getPrecedentById(id: string) {
  const fallbackData = precedents.find((item) => item.id === id) ?? null;

  return apiFetch<Precedent | null>(`/v1/precedents/${id}`, {
    next: {
      revalidate: DEFAULT_REVALIDATE,
      tags: [CACHE_TAGS.precedents, `${CACHE_TAGS.precedents}:${id}`]
    },
    fallbackData
  });
}

export async function getPrecedentIds() {
  const response = await getPrecedents({
    page: 1,
    pageSize: 100
  });

  return response.items.map((item) => item.id);
}

export async function getGuides() {
  return apiFetch<GuideItem[]>("/v1/guides", {
    next: {
      revalidate: DEFAULT_REVALIDATE,
      tags: [CACHE_TAGS.guides]
    },
    fallbackData: guideItems
  });
}

export async function getTemplates() {
  return apiFetch<TemplateItem[]>("/v1/templates", {
    next: {
      revalidate: DEFAULT_REVALIDATE,
      tags: [CACHE_TAGS.templates]
    },
    fallbackData: templateItems
  });
}

export async function searchContent(params: {
  query?: string;
  category?: string;
  type?: "blog" | "document" | "precedent" | "all";
  page?: number;
}) {
  const query = params.query?.trim();
  const category = params.category?.trim();
  const type = params.type ?? "all";
  const page = params.page ?? 1;
  const pageSize = 9;

  const fallbackCollection: SearchResult[] = [
    ...blogPosts.map((post) => ({
      id: post.id,
      type: "blog" as const,
      title: post.title,
      excerpt: post.excerpt,
      href: `/blog/${post.slug}`,
      category: post.category,
      publishedAt: post.publishedAt
    })),
    ...legalDocuments.map((item) => ({
      id: item.id,
      type: "document" as const,
      title: item.title,
      excerpt: item.summary,
      href: `/van-ban/${item.id}`,
      category: item.category,
      publishedAt: item.issuedAt
    })),
    ...precedents.map((item) => ({
      id: item.id,
      type: "precedent" as const,
      title: item.title,
      excerpt: item.summary,
      href: `/an-le/${item.id}`,
      category: item.category,
      publishedAt: item.decisionDate
    }))
  ].filter((item) => {
    const matchesType = type === "all" || item.type === type;
    const matchesCategory = !category || item.category === category;
    const haystack = `${item.title} ${item.excerpt}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query.toLowerCase());

    return matchesType && matchesCategory && matchesQuery;
  });

  const fallbackData = paginate(fallbackCollection, page, pageSize);
  const searchParams = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize)
  });

  if (query) {
    searchParams.set("query", query);
  }

  if (category) {
    searchParams.set("category", category);
  }

  if (type) {
    searchParams.set("type", type);
  }

  return apiFetch<PaginatedResponse<SearchResult>>(`/v1/search?${searchParams.toString()}`, {
    cache: "no-store",
    fallbackData
  });
}

export async function submitContactForm(payload: ContactPayload) {
  return apiFetch<ContactResponse>("/v1/contact", {
    cache: "no-store",
    init: {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    },
    fallbackData: {
      success: true,
      message: `Đã ghi nhận yêu cầu tư vấn của ${payload.name}.`
    }
  });
}

