"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, Code2, TrendingUp, Search, ShieldCheck, type LucideIcon } from "lucide-react";
import { services } from "@/lib/data";
import Reveal from "./Reveal";

const icons: Record<string, LucideIcon> = {
  Compass,
  PenTool,
  Code2,
  TrendingUp,
  Search,
  ShieldCheck,
};

export default function Features() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Services</p>
        <h2 className="mt-2 font-serif text-4xl italic text-foreground sm:text-5xl">
          Everything a premium web presence needs
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          One team, start to finish — strategy, design, development, and the ongoing work that
          keeps a site converting.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[service.icon];
          return (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glow-border group relative h-full rounded-2xl border border-border bg-white/[0.03] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-accent/10 text-accent transition-colors group-hover:border-accent/50 group-hover:text-accent-bright">
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className="mt-5 font-serif text-2xl italic text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
