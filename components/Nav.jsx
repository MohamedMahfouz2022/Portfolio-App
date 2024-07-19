"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaHome, FaTools, FaAddressBook } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";

const links = [
    {
        name: "Home",
        path: "/",
        icon: <FaHome />,
    },
    {
        name: "Resume",
        path: "/resume",
        icon: <IoMdPerson />,
    },
    {
        name: "Skills",
        path: "/skills",
        icon: <FaTools />,
    },
    {
        name: "Projects",
        path: "/projects",
        icon: <GrProjects />,
    },
    {
        name: "Contact",
        path: "/contact",
        icon: <FaAddressBook />,
    },
]
const Nav = () => {
    const pathname = usePathname()
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`a ${link.path === pathname &&
                        "text-accent border-b-2 border-accent"}
                        capitalize font-bold hover:text-accent transition-all flex flex-row gap-2 items-center `}>
                        {link.icon}  {link.name}
                    </Link>
                )
            })}
        </nav >
    )
}

export default Nav