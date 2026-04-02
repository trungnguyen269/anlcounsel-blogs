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
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/og-cover.svg",
  type = "website"
}: BuildMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      type,
      url: canonical,
      siteName: "ANL Counsel",
      locale: "vi_VN",
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

