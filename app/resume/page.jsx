import Link from "next/link";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiBriefcase,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

export const metadata = {
  title: "Resume",
  description:
    "Resume of Muhammad Mahfouz Moawad, Front-End Developer specializing in React and Next.js.",
};

const cvPath = "/Muhammad%20Mahfouz%20Moawad%20Hadib%20CV.pdf";

const projects = [
  {
    name: "Dukaan Hudum",
    description:
      "Arabic RTL e-commerce with a persisted cart, dynamic product routes, and search-friendly pages.",
    stack: "Next.js · TypeScript · Zustand · Tailwind CSS",
    source: "https://github.com/MohamedMahfouz2022/dukaan-hudum",
    live: "https://dukaan-hudum.vercel.app/",
  },
  {
    name: "Hajj Mahfouz Restaurant",
    description:
      "A nine-category menu with an animated cart and formatted WhatsApp order handoff.",
    stack: "Next.js · CartContext · WhatsApp API · Framer Motion",
    source: "https://github.com/MohamedMahfouz2022/Egyptian-Food-Restaurant",
    live: "https://egyptian-food-restaurant.vercel.app/",
  },
  {
    name: "Maxim Café",
    description:
      "Arabic RTL café landing page with scroll-triggered motion and a responsive layout.",
    stack: "Next.js · Framer Motion · Tailwind CSS · Biome",
    source: "https://github.com/MohamedMahfouz2022/maxim-cafe",
    live: "https://maxim-cafe.vercel.app/",
  },
  {
    name: "Personal Portfolio",
    description:
      "A responsive portfolio for projects and skills, deployed with GitHub Actions CI/CD.",
    stack: "Next.js · Tailwind CSS · shadcn/ui · Framer Motion",
    source: "https://github.com/MohamedMahfouz2022/Portfolio-App",
    live: "https://portfolio-app-chi-sepia.vercel.app/",
  },
];

const experience = [
  "Built responsive web pages with HTML, CSS, and JavaScript across training projects.",
  "Collaborated with student teams to develop and iterate on UI components.",
  "Practiced Git-based workflows and UI prototyping in Figma.",
  "Applied clean-code and cross-browser compatibility practices.",
];

const education = [
  {
    title: "Professional Front-End Web Development Nanodegree",
    institution: "Udacity",
    date: "January 2023",
    description:
      "Built responsive websites with CSS Flexbox, Grid, and JavaScript; completed a Landing Page and Weather Journal App.",
  },
  {
    title: "College of Technology and Industrial Education",
    institution: "Bani Sweif, Egypt",
    date: "Graduated 2020",
    description: "Graduated with Excellence.",
  },
];

function SectionHeading({ eyebrow, title, icon: Icon }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
        <Icon aria-hidden="true" className="text-xl" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
      <section
        aria-labelledby="resume-title"
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#232329] p-6 shadow-xl sm:p-9 lg:p-12"
      >
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Resume</p>
            <h1 id="resume-title" className="text-3xl font-bold leading-tight text-white sm:text-5xl">
              Muhammad Mahfouz Moawad
            </h1>
            <p className="mt-3 text-lg font-medium text-white/75 sm:text-xl">
              Front-End Developer <span className="text-accent">·</span> React &amp; Next.js
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Front-End Developer specializing in React and Next.js App Router, with hands-on experience building Arabic RTL e-commerce, restaurant ordering systems, and landing pages. Focused on responsive, performant, and accessible web experiences.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={cvPath}
              download="Muhammad-Mahfouz-CV.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-primary transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <FiDownload aria-hidden="true" className="text-lg" /> Download CV
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <FiMail aria-hidden="true" className="text-lg" /> Contact me
            </Link>
          </div>
        </div>
        <div className="relative mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-5 text-sm text-white/65">
          <a className="inline-flex min-h-11 items-center gap-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent hover:text-accent" href="https://github.com/MohamedMahfouz2022" target="_blank" rel="noopener noreferrer">
            <FiGithub aria-hidden="true" /> GitHub <FiArrowUpRight aria-hidden="true" className="text-xs" />
          </a>
          <a className="inline-flex min-h-11 items-center gap-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent hover:text-accent" href="https://linkedin.com/in/Mohamed-Mahfouz-Moawad" target="_blank" rel="noopener noreferrer">
            <FiLinkedin aria-hidden="true" /> LinkedIn <FiArrowUpRight aria-hidden="true" className="text-xs" />
          </a>
          <a className="inline-flex min-h-11 items-center gap-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent hover:text-accent" href="mailto:Mohamedmahfouz.m2@gmail.com">
            <FiMail aria-hidden="true" /> Mohamedmahfouz.m2@gmail.com
          </a>
        </div>
      </section>

      <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <section aria-labelledby="experience-heading">
          <SectionHeading eyebrow="Career" title="Experience" icon={FiBriefcase} />
          <article className="relative ml-2 border-l border-white/15 pl-6">
            <span aria-hidden="true" className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-primary" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 id="experience-heading" className="text-lg font-semibold text-white">Front-End Developer Intern</h3>
              <p className="text-sm text-accent">July – December 2022</p>
            </div>
            <p className="mt-1 text-sm text-white/60">Route IT Training Center · Cairo</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/70">
              {experience.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}
            </ul>
          </article>

          <div className="mt-12">
            <SectionHeading eyebrow="Learning" title="Education" icon={FiBookOpen} />
            <div className="space-y-4">
              {education.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-[#232329] p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{item.date}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{item.institution}</p>
                  <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="projects-heading">
          <SectionHeading eyebrow="Selected work" title="Projects" icon={FiExternalLink} />
          <div className="space-y-4">
            {projects.map((project) => (
              <article key={project.name} className="rounded-2xl border border-white/10 bg-[#232329] p-5 transition hover:border-accent/40 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                  <p className="text-xs leading-5 text-accent sm:text-right">{project.stack}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/70">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded text-white hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                    Live demo <FiArrowUpRight aria-hidden="true" />
                  </a>
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded text-white/65 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                    Source code <FiGithub aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
