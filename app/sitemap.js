import { SITE_URL } from "@/lib/seo";

const publicPages = [
  { path: "/", priority: 1 },
  { path: "/projects", priority: 0.8 },
  { path: "/resume", priority: 0.7 },
  { path: "/skills", priority: 0.7 },
  { path: "/contact", priority: 0.6 },
];

export default function sitemap() {
  return publicPages.map(({ path, priority }) => ({
    url: path === "/" ? SITE_URL : new URL(path, SITE_URL).toString(),
    changeFrequency: "monthly",
    priority,
  }));
}
