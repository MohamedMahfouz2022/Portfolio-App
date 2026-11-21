import "../globals.css";
import Header from "@/components/Header";
import { rootMetadataAr } from "@/lib/seo";

export const metadata = rootMetadataAr;

export default function ArabicRootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header locale="ar" />
        {children}
      </body>
    </html>
  );
}
