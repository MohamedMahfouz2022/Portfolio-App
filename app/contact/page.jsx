import { FiMail, FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi";
import ContactForm from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Muhammad Mahfouz Moawad, Front-End Developer, about React, Next.js, or web projects. Email, phone, WhatsApp, and a contact form are available.",
  path: "/contact",
});

const contactMethods = [
  {
    label: "Call",
    value: "+20 101 349 5432",
    href: "tel:+201013495432",
    icon: FiPhone,
  },
  {
    label: "Email",
    value: "mohamedmahfouz.m2@gmail.com",
    href: "mailto:mohamedmahfouz.m2@gmail.com",
    icon: FiMail,
  },
];

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
      <header className="mb-9 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Contact</p>
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl">Let&apos;s talk about your next project</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
          Have a project in mind or want to discuss front-end work? Send a few details below, or reach out directly using the contact options.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
        <aside className="rounded-2xl border border-white/10 bg-[#232329] p-5 sm:p-7" aria-labelledby="contact-details-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Get in touch</p>
          <h2 id="contact-details-heading" className="mt-2 text-2xl font-bold text-white">Contact details</h2>
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
                <span className="block text-xs text-white/55">Location</span>
                <span className="mt-1 block text-sm font-medium text-white sm:text-base">Damanhour, Beheira, Egypt</span>
              </span>
            </li>
          </ul>

          <a
            href="https://wa.me/201013495432"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-accent/35 bg-accent/10 px-4 py-3 text-sm font-semibold text-accent transition hover:bg-accent/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <FiMessageCircle aria-hidden="true" className="text-lg" /> Open WhatsApp directly
          </a>
        </aside>

        <ContactForm />
      </div>
    </main>
  );
}
