"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCodepen, FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    label: "LinkedIn profile",
    icon: <FaLinkedinIn aria-hidden="true" />,
    href: "https://www.linkedin.com/in/mohamed-mahfouz-moawad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    label: "GitHub profile",
    icon: <FaGithub aria-hidden="true" />,
    href: "https://github.com/MohamedMahfouz2022",
  },
  {
    label: "WhatsApp contact",
    icon: <FaWhatsapp aria-hidden="true" />,
    href: "https://wa.me/qr/SWV2KAXH6DCPL1",
  },
  {
    label: "Facebook profile",
    icon: <FaFacebookF aria-hidden="true" />,
    href: "https://www.facebook.com/mohamed.mahfouz.35175?mibextid=ZbWKwL",
  },
  {
    label: "CodePen profile",
    icon: <FaCodepen aria-hidden="true" />,
    href: "https://codepen.io/mohamedmahfouz2022/pens/public",
  },
];

export default function Social({ containerStyle = "flex gap-4", iconStyle = "text-2xl" }) {
  return (
    <ul aria-label="Social profiles" className={containerStyle}>
      {socialLinks.map(({ label, icon, href }, index) => (
        <motion.li
          key={label}
          initial={{ translateY: 24, opacity: 0 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.15 + index * 0.08, duration: 0.4, ease: "easeOut" }}
        >
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={`flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${iconStyle}`}
          >
            {icon}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
