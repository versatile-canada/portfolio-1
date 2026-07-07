import Image from "next/image";
import { socials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:px-8 sm:pt-24">
      <Reveal>
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <Image
            src="/images/avatar.svg"
            alt="Syed Moinuddin"
            width={112}
            height={112}
            className="h-24 w-24 shrink-0 rounded-full ring-1 ring-border sm:h-28 sm:w-28"
            priority
          />
          <div>
            <h1 className="font-serif text-5xl italic leading-none text-foreground sm:text-6xl">
              Syed
              <br />
              Moinuddin
            </h1>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 max-w-2xl space-y-3 text-lg text-muted">
        <p>
          I currently work as a Frontend Engineer at{" "}
          <a
            href={socials.virallens}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/40 hover:text-foreground"
          >
            Virallens
          </a>
          , currently available for work.
        </p>
        <p>Focused on interfaces and experiences, working remotely from Bangalore, India.</p>
      </Reveal>
    </section>
  );
}
