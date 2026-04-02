"use server";

import { revalidateTag } from "next/cache";

import { CACHE_TAGS } from "@/lib/cache-tags";

export async function revalidateContentTag(
  secret: string,
  tag: keyof typeof CACHE_TAGS
) {
  if (secret !== process.env.REVALIDATE_SECRET) {
    throw new Error("Invalid revalidation secret");
  }

  revalidateTag(CACHE_TAGS[tag]);
}

