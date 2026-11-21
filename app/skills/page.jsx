import {
  FiCode,
  FiGlobe,
  FiLayers,
  FiLayout,
  FiTool,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Skills",
  description:
    "Muhammad Mahfouz Moawad's front-end skills include React, Next.js, TypeScript, Tailwind CSS, accessibility, and responsive Arabic RTL development.",
  path: "/skills",
});

const skillGroups = [
  {
    title: "Core technologies",
    description: "The foundations I use to build for the web.",
    icon: FiCode,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frameworks & libraries",
    description: "Frameworks and libraries used across my projects.",
    icon: FiLayers,
    skills: ["React", "Next.js 14 · App Router", "Framer Motion", "Zustand", "SCSS", "Bootstrap 5"],
  },
  {
    title: "Styling & layout",
    description: "Responsive interfaces with support for different layouts and directions.",
    icon: FiLayout,
    skills: ["Tailwind CSS", "CSS Grid", "Flexbox", "Responsive Design", "RTL Support"],
  },
  {
    title: "Tools & workflow",
    description: "Tools I use to build, inspect, collaborate, and ship.",
    icon: FiTool,
    skills: ["Git", "GitHub", "Figma", "Postman", "Biome", "Vercel", "REST APIs", "JSON"],
  },
  {
    title: "Web concepts",
    description: "Patterns and integrations applied in the portfolio projects.",
    icon: FiTrendingUp,
    skills: ["SSR / SSG", "generateStaticParams", "SEO", "WhatsApp API Integration", "Component Architecture"],
  },
];

const strengths = ["Team player", "Self-learner", "Adaptability", "Responsibility"];

function SkillGroup({ title, description, icon: Icon, skills }) {
  return (
    <article className="h-full rounded-2xl border border-white/10 bg-[#232329] p-5 transition hover:border-accent/40 sm:p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
          <Icon aria-hidden="true" className="text-xl" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-white/60">{description}</p>
        </div>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label={title}>
        {skills.map((skill) => (
          <li key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function SkillsPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
      <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Skills &amp; toolkit</p>
        <h1 className="text-3xl font-bold text-white sm:text-5xl">The tools behind the work</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
          A clear overview of the technologies, practices, and tools I use to build responsive web experiences, including Arabic right-to-left interfaces.
        </p>
      </header>

      <section aria-label="Technical skills" className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => <SkillGroup key={group.title} {...group} />)}
      </section>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <section aria-labelledby="strengths-heading" className="rounded-2xl border border-white/10 bg-[#232329] p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
              <FiUsers aria-hidden="true" className="text-xl" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">How I work</p>
              <h2 id="strengths-heading" className="mt-1 text-xl font-semibold text-white">Professional strengths</h2>
            </div>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2">
            {strengths.map((strength) => <li key={strength} className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/75">{strength}</li>)}
          </ul>
        </section>

        <section aria-labelledby="languages-heading" className="rounded-2xl border border-white/10 bg-[#232329] p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
              <FiGlobe aria-hidden="true" className="text-xl" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Communication</p>
              <h2 id="languages-heading" className="mt-1 text-xl font-semibold text-white">Languages</h2>
            </div>
          </div>
          <ul className="mt-5 flex flex-wrap gap-3">
            <li className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/80"><span className="font-semibold text-white">Arabic</span><span className="ml-2 text-white/55">Native</span></li>
            <li className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/80"><span className="font-semibold text-white">English</span><span className="ml-2 text-white/55">A2</span></li>
          </ul>
        </section>
      </div>

      <p className="mt-8 text-center text-sm text-white/55">
        Want to see these skills in action? <a href="/projects" className="font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">Explore selected projects</a>.
      </p>
    </main>
  );
}
