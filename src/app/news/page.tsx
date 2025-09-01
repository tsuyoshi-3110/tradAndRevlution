// src/app/(routes)/news/page.tsx
import type { Metadata } from "next";
import NewsClient from "@/components/NewsClient";

export const metadata: Metadata = {
  title: "お知らせ｜川上さく良（完全紹介制ベビーシッター）",
  description:
    "完全紹介制ベビーシッターの最新情報・受付状況・対応エリアに関するお知らせを掲載しています（神奈川県川崎市宮前区を中心に活動）。",
  openGraph: {
    title: "お知らせ｜川上さく良（完全紹介制ベビーシッター）",
    description:
      "最新のお知らせや受付状況、対応エリアの更新、各種ご案内を随時掲載しています。",
    url: "https://trad-and-revlution.shop/news",
    siteName: "川上さく良",
    images: [{ url: "https://trad-and-revlution.shop/ogpLogo.png", width: 1200, height: 630, alt: "川上さく良 OGP" }],
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://trad-and-revlution.shop/news" },
};

export default function NewsPage() {
  return (
    <main className="px-4 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mt-6 mb-6 text-center text-white/80">
        お知らせ
      </h1>
      <NewsClient />
    </main>
  );
}
