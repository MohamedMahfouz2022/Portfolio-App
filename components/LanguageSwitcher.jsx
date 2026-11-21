"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ locale }) {
  const pathname = usePathname() || "/";
  const isArabic = locale === "ar";
  const alternatePath = isArabic
    ? pathname.replace(/^\/ar(?=\/|$)/, "") || "/"
    : pathname === "/"
      ? "/ar"
      : `/ar${pathname}`;

  return (
    <Link
      href={alternatePath}
      lang={isArabic ? "en" : "ar"}
      dir="ltr"
      aria-label={isArabic ? "Switch language to English" : "تغيير اللغة إلى العربية"}
      className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.035] px-3 text-xs font-bold text-white transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {isArabic ? "English" : "العربية"}
    </Link>
  );
}
