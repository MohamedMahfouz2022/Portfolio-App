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
                className={`group relative inline-flex h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                <Icon aria-hidden="true" className="text-base" />
                <span>{label}</span>
                <span
                  aria-hidden="true"
                  className={`absolute bottom-[0.3rem] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-[opacity,transform] duration-200 ${
                    isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
