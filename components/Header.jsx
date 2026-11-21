import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = ({ locale = "en" }) => {
  const isArabic = locale === "ar";
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="container mx-auto flex min-h-[4.25rem] max-w-7xl items-center justify-between gap-3 rounded-[1.65rem] border border-white/10 bg-[#1c1c22]/85 px-4 shadow-lg shadow-black/20 backdrop-blur-xl sm:px-6 xl:rounded-full">
        <Link
          href={isArabic ? "/ar" : "/"}
          aria-label={isArabic ? "الصفحة الرئيسية لمحمد محفوظ" : "Mohamed Mahfouz home"}
          className="group inline-flex shrink-0 items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-primary"
        >
          <span className="text-3xl font-bold leading-none tracking-tight text-white sm:text-[2rem]">
            Mo<span className="text-accent transition-colors group-hover:text-white">.</span>
          </span>
          <span className="hidden border-l border-white/15 pl-3 text-[0.62rem] font-semibold uppercase leading-tight tracking-[0.18em] text-white/55 lg:inline-block">
            {isArabic ? "مطور" : "Front-end"}
            <br />
            {isArabic ? "واجهات أمامية" : "Developer"}
          </span>
        </Link>

        <div className="hidden items-center gap-4 xl:flex">
          <Nav locale={locale} />
          <LanguageSwitcher locale={locale} />
          <Button asChild size="md" className="gap-2 px-5">
            <Link href={isArabic ? "/ar/contact" : "/contact"}>
              {isArabic ? "لنتحدث" : "Let's talk"}
              <FiArrowUpRight aria-hidden="true" className="text-lg" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <LanguageSwitcher locale={locale} />
          <span className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/55 sm:inline-flex">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            React <span className="text-white/25">/</span> Next.js
          </span>
          <MobileNav locale={locale} />
        </div>
      </div>
    </header>
  );
};

export default Header;
