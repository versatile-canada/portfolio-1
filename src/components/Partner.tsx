import Image from "next/image";
import { socials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Partner() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8 sm:py-16">
      <Reveal>
        <h2 className="font-serif text-4xl italic text-foreground sm:text-5xl">
          Partner With Us. Launch Fast.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          I run{" "}
          <a
            href={socials.zenithStudio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/40 hover:text-foreground"
          >
            Zenith Studio
          </a>
          , an AI-powered agency helping founders go from zero to launch — fast.
        </p>
        <p className="mt-2 max-w-2xl text-lg text-muted">
          We&apos;re gifting 4 months of post-launch support to the first 10 signups.
        </p>
      </Reveal>
      <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-2xl border border-border">
        <Image
          src="/images/partner-graphic.svg"
          alt="Zenith Studio"
          width={1200}
          height={500}
          className="w-full"
        />
      </Reveal>
    </section>
  );
}
