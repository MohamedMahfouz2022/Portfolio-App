import {
  FiCode,
  FiGlobe,
  FiLayers,
  FiLayout,
  FiTool,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { createLocalizedPageMetadata } from "@/lib/seo";

export const metadata = createLocalizedPageMetadata({
  locale: "ar",
  title: "المهارات",
  description:
    "مهارات محمد محفوظ معوض في React وNext.js وTypeScript وتصميم الواجهات المتجاوبة وإمكانية الوصول ودعم العربية واتجاه RTL.",
  path: "/skills",
});

const skillGroups = [
  {
    title: "التقنيات الأساسية",
    description: "الأسس التي أعتمد عليها في بناء تجارب الويب.",
    icon: FiCode,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "أطر العمل والمكتبات",
    description: "أطر العمل والمكتبات المستخدمة في مشاريعي.",
    icon: FiLayers,
    skills: ["React", "Next.js 14 · App Router", "Framer Motion", "Zustand", "SCSS", "Bootstrap 5"],
  },
  {
    title: "التنسيق وتخطيط الصفحات",
    description: "واجهات متجاوبة تدعم تخطيطات واتجاهات مختلفة.",
    icon: FiLayout,
    skills: ["Tailwind CSS", "CSS Grid", "Flexbox", "التصميم المتجاوب", "دعم RTL"],
  },
  {
    title: "الأدوات وسير العمل",
    description: "أدوات أستخدمها للتطوير والفحص والتعاون وإطلاق المشاريع.",
    icon: FiTool,
    skills: ["Git", "GitHub", "Figma", "Postman", "Biome", "Vercel", "REST APIs", "JSON"],
  },
  {
    title: "مفاهيم الويب",
    description: "أنماط وتكاملات مطبقة في مشاريع معرض الأعمال.",
    icon: FiTrendingUp,
    skills: ["SSR / SSG", "generateStaticParams", "SEO", "تكامل WhatsApp API", "معمارية المكونات"],
  },
];
const strengths = ["العمل بروح الفريق", "التعلم الذاتي", "القدرة على التكيف", "تحمل المسؤولية"];

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
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">المهارات والأدوات</p>
        <h1 className="text-3xl font-bold text-white sm:text-5xl">الأدوات التي تقف وراء عملي</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
          لمحة واضحة عن التقنيات والممارسات والأدوات التي أستخدمها لبناء تجارب ويب متجاوبة، بما فيها الواجهات العربية ذات اتجاه الكتابة من اليمين إلى اليسار.
        </p>
      </header>
      <section aria-label="المهارات التقنية" className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => <SkillGroup key={group.title} {...group} />)}
      </section>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <section aria-labelledby="strengths-heading" className="rounded-2xl border border-white/10 bg-[#232329] p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
              <FiUsers aria-hidden="true" className="text-xl" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">أسلوبي في العمل</p>
              <h2 id="strengths-heading" className="mt-1 text-xl font-semibold text-white">نقاط القوة المهنية</h2>
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">التواصل</p>
              <h2 id="languages-heading" className="mt-1 text-xl font-semibold text-white">اللغات</h2>
            </div>
          </div>
          <ul className="mt-5 flex flex-wrap gap-3">
            <li className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/80"><span className="font-semibold text-white">العربية</span><span className="ml-2 text-white/55">اللغة الأم</span></li>
            <li className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/80"><span className="font-semibold text-white">الإنجليزية</span><span className="ml-2 text-white/55">A2</span></li>
          </ul>
        </section>
      </div>
      <p className="mt-8 text-center text-sm text-white/55">
        هل ترغب في رؤية هذه المهارات على أرض الواقع؟ <a href="/ar/projects" className="font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">استكشف مشاريع مختارة</a>.
      </p>
    </main>
  );
}
