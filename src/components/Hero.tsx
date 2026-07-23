"use client";

import { useRef, type CSSProperties, type MouseEvent } from "react";
import { socials } from "@/lib/data";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

const stats = [
  { value: "40+", label: "Sites launched" },
  { value: "4.9/5", label: "Average client rating" },
  { value: "2 wks", label: "Avg. turnaround" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    sectionRef.current?.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    sectionRef.current?.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="hero-panel relative isolate overflow-hidden pb-24 pt-40 sm:pb-32 sm:pt-48"
      style={{ "--mx": "50%", "--my": "30%" } as CSSProperties}
    >
      <div aria-hidden className="hero-grid" />
      <div aria-hidden className="hero-spotlight" />
      <div
        aria-hidden
        className="hero-orb pointer-events-none absolute right-10 top-1/4 h-3 w-3 rounded-full bg-accent-bright shadow-[0_0_40px_14px_rgba(243,205,92,0.35)] sm:right-24 sm:h-4 sm:w-4"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 text-center sm:px-12 lg:px-20">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Premium Web Design &amp; Development
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-8 font-sans text-[13vw] font-extrabold leading-[0.92] tracking-tight text-foreground sm:text-[6.5rem] md:text-[7.5rem] lg:text-[8.5rem]">
            Websites Built
            <br />
            To{" "}
            <span className="font-serif italic font-normal text-accent-bright text-glow">
              Convert.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-base text-muted sm:text-lg">
            Versatile designs and builds high-converting websites for blue-collar trades and
            white-collar firms — sites that win the call before your competitor even answers.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton href={socials.bookACall} target="_blank" rel="noopener noreferrer" variant="primary">
            Get a Free Quote
          </MagneticButton>
          <MagneticButton href="#work" variant="secondary">
            See Our Work
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.4} className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl italic text-foreground sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
