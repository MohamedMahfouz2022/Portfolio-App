import { SITE_URL } from "@/lib/seo";

const publicPages = [
  { path: "/", priority: 1 },
  { path: "/projects", priority: 0.8 },
  { path: "/resume", priority: 0.7 },
  { path: "/skills", priority: 0.7 },
  { path: "/contact", priority: 0.6 },
];

export default function sitemap() {
  return publicPages.flatMap(({ path, priority }) => {
    const enPath = path;
    const arPath = path === "/" ? "/ar" : `/ar${path}`;
    const languages = {
      en: new URL(enPath, SITE_URL).toString(),
      ar: new URL(arPath, SITE_URL).toString(),
      "x-default": new URL(enPath, SITE_URL).toString(),
    };
    return [enPath, arPath].map((localizedPath) => ({
      url: new URL(localizedPath, SITE_URL).toString(),
      changeFrequency: "monthly",
      priority,
      alternates: { languages },
    }));
  });
}
