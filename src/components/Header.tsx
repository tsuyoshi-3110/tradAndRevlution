"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import clsx from "clsx";
import { useThemeGradient } from "@/lib/useThemeGradient";
import { useHeaderLogoUrl } from "../hooks/useHeaderLogoUrl";
import { auth } from "@/lib/firebase";
import { THEMES, ThemeKey } from "@/lib/themes";

const HEADER_H = "3rem";

export default function Header({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const gradient = useThemeGradient();
  const logoUrl = useHeaderLogoUrl();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const gradientClass = gradient
    ? `bg-gradient-to-b ${gradient}`
    : "bg-gray-100";

  const darkKeys: ThemeKey[] = ["brandH", "brandG", "brandI"];
  const currentKey = (Object.entries(THEMES).find(
    ([, v]) => v === gradient
  )?.[0] ?? null) as ThemeKey | null;
  const isDark = currentKey ? darkKeys.includes(currentKey) : false;

  return (
    <header
      className={clsx(
        "sticky top-0 z-30 flex items-center justify-between px-4 h-12",
        gradientClass,
        className,
        !isDark && "border-b border-gray-300"
      )}
      style={{ "--header-h": HEADER_H } as React.CSSProperties}
    >
      {/* ロゴ＆サイト名 */}
      <Link
        href="/"
        className={clsx(
          "text-md font-bold flex items-center gap-2 py-2 hover:opacity-70 transition-opacity",
          isDark ? "text-white" : "text-black"
        )}
        aria-label="トップへ戻る"
      >
        {logoUrl && logoUrl.trim() !== "" && (
          <Image
            src={logoUrl}
            alt="ロゴ"
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
            unoptimized
          />
        )}
        川上さく良
      </Link>

      {/* SNS & クイック連絡 */}
      <nav className="flex items-center gap-2 ml-auto mr-2">
        {/* LINE */}
        <a
          href="https://lin.ee/a34XL22"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LINEへ"
          className="inline-flex"
          title="LINE"
        >
          <Image
            src="/line-logo.png"
            alt="LINE"
            width={32}
            height={32}
            className="object-contain"
            unoptimized
          />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/sakura_kids.and.babysitter/?__pwa=1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagramへ"
          className="inline-flex"
          title="Instagram"
        >
          <Image
            src="/instagram-logo.png"
            alt="Instagram"
            width={32}
            height={32}
            className="object-contain"
            unoptimized
          />
        </a>

        {/* X（旧Twitter）— 画像が無い場合でも文字で表示 */}
        <a
          href="https://x.com/sk2967357352127?"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X（旧Twitter）へ"
          className={clsx(
            "inline-flex ",
            isDark ? "text-white" : "text-black"
          )}
          title="X"
        >
           <Image
            src="/x.png"
            alt="Instagram"
            width={29}
            height={29}
            className="object-contain rounded"
            unoptimized
          />
        </a>
      </nav>

      {/* ハンバーガーメニュー */}
      <div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="メニューを開く"
              className={clsx(
                "w-7 h-7 border-2",
                isDark ? "text-white border-white" : "text-black border-black ml-1"
              )}
            >
              <Menu size={26} />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className={clsx(
              "flex flex-col",
              "bg-gray-100",
              gradient && "bg-gradient-to-b",
              gradient
            )}
          >
            <SheetHeader className="pt-4 px-4">
              <SheetTitle
                className={clsx(
                  "text-center text-xl",
                  isDark ? "text-white" : "text-black"
                )}
              >
                メニュー
              </SheetTitle>
            </SheetHeader>

            <div className="flex-1 flex flex-col justify-center items-center space-y-4 text-center">
              {[
                // { href: "/products", label: "サービス" },
                { href: "/menu", label: "料金" },
                { href: "/stores", label: "対応エリア" },
                { href: "/about", label: "私の想い" },
                // { href: "/news", label: "お知らせ" },
                { href: "/blog", label: "ブログ" },
                { href: "/apply", label: "ご紹介依頼・ご予約" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "text-lg hover:opacity-80 transition-opacity",
                    isDark ? "text-white" : "text-black"
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="p-4 space-y-4">
              {isLoggedIn && (
                <>
                  <Link
                    href="/postList"
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "block text-center text-lg hover:opacity-80",
                      isDark ? "text-white" : "text-black"
                    )}
                  >
                    タイムライン
                  </Link>
                  <Link
                    href="/community"
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "block text-center text-lg hover:opacity-80",
                      isDark ? "text-white" : "text-black"
                    )}
                  >
                    コミュニティ
                  </Link>
                  <Link
                    href="/analytics"
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "block text-center text-lg hover:opacity-80",
                      isDark ? "text-white" : "text-black"
                    )}
                  >
                    分析
                  </Link>
                </>
              )}

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className={clsx(
                  "block text-center text-lg hover:opacity-80",
                  isDark ? "text-white" : "text-black"
                )}
              >
                Administrator Login
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
