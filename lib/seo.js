export const SITE_URL = "https://portfolio-app-chi-sepia.vercel.app";
export const SITE_NAME = "Muhammad Mahfouz Moawad";
export const DEFAULT_TITLE = `${SITE_NAME} | Front-End Developer`;
export const DEFAULT_DESCRIPTION =
  "Portfolio of Muhammad Mahfouz Moawad, an Egypt-based Front-End Developer creating responsive web experiences with React, Next.js, and Arabic RTL design.";
export const DEFAULT_TITLE_AR = "محمد محفوظ معوض | مطور واجهات أمامية";
export const DEFAULT_DESCRIPTION_AR =
  "معرض أعمال محمد محفوظ معوض، مطور واجهات أمامية من مصر، يبني تجارب ويب متجاوبة باستخدام React وNext.js ويدعم العربية واتجاه RTL.";

const socialImage = {
  url: `${SITE_URL}/Coding-bro.png`,
  width: 2000,
  height: 2000,
  alt: "Illustration representing Muhammad Mahfouz Moawad's web development portfolio",
};

function localizedPaths(path) {
  const cleanPath = path === "/" ? "" : path.replace(/^\/+|\/+$/g, "");
  return {
    en: cleanPath ? `/${cleanPath}` : "/",
    ar: cleanPath ? `/ar/${cleanPath}` : "/ar",
  };
}

export function createLocalizedPageMetadata({ locale = "en", title, description, path }) {
  const paths = localizedPaths(path);
  const pagePath = paths[locale] || paths.en;
  const canonicalUrl = new URL(pagePath, SITE_URL).toString();
  const socialTitle = `${title} | ${SITE_NAME}`;
  const alternates = Object.fromEntries(
    Object.entries({ ...paths, "x-default": paths.en }).map(([language, pathname]) => [
      language,
      new URL(pathname, SITE_URL).toString(),
    ])
  );

  return {
    title: { absolute: socialTitle },
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: alternates,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
      images: [
        locale === "ar"
          ? { ...socialImage, alt: "رسم توضيحي لمعرض أعمال محمد محفوظ معوض في تطوير الويب" }
          : socialImage,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage.url],
    },
  };
}

export function createPageMetadata({ title, description, path }) {
  return createLocalizedPageMetadata({ locale: "en", title, description, path });
}

export const rootMetadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    SITE_NAME,
    "Front-End Developer",
    "React developer",
    "Next.js developer",
    "Arabic RTL web development",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      en: `${SITE_URL}/`,
      ar: `${SITE_URL}/ar`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [socialImage.url],
  },
  robots: { index: true, follow: true },
};

export const rootMetadataAr = {
  ...rootMetadata,
  title: { default: DEFAULT_TITLE_AR, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION_AR,
  alternates: {
    canonical: `${SITE_URL}/ar`,
    languages: {
      en: `${SITE_URL}/`,
      ar: `${SITE_URL}/ar`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    ...rootMetadata.openGraph,
    url: `${SITE_URL}/ar`,
    title: DEFAULT_TITLE_AR,
    description: DEFAULT_DESCRIPTION_AR,
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    images: [{ ...socialImage, alt: "رسم توضيحي لمعرض أعمال محمد محفوظ معوض في تطوير الويب" }],
  },
  twitter: {
    ...rootMetadata.twitter,
    title: DEFAULT_TITLE_AR,
    description: DEFAULT_DESCRIPTION_AR,
  },
};
