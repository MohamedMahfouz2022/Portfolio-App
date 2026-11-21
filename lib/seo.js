export const SITE_URL = "https://portfolio-app-chi-sepia.vercel.app";
export const SITE_NAME = "Muhammad Mahfouz Moawad";
export const DEFAULT_TITLE = `${SITE_NAME} | Front-End Developer`;
export const DEFAULT_DESCRIPTION =
  "Portfolio of Muhammad Mahfouz Moawad, an Egypt-based Front-End Developer creating responsive web experiences with React, Next.js, and Arabic RTL design.";

const socialImage = {
  url: `${SITE_URL}/Coding-bro.png`,
  width: 2000,
  height: 2000,
  alt: "Illustration representing Muhammad Mahfouz Moawad's web development portfolio",
};

export function createPageMetadata({ title, description, path }) {
  const canonicalUrl = new URL(path, SITE_URL).toString();
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title: { absolute: socialTitle },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      locale: "en_US",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage.url],
    },
  };
}
