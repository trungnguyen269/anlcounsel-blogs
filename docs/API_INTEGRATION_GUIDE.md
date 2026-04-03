# Hướng Dẫn Ráp API Và Custom API

Tài liệu này mô tả cách project đang tích hợp external API, cách thay đổi endpoint khi backend đổi cấu trúc, và cách thêm API mới mà vẫn giữ đúng kiến trúc hiện tại.

## 1. Kiến trúc tích hợp API hiện tại

Project đang tách lớp API thành 4 phần:

```text
services/api/
  client.ts      -> fetch wrapper dùng chung
  content.ts     -> service layer cho từng nghiệp vụ
  types.ts       -> định nghĩa kiểu dữ liệu
  mock-data.ts   -> dữ liệu fallback khi API lỗi hoặc chưa có backend
```

Luồng dữ liệu hiện tại:

1. Page hoặc component server gọi hàm trong `services/api/content.ts`
2. `content.ts` gọi `apiFetch()` trong `services/api/client.ts`
3. `apiFetch()` request tới backend Spring Boot qua `NEXT_PUBLIC_API_BASE_URL`
4. Nếu request lỗi và có `fallbackData`, frontend sẽ dùng dữ liệu mock

## 2. Biến môi trường cần có

Tạo file `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://anlcounsel.vn
NEXT_PUBLIC_API_BASE_URL=https://api.anlcounsel.vn
```

Trong code:

- `NEXT_PUBLIC_API_BASE_URL` được đọc tại [lib/constants.ts](/Users/trungnguyen/SourceCode/anl-blog/lib/constants.ts)
- fetch wrapper dùng base URL này trong [services/api/client.ts](/Users/trungnguyen/SourceCode/anl-blog/services/api/client.ts)

## 3. Các endpoint đang được map

Hiện tại service layer đang giả định backend có các endpoint:

- `GET /v1/blog-posts`
- `GET /v1/blog-posts/:slug`
- `GET /v1/legal-documents`
- `GET /v1/legal-documents/:id`
- `GET /v1/precedents`
- `GET /v1/precedents/:id`
- `GET /v1/guides`
- `GET /v1/templates`
- `GET /v1/search`
- `POST /v1/contact`

Các mapping này nằm trong [services/api/content.ts](/Users/trungnguyen/SourceCode/anl-blog/services/api/content.ts).

## 4. Cách fetch đang hoạt động

Fetch wrapper dùng hàm `apiFetch<T>()`:

```ts
apiFetch<T>(path, {
  init,
  cache,
  next,
  fallbackData
})
```

Ý nghĩa:

- `path`: đường dẫn API, ví dụ `/v1/blog-posts`
- `init`: cấu hình chuẩn của `fetch`, ví dụ `method`, `headers`, `body`
- `cache`: điều khiển cache kiểu Next.js
- `next.revalidate`: dùng cho ISR
- `next.tags`: gắn cache tags để có thể revalidate theo tag
- `fallbackData`: dữ liệu fallback nếu API lỗi

Ví dụ hiện tại:

```ts
return apiFetch<PaginatedResponse<BlogPost>>(`/v1/blog-posts?${searchParams.toString()}`, {
  cache: "force-cache",
  next: {
    revalidate: DEFAULT_REVALIDATE,
    tags: [CACHE_TAGS.blog]
  },
  fallbackData
});
```

## 5. Quy tắc chọn cache đúng cách

Project hiện đang dùng đúng theo định hướng SEO + performance:

### SSG + ISR

Dùng cho:

- trang blog listing
- trang văn bản
- trang án lệ
- trang chi tiết có SEO

Cấu hình:

```ts
cache: "force-cache"
next: { revalidate: 60, tags: [...] }
```

### SSR

Dùng cho:

- tìm kiếm
- lọc động theo query
- trang thay đổi theo request

Cấu hình:

```ts
cache: "no-store"
```

Ví dụ đang dùng tại `searchContent()` trong [services/api/content.ts](/Users/trungnguyen/SourceCode/anl-blog/services/api/content.ts).

### POST / form submission

Dùng:

```ts
cache: "no-store"
init: {
  method: "POST",
  ...
}
```

Ví dụ đang dùng tại `submitContactForm()`.

## 6. Cách thay đổi endpoint khi backend đổi path

Ví dụ backend đổi từ:

```text
/v1/blog-posts
```

thành:

```text
/api/articles
```

thì chỉ cần sửa trong service function tương ứng.

Ví dụ:

