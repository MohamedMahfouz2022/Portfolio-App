import "./globals.css";
import Header from "@/components/Header";

const siteUrl = "https://portfolio-app-chi-sepia.vercel.app";
const siteTitle = "Mohamed Mahfouz | Front-End Developer";
const siteDescription =
  "Portfolio of Mohamed Mahfouz, a front-end developer creating responsive, accessible web experiences with modern technologies.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: "%s | Mohamed Mahfouz" },
  description: siteDescription,
  applicationName: "Mohamed Mahfouz Portfolio",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Mohamed Mahfouz Portfolio",
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    images: [{ url: "/Coding-bro.png", width: 2000, height: 2000, alt: "Illustration representing Mohamed Mahfouz's web development portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/Coding-bro.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
