"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCodepen, FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    key: "linkedin",
    icon: <FaLinkedinIn aria-hidden="true" />,
    href: "https://www.linkedin.com/in/mohamed-mahfouz-moawad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    key: "github",
    icon: <FaGithub aria-hidden="true" />,
    href: "https://github.com/MohamedMahfouz2022",
  },
  {
    key: "whatsapp",
    icon: <FaWhatsapp aria-hidden="true" />,
    href: "https://wa.me/qr/SWV2KAXH6DCPL1",
  },
  {
    key: "facebook",
    icon: <FaFacebookF aria-hidden="true" />,
    href: "https://www.facebook.com/mohamed.mahfouz.35175?mibextid=ZbWKwL",
  },
  {
    key: "codepen",
    icon: <FaCodepen aria-hidden="true" />,
    href: "https://codepen.io/mohamedmahfouz2022/pens/public",
  },
];

export default function Social({ containerStyle = "flex gap-4", iconStyle = "text-2xl", locale = "en" }) {
  const labels = locale === "ar"
    ? { linkedin: "حساب LinkedIn", github: "حساب GitHub", whatsapp: "التواصل عبر WhatsApp", facebook: "حساب Facebook", codepen: "حساب CodePen", profiles: "حسابات التواصل الاجتماعي" }
    : { linkedin: "LinkedIn profile", github: "GitHub profile", whatsapp: "WhatsApp contact", facebook: "Facebook profile", codepen: "CodePen profile", profiles: "Social profiles" };
  return (
    <ul aria-label={labels.profiles} className={containerStyle}>
      {socialLinks.map(({ key, icon, href }, index) => (
        <motion.li
          key={key}
          initial={{ translateY: 24, opacity: 0 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.15 + index * 0.08, duration: 0.4, ease: "easeOut" }}
        >
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={labels[key]}
            title={labels[key]}
            className={`flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${iconStyle}`}
          >
            {icon}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
