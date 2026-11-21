import { createLocalizedPageMetadata } from "@/lib/seo";

export const metadata = createLocalizedPageMetadata({
  locale: "ar",
  title: "المشاريع",
  description:
    "تعرّف على مشاريع محمد محفوظ معوض: متجر أزياء عربية، وتجارب مطعم ومقهى، ومواقع مبنية باستخدام React وNext.js.",
  path: "/projects",
});

export default function ArabicProjectsLayout({ children }) {
  return children;
}
