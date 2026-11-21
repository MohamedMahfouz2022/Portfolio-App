import { FaAddressBook, FaHome, FaTools } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";

export const siteNavLinks = [
  { label: "Home", href: "/", icon: FaHome },
  { label: "Resume", href: "/resume", icon: IoMdPerson },
  { label: "Skills", href: "/skills", icon: FaTools },
  { label: "Projects", href: "/projects", icon: GrProjects },
  { label: "Contact", href: "/contact", icon: FaAddressBook },
];
