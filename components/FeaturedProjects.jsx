import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { featuredProjects } from "@/lib/featuredProjects";

const FeaturedProjects = ({ locale = "en" }) => {
  const isArabic = locale === "ar";
  const text = isArabic
    ? {
        eyebrow: "أعمال مختارة",
        title: "مشاريع مميزة",
        description: "نماذج من تجارب ويب حية، من المتاجر العربية إلى طلب الطعام التفاعلي.",
        github: "حساب GitHub",
        preview: "معاينة مباشرة لمشروع",
        tech: "تقنيات",
        demo: "عرض مباشر",
        source: "الكود المصدري",
      }
    : {
        eyebrow: "Selected work",
        title: "Featured Projects",
        description: "A selection of live web experiences, from Arabic storefronts to interactive food ordering.",
        github: "GitHub profile",
        preview: "Open live preview of",
        tech: "technologies",
        demo: "Live demo",
        source: "Source code",
      };

  return (
    <section className="container mx-auto px-4 pb-12 pt-8 sm:px-6" aria-labelledby="featured-projects-heading">
      <div className="mx-auto mb-8 max-w-6xl">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-accent sm:text-left">
          {text.eyebrow}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 id="featured-projects-heading" className="text-center text-3xl font-bold sm:text-left sm:text-4xl">
              {text.title}
            </h1>
            <p className="mt-2 max-w-2xl text-center text-sm leading-6 text-white/65 sm:text-left sm:text-base">
              {text.description}
            </p>
          </div>
          <a
            href="https://github.com/MohamedMahfouz2022"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent sm:mx-0"
          >
            <FaGithub aria-hidden="true" />
            {text.github}
          </a>
        </div>
      </div>

      <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <li key={project.name} className="min-w-0">
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#232329] shadow-lg transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-xl">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${text.preview} ${project.name}`}
                className="relative block aspect-[16/10] overflow-hidden bg-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <Image
                  src={project.image}
                  alt={isArabic ? project.imageAltAr : project.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/65 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {isArabic ? project.categoryAr : project.category}
                </span>
              </a>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-white sm:text-2xl">{project.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-white/70">
                  {isArabic ? project.descriptionAr : project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} ${text.tech}`}>
                  {project.technologies.map((technology) => (
                    <li key={technology} className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/80 ring-1 ring-inset ring-white/10">
                      {technology}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-primary transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    <FaExternalLinkAlt aria-hidden="true" /> {text.demo}
                    <span className="sr-only">{project.name}</span>
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    <FaGithub aria-hidden="true" /> {text.source}
                    <span className="sr-only">{project.name}</span>
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProjects;
