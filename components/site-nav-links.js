import { FaAddressBook, FaHome, FaTools } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";

const links = [
  { key: "home", en: "Home", ar: "الرئيسية", path: "/", icon: FaHome },
  { key: "resume", en: "Resume", ar: "السيرة الذاتية", path: "/resume", icon: IoMdPerson },
  { key: "skills", en: "Skills", ar: "المهارات", path: "/skills", icon: FaTools },
  { key: "projects", en: "Projects", ar: "المشاريع", path: "/projects", icon: GrProjects },
  { key: "contact", en: "Contact", ar: "التواصل", path: "/contact", icon: FaAddressBook },
];

export function getSiteNavLinks(locale = "en") {
  return links.map(({ en, ar, path, ...rest }) => ({
    ...rest,
    label: locale === "ar" ? ar : en,
    href: locale === "ar" ? (path === "/" ? "/ar" : `/ar${path}`) : path,
  }));
}
