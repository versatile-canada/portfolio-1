"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/lib/data";

function StepCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="glow-border flex h-72 w-[300px] shrink-0 flex-col justify-between rounded-2xl border border-border bg-white/[0.03] p-8 sm:w-[380px]">
      <span className="font-serif text-6xl italic text-accent/40">{step}</span>
      <div>
        <h3 className="font-serif text-2xl italic text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}

export default function Timeline() {
  const targetRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-72%"]);

  if (prefersReducedMotion) {
    return (
      <section id="process" className="bg-background-elevated py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Process</p>
          <h2 className="mt-2 font-serif text-4xl italic text-foreground sm:text-5xl">How We Work</h2>
        </div>
        <div className="mt-10 flex gap-6 overflow-x-auto px-6 pb-4 sm:px-8">
          {processSteps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="process" ref={targetRef} className="relative h-[400vh] bg-background-elevated">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Process</p>
          <h2 className="mt-2 font-serif text-4xl italic text-foreground sm:text-5xl">How We Work</h2>
        </div>
        <motion.div style={{ x }} className="mt-12 flex gap-6 pl-6 sm:pl-12">
          {processSteps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
          <div className="w-6 shrink-0 sm:w-12" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}
