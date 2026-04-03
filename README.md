# ANL Counsel

Website pháp lý theo kiến trúc `SSG + ISR` ưu tiên SEO với `Next.js App Router`, sử dụng external API thay vì Next.js API routes.

## Cấu trúc chính

```text
app/
  actions/
  an-le/[id]/
  bieu-mau/
  blog/[slug]/
  cap-nhat-phap-luat/
  gioi-thieu/
  huong-dan/
  lien-he/
  tim-kiem/
  van-ban/[id]/
components/
  content/
  forms/
  home/
  layout/
  ui/
hooks/
lib/
services/api/
public/
```

## Môi trường

Tạo file `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://anlcounsel.vn
NEXT_PUBLIC_API_BASE_URL=https://api.anlcounsel.vn
```

## Chạy local

```bash
npm install
npm run dev
```

## Triển khai Vercel

1. Push repo lên GitHub hoặc Git provider bạn dùng.
2. Tạo project mới trên Vercel và import repo.
3. Thiết lập biến môi trường:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_API_BASE_URL`
4. Build command: `npm run build`
5. Output: mặc định của Next.js.

## Ghi chú tích hợp API

- Các endpoint trong `services/api/content.ts` đang được chuẩn hóa theo pattern:
  - `/v1/blog-posts`
  - `/v1/legal-documents`
  - `/v1/precedents`
  - `/v1/guides`
  - `/v1/templates`
  - `/v1/search`
  - `/v1/contact`
- Nếu backend Spring Boot của bạn dùng path khác, chỉ cần map lại trong service layer.
- Xem hướng dẫn chi tiết tại `docs/API_INTEGRATION_GUIDE.md`.
