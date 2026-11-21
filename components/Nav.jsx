"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { getSiteNavLinks } from "./site-nav-links";

const Nav = ({ locale = "en" }) => {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const siteNavLinks = getSiteNavLinks(locale);

  return (
    <nav aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}>
      <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-black/20 p-1">
        {siteNavLinks.map(({ label, href, icon: Icon }) => {
          const isActive = href === pathname;

          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`relative isolate inline-flex h-11 items-center gap-2 rounded-full border border-transparent px-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? "text-accent"
                    : "text-white/70 hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-navigation-frame"
                    aria-hidden="true"
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 430, damping: 34, mass: 0.7 }
                    }
                    className="pointer-events-none absolute inset-0 rounded-full border border-accent/65 bg-accent/10 shadow-[0_0_20px_rgba(0,255,153,0.08)]"
                  />
                )}
                <Icon aria-hidden="true" className="relative z-10 text-base" />
                <span className="relative z-10">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
