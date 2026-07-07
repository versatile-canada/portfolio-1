import Image from "next/image";
import { socials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="hero-panel relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 top-24 h-24 w-24 rounded-full bg-zinc-300/25 blur-2xl sm:right-24 sm:h-32 sm:w-32"
      />

      <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36">
        <Reveal className="flex flex-col items-center text-center">
          <h1 className="font-sans text-[15vw] font-extrabold leading-[1.05] tracking-tight text-[#f3efe4] sm:text-8xl md:text-9xl">
            Syed
          </h1>
          <div className="relative z-10 -my-1 h-24 w-24 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10 sm:-my-2 sm:h-32 sm:w-32 md:h-36 md:w-36">
            <Image src="/images/avatar.svg" alt="Syed Moinuddin" fill priority className="object-cover" />
          </div>
          <h1 className="font-sans text-[15vw] font-extrabold leading-[1.05] tracking-tight text-[#f3efe4] sm:text-8xl md:text-9xl">
            Moinuddin
          </h1>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid gap-4 text-base text-muted sm:mt-16 sm:grid-cols-2 sm:gap-8 sm:text-lg">
          <p className="text-center sm:text-left">
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
          <p className="text-center sm:text-right">
            Focused on interfaces and experiences, working remotely from Bangalore, India.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
