import Image from "next/image";

export default function Photo({ locale = "en" }) {
  return (
    <div className="relative aspect-square w-full">
      <Image
        src="/Coding-bro.png"
        alt={locale === "ar" ? "رسم توضيحي لمطور يعمل على حاسوب محمول" : "Illustration of a developer working on a laptop"}
        fill
        priority
        sizes="(max-width: 1023px) 80vw, 40vw"
        className="object-contain"
      />
    </div>
  );
}
