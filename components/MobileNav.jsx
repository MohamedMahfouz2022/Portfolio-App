"use client"

import { Sheet, SheetContact, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CiMenuFries } from "react-icons/ci"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className=" mt-32 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-2xl font-semibold" >
              Mohamed<span className="text-accent" >.</span></h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link href={link.path} key={index} className={`a ${link.path === pathname &&
                "text-accent border-b-2 border-accent"}
                capitalize text-xl hover:text-accent transition-all`}>
                {link.name}
              </Link>
            )
          })}
        </nav >
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav