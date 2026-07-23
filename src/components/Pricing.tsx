import clsx from "clsx";
import { Check } from "lucide-react";
import { pricingTiers, socials } from "@/lib/data";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
      <Reveal className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Pricing</p>
        <h2 className="mt-2 font-serif text-4xl italic text-foreground sm:text-5xl">
          Straightforward investment, real return
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
          Every package is scoped around a single goal: more calls, quotes, and consultations.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 0.1}>
            <div
              className={clsx(
                "glow-border relative flex h-full flex-col rounded-3xl border p-8 transition-transform hover:-translate-y-1",
                tier.featured
                  ? "border-accent/50 bg-gradient-to-b from-accent/[0.08] to-transparent shadow-[0_0_60px_-15px_rgba(189,134,15,0.4)] lg:scale-105"
                  : "border-border bg-white/[0.03]"
              )}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-wide text-background">
                  Most Popular
                </span>
              )}
              <h3 className="font-serif text-2xl italic text-foreground">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-serif text-4xl italic text-foreground">{tier.price}</span>
                <span className="text-sm text-muted">{tier.cadence}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <MagneticButton
                href={socials.bookACall}
                target="_blank"
                rel="noopener noreferrer"
                variant={tier.featured ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                Get Started
              </MagneticButton>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
