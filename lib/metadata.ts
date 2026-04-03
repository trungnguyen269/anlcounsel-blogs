import type { Metadata } from "next";

import { SITE_URL } from "@/lib/constants";
import { absoluteUrl } from "@/lib/utils";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  authors?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/og-cover.svg",
  type = "website",
  noIndex = false,
  authors = [],
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: BuildMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    authors: authors.map((name) => ({ name })),
    creator: "ANL Counsel",
    publisher: "ANL Counsel",
    category: section,
    alternates: {
      canonical
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true
          }
        }
      : undefined,
    openGraph: {
      title,
      description,
      type,
      url: canonical,
      siteName: "ANL Counsel",
      locale: "vi_VN",
      publishedTime,
      modifiedTime,
      authors: authors.length > 0 ? authors : undefined,
      section,
      tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}
