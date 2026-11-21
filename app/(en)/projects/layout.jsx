import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected projects by Muhammad Mahfouz Moawad: Arabic RTL e-commerce, restaurant ordering, and café websites built with React and Next.js.",
  path: "/projects",
});

export default function ProjectsLayout({ children }) {
  return children;
}
