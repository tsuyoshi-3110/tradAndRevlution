// src/app/(routes)/home/page.tsx

import type { Metadata } from "next";
import BackgroundVideo from "@/components/backgroundVideo/BackgroundVideo";
import TopFixedText from "@/components/TopFixedText";

export const metadata: Metadata = {
  title: "川上さく良｜完全紹介制ベビーシッター",
  description:
    "完全紹介制ベビーシッターさくらです。ベビーシッター歴16年。10年間コーディネーターとして、お客様とシッターさんのご希望をピッタンコ！とマッチングしてきました。保育のプロよりも“お助けマン”として寄り添います。",
  openGraph: {
    title: "川上さく良｜完全紹介制ベビーシッター",
    description:
      "ベビーシッター歴16年／元コーディネーター。“お助けマン”として寄り添います（神奈川県川崎市宮前区）。",
    url: "https://trad-and-revlution.shop/",
    siteName: "川上さく良",
    images: [
      {
        url: "https://trad-and-revlution.shop/ogpLogo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://trad-and-revlution.shop/" },
};

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* ① ファーストビュー：背景動画または画像 */}
      <section className="relative h-screen overflow-hidden">
        <BackgroundVideo />
      </section>

      {/* ② テキスト紹介セクション */}
      <section className="relative z-10 text-white px-4 py-20">
        {/* 編集可能な固定テキストコンポーネント */}
        <TopFixedText />

        {/* ページタイトルとリード文 */}
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center leading-tight mb-6 text-outline">
          川上さく良／完全紹介制ベビーシッター
        </h1>

        <p className="max-w-3xl mx-auto text-center leading-relaxed text-outline">
          ベビーシッター歴16年。さらに10年間、コーディネーターとして
          「ご家庭のご希望」と「シッターの得意」をピッタンコ！とマッチングしてきました。
          保育のプロというより、日常を支える<strong>お助けマン</strong>として、
          ご家庭それぞれのペースに寄り添います。
        </p>
      </section>

      {/* ③ JSON-LD（構造化データ） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ChildCare",
              name: "川上さく良",
              url: "https://trad-and-revlution.shop/",
              description:
                "完全紹介制ベビーシッターさくらです。ベビーシッター歴16年、元コーディネーター。“お助けマン”として寄り添います。",
              image: "https://trad-and-revlution.shop/ogpLogo.png",
              email: "trad.and.revlution@gmail.com",
              telephone: "+819018067391",
              address: {
                "@type": "PostalAddress",
                postalCode: "216-0022",
                addressRegion: "神奈川県",
                addressLocality: "川崎市宮前区",
                streetAddress: "5-7-1",
              },
              areaServed: [{ "@type": "AdministrativeArea", name: "神奈川県" }],
              founder: { "@type": "Person", name: "川上さく良" },
              sameAs: [], // SNS等あれば配列にURLを追加
            },
          ]),
        }}
      />
    </main>
  );
}
