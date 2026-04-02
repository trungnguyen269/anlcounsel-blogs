import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";
import {
  getBlogPageParams,
  getBlogSlugs,
  getLegalDocumentIds,
  getPrecedentIds
} from "@/services/api/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogSlugs, documentIds, precedentIds, paginatedBlogPages] = await Promise.all([
    getBlogSlugs(),
    getLegalDocumentIds(),
    getPrecedentIds(),
    getBlogPageParams()
  ]);

  const staticRoutes = [
    "",
    "/gioi-thieu",
    "/van-ban",
    "/an-le",
    "/huong-dan",
    "/bieu-mau",
    "/cap-nhat-phap-luat",
    "/quan-diem",
    "/lien-he"
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "daily" as const,
    priority: path === "" ? 1 : 0.8
  }));

  return [
    ...staticRoutes,
    ...blogSlugs.map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),
    ...documentIds.map((id) => ({
      url: `${SITE_URL}/van-ban/${id}`,
      changeFrequency: "weekly" as const,
      priority: 0.75
    })),
    ...precedentIds.map((id) => ({
      url: `${SITE_URL}/an-le/${id}`,
      changeFrequency: "weekly" as const,
      priority: 0.75
    })),
    ...paginatedBlogPages.map(({ page }) => ({
      url: `${SITE_URL}/cap-nhat-phap-luat/trang/${page}`,
      changeFrequency: "daily" as const,
      priority: 0.65
    }))
  ];
}
