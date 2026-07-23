import Image from "next/image";
import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8 sm:py-16">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Testimonials</p>
        <h2 className="mt-2 font-serif text-4xl italic text-foreground sm:text-5xl">
          What clients say
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Real feedback from the trades and firms we&apos;ve built premium, high-converting
          websites for.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 0.1}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-white/[0.03] p-6 transition-colors hover:border-accent/30">
              <p className="flex-1 text-sm leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
