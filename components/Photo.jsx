import Image from "next/image";

export default function Photo() {
  return (
    <div className="relative aspect-square w-full">
      <Image
        src="/Coding-bro.png"
        alt="Illustration of a developer working on a laptop"
        fill
        priority
        sizes="(max-width: 1023px) 80vw, 40vw"
        className="object-contain"
      />
    </div>
  );
}
