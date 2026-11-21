"use client";

import { useState } from "react";
import { FiArrowUpRight, FiMessageCircle } from "react-icons/fi";

const fieldClassName =
  "mt-2 h-12 w-full rounded-lg border border-white/15 bg-primary px-4 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25";

export default function ContactForm({ locale = "en" }) {
  const isArabic = locale === "ar";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const text = isArabic
    ? {
        title: "أرسل رسالة",
        intro: "شارك نبذة عمّا ترغب في تنفيذه.",
        name: "الاسم الكامل",
        namePlaceholder: "اكتب اسمك",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        optional: "(اختياري)",
        phonePlaceholder: "اكتب رقم هاتفك",
        message: "كيف يمكنني مساعدتك؟",
        messagePlaceholder: "أخبرني عن فكرتك أو مشروعك أو استفسارك…",
        note: "سيفتح WhatsApp والرسالة مكتوبة مسبقًا. راجعها هناك واختر ما إذا كنت تريد إرسالها؛ لن يرسل هذا النموذج الرسالة تلقائيًا.",
        submit: "المتابعة إلى WhatsApp",
        hello: "مرحبًا، اسمي",
        email: "البريد الإلكتروني",
        phoneLabel: "الهاتف",
        messageLine: "الرسالة:",
      }
    : {
        title: "Send a message",
        intro: "Share a little about what you have in mind.",
        name: "Full name",
        namePlaceholder: "Your name",
        email: "Email address",
        phone: "Phone number",
        optional: "(optional)",
        phonePlaceholder: "Your phone number",
        message: "How can I help?",
        messagePlaceholder: "Tell me about your idea, project, or question…",
        note: "WhatsApp will open with your message filled in. Review it there and choose whether to send; this form does not send it automatically.",
        submit: "Continue to WhatsApp",
        hello: "Hello, my name is",
        email: "Email",
        phoneLabel: "Phone",
        messageLine: "Message:",
      };

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const lines = [
      `${text.hello} ${formData.name.trim()}.`,
      `${text.email}: ${formData.email.trim()}`,
      formData.phone.trim() ? `${text.phoneLabel}: ${formData.phone.trim()}` : null,
      "",
      text.messageLine,
      formData.message.trim(),
    ].filter((line) => line !== null);

    const whatsappUrl = `https://wa.me/201013495432?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-describedby="whatsapp-note"
      dir={isArabic ? "rtl" : "ltr"}
      className="rounded-2xl border border-white/10 bg-[#232329] p-5 sm:p-7"
    >
      <div className="mb-6 flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
          <FiMessageCircle aria-hidden="true" className="text-xl" />
        </span>
        <div>
          <h2 className="text-2xl font-bold text-white">{text.title}</h2>
          <p className="mt-1 text-sm leading-6 text-white/60">{text.intro}</p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-white/80">{text.name} <span className="text-accent" aria-hidden="true">*</span></label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            value={formData.name}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={text.namePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-medium text-white/80">{text.email} <span className="text-accent" aria-hidden="true">*</span></label>
          <input
            id="contact-email"
            name="email"
            type="email"
            dir="ltr"
            autoComplete="email"
            maxLength={254}
            required
            value={formData.email}
            onChange={handleChange}
            className={fieldClassName}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="text-sm font-medium text-white/80">{text.phone} <span className="text-white/45">{text.optional}</span></label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            dir="ltr"
            autoComplete="tel"
            maxLength={40}
            value={formData.phone}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={text.phonePlaceholder}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-medium text-white/80">{text.message} <span className="text-accent" aria-hidden="true">*</span></label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            minLength={10}
            maxLength={2000}
            required
            value={formData.message}
            onChange={handleChange}
            className="mt-2 w-full resize-y rounded-lg border border-white/15 bg-primary px-4 py-3 text-sm leading-6 text-white placeholder:text-white/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
            placeholder={text.messagePlaceholder}
          />
        </div>
      </div>

      <p id="whatsapp-note" className="mt-4 text-xs leading-5 text-white/55">
        {text.note}
      </p>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-primary transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
      >
        {text.submit} <FiArrowUpRight aria-hidden="true" className="text-lg" />
      </button>
    </form>
  );
}
