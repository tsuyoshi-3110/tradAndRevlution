import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "私の想い｜川上さく良（完全紹介制ベビーシッター）",
  description:
    "完全紹介制ベビーシッターさくらです。ベビーシッター歴16年、10年間はコーディネーターとして“ご希望をピッタンコ！”とマッチング。保育のプロというより、日常を支えるお助けマンとして寄り添います。",
  openGraph: {
    title: "私の想い｜川上さく良（完全紹介制ベビーシッター）",
    description:
      "ベビーシッター歴16年・元コーディネーター。ご家庭それぞれのペースに寄り添う“お助けマン”としての想いをお届けします。",
    url: "https://trad-and-revlution.shop/about",
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
  alternates: { canonical: "https://trad-and-revlution.shop/about" },
};

export default function AboutPage() {
  return (
    <main className="px-4 py-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mt-4 text-center text-white/80 text-outline">
        私の想い
      </h1>
      <AboutClient />
    </main>
  );
}