```ts
return apiFetch<PaginatedResponse<BlogPost>>(`/api/articles?${searchParams.toString()}`, {
  cache: "force-cache",
  next: {
    revalidate: DEFAULT_REVALIDATE,
    tags: [CACHE_TAGS.blog]
  },
  fallbackData
});
```

Không cần sửa ở page nếu chữ ký hàm `getBlogPosts()` vẫn giữ nguyên.

Khuyến nghị:

- luôn sửa ở `services/api/content.ts`
- không fetch trực tiếp trong page nếu đó là dữ liệu nghiệp vụ chính
- giữ API contract ổn định từ service layer trở lên

## 7. Cách custom response khi backend trả dữ liệu khác cấu trúc

Đây là case rất thường gặp.

Ví dụ frontend đang mong:

```ts
type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  ...
};
```

nhưng backend lại trả:

```json
{
  "articleId": "1",
  "articleSlug": "abc",
  "headline": "Title",
  "summary": "Excerpt"
}
```

Lúc này không nên sửa page trước. Nên map ngay tại service layer.

Ví dụ:

```ts
type BlogPostApiResponse = {
  articleId: string;
  articleSlug: string;
  headline: string;
  summary: string;
};

function mapBlogPost(item: BlogPostApiResponse): BlogPost {
  return {
    id: item.articleId,
    slug: item.articleSlug,
    title: item.headline,
    excerpt: item.summary,
    content: "",
    category: "Lĩnh vực khác",
    author: "ANL Counsel",
    publishedAt: new Date().toISOString(),
    readingTime: 5,
    coverImage: "/hero-law.svg"
  };
}
```

Sau đó:

```ts
const response = await apiFetch<{ items: BlogPostApiResponse[]; total: number }>(...);

return {
  ...response,
  items: response.items.map(mapBlogPost)
};
```

Nguyên tắc tốt:

- `types.ts` giữ type mà frontend muốn dùng
- service layer làm nhiệm vụ transform từ API response sang UI model
- page và component không nên biết backend trả field gì

## 8. Cách thêm một API mới

Ví dụ cần thêm API `Quan điểm`.

### Bước 1: thêm type

Thêm vào [services/api/types.ts](/Users/trungnguyen/SourceCode/anl-blog/services/api/types.ts):

```ts
export type OpinionItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
};
```

### Bước 2: thêm fallback mock data

Thêm vào [services/api/mock-data.ts](/Users/trungnguyen/SourceCode/anl-blog/services/api/mock-data.ts):

```ts
export const opinionItems: OpinionItem[] = [
  {
    id: "op-1",
    slug: "quan-diem-ve-rui-ro-hop-dong",
    title: "Quan điểm về rủi ro hợp đồng",
    excerpt: "Nội dung ngắn...",
    content: "<p>...</p>",
    publishedAt: "2026-04-03T08:00:00.000Z"
  }
];
```

### Bước 3: thêm service function

Thêm vào [services/api/content.ts](/Users/trungnguyen/SourceCode/anl-blog/services/api/content.ts):

```ts
export async function getOpinions({
  page = 1,
  pageSize = DEFAULT_PAGE_SIZE,
  query,
  noStore = false
}: ListingParams = {}) {
  const fallbackData = paginate(filterByQuery(opinionItems, query), page, pageSize);
  const searchParams = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize)
  });

  if (query) {
    searchParams.set("query", query);
  }

  return apiFetch<PaginatedResponse<OpinionItem>>(`/v1/opinions?${searchParams.toString()}`, {
    cache: noStore ? "no-store" : "force-cache",
    next: noStore
      ? undefined
      : {
          revalidate: DEFAULT_REVALIDATE,
          tags: ["opinions"]
        },
    fallbackData
  });
}
```

### Bước 4: gọi từ page

Ví dụ ở `app/quan-diem/page.tsx`:

```ts
const opinions = await getOpinions({ page: 1, pageSize: 6 });
```

## 9. Cách đổi tham số query cho đúng backend

Hiện tại listing đang dùng:

- `page`
- `pageSize`
- `query`
- `category`
- `type`

Nếu backend của bạn dùng tên khác, ví dụ:

- `keyword` thay vì `query`
- `size` thay vì `pageSize`

thì sửa `URLSearchParams` trong service function.

Ví dụ:

```ts
const searchParams = new URLSearchParams({
  page: String(page),
  size: String(pageSize)
});

if (query) {
  searchParams.set("keyword", query);
}
```

## 10. Cách thay đổi logic fallback

Fallback hiện tại đang giúp:

- frontend vẫn chạy khi backend chưa xong
- dev local không bị chặn vì API lỗi
- build không bị fail vô ích khi backend tạm unavailable

Fallback đang nằm ở:

