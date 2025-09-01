// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Script from "next/script";
import ThemeBackground from "@/components/ThemeBackground";
import WallpaperBackground from "@/components/WallpaperBackground";
import SubscriptionOverlay from "@/components/SubscriptionOverlay";
import { SITE_KEY } from "@/lib/atoms/siteKeyAtom";
import {
  kosugiMaru,
  notoSansJP,
  shipporiMincho,
  reggaeOne,
  yomogi,
  hachiMaruPop,
} from "@/lib/font";
import AnalyticsLogger from "@/components/AnalyticsLogger";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// ✅ metadata から themeColor を削除し、viewport で一括指定
export const metadata: Metadata = {
  title: "川上さく良｜完全紹介制ベビーシッター",
  description:
    "完全紹介制ベビーシッターさくらです。ベビーシッター歴16年。10年間コーディネーターとして、お客様とシッターさんのご希望をピッタンコ！とマッチングしてきました。保育のプロよりも“お助けマン”として寄り添います。",
  keywords: [
    "川上さく良",
    "さくら",
    "ベビーシッター",
    "完全紹介制",
    "神奈川県",
    "川崎市",
    "宮前区",
    "子育て支援",
    "託児",
  ],
  authors: [{ name: "川上さく良" }],
  metadataBase: new URL("https://trad-and-revlution.shop"),
  alternates: {
    canonical: "https://trad-and-revlution.shop/",
  },
  openGraph: {
    title: "川上さく良｜完全紹介制ベビーシッター",
    description:
      "ベビーシッター歴16年／元コーディネーター。ご希望をピッタンコ！とマッチング。保育のプロより“お助けマン”として寄り添います。",
    url: "https://trad-and-revlution.shop/",
    siteName: "川上さく良",
    type: "website",
    images: [
      {
        url: "https://trad-and-revlution.shop/ogpLogo.png",
        width: 1200,
        height: 630,
        alt: "川上さく良 OGP",
      },
    ],
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "川上さく良｜完全紹介制ベビーシッター",
    description:
      "ベビーシッター歴16年／元コーディネーター。“お助けマン”として寄り添います。",
    images: ["https://trad-and-revlution.shop/ogpLogo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=4" },
      { url: "/icon.png", type: "image/png", sizes: "any" },
    ],
    apple: "/icon.png",
    shortcut: "/favicon.ico?v=4",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`
        ${geistSans.variable} ${geistMono.variable}
        ${kosugiMaru.variable} ${notoSansJP.variable}
        ${yomogi.variable} ${hachiMaruPop.variable} ${reggaeOne.variable} ${shipporiMincho.variable}
        antialiased
      `}
    >
      <head>
        {/* OGP画像の事前読み込み */}
        <link rel="preload" as="image" href="/ogpLogo.png" type="image/png" />
        {/* Google Search Console の確認コードは発行後に以下を追加してください
        <meta name="google-site-verification" content="YOUR_TOKEN_HERE" />
        */}
      </head>

      <body className="relative min-h-screen bg-[#ffffff]">
        <SubscriptionOverlay siteKey={SITE_KEY} />
        <AnalyticsLogger />
        <WallpaperBackground />
        <ThemeBackground />
        <Header />
        {children}

        {/* 構造化データ */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ChildCare",
            name: "川上さく良",
            url: "https://trad-and-revlution.shop/",
            image: "https://trad-and-revlution.shop/ogpLogo.png",
            description:
              "完全紹介制ベビーシッターさくらです。ベビーシッター歴16年。10年間コーディネーターとして、お客様とシッターさんのご希望をピッタンコ！とマッチング。保育のプロよりも“お助けマン”として寄り添います。",
            email: "trad.and.revlution@gmail.com",
            telephone: "+819018067391",
            address: {
              "@type": "PostalAddress",
              postalCode: "216-0022",
              addressRegion: "神奈川県",
              addressLocality: "川崎市宮前区",
              streetAddress: "5-7-1",
            },
            founder: { "@type": "Person", name: "川上さく良" },
          })}
        </Script>
      </body>
    </html>
  );
}
