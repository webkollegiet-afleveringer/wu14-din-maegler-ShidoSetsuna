import Image from "next/image";
import { NewsletterForm } from "./NewsletterForm";

export function NewsletterSignup() {
  const headingId = "newsletter-heading";

  return (
    <section
      aria-labelledby={headingId}
      className="relative isolate text-white"
    >
      {/* Background building photo. Decorative, empty alt */}
      <Image
        src="/building.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover -z-20"
      />
      {/* Dark tint for text contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-foreground/85 -z-10"
      />

      <div className="mx-auto max-w-6xl px-6 py-14 flex flex-col md:flex-row md:items-center gap-8">
        <h2
          id={headingId}
          className="font-bold text-2xl md:text-3xl leading-snug flex-1 text-center md:text-left"
        >
          Tilmeld dig vores nyhedsbrev og
          <br />
          hold dig opdateret på boligmarkedet
        </h2>

        <NewsletterForm />
      </div>
    </section>
  );
}
