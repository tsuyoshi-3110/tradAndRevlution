import type { Metadata } from "next";
import ProductsClient from "@/components/ProductsClient";

export const metadata: Metadata = {
  title: "サービス一覧｜川上さく良（完全紹介制ベビーシッター）",
  description:
    "完全紹介制ベビーシッター。神奈川県川崎市宮前区を拠点に、単発／定期のシッティング、送迎サポート、夜間ケア、産前産後サポート、家事のお手伝いなど“お助けマン”として寄り添います。",
  openGraph: {
    title: "サービス一覧｜川上さく良（完全紹介制ベビーシッター）",
    description:
      "ベビーシッター歴16年・元コーディネーターの“お助けマン”サービス一覧。単発／定期、送迎、夜間、産前産後、家事サポートなど。",
    url: "https://trad-and-revlution.shop/products",
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
  alternates: { canonical: "https://trad-and-revlution.shop/products" },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
