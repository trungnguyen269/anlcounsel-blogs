export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://anlcounsel.vn";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.anlcounsel.vn";

export const DEFAULT_REVALIDATE = 60;
export const DEFAULT_PAGE_SIZE = 6;
export const STATIC_PAGE_LIMIT = 3;

export type NavChildItem = {
  href: string;
  label: string;
};

export type HeaderNavItem = NavChildItem & {
  children?: readonly NavChildItem[];
};

export const HEADER_NAV_ITEMS: readonly HeaderNavItem[] = [
  { href: "/gioi-thieu", label: "Giới thiệu" },
  {
    href: "/van-ban",
    label: "Văn bản",
    children: [
      { href: "/huong-dan", label: "Hướng dẫn của cơ quan nhà nước" },
      { href: "/an-le", label: "Án lệ" }
    ]
  },
  {
    href: "/bieu-mau",
    label: "Biểu mẫu tham khảo",
    children: [
      { href: "/bieu-mau?category=doanh-nghiep", label: "Về doanh nghiệp" },
      { href: "/bieu-mau?category=to-tung", label: "Về tố tụng" },
      { href: "/bieu-mau?category=thu-tuc-hanh-chinh", label: "Về thủ tục hành chính" },
      { href: "/bieu-mau?category=dan-su", label: "Về dân sự" },
      { href: "/bieu-mau?category=khac", label: "Biểu mẫu khác" }
    ]
  },
  {
    href: "/cap-nhat-phap-luat",
    label: "Cập nhật pháp luật",
    children: [
      { href: "/cap-nhat-phap-luat?category=hinh-su", label: "Hình sự" },
      { href: "/cap-nhat-phap-luat?category=dan-su", label: "Dân sự" },
      { href: "/cap-nhat-phap-luat?category=dat-dai", label: "Đất đai" },
      { href: "/cap-nhat-phap-luat?category=kinh-doanh-thuong-mai", label: "Kinh doanh – Thương mại" },
      { href: "/cap-nhat-phap-luat?category=hon-nhan-va-gia-dinh", label: "Hôn nhân và Gia đình" },
      { href: "/cap-nhat-phap-luat?category=linh-vuc-khac", label: "Lĩnh vực khác" }
    ]
  },
  { href: "/quan-diem", label: "Quan điểm" },
  { href: "/lien-he", label: "Liên hệ" }
] as const;

export const FOOTER_NAV_ITEMS: readonly NavChildItem[] = [
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/van-ban", label: "Văn bản" },
  { href: "/huong-dan", label: "Hướng dẫn của cơ quan nhà nước" },
  { href: "/an-le", label: "Án lệ" },
  { href: "/bieu-mau", label: "Biểu mẫu tham khảo" },
  { href: "/cap-nhat-phap-luat", label: "Cập nhật pháp luật" },
  { href: "/quan-diem", label: "Quan điểm" },
  { href: "/lien-he", label: "Liên hệ" }
] as const;

export const PRACTICE_AREAS = [
  "Hình sự",
  "Dân sự",
  "Đất đai",
  "Kinh doanh – Thương mại",
  "Hôn nhân & Gia đình",
  "Lĩnh vực khác"
] as const;