- [services/api/mock-data.ts](/Users/trungnguyen/SourceCode/anl-blog/services/api/mock-data.ts)
- các biến `fallbackData` trong [services/api/content.ts](/Users/trungnguyen/SourceCode/anl-blog/services/api/content.ts)

Nếu muốn tắt fallback hoàn toàn trong production, có thể:

1. bỏ `fallbackData` khỏi `apiFetch()`
2. hoặc chỉ truyền fallback khi `process.env.NODE_ENV !== "production"`

Ví dụ:

```ts
fallbackData: process.env.NODE_ENV === "development" ? fallbackData : undefined
```

## 11. Cache tags và revalidate

Cache tags hiện ở [lib/cache-tags.ts](/Users/trungnguyen/SourceCode/anl-blog/lib/cache-tags.ts):

```ts
export const CACHE_TAGS = {
  blog: "blog-posts",
  documents: "legal-documents",
  precedents: "precedents",
  guides: "guides",
  templates: "templates",
  pages: "pages"
} as const;
```

Khi thêm resource mới, nên thêm tag tương ứng.

Ví dụ:

```ts
opinions: "opinions"
```

Rồi dùng trong service:

```ts
tags: [CACHE_TAGS.opinions]
```

Điều này giúp sau này dùng `revalidateTag()` dễ hơn.

## 12. Khi backend cần auth hoặc header riêng

Nếu API cần token hoặc custom header, thêm vào `init.headers`.

Ví dụ:

```ts
return apiFetch<BlogPost[]>("/v1/blog-posts", {
  init: {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  },
  next: {
    revalidate: DEFAULT_REVALIDATE,
    tags: [CACHE_TAGS.blog]
  }
});
```

Nếu token là secret server-only:

- không dùng `NEXT_PUBLIC_*`
- đọc trực tiếp từ `process.env.*`
- chỉ gọi trong server component, server action hoặc service chạy phía server

## 13. Khi backend trả lỗi không phải JSON

Hiện `apiFetch()` đang assume response thành công sẽ là JSON.

Nếu có API trả:

- text
- file
- blob

thì nên tạo thêm wrapper riêng thay vì ép dùng `apiFetch<T>()`.

Ví dụ:

```ts
export async function apiFetchText(path: string, init?: RequestInit) {
  const response = await fetch(`${API_BASE_URL}${path}`, init);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.text();
}
```

## 14. Checklist khi backend đổi API

Khi backend thay đổi, hãy kiểm tra theo thứ tự này:

1. `NEXT_PUBLIC_API_BASE_URL` đã đúng chưa
2. path endpoint có đổi không
3. query param có đổi tên không
4. shape response có đổi field không
5. pagination format có giống hiện tại không
6. detail endpoint dùng `id` hay `slug`
7. API có cần auth/header mới không
8. API đó nên dùng ISR hay `no-store`
9. fallback mock có còn đúng không
10. cache tag có cần thêm hoặc đổi không

## 15. Khuyến nghị maintain lâu dài

- Giữ mọi API call trong `services/api/`
- Không fetch trực tiếp trong UI nếu là dữ liệu nghiệp vụ
- Dùng `types.ts` làm nguồn type thống nhất cho frontend
- Dùng mapper trong service nếu backend response không đẹp
- Tách fallback mock rõ ràng để dev nhanh nhưng production vẫn kiểm soát được
- Với resource mới, luôn nghĩ theo bộ 4:
  - type
  - fallback
  - service
  - page/component

## 16. File cần sửa khi custom API

Tùy nhu cầu, thường sẽ sửa ở các file sau:

- [lib/constants.ts](/Users/trungnguyen/SourceCode/anl-blog/lib/constants.ts)
- [lib/cache-tags.ts](/Users/trungnguyen/SourceCode/anl-blog/lib/cache-tags.ts)
- [services/api/client.ts](/Users/trungnguyen/SourceCode/anl-blog/services/api/client.ts)
- [services/api/content.ts](/Users/trungnguyen/SourceCode/anl-blog/services/api/content.ts)
- [services/api/types.ts](/Users/trungnguyen/SourceCode/anl-blog/services/api/types.ts)
- [services/api/mock-data.ts](/Users/trungnguyen/SourceCode/anl-blog/services/api/mock-data.ts)

## 17. Tóm tắt ngắn

Nếu chỉ cần nhớ một nguyên tắc:

- backend đổi gì, sửa ở `services/api`
- UI không nên biết backend trả dữ liệu kiểu gì
- SEO page dùng ISR
- search/form dùng `no-store`
- luôn có type rõ ràng trước khi nối API

