import type { Metadata } from "next";
import { Cormorant_Garamond, Open_Sans } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { buildMetadata } from "@/lib/metadata";
import { buildOrganizationSchema, buildWebsiteSchema } from "@/lib/structured-data";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"]
});

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = buildMetadata({
  title: "ANL Counsel | Cổng nội dung pháp lý chuẩn SEO",
  description:
    "Website pháp lý của ANL Counsel tối ưu SSG + ISR cho blog, văn bản và án lệ.",
  keywords: ["luat", "anl counsel", "van ban phap luat", "an le", "blog phap ly"]
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${cormorant.variable} ${openSans.variable}`} lang="vi">
      <body>
        <JsonLd data={[buildOrganizationSchema(), buildWebsiteSchema()]} />
        <div className="min-h-screen bg-parchment">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
