import "../globals.css";
import Header from "@/components/Header";
import { rootMetadata } from "@/lib/seo";

export const metadata = rootMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <Header locale="en" />
        {children}
      </body>
    </html>
  );
}
