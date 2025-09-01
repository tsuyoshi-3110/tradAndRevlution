import type { Metadata } from "next";
import StoresClient from "@/components/StoresClient";
import { PhoneSection } from "@/components/PhoneSection";

export const metadata: Metadata = {
  title: "紹介窓口・対応エリア｜川上さく良（完全紹介制ベビーシッター）",
  description:
    "完全紹介制ベビーシッター。神奈川県川崎市宮前区を中心に、ご家庭のご希望に寄り添ってサポートします。こちらのページでは紹介窓口や対応エリア情報をご案内します。",
  openGraph: {
    title: "紹介窓口・対応エリア｜川上さく良（完全紹介制ベビーシッター）",
    description:
      "紹介制でお受けしています。対応エリア・窓口情報、連絡方法はこちらから。",
    url: "https://trad-and-revlution.shop/stores",
    siteName: "川上さく良",
    images: [
      {
        url: "https://trad-and-revlution.shop/ogpLogo.png",
        width: 1200,
        height: 630,
        alt: "川上さく良 OGP",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://trad-and-revlution.shop/stores" },
};

export default function StoresPage() {
  return (
    <main className="px-4 py-16">
      {/* ページタイトル・説明文 */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-2xl lg:text-3xl font-extrabold mb-4 text-white text-outline">
          紹介窓口・対応エリア
        </h1>
        <p className="leading-relaxed text-white text-outline">

          <strong>完全紹介制のベビーシッター</strong>です。
          <br className="hidden lg:block" />
          拠点は <strong>神奈川県川崎市宮前区</strong>。ご紹介者経由での
          ご連絡をお願いしております。
          <br className="hidden lg:block" />
         
        </p>
      </section>

      {/* 連絡先セクション（電話／メール等） */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <PhoneSection />
      </section>

      {/* 紹介窓口・対応エリアのカード一覧（既存 StoresClient を流用） */}
      <StoresClient />

      {/* 構造化データ（ChildCare + 対応エリア） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ChildCare",
            name: "川上さく良",
            url: "https://trad-and-revlution.shop/stores",
            image: "https://trad-and-revlution.shop/ogpLogo.png",
            description:
              "完全紹介制ベビーシッター。神奈川県川崎市宮前区を中心に活動しています。",
            email: "trad.and.revlution@gmail.com",
            telephone: "+819018067391",
            address: {
              "@type": "PostalAddress",
              postalCode: "216-0022",
              addressRegion: "神奈川県",
              addressLocality: "川崎市宮前区",
              streetAddress: "5-7-1",
            },
            areaServed: [
              { "@type": "AdministrativeArea", name: "神奈川県" },
              { "@type": "AdministrativeArea", name: "東京都" },
            ],
          }),
        }}
      />
    </main>
  );
}
