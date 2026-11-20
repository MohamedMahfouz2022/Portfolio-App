"use client";

import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open navigation menu"
        className="flex min-h-11 min-w-11 items-center justify-center rounded-md outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-accent"
      >
        <CiMenuFries aria-hidden="true" className="text-[30px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex w-[min(85vw,22rem)] flex-col">
        <SheetTitle className="sr-only">Site navigation</SheetTitle>
        <div className="mb-12 mt-20 text-center text-2xl">
          <SheetClose asChild>
            <Link href="/" aria-label="Mohamed Mahfouz home">
              <span className="font-semibold">Mohamed<span className="text-accent">.</span></span>
            </Link>
          </SheetClose>
        </div>
        <nav aria-label="Mobile navigation" className="flex flex-col items-center justify-center gap-4">
          {links.map((link) => {
            const isActive = link.path === pathname;
            return (
              <SheetClose asChild key={link.path}>
                <Link
                  href={link.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-11 w-full max-w-xs items-center justify-center rounded-lg px-4 text-xl capitalize transition-colors hover:bg-white/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${isActive ? "border border-accent/50 text-accent" : "text-white"}`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
