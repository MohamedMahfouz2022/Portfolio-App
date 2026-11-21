"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNavLinks } from "./site-nav-links";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation">
      <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-black/20 p-1">
        {siteNavLinks.map(({ label, href, icon: Icon }) => {
          const isActive = href === pathname;

          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex h-11 items-center gap-2 rounded-full border px-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? "border-accent/65 bg-accent/10 text-accent shadow-[0_0_20px_rgba(0,255,153,0.08)]"
                    : "border-transparent text-white/70 hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                <Icon aria-hidden="true" className="text-base" />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
