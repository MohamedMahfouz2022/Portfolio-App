import Image from "next/image";
import Link from "next/link";
import { FiArrowDownRight, FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { featuredProjects } from "@/lib/featuredProjects";

export const metadata = {
  title: "Home",
  description:
    "Muhammad Mahfouz Moawad is a Front-End Developer specializing in React, Next.js, responsive design, and Arabic RTL web experiences.",
};

const cvPath = "/Muhammad%20Mahfouz%20Moawad%20Hadib%20CV.pdf";

export default function HomePage() {
  return (
    <main>
      <section className="container mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:min-h-[calc(100vh-6.5rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-20">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent sm:text-sm">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
            Front-End Developer · React &amp; Next.js
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-accent">Muhammad Mahfouz Moawad</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg lg:mx-0">
            I build responsive web experiences, from Arabic RTL storefronts and restaurant ordering flows to polished landing pages. My work focuses on clear interfaces, thoughtful interactions, and reliable front-end foundations.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-primary transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Explore projects <FiArrowRight aria-hidden="true" />
            </Link>
            <a
              href={cvPath}
              download="Muhammad-Mahfouz-CV.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <FiDownload aria-hidden="true" /> Download CV
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white/70 transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <FiMail aria-hidden="true" /> Contact
            </Link>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Social
              containerStyle="flex flex-wrap justify-center gap-3 lg:justify-start"
              iconStyle="text-xl text-white/70 hover:text-accent transition-colors"
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start" aria-label="Areas of focus">
            {["Arabic RTL", "Responsive UI", "E-commerce", "WhatsApp ordering"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/65">{item}</span>
            ))}
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-[420px] lg:order-2">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#232329] p-4 shadow-2xl shadow-black/25 sm:p-6">
            <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-12 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative rounded-[1.5rem] bg-primary/50 p-3 sm:p-5">
              <Photo />
            </div>
            <div className="relative mt-4 flex items-center justify-between gap-3 border-t border-white/10 px-2 pt-4">
              <div>
                <p className="text-sm font-semibold text-white">Web experiences with purpose</p>
                <p className="mt-1 text-xs text-white/55">Design · Development · Delivery</p>
              </div>
              <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <FiArrowDownRight />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="home-projects-heading" className="container mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Selected work</p>
            <h2 id="home-projects-heading" className="text-2xl font-bold text-white sm:text-3xl">A few projects I&apos;ve built</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">Real examples of storefront, restaurant, and café experiences.</p>
          </div>
          <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 self-start rounded text-sm font-semibold text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent sm:self-auto">
            View all projects <FiArrowRight aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <li key={project.repoName} className="min-w-0">
              <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-[#232329] transition duration-300 hover:-translate-y-1 hover:border-accent/40">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name} live demo`}
                  className="relative block aspect-[16/10] overflow-hidden bg-black/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </a>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
                    {project.technologies.map((technology) => (
                      <li key={technology} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/65">{technology}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
