import { API_BASE_URL } from "@/lib/constants";

type FetchCacheConfig = {
  revalidate?: number | false;
  tags?: string[];
};

type ApiFetchOptions<T> = {
  init?: RequestInit;
  cache?: RequestCache;
  next?: FetchCacheConfig;
  fallbackData?: T;
};

export async function apiFetch<T>(
  path: string,
  { init, cache = "force-cache", next, fallbackData }: ApiFetchOptions<T> = {}
): Promise<T> {
  const headers = new Headers(init?.headers);

  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  const requestInit: RequestInit & { next?: FetchCacheConfig } = {
    ...init,
    headers,
    next
  };

  if (cache === "no-store") {
    requestInit.cache = cache;
  } else if (!next) {
    requestInit.cache = cache;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, requestInit);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    if (typeof fallbackData !== "undefined") {
      return fallbackData;
    }

    throw error;
  }
}
