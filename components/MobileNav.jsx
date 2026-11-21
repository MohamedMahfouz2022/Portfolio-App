"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteNavLinks } from "./site-nav-links";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open navigation menu"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent shadow-[0_0_24px_rgba(0,255,153,0.08)] outline-none transition-colors hover:bg-accent/20 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
      >
        <CiMenuFries aria-hidden="true" className="text-[1.55rem]" />
      </SheetTrigger>

      <SheetContent
        side="top"
        className="inset-0 flex h-[100dvh] w-full max-w-none flex-col items-center justify-center overflow-hidden border-0 bg-[#111116]/95 p-4 pt-16 text-white backdrop-blur-2xl sm:p-8"
      >
        <SheetTitle className="sr-only text-white">Navigate the portfolio</SheetTitle>
        <SheetDescription className="sr-only">
          Choose a page from the radial navigation menu.
        </SheetDescription>

        <div className="mb-2 text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-accent">
            Navigation / 01
          </p>
          <p className="mt-2 text-sm text-white/55">Choose your next stop</p>
        </div>

        <div
          className="relative mt-5 grid aspect-square w-[min(78vw,21rem)] place-items-center"
          style={{ "--orbit-radius": "clamp(4.7rem, 23vw, 6rem)" }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-[8%] rounded-full border border-accent/20"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-[17%] rounded-full border border-white/[0.06]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-[2%] rounded-full bg-[radial-gradient(circle,rgba(0,255,153,0.08)_0%,rgba(28,28,34,0)_68%)]"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 z-10 flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-[#1c1c22] text-2xl font-bold tracking-tight text-white shadow-[0_0_32px_rgba(0,255,153,0.14)]"
          >
            Mo<span className="text-accent">.</span>
          </div>

          <nav aria-label="Site navigation" className="absolute inset-0">
            <ul className="contents">
              {siteNavLinks.map(({ label, href, icon: Icon }, index) => {
                const isActive = href === pathname;
                const angle = -90 + index * 72;

                return (
                  <li key={href}>
                    <SheetClose asChild>
                      <Link
                        href={href}
                        aria-current={isActive ? "page" : undefined}
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(var(--orbit-radius)) rotate(${-angle}deg)`,
                          transition: "transform 220ms ease, background-color 180ms ease, color 180ms ease",
                        }}
                        className={`absolute z-20 flex min-h-16 w-[5.25rem] flex-col items-center justify-center gap-1 rounded-2xl border px-2 text-[0.68rem] font-semibold shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#111116] ${
                          isActive
                            ? "border-accent/70 bg-accent text-primary shadow-[0_0_24px_rgba(0,255,153,0.18)]"
                            : "border-white/10 bg-[#232329] text-white hover:border-accent/50 hover:text-accent"
                        }`}
                      >
                        <Icon aria-hidden="true" className="text-lg" />
                        <span>{label}</span>
                      </Link>
                    </SheetClose>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <p className="mt-4 text-center text-[0.65rem] uppercase tracking-[0.18em] text-white/35">
          React <span className="px-1 text-accent/65">·</span> Next.js <span className="px-1 text-accent/65">·</span> UI
        </p>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
