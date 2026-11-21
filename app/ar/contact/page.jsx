import { FiMail, FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi";
import ContactForm from "@/components/ContactForm";
import { createLocalizedPageMetadata } from "@/lib/seo";

export const metadata = createLocalizedPageMetadata({
  locale: "ar",
  title: "التواصل",
  description: "تواصل مع محمد محفوظ معوض، مطور واجهات أمامية، لمناقشة مشاريع React وNext.js والويب. تتوفر خيارات الهاتف والبريد وواتساب ونموذج التواصل.",
  path: "/contact",
});

const contactMethods = [
  {
    label: "اتصل هاتفيًا",
    value: "+20 101 349 5432",
    href: "tel:+201013495432",
    icon: FiPhone,
  },
  {
    label: "البريد الإلكتروني",
    value: "mohamedmahfouz.m2@gmail.com",
    href: "mailto:mohamedmahfouz.m2@gmail.com",
    icon: FiMail,
  },
];

export default function ContactPage() {
  return (
    <main dir="rtl" className="container mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
      <header className="mb-9 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">التواصل</p>
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl">لنتحدث عن مشروعك القادم</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
          هل لديك مشروع ترغب في تنفيذه أو تود مناقشة عمل في مجال الواجهات الأمامية؟ أرسل بعض التفاصيل أدناه، أو تواصل مباشرة عبر إحدى الوسائل المتاحة.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
        <aside className="rounded-2xl border border-white/10 bg-[#232329] p-5 sm:p-7" aria-labelledby="contact-details-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">يسعدني تواصلك</p>
          <h2 id="contact-details-heading" className="mt-2 text-2xl font-bold text-white">بيانات التواصل</h2>
          <ul className="mt-6 space-y-3">
            {contactMethods.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} className="flex min-h-[76px] items-center gap-4 rounded-xl border border-white/10 bg-primary/40 p-4 transition hover:border-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon aria-hidden="true" className="text-xl" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/55">{label}</span>
                    <span className="mt-1 block break-words text-sm font-medium text-white sm:text-base">{value}</span>
                  </span>
                </a>
              </li>
            ))}
            <li className="flex min-h-[76px] items-center gap-4 rounded-xl border border-white/10 bg-primary/40 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <FiMapPin aria-hidden="true" className="text-xl" />
              </span>
              <span>
                <span className="block text-xs text-white/55">الموقع</span>
                <span className="mt-1 block text-sm font-medium text-white sm:text-base">دمنهور، البحيرة، مصر</span>
              </span>
            </li>
          </ul>

          <a
            href="https://wa.me/201013495432"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-accent/35 bg-accent/10 px-4 py-3 text-sm font-semibold text-accent transition hover:bg-accent/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <FiMessageCircle aria-hidden="true" className="text-lg" /> افتح واتساب مباشرة
          </a>
        </aside>

        <ContactForm locale="ar" />
      </div>
    </main>
  );
}
