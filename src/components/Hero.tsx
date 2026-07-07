import Image from "next/image";
import { socials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="hero-panel relative overflow-hidden">
      <div
        aria-hidden
        className="hero-orb pointer-events-none absolute right-12 top-1/3 h-4 w-4 rounded-full bg-white shadow-[0_0_40px_12px_rgba(255,255,255,0.35)] sm:right-24 sm:h-5 sm:w-5"
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-14 pt-28 sm:px-12 sm:pb-20 sm:pt-36 lg:px-20">
        <Reveal className="flex flex-col items-center text-center">
          <h1 className="font-sans text-[12vw] font-extrabold leading-[0.88] tracking-tight text-[#f3efe4] sm:text-[10rem] md:text-[11.5rem] lg:text-[13rem]">
            Syed
          </h1>
          <div className="relative z-10 mt-1 -mb-5 h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10 sm:mt-3 sm:-mb-16 sm:h-44 sm:w-44 md:h-52 md:w-52">
            <Image src="/images/avatar.svg" alt="Syed Moinuddin" fill priority className="object-cover" />
          </div>
          <h1 className="font-sans text-[12vw] font-extrabold leading-[0.88] tracking-tight text-[#f3efe4] sm:text-[10rem] md:text-[11.5rem] lg:text-[13rem]">
            Moinuddin
          </h1>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-14 flex flex-col gap-6 sm:mt-20 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
        >
          <p className="max-w-sm text-base font-medium text-foreground sm:text-lg">
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
          <p className="max-w-sm text-base font-medium text-foreground sm:text-right sm:text-lg">
            Focused on interfaces and experiences, working remotely from Bangalore, India.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
