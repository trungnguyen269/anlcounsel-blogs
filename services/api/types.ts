export type PracticeArea =
  | "Hình sự"
  | "Dân sự"
  | "Đất đai"
  | "Kinh doanh – Thương mại"
  | "Hôn nhân & Gia đình"
  | "Lĩnh vực khác";

export type PaginationMeta = {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export type PaginatedResponse<T> = PaginationMeta & {
  items: T[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: PracticeArea;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  coverImage: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type LegalDocument = {
  id: string;
  title: string;
  summary: string;
  body: string;
  category: PracticeArea;
  referenceNumber: string;
  issuedAt: string;
  status: "Có hiệu lực" | "Hết hiệu lực" | "Sắp có hiệu lực";
  tags: string[];
};

export type Precedent = {
  id: string;
  title: string;
  summary: string;
  body: string;
  category: PracticeArea;
  court: string;
  decisionDate: string;
  keywordTags: string[];
};

export type GuideItem = {
  id: string;
  title: string;
  summary: string;
  category: PracticeArea;
  href: string;
};

export type TemplateItem = {
  id: string;
  title: string;
  summary: string;
  category: PracticeArea;
  href: string;
};

export type SearchResult = {
  id: string;
  type: "blog" | "document" | "precedent";
  title: string;
  excerpt: string;
  href: string;
  category: PracticeArea;
  publishedAt: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
};

export type ContactResponse = {
  success: boolean;
  message: string;
};

